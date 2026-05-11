"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { V4TeamMember } from "@/lib/v4-team";
import { getOtherMembers, v4Team } from "@/lib/v4-team";
import V4FloatingCTA from "@/components/v4/V4FloatingCTA";

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

const PROCESS_STEPS = [
  { step: "01", title: "Reservás 20 minutos" },
  { step: "02", title: "Reunión con el titular" },
  { step: "03", title: "Dictamen escrito · 24 hs" },
  { step: "04", title: "$0 hasta firmar convenio" },
] as const;

type Props = {
  member: V4TeamMember;
  yearsOfPractice: number;
};

export default function V4MemberPage({ member, yearsOfPractice }: Props) {
  const firstName = member.firstName ?? member.name.split(" ")[0];
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="v3-root min-h-screen">
      <MemberNav />
      <V4FloatingCTA
        photo={member.photo}
        alt={member.name}
        initials={initials}
        headline={`Habla con ${firstName} hoy`}
      />
      <Header member={member} yearsOfPractice={yearsOfPractice} />
      <Bio member={member} />
      <Quote member={member} />
      <Experience member={member} />
      {member.awards && member.awards.length > 0 && (
        <Awards awards={member.awards} />
      )}
      <Education member={member} />
      <MidCta member={member} />
      {member.testimonials && member.testimonials.length > 0 && (
        <Testimonials testimonials={member.testimonials} />
      )}
      <OtherMembers currentSlug={member.slug} />
      {member.faqs && member.faqs.length > 0 && (
        <Faq faqs={member.faqs} firstName={member.firstName ?? member.name.split(" ")[0]} />
      )}
      <ConsultCard member={member} />
      <Footer />
      <StickyMobileCta member={member} />
    </div>
  );
}

// ============================================================
// Nav — V4Nav pattern (matches home exactly)
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
        <a href="/" className="flex items-baseline gap-2" aria-label="Bissu Abogados — Inicio">
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

        <a
          href="#cta"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] text-[13px] font-semibold whitespace-nowrap bg-[#1A1714] text-white hover:bg-[#8C7339] shadow-[0_6px_18px_-8px_rgba(26,23,20,0.45)] transition-all"
        >
          Agenda consulta
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// Header — Hero with photo + stats + trust strip
// ============================================================
function Header({ member, yearsOfPractice }: Props) {
  return (
    <section id="perfil" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
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
          <a href="/#abogados" className="hover:text-[#1A1714] transition-colors">
            Equipo
          </a>
          <span className="mx-3 text-[#B4975A]/60">/</span>
          <span className="text-[#1A1714]">{member.firstName ?? member.name.split(" ")[0]}</span>
        </motion.nav>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
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

          <div className="col-span-12 lg:col-span-7 lg:pt-4">
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

            {/* Trust strip — key credentials */}
            {member.keyCredentials && member.keyCredentials.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
                className="mt-7 flex flex-wrap gap-2 max-w-xl"
                aria-label="Credenciales clave"
              >
                {member.keyCredentials.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.02em] text-[#1A1714] bg-white border border-[rgba(26,23,20,0.10)] rounded-full px-3 py-1.5"
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full bg-[#B4975A]"
                      aria-hidden
                    />
                    {c}
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md mt-10 mb-10 border-y border-[rgba(26,23,20,0.10)] py-6"
            >
              <Stat value={`${yearsOfPractice}+`} label="Años de práctica" />
              <Stat value={String(member.practiceAreas.length)} label="Áreas" />
              <Stat
                value={String(member.languages.length)}
                label={member.languages.length === 1 ? "Idioma" : "Idiomas"}
              />
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            >
              <a href={member.contact.calendly ?? "#cta"} className="v3-btn">
                Agenda consulta gratuita
                <span className="v3-btn-arrow">→</span>
              </a>
            </motion.div>

            <div className="mt-10 inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-[#B4975A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
              </svg>
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
// Bio — centered intro
// ============================================================
function Bio({ member }: { member: V4TeamMember }) {
  return (
    <section
      id="biografia"
      className="py-24 sm:py-32 border-t border-[rgba(26,23,20,0.08)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Biografía</p>
          <h2 className="v3-h2">
            Trayectoria con <em className="text-[#B4975A]">criterio comprobado</em>
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
// Quote — dark V3Quote pattern with photo avatar
// ============================================================
function Quote({ member }: { member: V4TeamMember }) {
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
          className="faq-answer v3-display leading-[1.15] tracking-[-0.025em] max-w-5xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.25rem)" }}
        >
          <span className="text-[#B4975A]">&ldquo;</span>
          {member.quote}
          <span className="text-[#B4975A]">&rdquo;</span>
        </blockquote>
        <div className="mt-12 flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-[#E5DCC4] shrink-0">
            <Image
              src={member.photo}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
              style={{
                filter: "saturate(0.92) contrast(1.05)",
                objectPosition: `50% ${member.photoFocusY ?? "50%"}`,
              }}
            />
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
// Experience — practice areas linked to /v4/areas/<slug>
// ============================================================
function Experience({ member }: { member: V4TeamMember }) {
  return (
    <section className="py-24 sm:py-32 bg-[#F4EDDD]" id="areas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Áreas de práctica</p>
          <h2 className="v3-h2">
            Años de <em className="text-[#B4975A]">experiencia comprobada</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Cada área lo lleva el titular de principio a fin. Hacé clic para ver el alcance completo de cada práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden max-w-4xl mx-auto">
          {member.practiceAreas.map((p, i) => {
            const inner = (
              <>
                <h3 className="v3-display text-[20px] sm:text-[24px] leading-[1.15] flex-1 group-hover:text-[#8C7339] transition-colors">
                  {p.area}
                  {p.slug && (
                    <span
                      aria-hidden
                      className="ml-2 inline-block text-[#B4975A] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      →
                    </span>
                  )}
                </h3>
                <p className="v3-display v3-mono text-[#B4975A] tabular-nums leading-none text-[16px] sm:text-[20px] shrink-0">
                  desde {p.year}
                </p>
              </>
            );
            const baseClass =
              "bg-white p-7 sm:p-9 flex items-baseline justify-between gap-6 group transition-colors";
            return (
              <motion.div
                key={p.area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              >
                {p.slug ? (
                  <a
                    href={`/v4/areas/${p.slug}`}
                    className={`${baseClass} hover:bg-[#FBF7EE]`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={baseClass}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Awards — recognition badges (only renders if member has awards)
// ============================================================
function Awards({ awards }: { awards: string[] }) {
  return (
    <section className="py-20 sm:py-24 border-t border-[rgba(26,23,20,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Reconocimientos</p>
          <h2 className="v3-h2">
            Avalado por <em className="text-[#B4975A]">rankings independientes</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden max-w-4xl mx-auto">
          {awards.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="bg-white p-7 sm:p-8 flex flex-col items-center text-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#B4975A] mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden
              >
                <circle cx="12" cy="8.5" r="5.5" />
                <path d="M8 13l-2 8 6-3 6 3-2-8" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
              <p className="v3-display text-[16px] sm:text-[17px] leading-[1.3] text-[#1A1714]">
                {a}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============================================================
// Education + Background
// ============================================================
function Education({ member }: { member: V4TeamMember }) {
  return (
    <section className="py-24 sm:py-32" id="formacion">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Formación</p>
          <h2 className="v3-h2">
            Estudios y <em className="text-[#B4975A]">antecedentes profesionales</em>
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
                  <span className="shrink-0 mt-2 w-3 h-px bg-[#B4975A]" aria-hidden />
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
// MidCta — slim banner between education and testimonials
// ============================================================
function MidCta({ member }: { member: V4TeamMember }) {
  const firstName = member.firstName ?? member.name.split(" ")[0];
  return (
    <section className="pb-12 sm:pb-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="bg-white border border-[rgba(26,23,20,0.10)] rounded-[6px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-2">
              Consulta inicial gratuita
            </p>
            <p className="v3-display text-[20px] sm:text-[24px] leading-[1.3] text-[#1A1714]">
              ¿Tu caso es de los que lleva {firstName}? Hablalo en 20 minutos, sin compromiso.
            </p>
          </div>
          <a
            href="#cta"
            className="shrink-0 v3-btn"
          >
            Agenda con {firstName}
            <span className="v3-btn-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials — anonymized client quotes
// ============================================================
function Testimonials({
  testimonials,
}: {
  testimonials: NonNullable<V4TeamMember["testimonials"]>;
}) {
  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Testimonios</p>
          <h2 className="v3-h2">
            Lo que dicen <em className="text-[#B4975A]">los clientes</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
          <p className="mt-6 text-[14px] leading-[1.65] text-[#5A4F45] max-w-xl mx-auto">
            Testimonios anonimizados de clientes con caso resuelto. Identidad protegida por secreto profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.context}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="bg-white border border-[rgba(26,23,20,0.10)] rounded-[6px] p-7 sm:p-9"
            >
              <span aria-hidden className="block text-[#B4975A] v3-display text-[40px] leading-none mb-4">
                &ldquo;
              </span>
              <blockquote className="v3-display text-[18px] sm:text-[20px] leading-[1.45] text-[#1A1714]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[rgba(26,23,20,0.10)] text-[11px] tracking-[0.12em] uppercase text-[#5A4F45] font-medium">
                {t.context}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Other members — V3Team pattern
// ============================================================
function OtherMembers({ currentSlug }: { currentSlug: string }) {
  const others = getOtherMembers(currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="py-24 sm:py-32" id="equipo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">El equipo</p>
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
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#B4975A] font-medium mb-3">
                  {o.role}
                </p>
                <p className="text-[13px] leading-[1.55] text-[#5A4F45] mb-5">
                  {o.subtitle}
                </p>
                <p className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#1A1714] group-hover:text-[#8C7339] transition-colors inline-flex items-center gap-1.5">
                  Ver perfil{" "}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
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
// FAQ — accordion with FAQPage schema-friendly markup
// ============================================================
function Faq({
  faqs,
  firstName,
}: {
  faqs: NonNullable<V4TeamMember["faqs"]>;
  firstName: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F4EDDD]" id="faq">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">Preguntas frecuentes</p>
            <h2 className="v3-h2">
              Lo que <em className="text-[#B4975A]">la gente pregunta</em>
              <span className="text-[#B4975A]">.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.65] text-[#5A4F45] max-w-sm">
              Si tu duda no está acá, agendá una consulta inicial gratuita de 20 minutos con {firstName}.
            </p>
            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors"
            >
              Agenda con {firstName} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-[rgba(26,23,20,0.10)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.question} className="border-b border-[rgba(26,23,20,0.10)]">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-6 group"
                      aria-expanded={isOpen}
                    >
                      <h3 className="v3-display text-[18px] sm:text-[22px] leading-[1.3] text-[#1A1714] group-hover:text-[#8C7339] transition-colors">
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
                        isOpen ? "max-h-[700px] pb-6 sm:pb-7" : "max-h-0"
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
// Consult card — V3ConsultCard with process strip above
// ============================================================
function ConsultCard({ member }: { member: V4TeamMember }) {
  const firstName = member.firstName ?? member.name.split(" ")[0];

  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Process strip */}
        <div className="mb-14 sm:mb-16">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-6 inline-flex">El proceso · 4 pasos</p>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden">
            {PROCESS_STEPS.map((s) => (
              <li key={s.step} className="bg-white p-5 sm:p-6 flex items-baseline gap-3">
                <span className="v3-display v3-mono text-[#B4975A] leading-none text-[18px] sm:text-[20px] tabular-nums">
                  {s.step}
                </span>
                <span className="text-[13px] sm:text-[14px] leading-[1.35] text-[#1A1714] font-medium">
                  {s.title}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          <div className="lg:col-span-5">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-5">Agenda con {firstName}</p>
            <h2 className="v3-h2 mb-8">
              Hablemos de tu caso<span className="text-[#B4975A]">.</span>
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#5A4F45] max-w-md mb-10">
              La consulta inicial es gratuita y sin compromiso. Si {firstName} no es el abogado indicado dentro de Bissu, te referenciamos al titular adecuado — o a otro despacho si conviene.
            </p>

            <div className="space-y-4">
              {[
                ["Disponibilidad", "Esta semana"],
                ["Modalidad", "Video o presencial · Polanco, CDMX"],
                ["Idiomas", member.languages.join(" · ")],
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
                  Una reunión, sin compromiso, para que sepas si {firstName} es el abogado indicado.
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
                <p className="text-[12px] text-white/55">$0 hasta firmar convenio</p>
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
                Escribir a {firstName}
              </a>
            </div>

            <p className="mt-8 pt-6 border-t border-white/10 text-[11px] text-white/50">
              Bissu Abogados, S.C. · Av. Prado Norte 365 · Lomas de Chapultepec · CDMX
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
            {member.firstName ?? member.name.split(" ")[0]} responde en menos de 24h
          </p>
        </div>
        <a
          href="#cta"
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#1A1714] px-5 py-2.5 text-[13px] font-medium rounded-[4px]"
        >
          Agendar →
        </a>
      </div>
    </div>
  );
}

// ============================================================
// Footer — V3Footer pattern
// ============================================================
function Footer() {
  return (
    <footer className="bg-[#FBF7EE] border-t border-[rgba(26,23,20,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 sm:py-20">
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
              Av. Prado Norte 365, Int. 6<br />
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
              Equipo
            </p>
            <ul className="space-y-1.5 text-[13px]">
              {v4Team.map((m) => (
                <li key={m.slug}>
                  <a
                    href={`/v4/equipo/${m.slug}`}
                    className="text-[#1A1714] hover:text-[#8C7339] transition-colors"
                  >
                    {m.name.split(" ").slice(0, 2).join(" ")}
                  </a>
                </li>
              ))}
            </ul>
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
            <div className="mt-5 flex flex-col gap-1.5 text-[12px] tracking-[0.12em] uppercase font-medium">
              {[
                ["Instagram", "https://www.instagram.com/bissuabogados/"],
                ["LinkedIn", "https://www.linkedin.com/company/bissu-abogados-s-c-/"],
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
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(26,23,20,0.08)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
          <p>© {new Date().getFullYear()} Bissu Abogados, S.C. · Est. 2017</p>
          <p>Información de carácter informativo · No constituye asesoría legal</p>
        </div>
      </div>
    </footer>
  );
}
