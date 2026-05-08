"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type IconKind = "laurel" | "medal" | "diamond" | "star";

const icons: Record<IconKind, ReactNode> = {
  laurel: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M32 8 L32 56"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Left laurel */}
      <path
        d="M32 14 C20 14 14 22 14 32 C14 42 22 50 30 52"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right laurel */}
      <path
        d="M32 14 C44 14 50 22 50 32 C50 42 42 50 34 52"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaves left */}
      <ellipse cx="18" cy="24" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(-30 18 24)" />
      <ellipse cx="15" cy="32" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(-10 15 32)" />
      <ellipse cx="18" cy="40" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(15 18 40)" />
      <ellipse cx="24" cy="46" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(40 24 46)" />
      {/* Leaves right */}
      <ellipse cx="46" cy="24" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(30 46 24)" />
      <ellipse cx="49" cy="32" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(10 49 32)" />
      <ellipse cx="46" cy="40" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(-15 46 40)" />
      <ellipse cx="40" cy="46" rx="2.5" ry="4" fill="currentColor" opacity="0.85" transform="rotate(-40 40 46)" />
      {/* Star top */}
      <path
        d="M32 6 L33 9 L36 9 L33.5 11 L34.5 14 L32 12.5 L29.5 14 L30.5 11 L28 9 L31 9 Z"
        fill="currentColor"
      />
    </svg>
  ),
  medal: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ribbons */}
      <path d="M22 8 L26 22 L20 30 L24 8 Z" fill="currentColor" opacity="0.7" />
      <path d="M42 8 L38 22 L44 30 L40 8 Z" fill="currentColor" opacity="0.7" />
      {/* Outer circle */}
      <circle cx="32" cy="42" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Inner circle */}
      <circle cx="32" cy="42" r="11" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Star inside */}
      <path
        d="M32 33 L34.2 39 L40 39 L35.4 42.5 L37.4 48.5 L32 45 L26.6 48.5 L28.6 42.5 L24 39 L29.8 39 Z"
        fill="currentColor"
      />
    </svg>
  ),
  diamond: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Top facet */}
      <path d="M16 22 L48 22 L40 12 L24 12 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.18" />
      {/* Body */}
      <path d="M16 22 L48 22 L32 54 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.30" />
      {/* Vertical lines */}
      <line x1="24" y1="12" x2="32" y2="54" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <line x1="40" y1="12" x2="32" y2="54" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <line x1="24" y1="22" x2="32" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <line x1="40" y1="22" x2="32" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      {/* Sparkle */}
      <circle cx="20" cy="17" r="0.8" fill="currentColor" />
      <circle cx="44" cy="17" r="0.8" fill="currentColor" />
    </svg>
  ),
  star: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M32 8 L37 24 L54 24 L40 34 L46 50 L32 40 L18 50 L24 34 L10 24 L27 24 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.16"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

type Props = {
  icon: IconKind;
  title: string;
  subtitle: string;
  delay?: number;
  href?: string;
  year?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AwardBadge({
  icon,
  title,
  subtitle,
  delay = 0,
  href,
  year,
}: Props) {
  const Tag: any = href ? motion.a : motion.div;
  const linkProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      whileHover={{ y: -3 }}
      className="group relative block py-6 px-5 sm:px-7 border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm overflow-hidden hover:border-gold-400/40 transition-colors duration-500"
      style={{ transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s ease" }}
    >
      {/* Shimmer sweep on hover — gold gradient diagonal */}
      <span
        aria-hidden
        className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, rgba(180,151,90,0.13) 50%, transparent 65%)",
        }}
      />

      {/* Verified checkmark — top right */}
      <span
        aria-hidden
        className="absolute top-4 right-4 inline-flex items-center gap-1.5 font-sans text-[9px] tracking-[0.22em] uppercase text-gold-600 font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-500"
      >
        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
          <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
          <path
            d="M3.5 6.2 L5.3 7.8 L8.5 4.4"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">{href ? "Verificado" : "Reconocido"}</span>
      </span>

      <div className="relative flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 text-gold-400 group-hover:text-gold-500 transition-colors duration-500">
          {icons[icon]}
        </div>
        <div className="flex-1 min-w-0 pr-12">
          <div className="flex items-baseline gap-2 mb-1.5">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold-600 font-medium">
              {subtitle}
            </p>
            {year && (
              <>
                <span className="text-bone-50/30">·</span>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium tabular">
                  {year}
                </p>
              </>
            )}
          </div>
          <p className="font-display text-bone-50 text-[15px] sm:text-base leading-[1.25] balance group-hover:text-gold-600 transition-colors duration-500">
            {title}
          </p>
          {href && (
            <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.22em] uppercase text-bone-400 group-hover:text-gold-500 font-medium transition-colors duration-500">
              Ver perfil
              <span className="text-xs leading-none transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </span>
          )}
        </div>
      </div>
    </Tag>
  );
}
