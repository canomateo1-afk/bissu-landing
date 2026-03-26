"use client";
import { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const stats = [
  { number: "25+", label: "Años de Experiencia" },
  { number: "500+", label: "Clientes Satisfechos" },
  { number: "95%", label: "Casos Resueltos Favorablemente" },
  { number: "1,200+", label: "Consultas Realizadas" },
];

function parseNumber(str: string): { num: number; suffix: string } {
  const cleaned = str.replace(/,/g, "");
  const match = cleaned.match(/^(\d+)(.*)$/);
  if (match) {
    return { num: parseInt(match[1], 10), suffix: match[2] };
  }
  return { num: 0, suffix: str };
}

function formatNumber(n: number, original: string): string {
  // If original had commas, format with commas
  if (original.includes(",")) {
    return n.toLocaleString("en-US");
  }
  return n.toString();
}

function AnimatedStat({ number, label, delay }: { number: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const { num, suffix } = parseNumber(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * num));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started, num]);

  return (
    <FadeIn delay={delay}>
      <div ref={ref}>
        <p className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-2">
          {started ? formatNumber(count, number) + suffix : "0" + suffix}
        </p>
        <p className="text-white/70 text-xs sm:text-sm tracking-wider uppercase">
          {label}
        </p>
      </div>
    </FadeIn>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand-gray py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} number={stat.number} label={stat.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
