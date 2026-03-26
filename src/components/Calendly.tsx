"use client";
import { useEffect } from "react";
import FadeIn from "./FadeIn";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
    <section id="contacto" className="bg-brand-black py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para resolver tu situación legal?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-3 max-w-2xl mx-auto">
            Agenda una llamada gratuita de 20 minutos con nuestro equipo.
          </p>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Te escuchamos, evaluamos tu caso y te decimos los pasos a seguir. Sin costo, sin compromiso.
          </p>

          {/* Objection busters */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-white/50 text-xs sm:text-sm">
            <span>✓ 100% gratuita</span>
            <span>✓ Sin compromiso</span>
            <span>✓ Confidencial</span>
            <span>✓ En 20 minutos</span>
          </div>

          <button
            onClick={openCalendly}
            className="bg-brand-gold text-brand-black px-12 py-5 text-lg sm:text-xl font-bold tracking-wider uppercase hover:bg-brand-gold/90 transition-all active:scale-95 shadow-lg shadow-brand-gold/20 w-full sm:w-auto"
          >
            Agendar Mi Consulta Gratuita
          </button>
          <p className="text-white/40 text-xs mt-4">Elige el día y horario que prefieras — te confirmamos al instante</p>

          {/* Small disclaimer */}
          <p className="text-white/20 text-xs mt-8 max-w-lg mx-auto leading-relaxed">
            En esta reunión no se realiza asesoría jurídica profunda ni revisión detallada de documentos. Si el caso requiere análisis más extenso, se propondrá una sesión formal posterior.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
