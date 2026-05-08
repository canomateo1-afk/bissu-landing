"use client";
import { useState } from "react";
import Script from "next/script";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { events } from "@/lib/analytics";

// FAQs reescritas a 134-167 palabras cada una para citation AI (GEO).
// Topic: Bissu Abogados — despacho jurídico mexicano.
// Pasajes self-contained, dato verificable en cada answer, primer 40-60w respuesta directa.
const faqs = [
  {
    q: "¿Cuánto cuesta una primera consulta con Bissu Abogados?",
    a: "La primera consulta en Bissu Abogados es gratuita y dura 20 minutos. Se realiza por videollamada o presencial en nuestras oficinas de Av. Prado Norte 365, Lomas de Chapultepec, Ciudad de México. En esa reunión hacemos tres cosas concretas. Primero, escuchamos tu caso sin interrumpir y registramos hechos, contraparte y plazos críticos. Segundo, identificamos qué área de práctica aplica entre las seis que atendemos: civil, mercantil y corporativo, concursal, familiar, constitucional o arbitraje y MASC. Tercero, te decimos honestamente si Bissu es el equipo adecuado o si te conviene una firma con perfil más específico. Si pasa lo segundo, te referenciamos sin costo. No iniciamos ningún cobro hasta firmar convenio escrito de honorarios. Después de la consulta, en 24 horas hábiles te entregamos un dictamen escrito con escenarios, plazos y honorarios estimados.",
  },
  {
    q: "¿Cómo se cobran los honorarios en Bissu Abogados?",
    a: "Los honorarios de Bissu se cobran bajo tres esquemas posibles, definidos antes de iniciar el caso: tarifa fija por entregable, tarifa por hora de trabajo, o cuota litis (porcentaje sobre el resultado obtenido). El esquema aplicable se determina según el área y la complejidad del asunto. Por ejemplo, una asesoría puntual o un contrato suelen ir por tarifa fija; un litigio de duración indefinida puede ir por hora; una reclamación civil con expectativa cuantificable puede ir por cuota litis. La propuesta económica detallada se entrega en el dictamen escrito posterior a la consulta inicial gratuita y nunca iniciamos trabajo sin convenio firmado y aceptación expresa de los honorarios. Para procesos largos, pactamos esquemas de pago en hitos del expediente o en plazos mensuales, todo formalizado en el mismo convenio. Sin sorpresas durante el proceso.",
  },
  {
    q: "¿Cuánto tarda un caso típico en resolverse?",
    a: "La duración de un caso depende del área jurídica y de la complejidad específica. Como referencia basada en casos representativos de Bissu desde 2017: un litigio civil ronda entre 18 y 30 meses; un concurso mercantil entre 12 y 24 meses; un caso familiar entre 6 y 18 meses; un amparo administrativo entre 8 y 14 meses; un arbitraje comercial internacional entre 14 y 24 meses. Estos son rangos típicos, no compromisos. La duración real depende de la carga de trabajo del juzgado, las tácticas dilatorias de la contraparte, la complejidad probatoria y los recursos que se interpongan. En el dictamen inicial te entregamos un estimado realista basado en los hechos concretos de tu caso, no en promedios genéricos. Te avisamos por escrito si el estimado cambia durante el proceso.",
  },
  {
    q: "¿Bissu atiende casos fuera de Ciudad de México?",
    a: "Sí. Bissu Abogados opera en todo el territorio mexicano, no solo en Ciudad de México. Nuestra sede física está en Lomas de Chapultepec, CDMX, pero la práctica jurídica se ejerce a nivel nacional. Cuando un caso requiere comparecencias presenciales en otros estados, lo coordinamos con la red de abogados corresponsales que sostenemos desde 2017, todos verificados por trayectoria y especialidad en jurisdicciones específicas. Los costos de comparecencias foráneas se transparentan antes y se incluyen en la propuesta económica inicial. Para arbitrajes internacionales, también representamos casos con sede fuera de México bajo reglas como la Cámara de Comercio Internacional (CCI). Si el caso es 100% remoto, podemos atender clientes ubicados en cualquier parte del mundo, siempre que la jurisdicción aplicable sea mexicana o admita representación cross-border.",
  },
  {
    q: "¿Qué pasa si Bissu no es el despacho indicado para mi caso?",
    a: "Si tu caso no es para Bissu, te lo decimos directamente en la consulta inicial gratuita. Esto pasa típicamente en tres escenarios. Primero, cuando el asunto requiere expertise muy específico fuera de las seis áreas que atendemos (por ejemplo, derecho fiscal especializado, derecho laboral colectivo o propiedad industrial). Segundo, cuando el asunto es de cuantía menor donde un despacho boutique como Bissu no aporta diferencial de valor. Tercero, cuando hay conflicto de interés con clientes existentes. En cualquiera de los tres casos, si conocemos un despacho mejor posicionado para tu asunto puntual, te referenciamos sin costo y sin compromiso. Preferimos no tomar un caso antes que entregarlo a alguien que no tiene el expertise específico — esa es la lógica de cómo seleccionamos casos desde 2017.",
  },
  {
    q: "¿Mi caso será tratado de forma confidencial?",
    a: "Sí. Toda información compartida con Bissu Abogados está protegida por el secreto profesional regulado en el artículo 36 del Código Penal Federal mexicano y el artículo 35 del Código Civil Federal, además de los códigos de ética del Colegio de Abogados. La protección rige desde el primer contacto, incluso en la consulta inicial gratuita y aunque finalmente no contrates nuestros servicios. En la práctica, esto significa: ningún miembro del equipo puede revelar hechos, documentos ni estrategias de tu caso fuera del despacho ni después de concluida la relación profesional; los archivos físicos y digitales se manejan con accesos restringidos al equipo asignado; y la descripción pública de cualquier caso (como en la sección de casos representativos del sitio) omite todos los elementos identificatorios. La confidencialidad es la base sobre la que construimos toda relación con clientes.",
  },
  {
    q: "¿Bissu toma casos personales además de empresariales?",
    a: "Sí. Bissu Abogados representa por igual a empresas e individuos. La distribución típica de la cartera es aproximadamente 60% empresarial (empresas familiares, multinacionales, instituciones, PYMEs) y 40% personas físicas (particulares de alto patrimonio y profesionales independientes). Las áreas que más aplican a casos personales son derecho familiar (divorcios, custodia compartida internacional, sucesiones, pensión alimenticia), litigio civil (daños y perjuicios, contratos personales) y litigio constitucional (juicio de amparo individual). Para casos personales aplicamos los mismos estándares que en casos corporativos: titular responsable directo, dictamen escrito antes de iniciar, comunicación periódica documentada y honorarios transparentes desde el día uno. La discreción es total — los asuntos personales suelen tener exposición patrimonial alta y ningún detalle del caso sale del despacho ni durante ni después del proceso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  // FAQPage JSON-LD — strippea markdown a texto plano (no usamos markdown en answers actuales)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-ink-900 py-24 sm:py-32 lg:py-40">
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="08" label="Preguntas frecuentes" />

        <Reveal>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] max-w-4xl balance">
            Lo que casi todos{" "}
            <span className="italic">se preguntan</span>
            <span className="text-gold-400">.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={120}>
              <div className="flex gap-5">
                <span className="pleca pleca-lg shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-body text-bone-50 text-[15px] leading-[1.75] mb-6 pretty">
                    Si tu pregunta no está acá, escribinos. Respondemos en 24
                    horas hábiles.
                  </p>
                  <a
                    href="#contacto"
                    onClick={() => events.ctaClick("faq", "Hacer una pregunta")}
                    className="inline-flex items-center gap-3 text-bone-50 font-sans text-[11px] tracking-[0.22em] uppercase border-b border-bone-50 hover:border-gold-600 hover:text-gold-600 transition-colors pb-1 font-medium"
                  >
                    Hacer una pregunta →
                  </a>
                </div>
              </div>
            </Reveal>
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
                          <p className="font-body text-bone-50 text-[14px] sm:text-[15px] leading-[1.75] pretty">
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
