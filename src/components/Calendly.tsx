"use client";

import { useEffect } from "react";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contacto" className="bg-brand-black py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Agenda Tu Consulta Gratuita
        </h2>
        <p className="text-white/60 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
          Sesión inicial de 20 minutos para entender tu situación legal y
          orientarte sobre los siguientes pasos.
        </p>
        <p className="text-white/30 text-xs sm:text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
          En esta reunión no se realiza asesoría jurídica profunda ni revisión
          detallada de documentos. Si el caso requiere análisis más extenso, se
          propondrá una sesión formal posterior.
        </p>

        {/* Calendly Embed */}
        <div
          className="calendly-inline-widget rounded-xl overflow-hidden"
          data-url="https://calendly.com/bissuabogados-marketing/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=b4975a"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
