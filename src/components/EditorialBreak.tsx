"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  fig?: string;
  quote?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function EditorialBreak({
  src,
  alt,
  caption = "Polanco, CDMX",
  fig = "Fig. 03",
  quote,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-900"
      aria-label="Editorial break"
    >
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[480px] max-h-[820px]">
        <motion.div
          className="absolute inset-0"
          style={reduce ? {} : { y }}
        >
          <motion.div
            className="absolute inset-0"
            initial={
              reduce
                ? { clipPath: "inset(0 0 0 0)" }
                : { clipPath: "inset(0 100% 0 0)" }
            }
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.6, ease: EASE }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
              style={{
                filter: "saturate(0.92) contrast(1.08) brightness(0.92)",
              }}
              quality={92}
            />
          </motion.div>
        </motion.div>

        {/* Modern duotone — warm gold overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(180,151,90,0.12) 0%, transparent 50%, rgba(35,31,32,0.18) 100%)",
            mixBlendMode: "multiply",
          }}
          aria-hidden
        />
        {/* Vignette + bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(35,31,32,0.0) 30%, rgba(35,31,32,0.55) 100%), radial-gradient(ellipse at center, transparent 50%, rgba(35,31,32,0.32) 100%)",
          }}
          aria-hidden
        />

        {/* Editorial caption corners */}
        <div className="absolute top-0 left-0 right-0 px-6 sm:px-10 lg:px-14 py-6 sm:py-8 flex items-baseline justify-between">
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-bone-50/90 font-medium">
            {fig} · {caption}
          </p>
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-bone-50/70 font-medium tabular">
            BIS · 2017
          </p>
        </div>

        {quote && (
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16">
            <div className="max-w-[1440px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 1, ease: EASE, delay: 0.5 }}
                className="flex gap-5"
              >
                <span
                  className="pleca pleca-lg shrink-0 mt-3"
                  aria-hidden
                />
                <p className="font-display italic text-bone-50 text-2xl sm:text-4xl lg:text-5xl leading-[1.18] tracking-tightest font-normal max-w-3xl balance">
                  {quote}
                </p>
              </motion.div>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 hairline-gold opacity-50" aria-hidden />
        <div className="absolute top-0 left-0 right-0 hairline-gold opacity-50" aria-hidden />
      </div>
    </section>
  );
}
