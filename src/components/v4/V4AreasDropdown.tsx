"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { v4Areas } from "@/lib/v4-areas";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  /** className for the trigger anchor — should match the surrounding nav link styling. */
  triggerClassName?: string;
  /** Text shown on the trigger. Defaults to "Áreas". */
  label?: string;
};

/**
 * Hover/focus-triggered dropdown listing the 6 practice areas with deep links
 * to each pillar page. Click the label itself to land on /#areas (home anchor).
 */
export default function V4AreasDropdown({
  triggerClassName = "text-[13px] font-medium text-[#1A1714] hover:text-[#8C7339] transition-colors",
  label = "Áreas",
}: Props = {}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Close on outside click + escape key
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <a
        href="/#areas"
        className={`inline-flex items-center gap-1 ${triggerClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(false)}
      >
        {label}
        <svg
          viewBox="0 0 12 7"
          className={`w-2.5 h-2 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
            role="menu"
          >
            <div
              className="w-[420px] bg-white border border-[rgba(26,23,20,0.10)] rounded-[6px] overflow-hidden"
              style={{
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.02), 0 24px 60px -18px rgba(0,0,0,0.18), 0 8px 24px -12px rgba(0,0,0,0.12)",
              }}
            >
              <ul>
                {v4Areas.map((a, i) => (
                  <li key={a.slug}>
                    <a
                      href={`/v4/areas/${a.slug}`}
                      className="flex items-baseline gap-4 px-5 py-3.5 hover:bg-[#FBF7EE] transition-colors group border-b border-[rgba(26,23,20,0.06)] last:border-b-0"
                      role="menuitem"
                    >
                      <span className="v3-mono text-[10px] tracking-[0.16em] uppercase text-[#B4975A] font-medium w-5 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold text-[#1A1714] group-hover:text-[#8C7339] transition-colors">
                          {a.label}
                        </p>
                        <p className="text-[12px] text-[#5A4F45] mt-0.5 leading-[1.45]">
                          {a.tagline}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="text-[#B4975A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[13px] shrink-0 self-center"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/#areas"
                className="block px-5 py-3 text-[11px] tracking-[0.16em] uppercase font-medium text-[#5A4F45] hover:text-[#1A1714] bg-[#F4EDDD] hover:bg-[#E5DCC4] transition-colors text-center"
              >
                Ver todas las áreas →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
