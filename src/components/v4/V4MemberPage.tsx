"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { V4TeamMember } from "@/lib/v4-team";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = { member: V4TeamMember };

export default function V4MemberPage({ member }: Props) {
  return (
    <div className="v3-root min-h-screen">
      <MemberNav />
      <Header member={member} />
      <Bio member={member} />
      <Experience member={member} />
      <Education member={member} />
      <ContactBlock member={member} />
      <Footer />
    </div>
  );
}

function MemberNav() {
  return (
    <nav className="sticky top-0 z-40 bg-[#FBF7EE]/85 backdrop-blur-xl border-b border-[rgba(26,23,20,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/v4" className="flex items-baseline gap-2">
          <span className="v3-display text-[22px] leading-none">Bissu</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
            Abogados
          </span>
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="/v4#areas"
            className="hidden sm:inline text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors"
          >
            Áreas
          </a>
          <a
            href="/v4"
            className="text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors inline-flex items-center gap-1.5"
          >
            <span aria-hidden>←</span> Volver
          </a>
          <a href="/v4#cta" className="v3-btn">
            Agenda consulta
            <span className="v3-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Header({ member }: Props) {
  return (
    <section className="pt-16 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-10 text-[11px] tracking-[0.16em] uppercase text-[#5A4F45] font-medium"
          aria-label="Breadcrumb"
        >
          <a href="/v4" className="hover:text-[#1A1714] transition-colors">
            Inicio
          </a>
          <span className="mx-3 text-[#B4975A]/60">/</span>
          <a href="/v4#team" className="hover:text-[#1A1714] transition-colors">
            Equipo
          </a>
          <span className="mx-3 text-[#B4975A]/60">/</span>
          <span className="text-[#1A1714]">{member.name}</span>
        </motion.nav>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden bg-[#E5DCC4]">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{
                  filter: "saturate(0.92) contrast(1.05)",
                  objectPosition: `50% ${member.photoFocusY ?? "50%"}`,
                }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-7 lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="v3-eyebrow v3-eyebrow-pleca mb-6 inline-flex"
            >
              {member.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.3 }}
              className="v3-h1 mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {member.name}
              <span className="text-[#B4975A]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="text-[16px] sm:text-[17px] leading-[1.6] text-[#5A4F45] mb-8 max-w-xl"
            >
              {member.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/v4#cta" className="v3-btn">
                Agenda consulta gratuita
                <span className="v3-btn-arrow">→</span>
              </a>
              <a href={`mailto:${member.contact.email}`} className="v3-btn v3-btn-secondary">
                {member.contact.email}
              </a>
            </motion.div>

            {/* Languages */}
            <div className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase text-[#948876] font-medium">
              <span>Idiomas</span>
              <span className="w-3 h-px bg-[#B4975A]/60" aria-hidden />
              <span className="text-[#1A1714]">{member.languages.join(" · ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bio({ member }: Props) {
  return (
    <section className="py-16 sm:py-20 border-t border-[rgba(26,23,20,0.08)]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <p className="v3-eyebrow v3-eyebrow-pleca mb-7 inline-flex">Biografía</p>
        <p className="text-[18px] sm:text-[20px] leading-[1.6] text-[#1A1714] max-w-2xl mb-12 v3-display">
          {member.bio}
        </p>

        {/* Personal quote */}
        <blockquote className="border-l-2 border-[#B4975A] pl-6 sm:pl-8">
          <p
            className="v3-display italic text-[#1A1714] leading-[1.3]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            &ldquo;{member.quote}&rdquo;
          </p>
          <p className="mt-5 text-[11px] tracking-[0.16em] uppercase text-[#5A4F45] font-medium">
            — {member.name}
          </p>
        </blockquote>
      </div>
    </section>
  );
}

function Experience({ member }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-[#F4EDDD]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="v3-eyebrow v3-eyebrow-pleca mb-5 inline-flex">
            Áreas de práctica
          </p>
          <h2 className="v3-h2">
            Años de <em className="text-[#B4975A]">experiencia comprobada</em>
            <span className="text-[#B4975A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(26,23,20,0.10)] border border-[rgba(26,23,20,0.10)] rounded-[8px] overflow-hidden">
          {member.practiceAreas.map((p, i) => (
            <motion.div
              key={p.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              className="bg-white p-7 sm:p-9 flex items-baseline justify-between gap-6"
            >
              <h3 className="v3-display text-[22px] sm:text-[26px] leading-[1.15] flex-1">
                {p.area}
              </h3>
              <p className="v3-display v3-mono text-[#B4975A] tabular-nums leading-none text-[18px] sm:text-[22px] shrink-0">
                {p.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education({ member }: Props) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-6">
            <p className="v3-eyebrow v3-eyebrow-pleca mb-6 inline-flex">
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
            <p className="v3-eyebrow v3-eyebrow-pleca mb-6 inline-flex">
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

function ContactBlock({ member }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-[#1A1714] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h2
              className="v3-display leading-[1.05] tracking-[-0.025em] text-white max-w-2xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              ¿Tu caso es para{" "}
              <em className="text-[#B4975A]">{member.name.split(" ")[0]}</em>?
            </h2>
            <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-white/70 max-w-xl">
              Agenda una consulta inicial gratuita de 20 minutos. Si el caso es
              para Bissu, te lo decimos. Si conviene una firma con perfil más
              específico, te referenciamos sin costo.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-4">
            <a href="/v4#cta" className="v3-btn v3-btn-on-dark">
              Agenda consulta gratuita
              <span className="v3-btn-arrow">→</span>
            </a>
            <a
              href={`tel:${member.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-white/85 hover:text-white border-b border-white/30 hover:border-[#D4B97A] pb-1 transition-colors"
            >
              {member.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-[rgba(26,23,20,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#5A4F45]">
        <p>© {new Date().getFullYear()} Bissu Abogados, S.C. · Est. 2017</p>
        <a href="/v4" className="hover:text-[#1A1714] transition-colors">
          ← Volver al sitio
        </a>
      </div>
    </footer>
  );
}
