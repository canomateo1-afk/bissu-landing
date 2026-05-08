"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

// ============================================================
// V2 Root — composes all sections
// ============================================================
export default function V2Root() {
  return (
    <div className="v2-root min-h-screen">
      <V2Nav />
      <V2Hero />
      <V2TrustMarquee />
      <V2Pillars />
      <V2AreasTabbed />
      <V2Stats />
      <V2Comparison />
      <V2Quote />
      <V2Testimonials />
      <V2Trust />
      <V2ConsultCard />
      <V2Footer />
    </div>
  );
}

// ============================================================
// Sticky Nav — transparent on hero, blur on scroll
// ============================================================
function V2Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF7]/85 backdrop-blur-xl border-b border-[rgba(10,10,10,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-medium text-[18px] tracking-[-0.04em]">
            Bissu
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A5A5A] font-medium">
            Abogados
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {[
            ["Áreas", "#areas"],
            ["Casos", "#stats"],
            ["Por qué Bissu", "#comparison"],
            ["Recursos", "#"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium text-[#0A0A0A] hover:text-[#8C7339] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://walink.co/727927"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-[13px] font-medium text-[#0A0A0A] hover:text-[#8C7339] transition-colors"
          >
            WhatsApp
          </a>
          <a href="#cta" className="v2-btn">
            Agenda consulta
            <span className="v2-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Hero — type-led, big headline, dual CTA, subtle preview
// ============================================================
function V2Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Asymmetric split: 40/60 inspired by Function Health */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Left: text 40% (5 cols) */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 border border-[rgba(10,10,10,0.12)] bg-white/60 backdrop-blur-sm px-3 py-1.5 mb-10"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4975A] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B4975A]" />
              </span>
              <span className="text-[11px] font-medium tracking-[-0.005em] text-[#0A0A0A]">
                Disponible esta semana
              </span>
              <span className="w-px h-3 bg-[rgba(10,10,10,0.15)]" aria-hidden />
              <span className="text-[11px] text-[#5A5A5A]">
                Respuesta &lt; 24h
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
              className="v2-h1"
            >
              Litigio complejo,
              <br />
              <em>sin ambigüedad</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
              className="mt-7 text-[16px] sm:text-[18px] leading-[1.55] text-[#5A5A5A] max-w-md"
            >
              Despacho boutique en CDMX especializado en litigio civil,
              mercantil, concursal y arbitraje internacional.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              className="mt-7 space-y-2"
            >
              {[
                "Dictamen escrito en 24 horas",
                "Honorarios transparentes desde el día 1",
                "Atención directa con abogado titular",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-[14px] text-[#0A0A0A]"
                >
                  <span className="shrink-0 mt-1.5 text-[#B4975A]">
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
                  <span>{p}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#cta" className="v2-btn">
                Agenda consulta gratuita
                <span className="v2-btn-arrow">→</span>
              </a>
              <a href="#areas" className="v2-btn v2-btn-secondary">
                Ver áreas
              </a>
            </motion.div>
            <p className="mt-3 text-[11px] text-[#8E8E8E]">
              20 min · Sin compromiso · Vía video o presencial
            </p>
          </div>

          {/* Right: image 60% (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[6/7] overflow-hidden border border-[rgba(10,10,10,0.10)]">
              <Image
                src="/images/hero-1.jpg"
                alt="Oficinas Bissu Abogados — Polanco, CDMX"
                fill
                className="object-cover"
                style={{ filter: "saturate(0.95) contrast(1.05)" }}
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(180,151,90,0.06) 0%, transparent 40%, rgba(15,14,13,0.18) 100%)",
                }}
                aria-hidden
              />
              {/* Floating credit chip top-left */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm px-3 py-1.5 border border-[rgba(10,10,10,0.08)]">
                <svg viewBox="0 0 12 12" className="w-3 h-3 text-[#B4975A]" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M3.5 6.2 L5.3 7.8 L8.5 4.4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[10px] font-medium tracking-[-0.005em] text-[#0A0A0A]">
                  Best Lawyers in Mexico 2026
                </span>
              </div>
              {/* Floating stat chip bottom-right */}
              <div className="absolute bottom-5 right-5 bg-[#0F0E0D] text-white px-4 py-3 max-w-[180px]">
                <p className="v2-stat v2-mono leading-none" style={{ fontSize: "2.25rem" }}>
                  60%<span className="text-[#B4975A]">.</span>
                </p>
                <p className="text-[10px] text-white/70 mt-1.5 leading-[1.4]">
                  Quita aprobada en convenio concursal típico
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact stats inline below CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="mt-20 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(10,10,10,0.10)] border border-[rgba(10,10,10,0.10)]"
        >
          {[
            { stat: "08+", label: "Años defendiendo casos en México" },
            { stat: "06", label: "Áreas de práctica activas" },
            { stat: "<24h", label: "Tiempo de respuesta inicial" },
            { stat: "Top", label: "Best Lawyers in Mexico 2026" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="bg-[#FAFAF7] p-6 sm:p-8"
            >
              <p className="v2-stat v2-mono text-[#0A0A0A]">
                {item.stat}
                {i === 0 && <span className="text-[#B4975A]">.</span>}
              </p>
              <p className="mt-3 text-[12px] text-[#5A5A5A] leading-[1.5] max-w-[16ch]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Trust marquee — auto-scrolling credentials
// ============================================================
function V2TrustMarquee() {
  const items = [
    "Best Lawyers in Mexico 2026",
    "Leaders League 2025",
    "Tops · Diamante 2025",
    "CCI · Cámara de Comercio Internacional",
    "Best Lawyers in Mexico 2026",
    "Leaders League 2025",
    "Tops · Diamante 2025",
    "CCI · Cámara de Comercio Internacional",
  ];

  return (
    <section className="py-10 border-y border-[rgba(10,10,10,0.10)] bg-[#FAFAF7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-6">
        <p className="v2-eyebrow v2-eyebrow-dot">
          Reconocidos por las firmas que rankean a los mejores
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="v2-marquee flex whitespace-nowrap items-center">
          {[...items, ...items].map((it, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-8 text-[14px] font-medium text-[#0A0A0A] tracking-[-0.005em]">
                {it}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#B4975A]" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Pillars — 4 modular value cards (like Legora's precedent grid)
// ============================================================
function V2Pillars() {
  const pillars = [
    {
      tag: "Diagnóstico",
      title: "Dictamen escrito en 24 horas",
      body: "Análisis de fondo con escenarios, plazos y honorarios estimados. Antes de firmar nada.",
    },
    {
      tag: "Honorarios",
      title: "Transparentes desde el día 1",
      body: "Tarifa fija, por hora o cuota litis. Sin sorpresas durante el proceso. Convenio firmado antes de empezar.",
    },
    {
      tag: "Atención",
      title: "Directa con abogado titular",
      body: "Sin derivaciones a juniors. Un solo punto de contacto, reporte periódico, decisiones explicadas.",
    },
    {
      tag: "Selección",
      title: "Solo casos que podemos ganar",
      body: "Si no aportamos valor o no tenemos el expertise, te referenciamos sin costo. Tu tiempo importa.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="v2-eyebrow v2-eyebrow-dot mb-5">El método Bissu</p>
          <h2 className="v2-h2">
            Cómo trabajamos cada caso, <em>punto por punto</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(10,10,10,0.10)] border border-[rgba(10,10,10,0.10)]">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="bg-[#FAFAF7] p-7 sm:p-9 group"
            >
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#B4975A] mb-6">
                0{i + 1} · {p.tag}
              </p>
              <h3 className="text-[20px] sm:text-[22px] font-medium leading-[1.2] tracking-[-0.025em] mb-4">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#5A5A5A]">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Areas tabbed — Legora-inspired interactive disclosure
// ============================================================
function V2AreasTabbed() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const areas = [
    {
      key: "civil",
      label: "Civil",
      title: "Litigio Civil",
      blurb: "Conflictos entre particulares por incumplimiento de obligaciones, daños patrimoniales o lesión a derechos individuales.",
      items: [
        "Interpretación y cumplimiento de contratos civiles",
        "Daños y perjuicios · daño moral",
        "Acciones colectivas",
        "Homologación de sentencias extranjeras",
        "Créditos, hipotecas y arrendamiento",
      ],
      stat: { value: "3.4×", label: "Indemnización promedio sobre daño directo" },
    },
    {
      key: "mercantil",
      label: "Mercantil",
      title: "Mercantil & Corporativo",
      blurb: "Sociedades, contratos mercantiles, conflictos accionarios, fideicomisos, títulos de crédito.",
      items: [
        "Contratos mercantiles complejos",
        "Conflictos entre accionistas y dilución",
        "Títulos y operaciones de crédito",
        "Fideicomisos, seguros y fianzas",
        "Convenios de no competencia",
      ],
      stat: { value: "14m", label: "Tiempo promedio para salida ordenada de socio" },
    },
    {
      key: "concursal",
      label: "Concursal",
      title: "Concurso Mercantil & Reestructura",
      blurb: "Reestructura de deuda con acreedores, convenios concursales, recuperación de créditos, insolvencia transfronteriza.",
      items: [
        "Concursos mercantiles y quiebras",
        "Convenios concursales para reestructurar",
        "Reconocimiento de créditos",
        "Insolvencia transfronteriza",
      ],
      stat: { value: "60%", label: "Quita aprobada en convenio concursal típico" },
    },
    {
      key: "familiar",
      label: "Familiar",
      title: "Derecho Familiar",
      blurb: "Divorcios, custodia compartida internacional, pensión alimenticia, restitución de menores, sucesiones.",
      items: [
        "Divorcios contenciosos y voluntarios",
        "Custodia compartida internacional",
        "Pensión alimenticia",
        "Restitución internacional de menores · Convenio de la Haya",
        "Sucesiones testamentarias e intestadas",
      ],
      stat: { value: "11m", label: "Tiempo promedio en custodia internacional" },
    },
    {
      key: "constitucional",
      label: "Constitucional",
      title: "Litigio Constitucional",
      blurb: "Juicio de amparo directo e indirecto, acciones de inconstitucionalidad, controversias constitucionales.",
      items: [
        "Juicio de amparo directo e indirecto",
        "Acciones de inconstitucionalidad",
        "Controversias constitucionales",
        "Suspensión del acto reclamado",
      ],
      stat: { value: "9m", label: "Tiempo promedio para concesión de amparo" },
    },
    {
      key: "arbitraje",
      label: "Arbitraje",
      title: "Arbitraje & MASC",
      blurb: "Arbitraje comercial internacional bajo CCI, ejecución de laudos, mediación, conciliación.",
      items: [
        "Arbitraje como abogado de parte o árbitro",
        "Ejecución y nulidad de laudos arbitrales",
        "Reconocimiento de laudos extranjeros",
        "Medidas cautelares en arbitraje",
        "Mediación y conciliación comercial",
      ],
      stat: { value: "16m", label: "Tiempo promedio en arbitraje comercial CCI" },
    },
  ];

  return (
    <section id="areas" className="py-20 sm:py-28 lg:py-32 bg-[#0F0E0D] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#B4975A] mb-5 inline-flex items-center">
            <span className="w-1.5 h-1.5 bg-[#B4975A] mr-2 rounded-full" />
            Áreas de práctica
          </p>
          <h2 className="v2-h2 text-white">
            Seis áreas. <em className="text-[#B4975A]">Una sola estrategia</em>.
          </h2>
        </div>

        {/* Tab list */}
        <div className="relative border-b border-white/10 mb-10 overflow-x-auto no-scrollbar" ref={tabsRef}>
          <div className="flex gap-1 min-w-max">
            {areas.map((a, i) => (
              <button
                key={a.key}
                onClick={() => setActive(i)}
                className={`relative px-5 py-4 text-[13px] font-medium transition-colors whitespace-nowrap ${
                  active === i ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                <span className="text-[10px] tracking-[0.12em] uppercase text-[#B4975A] mr-2">
                  0{i + 1}
                </span>
                {a.label}
                {active === i && (
                  <motion.span
                    layoutId="v2-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#B4975A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={areas[active].key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12"
          >
            <div className="lg:col-span-7">
              <h3 className="text-[28px] sm:text-[40px] font-medium leading-[1.1] tracking-[-0.035em] mb-5">
                {areas[active].title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-white/70 max-w-xl mb-10">
                {areas[active].blurb}
              </p>

              <ul className="space-y-3 mb-10">
                {areas[active].items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-[1.55] text-white/85"
                  >
                    <span className="mt-1.5 shrink-0 w-3 h-px bg-[#B4975A]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white hover:text-[#B4975A] transition-colors"
              >
                Consultar caso de {areas[active].label.toLowerCase()}
                <span className="text-base leading-none">→</span>
              </a>
            </div>

            <div className="lg:col-span-5 flex items-center">
              <div className="border border-white/10 p-8 sm:p-10 w-full">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/50 mb-5">
                  Caso representativo
                </p>
                <p className="v2-stat v2-mono text-white mb-3">
                  {areas[active].stat.value}
                  <span className="text-[#B4975A]">.</span>
                </p>
                <p className="text-[14px] leading-[1.55] text-white/70">
                  {areas[active].stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ============================================================
// Stats — Legora-inspired ROI-style
// ============================================================
function V2Stats() {
  return (
    <section id="stats" className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="v2-eyebrow v2-eyebrow-dot mb-5">Casos representativos</p>
          <h2 className="v2-h2">
            Resultados que <em>se cuentan en números</em>.
          </h2>
        </div>

        {/* Featured stat — full-width hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="border border-[rgba(10,10,10,0.10)] bg-white p-8 sm:p-12 lg:p-16 mb-px grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#B4975A] mb-6">
              01 · Litigio Concursal · 18 meses
            </p>
            <p
              className="font-medium tabular-nums tracking-[-0.05em] leading-[0.9] text-[#0A0A0A]"
              style={{ fontSize: "clamp(5rem, 14vw, 11rem)" }}
            >
              60%<span className="text-[#B4975A]">.</span>
            </p>
            <p
              className="mt-3 leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
            >
              de quita aprobada
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.6] text-[#5A5A5A] max-w-md">
              Empresa industrial con tres generaciones operando, con pasivo
              bancario impagable post-pandemia. Negociamos un convenio
              concursal con acreedores y la operación continuó sin
              liquidación.
            </p>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-[#0A0A0A] hover:text-[#8C7339] transition-colors"
            >
              Tu caso encaja con esto
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </motion.div>

        {/* Smaller stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(10,10,10,0.10)] border-x border-b border-[rgba(10,10,10,0.10)]">
          {[
            {
              area: "Litigio Civil",
              metric: "3.4×",
              label: "indemnización",
              desc: "Persona física vs multinacional. Sentencia favorable + costas.",
              duration: "22 meses",
            },
            {
              area: "Litigio Familiar",
              metric: "Custodia",
              label: "internacional",
              desc: "Hijos en CDMX, padre en el extranjero. Convenio + ratificación judicial.",
              duration: "11 meses",
            },
            {
              area: "MASC · Arbitraje",
              metric: "Laudo",
              label: "ejecutado",
              desc: "Disputa con contraparte europea bajo CCI. Cobro íntegro en MX.",
              duration: "16 meses",
            },
          ].map((c, i) => (
            <motion.div
              key={c.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="bg-white p-7 sm:p-9"
            >
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#B4975A]">
                  0{i + 2} · {c.area}
                </p>
                <p className="text-[11px] font-medium text-[#5A5A5A] tabular-nums">
                  {c.duration}
                </p>
              </div>
              <p className="v2-stat v2-mono text-[#0A0A0A] mb-1">
                {c.metric}
              </p>
              <p
                className="leading-[1.2] mb-5 text-[#5A5A5A]"
                style={{ fontSize: "1.125rem", fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
              >
                {c.label}
              </p>
              <p className="text-[14px] leading-[1.55] text-[#0A0A0A]">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Comparison — modern side-by-side
// ============================================================
function V2Comparison() {
  const rows = [
    {
      label: "Quién maneja tu caso",
      bissu: "Abogado titular como responsable directo",
      others: "Derivado a junior tras la primera reunión",
    },
    {
      label: "Diagnóstico inicial",
      bissu: "Dictamen escrito en 24 horas con escenarios y honorarios",
      others: "Diagnóstico verbal sin documento de respaldo",
    },
    {
      label: "Comunicación",
      bissu: "Un solo punto de contacto · reporte periódico",
      others: "Múltiples interlocutores · sin continuidad",
    },
    {
      label: "Honorarios",
      bissu: "Transparentes desde el día 1 · plan de pago",
      others: "Opacos · ajustes recurrentes durante el proceso",
    },
    {
      label: "Selección de casos",
      bissu: "Solo casos donde aportamos valor real",
      others: "Cualquier caso por volumen",
    },
    {
      label: "Reconocimientos",
      bissu: "Best Lawyers · Leaders League · Tops Diamante",
      others: "Sin reconocimientos verificables",
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="v2-eyebrow v2-eyebrow-dot mb-5">Por qué Bissu</p>
          <h2 className="v2-h2">
            Bissu vs un <em>despacho tradicional</em>.
          </h2>
        </div>

        <div className="border border-[rgba(10,10,10,0.10)] bg-white">
          {/* Header */}
          <div className="grid grid-cols-12 border-b border-[rgba(10,10,10,0.10)]">
            <div className="col-span-12 sm:col-span-4 p-5 sm:p-6">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#5A5A5A]">
                Criterio
              </p>
            </div>
            <div className="col-span-6 sm:col-span-4 p-5 sm:p-6 bg-[#0F0E0D] text-white relative">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4975A] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B4975A]" />
                </span>
                <p className="text-[15px] font-medium tracking-[-0.02em]">Bissu</p>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 p-5 sm:p-6">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8E8E8E]">
                Despacho tradicional
              </p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
              className={`grid grid-cols-12 ${
                i < rows.length - 1
                  ? "border-b border-[rgba(10,10,10,0.10)]"
                  : ""
              }`}
            >
              <div className="col-span-12 sm:col-span-4 p-5 sm:p-7">
                <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#5A5A5A]">
                  {row.label}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-4 p-5 sm:p-7 bg-[#0F0E0D] text-white flex gap-3">
                <span className="shrink-0 mt-1 text-[#B4975A]">
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
                <p className="text-[14px] leading-[1.55]">{row.bissu}</p>
              </div>
              <div className="col-span-12 sm:col-span-4 p-5 sm:p-7 flex gap-3">
                <span className="shrink-0 mt-1 text-[#8E8E8E]">
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path
                      d="M3.5 3.5 L8.5 8.5 M8.5 3.5 L3.5 8.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="text-[14px] leading-[1.55] text-[#5A5A5A]">
                  {row.others}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Quote — founder vision
// ============================================================
function V2Quote() {
  return (
    <section className="py-24 sm:py-32 bg-[#0F0E0D] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#B4975A] mb-10">
          Visión
        </p>
        <blockquote
          className="font-medium leading-[1.15] tracking-[-0.04em] max-w-5xl"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          <em
            style={{
              fontFamily: "var(--font-display), serif",
              fontWeight: 400,
            }}
          >
            "
          </em>
          Un caso jurídico no se resuelve con volumen ni con jerga. Se resuelve con análisis de fondo, criterio y un titular que responde por su trabajo.
          <em
            style={{
              fontFamily: "var(--font-display), serif",
              fontWeight: 400,
            }}
          >
            "
          </em>
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 text-[15px] font-medium">
            SB
          </div>
          <div>
            <p className="text-[14px] font-medium">Samuel Bissu Bazbaz</p>
            <p className="text-[12px] text-white/60">
              Socio fundador y Director · Bissu Abogados, S.C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Trust — credentials grid (Legora-style)
// ============================================================
function V2Trust() {
  const items = [
    { name: "Best Lawyers", year: "2026", desc: "in Mexico" },
    { name: "Leaders League", year: "2025", desc: "Resolución de Conflictos" },
    { name: "Tops · Diamante", year: "2025", desc: "Los Mejores Abogados" },
    { name: "Universidad Panamericana", year: "—", desc: "Maestría · Founder" },
    { name: "CCI", year: "—", desc: "Cámara Comercio Internacional" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="v2-eyebrow v2-eyebrow-dot mb-5">Credenciales</p>
          <h2 className="v2-h2">
            Verificable, no decorativo<em>.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[rgba(10,10,10,0.10)] border border-[rgba(10,10,10,0.10)]">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 flex flex-col justify-between min-h-[140px] group hover:bg-[#FAFAF7] transition-colors"
            >
              <div>
                <p className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#B4975A] mb-2">
                  {item.year}
                </p>
                <p className="text-[14px] font-medium leading-[1.25] tracking-[-0.015em]">
                  {item.name}
                </p>
              </div>
              <p className="text-[11px] text-[#5A5A5A]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials — circular avatars + brand badges (Function Health-inspired)
// ============================================================
function V2Testimonials() {
  const items = [
    {
      quote:
        "Negociaron una reestructura concursal que mantuvo operando una empresa con tres generaciones. El dictamen escrito desde el día 1 cambió completamente cómo vivimos el proceso.",
      name: "M. R.",
      role: "Directora · Empresa industrial · Reestructura concursal",
      initials: "MR",
      brand: "Caso 2024",
    },
    {
      quote:
        "Lo que diferencia a Bissu es la honestidad inicial. En la primera reunión nos dijeron qué escenarios tenían riesgo y cuáles no. Sin esa transparencia no hubiéramos avanzado.",
      name: "J. A.",
      role: "CFO · Multinacional · Litigio mercantil",
      initials: "JA",
      brand: "Caso 2024",
    },
    {
      quote:
        "Custodia compartida internacional con régimen y pensión asegurados en moneda dura. Once meses de proceso pero con un titular que respondió cada mensaje.",
      name: "L. F.",
      role: "Persona física · Litigio familiar",
      initials: "LF",
      brand: "Caso 2025",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="v2-eyebrow v2-eyebrow-dot mb-5">Lo que dicen los clientes</p>
          <h2 className="v2-h2">
            Testimonios <em>anonimizados, verificados</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(10,10,10,0.10)] border border-[rgba(10,10,10,0.10)]">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="bg-white p-7 sm:p-8 flex flex-col"
            >
              {/* Quote mark */}
              <span
                className="text-[#B4975A] leading-none mb-4"
                style={{ fontFamily: "var(--font-display), serif", fontSize: "3rem" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="text-[15px] leading-[1.55] text-[#0A0A0A] mb-8 flex-1">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-[rgba(10,10,10,0.10)] flex items-center gap-4">
                {/* Circular avatar with initials */}
                <span className="shrink-0 w-11 h-11 rounded-full bg-[#0F0E0D] text-white inline-flex items-center justify-center text-[13px] font-medium tracking-[-0.005em]">
                  {t.initials}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#0A0A0A]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#5A5A5A] leading-[1.4] mt-0.5">
                    {t.role}
                  </p>
                </div>
                {/* Brand badge */}
                <span className="shrink-0 inline-flex items-center gap-1 border border-[rgba(10,10,10,0.12)] px-2 py-0.5 text-[9px] font-medium tracking-[0.06em] uppercase text-[#5A5A5A]">
                  {t.brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Below: brand authority strip */}
        <div className="mt-12 pt-8 border-t border-[rgba(10,10,10,0.10)] flex flex-wrap items-center gap-x-10 gap-y-4">
          <p className="text-[11px] tracking-[0.06em] uppercase text-[#5A5A5A] font-medium">
            Verificado por
          </p>
          {["Best Lawyers in Mexico 2026", "Leaders League 2025", "Tops · Diamante"].map(
            (b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0A0A0A]"
              >
                <svg viewBox="0 0 12 12" className="w-3 h-3 text-[#B4975A]" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M3.5 6.2 L5.3 7.8 L8.5 4.4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Consult Card — pricing-style prominent card (Function Health-inspired)
// ============================================================
function V2ConsultCard() {
  const includes = [
    "Reunión 20 minutos · video o presencial",
    "Análisis del caso por abogado titular",
    "Identificación del área aplicable",
    "Recomendación honesta · Bissu o referencia",
    "Dictamen escrito post-consulta en 24 hs",
    "Sin cobro hasta firmar convenio",
  ];

  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 items-start">
          {/* Left — context */}
          <div className="lg:col-span-5">
            <p className="v2-eyebrow v2-eyebrow-dot mb-5">Agenda tu consulta</p>
            <h2 className="v2-h2 mb-8">
              Hablemos de tu caso<em>.</em>
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#5A5A5A] max-w-md mb-10">
              La consulta inicial es gratuita y sin compromiso. Si Bissu no es
              el despacho indicado, te referenciamos a uno mejor posicionado
              para tu caso — sin costo.
            </p>

            <div className="space-y-5">
              {[
                ["Disponibilidad", "Esta semana"],
                ["Modalidad", "Video o presencial · Polanco, CDMX"],
                ["Idioma", "Español · Inglés"],
                ["Confidencialidad", "Secreto profesional desde el primer contacto"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline gap-4 pb-4 border-b border-[rgba(10,10,10,0.08)]">
                  <p className="w-32 shrink-0 text-[11px] tracking-[0.08em] uppercase text-[#8E8E8E] font-medium">
                    {label}
                  </p>
                  <p className="text-[14px] text-[#0A0A0A]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-7 relative bg-[#0F0E0D] text-white p-10 sm:p-12 lg:p-14 overflow-hidden"
          >
            {/* Decorative gold corner */}
            <span
              aria-hidden
              className="absolute top-0 right-0 w-24 h-24"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(180,151,90,0.18) 0%, transparent 70%)",
              }}
            />

            <div className="flex items-start justify-between mb-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#B4975A] mb-3">
                  Consulta inicial
                </p>
                <p className="text-[14px] text-white/60">
                  Una reunión, sin compromiso. La duración exacta para que sepas si Bissu es para vos.
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-[10px] font-medium tracking-[0.08em] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4975A] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B4975A]" />
                </span>
                Hoy disponible
              </span>
            </div>

            {/* Big "price" — gratuita */}
            <div className="flex items-baseline gap-5 mb-2">
              <p className="v2-stat v2-mono leading-none" style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}>
                Gratuita
                <span className="text-[#B4975A]">.</span>
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="text-[18px] sm:text-[22px] text-white/70" style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic" }}>
                · 20 minutos
              </p>
              <p className="text-[12px] text-white/50">·  $0 hasta firmar convenio</p>
            </div>

            {/* What's included */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[13px] text-white/85 leading-[1.5]">
                  <span className="shrink-0 mt-1 text-[#B4975A]">
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
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] px-7 py-4 text-[14px] font-medium hover:bg-[#B4975A] hover:text-white transition-colors"
              >
                Agenda consulta gratuita
                <span>→</span>
              </a>
              <a
                href="https://walink.co/727927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-4 text-[14px] font-medium hover:bg-white hover:text-[#0A0A0A] transition-colors"
              >
                WhatsApp directo
              </a>
            </div>

            <p className="mt-8 pt-6 border-t border-white/10 text-[11px] text-white/50">
              Bissu Abogados, S.C. · Av. Prado Norte 365 · Lomas de Chapultepec · CDMX · +52 55 5545 1308
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer minimal
// ============================================================
function V2Footer() {
  return (
    <footer className="py-12 border-t border-[rgba(10,10,10,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-medium text-[16px] tracking-[-0.04em]">
            Bissu
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A5A5A] font-medium">
            Abogados
          </span>
          <span className="text-[11px] text-[#8E8E8E] ml-3">© 2017–2026</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#5A5A5A]">
          <a href="tel:+525555451308" className="hover:text-[#0A0A0A]">
            +52 55 5545 1308
          </a>
          <a
            href="mailto:sbissu@bissuabogados.com"
            className="hover:text-[#0A0A0A]"
          >
            sbissu@bissuabogados.com
          </a>
          <a
            href="https://www.linkedin.com/company/bissu-abogados-s-c-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A0A0A]"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
