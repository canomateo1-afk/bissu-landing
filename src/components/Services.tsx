const services = [
  {
    icon: "⚖️",
    title: "Litigio",
    description:
      "Representación estratégica en procesos judiciales complejos. Defendemos tus derechos con firmeza y conocimiento.",
  },
  {
    icon: "📋",
    title: "Derecho Civil",
    description:
      "Contratos, propiedad, obligaciones y responsabilidad civil. Protegemos tu patrimonio.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Derecho Familiar",
    description:
      "Divorcios, custodia, pensiones y sucesiones. Acompañamiento sensible y profesional.",
  },
  {
    icon: "🏢",
    title: "Derecho Mercantil",
    description:
      "Constitución de empresas, contratos comerciales y resolución de disputas entre socios.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestras Áreas de Práctica
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-brand-dark p-8 sm:p-10 border border-white/5 hover:border-brand-gold/40 transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
