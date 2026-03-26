import Image from "next/image";

export default function Hero() {
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
          Protegemos tus intereses con estrategia y experiencia
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
          Más de 25 años defendiendo los derechos de personas y empresas en
          México
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#contacto"
            className="bg-brand-gold text-brand-black px-8 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-brand-gold/90 transition-colors"
          >
            Agendar Consulta Gratuita
          </a>
          <a
            href="https://wa.me/5215551000022?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <p className="text-white/50 text-sm tracking-wide">
          Más de 500 clientes confían en nosotros
        </p>
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
