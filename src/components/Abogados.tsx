import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const lawyers = [
  {
    role: "Socio fundador y Director",
    name: "Samuel Bissu Bazbaz",
    email: "sbissu@bissuabogados.com",
    phone: "+52 55 5545 1308 / 09",
    languages: ["Español", "Inglés"],
    education: [
      "Maestría en Derecho de la Empresa, Universidad Panamericana — 2017",
      "Licenciatura en Derecho, Universidad Iberoamericana — 2006",
    ],
    background: [
      "Bissu Abogados, S.C. · Socio fundador y Director",
      "Cohen Sacal, Espinoza y Asociados, S.C. · Abogado",
    ],
  },
  {
    role: "Socio Jr.",
    name: "Adolfo Julián Vargas Alvarado",
    email: "jvargas@bissuabogados.com",
    phone: "+52 55 5545 1308 / 09",
    languages: ["Español"],
    education: [
      "Maestría en Derecho Procesal Constitucional, Universidad Panamericana — 2023",
      "Curso Básico de Formación de Secretarios del PJF — 2016",
      "Licenciatura en Derecho, Universidad Tres Culturas — 2012",
    ],
    background: [
      "Bissu Abogados, S.C. · Asociado",
      "Arenas & Salazar, Abogados Asociados, S.C. · Abogado",
    ],
  },
];

export default function Abogados() {
  return (
    <section id="abogados" className="relative bg-ink-800 py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="03" label="Abogados" />

        <FadeIn>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] max-w-5xl">
            Equipo de{" "}
            <span className="italic">abogados titulares</span> en CDMX
            <span className="text-gold-400">.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-x-16">
          {lawyers.map((l, i) => (
            <FadeIn key={l.name} delay={i * 100}>
              <article className="flex gap-6">
                <span className="pleca pleca-lg shrink-0 mt-2" aria-hidden />
                <div className="flex-1 border-t border-bone-50/20 pt-8">
                  <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-gold-600 font-medium mb-4">
                    {l.role}
                  </p>
                  <h3 className="font-display text-bone-50 text-3xl sm:text-[40px] mb-12 leading-[1.05]">
                    {l.name}
                  </h3>

                  <Block label="Estudios">
                    <ul className="space-y-2 font-body text-bone-50 text-[14px] leading-[1.75]">
                      {l.education.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </Block>

                  <Block label="Antecedentes">
                    <ul className="space-y-2 font-body text-bone-50 text-[14px] leading-[1.75]">
                      {l.background.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Block>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-bone-50/15">
                    <div>
                      <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-2">
                        Idiomas
                      </p>
                      <p className="font-body text-bone-50 text-[14px]">
                        {l.languages.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-2">
                        Contacto
                      </p>
                      <a
                        href={`mailto:${l.email}`}
                        className="block font-body text-bone-50 hover:text-gold-600 text-[14px] transition-colors break-all link-underline"
                      >
                        {l.email}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-3">
        {label}
      </p>
      {children}
    </div>
  );
}
