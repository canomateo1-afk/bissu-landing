"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const articles = [
  {
    category: "Litigio Civil",
    title: "Qué hacer si te demandan civilmente: los primeros 30 días",
    date: "Mar 19, 2025",
    readTime: "7 min lectura",
    image:
      "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=900&q=82&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Litigio Concursal",
    title: "Concurso mercantil: cuándo conviene solicitarlo y cómo se inicia",
    date: "Mar 12, 2025",
    readTime: "9 min lectura",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=82&auto=format&fit=crop",
    href: "#",
  },
  {
    category: "Litigio Familiar",
    title:
      "Custodia compartida internacional: derechos del menor frente al traslado",
    date: "Feb 28, 2025",
    readTime: "6 min lectura",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=82&auto=format&fit=crop",
    href: "#",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

export default function Recursos() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, amount: 0.18 });
  const reduce = useReducedMotion();

  return (
    <section
      id="recursos"
      className="relative bg-ink-800 py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div
        className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
        aria-hidden
      >
        07
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative">
        <SectionLabel n="07" label="Recursos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16 items-end mb-20 sm:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Últimos <span className="italic">artículos</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <Reveal delay={120}>
              <p className="font-body text-bone-50 text-[15px] leading-[1.75] mb-5 pretty">
                Análisis y guías escritas por nuestro equipo. Lectura útil
                para entender cómo enfrentar cada tipo de proceso.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 group font-sans text-[11px] tracking-[0.22em] uppercase text-bone-50 link-underline font-medium"
              >
                Ver todos los artículos
                <span className="text-base leading-none arrow-drift">→</span>
              </a>
            </Reveal>
          </div>
        </div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          variants={gridVariants}
          initial={reduce ? "show" : "hidden"}
          animate={inView ? "show" : "hidden"}
        >
          {articles.map((a) => (
            <motion.a
              key={a.title}
              href={a.href}
              variants={cardVariants}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group block"
            >
              <div className="img-frame relative aspect-[4/5] mb-6 bg-ink-700 border border-bone-50/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.85) contrast(1.04)" }}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(35,31,32,0.35) 0%, transparent 45%)",
                  }}
                  aria-hidden
                />
                <span className="absolute top-4 left-4 inline-block bg-ink-900/95 backdrop-blur-sm border border-bone-50/15 px-3 py-1.5 font-sans text-[10px] tracking-[0.22em] uppercase text-bone-50 font-medium">
                  {a.category}
                </span>
              </div>

              <h3 className="font-display text-bone-50 text-xl sm:text-2xl leading-[1.2] mb-6 transition-colors duration-500 group-hover:text-gold-600 balance">
                {a.title}
              </h3>

              <div className="flex items-center gap-4 pt-4 border-t border-bone-50/15 transition-colors duration-500 group-hover:border-gold-400/40">
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium tabular">
                  {a.date}
                </span>
                <span className="w-6 h-px bg-bone-50/30" aria-hidden />
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium">
                  {a.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
