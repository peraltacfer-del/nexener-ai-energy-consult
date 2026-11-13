import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import pageCss from "@/landing/nexener.css?url";
import pageHtml from "@/landing/nexener.html?raw";
import { initNexener } from "@/landing/nexener.js";

/*
 * Página oficial NEXENER v3.
 * El contenido, el CSS y el script de la página están en src/landing/ y se editan allí.
 * Video, fotos y tipografías: public/assets.
 */
/* Dirección pública actual del sitio. Si se conecta nexener.com, cambiar aquí. */
const SHARE_IMAGE =
  "https://peraltacfer-del-nexener-ai-energy-consult.peraltac-fer.workers.dev/og-nexener-icono.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXENER | Asesoría en energía, electricidad e inteligencia artificial" },
      {
        name: "description",
        content:
          "NEXENER asesora a operadores de red, reguladores y empresas eléctricas en mercados, planificación y operación de sistemas eléctricos, con ingeniería e inteligencia artificial.",
      },
      { name: "theme-color", content: "#0A1F3D" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "NEXENER | Energy & AI Advisory" },
      {
        property: "og:description",
        content: "Liderando la nueva era del sistema eléctrico.",
      },
      { property: "og:url", content: "https://nexener.com/" },
      /* Imagen al compartir el enlace (LinkedIn, WhatsApp, X). URL absoluta: los sitios la piden así. */
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "NEXENER" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://nexener.com/" },
      { rel: "stylesheet", href: pageCss },
    ],
  }),
  component: Landing,
});

/* El script original se ejecuta una sola vez (React puede montar dos veces en desarrollo) */
let started = false;

function Landing() {
  useEffect(() => {
    if (started) return;
    started = true;
    initNexener();
  }, []);

  /* display:contents: el contenedor no genera caja, así la página queda igual que en el HTML original */
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
