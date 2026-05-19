"use client";

/**
 * V4HerenciasLanding — landing de CONVERSIÓN para campañas de Meta Ads.
 *
 * Variante de V4AreaPage optimizada para clics en el CTA (agendar llamada):
 *  - Nav sin menú ni links de salida (solo marca + CTA).
 *  - Sin breadcrumb, sin mailto en el hero (cero fugas).
 *  - Headline orientado a beneficio + badge de urgencia + microcopy de reaseguro.
 *  - Tira de prueba social (premios + años + respuesta) bajo el hero.
 *  - CTAs intermedios cada pocas secciones.
 *  - Un solo CTA con copy unificado: "Agenda tu llamada gratis".
 *  - WhatsApp como canal alternativo (flotante + en el bloque final).
 *
 * No modifica V4AreaPage ni el resto del sitio.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { V4Area } from "@/lib/v4-areas";
import { getMemberBySlug } from "@/lib/v4-team";
import { CALENDLY_GENERAL, calendlyLinkProps } from "@/lib/calendly";
import { events } from "@/lib/analytics";
import V4FloatingCTA from "@/components/v4/V4FloatingCTA";
import V4Footer from "@/components/v4/V4Footer";
import CalendlyInterceptor from "@/components/CalendlyInterceptor";

const EASE = [0.22, 1, 0.36, 1] as const;

const CTA_LABEL = "Agenda tu llamada gratis";

const CONSULT_INCLUDES = [
  "Reunión de 20 minutos · video o teléfono",
  "Análisis del caso con un abogado especialista",
  "Lectura honesta: si tiene salida y cuál es",
  "Estimación de tiempos y honorarios del caso",
];

// ============================================================
// Page
// ============================================================
export default function V4HerenciasLanding({ area }: { area: V4Area }) {
  const teamMembers = area.teamSlugs
    .map((s) => getMemberBySlug(s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <div className="v3-root min-h-screen">
      <CalendlyInterceptor />
      <LandingNav />
      <V4FloatingCTA
        headline="Habla con un abogado hoy."
        body={"Consulta gratuita de 20 minutos.\nAsesoría especializada."}
        trackingLocation="herencias_floating"
      />
      <Hero area={area} />
      <TrustStrip />
      <Services area={area} />
      <MidCta
        text="¿Tu caso es alguno de estos? Una llamada de 20 minutos lo aclara."
        location="herencias_mid_servicios"
      />
      <Process area={area} />
      <MidCta
        text="No dejes la herencia detenida un mes más."
        location="herencias_mid_proceso"
      />
      {teamMembers.length > 0 && (
        <Team area={area} teamMembers={teamMembers} />
      )}
      <Testimonials teamMembers={teamMembers} />
      <Faq area={area} />
      <ConsultCard area={area} />
      <V4Footer />
      <StickyMobileCta />
    </div>
  );
}

// ============================================================
// Nav — solo marca + CTA. Sin menú, sin dropdown, sin links de salida.
// ============================================================
function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${
        scrolled
          ? "bg-[#FBF7EE]/90 backdrop-blur-xl border-b border-[rgba(26,23,20,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Marca — no es link: en una landing de ads no queremos fugas */}
        <span className="flex items-baseline gap-2 select-none">
          <span className="v3-display text-[22px] leading-none">Bissu</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
            Abogados
          </span>
        </span>

        <a
          href={CALENDLY_GENERAL}
          {...calendlyLinkProps}
          onClick={() => events.ctaClick("herencias_nav", CTA_LABEL)}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] text-[13px] font-semibold whitespace-nowrap bg-[#1A1714] text-white hover:bg-[#8C7339] shadow-[0_6px_18px_-8px_rgba(26,23,20,0.45)] transition-all"
        >
          {CTA_LABEL}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// Hero — headline de conversión, badge de urgencia, un solo CTA
// ============================================================
function Hero({ area }: { area: V4Area }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5 mb-6 rounded-full border border-[rgba(26,23,20,0.14)] bg-white/60 px-3.5 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B4975A] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B4975A]" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#5A4F45]">
                Citas disponibles esta semana
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
              className="v3-h1"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
            >
              Recupera la herencia que te corresponde, sin pleitos familiares
              <span className="text-[#B4975A]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-6 text-[16px] sm:text-[18px] leading-[1.6] text-[#5A4F45] max-w-lg"
            >
              {area.heroBlurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-8"
            >
              <a
                href={CALENDLY_GENERAL}
                {...calendlyLinkProps}
                onClick={() => events.ctaClick("herencias_hero", CTA_LABEL)}
                className="v3-btn"
              >
                {CTA_LABEL}
                <span className="v3-btn-arrow">→</span>
              </a>
              <p className="mt-3 text-[13px] text-[#5A4F45]">
                Gratis · 20 minutos · respuesta en menos de 24 horas
              </p>
            </motion.div>
          </div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="col-span-12 lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/6] lg:aspect-[6/7] overflow-hidden rounded-[6px] bg-[#E5DCC4]">
              <Image
                src={area.image}
                alt="Abogados de herencias y sucesiones — Bissu Abogados, CDMX"
                fill
                className="object-cover"
                priority
                quality={88}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ filter: "saturate(0.92) contrast(1.04)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Trust strip — prueba social bajo el hero (tráfico pago llega frío)
// ============================================================
function TrustStrip() {
  const items: [string, string][] = [
    ["18+", "Años en litigio civil y sucesorio"],
    ["Best Lawyers", "Reconocimiento México 2026"],
    ["Leaders League", "Ranking 2025"],
    ["< 24 h", "Respuesta a tu consulta"],
  ];
  return (
    <section className="border-y border-[rgba(26,23,20,0.08)] bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[rgba(26,23,20,0.10)]">
          {items.map(([value, label]) => (
            <div key={label} className="py-7 sm:py-8 px-4 text-center">
              <p className="v3-display text-[#B4975A] leading-none text-[24px] sm:text-[30px]">
                {value}
              </p>
              <p className="mt-2 text-[12px] sm:text-[13px] leading-[1.45] text-[#5A4F45]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Mid CTA — banda de conversión entre secciones
// ============================================================
function MidCta({ text, location }: { text: string; location: string }) {
  return (
    <section className="py-14 sm:py-16 bg-[#1A1714]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="v3-display text-white text-[22px] sm:text-[26px] leading-[1.25] max-w-xl">
            {text}
          </p>
          <a
            href={CALENDLY_GENERAL}
            {...calendlyLinkProps}
            onClick={() => events.ctaClick(location, CTA_LABEL)}
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-7 py-4 text-[14px] font-semibold rounded-[4px] hover:bg-[#B4975A] hover:text-white transition-colors"
          >
            {CTA_LABEL}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Services
// ============================================================
function Services({ area }: { area: V4Area }) {
  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Qué resolvemos
          </p>
          <h2 className="v3-h2">
            {area.servicesH2}
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="intro-paragraph mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            {area.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden">
          {area.services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
              className="bg-white p-7 sm:p-9"
            >
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="v3-display text-[20px] sm:text-[22px] leading-[1.2] mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#5A4F45]">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Process
// ============================================================
function Process({ area }: { area: V4Area }) {
  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Proceso
          </p>
          <h2 className="v3-h2">
            Cómo trabajamos <em className="text-[#B4975A]">tu caso</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden max-w-6xl mx-auto">
          {area.process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="bg-white p-7 sm:p-9 flex flex-col"
            >
              <p
                className="v3-display v3-mono text-[#B4975A] leading-none mb-5"
                style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
              >
                {p.step}
              </p>
              <h3 className="v3-display text-[18px] sm:text-[20px] leading-[1.25] mb-3">
                {p.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#5A4F45]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Team
// ============================================================
function Team({
  area,
  teamMembers,
}: {
  area: V4Area;
  teamMembers: NonNullable<ReturnType<typeof getMemberBySlug>>[];
}) {
  return (
    <section className="py-24 sm:py-28 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Nuestro equipo
          </p>
          <h2 className="v3-h2">
            Quién lleva tu <em className="text-[#B4975A]">caso</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            En materia {area.label}, el caso lo conduce un abogado especialista
            de principio a fin.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 ${
            teamMembers.length === 1 ? "max-w-md" : "sm:grid-cols-2 max-w-3xl"
          } gap-8 sm:gap-10 mx-auto`}
        >
          {teamMembers.map((m, i) => (
            <motion.article
              key={m.slug}
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
                  style={{
                    filter: "saturate(0.9) contrast(1.04)",
                    objectPosition: `50% ${m.photoFocusY ?? "50%"}`,
                  }}
                />
              </div>
              <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] mb-2">
                {m.name}
              </h3>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-3">
                {m.role}
              </p>
              <p className="text-[13px] leading-[1.55] text-[#5A4F45]">
                {m.subtitle}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials
// ============================================================
const GENERIC_TESTIMONIALS: { quote: string; attribution: string }[] = [
  {
    quote:
      "Negociaron una reestructura concursal que mantuvo operando una empresa con tres generaciones. El diagnóstico legal desde el día 1 cambió completamente cómo vivimos el proceso.",
    attribution: "Directora · Empresa industrial · Reestructura concursal · 2024",
  },
  {
    quote:
      "Lo que diferencia a Bissu es la honestidad inicial. En la primera reunión nos dijeron qué escenarios tenían riesgo y cuáles no. Sin esa transparencia no hubiéramos avanzado.",
    attribution: "CFO · Multinacional · Litigio mercantil · 2024",
  },
  {
    quote:
      "Custodia compartida internacional con régimen y pensión asegurados en moneda dura. Once meses de proceso pero con un titular que respondió cada mensaje.",
    attribution: "Persona física · Litigio familiar · 2025",
  },
];

function Testimonials({
  teamMembers,
}: {
  teamMembers: ReturnType<typeof getMemberBySlug>[];
}) {
  const fromTeam = teamMembers.flatMap((m) =>
    (m?.testimonials ?? []).map((t) => ({
      quote: t.quote,
      attribution: t.context,
    }))
  );
  const items = [...fromTeam, ...GENERIC_TESTIMONIALS].slice(0, 3);

  return (
    <section className="py-24 sm:py-28 bg-[#FBF7EE]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5">
            Lo que dicen los clientes
          </p>
          <h2 className="v3-h2">
            Testimonios de clientes de{" "}
            <em className="text-[#B4975A]">Bissu Abogados, S.C</em>
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
              className="v3-card p-7 sm:p-8 flex flex-col bg-white"
            >
              <span className="text-[#B4975A] text-[14px] tracking-[3px] mb-4" aria-hidden>
                ★★★★★
              </span>
              <p className="text-[15px] leading-[1.6] text-[#1A1714] mb-8 flex-1">
                {t.quote}
              </p>
              <p className="pt-6 border-t border-[rgba(26,23,20,0.10)] text-[12px] tracking-[0.06em] text-[#5A4F45] leading-[1.5]">
                {t.attribution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function Faq({ area }: { area: V4Area }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
              Preguntas frecuentes
            </p>
            <h2 className="v3-h2">
              Lo que <em className="text-[#B4975A]">la gente pregunta</em>
              <span className="text-[#B4975A]">.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.65] text-[#5A4F45] max-w-sm">
              La forma más rápida de resolver tu duda es una llamada gratuita de
              20 minutos con un abogado.
            </p>
            <a
              href={CALENDLY_GENERAL}
              {...calendlyLinkProps}
              onClick={() => events.ctaClick("herencias_faq", CTA_LABEL)}
              className="mt-6 v3-btn"
            >
              {CTA_LABEL}
              <span className="v3-btn-arrow">→</span>
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-[rgba(26,23,20,0.10)]">
              {area.faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={f.question}
                    className="border-b border-[rgba(26,23,20,0.10)]"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-6 group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="v3-display text-[18px] sm:text-[22px] leading-[1.3] text-[#1A1714] group-hover:text-[#8C7339] transition-colors faq-answer">
                        {f.question}
                      </h3>
                      <span
                        className={`shrink-0 mt-1 w-6 h-6 rounded-full border border-[rgba(26,23,20,0.20)] flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-[#B4975A] border-[#B4975A] text-white rotate-45"
                            : "text-[#5A4F45]"
                        }`}
                        aria-hidden
                      >
                        <span className="text-[15px] leading-none">+</span>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-[600px] pb-6 sm:pb-7" : "max-h-0"
                      }`}
                    >
                      <p className="faq-answer text-[14px] sm:text-[15px] leading-[1.7] text-[#5A4F45] max-w-2xl pr-10">
                        {f.answer}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Consult card — un solo CTA primario + WhatsApp como alternativa
// ============================================================
function ConsultCard({ area }: { area: V4Area }) {
  return (
    <section id="cta" className="py-24 sm:py-28 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          <div className="lg:col-span-5">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5">
              Agenda tu llamada
            </p>
            <h2 className="v3-h2 mb-8">
              Tu herencia no se resuelve{" "}
              <em className="text-[#B4975A]">sola</em>
              <span className="text-[#B4975A]">.</span>
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#5A4F45] max-w-md mb-10">
              Cada mes que pasa, el patrimonio familiar sigue detenido. Una
              llamada de 20 minutos con un abogado especialista te dice si tu
              caso de {area.label.toLowerCase()} tiene salida y cuál es.
            </p>

            <div className="space-y-4">
              {[
                ["Disponibilidad", "Esta semana"],
                ["Modalidad", "Video o teléfono · también presencial en CDMX"],
                ["Costo", "Consulta inicial gratuita"],
                [
                  "Confidencialidad",
                  "Secreto profesional desde el primer contacto",
                ],
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
                  Reserva tu llamada con un abogado de sucesiones.
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

            <div>
              <p
                className="v3-display v3-mono leading-[0.9] tracking-[-0.03em]"
                style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
              >
                Gratuita
                <span className="text-[#B4975A]">.</span>
              </p>
              <p className="mt-3 v3-display italic text-[20px] sm:text-[24px] text-white/75">
                · 20 minutos
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {CONSULT_INCLUDES.map((it) => (
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

            <div className="mt-10">
              <a
                href={CALENDLY_GENERAL}
                {...calendlyLinkProps}
                onClick={() => events.ctaClick("herencias_consult_card", CTA_LABEL)}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-7 py-4 text-[14px] font-semibold rounded-[4px] hover:bg-[#B4975A] hover:text-white transition-colors"
              >
                {CTA_LABEL}
                <span>→</span>
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

// ============================================================
// Sticky mobile CTA
// ============================================================
function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="bg-[#1A1714] border-t border-white/10 px-4 py-3 flex items-center gap-3"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#B4975A] font-medium leading-none mb-1">
            Consulta gratuita
          </p>
          <p className="text-[13px] text-white/85 truncate">
            20 minutos · con un abogado especialista
          </p>
        </div>
        <a
          href={CALENDLY_GENERAL}
          {...calendlyLinkProps}
          onClick={() => events.ctaClick("herencias_mobile_sticky", CTA_LABEL)}
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-5 py-2.5 text-[13px] font-semibold rounded-[4px]"
        >
          Agenda gratis →
        </a>
      </div>
    </div>
  );
}
