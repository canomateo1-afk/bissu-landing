"use client";
import Image from "next/image";

export default function Hero() {
  const openCalendly = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as unknown as Record<string, any>;
    if (typeof window !== 'undefined' && w.Calendly) {
      w.Calendly.initPopupWidget({
        url: 'https://calendly.com/bissuabogados-marketing/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=b4975a'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero-1.jpg"
        alt="Oficinas Bissu Abogados en Polanco"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="border border-brand-gold/50 text-brand-gold px-4 py-1.5 text-xs sm:text-sm tracking-widest uppercase">
            Tu equipo legal de confianza
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          ¿Tienes un problema legal?<br className="hidden sm:block" /> Hablemos en 20 minutos.
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
          Agenda una consulta gratuita con nuestro equipo. Te orientamos sobre tu situación y los pasos a seguir — sin compromiso.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={openCalendly}
            className="bg-brand-gold text-brand-black px-8 py-4 sm:py-3.5 text-base sm:text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold/90 transition-colors w-full sm:w-auto text-center active:scale-95"
          >
            Agendar Consulta Gratuita
          </button>
          <a
            href="https://wa.me/5215551000022?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block border border-white text-white px-8 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/50 text-sm tracking-wide">
            ✓ Consulta gratuita · ✓ Sin compromiso · ✓ Respuesta en 24h
          </p>
          <p className="text-white/40 text-xs">
            Más de 500 clientes ya confiaron en nosotros
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
