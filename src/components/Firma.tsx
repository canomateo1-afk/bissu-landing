"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Firma() {
  const reduce = useReducedMotion();

  return (
    <section id="firma" className="relative bg-ink-800 py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="01" label="Nuestra firma" />

        {/* Headline + atmospheric photo split */}
        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] balance">
                Despacho jurídico<br />
                en <span className="italic">Polanco, CDMX</span>
                <span className="text-gold-400">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={140}>
              <motion.div
                className="img-frame relative aspect-[4/5] border border-bone-50/10"
                initial={reduce ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.4, ease: EASE }}
              >
                <Image
                  src="/images/hero-2.jpg"
                  alt="Biblioteca de Bissu Abogados — despacho jurídico en Polanco, CDMX"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.06)" }}
                />
                {/* Warm duotone overlay — modern editorial */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,151,90,0.10) 0%, transparent 50%, rgba(35,31,32,0.18) 100%)",
                    mixBlendMode: "multiply",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 50%, rgba(35,31,32,0.28) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between text-bone-50">
                  <p className="font-sans text-[10px] tracking-[0.28em] uppercase font-medium">
                    Fig. 02 · Biblioteca
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.28em] uppercase font-medium tabular">
                    BIS · 2017
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>

        {/* Body intro paragraph below the split */}
        <div className="mt-20 grid grid-cols-12 gap-y-8 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5 lg:col-start-1">
            <Reveal>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] mb-6 pretty">
                Bissu Abogados, S.C. es un despacho de abogados especializado
                en litigio y arbitraje en Ciudad de México, con profunda
                experiencia y conocimiento legal, fundado por abogados
                preparados para enfrentar las necesidades complejas de nuestros
                clientes.
              </p>
              <p className="font-body text-bone-300 text-[14px] leading-[1.75] pretty">
                Asesoramos a empresas nacionales e internacionales,
                instituciones e individuos en todo México, desarrollando
                soluciones a los asuntos y retos de cada caso.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
