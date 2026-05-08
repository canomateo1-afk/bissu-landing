"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  headline: string;
  italicWord?: string;
  microcopy?: string;
  ctaLabel?: string;
  href?: string;
  variant?: "dark" | "light";
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MidCTA({
  headline,
  italicWord,
  microcopy = "20 min · Sin compromiso · Respuesta en menos de 24 hs",
  ctaLabel = "Agenda consulta gratuita",
  href = "#contacto",
  variant = "dark",
}: Props) {
  const reduce = useReducedMotion();

  const bg = variant === "light" ? "bg-ink-800" : "bg-ink-900";
  const border = variant === "light" ? "border-bone-50/15" : "border-bone-50/15";

  // Render headline with italic accent if italicWord provided
  const renderedHeadline = italicWord ? (
    <>
      {headline.split(italicWord)[0]}
      <span className="italic">{italicWord}</span>
      {headline.split(italicWord)[1]}
    </>
  ) : (
    headline
  );

  return (
    <section
      className={`relative ${bg} py-16 sm:py-20 lg:py-24 overflow-hidden`}
      aria-label="Mid-page CTA"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className={`grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center pt-10 sm:pt-14 border-t ${border}`}
        >
          <div className="col-span-12 lg:col-span-8">
            <p className="font-display font-normal text-bone-50 leading-[1.05] tracking-tightest text-[34px] sm:text-[44px] lg:text-[52px] balance">
              {renderedHeadline}
              <span className="text-gold-400">.</span>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:flex lg:flex-col lg:items-end">
            <a
              href={href}
              className="group relative inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 font-sans text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-gold-400 transition-colors"
            >
              {ctaLabel}
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            {microcopy && (
              <p className="mt-3 font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium">
                {microcopy}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
