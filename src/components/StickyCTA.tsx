"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { events } from "@/lib/analytics";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (roughly first viewport)
      const trigger = window.innerHeight * 0.85;
      // Hide when reaching contacto section
      const contacto = document.getElementById("contacto");
      const nearContacto = contacto
        ? contacto.getBoundingClientRect().top < window.innerHeight * 0.6
        : false;
      setVisible(window.scrollY > trigger && !nearContacto);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={
        visible
          ? { y: 0, opacity: 1 }
          : { y: 100, opacity: 0 }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 280, damping: 28 }
      }
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-bone-50/15 bg-ink-900/95 backdrop-blur-md"
      aria-hidden={!visible}
    >
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-bone-300 font-medium">
              Disponible esta semana
            </span>
          </div>
          <p className="font-display text-bone-50 text-[15px] leading-tight truncate">
            Consulta gratuita 20 min<span className="text-gold-400">.</span>
          </p>
        </div>
        <a
          href="#contacto"
          onClick={() => events.ctaClick("sticky_mobile", "Agendar")}
          className="shrink-0 inline-flex items-center gap-2 bg-bone-50 text-ink-900 px-4 py-2.5 font-sans text-[10px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap hover:bg-gold-400 transition-colors"
        >
          Agendar
          <span className="text-sm leading-none">→</span>
        </a>
      </div>
    </motion.div>
  );
}
