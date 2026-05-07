export default function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-bone-50/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-24">
        {/* Brand-correct massive wordmark — Bissu serif + ABOGADOS sans (per manual) */}
        <div className="border-b border-bone-50/15 pb-16">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <p className="font-display font-normal text-bone-50 text-[80px] sm:text-[180px] lg:text-[260px] xl:text-[320px] leading-[0.9] tracking-tightest">
              Bissu<span className="text-gold-400">.</span>
            </p>
            <p className="font-sans text-[12px] sm:text-[16px] tracking-[0.42em] uppercase text-bone-300 font-medium pb-2 sm:pb-6">
              Abogados
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 mt-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex gap-5">
              <span className="pleca pleca-lg shrink-0 mt-1" aria-hidden />
              <div>
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-3">
                  Filosofía
                </p>
                <p className="font-display italic text-bone-50 text-2xl sm:text-3xl leading-[1.3] max-w-md">
                  Simplicity is the ultimate sophistication.
                </p>
                <p className="mt-3 font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
                  — Leonardo da Vinci
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            <div className="flex gap-4">
              <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
              <div>
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-3">
                  Oficinas
                </p>
                <p className="font-body text-bone-50 text-[13px] leading-[1.75]">
                  Av. Prado Norte 365, Int. 6
                  <br />
                  Lomas de Chapultepec V Sección
                  <br />
                  Miguel Hidalgo, 11000, CDMX
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className="flex gap-4">
              <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
              <div>
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-3">
                  Contacto
                </p>
                <div className="space-y-1.5 font-body text-[13px]">
                  <a
                    href="tel:+525555451308"
                    className="block text-bone-50 hover:text-gold-600 transition-colors"
                  >
                    +52 55 5545 1308
                  </a>
                  <a
                    href="mailto:sbissu@bissuabogados.com"
                    className="block text-bone-50 hover:text-gold-600 transition-colors break-all"
                  >
                    sbissu@bissuabogados.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <div className="flex gap-4">
              <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
              <div>
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-3">
                  Síguenos
                </p>
                <div className="flex flex-col gap-1.5 font-sans text-[11px] tracking-[0.22em] uppercase font-medium">
                  {[
                    ["Instagram", "https://www.instagram.com/bissuabogados/"],
                    ["Facebook", "https://www.facebook.com/BissuAbogados/"],
                    [
                      "LinkedIn",
                      "https://www.linkedin.com/company/bissu-abogados-s-c-/",
                    ],
                    ["WhatsApp", "https://walink.co/727927"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bone-50 hover:text-gold-600 transition-colors"
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone-50/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans text-[10px] tracking-[0.22em] uppercase text-bone-300 font-medium">
          <p>© {new Date().getFullYear()} Bissu Abogados, S.C.</p>
          <p>
            Información de carácter informativo · No constituye asesoría legal
          </p>
        </div>
      </div>
    </footer>
  );
}
