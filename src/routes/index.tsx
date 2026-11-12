import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import pageCss from "@/landing/nexener.css?url";
import pageHtml from "@/landing/nexener.html?raw";
import { initNexener } from "@/landing/nexener.js";

/*
 * Página oficial NEXENER v3.
 * El contenido, el CSS y el script son copias exactas de nexener-web-v3/index.html
 * (ver nexener-web-v3/ESPECIFICACION.md). No se editan aquí: se editan en src/landing/.
 */
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
        content: "Decisiones claras para un sistema eléctrico cada vez más complejo.",
      },
      { property: "og:url", content: "https://nexener.com/" },
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
