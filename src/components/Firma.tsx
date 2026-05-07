import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const principles = [
  {
    n: "01",
    title: "Conocimiento de fondo",
    body: "Equipo de abogados preparados para enfrentar las necesidades complejas y sofisticadas de cada cliente.",
  },
  {
    n: "02",
    title: "Estrategia a medida",
    body: "Trabajamos cerca del cliente para entender sus objetivos y desarrollar el camino adecuado.",
  },
  {
    n: "03",
    title: "Soluciones específicas",
    body: "Diseñamos respuestas a los asuntos y retos jurídicos más exigentes de México.",
  },
];

export default function Firma() {
  return (
    <section id="firma" className="relative bg-ink-900 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="01" label="Nuestra firma" />

        <div className="mt-20 grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px]">
                Un despacho<br />
                para los <span className="italic">asuntos complejos</span><br />
                de México<span className="text-gold-400">.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <FadeIn delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] mb-6">
                Bissu Abogados, S.C. es un despacho especializado, con profunda
                experiencia y conocimiento legal, fundado por abogados
                preparados para enfrentar las necesidades complejas de nuestros
                clientes.
              </p>
              <p className="font-body text-bone-300 text-[14px] leading-[1.75]">
                Asesoramos a empresas nacionales e internacionales,
                instituciones e individuos en todo México, desarrollando
                soluciones a los asuntos y retos de cada caso.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Da Vinci quote */}
        <FadeIn delay={200}>
          <div className="mt-32 sm:mt-40 border-y border-bone-50/15 py-16 sm:py-20">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-2 mb-6 lg:mb-0">
                <div className="flex items-center gap-4">
                  <span className="pleca pleca-md" aria-hidden />
                  <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                    Filosofía
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-10">
                <p className="font-display italic text-bone-50 text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tightest font-normal max-w-[20ch]">
                  Simplicity is the ultimate sophistication.
                </p>
                <p className="mt-6 font-sans text-[11px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                  — Leonardo da Vinci
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Principles */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {principles.map((p, i) => (
            <FadeIn key={p.n} delay={i * 80} className="border-t border-bone-50/15 pt-8">
              <div className="flex gap-5">
                <span className="pleca pleca-lg shrink-0 mt-1.5" aria-hidden />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-3">
                    {p.n} · Principio
                  </p>
                  <h3 className="font-display text-bone-50 text-2xl sm:text-3xl mb-4 leading-[1.15]">
                    {p.title}
                  </h3>
                  <p className="font-body text-bone-300 text-[14px] leading-[1.75]">
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
