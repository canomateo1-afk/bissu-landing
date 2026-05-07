"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function Contacto() {
  const [motivo, setMotivo] = useState<"contacta" | "trabaja">("contacta");

  return (
    <section id="contacto" className="relative bg-ink-800 py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="09" label="Contacto" />

        <FadeIn>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[60px] sm:text-[100px] lg:text-[140px]">
            Hablemos<span className="text-gold-400 italic">.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 sm:mt-28 grid grid-cols-12 gap-y-16 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <FadeIn>
              <p className="font-body text-bone-50 text-base sm:text-lg leading-[1.7] max-w-md mb-12">
                Cuéntanos brevemente tu caso. Un abogado titular se pondrá en
                contacto en menos de 24 horas hábiles.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="space-y-9 border-t border-bone-50/15 pt-10">
                <Detail label="Oficinas">
                  <p className="font-body text-bone-50 text-[14px] leading-[1.75]">
                    Av. Prado Norte 365, Int. 6
                    <br />
                    Lomas de Chapultepec V Sección
                    <br />
                    Miguel Hidalgo, 11000, CDMX
                  </p>
                </Detail>

                <Detail label="Teléfono">
                  <p className="font-body text-bone-50 text-[14px]">
                    <a
                      href="tel:+525555451308"
                      className="hover:text-gold-600 transition-colors"
                    >
                      +52 55 5545 1308
                    </a>
                    <span className="text-bone-300 mx-2">/</span>
                    <a
                      href="tel:+525555451309"
                      className="hover:text-gold-600 transition-colors"
                    >
                      1309
                    </a>
                  </p>
                </Detail>

                <Detail label="Correo">
                  <a
                    href="mailto:sbissu@bissuabogados.com"
                    className="font-body text-bone-50 hover:text-gold-600 transition-colors text-[14px] link-underline"
                  >
                    sbissu@bissuabogados.com
                  </a>
                </Detail>

                <Detail label="Síguenos">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 font-sans text-[11px] tracking-[0.22em] uppercase font-medium">
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
                </Detail>
              </div>
            </FadeIn>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <FadeIn delay={200}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Gracias por escribirnos. Un abogado titular se pondrá en contacto contigo."
                  );
                }}
                className="border border-bone-50/20 bg-ink-900"
              >
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setMotivo("contacta")}
                    className={`flex-1 py-4 font-sans text-[11px] tracking-[0.22em] uppercase transition-colors font-medium ${
                      motivo === "contacta"
                        ? "bg-bone-50 text-ink-900"
                        : "text-bone-300 hover:text-bone-50"
                    }`}
                  >
                    Contacta con nosotros
                  </button>
                  <button
                    type="button"
                    onClick={() => setMotivo("trabaja")}
                    className={`flex-1 py-4 font-sans text-[11px] tracking-[0.22em] uppercase transition-colors border-l border-bone-50/20 font-medium ${
                      motivo === "trabaja"
                        ? "bg-bone-50 text-ink-900"
                        : "text-bone-300 hover:text-bone-50"
                    }`}
                  >
                    Trabaja para nosotros
                  </button>
                </div>

                <div className="p-8 sm:p-10 lg:p-12 border-t border-bone-50/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                    <Field label="Nombre" name="nombre" required />
                    <Field label="Apellidos" name="apellidos" required />
                    <Field label="Correo" name="email" type="email" required />
                    <Field label="Teléfono" name="phone" type="tel" />
                  </div>

                  <div className="mt-10">
                    <label className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium block mb-3">
                      {motivo === "contacta"
                        ? "Cuéntanos brevemente tu caso"
                        : "Cuéntanos sobre ti"}
                    </label>
                    <textarea
                      name="mensaje"
                      rows={5}
                      required
                      placeholder={
                        motivo === "contacta"
                          ? "Naturaleza del asunto, estado actual, contraparte si la hay..."
                          : "Áreas de interés, experiencia, motivo por el que te interesa Bissu..."
                      }
                      className="w-full bg-transparent border-b border-bone-50/25 focus:border-gold-400 focus:outline-none py-3 text-bone-50 text-[14px] font-body placeholder:text-bone-300 transition-colors resize-none"
                    />
                  </div>

                  <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                    <p className="font-body text-bone-300 text-[12px] max-w-md leading-[1.65]">
                      Al enviar este formulario aceptas nuestro aviso de
                      privacidad. Información confidencial bajo secreto
                      profesional.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 bg-bone-50 hover:bg-gold-600 hover:text-ink-900 text-ink-900 font-sans text-[11px] tracking-[0.22em] uppercase px-7 py-3.5 transition-colors font-medium"
                    >
                      Enviar mensaje
                      <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <span className="pleca pleca-md shrink-0 mt-1" aria-hidden />
      <div className="flex-1">
        <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium mb-2">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium block mb-3">
        {label}
        {required && <span className="text-gold-600 ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-bone-50/25 focus:border-gold-400 focus:outline-none py-2.5 text-bone-50 text-[14px] font-body transition-colors"
      />
    </div>
  );
}
