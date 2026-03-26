"use client";
import FadeIn from "./FadeIn";

const items = [
  {
    icon: "🎯",
    title: "Enfoque Estratégico",
    description: "No solo conocemos la ley, la usamos a tu favor con estrategias diseñadas para cada caso.",
  },
  {
    icon: "🤝",
    title: "Atención Personalizada",
    description: "Cada cliente recibe seguimiento directo de un abogado titular, sin intermediarios.",
  },
  {
    icon: "📊",
    title: "Resultados Medibles",
    description: "Transparencia total: te mantenemos informado del avance y las probabilidades de éxito.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-dark py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Por Qué Elegirnos
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                  <div className="w-px h-10 bg-brand-gold/40 hidden md:block" />
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
