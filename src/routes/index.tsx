import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroGrid from "@/assets/hero-grid.jpg";
import sectorsOps from "@/assets/sectors-ops.jpg";
import substation from "@/assets/substation.jpg";
import nexenerMark from "@/assets/nexener-mark.png";
import nexusEngineering from "@/assets/nexus-engineering.jpg";
import nexusIntelligence from "@/assets/nexus-intelligence.jpg";
import nexusTransformation from "@/assets/nexus-transformation.jpg";
import teamJaime from "@/assets/team-jaime.jpg";
import teamFernanda from "@/assets/team-fernanda.jpg";
import teamJaviera from "@/assets/team-javiera.jpg";
import { LangProvider, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXENER — Soluciones Energéticas e IA para el sector eléctrico" },
      {
        name: "description",
        content:
          "NEXENER diseña e implementa soluciones de energía e inteligencia artificial para operadores, generadores y utilities del sector eléctrico en América y Europa.",
      },
      {
        property: "og:title",
        content: "NEXENER — Soluciones Energéticas e IA para el sector eléctrico",
      },
      {
        property: "og:description",
        content:
          "NEXENER diseña e implementa soluciones de energía e inteligencia artificial para operadores, generadores y utilities del sector eléctrico en América y Europa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <Nexus />
        <Capabilities />
        <SignalLab />
        <Ecosystem />
        <Sectors />
        <Methodology />
        <Team />
        <ContactCTA />
        <Footer />
      </div>
    </LangProvider>
  );
}


function Nav() {
  const { lang, setLang, t } = useLang();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4 py-2 md:h-18 md:py-3">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <Logo />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-sans text-[16px] font-medium tracking-[0.38em] text-wordmark md:text-[18px] md:tracking-[0.42em]">
              NEXENER
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
              {t.nav.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden gap-7 whitespace-nowrap text-[13px] text-muted-foreground lg:flex">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t.nav.themeAria}
            title={theme === "dark" ? t.nav.themeDay : t.nav.themeNight}
            className="grid size-9 place-items-center rounded-full border border-border-strong/60 text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            {theme === "dark" ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
          </button>

          <span className="hidden items-center font-mono text-[10px] tracking-[0.2em] sm:flex">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={
                lang === "es"
                  ? "text-foreground"
                  : "text-muted-foreground opacity-60 transition-opacity hover:opacity-100"
              }
            >
              ES
            </button>
            <span className="mx-1 text-muted-foreground">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "text-foreground"
                  : "text-muted-foreground opacity-60 transition-opacity hover:opacity-100"
              }
            >
              EN
            </button>
          </span>

          <a
            href="#contacto"
            className="hidden items-center rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={t.nav.menuAria}
            className="grid size-9 place-items-center rounded-full border border-border-strong/60 text-foreground/80 transition-colors hover:bg-surface lg:hidden"
          >
            <MenuIcon open={open} className="size-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col pb-5 pt-2">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-[15px] text-foreground/85 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-5 flex items-center justify-between gap-4">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-primary font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
              >
                {t.nav.cta}
              </a>
              <span className="flex items-center font-mono text-[11px] tracking-[0.2em] sm:hidden">
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={lang === "es" ? "text-foreground" : "text-muted-foreground opacity-60"}
                >
                  ES
                </button>
                <span className="mx-1 text-muted-foreground">/</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={lang === "en" ? "text-foreground" : "text-muted-foreground opacity-60"}
                >
                  EN
                </button>
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={nexenerMark}
      alt="NEXENER"
      width={64}
      height={64}
      className={`h-10 w-auto md:h-12 ${className}`}
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
  const { t } = useLang();
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroGrid}
          alt=""
          width={1920}
          height={1200}
          className="h-full w-full object-cover opacity-72 light:opacity-62 light:contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/45 to-background light:from-background/30 light:via-background/50" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>

      <div className="container-x relative flex min-h-[80vh] flex-col justify-end pb-12 pt-24 md:min-h-[86vh] md:pb-16 md:pt-36">
        <div className="rise max-w-4xl">
          <SectionMark label={t.hero.mark} />

          <h1 className="mt-8 text-balance font-serif text-[clamp(2.25rem,4vw,3.6rem)] font-light leading-[1.08] tracking-[-0.015em]">
            {t.hero.h1}
          </h1>

          <p className="mt-8 max-w-xl text-justify text-lg leading-relaxed text-muted-foreground hyphens-auto">
            {t.hero.p}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contacto"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:brightness-110"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#capacidades"
              className="group inline-flex h-10 items-center gap-2.5 rounded-full border border-border-strong px-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:bg-surface"
            >
              <span aria-hidden className="text-[13px]">
                ↓
              </span>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-border pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow">{t.hero.presence}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px] text-muted-foreground">
            {t.hero.cities.map((c, i, arr) => (
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

function TechGrid() {
  return <div aria-hidden className="technical-grid -z-10" />;
}

/* Iconos de línea para los servicios contratables */
function PlatformIcon({ code }: { code: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-[21px]"
    >
      {code === "1" ? (
        <>
          <rect x="6" y="8" width="12" height="10" rx="2.5" />
          <path d="M12 8V4.5M9.5 4.5h5" />
          <path d="M3 12h3M18 12h3" />
          <circle cx="10" cy="13" r=".6" fill="currentColor" />
          <circle cx="14" cy="13" r=".6" fill="currentColor" />
        </>
      ) : (
        <>
          <path d="M3 20V4" />
          <path d="M3 20h18" />
          <path d="m6 15 4-5 3.5 3L20 6" />
          <circle cx="10" cy="10" r="1.3" />
          <circle cx="20" cy="6" r="1.3" />
        </>
      )}
    </svg>
  );
}

function CapabilityIcon({ code }: { code: string }) {
  const shape = () => {
    switch (code) {
      case "1": // Integración a la red — conector
        return (
          <>
            <path d="M9 2v6M15 2v6" />
            <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
            <path d="M12 17v5" />
          </>
        );
      case "2": // Estudios — forma de onda
        return <path d="M2 12h4l3-8 6 16 3-8h4" />;
      case "3": // Estabilidad — indicador
        return (
          <>
            <path d="M3 17a9 9 0 1 1 18 0" />
            <path d="m12 17 4-6" />
          </>
        );
      case "4": // Mercados — tendencia
        return (
          <>
            <path d="M3 3v18h18" />
            <path d="m7 14 4-4 3 3 5-6" />
          </>
        );
      case "5": // Datos — dispersión
        return (
          <>
            <path d="M3 3v18h18" />
            <circle cx="9" cy="15" r="1.4" />
            <circle cx="14" cy="10" r="1.4" />
            <circle cx="18" cy="14" r="1.4" />
          </>
        );
      default: // IA — chip
        return (
          <>
            <rect x="7" y="7" width="10" height="10" rx="2" />
            <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
          </>
        );
    }
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-[19px]"
    >
      {shape()}
    </svg>
  );
}

function SectionMark({ index, label }: { index?: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      {index && (
        <>
          <span className="text-primary">N.º {index}</span>
          <span aria-hidden className="h-px w-8 bg-border-strong" />
        </>
      )}
      <span>{label}</span>
    </div>
  );
}



function Nexus() {
  const { t } = useLang();
  return (
    <section id="nexo" className="relative isolate overflow-hidden py-14 md:py-24">
      <div className="absolute inset-0 -z-20">
        <img
          src={heroGrid}
          alt=""
          width={1920}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.22] light:opacity-[0.34] light:contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background light:via-background/55" />
      </div>
      <TechGrid />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionMark index="1" label={t.nexus.mark} />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
              {t.nexus.h2}
            </h2>
          </div>
          <p className="max-w-md text-justify text-muted-foreground hyphens-auto">{t.nexus.p}</p>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {t.nexus.items.map((it) => (
            <article
              key={it.code}
              className="group relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-lg border border-border-strong/45 bg-surface p-7 transition-colors hover:border-primary/50 md:min-h-[320px] md:p-10"
            >
              <img
                src={nexusImages[it.code]}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.32] transition-opacity duration-700 group-hover:opacity-[0.45] light:opacity-[0.6] light:contrast-125 light:saturate-110 light:group-hover:opacity-[0.75]"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-surface via-surface/45 to-transparent light:via-surface/60 light:to-surface/10"
              />
              <h3 className="font-serif text-[1.9rem] font-light leading-[1.15] md:text-[2.1rem]">
                {it.title}
              </h3>
              <div className="mt-5 h-px w-10 bg-primary/60" />
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const { t } = useLang();
  return (
    <section
      id="plataformas"
      className="relative isolate overflow-hidden border-y border-border py-14 md:py-24"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionMark index="4" label={t.ecosystem.mark} />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
              {t.ecosystem.h2}
            </h2>
          </div>
          <p className="max-w-md text-justify text-muted-foreground hyphens-auto">{t.ecosystem.p}</p>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {t.ecosystem.platforms.map((p) => (
            <article
              key={p.name}
              className="group relative isolate flex flex-col justify-between overflow-hidden bg-background p-8 transition-colors hover:bg-surface md:min-h-[440px] md:p-14"
            >
              {/* Marcas de esquina y barrido: lenguaje de instrumento */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 size-5 border-l border-t border-primary/0 transition-colors duration-500 group-hover:border-primary/60 md:left-7 md:top-7"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-5 size-5 border-b border-r border-primary/0 transition-colors duration-500 group-hover:border-primary/60 md:bottom-7 md:right-7"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 group-hover:scale-x-100"
              />

              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border-strong/50 text-primary transition-all duration-500 group-hover:border-primary/60 group-hover:bg-primary/10">
                    <PlatformIcon code={p.code} />
                  </span>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {p.code} / 2
                  </span>
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  {p.kicker}
                </p>
                <h3 className="mt-3 font-sans text-[2.4rem] font-medium tracking-[0.14em] text-foreground md:text-5xl">
                  {p.name}
                </h3>
                <div className="mt-6 h-px w-12 bg-primary/70 transition-all duration-500 group-hover:w-24" />
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>

              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-primary/50 bg-primary/10 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {p.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="mt-10 inline-flex w-fit items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span aria-hidden className="scope-pulse size-1.5 rounded-full bg-primary" />
                  {p.status}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Cada pilar del nexo lleva una imagen afín a su concepto */
const nexusImages: Record<string, string> = {
  "1": nexusEngineering,       // Ingeniería
  "2": nexusIntelligence,      // Inteligencia
  "3": nexusTransformation,    // Transformación
};

const teamPhotos: Record<string, string> = {
  "Jaime Peralta": teamJaime,
  "Fernanda Peralta": teamFernanda,
  "Javiera Peralta": teamJaviera,
};

function Team() {
  const { t } = useLang();
  return (
    <section id="equipo" className="py-14 md:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionMark index="7" label={t.team.mark} />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
              {t.team.h2}
            </h2>
          </div>
          <p className="max-w-md text-justify text-muted-foreground hyphens-auto">{t.team.p}</p>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {t.team.people.map((person) => (
            <article
              key={person.name}
              className="bg-background p-8 transition-colors hover:bg-surface md:p-12"
            >
              <div className="size-20 overflow-hidden rounded-full border border-border-strong/70 ring-1 ring-primary/20">
                <img
                  src={teamPhotos[person.name]}
                  alt={person.name}
                  width={480}
                  height={480}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                {person.role}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-normal">
                {person.name}
              </h3>
              <div className="mt-5 h-px w-8 bg-border-strong" />
              <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
                {person.area}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { t } = useLang();
  return (
    <section id="capacidades" className="relative py-14 md:py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionMark index="2" label={t.capabilities.mark} />
            <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
              {t.capabilities.h2}
            </h2>
          </div>

          <p className="max-w-md text-justify text-muted-foreground hyphens-auto">{t.capabilities.p}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.items.map((it) => (
            <article
              key={it.code}
              className="group relative bg-background p-7 transition-colors hover:bg-surface md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[2.5rem] font-light leading-none text-primary/90">
                  {it.code}
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border-strong/50 text-primary transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
                  <CapabilityIcon code={it.code} />
                </span>
              </div>
              <div className="mt-7 h-px w-10 bg-primary/70" />
              <h3 className="mt-5 font-serif text-xl font-normal leading-[1.2] md:text-[22px]">
                {it.title}
              </h3>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalLab() {
  const { t } = useLang();
  const [mode, setMode] = useState<"analog" | "digital">("digital");
  const [freq, setFreq] = useState(50.0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setFreq(50 + (Math.random() * 0.05 - 0.025)),
      1800,
    );
    return () => clearInterval(id);
  }, []);

  const digital = mode === "digital";

  return (
    <section id="laboratorio" className="relative isolate overflow-hidden border-y border-border py-14 md:py-24">
      <TechGrid />
      <div className="container-x grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionMark index="3" label={t.signal.mark} />
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
            {t.signal.h2}
          </h2>
          <p className="mt-6 max-w-lg text-justify text-muted-foreground hyphens-auto">{t.signal.p}</p>
          <div className="mt-10 space-y-4">
            {t.signal.points.map((p) => (
              <div
                key={p}
                className="flex items-start gap-4 border-t border-border pt-4 text-[15px] text-foreground/85"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-surface/50">
          <div className="flex flex-wrap items-center gap-4 border-b border-border px-5 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {t.signal.channel}
            </span>
            <div
              role="group"
              aria-label={t.signal.switchAria}
              className="flex gap-1 rounded-full border border-border p-1"
            >
              {(["analog", "digital"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    mode === m
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "analog" ? t.signal.analog : t.signal.digital}
                </button>
              ))}
            </div>
            <span className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              <span
                aria-hidden
                className="scope-pulse size-1.5 rounded-full bg-primary"
              />
              {t.signal.live}
            </span>
          </div>

          <svg
            viewBox="0 0 720 300"
            role="img"
            aria-label={t.signal.scopeAlt}
            className="block h-auto w-full"
          >
            <defs>
              <pattern
                id="scope-grid"
                width="45"
                height="45"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M45 0H0V45"
                  fill="none"
                  stroke="var(--color-border-strong)"
                  strokeWidth="1"
                />
              </pattern>
              <path
                id="path-analog"
                d="M45 150C75 85 105 85 135 150S195 215 225 150 285 85 315 150 375 215 405 150 465 85 495 150 555 215 585 150 645 85 690 150"
              />
              <path
                id="path-digital"
                d="M45 150C75 85 105 85 135 150S195 215 225 150 285 85 315 150L360 150V92H435V208H510V92H585V208H660V92H690"
              />
              <filter id="scope-glow" x="-25%" y="-60%" width="150%" height="220%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="scope-vignette" cx="50%" cy="45%" r="72%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.16" />
                <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.03" />
                <stop offset="100%" stopColor="var(--color-background)" stopOpacity="0.55" />
              </radialGradient>
              <linearGradient id="scan-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="720" height="300" fill="var(--color-surface-2)" />
            <rect width="720" height="300" fill="url(#scope-grid)" opacity="0.16" />
            <rect width="720" height="300" fill="url(#scope-vignette)" />
            <rect
              className="scope-scan"
              x="-90"
              y="0"
              width="90"
              height="300"
              fill="url(#scan-fade)"
            />
            <g
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.45"
            >
              <path d="M18 42V18h24M702 42V18h-24M18 258v24h24M702 258v24h-24" />
            </g>
            <line
              x1="28"
              y1="150"
              x2="692"
              y2="150"
              stroke="var(--color-border-strong)"
              strokeDasharray="3 7"
            />

            {digital ? (
              <g key="digital" filter="url(#scope-glow)">
                <path
                  className="trace-draw"
                  d="M45 150C75 85 105 85 135 150S195 215 225 150 285 85 315 150"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <line
                  x1="338"
                  y1="46"
                  x2="338"
                  y2="254"
                  stroke="var(--color-border-strong)"
                  strokeDasharray="5 7"
                />
                <path
                  className="trace-draw"
                  d="M315 150H360V92H435V208H510V92H585V208H660V92H690"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle r="3.5" fill="var(--color-foreground)">
                  <animateMotion dur="4.4s" repeatCount="indefinite">
                    <mpath href="#path-digital" />
                  </animateMotion>
                </circle>
              </g>
            ) : (
              <g key="analog" filter="url(#scope-glow)">
                <path
                  className="trace-draw"
                  d="M45 150C75 85 105 85 135 150S195 215 225 150 285 85 315 150 375 215 405 150 465 85 495 150 555 215 585 150 645 85 690 150"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <circle r="3.5" fill="var(--color-foreground)">
                  <animateMotion dur="4.4s" repeatCount="indefinite">
                    <mpath href="#path-analog" />
                  </animateMotion>
                </circle>
              </g>
            )}

            <text
              x="45"
              y="278"
              fill="var(--color-muted-foreground)"
              fontSize="11"
              fontFamily="var(--font-mono)"
            >
              {t.signal.physics}
            </text>
            <text
              x="675"
              y="278"
              textAnchor="end"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fill={digital ? "var(--color-primary)" : "var(--color-muted-foreground)"}
              opacity={digital ? 1 : 0.35}
            >
              {t.signal.digitalLabel}
            </text>
          </svg>

          <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-foreground/80">f = {freq.toFixed(2)} Hz</span>
            <span>{t.signal.sampling}</span>
            <span className="hidden sm:block">{t.signal.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const { t } = useLang();
  return (
    <section id="sectores" className="py-14 md:py-24">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative overflow-hidden rounded-lg border border-border lg:h-full">
          <img
            src={sectorsOps}
            alt={t.sectors.imageAlt}
            width={1086}
            height={1448}
            loading="lazy"
            className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-cover"
          />
        </div>
        <div>
          <SectionMark index="5" label={t.sectors.mark} />
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
            {t.sectors.h2}
          </h2>

          <p className="mt-6 max-w-lg text-justify text-muted-foreground hyphens-auto">{t.sectors.p}</p>

          <div className="mt-12 space-y-6">
            {t.sectors.rows.map((r) => (
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
  const { t } = useLang();
  return (
    <section
      id="metodologia"
      className="relative isolate overflow-hidden border-y border-border py-14 md:py-24"
    >
      <TechGrid />
      <div className="container-x">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionMark index="6" label={t.methodology.mark} />
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-[3.25rem]">
              {t.methodology.h2}
            </h2>
          </div>

        </div>

        <div className="hairline mb-10" />

        <div className="grid gap-px bg-border md:grid-cols-4">
          {t.methodology.steps.map((s) => (
            <div key={s.n} className="bg-deep p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-5xl font-light text-primary">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.methodology.phase}
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

function ContactCTA() {
  const { t } = useLang();
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden border-t border-border"
    >
      <TechGrid />
      <div className="absolute inset-0 -z-10">
        <img
          src={substation}
          alt=""
          width={1400}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover opacity-15 light:opacity-28 light:contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container-x grid gap-12 py-20 md:gap-16 md:py-32 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionMark index="8" label={t.contact.mark} />
          <h2 className="mt-6 max-w-xl text-balance font-serif text-5xl font-light leading-[1.02] tracking-[-0.015em] md:text-6xl">
            {t.contact.h2}
          </h2>

          <dl className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <dt className="eyebrow">{t.contact.partnerships}</dt>
              <dd className="mt-2 text-sm">partnerships@nexener.com</dd>
            </div>
            <div>
              <dt className="eyebrow">{t.contact.press}</dt>
              <dd className="mt-2 text-sm">press@nexener.com</dd>
            </div>
          </dl>
          <p className="mt-10 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {t.contact.place}
          </p>
        </div>

        <form className="rounded-lg border border-border bg-surface/60 p-7 backdrop-blur-md md:p-8">
          <div className="space-y-4">
            <Field label={t.contact.fName} placeholder={t.contact.fNamePh} />
            <Field
              label={t.contact.fEmail}
              placeholder={t.contact.fEmailPh}
              type="email"
            />
            <Field label={t.contact.fOrg} placeholder={t.contact.fOrgPh} />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/90">{t.contact.fRegion}</label>
                <select className="mt-2 w-full appearance-none border-b border-border-strong/55 bg-transparent py-2 text-sm text-foreground outline-none focus:border-primary">
                  {t.contact.regions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/90">{t.contact.fService}</label>
                <select
                  defaultValue=""
                  className="mt-2 w-full appearance-none border-b border-border-strong/55 bg-transparent py-2 text-sm text-foreground outline-none focus:border-primary"
                >
                  <option value="" disabled>
                    {t.contact.servicePh}
                  </option>
                  {t.contact.serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/90">{t.contact.fContext}</label>
              <textarea
                rows={2}
                className="mt-2 w-full resize-none border-b border-border-strong/55 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder={t.contact.fContextPh}
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all hover:brightness-110"
          >
            {t.contact.submit}
          </button>
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
      <label className="block font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/90">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-border-strong/55 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-background pb-8 pt-14">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-mono text-[13px] font-semibold tracking-[0.28em] text-wordmark">
                NEXENER
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.p}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.footer.cols.map((c) => (
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

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:items-center">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-8">
            {t.footer.links.map((l) => (
              <a key={l} href="#" className="hover:text-primary">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
