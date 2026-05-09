"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { events } from "@/lib/analytics";

const areas = [
  {
    n: "01",
    title: "Litigio Civil",
    summary:
      "Contratos, daños y perjuicios, derechos individuales y homologación de sentencias extranjeras en México.",
    items: [
      "Interpretación y cumplimiento de contratos",
      "Acciones colectivas",
      "Créditos, hipotecas y arrendamiento",
      "Daños y perjuicios · daño moral",
      "Homologación de sentencias extranjeras",
    ],
    icon: "scale",
  },
  {
    n: "02",
    title: "Litigio Mercantil y Corporativo",
    summary:
      "Sociedades, contratos mercantiles, conflictos accionarios y fideicomisos para empresas en México.",
    items: [
      "Contratos mercantiles",
      "Conflictos entre accionistas",
      "Títulos y operaciones de crédito",
      "Fideicomisos, seguros y fianzas",
    ],
    icon: "trade",
  },
  {
    n: "03",
    title: "Litigio Concursal y Concurso Mercantil",
    summary:
      "Reestructuras empresariales, quiebras, convenios concursales y recuperación de créditos.",
    items: [
      "Concursos mercantiles y quiebras",
      "Convenios concursales",
      "Reconocimiento de créditos",
      "Insolvencia transfronteriza",
    ],
    icon: "balance",
  },
  {
    n: "04",
    title: "Derecho Familiar",
    summary:
      "Divorcios, custodia compartida, pensión alimenticia, restitución internacional de menores y sucesiones.",
    items: [
      "Divorcios",
      "Patria potestad y custodia",
      "Pensión alimenticia",
      "Restitución internacional de menores",
      "Sucesiones",
    ],
    icon: "family",
  },
  {
    n: "05",
    title: "Litigio Constitucional y Amparo",
    summary:
      "Juicio de amparo, acciones de inconstitucionalidad y controversias constitucionales.",
    items: [
      "Juicio de amparo",
      "Acciones de inconstitucionalidad",
      "Controversias constitucionales",
    ],
    icon: "column",
  },
  {
    n: "06",
    title: "Arbitraje Internacional y MASC",
    summary:
      "Arbitraje comercial internacional, mediación, conciliación y ejecución de laudos extranjeros.",
    items: [
      "Arbitraje como abogado o árbitro",
      "Ejecución y nulidad de laudos",
      "Reconocimiento de laudos extranjeros",
      "Medidas cautelares",
      "Mediación y negociación",
    ],
    icon: "handshake",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Areas() {
  const reduce = useReducedMotion();

  return (
    <section
      id="areas"
      className="relative bg-ink-900 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div
        className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        04
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="04" label="Áreas de práctica" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Áreas de{" "}
                <span className="italic">práctica jurídica</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={140}>
              <motion.div
                className="img-frame relative aspect-[4/3] border border-bone-50/10"
                initial={
                  reduce
                    ? { clipPath: "inset(0 0 0 0)" }
                    : { clipPath: "inset(0 100% 0 0)" }
                }
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.4, ease: EASE }}
              >
                <Image
                  src="/images/hero-3.jpg"
                  alt="Áreas de práctica de Bissu Abogados — despacho de litigio en CDMX"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.06)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,151,90,0.10) 0%, transparent 50%, rgba(35,31,32,0.18) 100%)",
                    mixBlendMode: "multiply",
                  }}
                  aria-hidden
                />
                <p className="absolute bottom-5 left-5 font-sans text-[10px] tracking-[0.28em] uppercase text-bone-50 font-medium">
                  Fig. 04 · Oficinas
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {areas.map((a) => (
            <motion.article
              key={a.n}
              variants={cardVariants}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative border border-bone-50/12 bg-ink-800/40 backdrop-blur-sm p-7 lg:p-8 overflow-hidden flex flex-col"
            >
              <span aria-hidden className="absolute top-0 left-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-6">
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                  {a.n}
                </p>
                <AreaIcon kind={a.icon as IconKind} />
              </div>

              <h3 className="font-display text-bone-50 text-[22px] sm:text-2xl lg:text-[26px] leading-[1.15] mb-4 transition-colors duration-500 group-hover:text-gold-600 balance">
                {a.title}
              </h3>

              <p className="font-body text-bone-300 text-[13px] leading-[1.7] mb-6 pretty">
                {a.summary}
              </p>

              <ul className="mt-auto pt-5 border-t border-bone-50/12 space-y-1.5 transition-colors duration-500 group-hover:border-gold-400/30">
                {a.items.slice(0, 4).map((it) => (
                  <li
                    key={it}
                    className="font-body text-bone-50 text-[13px] leading-[1.55] flex gap-2"
                  >
                    <span className="text-gold-600 shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
                {a.items.length > 4 && (
                  <li className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-400 pt-1">
                    + {a.items.length - 4} servicios más
                  </li>
                )}
              </ul>

              {/* Click affordance — encourages action */}
              <a
                href="#contacto"
                onClick={() => events.ctaClick("areas_card", `Consultar caso · ${a.title}`)}
                className="mt-6 pt-5 border-t border-bone-50/12 inline-flex items-center justify-between gap-2 font-sans text-[11px] tracking-[0.22em] uppercase text-bone-50 font-medium group-hover:text-gold-400 transition-colors"
              >
                <span>Consultar caso</span>
                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type IconKind =
  | "scale"
  | "trade"
  | "balance"
  | "family"
  | "column"
  | "handshake";

function AreaIcon({ kind }: { kind: IconKind }) {
  const props = {
    className:
      "w-8 h-8 text-gold-400 group-hover:text-gold-500 transition-colors duration-500",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 32 32",
  };

  switch (kind) {
    case "scale":
      return (
        <svg {...props}>
          <line x1="16" y1="6" x2="16" y2="26" />
          <line x1="10" y1="26" x2="22" y2="26" />
          <path d="M6 12 L16 9 L26 12" />
          <path d="M3 18 L9 12 L9 18 Z" fill="currentColor" fillOpacity="0.18" />
          <path d="M23 18 L29 12 L29 18 Z" fill="currentColor" fillOpacity="0.18" />
          <path d="M3 18 Q 6 22 9 18" />
          <path d="M23 18 Q 26 22 29 18" />
        </svg>
      );
    case "trade":
      return (
        <svg {...props}>
          <rect x="6" y="10" width="20" height="16" />
          <path d="M10 10 V 6 H 22 V 10" />
          <line x1="6" y1="16" x2="26" y2="16" />
          <circle cx="11" cy="21" r="1.5" fill="currentColor" />
          <circle cx="16" cy="21" r="1.5" fill="currentColor" />
          <circle cx="21" cy="21" r="1.5" fill="currentColor" />
        </svg>
      );
    case "balance":
      return (
        <svg {...props}>
          <path d="M16 4 L26 8 V 18 C 26 23 22 27 16 28 C 10 27 6 23 6 18 V 8 Z" />
          <path d="M11 16 L15 20 L21 12" />
        </svg>
      );
    case "family":
      return (
        <svg {...props}>
          <circle cx="11" cy="13" r="3" />
          <circle cx="21" cy="13" r="3" />
          <path d="M5 26 C 5 22 7 19 11 19 C 15 19 17 22 17 26" />
          <path d="M15 26 C 15 22 17 19 21 19 C 25 19 27 22 27 26" />
        </svg>
      );
    case "column":
      return (
        <svg {...props}>
          <line x1="6" y1="6" x2="26" y2="6" />
          <line x1="6" y1="26" x2="26" y2="26" />
          <line x1="4" y1="9" x2="28" y2="9" />
          <line x1="4" y1="23" x2="28" y2="23" />
          <line x1="10" y1="9" x2="10" y2="23" />
          <line x1="16" y1="9" x2="16" y2="23" />
          <line x1="22" y1="9" x2="22" y2="23" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...props}>
          <path d="M4 18 L8 14 L14 18 L18 14 L22 18 L26 14" />
          <path d="M8 14 L12 10 L16 14" />
          <path d="M22 18 L26 22 L20 26" />
          <path d="M6 18 L10 22 L14 18" />
          <line x1="4" y1="18" x2="2" y2="20" />
          <line x1="28" y1="14" x2="30" y2="12" />
        </svg>
      );
  }
}
