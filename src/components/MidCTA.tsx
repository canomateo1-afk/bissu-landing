"use client";
import FadeIn from "./FadeIn";

export default function MidCTA() {
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
    <section className="bg-brand-gray py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <p className="text-brand-gold text-sm tracking-widest uppercase mb-3">
            No esperes más
          </p>
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Cada día que pasa puede afectar tu caso
          </h3>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Cuanto antes actúes, más opciones tendrás. Habla con un abogado hoy.
          </p>
          <button
            onClick={openCalendly}
            className="bg-brand-gold text-brand-black px-10 py-4 text-base font-semibold tracking-wider uppercase hover:bg-brand-gold/90 transition-all active:scale-95"
          >
            Agendar Consulta Gratuita
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
