"use client";
import Image from "next/image";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Case = {
  n: string;
  area: string;
  metric: string;
  metricLabel: string;
  desc: string;
  duration: string;
  image: string;
};

const featured: Case = {
  n: "01",
  area: "Litigio Concursal",
  metric: "60%",
  metricLabel: "de quita aprobada",
  desc: "Empresa industrial con tres generaciones operando, con pasivo bancario impagable post-pandemia. Negociamos un convenio concursal con acreedores y la operación continuó sin liquidación.",
  duration: "18 meses",
  image:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=88&auto=format&fit=crop",
};

const cases: Case[] = [
  {
    n: "02",
    area: "Litigio Civil",
    metric: "3.4×",
    metricLabel: "de indemnización",
    desc: "Persona física vs contraparte multinacional. Reclamación por incumplimiento de servicios profesionales con sentencia favorable y recuperación de costas.",
    duration: "22 meses",
    image:
      "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1100&q=88&auto=format&fit=crop",
  },
  {
    n: "03",
    area: "Litigio Familiar",
    metric: "Custodia",
    metricLabel: "internacional",
    desc: "Cliente residente en CDMX con hijos cuyo padre se trasladó al extranjero. Convenio + ratificación judicial + pensión asegurada en moneda dura.",
    duration: "11 meses",
    image:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=1100&q=88&auto=format&fit=crop",
  },
  {
    n: "04",
    area: "MASC · Arbitraje",
    metric: "Laudo",
    metricLabel: "ejecutado",
    desc: "Disputa con contraparte europea bajo cláusula CCI. Bissu como abogado de parte. Laudo favorable, ejecución reconocida en México, cobro íntegro.",
    duration: "16 meses",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=1100&q=88&auto=format&fit=crop",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Casos() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <section
      id="casos"
      className="relative bg-ink-800 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div
        className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        05
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="05" label="Casos representativos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 mb-20 sm:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Resultados que <span className="italic">se cuentan en números</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <Reveal delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] mb-4 pretty">
                Una muestra del trabajo de los últimos años. Identidades
                reservadas por confidencialidad — los hechos y resultados son
                reales.
              </p>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                Casos seleccionados · 2022 — 2025
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured case */}
        <Reveal>
          <article className="group relative grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20 sm:mb-24 border-t border-b border-bone-50/15 py-10 lg:py-14">
            <div className="col-span-12 lg:col-span-7">
              <div className="img-frame relative aspect-[16/10] border border-bone-50/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  <Image
                    src={featured.image}
                    alt={`${featured.area} — caso destacado`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.92) contrast(1.06)" }}
                    priority
                  />
                </motion.div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,151,90,0.10) 0%, transparent 50%, rgba(35,31,32,0.18) 100%)",
                    mixBlendMode: "multiply",
                  }}
                  aria-hidden
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink-900/95 backdrop-blur-sm border border-bone-50/15 px-3 py-1.5 font-sans text-[10px] tracking-[0.22em] uppercase text-gold-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Caso destacado
                </span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col">
              <div className="flex items-baseline justify-between mb-6 pb-5 border-b border-bone-50/15">
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                  {featured.n} · {featured.area}
                </p>
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium tabular">
                  {featured.duration}
                </p>
              </div>

              <p className="font-display text-bone-50 leading-[0.92] tracking-tightest text-[88px] sm:text-[120px] lg:text-[140px] mb-1">
                {featured.metric}
                <span className="text-gold-400">.</span>
              </p>
              <p className="font-display italic text-bone-50 text-2xl sm:text-3xl mb-7 leading-[1.1]">
                {featured.metricLabel}
              </p>

              <p className="font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.7] pretty mb-auto">
                {featured.desc}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Grid 5 cases */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-y-14"
          variants={gridVariants}
          initial={reduce ? "show" : "hidden"}
          animate={inView ? "show" : "hidden"}
        >
          {cases.map((c) => (
            <motion.article
              key={c.n}
              variants={cardVariants}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="img-frame relative aspect-[4/3] mb-6 border border-bone-50/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduce ? undefined : { scale: 1.05 }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  <Image
                    src={c.image}
                    alt={`${c.area} — atmosférica`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.92) contrast(1.06)" }}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,151,90,0.10) 0%, transparent 50%, rgba(35,31,32,0.22) 100%)",
                    mixBlendMode: "multiply",
                  }}
                  aria-hidden
                />
              </div>

              {/* Meta row */}
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-bone-50/15 transition-colors duration-500 group-hover:border-gold-400/40">
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold-600 font-medium">
                  {c.n} · {c.area}
                </p>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium tabular">
                  {c.duration}
                </p>
              </div>

              {/* Big outcome metric */}
              <p className="font-display text-bone-50 text-[44px] sm:text-[52px] leading-[0.98] tracking-tightest mb-2 transition-colors duration-500 group-hover:text-gold-600 balance">
                {c.metric}
                <span className="text-gold-400">.</span>
              </p>
              <p className="font-display italic text-bone-300 text-[15px] sm:text-base leading-[1.2] mb-4">
                {c.metricLabel}
              </p>

              <p className="font-body text-bone-50 text-[13px] sm:text-[14px] leading-[1.7] pretty">
                {c.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={200}>
          <p className="mt-20 font-body italic text-bone-300 text-[12px] leading-[1.75] max-w-2xl">
            * Los resultados pasados no garantizan resultados futuros. Cada caso
            se evalúa individualmente. La descripción omite elementos
            identificatorios para preservar el secreto profesional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
