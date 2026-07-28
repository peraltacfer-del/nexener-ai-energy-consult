import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroGrid from "@/assets/hero-grid.jpg";
import controlRoom from "@/assets/control-room.jpg";
import substation from "@/assets/substation.jpg";
import nexenerMark from "@/assets/nexener-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXENER — Consultoría global de IA para el sector eléctrico" },
      {
        name: "description",
        content:
          "NEXENER integra inteligencia artificial y estrategia energética para operadores, generadores y utilities del sector eléctrico en América y Europa.",
      },
      {
        property: "og:title",
        content: "NEXENER — AI Energy Intelligence",
      },
      {
        property: "og:description",
        content:
          "Consultoría élite de IA aplicada al sector eléctrico. Predicción, optimización de red y estrategia para las utilities más complejas del mundo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Capabilities />
      <Metrics />
      <Sectors />
      <Methodology />
      <Insights />
      <ContactCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-sans text-[18px] font-medium tracking-[0.42em] text-foreground">
              NEXENER
            </span>
            <span className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
              Consultoría Energética e IA
            </span>
          </span>
        </a>
        <nav className="hidden gap-8 text-[13px] text-muted-foreground lg:flex">
          <a href="#capacidades" className="hover:text-foreground transition-colors">
            Capacidades
          </a>
          <a href="#sectores" className="hover:text-foreground transition-colors">
            Sectores
          </a>
          <a href="#metodologia" className="hover:text-foreground transition-colors">
            Metodología
          </a>
          <a href="#insights" className="hover:text-foreground transition-colors">
            Insights
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Cambiar tema"
            title={theme === "dark" ? "Modo diurno" : "Modo nocturno"}
            className="grid size-9 place-items-center rounded-full border border-border-strong/60 text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            {theme === "dark" ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
          </button>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:block">
            ES <span className="mx-1">/</span>
            <span className="opacity-60">EN</span>
          </span>
          <a
            href="#contacto"
            className="group hidden items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Solicitar briefing
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={nexenerMark}
      alt="NEXENER"
      width={64}
      height={64}
      className={`h-9 w-auto ${className}`}
    />
  );
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGrid}
          alt="Torres de alta tensión al anochecer"
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>

      <div className="container-x relative flex min-h-[92vh] flex-col justify-end pb-20 pt-40">
        <div className="rise max-w-4xl">
          <SectionMark index="00" label="Global AI Energy Intelligence" />

          <h1 className="mt-8 text-balance font-serif text-[clamp(2.75rem,7vw,6.25rem)] font-light leading-[0.98] tracking-[-0.015em]">
            Inteligencia artificial para
            <br />
            la infraestructura <Accent>eléctrica</Accent> del mundo.
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            NEXENER es la consultora de referencia para utilities, generadores y
            operadores del sector eléctrico. Combinamos décadas de experiencia
            regulatoria con modelos de IA propios para reducir riesgo, optimizar
            activos y capitalizar la transición energética.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contacto"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:brightness-110"
            >
              Agendar consulta ejecutiva
            </a>
            <a
              href="#capacidades"
              className="group inline-flex h-12 items-center gap-3 rounded-full border border-border-strong px-6 font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:bg-surface"
            >
              <span className="grid size-6 place-items-center rounded-full border border-border-strong text-[10px]">
                ↓
              </span>
              Explorar capacidades
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">Presencia operativa</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px] text-muted-foreground">
            {["Madrid","Londres","Nueva York","Toronto","Ciudad de México","São Paulo","Santiago"].map((c, i, arr) => (
              <span key={c} className="flex items-center gap-6">
                <span>{c}</span>
                {i < arr.length - 1 && <span className="text-primary/60">+</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block italic font-serif font-normal text-primary">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[0.35em] w-full text-primary/70"
      >
        <path
          d="M2 8 C 60 2, 140 12, 220 5 S 296 8, 298 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function SectionMark({ index, label }: { index: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      <span className="text-primary">N.º {index}</span>
      <span aria-hidden className="h-px w-8 bg-border-strong" />
      <span>{label}</span>
    </div>
  );
}


function TrustBar() {
  const clients = [
    "IBERPOWER",
    "TRANSCO",
    "NEOGRID",
    "VOLT · ASSET",
    "MERIDIAN ENERGY",
    "AURORA UTILITIES",
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x flex flex-wrap items-center gap-x-12 gap-y-6 py-8">
        <p className="eyebrow">Confían en NEXENER</p>
        <div className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span
              key={c}
              className="font-mono text-[13px] font-medium tracking-[0.18em] text-muted-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      code: "01",
      title: "Pronóstico neuronal de demanda",
      body: "Modelos propios de deep learning para predecir carga, precio spot y comportamiento de mercados eléctricos con precisión sub-horaria.",
    },
    {
      code: "02",
      title: "Optimización de red y activos",
      body: "Dynamic line rating, gestión de congestión y gemelos digitales para maximizar la vida útil de subestaciones y transformadores HVDC.",
    },
    {
      code: "03",
      title: "Estrategia de transición energética",
      body: "Roadmaps de descarbonización, integración de renovables y almacenamiento alineados con metas 2030 y marcos regulatorios locales.",
    },
    {
      code: "04",
      title: "Inteligencia regulatoria y de mercado",
      body: "Análisis comparado de mercados en Norteamérica, LATAM y la UE. Modelos de riesgo político y arbitraje transfronterizo.",
    },
  ];

  return (
    <section id="capacidades" className="relative py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">Capacidades núcleo</p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
              Consultoría de{" "}
              <em className="not-italic text-primary">nueva generación</em>{" "}
              construida sobre IA propietaria.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Cada intervención combina un partner senior con equipos de data
            science aplicados al negocio eléctrico. Sin outsourcing, sin
            plantillas genéricas.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.code}
              className="group relative bg-background p-10 transition-colors hover:bg-surface md:p-14"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-primary">
                  {it.code} / CAP
                </span>
                <span className="text-muted-foreground opacity-0 transition-all group-hover:opacity-100">
                  →
                </span>
              </div>
              <h3 className="mt-16 font-serif text-2xl font-normal leading-snug md:text-[28px]">
                {it.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    { v: "14.2GW", l: "Capacidad bajo gestión analítica" },
    { v: "$4.8B", l: "Valor de activos optimizados" },
    { v: "18.5%", l: "Uplift promedio de eficiencia" },
    { v: "42", l: "Mercados eléctricos cubiertos" },
  ];
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="container-x grid grid-cols-2 gap-10 py-20 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-serif text-4xl font-light tracking-tight md:text-5xl">
              {s.v}
            </div>
            <div className="mt-3 h-px w-8 bg-primary" />
            <p className="mt-4 max-w-[16ch] text-[13px] leading-relaxed text-muted-foreground">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sectors() {
  const rows = [
    {
      k: "01",
      t: "Generación",
      d: "Portafolios renovables, nuclear, hidrógeno y firmes. Despacho óptimo y pronóstico de disponibilidad.",
    },
    {
      k: "02",
      t: "Transmisión",
      d: "Análisis de congestión, dynamic line rating y planificación de expansión de larga distancia.",
    },
    {
      k: "03",
      t: "Distribución",
      d: "Integración de DER, gestión activa de red y balanceo bidireccional en redes de baja y media tensión.",
    },
    {
      k: "04",
      t: "Comercialización",
      d: "Diseño tarifario, elasticidad de demanda y estrategias de retail para clientes industriales globales.",
    },
  ];
  return (
    <section id="sectores" className="py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="sticky top-28 overflow-hidden rounded-lg border border-border">
            <img
              src={controlRoom}
              alt="Sala de control eléctrico"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/90 to-transparent p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                LIVE / OPS · CENTER
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                52.4879° N · 13.4287° E
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-6">Cobertura sectorial</p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
            De la turbina al medidor. Una sola{" "}
            <em className="not-italic text-primary">capa de inteligencia</em>.
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Rompemos los silos entre generación, transmisión y comercialización
            aplicando una arquitectura unificada de datos que refleja toda la
            cadena de valor eléctrica.
          </p>

          <div className="mt-12 space-y-6">
            {rows.map((r) => (
              <div
                key={r.k}
                className="grid grid-cols-[auto_1fr] gap-x-8 border-t border-border pt-6"
              >
                <span className="font-mono text-[11px] tracking-[0.22em] text-primary">
                  {r.k}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-normal">{r.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    {
      n: "I",
      t: "Diagnóstico",
      d: "Auditoría integral de activos, datos operativos y exposición regulatoria en un sprint intensivo de 6 semanas.",
    },
    {
      n: "II",
      t: "Modelado",
      d: "Diseño y entrenamiento de modelos de IA con datos propios del cliente, benchmark contra mercados comparables.",
    },
    {
      n: "III",
      t: "Despliegue",
      d: "Integración con sistemas SCADA, EMS y ERP existentes. Governance ejecutiva y ciclos de mejora continua.",
    },
    {
      n: "IV",
      t: "Escalado",
      d: "Extensión regional multi-jurisdicción con oficina de programa NEXENER embebida en la operación del cliente.",
    },
  ];
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden border-y border-border bg-surface/20 py-32"
    >
      <div className="container-x">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-6">Metodología</p>
            <h2 className="max-w-2xl text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
              Un marco de trabajo probado en las redes eléctricas más{" "}
              <em className="not-italic text-primary">complejas</em> del planeta.
            </h2>
          </div>
        </div>

        <div className="hairline mb-16" />

        <div className="grid gap-px bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-5xl font-light text-primary">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  fase
                </span>
              </div>
              <h3 className="mt-10 font-serif text-2xl font-normal">{s.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const posts = [
    {
      tag: "Mercados",
      title:
        "El próximo cuello de botella no es la generación. Es la interconexión.",
      meta: "Análisis · 12 min · 2025",
    },
    {
      tag: "IA aplicada",
      title:
        "Cómo los modelos difusos superan a los ARIMA en pronóstico de precios spot.",
      meta: "Whitepaper · 24 min · 2025",
    },
    {
      tag: "Regulación",
      title:
        "Panorama comparado: mercados de capacidad en EE.UU., México y España.",
      meta: "Reporte · 48 pp · 2025",
    },
  ];
  return (
    <section id="insights" className="py-32">
      <div className="container-x">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-6">Publicaciones recientes</p>
            <h2 className="max-w-xl text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
              Investigación aplicada, no marketing.
            </h2>
          </div>
          <a
            href="#"
            className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-primary hover:underline md:inline"
          >
            Archivo completo →
          </a>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col justify-between bg-background p-8 transition-colors hover:bg-surface md:min-h-[340px] md:p-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                {p.tag}
              </span>
              <h3 className="mt-16 font-serif text-2xl font-normal leading-snug transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{p.meta}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={substation}
          alt=""
          width={1400}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container-x grid gap-16 py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-6">Iniciar conversación</p>
          <h2 className="max-w-xl text-balance font-serif text-5xl font-light leading-[1.05] md:text-6xl">
            Escale su infraestructura para la{" "}
            <em className="not-italic text-primary">era autónoma</em>.
          </h2>
          <p className="mt-8 max-w-lg text-muted-foreground">
            Nuestros partners regionales responden en menos de 48 horas.
            Coordinamos una sesión ejecutiva confidencial para explorar el
            alcance de su iniciativa.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <dt className="eyebrow">Partnerships</dt>
              <dd className="mt-2 text-sm">partnerships@nexener.com</dd>
            </div>
            <div>
              <dt className="eyebrow">Prensa</dt>
              <dd className="mt-2 text-sm">press@nexener.com</dd>
            </div>
          </dl>
        </div>

        <form className="rounded-lg border border-border bg-surface/60 p-8 backdrop-blur-md md:p-10">
          <div className="space-y-6">
            <Field label="Nombre completo" placeholder="Ana Rodríguez" />
            <Field
              label="Correo corporativo"
              placeholder="ana@empresa.com"
              type="email"
            />
            <Field label="Organización" placeholder="Nombre de la utility" />
            <div>
              <label className="eyebrow block">Región</label>
              <select className="mt-3 w-full appearance-none border-b border-border bg-transparent py-2.5 text-sm text-foreground outline-none focus:border-primary">
                <option>Norteamérica</option>
                <option>Latinoamérica</option>
                <option>Europa</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="eyebrow block">Contexto del proyecto</label>
              <textarea
                rows={3}
                className="mt-3 w-full resize-none border-b border-border bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="Describa brevemente el desafío"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all hover:brightness-110"
          >
            Solicitar briefing confidencial
          </button>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Respuesta garantizada en 48 h
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  const cols = [
    {
      h: "Norteamérica",
      items: ["Nueva York", "Toronto", "San Francisco"],
    },
    { h: "Latinoamérica", items: ["Ciudad de México", "São Paulo", "Santiago"] },
    { h: "Europa", items: ["Madrid", "Londres", "Berlín"] },
    {
      h: "Firma",
      items: ["Governance", "Carreras", "Prensa"],
    },
  ];
  return (
    <footer className="border-t border-border bg-background pb-10 pt-24">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-mono text-[13px] font-semibold tracking-[0.28em]">
                NEXENER
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Consultoría global de IA aplicada al sector eléctrico. Arquitectos
              de infraestructura crítica para la era autónoma.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="eyebrow mb-5">{c.h}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {c.items.map((i) => (
                    <li key={i} className="hover:text-foreground cursor-pointer">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:items-center">
          <span>© MMXXV NEXENER Advisory Group. Todos los derechos reservados.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary">
              Legal
            </a>
            <a href="#" className="hover:text-primary">
              Seguridad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
