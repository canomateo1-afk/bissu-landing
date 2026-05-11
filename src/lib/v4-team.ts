export type V4TeamMember = {
  slug: string;
  name: string;
  /** First name only — used for personalized headers ("¿Tu caso es para Samuel?"). */
  firstName?: string;
  role: string;
  subtitle: string;
  /** Short summary for OG/meta description (155-160 chars ideal). */
  metaDescription?: string;
  photo: string;
  /** Vertical crop position for the photo (object-position Y). Tune so face lands at same height across members. Default "50%". */
  photoFocusY?: string;
  bio: string;
  quote: string;
  practiceAreas: { area: string; year: string; slug?: string }[];
  education: string[];
  background: { firm: string; role: string }[];
  languages: string[];
  contact: {
    email: string;
    phone: string;
    /** Optional Calendly URL — falls back to "/#cta" if not set. */
    calendly?: string;
  };
  /** External profile URLs for schema.org sameAs. */
  sameAs?: string[];
  /** Optional LinkedIn URL — also added to sameAs automatically if present. */
  linkedin?: string;
  /** Optional university IDs the lawyer studied at (used in alumniOf schema). */
  alumniOf?: { name: string; url?: string }[];
  /** Optional awards (shown as badges + injected into Person.award schema). */
  awards?: string[];
  /** Short credential capsules shown as trust strip below hero. 3-5 items, 4-8 words each. */
  keyCredentials?: string[];
  /** Optional anonymized client testimonials specific to this lawyer. */
  testimonials?: { quote: string; context: string }[];
  /** FAQ specific to this lawyer — feeds the on-page accordion + FAQPage schema. */
  faqs?: { question: string; answer: string }[];
  /** ISO date — used in schema.org dateModified for freshness signal. */
  lastUpdated?: string;
};

export const v4Team: V4TeamMember[] = [
  {
    slug: "samuel-bissu",
    name: "Samuel Bissu Bazbaz",
    firstName: "Samuel",
    role: "Socio fundador y Director",
    subtitle: "Litigio de fondo · Reestructura · Arbitraje",
    metaDescription:
      "Samuel Bissu Bazbaz — socio fundador de Bissu Abogados, CDMX. Litigio mercantil, concursal y arbitraje internacional. Best Lawyers in Mexico 2026.",
    photo: "/images/team/samuel.jpg",
    photoFocusY: "50%",
    bio: "Samuel Bissu Bazbaz es socio fundador de Bissu Abogados, S.C., despacho boutique en Ciudad de México especializado en litigio mercantil, concursal y arbitraje internacional. Reconocido por Best Lawyers in Mexico 2026 y Leaders League 2025 en Resolución de Conflictos.",
    quote:
      "Un caso jurídico no se resuelve con volumen ni con jerga. Se resuelve con análisis de fondo, criterio y un titular que responde por su trabajo.",
    practiceAreas: [
      { area: "Litigio Mercantil y Corporativo", year: "2006", slug: "litigio-mercantil" },
      { area: "Concurso Mercantil y Reestructura", year: "2010", slug: "litigio-concursal" },
      { area: "Arbitraje Comercial Internacional · CCI", year: "2014", slug: "arbitraje-comercial-internacional" },
      { area: "Conflictos entre Accionistas", year: "2017", slug: "litigio-mercantil" },
    ],
    education: [
      "Maestría en Derecho de la Empresa, Universidad Panamericana — 2017",
      "Licenciatura en Derecho, Universidad Iberoamericana — 2006",
    ],
    background: [
      { firm: "Bissu Abogados, S.C.", role: "Socio fundador y Director · 2017–presente" },
      { firm: "Cohen Sacal, Espinoza y Asociados, S.C.", role: "Abogado" },
    ],
    languages: ["Español", "Inglés"],
    contact: {
      email: "sbissu@bissuabogados.com",
      phone: "+52 55 5545 1308",
    },
    linkedin: "https://www.linkedin.com/company/bissu-abogados-s-c-/",
    sameAs: [
      "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
    ],
    alumniOf: [
      { name: "Universidad Panamericana", url: "https://www.up.edu.mx" },
      { name: "Universidad Iberoamericana", url: "https://ibero.mx" },
    ],
    awards: [
      "The Best Lawyers in Mexico 2026",
      "Leaders League 2025 — Resolución de Conflictos",
      "Tops · Los Mejores Abogados en México 2025 — Diamante",
    ],
    keyCredentials: [
      "20+ años de práctica jurídica",
      "Maestría · Universidad Panamericana",
      "Best Lawyers in Mexico 2026",
      "Arbitraje CCI desde 2014",
    ],
    testimonials: [
      {
        quote:
          "Llevamos un litigio mercantil complejo donde la contraparte intentó concurso simulado. Samuel diseñó la oposición, demostró mala fe y recuperamos la cartera completa. Tres años después, sigue siendo nuestro abogado de cabecera.",
        context: "Director General · grupo industrial mexicano · caso resuelto 2023",
      },
      {
        quote:
          "Necesitábamos reestructurar deuda sin entrar a concurso público. Negoció quita y espera con seis bancos en cuatro meses. Operación intacta, sin titulares en prensa, sin pérdida de empleos.",
        context: "CFO · empresa familiar tercera generación · 2024",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta una consulta inicial con Samuel Bissu?",
        answer:
          "La consulta inicial con Samuel Bissu es gratuita y sin compromiso. Dura aproximadamente 20 minutos, se realiza por video o presencial en Polanco, CDMX, y al finalizar se entrega dictamen escrito en 24 horas con la viabilidad del caso y los honorarios cerrados. No se cobra nada hasta firmar convenio.",
      },
      {
        question: "¿En qué tipo de casos especializa Samuel Bissu?",
        answer:
          "Samuel Bissu Bazbaz se especializa en litigio mercantil de fondo, concurso mercantil y reestructura, arbitraje comercial internacional bajo Cámara de Comercio Internacional (CCI) y CANACO, y conflictos entre accionistas. Sus casos suelen involucrar empresas familiares mexicanas, multinacionales con operación en México y disputas cross-border México↔EE.UU.",
      },
      {
        question: "¿Atiende casos fuera de Ciudad de México?",
        answer:
          "Sí. Samuel litiga en tribunales federales y de cualquier entidad federativa mexicana, además de arbitrajes con sede en Ciudad de México, Estados Unidos, Europa o Asia. La oficina central está en Lomas de Chapultepec, CDMX, y para casos foráneos coordina con corresponsales locales bajo dirección estratégica única.",
      },
      {
        question: "¿Está disponible esta semana para una primera reunión?",
        answer:
          "Sí. La agenda mantiene franjas reservadas para consultas iniciales de 20 minutos, típicamente con disponibilidad dentro de la semana en curso. Las reuniones pueden ser por video (Google Meet, Zoom) o presenciales en Av. Prado Norte 365, Lomas de Chapultepec.",
      },
      {
        question: "¿Bissu acepta esquemas de honorarios por resultado?",
        answer:
          "Sí. Bissu trabaja bajo tres esquemas según el caso: iguala fija (cobro mensual predecible), cuota litis (porcentaje sobre el resultado obtenido) o esquema mixto. La elección se discute en la consulta inicial y se documenta en el convenio. La consulta y el dictamen escrito previo no tienen costo.",
      },
    ],
    lastUpdated: "2026-05-11",
  },
  {
    slug: "adolfo-vargas",
    name: "Adolfo Julián Vargas Alvarado",
    firstName: "Adolfo",
    role: "Socio Jr.",
    subtitle: "Litigio civil · Constitucional · Familiar",
    metaDescription:
      "Adolfo Julián Vargas Alvarado — socio junior de Bissu Abogados, CDMX. Especialista en derecho procesal constitucional, litigio civil y familiar.",
    photo: "/images/team/adolfo.jpg",
    photoFocusY: "78%",
    bio: "Adolfo Julián Vargas Alvarado es socio junior de Bissu Abogados con especialización en derecho procesal constitucional. Trayectoria previa en el Poder Judicial Federal y firmas mexicanas de práctica civil y familiar.",
    quote:
      "El amparo no es solo un recurso técnico. Es la última herramienta del individuo frente al poder. Hay que escribirlo con esa seriedad.",
    practiceAreas: [
      { area: "Litigio Civil", year: "2012", slug: "litigio-civil" },
      { area: "Litigio Familiar", year: "2014", slug: "litigio-familiar" },
      { area: "Litigio Constitucional · Amparo", year: "2018", slug: "litigio-constitucional" },
      { area: "Procesal Constitucional", year: "2023", slug: "litigio-constitucional" },
    ],
    education: [
      "Maestría en Derecho Procesal Constitucional, Universidad Panamericana — 2023",
      "Curso Básico de Formación de Secretarios del PJF — 2016",
      "Licenciatura en Derecho, Universidad Tres Culturas — 2012",
    ],
    background: [
      { firm: "Bissu Abogados, S.C.", role: "Asociado" },
      { firm: "Arenas & Salazar, Abogados Asociados, S.C.", role: "Abogado" },
    ],
    languages: ["Español"],
    contact: {
      email: "jvargas@bissuabogados.com",
      phone: "+52 55 5545 1308",
    },
    alumniOf: [
      { name: "Universidad Panamericana", url: "https://www.up.edu.mx" },
      { name: "Universidad Tres Culturas", url: "https://utresc.edu.mx" },
    ],
    keyCredentials: [
      "14+ años de práctica jurídica",
      "Maestría · Procesal Constitucional · UP",
      "Ex Secretario · Poder Judicial Federal",
      "Bissu Abogados desde 2017",
    ],
    testimonials: [
      {
        quote:
          "Recibimos resolución del SAT con crédito fiscal y 72 horas para responder. Adolfo redactó el amparo con suspensión esa misma tarde, lo presentó al día siguiente. La cuenta no se congeló.",
        context: "Controller · PYME importadora · amparo fiscal, 2024",
      },
      {
        quote:
          "Caso de custodia internacional bajo Convenio de La Haya. Adolfo coordinó con counsel en Estados Unidos, mantuvo a mi hijo en México y resolvió en seis meses. Hizo lo técnico y lo humano bien.",
        context: "Cliente · sustracción internacional · 2024",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta una consulta inicial con Adolfo Vargas?",
        answer:
          "La consulta inicial con Adolfo Vargas es gratuita y sin compromiso. Dura 20 minutos, se realiza por video o presencial en Polanco, CDMX. Al finalizar se entrega dictamen escrito en 24 horas con viabilidad, vía procesal recomendada y honorarios cerrados. No se cobra nada hasta firmar convenio.",
      },
      {
        question: "¿En qué tipo de casos especializa Adolfo Vargas?",
        answer:
          "Adolfo Julián Vargas Alvarado se especializa en derecho procesal constitucional (amparo directo e indirecto, suspensión del acto reclamado), litigio civil (incumplimiento de contratos, daños, posesión, sucesiones) y derecho familiar (divorcio, custodia, pensión alimenticia, restitución internacional de menores bajo Convenio de La Haya).",
      },
      {
        question: "¿Puede llevar un amparo urgente en menos de 48 horas?",
        answer:
          "Sí. Para casos con acto de autoridad inminente (clausura, embargo, deportación, congelamiento de cuentas), Adolfo prepara amparo indirecto con solicitud de suspensión provisional dentro de 24 a 48 horas. La consulta inicial puede agendarse el mismo día por video. La urgencia debe comunicarse al agendar.",
      },
      {
        question: "¿Atiende casos familiares fuera de CDMX?",
        answer:
          "Sí. Adolfo litiga casos de derecho familiar en tribunales locales de cualquier entidad federativa mexicana y coordina restituciones internacionales bajo el Convenio de La Haya 1980 con counsel del país de retención. La oficina central está en Lomas de Chapultepec, CDMX, pero comparece donde el cliente o el menor lo requiera.",
      },
      {
        question: "¿Qué formación tiene en derecho de amparo?",
        answer:
          "Adolfo cursó Maestría en Derecho Procesal Constitucional en la Universidad Panamericana (titulación 2023) y aprobó el Curso Básico de Formación de Secretarios del Poder Judicial Federal en 2016. Su práctica de amparo arrancó dentro del PJF, lo que da una perspectiva técnica desde el lado del juzgador antes de litigar como abogado de parte.",
      },
    ],
    lastUpdated: "2026-05-11",
  },
];

export function getMemberBySlug(slug: string) {
  return v4Team.find((m) => m.slug === slug);
}

export function getOtherMembers(slug: string) {
  return v4Team.filter((m) => m.slug !== slug);
}

export function getYearsOfPractice(member: V4TeamMember): number {
  const years = member.practiceAreas
    .map((p) => parseInt(p.year, 10))
    .filter((n) => !Number.isNaN(n));
  if (years.length === 0) return 0;
  const earliest = Math.min(...years);
  return new Date().getFullYear() - earliest;
}
