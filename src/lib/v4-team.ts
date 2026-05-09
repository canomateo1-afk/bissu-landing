export type V4TeamMember = {
  slug: string;
  name: string;
  role: string;
  subtitle: string;
  photo: string;
  /** Vertical crop position for the photo (object-position Y). Tune so face lands at same height across members. Default "50%". */
  photoFocusY?: string;
  bio: string;
  quote: string;
  practiceAreas: { area: string; year: string }[];
  education: string[];
  background: { firm: string; role: string }[];
  languages: string[];
  contact: { email: string; phone: string };
  sameAs?: string[];
};

export const v4Team: V4TeamMember[] = [
  {
    slug: "samuel-bissu",
    name: "Samuel Bissu Bazbaz",
    role: "Socio fundador y Director",
    subtitle: "Litigio de fondo · Reestructura · Arbitraje",
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
    contact: { email: "sbissu@bissuabogados.com", phone: "+52 55 5545 1308" },
    sameAs: [
      "https://www.linkedin.com/company/bissu-abogados-s-c-/",
      "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
    ],
  },
  {
    slug: "adolfo-vargas",
    name: "Adolfo Julián Vargas Alvarado",
    role: "Socio Jr.",
    subtitle: "Litigio civil · Constitucional · Familiar",
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
    contact: { email: "jvargas@bissuabogados.com", phone: "+52 55 5545 1308" },
  },
];

export function getMemberBySlug(slug: string) {
  return v4Team.find((m) => m.slug === slug);
}
