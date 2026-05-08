"use client";

import { motion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const personas = [
  {
    n: "01",
    title: "Empresas familiares",
    body: "Conflictos societarios, sucesiones empresariales, reestructuras, gobierno corporativo. Procesos donde el patrimonio y las relaciones están en juego.",
    tags: ["Reestructura", "Sucesión", "Gobierno corporativo"],
    icon: "company",
  },
  {
    n: "02",
    title: "Multinacionales e instituciones",
    body: "Litigios complejos, arbitraje internacional, regulación, contratos cross-border. Con interlocutor único y reporte ejecutivo.",
    tags: ["Arbitraje", "Regulatorio", "Cross-border"],
    icon: "globe",
  },
  {
    n: "03",
    title: "Particulares de alto patrimonio",
    body: "Custodia internacional, sucesiones, daños y perjuicios, asuntos personales con exposición patrimonial. Discreción absoluta.",
    tags: ["Familiar", "Sucesiones", "Daños"],
    icon: "shield",
  },
  {
    n: "04",
    title: "PYMEs y profesionales independientes",
    body: "Cobranza, contratos comerciales, conflictos con contraparte mayor, amparo administrativo. Asesoría sin la grasa de un despacho enorme.",
    tags: ["Mercantil", "Amparo", "Contractual"],
    icon: "diamond",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Personas() {
  return (
    <section
      id="personas"
      className="relative bg-ink-800 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div
        className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        03
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="03" label="A quién atendemos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 items-end mb-16 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Cuatro perfiles. Una{" "}
                <span className="italic">sola atención</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <Reveal delay={120}>
              <p className="font-body text-bone-50 text-[15px] leading-[1.75] pretty">
                Cada caso entra por la misma puerta — análisis de fondo,
                titular responsable, reporte directo. Independiente del
                tamaño del cliente.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {personas.map((p) => (
            <motion.article
              key={p.n}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative border border-bone-50/12 bg-ink-900/40 backdrop-blur-sm p-7 sm:p-9 lg:p-10 overflow-hidden"
            >
              {/* Hover gold corner accents */}
              <span aria-hidden className="absolute top-0 left-0 w-10 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute top-0 left-0 h-10 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 w-10 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 h-10 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-7">
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                  {p.n} · Perfil
                </p>
                <PersonaIcon kind={p.icon as IconKind} />
              </div>

              <h3 className="font-display text-bone-50 text-[26px] sm:text-3xl lg:text-[34px] leading-[1.1] mb-5 transition-colors duration-500 group-hover:text-gold-600 balance">
                {p.title}
              </h3>

              <p className="font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.75] mb-6 pretty">
                {p.body}
              </p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-bone-50/12">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-block border border-bone-50/15 px-3 py-1 font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type IconKind = "company" | "globe" | "shield" | "diamond";

function PersonaIcon({ kind }: { kind: IconKind }) {
  const props = {
    className: "w-9 h-9 sm:w-10 sm:h-10 text-gold-400 group-hover:text-gold-500 transition-colors duration-500",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 40 40",
  };

  if (kind === "company") {
    return (
      <svg {...props}>
        <rect x="8" y="14" width="10" height="20" />
        <rect x="22" y="8" width="10" height="26" />
        <line x1="11" y1="19" x2="15" y2="19" />
        <line x1="11" y1="24" x2="15" y2="24" />
        <line x1="11" y1="29" x2="15" y2="29" />
        <line x1="25" y1="13" x2="29" y2="13" />
        <line x1="25" y1="18" x2="29" y2="18" />
        <line x1="25" y1="23" x2="29" y2="23" />
        <line x1="25" y1="28" x2="29" y2="28" />
      </svg>
    );
  }
  if (kind === "globe") {
    return (
      <svg {...props}>
        <circle cx="20" cy="20" r="13" />
        <ellipse cx="20" cy="20" rx="6" ry="13" />
        <line x1="7" y1="20" x2="33" y2="20" />
        <path d="M9 13 Q 20 17 31 13" />
        <path d="M9 27 Q 20 23 31 27" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg {...props}>
        <path d="M20 6 L31 10 L31 21 C31 28 26 33 20 35 C14 33 9 28 9 21 L9 10 Z" />
        <path d="M15 19 L19 23 L26 16" />
      </svg>
    );
  }
  // diamond
  return (
    <svg {...props}>
      <path d="M10 16 L30 16 L25 9 L15 9 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M10 16 L30 16 L20 33 Z" fill="currentColor" fillOpacity="0.25" />
      <line x1="15" y1="9" x2="20" y2="33" />
      <line x1="25" y1="9" x2="20" y2="33" />
      <line x1="15" y1="16" x2="20" y2="9" />
      <line x1="25" y1="16" x2="20" y2="9" />
    </svg>
  );
}
