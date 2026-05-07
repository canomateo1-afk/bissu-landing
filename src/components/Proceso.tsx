import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    n: "01",
    duration: "Día 1",
    title: "Consulta inicial",
    body: "Reunión gratuita de 30 a 45 minutos. Escuchamos tu caso, identificamos el área aplicable y decimos si Bissu es el equipo adecuado o no.",
  },
  {
    n: "02",
    duration: "Días 2 — 7",
    title: "Análisis y estrategia",
    body: "Revisamos documentos, antecedentes y contraparte. Entregamos un dictamen con escenarios posibles, riesgos, plazos esperados y honorarios.",
  },
  {
    n: "03",
    duration: "Variable según caso",
    title: "Ejecución",
    body: "Asunción formal del caso. Trabajamos con la estrategia acordada — un abogado titular es responsable directo y reporta avances periódicos.",
  },
  {
    n: "04",
    duration: "Cierre",
    title: "Resolución",
    body: "Sentencia, acuerdo o mecanismo alternativo. Cerramos con informe final y, si aplica, asesoramos en pasos posteriores (ejecución, apelación, cumplimiento).",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="relative bg-ink-900 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="02" label="Cómo trabajamos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px]">
                Cuatro pasos.{" "}
                <span className="italic">Cero ambigüedad</span>
                <span className="text-gold-400">.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <FadeIn delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75]">
                Sabemos que un proceso jurídico genera ansiedad. Por eso
                operamos con un protocolo claro: sabes qué hacemos en cada
                etapa, cuánto demora y quién es tu interlocutor directo.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 60}>
              <div className="grid grid-cols-12 gap-6 py-10 border-t border-bone-50/15 last:border-b">
                <div className="col-span-12 sm:col-span-2 flex items-start gap-4">
                  <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                      {s.n}
                    </p>
                    <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium mt-1">
                      {s.duration}
                    </p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <h3 className="font-display text-bone-50 text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="font-body text-bone-50 text-[15px] leading-[1.75] max-w-2xl">
                    {s.body}
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
