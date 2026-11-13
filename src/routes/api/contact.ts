import { createFileRoute } from "@tanstack/react-router";

/*
 * POST /api/contact — recibe el formulario de contacto y lo guarda en Supabase.
 *
 * Variables de entorno (en Cloudflare: Worker → Settings → Variables and Secrets):
 *   SUPABASE_URL                 p. ej. https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY    clave secreta (secret / service_role). Nunca va al navegador.
 *
 * Si faltan, responde 503 y la página vuelve al plan anterior (abre el correo del visitante).
 */

const MAX_BODY = 20_000;
const MIN_FILL_MS = 2_500; // nadie completa el formulario en menos de 2,5 s: si pasa, es un robot
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type ContactInput = {
  name?: unknown;
  org?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  lang?: unknown;
  website?: unknown; // campo trampa: invisible para personas
  t?: unknown; // milisegundos desde que se abrió la página
};

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Solo se aceptan envíos desde el propio sitio
        const origin = request.headers.get("origin");
        if (origin && new URL(origin).host !== new URL(request.url).host) {
          return json(403, { ok: false, error: "forbidden" });
        }

        const raw = await request.text();
        if (raw.length > MAX_BODY) return json(413, { ok: false, error: "too_large" });

        let input: ContactInput;
        try {
          input = JSON.parse(raw) as ContactInput;
        } catch {
          return json(400, { ok: false, error: "bad_json" });
        }

        // Filtro de robots: se responde "ok" para no darles pistas, pero no se guarda nada
        const elapsed = typeof input.t === "number" ? input.t : 0;
        if (text(input.website, 200) || elapsed < MIN_FILL_MS) return json(200, { ok: true });

        const row = {
          name: text(input.name, 120),
          company: text(input.org, 160) || null,
          email: text(input.email, 254),
          topic: text(input.topic, 120) || null,
          message: text(input.message, 5000),
          lang: input.lang === "en" ? "en" : "es",
          user_agent: (request.headers.get("user-agent") || "").slice(0, 400) || null,
        };
        if (!row.name || !row.message || !EMAIL_RE.test(row.email)) {
          return json(422, { ok: false, error: "invalid" });
        }

        const url = process.env.SUPABASE_URL;
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!url || !key) return json(503, { ok: false, error: "not_configured" });

        // Claves nuevas (sb_secret_…) van solo en "apikey"; las antiguas (JWT) también en Authorization
        const headers: Record<string, string> = {
          apikey: key,
          "content-type": "application/json",
          prefer: "return=minimal",
        };
        if (key.startsWith("eyJ")) headers.authorization = `Bearer ${key}`;

        try {
          const res = await fetch(`${url.replace(/\/+$/, "")}/rest/v1/contact_requests`, {
            method: "POST",
            headers,
            body: JSON.stringify(row),
          });
          if (!res.ok) {
            console.error("Supabase rechazó el mensaje", res.status, await res.text());
            return json(502, { ok: false, error: "storage_failed" });
          }
        } catch (error) {
          console.error("No se pudo conectar con Supabase", error);
          return json(502, { ok: false, error: "storage_unreachable" });
        }

        return json(201, { ok: true });
      },
    },
  },
});
