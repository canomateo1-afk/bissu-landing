import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const featured = [
  {
    org: "The Best Lawyers in Mexico",
    year: "2026",
    title: "Samuel Bissu Bazbaz",
    desc: "Reconocido en Derecho Familiar.",
    href: "https://www.bestlawyers.com/lawyers/samuel-bissu-bazbaz/379894",
  },
  {
    org: "The Best Lawyers in Mexico",
    year: "Firma",
    title: "Bissu Abogados",
    desc: "Firma destacada en práctica jurídica en México.",
    href: "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
  },
  {
    org: "Leaders League",
    year: "2025",
    title: "Resolución de Conflictos",
    desc: "Práctica valiosa en Litigio civil y comercial.",
    href: "https://www.leadersleague.com/es/rankings/resolucion-de-conflictos-litigio-civil-y-comercial-estudio-de-abogados-mexico-2025",
  },
];

const tops2025 = [
  { area: "Derecho Corporativo", tier: "Diamante" },
  { area: "Litigio", tier: "Diamante" },
  { area: "Derecho Mercantil", tier: "Platino" },
  { area: "Concurso e Insolvencia", tier: "Platino" },
];

const consistencyYears = ["2024", "2023", "2022", "2021", "2020"];

export default function Reconocimientos() {
  return (
    <section id="reconocimientos" className="relative bg-ink-900 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="07" label="Reconocimientos" />

        <FadeIn>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] max-w-5xl">
            Reconocidos por las{" "}
            <span className="italic">firmas de ranking</span> más exigentes
            <span className="text-gold-400">.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-12">
          {featured.map((f, i) => (
            <FadeIn key={f.title} delay={i * 100}>
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex gap-5">
                  <span className="pleca pleca-lg shrink-0 mt-2" aria-hidden />
                  <div className="flex-1 border-t border-bone-50/20 pt-8">
                    <div className="flex items-baseline justify-between mb-10">
                      <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                        {f.org}
                      </span>
                      <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                        {f.year}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-bone-50 mb-3 leading-[1.15] group-hover:text-gold-600 transition-colors">
                      {f.title}
                    </h3>
                    <p className="font-body text-bone-300 text-[14px] leading-[1.75] mb-8">
                      {f.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-bone-50 group-hover:text-gold-600 font-sans text-[11px] tracking-[0.22em] uppercase transition-colors font-medium">
                      Ver perfil
                      <span className="text-base leading-none">↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Tops 2025 + consistency line */}
        <div className="mt-32 sm:mt-44 border-t border-bone-50/15 pt-16">
          <FadeIn>
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
              <div className="col-span-12 lg:col-span-5">
                <div className="flex gap-5 items-start">
                  <span className="pleca pleca-lg mt-1" aria-hidden />
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-3">
                      Tops · Los Mejores Abogados en México 2025
                    </p>
                    <h3 className="font-display text-bone-50 text-3xl sm:text-4xl mb-6 leading-[1.15]">
                      Galardonados a la <span className="italic">Excelencia</span>.
                    </h3>
                    <p className="font-display italic text-bone-50 text-xl leading-[1.45] mb-8 max-w-md">
                      &ldquo;Sabe enfrentar con maestría las complejidades de
                      sus clientes en Derecho Civil, Comercial y Familiar.&rdquo;
                    </p>
                    <a
                      href="https://topslosmejoresabogados.com/suplemento-2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bone-50 hover:text-gold-600 font-sans text-[11px] tracking-[0.22em] uppercase border-b border-bone-50 hover:border-gold-600 pb-1 font-medium transition-colors"
                    >
                      Ver suplemento ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-6">
                  Áreas reconocidas · 2025
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-12">
                  {tops2025.map((a) => (
                    <div
                      key={a.area}
                      className="flex items-baseline gap-3 border-b border-bone-50/10 pb-3"
                    >
                      <span className="pleca pleca-sm" aria-hidden />
                      <span className="font-sans text-[12px] tracking-[0.18em] uppercase text-bone-50 font-medium flex-1">
                        {a.area}
                      </span>
                      <span
                        className={`font-sans text-[10px] tracking-[0.22em] uppercase font-semibold ${
                          a.tier === "Diamante" ? "text-bone-50" : "text-gold-600"
                        }`}
                      >
                        {a.tier}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-bone-50/15 pt-6">
                  <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-4">
                    Reconocimiento sostenido
                  </p>
                  <p className="font-body text-bone-50 text-[14px] leading-[1.75] mb-3">
                    Galardonados por Tops · Los Mejores Abogados en México de
                    forma consecutiva desde 2020 — Diamante o Platino en
                    Derecho Corporativo, Litigio, Constitucional, Mercantil,
                    Concurso e Insolvencia y Arbitraje.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {consistencyYears.map((y) => (
                      <span
                        key={y}
                        className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium border border-bone-50/15 px-3 py-1.5"
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
