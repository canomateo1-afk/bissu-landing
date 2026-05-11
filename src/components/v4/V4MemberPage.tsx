"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { V4TeamMember } from "@/lib/v4-team";
import { getOtherMembers } from "@/lib/v4-team";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  ["Áreas", "/#areas"],
  ["Casos", "/#caso"],
  ["Por qué Bissu", "/#comparison"],
  ["Equipo", "/#abogados"],
] as const;

const CONSULT_INCLUDES = [
  "Reunión 20 minutos · video o presencial",
  "Análisis del caso por abogado titular",
  "Identificación del área aplicable",
  "Recomendación honesta · Bissu o referencia",
  "Dictamen escrito post-consulta en 24 hs",
  "Sin cobro hasta firmar convenio",
];

type Props = {
  member: V4TeamMember;
  yearsOfPractice: number;
};

export default function V4MemberPage({ member, yearsOfPractice }: Props) {
  return (
    <div className="v3-root min-h-screen">
      <MemberNav />
      <Header member={member} yearsOfPractice={yearsOfPractice} />
      <Bio member={member} />
      <Quote member={member} />
      <Experience member={member} />
      <Education member={member} />
      <OtherMembers currentSlug={member.slug} />
      <ConsultCard member={member} />
      <Footer />
      <StickyMobileCta member={member} />
    </div>
  );
}

// ============================================================
// Top nav — mirrors V3Nav from the home (fixed + scroll-to-solid)
// ============================================================
function MemberNav() {
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
          ? "bg-[#FBF7EE]/85 backdrop-blur-xl border-b border-[rgba(26,23,20,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-baseline gap-2"
          aria-label="Bissu Abogados — Inicio"
        >
          <span className="v3-display text-[22px] leading-none">Bissu</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
            Abogados
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(([label, href]) => (
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
          <a href="/#cta" className="v3-btn">
            Agenda consulta
            <span className="v3-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Header — Hero with photo + stats row (mirrors V3Hero padding)
// ============================================================
function Header({ member, yearsOfPractice }: Props) {
  return (
    <section
      id="perfil"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-10 text-[11px] tracking-[0.16em] uppercase text-[#5A4F45] font-medium"
          aria-label="Breadcrumb"
        >
          <a href="/" className="hover:text-[#1A1714] transition-colors">
            Inicio
          </a>
          <span className="mx-3 text-[#B4975A]/60">/</span>
          <a
            href="/#abogados"
            className="hover:text-[#1A1714] transition-colors"
          >
            Equipo
          </a>
          <span className="mx-3 text-[#B4975A]/60">/</span>
          <span className="text-[#1A1714]">
            {member.firstName ?? member.name.split(" ")[0]}
          </span>
        </motion.nav>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
          {/* Photo — matches V3Hero media style (rounded-[6px], saturate filter) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden bg-[#E5DCC4]">
              <Image
                src={member.photo}
                alt={`${member.name} — ${member.role} en Bissu Abogados, CDMX`}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{
                  filter: "saturate(0.92) contrast(1.04)",
                  objectPosition: `50% ${member.photoFocusY ?? "50%"}`,
                }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-7 lg:pt-4">
            {/* Eligibility-style pill (matches V3Hero) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#B4975A]">
                {member.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
              className="v3-h1"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
            >
              {member.name}
              <span className="text-[#B4975A]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-7 sm:mt-9 text-[16px] sm:text-[17px] leading-[1.55] text-[#5A4F45] max-w-md"
            >
              {member.subtitle}
            </motion.p>

            {/* Stats row */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md mt-10 mb-10 border-y border-[rgba(26,23,20,0.10)] py-6"
            >
              <Stat value={`${yearsOfPractice}+`} label="Años de práctica" />
              <Stat
                value={String(member.practiceAreas.length)}
                label="Áreas"
              />
              <Stat
                value={String(member.languages.length)}
                label={member.languages.length === 1 ? "Idioma" : "Idiomas"}
              />
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            >
              <a href={member.contact.calendly ?? "/#cta"} className="v3-btn">
                Agenda consulta gratuita
                <span className="v3-btn-arrow">→</span>
              </a>
            </motion.div>

            {/* Languages */}
            <div className="mt-10 inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium">
              <span>Idiomas</span>
              <span className="w-3 h-px bg-[#B4975A]/60" aria-hidden />
              <span>{member.languages.join(" · ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd
        className="v3-display v3-mono text-[#1A1714] leading-none"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
      >
        {value}
      </dd>
      <p className="mt-2 text-[10px] tracking-[0.16em] uppercase text-[#5A4F45] font-medium">
        {label}
      </p>
    </div>
  );
}

// ============================================================
// Bio — centered intro (mirrors V3Team header style)
// ============================================================
function Bio({ member }: { member: V4TeamMember }) {
  return (
    <section
      id="biografia"
      className="py-24 sm:py-32 border-t border-[rgba(26,23,20,0.08)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Biografía
          </p>
          <h2 className="v3-h2">
            Trayectoria con{" "}
            <em className="text-[#B4975A]">criterio comprobado</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="intro-paragraph mt-8 text-[16px] sm:text-[17px] leading-[1.7] text-[#5A4F45] max-w-2xl mx-auto">
            {member.bio}
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Quote — mirrors V3Quote exactly (dark bg, eyebrow + bar, blockquote, avatar)
// ============================================================
function Quote({ member }: { member: V4TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="py-28 sm:py-36 bg-[#1A1714] text-white relative overflow-hidden">
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
          En sus palabras
        </p>
        <blockquote
          className="v3-display leading-[1.15] tracking-[-0.025em] max-w-5xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.25rem)" }}
        >
          <span className="text-[#B4975A]">&ldquo;</span>
          {member.quote}
          <span className="text-[#B4975A]">&rdquo;</span>
        </blockquote>
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 text-[15px] font-medium">
            {initials}
          </div>
          <div>
            <p className="text-[14px] font-medium">{member.name}</p>
            <p className="text-[12px] text-white/60">
              {member.role} · Bissu Abogados, S.C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Practice areas — F4EDDD bg + 2-col grid (matches home alt-bg pattern)
// ============================================================
function Experience({ member }: { member: V4TeamMember }) {
  return (
    <section className="py-24 sm:py-32 bg-[#F4EDDD]" id="areas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Áreas de práctica
          </p>
          <h2 className="v3-h2">
            Años de <em className="text-[#B4975A]">experiencia comprobada</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Cada área lo lleva el titular de principio a fin. Sin derivaciones a
            juniors anónimos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden max-w-4xl mx-auto">
          {member.practiceAreas.map((p, i) => (
            <motion.div
              key={p.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              className="bg-white p-7 sm:p-9 flex items-baseline justify-between gap-6"
            >
              <h3 className="v3-display text-[20px] sm:text-[24px] leading-[1.15] flex-1">
                {p.area}
              </h3>
              <p className="v3-display v3-mono text-[#B4975A] tabular-nums leading-none text-[16px] sm:text-[20px] shrink-0">
                desde {p.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Education + Background — centered intro, 2-col body
// ============================================================
function Education({ member }: { member: V4TeamMember }) {
  return (
    <section className="py-24 sm:py-32" id="formacion">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Formación
          </p>
          <h2 className="v3-h2">
            Estudios y{" "}
            <em className="text-[#B4975A]">antecedentes profesionales</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 max-w-5xl mx-auto">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-6">
              Estudios
            </p>
            <ul className="space-y-4">
              {member.education.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-[1.6] text-[#1A1714]"
                >
                  <span
                    className="shrink-0 mt-2 w-3 h-px bg-[#B4975A]"
                    aria-hidden
                  />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-6">
              Antecedentes
            </p>
            <ul className="space-y-5">
              {member.background.map((b, i) => (
                <li key={i}>
                  <p className="v3-display text-[18px] sm:text-[20px] leading-[1.25] text-[#1A1714]">
                    {b.firm}
                  </p>
                  <p className="text-[12px] tracking-[0.06em] text-[#5A4F45] mt-1">
                    {b.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Other members — exact V3Team pattern (square, centered, no card chrome)
// ============================================================
function OtherMembers({ currentSlug }: { currentSlug: string }) {
  const others = getOtherMembers(currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-[#F4EDDD]" id="equipo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            El equipo
          </p>
          <h2 className="v3-h2">
            Otros abogados <em className="text-[#B4975A]">del despacho</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Sin derivaciones. Sin equipo de juniors anónimos. Cada caso lo
            maneja un titular responsable de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto">
          {others.map((o, i) => (
            <motion.article
              key={o.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="text-center"
            >
              <a
                href={`/v4/equipo/${o.slug}`}
                className="block group"
                aria-label={`Ver perfil de ${o.name}`}
              >
                <div className="relative aspect-square rounded-[6px] overflow-hidden mb-7 bg-[#E5DCC4]">
                  <Image
                    src={o.photo}
                    alt={o.name}
                    fill
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 350px"
                    style={{
                      filter: "saturate(0.9) contrast(1.04)",
                      objectPosition: `50% ${o.photoFocusY ?? "50%"}`,
                    }}
                  />
                </div>
                <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] mb-2 group-hover:text-[#8C7339] transition-colors">
                  {o.name}
                </h3>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-5">
                  {o.role}
                </p>
                <p className="text-[13px] leading-[1.55] text-[#5A4F45] mb-5">
                  {o.subtitle}
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium">
                  <span>Idiomas</span>
                  <span className="w-3 h-px bg-[#B4975A]/60" aria-hidden />
                  <span>{o.languages.join(" · ")}</span>
                </div>
                <p className="mt-6 text-[11px] tracking-[0.16em] uppercase font-medium text-[#1A1714] group-hover:text-[#8C7339] transition-colors inline-flex items-center gap-1.5">
                  Ver perfil{" "}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Consult card — exact V3ConsultCard pattern
// ============================================================
function ConsultCard({ member }: { member: V4TeamMember }) {
  const firstName = member.firstName ?? member.name.split(" ")[0];

  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          {/* Left — context */}
          <div className="lg:col-span-5">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5">
              Agenda con {firstName}
            </p>
            <h2 className="v3-h2 mb-8">
              Hablemos de tu caso<span className="text-[#B4975A]">.</span>
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#5A4F45] max-w-md mb-10">
              La consulta inicial es gratuita y sin compromiso. Si {firstName}{" "}
              no es el abogado indicado dentro de Bissu, te referenciamos al
              titular adecuado — o a otro despacho si conviene.
            </p>

            <div className="space-y-4">
              {[
                ["Disponibilidad", "Esta semana"],
                ["Modalidad", "Video o presencial · Polanco, CDMX"],
                ["Idiomas", member.languages.join(" · ")],
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
                  Una reunión, sin compromiso, para que sepas si {firstName} es
                  el abogado indicado.
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
              <div className="mt-3 flex items-baseline gap-4 flex-wrap">
                <p className="v3-display italic text-[20px] sm:text-[24px] text-white/75">
                  · 20 minutos
                </p>
                <p className="text-[12px] text-white/55">
                  $0 hasta firmar convenio
                </p>
              </div>
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

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={member.contact.calendly ?? "/#cta"}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-7 py-4 text-[14px] font-medium rounded-[4px] hover:bg-[#B4975A] hover:text-white transition-colors"
              >
                Agenda consulta gratuita
                <span>→</span>
              </a>
              <a
                href={`mailto:${member.contact.email}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 text-[14px] font-medium rounded-[4px] hover:bg-white hover:text-[#1A1714] transition-colors"
              >
                Escribir a {member.firstName ?? member.name.split(" ")[0]}
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
// Sticky mobile CTA — visible after first scroll
// ============================================================
function StickyMobileCta({ member }: { member: V4TeamMember }) {
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
            {member.firstName ?? member.name.split(" ")[0]} responde en menos de
            24h
          </p>
        </div>
        <a
          href={member.contact.calendly ?? "/#cta"}
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-5 py-2.5 text-[13px] font-medium rounded-[4px]"
        >
          Agendar →
        </a>
      </div>
    </div>
  );
}

// ============================================================
// Footer — exact V3Footer pattern + extra columns for team links
// ============================================================
function Footer() {
  return (
    <footer className="bg-[#FBF7EE] border-t border-[rgba(26,23,20,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 sm:py-20">
        {/* Wordmark — identical to V3Footer */}
        <div className="border-b border-[rgba(26,23,20,0.10)] pb-12 mb-12">
          <a
            href="/"
            className="inline-flex items-baseline gap-4 sm:gap-6 group"
            aria-label="Bissu Abogados — Inicio"
          >
            <p
              className="v3-display leading-[0.9] transition-colors group-hover:text-[#8C7339]"
              style={{
                fontSize: "clamp(4rem, 14vw, 14rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Bissu<span className="text-[#B4975A]">.</span>
            </p>
            <p className="text-[12px] sm:text-[14px] tracking-[0.32em] uppercase text-[#5A4F45] font-medium pb-2 sm:pb-4">
              Abogados
            </p>
          </a>
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
                [
                  "LinkedIn",
                  "https://www.linkedin.com/company/bissu-abogados-s-c-/",
                ],
                ["Facebook", "https://www.facebook.com/BissuAbogados/"],
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
          <p>
            Información de carácter informativo · No constituye asesoría legal
          </p>
        </div>
      </div>
    </footer>
  );
}
