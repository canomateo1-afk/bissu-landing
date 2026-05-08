"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function V3Root() {
  return (
    <div className="v3-root min-h-screen">
      <V3Nav />
      <V3Hero />
      <V3TrustMarquee />
      <V3Pillars />
      <V3AreasTabbed />
      <V3FeaturedCase />
      <V3Comparison />
      <V3CredentialsGrid />
      <V3Testimonials />
      <V3Quote />
      <V3Team />
      <V3ConsultCard />
      <V3Footer />
    </div>
  );
}

// ============================================================
// V3 Nav — minimal, blur on scroll
// ============================================================
function V3Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#FBF7EE]/85 backdrop-blur-xl border-b border-[rgba(26,23,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-2">
          <span className="v3-display text-[22px] leading-none">Bissu</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
            Abogados
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {[
            ["Áreas", "#areas"],
            ["Casos", "#caso"],
            ["Por qué Bissu", "#comparison"],
            ["Recursos", "#"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors"
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
            className="hidden sm:inline-flex text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors"
          >
            WhatsApp
          </a>
          <a href="#cta" className="v3-btn">
            Agenda consulta
            <span className="v3-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Hero — editorial split with video media
// ============================================================
function V3Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Force play on mount — some browsers gate autoplay even when muted
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("loadeddata", tryPlay, { once: true });
      v.addEventListener("canplay", tryPlay, { once: true });
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* Left — text (Function Health-style: pill + 2-line h1 + subhead + CTA) */}
          <div className="col-span-12 lg:col-span-5">
            {/* Eligibility / availability pill — like "HSA/FSA Eligible" */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 mb-7 sm:mb-9"
            >
              <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#B4975A]">
                Consulta inicial gratuita
              </span>
            </motion.div>

            {/* H1 — 2 sentences, italic on the second */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
              className="v3-h1"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.75rem)" }}
            >
              Defensa jurídica.
              <br />
              <em>Sin ambigüedad</em>
              <span className="text-[#B4975A]">.</span>
            </motion.h1>

            {/* Subhead — value prop + concrete numbers */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-7 sm:mt-9 text-[16px] sm:text-[17px] leading-[1.55] text-[#5A4F45] max-w-md"
            >
              Despacho boutique en CDMX. Dictamen escrito en 24 horas.
              Honorarios transparentes — desde $0 hasta firmar convenio.
            </motion.p>

            {/* Single primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-8"
            >
              <a href="#cta" className="v3-btn">
                Agenda consulta gratuita
                <span className="v3-btn-arrow">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — cinematic media (video with image fallback) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[6/7] overflow-hidden rounded-[6px] bg-[#1A1714]">
              {/* Video — loops + muted autoplay. Poster image as fallback if video fails to load. */}
              {/* TODO: drop final brand video at /public/videos/hero.mp4 (10-20s loop, no audio, ~1080p) */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/hero-1.jpg"
                className="v3-hero-video"
                style={{ filter: "saturate(0.92) contrast(1.04)" }}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                <source src="/videos/hero.webm" type="video/webm" />
                {/* Fallback: image only (browsers without video support) */}
                <Image
                  src="/images/hero-1.jpg"
                  alt="Oficinas Bissu Abogados — Polanco, CDMX"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </video>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(180,151,90,0.05) 0%, transparent 40%, rgba(26,23,20,0.22) 100%)",
                }}
                aria-hidden
              />

              {/* Floating annotation: top-left credential */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
                className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-[4px] px-3 py-2 border border-[rgba(26,23,20,0.08)] shadow-sm"
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
                <span className="text-[10px] font-medium tracking-[-0.005em] text-[#1A1714]">
                  Best Lawyers in Mexico 2026
                </span>
              </motion.div>

              {/* Floating annotation: bottom-right featured stat */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
                className="absolute bottom-5 right-5 bg-[#1A1714] text-white p-4 max-w-[200px] rounded-[6px]"
              >
                <p
                  className="v3-display v3-mono leading-none"
                  style={{ fontSize: "2.5rem", letterSpacing: "-0.03em" }}
                >
                  60%<span className="text-[#B4975A]">.</span>
                </p>
                <p className="text-[10px] text-white/75 mt-2 leading-[1.45]">
                  Quita aprobada · Caso concursal representativo
                </p>
              </motion.div>

              {/* Caption */}
              <p className="absolute bottom-5 left-5 text-[10px] tracking-[0.22em] uppercase text-white/85 font-medium">
                Fig. 01 · Polanco, CDMX
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row — Function Health 3-up below hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[8px] overflow-hidden"
        >
          {[
            { stat: "08+", unit: "años", label: "Defendiendo casos en México" },
            { stat: "06", unit: "áreas", label: "De práctica activa" },
            { stat: "<24h", unit: "respuesta", label: "Tiempo de respuesta inicial" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#FBF7EE] p-7 sm:p-9 flex flex-col"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <p
                  className="v3-display v3-mono leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                >
                  {s.stat}
                  <span className="text-[#B4975A]">.</span>
                </p>
                <p
                  className="v3-display italic text-[#5A4F45] leading-none"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                >
                  {s.unit}
                </p>
              </div>
              <p className="text-[13px] leading-[1.45] text-[#5A4F45] max-w-[20ch]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Trust marquee — refined hairline gold
// ============================================================
function V3TrustMarquee() {
  const items = [
    "Best Lawyers in Mexico 2026",
    "Leaders League 2025 · Resolución de Conflictos",
    "Tops · Diamante 2025",
    "Cámara de Comercio Internacional · CCI",
  ];
  const list = [...items, ...items, ...items];
  return (
    <section className="py-10 border-y border-[rgba(26,23,20,0.10)] bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-5">
        <p className="v3-eyebrow v3-eyebrow-pleca">Reconocidos por</p>
      </div>
      <div className="overflow-hidden v3-marquee-mask">
        <div className="v3-marquee flex whitespace-nowrap items-center">
          {list.map((it, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-9 v3-display text-[18px] sm:text-[22px] leading-none text-[#1A1714]">
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
// Pillars — 4 cards with serif headlines
// ============================================================
function V3Pillars() {
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
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">El método Bissu</p>
          <h2 className="v3-h2">
            Cómo trabajamos cada caso, <em>punto por punto</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="v3-card p-7 sm:p-8 group"
            >
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B4975A] mb-7 flex items-center gap-2">
                <span className="v3-mono">0{i + 1}</span>
                <span className="w-3 h-px bg-[#B4975A]/60" aria-hidden />
                {p.tag}
              </p>
              <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] mb-4">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#5A4F45]">
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
// Areas — Legora-style expandable card carousel
// ============================================================
function V3AreasTabbed() {
  const [active, setActive] = useState(2); // start with concursal (most impactful stat)

  const areas = [
    {
      key: "civil",
      label: "Civil",
      title: "Litigio Civil",
      tagline: "Cuando un contrato se rompe.",
      blurb:
        "Conflictos entre particulares por incumplimiento de obligaciones, daños patrimoniales o lesión a derechos individuales. Análisis de fondo para reclamaciones civiles complejas con dictamen escrito antes de iniciar.",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1400&q=88&auto=format&fit=crop",
    },
    {
      key: "mercantil",
      label: "Mercantil",
      title: "Mercantil & Corporativo",
      tagline: "Sociedades, accionistas, contratos.",
      blurb:
        "Conflictos entre accionistas, dilución, contratos mercantiles complejos, fideicomisos. Defensa rigurosa para empresas familiares y multinacionales con interlocutor único.",
      image:
        "https://images.unsplash.com/photo-1568667256549-094345857637?w=1400&q=88&auto=format&fit=crop",
    },
    {
      key: "concursal",
      label: "Concursal",
      title: "Concurso Mercantil & Reestructura",
      tagline: "Operación que continúa, no se liquida.",
      blurb:
        "Reestructura de deuda con acreedores, convenios concursales, recuperación de créditos, insolvencia transfronteriza. Casos representativos: 60% de quita aprobada manteniendo operación.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=88&auto=format&fit=crop",
    },
    {
      key: "familiar",
      label: "Familiar",
      title: "Derecho Familiar",
      tagline: "Custodia internacional, sucesiones, divorcios.",
      blurb:
        "Custodia compartida internacional, pensión alimenticia, divorcios contenciosos, restitución de menores bajo el Convenio de la Haya, sucesiones testamentarias e intestadas.",
      image:
        "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=1400&q=88&auto=format&fit=crop",
    },
    {
      key: "constitucional",
      label: "Constitucional",
      title: "Litigio Constitucional",
      tagline: "Amparo cuando el Estado se equivoca.",
      blurb:
        "Juicio de amparo directo e indirecto, acciones de inconstitucionalidad, controversias constitucionales, suspensión del acto reclamado para PYMEs y particulares.",
      image:
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1400&q=88&auto=format&fit=crop",
    },
    {
      key: "arbitraje",
      label: "Arbitraje & MASC",
      title: "Arbitraje & MASC",
      tagline: "CCI, mediación, ejecución de laudos.",
      blurb:
        "Arbitraje comercial internacional bajo Cámara de Comercio Internacional, ejecución y nulidad de laudos, mediación, conciliación, medidas cautelares para disputas cross-border.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=88&auto=format&fit=crop",
    },
  ];

  const next = () => setActive((p) => (p + 1) % areas.length);
  const prev = () => setActive((p) => (p - 1 + areas.length) % areas.length);

  return (
    <section
      id="areas"
      className="py-24 sm:py-32 bg-[#FBF7EE] text-[#1A1714] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Header centrado — fiel a Legora */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2
            className="v3-display leading-[1.0] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Cada caso.
            <br />
            <em className="text-[#B4975A]">Cada área</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.6] text-[#5A4F45] max-w-xl mx-auto">
            Bissu opera seis áreas con el mismo método: análisis de fondo,
            titular responsable, dictamen escrito antes de iniciar.
          </p>
        </div>

        {/* Pagination + arrows centered above carousel — Legora pattern */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prev}
            aria-label="Área anterior"
            className="w-10 h-10 rounded-full border border-[rgba(26,23,20,0.15)] hover:border-[#B4975A] hover:bg-[rgba(26,23,20,0.04)] transition-all flex items-center justify-center text-[#5A4F45] hover:text-[#B4975A]"
          >
            <span className="text-[15px] leading-none">←</span>
          </button>

          <div className="flex items-center gap-2">
            {areas.map((a, i) => (
              <button
                key={a.key}
                onClick={() => setActive(i)}
                aria-label={`Ir a ${a.label}`}
                className="group p-1"
              >
                <span
                  className={`block transition-all duration-500 rounded-full ${
                    active === i
                      ? "w-5 h-1.5 bg-[#B4975A]"
                      : "w-1.5 h-1.5 bg-[rgba(26,23,20,0.20)] group-hover:bg-[rgba(26,23,20,0.45)]"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Siguiente área"
            className="w-10 h-10 rounded-full border border-[rgba(26,23,20,0.15)] hover:border-[#B4975A] hover:bg-[rgba(26,23,20,0.04)] transition-all flex items-center justify-center text-[#5A4F45] hover:text-[#B4975A]"
          >
            <span className="text-[15px] leading-none">→</span>
          </button>
        </div>

        {/* Carrusel de cards expandibles — Legora */}
        <div className="flex gap-2 sm:gap-3 h-[340px] sm:h-[440px] lg:h-[500px] mb-10 sm:mb-14">
          {areas.map((a, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={a.key}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative overflow-hidden rounded-[6px] group min-w-0 focus:outline-none"
                style={{ flex: isActive ? 5 : 1 }}
                aria-label={`Ver ${a.label}`}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.05)" }}
                  sizes={
                    isActive
                      ? "(max-width: 1024px) 70vw, 700px"
                      : "(max-width: 1024px) 12vw, 130px"
                  }
                />

                {/* Dark overlay sutil — solo arriba para legibilidad de la label */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isActive
                      ? "opacity-40"
                      : "opacity-50 group-hover:opacity-40"
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,23,20,0.50) 0%, transparent 30%)",
                  }}
                  aria-hidden
                />

                {/* Single label, top-center — Legora style (white sobre image) */}
                <p className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 text-white text-[12px] sm:text-[13px] font-medium tracking-[-0.005em] whitespace-nowrap pointer-events-none">
                  {a.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Descripción debajo — Legora pattern (centered) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={areas[active].key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="v3-display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.05] mb-5">
              {areas[active].title}
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] mb-6">
              {areas[active].blurb}
            </p>
            <div className="flex justify-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1A1714] hover:text-[#B4975A] transition-colors group"
              >
                <span aria-hidden className="text-[#B4975A]">↳</span>
                <span className="border-b border-[rgba(26,23,20,0.30)] group-hover:border-[#B4975A] pb-0.5 transition-colors">
                  Consultar caso de {areas[active].label.toLowerCase()}
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ============================================================
// Featured case — magazine spread style
// ============================================================
function V3FeaturedCase() {
  return (
    <section id="caso" className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">Caso representativo</p>
          <h2 className="v3-h2">
            Un caso. <em>Un resultado verificable</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-center v3-card p-8 sm:p-12 lg:p-16"
        >
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B4975A] mb-5">
              01 · Litigio Concursal · 18 meses
            </p>
            <p
              className="v3-display v3-mono leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(5rem, 14vw, 11rem)" }}
            >
              60%<span className="text-[#B4975A]">.</span>
            </p>
            <p
              className="mt-3 v3-display italic text-[#5A4F45]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              de quita aprobada
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-md">
              Empresa industrial con tres generaciones operando, con pasivo
              bancario impagable post-pandemia. Negociamos un convenio
              concursal con acreedores y la operación continuó sin
              liquidación.
            </p>
            <a
              href="#cta"
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors"
            >
              Tu caso encaja con esto
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Comparison — Function Health-style: highlighted column with stat at top
// ============================================================
function V3Comparison() {
  const rows: Array<{ label: string; bissu: boolean | string; others: boolean | string }> = [
    { label: "Atención directa con abogado titular", bissu: true, others: false },
    { label: "Dictamen escrito en 24 hs", bissu: true, others: false },
    { label: "Honorarios transparentes desde día 1", bissu: true, others: false },
    { label: "Un solo punto de contacto", bissu: true, others: false },
    { label: "Reporte periódico documentado", bissu: true, others: false },
    { label: "Selección de casos por valor aportado", bissu: true, others: false },
    { label: "Best Lawyers · Leaders League · Tops", bissu: true, others: false },
    { label: "Consulta inicial gratuita", bissu: true, others: "A veces" },
  ];

  return (
    <section
      id="comparison"
      className="py-24 sm:py-32 bg-[#FBF7EE]"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        {/* Editorial centered headline — Function Health style */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="v3-display leading-[1.0] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            <em className="text-[#B4975A]">No es el despacho</em> promedio
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative"
        >
          {/* The "Bissu column" — visually overlapping the table from above */}
          <div className="grid grid-cols-12 relative">
            {/* Empty space for left column */}
            <div className="col-span-6 sm:col-span-6"></div>

            {/* Bissu highlight column header — extends UP above table */}
            <div className="col-span-3 sm:col-span-3 relative z-10">
              <div className="bg-[#1A1714] text-white text-center pt-7 pb-7 sm:pt-9 sm:pb-9 -mb-px rounded-t-[8px] flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, rgba(180,151,90,0.18) 0%, transparent 70%)",
                  }}
                />
                <p className="v3-display text-[22px] sm:text-[28px] leading-none tracking-[-0.02em] relative">
                  Bissu
                </p>
                <p className="v3-display text-[28px] sm:text-[34px] leading-none tracking-[-0.025em] mt-3 relative">
                  Top
                </p>
                <p className="text-[10px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mt-1.5 relative">
                  Best Lawyers 2026
                </p>
              </div>
            </div>

            {/* Standard column header */}
            <div className="col-span-3 sm:col-span-3 flex flex-col items-center justify-end pb-4">
              <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.06em] uppercase text-[#948876]">
                Despacho
                <br className="hidden sm:block" /> tradicional
              </p>
              <p className="v3-display text-[26px] sm:text-[30px] leading-none mt-3 text-[#948876] tracking-[-0.025em]">
                Std.
              </p>
            </div>
          </div>

          {/* Table body */}
          <div className="bg-[#F4EDDD] rounded-[8px] overflow-hidden border border-[rgba(26,23,20,0.06)]">
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
                className={`grid grid-cols-12 items-center ${
                  i < rows.length - 1
                    ? "border-b border-[rgba(26,23,20,0.08)]"
                    : ""
                }`}
              >
                {/* Label */}
                <div className="col-span-6 px-5 sm:px-8 py-5 sm:py-6">
                  <p className="text-[13px] sm:text-[15px] text-[#1A1714] leading-[1.45]">
                    {row.label}
                  </p>
                </div>

                {/* Bissu cell — dark with check */}
                <div className="col-span-3 px-2 sm:px-6 py-5 sm:py-6 bg-[#1A1714] flex items-center justify-center relative">
                  {/* Background gradient subtle */}
                  <span
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(180,151,90,0.04) 0%, transparent 100%)",
                    }}
                  />
                  {row.bissu === true ? (
                    <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#B4975A] text-white">
                      <svg viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="none">
                        <path
                          d="M2.5 6.2 L4.8 8.5 L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="relative text-white text-[12px] font-medium">
                      {row.bissu}
                    </span>
                  )}
                </div>

                {/* Standard cell — light with x */}
                <div className="col-span-3 px-2 sm:px-6 py-5 sm:py-6 flex items-center justify-center">
                  {row.others === false ? (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[rgba(26,23,20,0.18)] bg-white text-[#948876]">
                      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                        <path
                          d="M3.5 3.5 L8.5 8.5 M8.5 3.5 L3.5 8.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-[12px] text-[#948876] italic">
                      {row.others}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Bottom of bissu column — extends DOWN below table for visual frame */}
          </div>

          {/* Bottom CTA inside the bissu column visual frame */}
          <div className="grid grid-cols-12 relative -mt-px">
            <div className="col-span-6"></div>
            <div className="col-span-3 relative z-10">
              <div className="bg-[#1A1714] text-white text-center py-5 sm:py-6 rounded-b-[8px]">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium text-white hover:text-[#B4975A] transition-colors"
                >
                  Agenda consulta
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Credentials grid — Function Health "biomarkers" pattern
// for premios + casos representativos + reviews
// ============================================================
function V3CredentialsGrid() {
  const cards = [
    {
      title: "Reconocimientos",
      subtitle: "Best Lawyers · Leaders League",
      count: "3 distinciones · 2025–2026",
      items: [
        "Best Lawyers in Mexico 2026",
        "Leaders League · Resolución de Conflictos 2025",
        "Tops · Diamante 2025",
      ],
      faded: ["Cámara de Comercio Internacional"],
    },
    {
      title: "Casos representativos",
      subtitle: "Resultados verificables",
      count: "12+ casos · 2022–2025",
      items: [
        "60% quita · Reestructura concursal",
        "3.4× indemnización · Litigio civil",
        "Custodia internacional asegurada",
      ],
      faded: ["Amparo administrativo concedido"],
    },
    {
      title: "Áreas de práctica",
      subtitle: "Con dictamen escrito en 24 hs",
      count: "6 áreas activas",
      items: [
        "Litigio Civil",
        "Mercantil & Corporativo",
        "Concursal · Reestructura",
        "Derecho Familiar",
      ],
      faded: ["Constitucional · Amparo", "Arbitraje & MASC"],
    },
    {
      title: "Equipo titular",
      subtitle: "Atención sin derivaciones",
      count: "2 socios · responsables directos",
      items: [
        "Samuel Bissu Bazbaz · Director",
        "Adolfo Julián Vargas · Socio Jr.",
        "Maestrías UP · Iberoamericana",
      ],
      faded: ["Idiomas: Español · Inglés"],
    },
    {
      title: "Cobertura",
      subtitle: "Operación nacional · CCI internacional",
      count: "República Mexicana",
      items: [
        "Sede CDMX · Lomas de Chapultepec",
        "Red de corresponsales en 32 estados",
        "Arbitraje CCI internacional",
      ],
      faded: ["Cross-border · jurisdicción mexicana"],
    },
    {
      type: "more",
      title: "Y más",
      subtitle: "Todo en una consulta inicial",
      headline: "Una reunión,\nsin compromiso.",
    },
  ] as const;

  return (
    <section className="py-24 sm:py-32 bg-[#FBF7EE]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Editorial centered headline */}
        <div className="text-center mb-12">
          <h2
            className="v3-display leading-[1.0] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            Verificable, <em className="text-[#B4975A]">no decorativo</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        {/* Founder quote with avatar — like Function Health Mark Hyman quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 sm:gap-8 max-w-3xl mx-auto mb-16"
        >
          <p className="font-body italic text-[14px] sm:text-[15px] leading-[1.55] text-[#5A4F45] max-w-md text-center sm:text-left">
            &ldquo;Cada distinción que recibimos viene de organismos
            independientes que evalúan trabajo real, no marketing.&rdquo;
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#1A1714] text-white flex items-center justify-center text-[13px] font-medium">
              SB
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#1A1714]">
                Samuel Bissu Bazbaz
              </p>
              <p className="text-[11px] text-[#5A4F45]">
                Socio fundador y Director
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid 2x3 of category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[8px] overflow-hidden">
          {cards.map((card, i) => {
            if (card.type === "more") {
              return (
                <motion.a
                  key={i}
                  href="#cta"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                  className="bg-[#F4EDDD] p-8 sm:p-10 flex flex-col justify-between min-h-[340px] group hover:bg-[#EDE3CD] transition-colors"
                >
                  <div>
                    <p
                      className="v3-display italic text-[#B4975A] mb-2"
                      style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
                    >
                      +Más
                    </p>
                  </div>
                  <div>
                    <p
                      className="v3-display italic leading-[1.05]"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
                    >
                      Una reunión,
                      <br />
                      sin compromiso<span className="text-[#B4975A]">.</span>
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium text-[#1A1714] group-hover:text-[#B4975A] transition-colors">
                      Agenda consulta gratuita
                      <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </motion.a>
              );
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                className="bg-[#FBF7EE] p-8 sm:p-10 min-h-[340px] flex flex-col"
              >
                <h3
                  className="v3-display leading-[1.05] mb-1"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  {card.title}
                </h3>
                <p className="v3-display italic text-[#5A4F45] text-[15px] sm:text-[16px] leading-[1.2] mb-5">
                  {card.subtitle}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="v3-pleca"
                    style={{ height: "12px", width: "1.5px" }}
                    aria-hidden
                  />
                  <span
                    className="v3-pleca"
                    style={{ height: "12px", width: "1.5px" }}
                    aria-hidden
                  />
                  <p className="text-[11px] tracking-[0.06em] text-[#B4975A] font-medium ml-1">
                    {card.count}
                  </p>
                </div>

                <ul className="space-y-2 text-[14px] leading-[1.5] text-[#1A1714] flex-1">
                  {card.items.map((it: string) => (
                    <li key={it}>{it}</li>
                  ))}
                  {card.faded?.map((it: string) => (
                    <li key={it} className="text-[#948876]">
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials — editorial cards
// ============================================================
function V3Testimonials() {
  const items = [
    {
      quote:
        "Negociaron una reestructura concursal que mantuvo operando una empresa con tres generaciones. El dictamen escrito desde el día 1 cambió completamente cómo vivimos el proceso.",
      name: "M. R.",
      role: "Directora · Empresa industrial",
      area: "Reestructura concursal · 2024",
      initials: "MR",
    },
    {
      quote:
        "Lo que diferencia a Bissu es la honestidad inicial. En la primera reunión nos dijeron qué escenarios tenían riesgo y cuáles no. Sin esa transparencia no hubiéramos avanzado.",
      name: "J. A.",
      role: "CFO · Multinacional",
      area: "Litigio mercantil · 2024",
      initials: "JA",
    },
    {
      quote:
        "Custodia compartida internacional con régimen y pensión asegurados en moneda dura. Once meses de proceso pero con un titular que respondió cada mensaje.",
      name: "L. F.",
      role: "Persona física",
      area: "Litigio familiar · 2025",
      initials: "LF",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">Lo que dicen los clientes</p>
          <h2 className="v3-h2">
            Testimonios <em>anonimizados, verificados</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="v3-card p-7 sm:p-8 flex flex-col"
            >
              <span
                className="v3-display text-[#B4975A] leading-[0.6] mb-4"
                style={{ fontSize: "3.5rem" }}
                aria-hidden
              >
                "
              </span>
              <p className="text-[15px] leading-[1.6] text-[#1A1714] mb-8 flex-1">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-[rgba(26,23,20,0.10)] flex items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-full bg-[#1A1714] text-white inline-flex items-center justify-center text-[13px] font-medium tracking-[-0.005em]">
                  {t.initials}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1A1714]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#5A4F45] leading-[1.4] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[10px] tracking-[0.16em] uppercase text-[#B4975A] font-medium">
                {t.area}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verification strip */}
        <div className="mt-14 pt-8 border-t border-[rgba(26,23,20,0.10)] flex flex-wrap items-center gap-x-10 gap-y-4">
          <p className="text-[11px] tracking-[0.06em] uppercase text-[#5A4F45] font-medium">
            Verificado por
          </p>
          {["Best Lawyers in Mexico 2026", "Leaders League 2025", "Tops · Diamante"].map(
            (b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1A1714]"
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
// Quote — founder vision in editorial style
// ============================================================
function V3Quote() {
  return (
    <section className="py-28 sm:py-36 bg-[#1A1714] text-white relative overflow-hidden">
      {/* Subtle gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(180,151,90,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B4975A] mb-10 flex items-center">
          <span className="inline-block w-1.5 h-3.5 bg-[#B4975A] mr-3" />
          Visión
        </p>
        <blockquote
          className="v3-display leading-[1.15] tracking-[-0.025em] max-w-5xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.25rem)" }}
        >
          <span className="text-[#B4975A]">&ldquo;</span>
          Un caso jurídico no se resuelve con volumen ni con jerga. Se resuelve
          con <em>análisis de fondo</em>, criterio y un titular que responde
          por su trabajo.
          <span className="text-[#B4975A]">&rdquo;</span>
        </blockquote>
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 text-[15px] font-medium">
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
// Team — Function Health-inspired: photo + name + credentials
// ============================================================
function V3Team() {
  const team = [
    {
      name: "Samuel Bissu Bazbaz",
      role: "Socio fundador y Director",
      credentials: [
        "Maestría en Derecho de la Empresa, Universidad Panamericana",
        "Lic. en Derecho, Universidad Iberoamericana",
        "Best Lawyers in Mexico 2026",
      ],
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85&auto=format&fit=crop",
      languages: ["Español", "Inglés"],
    },
    {
      name: "Adolfo Julián Vargas Alvarado",
      role: "Socio Jr.",
      credentials: [
        "Maestría en Derecho Procesal Constitucional, Universidad Panamericana",
        "Curso Básico de Formación · Secretarios del PJF",
        "Lic. en Derecho, Universidad Tres Culturas",
      ],
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85&auto=format&fit=crop",
      languages: ["Español"],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            El equipo
          </p>
          <h2 className="v3-h2">
            Atención directa con{" "}
            <em className="text-[#B4975A]">socios titulares</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Sin derivaciones. Sin equipo de juniors anónimos. Cada caso lo
            maneja un titular responsable de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative aspect-square rounded-[6px] overflow-hidden mb-7 bg-[#E5DCC4]">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 350px"
                  style={{ filter: "saturate(0.9) contrast(1.04)" }}
                />
              </div>
              <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] mb-2">
                {m.name}
              </h3>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-5">
                {m.role}
              </p>
              <ul className="space-y-1.5 text-[13px] leading-[1.55] text-[#5A4F45] mb-5">
                {m.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium">
                <span>Idiomas</span>
                <span className="w-3 h-px bg-[#B4975A]/60" aria-hidden />
                <span>{m.languages.join(" · ")}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Consult Card — pricing-style, refined corners + gold accents
// ============================================================
function V3ConsultCard() {
  const includes = [
    "Reunión 20 minutos · video o presencial",
    "Análisis del caso por abogado titular",
    "Identificación del área aplicable",
    "Recomendación honesta · Bissu o referencia",
    "Dictamen escrito post-consulta en 24 hs",
    "Sin cobro hasta firmar convenio",
  ];

  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          {/* Left — context */}
          <div className="lg:col-span-5">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5">Agenda tu consulta</p>
            <h2 className="v3-h2 mb-8">
              Hablemos de tu caso<span className="text-[#B4975A]">.</span>
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#5A4F45] max-w-md mb-10">
              La consulta inicial es gratuita y sin compromiso. Si Bissu no es
              el despacho indicado, te referenciamos a uno mejor posicionado
              para tu caso — sin costo.
            </p>

            <div className="space-y-4">
              {[
                ["Disponibilidad", "Esta semana"],
                ["Modalidad", "Video o presencial · Polanco, CDMX"],
                ["Idioma", "Español · Inglés"],
                ["Confidencialidad", "Secreto profesional desde el primer contacto"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline gap-4 pb-4 border-b border-[rgba(26,23,20,0.10)]"
                >
                  <p className="w-32 shrink-0 text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium">
                    {label}
                  </p>
                  <p className="text-[14px] text-[#1A1714]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.85, ease: EASE }}
            className="lg:col-span-7 relative bg-[#1A1714] text-white p-10 sm:p-12 lg:p-14 overflow-hidden rounded-[6px]"
          >
            <span
              aria-hidden
              className="absolute top-0 right-0 w-32 h-32"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(180,151,90,0.20) 0%, transparent 70%)",
              }}
            />

            <div className="flex items-start justify-between mb-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#B4975A] mb-3">
                  Consulta inicial
                </p>
                <p className="text-[14px] text-white/65 max-w-xs">
                  Una reunión, sin compromiso, para que sepas si Bissu es para
                  vos.
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5 text-[10px] font-medium tracking-[0.08em] uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4975A] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B4975A]" />
                </span>
                Hoy disponible
              </span>
            </div>

            {/* Big "price" — gratuita */}
            <div>
              <p
                className="v3-display v3-mono leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
              >
                Gratuita
                <span className="text-[#B4975A]">.</span>
              </p>
              <div className="mt-3 flex items-baseline gap-4 flex-wrap">
                <p className="v3-display italic text-[20px] sm:text-[24px] text-white/75">
                  · 20 minutos
                </p>
                <p className="text-[12px] text-white/55">
                  $0 hasta firmar convenio
                </p>
              </div>
            </div>

            {/* Includes */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[13px] text-white/85 leading-[1.5]"
                >
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

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-7 py-4 text-[14px] font-medium rounded-[4px] hover:bg-[#B4975A] hover:text-white transition-colors"
              >
                Agenda consulta gratuita
                <span>→</span>
              </a>
              <a
                href="https://walink.co/727927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 text-[14px] font-medium rounded-[4px] hover:bg-white hover:text-[#1A1714] transition-colors"
              >
                WhatsApp directo
              </a>
            </div>

            <p className="mt-8 pt-6 border-t border-white/10 text-[11px] text-white/50">
              Bissu Abogados, S.C. · Av. Prado Norte 365 · Lomas de Chapultepec
              · CDMX · +52 55 5545 1308
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer — editorial wordmark
// ============================================================
function V3Footer() {
  return (
    <footer className="bg-[#FBF7EE] border-t border-[rgba(26,23,20,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="border-b border-[rgba(26,23,20,0.10)] pb-12 mb-12">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <p
              className="v3-display leading-[0.9]"
              style={{ fontSize: "clamp(4rem, 14vw, 14rem)", letterSpacing: "-0.03em" }}
            >
              Bissu<span className="text-[#B4975A]">.</span>
            </p>
            <p className="text-[12px] sm:text-[14px] tracking-[0.32em] uppercase text-[#5A4F45] font-medium pb-2 sm:pb-4">
              Abogados
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 lg:gap-x-10">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Oficinas
            </p>
            <p className="text-[13px] leading-[1.6] text-[#1A1714]">
              Av. Prado Norte 365, Int. 6
              <br />
              Lomas de Chapultepec
              <br />
              Miguel Hidalgo, 11000, CDMX
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Contacto
            </p>
            <div className="space-y-1.5 text-[13px]">
              <a
                href="tel:+525555451308"
                className="block text-[#1A1714] hover:text-[#8C7339] transition-colors"
              >
                +52 55 5545 1308
              </a>
              <a
                href="mailto:sbissu@bissuabogados.com"
                className="block text-[#1A1714] hover:text-[#8C7339] transition-colors break-all"
              >
                sbissu@bissuabogados.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Síguenos
            </p>
            <div className="flex flex-col gap-1.5 text-[12px] tracking-[0.12em] uppercase font-medium">
              {[
                ["Instagram", "https://www.instagram.com/bissuabogados/"],
                ["LinkedIn", "https://www.linkedin.com/company/bissu-abogados-s-c-/"],
                ["Facebook", "https://www.facebook.com/BissuAbogados/"],
                ["WhatsApp", "https://walink.co/727927"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1714] hover:text-[#8C7339] transition-colors"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Reconocimientos
            </p>
            <div className="space-y-1.5 text-[12px] text-[#1A1714]">
              <p>Best Lawyers in Mexico 2026</p>
              <p>Leaders League 2025</p>
              <p>Tops · Diamante 2025</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(26,23,20,0.08)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
          <p>© {new Date().getFullYear()} Bissu Abogados, S.C. · Est. 2017</p>
          <p>Información de carácter informativo · No constituye asesoría legal</p>
        </div>
      </div>
    </footer>
  );
}
