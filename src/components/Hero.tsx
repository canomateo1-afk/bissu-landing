"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import Counter from "./Counter";
import AwardBadge from "./AwardBadge";
import { events } from "@/lib/analytics";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const metaVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const wordContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.35 },
  },
};

const wordVariants: Variants = {
  hidden: { y: "115%", opacity: 0, skewY: 3 },
  show: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: { duration: 1, ease: EASE },
  },
};

const subContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.95 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const brushVariants: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EASE, delay: 1.6 },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Parallax — image translates as user scrolls
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 1200], [0, 100]);
  const imgScale = useTransform(scrollY, [0, 1200], [1, 1.06]);

  return (
    <section
      id="top"
      className="relative bg-ink-900 pt-44 sm:pt-52 pb-16 sm:pb-20 overflow-hidden"
      ref={ref}
    >
      {/* Atmospheric gradient mesh — subtle warm glow behind title */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 18% 38%, rgba(180,151,90,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 82% 22%, rgba(180,151,90,0.06) 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 50% 90%, rgba(35,31,32,0.05) 0%, transparent 60%)",
        }}
      />
      {/* Hairline grid markers — top corners (editorial detail) */}
      <div className="absolute top-[112px] left-6 sm:left-10 lg:left-14 w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent pointer-events-none" aria-hidden />
      <div className="absolute top-[112px] right-6 sm:right-10 lg:right-14 w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent pointer-events-none" aria-hidden />
      <div
        className="absolute top-[112px] left-0 right-0 hairline-gold opacity-60"
        aria-hidden
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mt-16 sm:mt-20">
        {/* Live availability badge — conversion trust signal */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mb-10 inline-flex items-center gap-3 border border-bone-50/15 bg-bone-50/[0.02] backdrop-blur-sm px-4 py-2"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-bone-50 font-medium">
            Disponible esta semana
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-bone-50/20" aria-hidden />
          <span className="hidden sm:inline-block font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-bone-300 font-medium">
            Respuesta en menos de 24 hs
          </span>
        </motion.div>

        {/* Editorial headline — kinetic word reveal with framer-motion */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-11">
            <motion.h1
              className="font-display font-normal text-bone-50 leading-[0.94] tracking-tightest text-[52px] sm:text-[80px] md:text-[112px] lg:text-[144px] xl:text-[172px]"
              variants={wordContainerVariants}
              initial={reduce ? "show" : "hidden"}
              animate="show"
            >
              <Word>Práctica</Word> <Word>jurídica</Word>
              <br />
              <span className="word-mask">
                <motion.span
                  className="inline-block italic relative"
                  variants={wordVariants}
                  style={{ willChange: "transform, opacity" }}
                >
                  de fondo
                  <motion.span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-[0.06em] h-[0.08em] origin-left"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 0%, #B4975A 8%, #C2A368 50%, #B4975A 92%, transparent 100%)",
                    }}
                    variants={brushVariants}
                  />
                </motion.span>
              </span>
              <Word className="text-gold-400">.</Word>
            </motion.h1>
          </div>
        </div>

        {/* Lower band — body Baskerville for editorial gravitas */}
        <motion.div
          className="mt-20 grid grid-cols-12 gap-6 items-end"
          variants={subContainerVariants}
          initial={reduce ? "show" : "hidden"}
          animate="show"
        >
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              className="flex gap-5"
              variants={fadeUpVariants}
            >
              <span className="pleca pleca-lg shrink-0 mt-1.5" aria-hidden />
              <div className="max-w-xl">
                <p className="font-body text-bone-50 text-[17px] sm:text-[19px] leading-[1.55] mb-6 balance">
                  Despacho boutique en CDMX especializado en{" "}
                  <span className="text-bone-50">litigio complejo</span> y{" "}
                  <span className="text-bone-50">arbitraje internacional</span>{" "}
                  para empresas, instituciones e individuos en todo México.
                </p>
                {/* 3 concrete promises — conversion-led */}
                <ul className="space-y-2.5">
                  {[
                    "Dictamen escrito en 24 horas",
                    "Honorarios transparentes desde el día 1",
                    "Atención directa con abogado titular",
                  ].map((promise) => (
                    <li
                      key={promise}
                      className="flex items-start gap-3 font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.5]"
                    >
                      <span className="shrink-0 mt-1.5 text-gold-400" aria-hidden>
                        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                          <path
                            d="M2 6.2 L4.6 8.6 L10 3.4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="col-span-12 lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:justify-end"
            variants={fadeUpVariants}
          >
            <div className="flex flex-col items-stretch lg:items-end gap-3 w-full lg:w-auto">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <MagneticButton
                  href="#contacto"
                  onClick={() => events.ctaClick("hero", "Agenda consulta gratuita")}
                >
                  Agenda consulta gratuita
                  <span className="text-base leading-none arrow-drift">→</span>
                </MagneticButton>
                <MagneticButton
                  href="https://walink.co/727927"
                  external
                  variant="ghost"
                  onClick={() => events.whatsappClick("hero")}
                >
                  WhatsApp directo
                  <span className="text-base leading-none">↗</span>
                </MagneticButton>
              </div>
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
                20 min · Sin compromiso · Vía video o presencial
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats — bento asimétrico: 1 hero stat + 3 satellites */}
        <motion.div
          className="mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.09, delayChildren: 1.15 },
            },
          }}
          initial={reduce ? "show" : "hidden"}
          animate="show"
        >
          {/* Hero stat — col-span 3 */}
          <motion.div
            variants={fadeUpVariants}
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="col-span-2 lg:col-span-3 relative border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8 overflow-hidden group"
          >
            {/* Subtle gold glow on hover */}
            <span
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(180,151,90,0.10) 0%, transparent 60%)",
              }}
            />
            <div className="relative flex items-baseline justify-between gap-4 mb-1">
              <p className="font-display text-[88px] sm:text-[120px] lg:text-[140px] leading-none text-bone-50 tracking-tightest tabular">
                <Counter to={8} delay={1.2} pad={2} />
                <span className="text-gold-400">+</span>
              </p>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium hidden sm:block">
                Est. 2017
              </p>
            </div>
            <div className="relative flex items-center gap-3 mt-3">
              <span className="pleca pleca-sm" aria-hidden />
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-bone-50 font-medium">
                Años defendiendo casos en México
              </p>
            </div>
            {/* Mini timeline accent — visual sparkline */}
            <div className="relative mt-5 flex items-end gap-1 h-3" aria-hidden>
              {[0.4, 0.55, 0.45, 0.7, 0.65, 0.8, 0.75, 0.95].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors duration-500"
                  style={{ height: `${h * 100}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Satellite 1 — Áreas */}
          <motion.div
            variants={fadeUpVariants}
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="col-span-1 relative border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6 group"
          >
            <p className="font-display text-[44px] sm:text-[56px] leading-none text-bone-50 tracking-tightest tabular mb-3">
              <Counter to={6} delay={1.35} pad={2} />
            </p>
            <div className="flex gap-1 mb-4" aria-hidden>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gold-400/50"
                />
              ))}
            </div>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">
              Áreas activas
            </p>
          </motion.div>

          {/* Satellite 2 — Respuesta (live pulse) */}
          <motion.div
            variants={fadeUpVariants}
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="col-span-1 relative border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6 group"
          >
            <span className="absolute top-4 right-4 flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <p className="font-display text-[44px] sm:text-[56px] leading-none text-bone-50 tracking-tightest tabular mb-3">
              {"< "}
              <Counter to={24} delay={1.5} />
              <span className="text-gold-400 lowercase">h</span>
            </p>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">
              Respuesta inicial
            </p>
            <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold-600 font-medium mt-1">
              En vivo
            </p>
          </motion.div>

          {/* Satellite 3 — Recognized */}
          <motion.a
            href="https://www.bestlawyers.com/firms/bissu-abogados/99213/MX"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUpVariants}
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="col-span-1 relative border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6 group hover:border-gold-400/50 transition-colors duration-500"
          >
            <span
              aria-hidden
              className="absolute top-4 right-4 text-bone-400 group-hover:text-gold-400 transition-colors duration-500 text-sm"
            >
              ↗
            </span>
            <p className="font-display italic text-[36px] sm:text-[44px] leading-none text-bone-50 tracking-tightest mb-3">
              Top
            </p>
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium leading-[1.5]">
              Best Lawyers
              <br />
              Mexico 2026
            </p>
          </motion.a>
        </motion.div>

        {/* Award badges — visual recognitions */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="pleca pleca-sm" aria-hidden />
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
              Reconocidos por
            </p>
            <span className="flex-1 h-px bg-bone-50/15 ml-3" aria-hidden />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <AwardBadge
              icon="laurel"
              subtitle="Best Lawyers"
              year="2026"
              title="The Best Lawyers in Mexico"
              href="https://www.bestlawyers.com/firms/bissu-abogados/99213/MX"
              delay={1.55}
            />
            <AwardBadge
              icon="medal"
              subtitle="Leaders League"
              year="2025"
              title="Resolución de Conflictos · México"
              delay={1.65}
            />
            <AwardBadge
              icon="diamond"
              subtitle="Tops · Diamante"
              year="2025"
              title="Los Mejores Abogados de México"
              delay={1.75}
            />
          </div>
        </div>
      </div>

      {/* Editorial photo: full-bleed below with motion parallax + clip reveal */}
      <div className="mt-20 sm:mt-28 relative">
        <div className="img-frame relative aspect-[16/9] sm:aspect-[21/9]">
          <motion.div
            className="absolute inset-0"
            initial={reduce ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.7 }}
            style={{ y: imgY, scale: imgScale, willChange: "transform, clip-path" }}
          >
            <Image
              src="/images/hero-1.jpg"
              alt="Oficinas Bissu Abogados — Polanco, CDMX"
              fill
              className="object-cover"
              style={{ filter: "saturate(0.85) contrast(1.04)" }}
              priority
              quality={92}
              sizes="100vw"
            />
          </motion.div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 55%, rgba(35,31,32,0.22) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mt-5 flex items-baseline justify-between flex-wrap gap-2">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
            Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
          </p>
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium tabular">
            19.4326° N · 99.1332° W
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="word-mask">
      <motion.span
        className={`inline-block ${className}`}
        variants={wordVariants}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function StatCell({
  counter,
  label,
  border,
}: {
  counter: React.ReactNode;
  label: string;
  border?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`py-7 px-1 sm:px-4 ${border ? "border-r border-bone-50/12" : ""}`}
    >
      <p className="font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-none text-bone-50 tracking-tightest">
        {counter}
      </p>
      <p className="mt-3 font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">
        {label}
      </p>
    </motion.div>
  );
}

function Meta({
  label,
  value,
  hideOnMobile,
}: {
  label: string;
  value: string;
  hideOnMobile?: boolean;
}) {
  return (
    <motion.div
      variants={metaVariants}
      className={`col-span-6 sm:col-span-3 ${
        hideOnMobile ? "hidden sm:flex" : "flex"
      } gap-3`}
    >
      <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
      <div>
        <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-1">
          {label}
        </p>
        <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-bone-50 font-medium">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
