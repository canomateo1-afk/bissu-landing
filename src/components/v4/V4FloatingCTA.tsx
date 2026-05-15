"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CALENDLY_GENERAL, calendlyLinkProps } from "@/lib/calendly";
import { events } from "@/lib/analytics";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  /** @deprecated — kept for backwards compat. The CTA now uses a phone icon. */
  photo?: string;
  /** @deprecated — kept for backwards compat. */
  alt?: string;
  /** @deprecated — kept for backwards compat. */
  initials?: string;
  /** Headline shown in expanded mode. */
  headline?: string;
  /** Body text shown in expanded mode (use \n for a manual line break). */
  body?: string;
  /** Calendly URL (defaults to the general intake link). */
  href?: string;
  /** Analytics location label (defaults to "floating_cta"). */
  trackingLocation?: string;
};

/**
 * Floating, scroll-aware CTA card.
 *  - Expanded card on entry (phone icon + headline + body + link).
 *  - Morphs to a compact pill after scrolling past the hero.
 *  - Hides as the in-page #cta section approaches.
 *  - Desktop+ only (hidden on mobile, where the page already has a sticky bottom CTA).
 */
export default function V4FloatingCTA({
  headline = "Habla con un abogado hoy.",
  body = "Consulta gratuita 20 minutos.\nAsesoría especializada.",
  href = CALENDLY_GENERAL,
  trackingLocation = "floating_cta",
}: Props = {}) {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  // Ocultar la pill cuando el usuario llega a la sección de agendado
  // (#cta) — el link es a Calendly pero el detect sigue funcionando
  // sobre el anchor del bloque dentro de la home.
  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > window.innerHeight * 0.6);
      const target = document.getElementById("cta");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setHidden(rect.top < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: hidden ? 0.92 : 1,
        y: hidden ? 30 : [0, -8, 0],
        pointerEvents: hidden ? "none" : "auto",
      }}
      transition={{
        opacity: { duration: 0.5, ease: EASE, delay: hidden ? 0 : 1.0 },
        scale: { duration: 0.5, ease: EASE, delay: hidden ? 0 : 1.0 },
        y: hidden
          ? { duration: 0.4, ease: EASE }
          : {
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1.85,
            },
      }}
      className="fixed bottom-6 sm:bottom-8 right-6 lg:right-8 z-40 hidden sm:block"
    >
      <motion.a
        href={href}
        {...calendlyLinkProps}
        onClick={() => events.ctaClick(trackingLocation, headline)}
        whileHover={{ scale: 1.03 }}
        animate={{
          padding: compact ? "10px 16px 10px 10px" : "24px",
          borderRadius: compact ? 9999 : 20,
        }}
        transition={{
          scale: { type: "spring", stiffness: 320, damping: 22 },
          padding: { duration: 0.45, ease: EASE },
          borderRadius: { duration: 0.45, ease: EASE },
        }}
        className="group flex items-center bg-[#1A1714] hover:bg-[#0F0E0D] transition-colors relative overflow-hidden border border-white/8 hover:border-[#D4B97A]/40"
        style={{
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 60px -18px rgba(0,0,0,0.55), 0 6px 16px -6px rgba(0,0,0,0.35)",
        }}
      >
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(212,185,122,0.16) 50%, transparent 65%)",
          }}
        />

        <motion.div
          animate={{ width: compact ? 40 : 72, height: compact ? 40 : 72 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="relative shrink-0 rounded-full bg-gradient-to-br from-[#D4B97A] to-[#8C7339] flex items-center justify-center ring-2 ring-white/15"
        >
          {/* Pulsing halo around phone icon */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#D4B97A]"
            animate={{ scale: [1, 1.4], opacity: [0.45, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.svg
            viewBox="0 0 24 24"
            className="relative text-[#1A1714]"
            style={{ width: "55%", height: "55%" }}
            fill="none"
            animate={{ rotate: [0, -12, 0, 12, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
            aria-label="Teléfono"
          >
            <path
              d="M5 4 C 5 4 5.8 7.5 8.5 10 C 11.2 12.5 14.5 13.5 14.5 13.5 L 16.5 11.5 L 21 12 L 21 18 C 21 19 20 20 19 20 C 11 20 4 13 4 5 C 4 4 5 3 6 3 L 12 3 L 13 8 L 11 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <AnimatePresence mode="wait">
          {compact ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex items-center gap-2 ml-3 mr-1.5 text-white whitespace-nowrap"
            >
              <span className="text-[13px] font-semibold">Agenda una consulta.</span>
              <span className="text-[14px] leading-none transition-transform duration-300 group-hover:translate-x-1 text-[#D4B97A]">
                →
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex-1 min-w-0 text-white relative ml-5 max-w-[300px]"
            >
              <p className="font-semibold text-[16px] sm:text-[17px] leading-tight mb-2">
                {headline}
              </p>
              <p className="text-[13px] sm:text-[14px] leading-[1.45] text-white/75 whitespace-pre-line">
                {body}
              </p>
              <span className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-white group-hover:text-[#D4B97A] transition-colors border-b border-white/30 group-hover:border-[#D4B97A] pb-1">
                Agendar llamada
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}
