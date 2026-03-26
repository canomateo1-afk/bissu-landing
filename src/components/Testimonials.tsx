"use client";

import { useRef } from "react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    text: "Gracias al equipo de Bissu Abogados recuperé la custodia de mis hijos. Siempre me sentí acompañada.",
    name: "María G.",
    role: "Caso Familiar",
    initials: "MG",
  },
  {
    text: "Resolvieron un conflicto societario que llevaba 3 años estancado. Muy profesionales.",
    name: "Carlos R.",
    role: "Empresario",
    initials: "CR",
  },
  {
    text: "Me ayudaron a proteger mi patrimonio durante un proceso complicado. 100% recomendados.",
    name: "Ana L.",
    role: "Caso Civil",
    initials: "AL",
  },
  {
    text: "Su estrategia de litigio fue impecable. Ganamos el caso en tiempo récord.",
    name: "Roberto M.",
    role: "Caso de Litigio",
    initials: "RM",
  },
  {
    text: "Constituyeron mi empresa y me asesoran desde entonces. Excelente servicio.",
    name: "Patricia S.",
    role: "Emprendedora",
    initials: "PS",
  },
];

const avatarOpacities = ["bg-brand-gold", "bg-brand-gold/80", "bg-brand-gold/70", "bg-brand-gold/90", "bg-brand-gold/75"];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-brand-gray py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn>
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-gold/20 hover:bg-brand-gold/40 items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <svg
                className="w-5 h-5 text-brand-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-gold/20 hover:bg-brand-gold/40 items-center justify-center transition-colors"
              aria-label="Siguiente"
            >
              <svg
                className="w-5 h-5 text-brand-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Cards */}
            <div
              ref={scrollRef}
              className="testimonials-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] bg-brand-dark p-8 border border-white/5 snap-start"
                >
                  {/* Quote Icon */}
                  <svg
                    className="w-8 h-8 text-brand-gold/40 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full ${avatarOpacities[i]} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-brand-black text-xs font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-brand-gold font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
