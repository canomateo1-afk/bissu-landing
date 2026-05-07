"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const areas = [
  {
    n: "01",
    title: "Litigio Civil",
    items: [
      "Interpretación y cumplimiento de contratos en materia civil",
      "Acciones colectivas",
      "Créditos, hipotecas y arrendamiento inmobiliario",
      "Reclamación de daños y perjuicios, daño moral",
      "Responsabilidad civil y derechos de los individuos",
      "Homologación y ejecución de sentencias extranjeras",
    ],
  },
  {
    n: "02",
    title: "Litigio Comercial, Mercantil y Corporativo",
    items: [
      "Validez, interpretación y ejecución de contratos mercantiles",
      "Conflictos entre accionistas y grupos societarios",
      "Títulos y operaciones de crédito",
      "Fideicomisos, seguros y fianzas",
    ],
  },
  {
    n: "03",
    title: "Litigio Concursal",
    items: [
      "Concursos mercantiles, incluso quiebras",
      "Convenios concursales para reestructura",
      "Solicitud o demanda de quiebra",
      "Reconocimiento y recuperación de créditos",
      "Homologación de resoluciones extranjeras de insolvencia",
    ],
  },
  {
    n: "04",
    title: "Litigio Familiar",
    items: [
      "Divorcios",
      "Patria potestad, guarda y custodia",
      "Pensión alimenticia",
      "Restitución internacional de menores",
      "Sucesiones",
    ],
  },
  {
    n: "05",
    title: "Litigio Constitucional",
    items: [
      "Juicio de amparo",
      "Acciones de inconstitucionalidad",
      "Controversias constitucionales",
    ],
  },
  {
    n: "06",
    title: "Mecanismos Alternativos de Solución de Controversias",
    items: [
      "Juicios arbitrales como abogados o como árbitros",
      "Ejecución o nulidad de laudos arbitrales",
      "Homologación y reconocimiento de laudos extranjeros",
      "Medidas cautelares previas y durante el arbitraje",
      "Conciliación, mediación, arbitraje y negociación",
    ],
  },
];

export default function Areas() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="areas" className="relative bg-ink-900 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="04" label="Áreas de práctica" />

        <FadeIn>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[40px] sm:text-[60px] lg:text-[84px] max-w-4xl">
            Seis áreas, una <span className="italic">sola estrategia</span>
            <span className="text-gold-400">.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 sm:mt-28">
          {areas.map((a, i) => {
            const isOpen = open === i;
            return (
              <div key={a.n} className="border-t border-bone-50/15 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 sm:gap-12 py-7 sm:py-9 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[11px] tracking-[0.28em] text-gold-600 font-medium w-10 sm:w-14 shrink-0 self-start mt-2.5">
                    {a.n}
                  </span>
                  <span
                    className={`pleca shrink-0 self-stretch transition-all ${
                      isOpen ? "h-auto" : "h-10 sm:h-12 mt-2"
                    }`}
                    aria-hidden
                  />
                  <h3 className="flex-1 font-display text-2xl sm:text-3xl lg:text-[42px] text-bone-50 leading-[1.1] group-hover:text-gold-600 transition-colors">
                    {a.title}
                  </h3>
                  <span
                    className={`shrink-0 text-bone-50 group-hover:text-gold-600 text-2xl transition-all duration-300 leading-none mt-2 ${
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
                    <div className="pl-16 sm:pl-[100px] pr-4 pb-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-3xl">
                      {a.items.map((it) => (
                        <div
                          key={it}
                          className="font-body text-bone-50 text-[14px] leading-[1.75] py-1"
                        >
                          {it}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
