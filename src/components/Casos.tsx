import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const cases = [
  {
    n: "01",
    area: "Litigio Familiar",
    title: "Custodia compartida internacional",
    desc: "Cliente residente en CDMX con hijos mexicanos cuyo padre se trasladó al extranjero. Negociación de convenio + ratificación judicial.",
    outcome: "Custodia compartida con régimen de convivencia internacional + pensión asegurada en moneda dura.",
    duration: "11 meses",
  },
  {
    n: "02",
    area: "Litigio Concursal",
    title: "Reestructura de empresa familiar",
    desc: "Empresa industrial con tres generaciones operando, con pasivo bancario impagable post-pandemia. Negociación de convenio concursal.",
    outcome: "Reestructura aprobada · 60% de quita · operación continuó sin liquidación.",
    duration: "18 meses",
  },
  {
    n: "03",
    area: "Litigio Mercantil",
    title: "Conflicto entre accionistas",
    desc: "Dos socios fundadores con dispute sobre dilución accionaria y representación. Litigio + arbitraje paralelo.",
    outcome: "Salida ordenada de socio minoritario con valuación de mercado + convenio de no competencia.",
    duration: "14 meses",
  },
  {
    n: "04",
    area: "Litigio Civil",
    title: "Daños y perjuicios — incumplimiento contractual",
    desc: "Cliente persona física con contraparte multinacional. Reclamación por incumplimiento de servicios profesionales.",
    outcome: "Sentencia favorable + indemnización 3.4× el daño directo + recuperación de costas.",
    duration: "22 meses",
  },
  {
    n: "05",
    area: "Constitucional",
    title: "Amparo contra acto administrativo",
    desc: "Cliente PYME afectado por resolución administrativa que afectaba su autorización de operación.",
    outcome: "Amparo concedido · acto reclamado dejado sin efecto · operación restablecida.",
    duration: "9 meses",
  },
  {
    n: "06",
    area: "MASC · Arbitraje",
    title: "Arbitraje comercial internacional",
    desc: "Disputa contractual con contraparte europea bajo cláusula arbitral CCI. Bissu como abogado de parte.",
    outcome: "Laudo favorable · ejecución reconocida en México · cobro íntegro.",
    duration: "16 meses",
  },
];

export default function Casos() {
  return (
    <section id="casos" className="relative bg-ink-800 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="05" label="Casos resueltos" />

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <h2 className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px]">
                Resultados.{" "}
                <span className="italic">Anonimizados</span>, específicos
                <span className="text-gold-400">.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-6">
            <FadeIn delay={120}>
              <p className="font-body text-bone-50 text-[15px] sm:text-base leading-[1.75] mb-4">
                Una muestra representativa del trabajo de los últimos años.
                Identidades reservadas por confidencialidad — los hechos y
                resultados son reales.
              </p>
              <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-bone-300 font-medium">
                Casos seleccionados · 2022 — 2025
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-12 lg:gap-x-16">
          {cases.map((c, i) => (
            <FadeIn key={c.n} delay={i * 80}>
              <article className="flex gap-5">
                <span className="pleca pleca-lg shrink-0 mt-2" aria-hidden />
                <div className="flex-1 border-t border-bone-50/15 pt-7">
                  <div className="flex items-baseline justify-between mb-6 gap-3">
                    <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                      {c.n} · {c.area}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                      {c.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-bone-50 text-2xl sm:text-[28px] mb-4 leading-[1.15]">
                    {c.title}
                  </h3>
                  <p className="font-body text-bone-50 text-[14px] leading-[1.75] mb-5">
                    {c.desc}
                  </p>
                  <div className="border-t border-bone-50/15 pt-4">
                    <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-2">
                      Resultado
                    </p>
                    <p className="font-body text-bone-50 text-[14px] leading-[1.75]">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="mt-20 font-body italic text-bone-300 text-[13px] leading-[1.75] max-w-2xl">
            * Los resultados pasados no garantizan resultados futuros. Cada
            caso se evalúa individualmente. La descripción de los casos omite
            elementos identificatorios para preservar el secreto profesional.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
