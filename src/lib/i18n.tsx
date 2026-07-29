import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

const es = {
  nav: {
    links: [
      { href: "#nexo", label: "Nosotros" },
      { href: "#capacidades", label: "Servicios" },
      { href: "#plataformas", label: "Plataformas" },
      { href: "#sectores", label: "Industrias" },
      { href: "#equipo", label: "Equipo" },
    ],
    tagline: "Soluciones Energéticas e IA",
    themeAria: "Cambiar tema",
    themeDay: "Modo diurno",
    themeNight: "Modo nocturno",
    cta: "Contacto",
    menuAria: "Abrir menú",
  },
  hero: {
    mark: "Inteligencia energética global con IA",
    h1: (
      <>
        Inteligencia artificial para
        <br />
        la infraestructura <Accent>eléctrica</Accent> del mundo.
      </>
    ),
    p: "Soluciones para utilities, generadores y operadores eléctricos: décadas de ingeniería y modelos de IA propios para reducir riesgo, optimizar activos y liderar la transición energética.",
    cta1: "Agendar una consulta",
    cta2: "Explorar capacidades",
    imageAlt: "Centro de mando NEXENER con paneles de análisis energético",
    presence: "Presencia operativa",
    cities: [
      "Madrid",
      "Londres",
      "Nueva York",
      "Toronto",
      "Ciudad de México",
      "São Paulo",
      "Santiago",
    ],
  },
  capabilities: {
    mark: "Capacidades núcleo",
    h2: (
      <>
        Soluciones de <Accent>nueva generación</Accent> construidas sobre IA
        propietaria.
      </>
    ),
    p: "Cada intervención combina un socio senior con equipos de ciencia de datos aplicados al negocio eléctrico. Sin subcontratación, sin plantillas genéricas.",
    items: [
      {
        code: "1",
        title: "Integración a la red",
        body: "Estudios de conexión, cumplimiento de normativa técnica e integración de generación renovable.",
      },
      {
        code: "2",
        title: "Estudios de sistemas eléctricos",
        body: "Flujos de potencia, cortocircuitos, contingencias y análisis dinámico RMS, EMT y de estabilidad transitoria.",
      },
      {
        code: "3",
        title: "Estabilidad y fortaleza de red",
        body: "Estabilidad de frecuencia, inercia, fortaleza del sistema, tecnologías formadoras de red y desempeño dinámico.",
      },
      {
        code: "4",
        title: "Mercados eléctricos e inversión",
        body: "Simulación de mercados, análisis de precios, valorización de activos y estrategia de inversión.",
      },
      {
        code: "5",
        title: "Ciencia de datos y analítica",
        body: "Pronóstico de demanda y precios, analítica operacional, análisis de sensibilidad y reportería inteligente.",
      },
      {
        code: "6",
        title: "Soluciones de IA para energía",
        body: "Agentes de IA, automatización de flujos de trabajo, copilotos de ingeniería y software energético a medida.",
      },
    ],
  },
  signal: {
    mark: "Del sistema físico a la inteligencia digital",
    h2: (
      <>
        Ingeniería que entiende la señal.{" "}
        <Accent>IA que acelera la decisión</Accent>.
      </>
    ),
    p: "Modelos, simulaciones, datos y criterio experto en flujos auditables: cada resultado puede rastrearse hasta su origen.",
    points: [
      "Modelos y simulaciones especializadas (RMS · EMT)",
      "Automatización bajo supervisión humana",
      "Resultados trazables para decisiones críticas",
    ],
    channel: "Señal · Canal 01",
    analog: "Analógica",
    digital: "A → Digital",
    live: "En vivo",
    physics: "física · RMS / EMT",
    digitalLabel: "digital · agentes / analítica",
    sampling: "fs = 20 kHz",
    disclaimer: "Interfaz ilustrativa",
    switchAria: "Seleccionar visualización de señal",
    scopeAlt:
      "Conversión conceptual de una señal eléctrica en inteligencia digital",
  },
  nexus: {
    mark: "El nexo",
    h2: (
      <>
        La infraestructura física se encuentra con la{" "}
        <Accent>inteligencia digital</Accent>.
      </>
    ),
    p: "Tres disciplinas, un mismo propósito: que cada decisión energética se tome con mejor información.",
    items: [
      {
        code: "1",
        title: "Ingeniería",
        body: "Estudios avanzados de sistemas eléctricos, integración renovable, estabilidad de red y due diligence técnica.",
      },
      {
        code: "2",
        title: "Inteligencia",
        body: "Agentes de IA, automatización, analítica de datos y herramientas de soporte a la decisión.",
      },
      {
        code: "3",
        title: "Transformación",
        body: "Estrategias prácticas para modernizar sistemas energéticos, organizaciones y mercados.",
      },
    ],
  },
  ecosystem: {
    mark: "Ecosistema de IA",
    h2: (
      <>
        Dos plataformas <Accent>especializadas</Accent>.
      </>
    ),
    p: "La estrategia vive en NEXENER; la ejecución, en dos entornos propios: PSAgent para la ingeniería y EMSIM para los mercados.",
    platforms: [
      {
        code: "1",
        kicker: "Ingeniería de sistemas eléctricos",
        name: "PSAgent",
        body: "Un entorno agéntico de ingeniería capaz de ejecutar, validar, analizar y documentar estudios técnicos de sistemas de potencia.",
        cta: "",
        href: "",
        status: "En desarrollo",
      },
      {
        code: "2",
        kicker: "Simulación de mercados eléctricos",
        name: "EMSIM",
        body: "Plataforma inteligente de simulación de mercados para diseño regulatorio, estrategias de oferta, despacho y experimentación estratégica.",
        cta: "Abrir app.emsim.ai",
        href: "https://app.emsim.ai",
        status: "Disponible",
      },
    ],
  },
  team: {
    mark: "Liderazgo",
    h2: (
      <>
        Energía, tecnología y negocio en un <Accent>mismo equipo</Accent>.
      </>
    ),
    p: "Dirección senior y ejecución global, sin capas entre el criterio técnico y el cliente.",
    people: [
      {
        initials: "JP",
        name: "Jaime Peralta",
        role: "CEO & CTO",
        area: "Sistemas eléctricos, estrategia energética y tecnología",
      },
      {
        initials: "FP",
        name: "Fernanda Peralta",
        role: "COO",
        area: "Dirección de IA y ciencia de datos",
      },
      {
        initials: "JP",
        name: "Javiera Peralta",
        role: "CCO",
        area: "Dirección de desarrollo de negocios",
      },
    ],
  },
  sectors: {
    mark: "Cobertura sectorial",
    h2: (
      <>
        Una sola <Accent>capa de inteligencia</Accent>.
      </>
    ),
    p: "Rompemos los silos entre generación, transmisión y comercialización aplicando una arquitectura unificada de datos que refleja toda la cadena de valor eléctrica.",
    imageAlt: "Sala de control eléctrico",
    rows: [
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
    ],
  },
  methodology: {
    mark: "Metodología",
    h2: (
      <>
        Un marco de trabajo probado en las redes eléctricas más{" "}
        <Accent>complejas</Accent> del planeta.
      </>
    ),
    phase: "fase",
    steps: [
      {
        n: "I",
        t: "Diagnóstico",
        d: "Auditoría integral de activos, datos operativos y exposición regulatoria en un ciclo intensivo de 6 semanas.",
      },
      {
        n: "II",
        t: "Modelado",
        d: "Diseño y entrenamiento de modelos de IA con datos propios del cliente, contrastados con mercados comparables.",
      },
      {
        n: "III",
        t: "Despliegue",
        d: "Integración con sistemas SCADA, EMS y ERP existentes. Gobernanza ejecutiva y ciclos de mejora continua.",
      },
      {
        n: "IV",
        t: "Escalado",
        d: "Extensión regional multi-jurisdicción con oficina de programa NEXENER embebida en la operación del cliente.",
      },
    ],
  },
  contact: {
    mark: "Iniciar conversación",
    h2: (
      <>
        Construyamos juntos el{" "}
        <Accent>futuro energético inteligente</Accent>.
      </>
    ),
    partnerships: "Partnerships",
    press: "Prensa",
    fName: "Nombre completo",
    fNamePh: "Ana Rodríguez",
    fEmail: "Correo corporativo",
    fEmailPh: "ana@empresa.com",
    fOrg: "Organización",
    fOrgPh: "Nombre de la utility",
    fRegion: "Región",
    regions: ["Norteamérica", "Latinoamérica", "Europa", "Otro"],
    fService: "Servicio de interés",
    servicePh: "Seleccione un servicio",
    serviceOptions: [
      "Integración a la red",
      "Estudios de sistemas eléctricos",
      "Estabilidad y fortaleza de red",
      "Mercados eléctricos e inversión",
      "Ciencia de datos y analítica",
      "Soluciones de IA para energía",
    ],
    place: "Santiago, Chile · Entrega global",
    fContext: "Contexto del proyecto",
    fContextPh: "Describa brevemente el desafío",
    submit: "Solicitar reunión",
  },
  footer: {
    cols: [
      { h: "Norteamérica", items: ["Nueva York", "Toronto", "San Francisco"] },
      {
        h: "Latinoamérica",
        items: ["Ciudad de México", "São Paulo", "Santiago"],
      },
      { h: "Europa", items: ["Madrid", "Londres", "Berlín"] },
      { h: "Firma", items: ["Gobernanza", "Carreras", "Prensa"] },
    ],
    p: "Soluciones globales de energía e IA para el sector eléctrico. Arquitectos de infraestructura crítica para la era autónoma.",
    copyright: "© MMXXV NEXENER Advisory Group. Todos los derechos reservados.",
    links: ["Privacidad", "Legal", "Seguridad"],
  },
};

export type Copy = typeof es;

const en: Copy = {
  nav: {
    links: [
      { href: "#nexo", label: "About Us" },
      { href: "#capacidades", label: "Services" },
      { href: "#plataformas", label: "Platforms" },
      { href: "#sectores", label: "Industries" },
      { href: "#equipo", label: "Team" },
    ],
    tagline: "Energy & AI Solutions",
    themeAria: "Toggle theme",
    themeDay: "Day mode",
    themeNight: "Night mode",
    cta: "Contact",
    menuAria: "Open menu",
  },
  hero: {
    mark: "Global AI Energy Intelligence",
    h1: (
      <>
        Artificial intelligence for
        <br />
        the world&rsquo;s <Accent>electrical</Accent> infrastructure.
      </>
    ),
    p: "Solutions for utilities, generators and power-sector operators: decades of engineering and proprietary AI models to reduce risk, optimise assets and lead the energy transition.",
    cta1: "Book a consultation",
    cta2: "Explore capabilities",
    imageAlt: "NEXENER command center with energy analytics panels",
    presence: "Operating presence",
    cities: [
      "Madrid",
      "London",
      "New York",
      "Toronto",
      "Mexico City",
      "São Paulo",
      "Santiago",
    ],
  },
  capabilities: {
    mark: "Core capabilities",
    h2: (
      <>
        <Accent>Next-generation</Accent> solutions built on proprietary AI.
      </>
    ),
    p: "Every engagement pairs a senior partner with data-science teams focused on the power business. No outsourcing, no generic playbooks.",
    items: [
      {
        code: "1",
        title: "Grid integration",
        body: "Connection studies, grid-code compliance and renewable generation integration.",
      },
      {
        code: "2",
        title: "Power-system studies",
        body: "Load flow, short circuit, contingency and dynamic RMS, EMT and transient-stability analysis.",
      },
      {
        code: "3",
        title: "Grid stability and system strength",
        body: "Frequency stability, inertia, system strength, grid-forming technologies and dynamic performance.",
      },
      {
        code: "4",
        title: "Energy markets and investment",
        body: "Market simulation, price analysis, asset valuation and investment strategy.",
      },
      {
        code: "5",
        title: "Data science and analytics",
        body: "Demand and price forecasting, operational analytics, sensitivity analysis and intelligent reporting.",
      },
      {
        code: "6",
        title: "AI solutions for energy",
        body: "AI agents, workflow automation, engineering copilots and custom energy software.",
      },
    ],
  },
  signal: {
    mark: "From the physical system to digital intelligence",
    h2: (
      <>
        Engineering that reads the signal.{" "}
        <Accent>AI that accelerates the decision</Accent>.
      </>
    ),
    p: "Models, simulation, data and expert judgement in auditable workflows: every result can be traced to its source.",
    points: [
      "Specialised models and simulation (RMS · EMT)",
      "Automation under human supervision",
      "Traceable results for critical decisions",
    ],
    channel: "Signal · Channel 01",
    analog: "Analog",
    digital: "A → Digital",
    live: "Live",
    physics: "physics · RMS / EMT",
    digitalLabel: "digital · agents / analytics",
    sampling: "fs = 20 kHz",
    disclaimer: "Illustrative interface",
    switchAria: "Select signal view",
    scopeAlt:
      "Conceptual conversion of an electrical signal into digital intelligence",
  },
  nexus: {
    mark: "The nexus",
    h2: (
      <>
        Physical infrastructure meets <Accent>digital intelligence</Accent>.
      </>
    ),
    p: "Three disciplines, one purpose: better-informed decisions across the power system.",
    items: [
      {
        code: "1",
        title: "Engineering",
        body: "Advanced power-system studies, renewable integration, grid stability and technical due diligence.",
      },
      {
        code: "2",
        title: "Intelligence",
        body: "AI agents, automation, data analytics and decision-support tooling.",
      },
      {
        code: "3",
        title: "Transformation",
        body: "Practical strategies to modernise energy systems, organisations and markets.",
      },
    ],
  },
  ecosystem: {
    mark: "AI ecosystem",
    h2: (
      <>
        Two <Accent>specialised</Accent> platforms.
      </>
    ),
    p: "Strategy lives in NEXENER; execution, in two proprietary environments: PSAgent for engineering and EMSIM for markets.",
    platforms: [
      {
        code: "1",
        kicker: "Power-system engineering",
        name: "PSAgent",
        body: "An agentic engineering environment able to execute, validate, analyse and document technical power-system studies.",
        cta: "",
        href: "",
        status: "In development",
      },
      {
        code: "2",
        kicker: "Energy-market simulation",
        name: "EMSIM",
        body: "An intelligent energy-market simulation platform for market design, bidding strategy, dispatch and strategic experimentation.",
        cta: "Open app.emsim.ai",
        href: "https://app.emsim.ai",
        status: "Available",
      },
    ],
  },
  team: {
    mark: "Leadership",
    h2: (
      <>
        Energy, technology and business under <Accent>one team</Accent>.
      </>
    ),
    p: "Senior leadership and global delivery, with no layers between technical judgement and the client.",
    people: [
      {
        initials: "JP",
        name: "Jaime Peralta",
        role: "CEO & CTO",
        area: "Power systems, energy strategy and technology",
      },
      {
        initials: "FP",
        name: "Fernanda Peralta",
        role: "COO",
        area: "Director of AI and data science",
      },
      {
        initials: "JP",
        name: "Javiera Peralta",
        role: "CCO",
        area: "Director of business development",
      },
    ],
  },
  sectors: {
    mark: "Sector coverage",
    h2: (
      <>
        A single <Accent>intelligence layer</Accent>.
      </>
    ),
    p: "We break the silos between generation, transmission and retail by applying a unified data architecture that mirrors the entire electricity value chain.",
    imageAlt: "Electric control room",
    rows: [
      {
        k: "01",
        t: "Generation",
        d: "Renewable, nuclear, hydrogen and firm portfolios. Optimal dispatch and availability forecasting.",
      },
      {
        k: "02",
        t: "Transmission",
        d: "Congestion analysis, dynamic line rating and long-distance expansion planning.",
      },
      {
        k: "03",
        t: "Distribution",
        d: "DER integration, active grid management and bidirectional balancing across low- and medium-voltage networks.",
      },
      {
        k: "04",
        t: "Retail",
        d: "Tariff design, demand elasticity and retail strategies for global industrial customers.",
      },
    ],
  },
  methodology: {
    mark: "Methodology",
    h2: (
      <>
        A framework proven on the most <Accent>complex</Accent> power grids on
        the planet.
      </>
    ),
    phase: "phase",
    steps: [
      {
        n: "I",
        t: "Diagnosis",
        d: "Comprehensive audit of assets, operational data and regulatory exposure in an intensive 6-week sprint.",
      },
      {
        n: "II",
        t: "Modeling",
        d: "Design and training of AI models on the client's own data, benchmarked against comparable markets.",
      },
      {
        n: "III",
        t: "Deployment",
        d: "Integration with existing SCADA, EMS and ERP systems. Executive governance and continuous-improvement cycles.",
      },
      {
        n: "IV",
        t: "Scaling",
        d: "Multi-jurisdiction regional expansion with a NEXENER program office embedded in the client's operation.",
      },
    ],
  },
  contact: {
    mark: "Start a conversation",
    h2: (
      <>
        Let&rsquo;s build the <Accent>intelligent energy future</Accent>{" "}
        together.
      </>
    ),
    partnerships: "Partnerships",
    press: "Press",
    fName: "Full name",
    fNamePh: "Ana Rodríguez",
    fEmail: "Corporate email",
    fEmailPh: "ana@company.com",
    fOrg: "Organization",
    fOrgPh: "Utility name",
    fRegion: "Region",
    regions: ["North America", "Latin America", "Europe", "Other"],
    fService: "Service of interest",
    servicePh: "Select a service",
    serviceOptions: [
      "Grid integration",
      "Power-system studies",
      "Grid stability and system strength",
      "Energy markets and investment",
      "Data science and analytics",
      "AI solutions for energy",
    ],
    place: "Santiago, Chile · Global delivery",
    fContext: "Project context",
    fContextPh: "Briefly describe the challenge",
    submit: "Request a meeting",
  },
  footer: {
    cols: [
      { h: "North America", items: ["New York", "Toronto", "San Francisco"] },
      {
        h: "Latin America",
        items: ["Mexico City", "São Paulo", "Santiago"],
      },
      { h: "Europe", items: ["Madrid", "London", "Berlin"] },
      { h: "Firm", items: ["Governance", "Careers", "Press"] },
    ],
    p: "Global energy and AI solutions for the power sector. Architects of critical infrastructure for the autonomous era.",
    copyright: "© MMXXV NEXENER Advisory Group. All rights reserved.",
    links: ["Privacy", "Legal", "Security"],
  },
};

export const copy: Record<Lang, Copy> = { es, en };

const STORAGE_KEY = "nexener-lang";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: copy[lang] };
}
