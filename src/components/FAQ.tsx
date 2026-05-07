"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "¿Cuánto cuesta una primera consulta?",
    a: "La primera consulta es gratuita — entre 30 y 45 minutos. En esa reunión escuchamos tu caso, identificamos el área aplicable y decidimos si Bissu es el equipo adecuado o si te conviene otra firma.",
  },
  {
    q: "¿Cómo se cobran los honorarios?",
    a: "Después del análisis preliminar entregamos una propuesta económica clara: tarifa fija, por hora o cuota litis, según el tipo de asunto. No iniciamos trabajo sin convenio firmado y aceptación expresa de honorarios.",
  },
  {
    q: "¿Cuánto tarda un caso típico?",
    a: "Depende del área y complejidad. Como referencia: un litigio civil ronda entre 18 y 30 meses, un concursal entre 12 y 24, un familiar entre 6 y 18. Te damos un estimado realista en el dictamen inicial.",
  },
  {
    q: "¿Atienden casos fuera de Ciudad de México?",
    a: "Sí. Operamos en todo el territorio mexicano. Cuando el caso requiere comparecencias presenciales en otros estados, lo coordinamos con la red de corresponsales que sostenemos desde 2017.",
  },
  {
    q: "¿Toman casos personales además de empresariales?",
    a: "Sí. Representamos por igual a empresas — desde familiares hasta multinacionales — e individuos. Las áreas familiar, civil y constitucional aplican a la mayoría de los asuntos personales.",
  },
  {
    q: "¿Mi caso es confidencial?",
    a: "Absolutamente. Lo que nos compartís en cualquier momento — incluso en la consulta gratuita — está protegido por el secreto profesional. Es la base sobre la que construimos toda relación con clientes.",
  },
  {
    q: "¿Qué pasa si Bissu no es el despacho indicado para mi caso?",
    a: "En la consulta inicial te lo decimos directamente. Si conocemos un despacho mejor posicionado para tu asunto puntual, te referenciamos sin costo. Preferimos no tomar un caso antes que entregarlo a alguien que no tiene el expertise específico.",
  },
  {
    q: "¿Aceptan pagos en plazos?",
    a: "Sí, según el caso. En procesos largos pactamos esquemas de pago en hitos del expediente o en plazos mensuales. Todo queda formalizado en el convenio.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-900 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="08" label="Preguntas frecuentes" />

        <FadeIn>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] max-w-4xl">
            Lo que casi todos{" "}
            <span className="italic">se preguntan</span>
            <span className="text-gold-400">.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <FadeIn delay={120}>
              <div className="flex gap-5">
                <span className="pleca pleca-lg shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-body text-bone-50 text-[15px] leading-[1.75] mb-6">
                    Si tu pregunta no está acá, escribinos. Respondemos en 24
                    hs hábiles.
                  </p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-3 text-bone-50 font-sans text-[11px] tracking-[0.22em] uppercase border-b border-bone-50 hover:border-gold-600 hover:text-gold-600 transition-colors pb-1 font-medium"
                  >
                    Hacer una pregunta →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-bone-50/15">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-bone-50/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-baseline gap-6 py-6 sm:py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium w-7 shrink-0 self-start mt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="flex-1 font-display text-bone-50 text-xl sm:text-2xl leading-[1.25] group-hover:text-gold-600 transition-colors">
                        {f.q}
                      </h3>
                      <span
                        className={`shrink-0 text-bone-50 group-hover:text-gold-600 text-2xl transition-transform duration-300 leading-none mt-1 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-12 sm:pl-13 pr-4 pb-7 max-w-3xl">
                          <p className="font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.75]">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
