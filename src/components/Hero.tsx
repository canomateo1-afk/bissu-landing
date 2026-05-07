import Image from "next/image";

const trustItems = [
  "Best Lawyers in Mexico 2026",
  "Leaders League 2025",
  "Tops · Los Mejores Abogados",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink-900 pt-44 sm:pt-52 pb-16 sm:pb-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top metadata grid */}
        <div className="grid grid-cols-12 gap-6 mb-20 sm:mb-28">
          <Meta label="Despacho" value="Bissu Abogados, S.C." />
          <Meta label="Sede" value="Ciudad de México · MX" />
          <Meta label="Áreas" value="06 prácticas activas" hideOnMobile />
          <Meta label="Reconocimiento" value="Best Lawyers · 2026" hideOnMobile />
        </div>

        {/* Editorial headline */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10">
            <h1 className="font-display font-normal text-bone-50 leading-[0.96] tracking-tightest text-[52px] sm:text-[80px] md:text-[112px] lg:text-[140px] xl:text-[164px]">
              Práctica jurídica
              <br />
              <span className="italic">de fondo</span>
              <span className="text-gold-400">.</span>
            </h1>
          </div>
        </div>

        {/* Lower band — body Baskerville for editorial gravitas */}
        <div className="mt-20 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex gap-5">
              <span className="pleca pleca-lg shrink-0 mt-1.5" aria-hidden />
              <div className="max-w-xl">
                <p className="font-body text-bone-50 text-base sm:text-[17px] leading-[1.65] mb-6">
                  Despacho especializado en litigio y mecanismos alternativos
                  de resolución de conflictos para empresas, instituciones e
                  individuos en todo México.
                </p>
                <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-bone-300 font-medium">
                  Respuesta en 24 hs hábiles · Consulta inicial gratuita
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:flex lg:justify-end">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-bone-50 hover:bg-gold-600 text-ink-900 font-sans text-[11px] tracking-[0.22em] uppercase px-7 py-3.5 transition-colors font-medium"
              >
                Agenda una cita
                <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://walink.co/727927"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-bone-50 font-sans text-[11px] tracking-[0.22em] uppercase border-b border-bone-50 hover:border-gold-600 hover:text-gold-600 transition-colors pb-1 font-medium"
              >
                WhatsApp directo
                <span className="text-base leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-bone-50/15 flex items-center gap-x-8 gap-y-3 flex-wrap">
          <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
            Reconocidos por
          </span>
          {trustItems.map((t) => (
            <div key={t} className="flex items-center gap-3">
              <span className="pleca pleca-sm" aria-hidden />
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-50 font-medium">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial photo: full-bleed below */}
      <div className="mt-20 sm:mt-28 relative">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Oficinas Bissu Abogados — Polanco, CDMX"
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85) contrast(1.02)" }}
            priority
            quality={92}
            sizes="100vw"
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mt-5 flex items-baseline justify-between flex-wrap gap-2">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
            Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
          </p>
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
            19.4326° N · 99.1332° W
          </p>
        </div>
      </div>
    </section>
  );
}

function Meta({
  label,
  value,
  hideOnMobile,
}: {
  label: string;
  value: string;
  hideOnMobile?: boolean;
}) {
  return (
    <div
      className={`col-span-6 sm:col-span-3 ${
        hideOnMobile ? "hidden sm:flex" : "flex"
      } gap-3`}
    >
      <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
      <div>
        <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-1">
          {label}
        </p>
        <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-bone-50 font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
