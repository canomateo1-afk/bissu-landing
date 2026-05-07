import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const stats = [
  { n: "25+", l: "Años de experiencia" },
  { n: "500+", l: "Clientes representados" },
  { n: "06", l: "Áreas de práctica" },
  { n: "MX", l: "Cobertura nacional" },
];

const sectores = [
  "Empresas familiares",
  "Multinacionales",
  "Instituciones",
  "Personas físicas",
  "Sector inmobiliario",
  "Sector financiero",
  "Sector industrial",
  "Sector salud",
];

export default function Clientes() {
  const marqueeList = [...sectores, ...sectores, ...sectores];
  return (
    <section id="clientes" className="relative bg-ink-800 py-32 sm:py-44 lg:py-52 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="06" label="Clientes" />

        <div className="mt-20 grid grid-cols-12 gap-y-16 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px]">
                Prestigio basado en la <span className="italic">calidad del servicio</span>
                <span className="text-gold-400">.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <FadeIn delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] mb-6">
                Hemos representado a una amplia gama de sociedades — desde
                empresas familiares en CDMX y el territorio nacional, hasta
                grandes empresas multinacionales — además de incontables
                personas en lo individual.
              </p>
              <p className="font-body text-bone-300 text-[14px] leading-[1.75]">
                Nuestros servicios se caracterizan por un alto estándar de
                calidad, producto de la experiencia consolidada en cada área en
                que nos especializamos.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Stats — refined editorial numbers with plecas */}
        <div className="mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-y-12 border-t border-bone-50/15 pt-12">
          {stats.map((s, i) => (
            <FadeIn key={s.l} delay={i * 80}>
              <div className="flex gap-5 pr-4">
                <span className="pleca pleca-lg shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-display text-bone-50 text-5xl sm:text-6xl lg:text-7xl tracking-tightest mb-3 leading-[0.95]">
                    {s.n}
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                    {s.l}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Sectores marquee — refined */}
      <div className="mt-24 sm:mt-32 border-y border-bone-50/15 py-10 marquee-pause overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {marqueeList.map((s, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-display text-3xl sm:text-5xl lg:text-6xl text-bone-50 px-10 leading-tight">
                {s}
              </span>
              <span className="pleca pleca-md" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
