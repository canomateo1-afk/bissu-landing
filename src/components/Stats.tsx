const stats = [
  { number: "25+", label: "Años de Experiencia" },
  { number: "500+", label: "Clientes Satisfechos" },
  { number: "95%", label: "Casos Resueltos Favorablemente" },
  { number: "1,200+", label: "Consultas Realizadas" },
];

export default function Stats() {
  return (
    <section className="bg-brand-gray py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-2">
                {stat.number}
              </p>
              <p className="text-white/70 text-xs sm:text-sm tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
