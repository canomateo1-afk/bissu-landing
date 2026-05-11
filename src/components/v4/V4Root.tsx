"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { v4Team } from "@/lib/v4-team";
import V4FloatingCTA from "@/components/v4/V4FloatingCTA";
import V4AreasDropdown from "@/components/v4/V4AreasDropdown";
import V4Footer from "@/components/v4/V4Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function V4Root() {
  return (
    <div className="v3-root min-h-screen">
      <V4Nav />
      <V4FloatingCTA />
      <V4Hero />
      <V4HeroStats />
      <V4TrustMarquee />
      <V4Pillars />
      <V4AreasTabbed />
      <V4FeaturedCase />
      <V4Comparison />
      <V4CredentialsGrid />
      <V4Testimonials />
      <V4Quote />
      <V4Team />
      <V4FAQ />
      <V4ConsultCard />
      <V4Footer />
    </div>
  );
}

// ============================================================
// V4 Nav — minimal, blur on scroll
// ============================================================
function V4Nav() {
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
          <span
            className={`v3-display text-[22px] leading-none transition-colors ${
              scrolled ? "text-[#1A1714]" : "text-white"
            }`}
          >
            Bissu
          </span>
          <span
            className={`text-[10px] tracking-[0.18em] uppercase font-medium transition-colors ${
              scrolled ? "text-[#5A4F45]" : "text-white/75"
            }`}
          >
            Abogados
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          <V4AreasDropdown
            triggerClassName={`text-[13px] font-medium transition-colors ${
              scrolled
                ? "text-[#1A1714] hover:text-[#8C7339]"
                : "text-white/85 hover:text-white"
            }`}
          />
          {[
            ["Casos", "#caso"],
            ["Por qué Bissu", "#comparison"],
            ["Equipo", "#abogados"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled
                  ? "text-[#1A1714] hover:text-[#8C7339]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] text-[13px] font-semibold transition-all whitespace-nowrap ${
              scrolled
                ? "bg-[#1A1714] text-white hover:bg-[#8C7339] shadow-[0_6px_18px_-8px_rgba(26,23,20,0.45)]"
                : "bg-white text-[#1A1714] hover:bg-[#B4975A] hover:text-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45)]"
            }`}
          >
            Agenda consulta
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Laurel branch — decorative gold flank
// ============================================================
function LaurelBranch({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 32 36"
      className="w-7 h-8 sm:w-8 sm:h-9 text-[#D4B97A]"
      fill="none"
      style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <path
        d="M28 4 C 18 8 10 16 6 32"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="22" cy="9" rx="3" ry="1.4" fill="currentColor" opacity="0.9" transform="rotate(-30 22 9)" />
      <ellipse cx="17" cy="14" rx="3.2" ry="1.4" fill="currentColor" opacity="0.85" transform="rotate(-15 17 14)" />
      <ellipse cx="13" cy="20" rx="3.2" ry="1.4" fill="currentColor" opacity="0.85" transform="rotate(5 13 20)" />
      <ellipse cx="10" cy="26" rx="3" ry="1.3" fill="currentColor" opacity="0.85" transform="rotate(20 10 26)" />
      <ellipse cx="25" cy="13" rx="2.8" ry="1.3" fill="currentColor" opacity="0.75" transform="rotate(40 25 13)" />
      <ellipse cx="20" cy="19" rx="2.8" ry="1.3" fill="currentColor" opacity="0.75" transform="rotate(55 20 19)" />
      <ellipse cx="15" cy="26" rx="2.6" ry="1.2" fill="currentColor" opacity="0.75" transform="rotate(70 15 26)" />
    </svg>
  );
}

// ============================================================
// Hero — Full-screen video background, text overlay (Function Health style)
// ============================================================
function V4Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("loadeddata", tryPlay, { once: true });
      v.addEventListener("canplay", tryPlay, { once: true });
    }
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#1A1714]">
      {/* Video background — full bleed */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0.95) contrast(1.04)" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Base dark overlay — uniform layer for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "rgba(26,23,20,0.42)",
        }}
      />

      {/* Directional left-side gradient — extra dark where the text lives */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(15,14,13,0.78) 0%, rgba(15,14,13,0.55) 30%, rgba(15,14,13,0.20) 60%, transparent 85%)",
        }}
      />

      {/* Top + bottom vignette for nav and bottom strip */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(15,14,13,0.45) 0%, transparent 18%, transparent 80%, rgba(15,14,13,0.55) 100%)",
        }}
      />

      {/* Subtle gold warm cast — barely there */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, rgba(180,151,90,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Content overlay — left aligned (Function Health pattern) */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center pt-24 pb-36 sm:pb-32 lg:pb-28">
        <div className="max-w-[820px]">

          {/* H1 — keyword-first SEO trunk, 3 balanced lines */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.45 }}
            className="v3-h1"
            style={{
              fontSize: "clamp(2rem, 4.6vw, 4.25rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
              textWrap: "balance",
            }}
          >
            <span className="block">Despacho de abogados</span>
            <span className="block">en CDMX especializado en</span>
            <span className="block">
              <em style={{ color: "#FFFFFF" }}>litigio y arbitraje</em>
              <span style={{ color: "#D4B97A" }}>.</span>
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            className="mt-7 sm:mt-9 text-[16px] sm:text-[18px] leading-[1.6] text-white max-w-xl"
            style={{ textShadow: "0 1px 16px rgba(0,0,0,0.45)" }}
          >
            Despacho boutique en Polanco. Litigio civil, mercantil, concursal,
            familiar, constitucional y arbitraje internacional. Dictamen
            escrito en 24 horas. Honorarios transparentes desde el día 1.
          </motion.p>

          {/* Single primary CTA + trust microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className="mt-9 sm:mt-11"
          >
            <a href="#cta" className="v3-btn v3-btn-on-dark group">
              Agenda consulta gratuita
              <span className="v3-btn-arrow">→</span>
            </a>

            {/* Trust microcopy below CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.0 }}
              className="mt-5 flex items-center gap-2.5 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
            >
              {/* Stars + rating mini */}
              <div className="flex gap-0.5 text-[#D4B97A]" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 12 12"
                    className="w-3 h-3"
                    fill="currentColor"
                  >
                    <path d="M6 1 L7.4 4.4 L11 4.7 L8.3 7.1 L9.1 10.7 L6 8.8 L2.9 10.7 L3.7 7.1 L1 4.7 L4.6 4.4 Z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] sm:text-[13px] font-medium opacity-95">
                <span className="text-[#D4B97A] font-semibold">100% de casos ganados</span>
                <span className="opacity-80 mx-1.5">·</span>
                <span className="opacity-80">500+ casos atendidos desde 2017</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

// ============================================================
// V4HeroStats — 3-up stats below the hero (Function Health pattern)
// ============================================================
function V4HeroStats() {
  return (
    <section id="below-hero" className="bg-[#FBF7EE] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[8px] overflow-hidden"
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
function V4TrustMarquee() {
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
function V4Pillars() {
  const pillars = [
    {
      tag: "Diagnóstico",
      title: "Dictamen jurídico en 24 horas",
      body: "Análisis de fondo con escenarios, plazos y honorarios estimados. Antes de firmar nada.",
    },
    {
      tag: "Honorarios",
      title: "Honorarios transparentes desde el día 1",
      body: "Tarifa fija, por hora o cuota litis. Sin sorpresas durante el proceso. Convenio firmado antes de empezar.",
    },
    {
      tag: "Atención",
      title: "Atención directa con abogado titular",
      body: "Sin derivaciones a juniors. Un solo punto de contacto, reporte periódico, decisiones explicadas.",
    },
    {
      tag: "Selección",
      title: "Selección rigurosa de casos jurídicos",
      body: "Si no aportamos valor o no tenemos el expertise, te referenciamos sin costo. Tu tiempo importa.",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">El método Bissu</p>
          <h2 className="v3-h2">
            Proceso de un caso de{" "}
            <em>litigio y arbitraje</em>
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
function V4AreasTabbed() {
  const [active, setActive] = useState(2); // start with concursal (most impactful stat)

  const areas = [
    {
      key: "civil",
      slug: "litigio-civil",
      label: "Civil",
      title: "Litigio Civil en México",
      tagline: "Cuando un contrato se rompe.",
      blurb:
        "Abogado de litigio civil para conflictos entre particulares por incumplimiento de contratos, daños y perjuicios, daño moral, créditos, hipotecas, arrendamiento y homologación de sentencias extranjeras. Dictamen escrito antes de iniciar el proceso.",
      image: "/images/areas/civil.jpg",
    },
    {
      key: "mercantil",
      slug: "litigio-mercantil",
      label: "Mercantil",
      title: "Litigio Mercantil y Corporativo",
      tagline: "Sociedades, accionistas, contratos.",
      blurb:
        "Abogado mercantil y corporativo en CDMX para conflictos entre accionistas, dilución accionaria, contratos mercantiles complejos, títulos y operaciones de crédito, fideicomisos, seguros y fianzas. Defensa rigurosa para empresas familiares y multinacionales.",
      image: "/images/areas/mercantil.jpg",
    },
    {
      key: "concursal",
      slug: "litigio-concursal",
      label: "Concursal",
      title: "Litigio Concursal y Concurso Mercantil",
      tagline: "Operación que continúa, no se liquida.",
      blurb:
        "Abogado de concurso mercantil para reestructura empresarial, convenios concursales, recuperación de créditos, reconocimiento de créditos, quiebras e insolvencia transfronteriza. Caso representativo: 60% de quita aprobada manteniendo la operación.",
      image: "/images/areas/concursal.jpg",
    },
    {
      key: "familiar",
      slug: "litigio-familiar",
      label: "Familiar",
      title: "Derecho Familiar y Custodia",
      tagline: "Custodia internacional, sucesiones, divorcios.",
      blurb:
        "Abogado familiar en CDMX para divorcios contenciosos y voluntarios, patria potestad, custodia compartida internacional, pensión alimenticia, restitución internacional de menores bajo el Convenio de la Haya, y sucesiones testamentarias e intestadas.",
      image: "/images/areas/familiar.jpg",
    },
    {
      key: "constitucional",
      slug: "litigio-constitucional",
      label: "Constitucional",
      title: "Litigio Constitucional y Amparo",
      tagline: "Amparo cuando el Estado se equivoca.",
      blurb:
        "Abogado de amparo en CDMX para juicio de amparo directo e indirecto, acciones de inconstitucionalidad, controversias constitucionales y suspensión del acto reclamado, dirigido a PYMEs, empresas y particulares afectados por actos de autoridad.",
      image: "/images/areas/constitucional.jpg",
    },
    {
      key: "arbitraje",
      slug: "arbitraje-y-masc",
      label: "Arbitraje",
      title: "Arbitraje Internacional y MASC",
      tagline: "CCI, mediación, ejecución de laudos.",
      blurb:
        "Abogado de arbitraje comercial internacional bajo reglas de la Cámara de Comercio Internacional (CCI), ejecución y nulidad de laudos, reconocimiento de laudos extranjeros, mediación, conciliación y medidas cautelares para disputas cross-border.",
      image: "/images/areas/arbitraje.jpg",
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
            Áreas de
            <br />
            <em className="text-[#B4975A]">práctica jurídica</em>
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

                {/* Dark overlay top + bottom — refuerza legibilidad de label */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100"
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,14,13,0.78) 0%, rgba(15,14,13,0.20) 25%, transparent 50%, rgba(15,14,13,0.10) 80%, rgba(15,14,13,0.55) 100%)",
                  }}
                  aria-hidden
                />

                {/* Active gold underline indicator at bottom */}
                {isActive && (
                  <motion.span
                    layoutId="v4-area-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4B97A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Top label — bigger, semibold, with shadow */}
                <div className="absolute top-5 sm:top-7 left-0 right-0 px-3 flex flex-col items-center pointer-events-none">
                  <p
                    className={`text-white whitespace-nowrap leading-none transition-all duration-500 ${
                      isActive
                        ? "text-[15px] sm:text-[18px] lg:text-[20px] v3-display"
                        : "text-[12px] sm:text-[13px] font-semibold tracking-[-0.005em]"
                    }`}
                    style={{
                      textShadow:
                        "0 2px 12px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.55)",
                      fontWeight: isActive ? 500 : 600,
                    }}
                  >
                    {a.label}
                  </p>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
                      className="mt-2 block w-8 h-px bg-[#D4B97A] origin-left"
                      aria-hidden
                    />
                  )}
                </div>
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
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href={`/v4/areas/${areas[active].slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold bg-[#1A1714] text-white hover:bg-[#8C7339] transition-colors shadow-[0_6px_18px_-8px_rgba(26,23,20,0.45)] group"
              >
                Ver área completa
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#1A1714] hover:text-[#B4975A] transition-colors group"
              >
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
function V4FeaturedCase() {
  return (
    <section id="caso" className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">Caso representativo</p>
          <h2 className="v3-h2">
            Casos representativos de{" "}
            <em>litigio y arbitraje</em>
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
function V4Comparison() {
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
            Despacho boutique vs{" "}
            <em className="text-[#B4975A]">despacho jurídico tradicional</em>
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
function V4CredentialsGrid() {
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
      title: "Áreas de práctica jurídica",
      subtitle: "Con dictamen escrito en 24 hs",
      count: "6 áreas activas",
      items: [
        "Litigio Civil",
        "Litigio Mercantil y Corporativo",
        "Litigio Concursal y Concurso Mercantil",
        "Derecho Familiar y Custodia",
      ],
      faded: ["Litigio Constitucional y Amparo", "Arbitraje Internacional y MASC"],
    },
    {
      title: "Equipo de abogados titulares",
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
      title: "Cobertura del despacho jurídico",
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
            Reconocimientos a{" "}
            <em className="text-[#B4975A]">Bissu Abogados en México</em>
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
function V4Testimonials() {
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
            Testimonios de clientes del{" "}
            <em>despacho de abogados</em>
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
function V4Quote() {
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
// Team — Firmo-style cards linking to dedicated profile pages
// ============================================================
function V4Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            El equipo
          </p>
          <h2 className="v3-h2">
            Equipo de{" "}
            <em className="text-[#B4975A]">abogados titulares</em> en CDMX
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Sin derivaciones. Sin equipo de juniors anónimos. Cada caso lo
            maneja un titular responsable de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto">
          {v4Team.map((m, i) => (
            <motion.a
              key={m.slug}
              href={`/v4/equipo/${m.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block text-center"
              style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <div className="relative aspect-square rounded-[6px] overflow-hidden mb-7 bg-[#E5DCC4]">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 350px"
                  style={{
                    filter: "saturate(0.9) contrast(1.04)",
                    objectPosition: `50% ${m.photoFocusY ?? "50%"}`,
                  }}
                />
                {/* Hover overlay with "Ver perfil" link */}
                <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(26,23,20,0.65) 0%, transparent 50%)" }}
                >
                  <span className="inline-flex items-center gap-1.5 text-white text-[11px] tracking-[0.18em] uppercase font-medium">
                    Ver perfil
                    <span>→</span>
                  </span>
                </div>
              </div>
              <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] mb-2 group-hover:text-[#8C7339] transition-colors">
                {m.name}
              </h3>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-2">
                {m.role}
              </p>
              <p className="text-[13px] leading-[1.5] text-[#5A4F45]">
                {m.subtitle}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ — preguntas frecuentes con FAQPage schema (citation AI)
// Respuestas 134-167 palabras self-contained
// ============================================================
function V4FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto cuesta una primera consulta con Bissu Abogados?",
      a: "La primera consulta en Bissu Abogados es gratuita y dura 20 minutos. Se realiza por videollamada o presencial en nuestras oficinas de Av. Prado Norte 365, Lomas de Chapultepec, Ciudad de México. En esa reunión hacemos tres cosas concretas. Primero, escuchamos tu caso sin interrumpir y registramos hechos, contraparte y plazos críticos. Segundo, identificamos qué área de práctica aplica entre las seis que atendemos: civil, mercantil y corporativo, concursal, familiar, constitucional o arbitraje y MASC. Tercero, te decimos honestamente si Bissu es el equipo adecuado o si te conviene una firma con perfil más específico. Si pasa lo segundo, te referenciamos sin costo. No iniciamos ningún cobro hasta firmar convenio escrito de honorarios. Después de la consulta, en 24 horas hábiles te entregamos un dictamen escrito con escenarios, plazos y honorarios estimados.",
    },
    {
      q: "¿Cómo se cobran los honorarios en Bissu Abogados?",
      a: "Los honorarios de Bissu se cobran bajo tres esquemas posibles, definidos antes de iniciar el caso: tarifa fija por entregable, tarifa por hora de trabajo, o cuota litis (porcentaje sobre el resultado obtenido). El esquema aplicable se determina según el área y la complejidad del asunto. Por ejemplo, una asesoría puntual o un contrato suelen ir por tarifa fija; un litigio de duración indefinida puede ir por hora; una reclamación civil con expectativa cuantificable puede ir por cuota litis. La propuesta económica detallada se entrega en el dictamen escrito posterior a la consulta inicial gratuita y nunca iniciamos trabajo sin convenio firmado y aceptación expresa de los honorarios. Para procesos largos, pactamos esquemas de pago en hitos del expediente o en plazos mensuales, todo formalizado en el mismo convenio. Sin sorpresas durante el proceso.",
    },
    {
      q: "¿Cuánto tarda un caso típico de litigio en resolverse?",
      a: "La duración de un caso depende del área jurídica y de la complejidad específica. Como referencia basada en casos representativos de Bissu desde 2017: un litigio civil ronda entre 18 y 30 meses; un concurso mercantil entre 12 y 24 meses; un caso familiar entre 6 y 18 meses; un amparo administrativo entre 8 y 14 meses; un arbitraje comercial internacional entre 14 y 24 meses. Estos son rangos típicos, no compromisos. La duración real depende de la carga de trabajo del juzgado, las tácticas dilatorias de la contraparte, la complejidad probatoria y los recursos que se interpongan. En el dictamen inicial te entregamos un estimado realista basado en los hechos concretos de tu caso, no en promedios genéricos. Te avisamos por escrito si el estimado cambia durante el proceso.",
    },
    {
      q: "¿Bissu Abogados atiende casos fuera de Ciudad de México?",
      a: "Sí. Bissu Abogados opera en todo el territorio mexicano, no solo en Ciudad de México. Nuestra sede física está en Lomas de Chapultepec, CDMX, pero la práctica jurídica se ejerce a nivel nacional. Cuando un caso requiere comparecencias presenciales en otros estados, lo coordinamos con la red de abogados corresponsales que sostenemos desde 2017, todos verificados por trayectoria y especialidad en jurisdicciones específicas. Los costos de comparecencias foráneas se transparentan antes y se incluyen en la propuesta económica inicial. Para arbitrajes internacionales, también representamos casos con sede fuera de México bajo reglas como la Cámara de Comercio Internacional (CCI). Si el caso es 100% remoto, podemos atender clientes ubicados en cualquier parte del mundo, siempre que la jurisdicción aplicable sea mexicana o admita representación cross-border.",
    },
    {
      q: "¿Qué pasa si Bissu no es el despacho indicado para mi caso?",
      a: "Si tu caso no es para Bissu, te lo decimos directamente en la consulta inicial gratuita. Esto pasa típicamente en tres escenarios. Primero, cuando el asunto requiere expertise muy específico fuera de las seis áreas que atendemos (por ejemplo, derecho fiscal especializado, derecho laboral colectivo o propiedad industrial). Segundo, cuando el asunto es de cuantía menor donde un despacho boutique como Bissu no aporta diferencial de valor. Tercero, cuando hay conflicto de interés con clientes existentes. En cualquiera de los tres casos, si conocemos un despacho mejor posicionado para tu asunto puntual, te referenciamos sin costo y sin compromiso. Preferimos no tomar un caso antes que entregarlo a alguien que no tiene el expertise específico — esa es la lógica de cómo seleccionamos casos desde 2017.",
    },
    {
      q: "¿Mi caso será tratado de forma confidencial?",
      a: "Sí. Toda información compartida con Bissu Abogados está protegida por el secreto profesional regulado en el artículo 36 del Código Penal Federal mexicano y el artículo 35 del Código Civil Federal, además de los códigos de ética del Colegio de Abogados. La protección rige desde el primer contacto, incluso en la consulta inicial gratuita y aunque finalmente no contrates nuestros servicios. En la práctica, esto significa: ningún miembro del equipo puede revelar hechos, documentos ni estrategias de tu caso fuera del despacho ni después de concluida la relación profesional; los archivos físicos y digitales se manejan con accesos restringidos al equipo asignado; y la descripción pública de cualquier caso (como en la sección de casos representativos del sitio) omite todos los elementos identificatorios. La confidencialidad es la base sobre la que construimos toda relación con clientes.",
    },
    {
      q: "¿Bissu toma casos personales además de empresariales?",
      a: "Sí. Bissu Abogados representa por igual a empresas e individuos. La distribución típica de la cartera es aproximadamente 60% empresarial (empresas familiares, multinacionales, instituciones, PYMEs) y 40% personas físicas (particulares de alto patrimonio y profesionales independientes). Las áreas que más aplican a casos personales son derecho familiar (divorcios, custodia compartida internacional, sucesiones, pensión alimenticia), litigio civil (daños y perjuicios, contratos personales) y litigio constitucional (juicio de amparo individual). Para casos personales aplicamos los mismos estándares que en casos corporativos: titular responsable directo, dictamen escrito antes de iniciar, comunicación periódica documentada y honorarios transparentes desde el día uno. La discreción es total — los asuntos personales suelen tener exposición patrimonial alta y ningún detalle del caso sale del despacho ni durante ni después del proceso.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FBF7EE]">
      <Script
        id="v4-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Preguntas frecuentes
          </p>
          <h2
            className="v3-display leading-[1.0] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            Preguntas frecuentes sobre{" "}
            <em className="text-[#B4975A]">servicios jurídicos</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Honorarios, plazos, cobertura, confidencialidad y proceso de
            selección de casos del despacho.
          </p>
        </div>

        <div className="max-w-3xl mx-auto border-t border-[rgba(26,23,20,0.10)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-[rgba(26,23,20,0.10)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline gap-5 py-6 sm:py-7 text-left group"
                >
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium w-7 shrink-0 self-start mt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 v3-display text-[20px] sm:text-[24px] leading-[1.25] text-[#1A1714] group-hover:text-[#8C7339] transition-colors">
                    {f.q}
                  </h3>
                  <span
                    className={`shrink-0 text-[#1A1714] group-hover:text-[#8C7339] text-2xl transition-transform duration-300 leading-none mt-1 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-12 pr-4 pb-7 max-w-3xl">
                      <p className="text-[14px] sm:text-[15px] leading-[1.75] text-[#1A1714]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Consult Card — pricing-style, refined corners + gold accents
// ============================================================
function V4ConsultCard() {
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
              Agenda una <em>consulta con un abogado</em> en CDMX
              <span className="text-[#B4975A]">.</span>
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
                href="mailto:sbissu@bissuabogados.com"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 text-[14px] font-medium rounded-[4px] hover:bg-white hover:text-[#1A1714] transition-colors"
              >
                Escribir correo
              </a>
            </div>

            <p className="mt-8 pt-6 border-t border-white/10 text-[11px] text-white/50">
              Bissu Abogados, S.C. · Av. Prado Norte 365 · Lomas de Chapultepec
              · CDMX
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

