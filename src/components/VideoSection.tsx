import Image from "next/image";
import FadeIn from "./FadeIn";

export default function VideoSection() {
  return (
    <section id="nosotros" className="bg-brand-black py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <FadeIn>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            El Lic. Samuel Bissu te cuenta cómo podemos ayudarte
          </p>
        </FadeIn>

        {/* Video Placeholder */}
        <FadeIn>
          <div className="relative aspect-video overflow-hidden border border-white/10">
            {/* Background Image */}
            <Image
              src="/images/hero-2.jpg"
              alt="Recepción Bissu Abogados"
              fill
              className="object-cover"
              quality={75}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-brand-gold flex items-center justify-center hover:bg-brand-gold/20 transition-colors cursor-pointer">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/40 text-sm tracking-wider uppercase">
                Video próximamente
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
