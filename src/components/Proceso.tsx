"use client";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    n: "01",
    duration: "Día 1",
    title: "Consulta inicial gratuita",
    body: "Reunión gratuita de 20 min. Escuchamos tu caso, identificamos el área aplicable y decimos si Bissu es el equipo adecuado o no.",
  },
  {
    n: "02",
    duration: "Días 2 — 7",
    title: "Análisis y dictamen jurídico",
    body: "Revisamos documentos, antecedentes y contraparte. Entregamos un dictamen escrito con escenarios, riesgos, plazos y honorarios.",
  },
  {
    n: "03",
    duration: "Variable",
    title: "Ejecución del caso",
    body: "Asunción formal del caso. Trabajamos la estrategia acordada — un abogado titular es responsable directo y reporta avances periódicos.",
  },
  {
    n: "04",
    duration: "Cierre",
    title: "Resolución y cierre",
    body: "Sentencia, acuerdo o mecanismo alternativo. Cerramos con informe final y, si aplica, asesoramos en pasos posteriores.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.6, ease: EASE, delay: 0.4 },
  },
};

export default function Proceso() {
  const stepsRef = useRef(null);
  const inView = useInView(stepsRef, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <section
      id="proceso"
      className="relative bg-ink-900 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div
        className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        02
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="02" label="Cómo trabajamos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 mb-20 sm:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Proceso de un caso de{" "}
                <span className="italic">litigio y arbitraje</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <Reveal delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] pretty">
                Sabemos que un proceso jurídico genera ansiedad. Por eso
                operamos con un protocolo claro: sabes qué hacemos en cada
                etapa, cuánto demora y quién es tu interlocutor directo.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Horizontal timeline */}
        <motion.div
          ref={stepsRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          {/* Animated connector line behind the dots (desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px overflow-hidden">
            <motion.div
              variants={lineVariants}
              className="h-full origin-left bg-gradient-to-r from-gold-400/60 via-gold-400/40 to-transparent"
              style={{ willChange: "transform" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={cardVariants}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="group relative"
              >
                {/* Dot marker */}
                <div className="flex items-center gap-4 mb-7">
                  <span
                    className="relative shrink-0 w-[14px] h-[14px] rounded-full bg-gold-400 ring-4 ring-ink-900 transition-all duration-500 group-hover:bg-gold-500 group-hover:ring-gold-400/20"
                    aria-hidden
                  >
                    <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-0 group-hover:opacity-30" />
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                    {s.duration}
                  </span>
                </div>

                <p className="font-display italic text-[68px] sm:text-[80px] lg:text-[96px] leading-none text-gold-400 tracking-tightest -mt-2 mb-4 transition-colors duration-500 group-hover:text-gold-500">
                  {s.n}
                </p>

                <h3 className="font-display text-bone-50 text-2xl sm:text-3xl lg:text-[28px] leading-[1.1] mb-4 transition-colors duration-500 group-hover:text-gold-600 balance">
                  {s.title}
                </h3>

                <p className="font-body text-bone-300 text-[14px] leading-[1.7] pretty">
                  {s.body}
                </p>

                {/* Connector arrow on mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-10 flex items-center gap-3" aria-hidden>
                    <span className="h-px flex-1 bg-bone-50/15" />
                    <span className="text-gold-400 text-sm">↓</span>
                    <span className="h-px flex-1 bg-bone-50/15" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
