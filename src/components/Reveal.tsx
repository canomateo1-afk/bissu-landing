"use client";

import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  fast?: boolean;
  threshold?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  fast = false,
  threshold = 0.12,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -8% 0px",
  });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? "show" : "hidden"}
      animate={inView ? "show" : "hidden"}
      variants={variants}
      transition={{
        duration: fast ? 0.55 : 0.85,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
