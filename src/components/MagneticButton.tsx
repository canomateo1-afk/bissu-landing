"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "dark" | "light" | "ghost";
  external?: boolean;
  ariaLabel?: string;
};

const SPRING = { stiffness: 280, damping: 22, mass: 0.5 };

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "dark",
  external = false,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, SPRING);
  const ys = useSpring(y, SPRING);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - (rect.left + rect.width / 2);
    const py = e.clientY - (rect.top + rect.height / 2);
    x.set(px * 0.22);
    y.set(py * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  // dark: black bg + cream text. light: cream bg + black text. ghost: text-only
  const baseClasses =
    variant === "light"
      ? "btn-magnetic-light text-bone-50 bg-ink-900 border border-bone-50/30"
      : variant === "ghost"
      ? "text-bone-50 hover:text-gold-600 border-b border-bone-50/40 hover:border-gold-600 transition-colors pb-1"
      : "btn-magnetic text-ink-900 bg-bone-50 border border-bone-50";

  const padding = variant === "ghost" ? "" : "px-7 py-3.5";

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.22em] uppercase font-medium">
      {children}
    </span>
  );

  const motionStyle = reduce ? {} : { x: xs, y: ys };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={motionStyle}
        className={`group inline-flex items-center justify-center ${padding} ${baseClasses} ${className}`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={motionStyle}
      className={`group inline-flex items-center justify-center ${padding} ${baseClasses} ${className}`}
    >
      {inner}
    </motion.button>
  );
}
