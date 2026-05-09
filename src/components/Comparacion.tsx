"use client";

import { motion, Variants } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { events } from "@/lib/analytics";

const rows = [
  {
    label: "Quién maneja tu caso",
    bissu: "Abogado titular como responsable directo, sin derivaciones.",
    others: "Derivado a junior tras la primera reunión.",
  },
  {
    label: "Diagnóstico inicial",
    bissu: "Dictamen escrito con escenarios, plazos y honorarios.",
    others: "Diagnóstico verbal, sin documento de respaldo.",
  },
  {
    label: "Comunicación",
    bissu: "Un solo punto de contacto · reporte periódico.",
    others: "Múltiples interlocutores · sin continuidad.",
  },
  {
    label: "Honorarios",
    bissu: "Transparentes desde día 1 · plan de pago acordado.",
    others: "Opacos · ajustes recurrentes durante el proceso.",
  },
  {
    label: "Selección de casos",
    bissu: "Solo casos donde aportamos valor real.",
    others: "Cualquier caso por volumen.",
  },
  {
    label: "Reconocimientos",
    bissu: "Best Lawyers · Leaders League · Tops Diamante.",
    others: "Sin reconocimientos verificables.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Comparacion() {
  return (
    <section
      id="comparacion"
      className="relative bg-ink-900 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Watermark */}
      <div
        className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        06
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="06" label="Por qué Bissu" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Despacho boutique vs{" "}
                <span className="italic">despacho jurídico tradicional</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <Reveal delay={120}>
              <p className="font-body text-bone-50 text-[15px] leading-[1.75] pretty">
                Comparación honesta. No competimos en volumen sino en
                profundidad. Acá la diferencia operativa, punto por punto.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Comparison table — BISSU column highlighted with gold bg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 sm:mt-24 relative"
        >
          {/* Header row */}
          <div className="grid grid-cols-12 gap-0 mb-1">
            <div className="col-span-12 sm:col-span-4 px-0 sm:pr-6 pb-5 border-b border-bone-50/15">
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                Criterio
              </p>
            </div>
            <div className="col-span-6 sm:col-span-4 bg-gold-400/[0.06] border-x border-t border-gold-400/30 px-4 sm:px-6 pt-4 pb-3 flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <p className="font-display text-bone-50 text-xl sm:text-2xl lg:text-[28px] tracking-tightest leading-none">
                Bissu
              </p>
            </div>
            <div className="col-span-6 sm:col-span-4 px-4 sm:pl-6 pb-5 border-b border-bone-50/15 flex items-end">
              <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-bone-400 font-medium">
                Despacho tradicional
              </p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              variants={rowVariants}
              className="grid grid-cols-12 gap-0 group"
            >
              <div className="col-span-12 sm:col-span-4 py-7 px-0 sm:pr-6 border-b border-bone-50/12 group-hover:border-gold-400/30 transition-colors duration-500">
                <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-bone-300 font-medium">
                  {row.label}
                </p>
              </div>
              <div
                className={`col-span-12 sm:col-span-4 py-7 px-4 sm:px-6 bg-gold-400/[0.06] border-x border-gold-400/30 ${
                  i === rows.length - 1 ? "border-b" : ""
                } flex gap-3`}
              >
                <CheckIcon />
                <p className="font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.6] pretty">
                  {row.bissu}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 py-7 px-4 sm:pl-6 border-b border-bone-50/12 group-hover:border-gold-400/30 transition-colors duration-500 flex gap-3">
                <CrossIcon />
                <p className="font-body text-bone-400 text-[14px] sm:text-[15px] leading-[1.6] pretty">
                  {row.others}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-bone-50/12">
            <p className="font-display italic text-bone-50 text-2xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-tightest max-w-2xl balance">
              Una consulta de 20 minutos te alcanza para entender la diferencia.
            </p>
            <a
              href="#contacto"
              onClick={() => events.ctaClick("comparacion", "Agenda tu consulta")}
              className="group inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 font-sans text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-gold-400 transition-colors"
            >
              Agenda tu consulta
              <span className="text-base leading-none arrow-drift">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span
      className="shrink-0 mt-1 w-4 h-4 inline-flex items-center justify-center"
      aria-hidden
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
        <circle cx="8" cy="8" r="7.5" stroke="#B4975A" strokeWidth="1" />
        <path
          d="M4.5 8.2 L7 10.5 L11.5 5.8"
          stroke="#B4975A"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span
      className="shrink-0 mt-1 w-4 h-4 inline-flex items-center justify-center"
      aria-hidden
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
        <circle cx="8" cy="8" r="7.5" stroke="#5A5253" strokeWidth="1" />
        <path
          d="M5.5 5.5 L10.5 10.5 M10.5 5.5 L5.5 10.5"
          stroke="#5A5253"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
