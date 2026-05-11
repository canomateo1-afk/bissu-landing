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
  practiceAreas: { area: string; year: string }[];
  education: string[];
  background: { firm: string; role: string }[];
  languages: string[];
  contact: {
    email: string;
    phone: string;
    /** Optional Calendly URL — falls back to "/v4#cta" if not set. */
    calendly?: string;
  };
  /** External profile URLs for schema.org sameAs. */
  sameAs?: string[];
  /** Optional LinkedIn URL — also added to sameAs automatically if present. */
  linkedin?: string;
  /** Optional university IDs the lawyer studied at (used in alumniOf schema). */
  alumniOf?: { name: string; url?: string }[];
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
      { area: "Litigio Mercantil y Corporativo", year: "2006" },
      { area: "Concurso Mercantil y Reestructura", year: "2010" },
      { area: "Arbitraje Comercial Internacional · CCI", year: "2014" },
      { area: "Conflictos entre Accionistas", year: "2017" },
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
      { area: "Litigio Civil", year: "2012" },
      { area: "Litigio Familiar", year: "2014" },
      { area: "Litigio Constitucional · Amparo", year: "2018" },
      { area: "Procesal Constitucional", year: "2023" },
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
  },
];

export function getMemberBySlug(slug: string) {
  return v4Team.find((m) => m.slug === slug);
}

/** Returns the rest of the team (excluding the given slug). */
export function getOtherMembers(slug: string) {
  return v4Team.filter((m) => m.slug !== slug);
}

/** Earliest practiceArea year — used for "Xyears+ de práctica" stat. */
export function getYearsOfPractice(member: V4TeamMember): number {
  const years = member.practiceAreas
    .map((p) => parseInt(p.year, 10))
    .filter((n) => !Number.isNaN(n));
  if (years.length === 0) return 0;
  const earliest = Math.min(...years);
  return new Date().getFullYear() - earliest;
}
