"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1.5px] origin-left z-[100]"
      style={{
        scaleX,
        background:
          "linear-gradient(to right, #B4975A, #D4B97A, #B4975A)",
      }}
      aria-hidden
    />
  );
}
