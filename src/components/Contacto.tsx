"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { events } from "@/lib/analytics";

export default function Contacto() {
  const [motivo, setMotivo] = useState<"contacta" | "trabaja">("contacta");
  const [submitted, setSubmitted] = useState(false);

  const switchMotivo = (next: "contacta" | "trabaja") => {
    setMotivo(next);
    events.tabSwitch(next);
  };

  return (
    <section id="contacto" className="relative bg-ink-900 py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <SectionLabel n="09" label="Agenda tu consulta" />

        <Reveal>
          <h2 className="mt-20 font-display font-normal text-bone-50 leading-[0.96] tracking-tightest text-[40px] sm:text-[64px] lg:text-[88px] balance">
            Agenda una{" "}
            <span className="italic">consulta con un abogado</span> en CDMX
            <span className="text-gold-400">.</span>
          </h2>
        </Reveal>

        {/* Reassurance trust strip — directly under headline */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { label: "20 min · Sin compromiso" },
              { label: "Respuesta en menos de 24 hs" },
              { label: "Secreto profesional garantizado" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                <span className="text-gold-400 shrink-0" aria-hidden>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path
                      d="M2 6.2 L4.6 8.6 L10 3.4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-bone-50 font-medium">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 sm:mt-24 grid grid-cols-12 gap-y-16 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="font-body text-bone-50 text-base sm:text-lg leading-[1.7] max-w-md mb-12">
                Cuéntanos brevemente tu caso. Un abogado titular se pondrá en
                contacto en menos de 24 horas hábiles.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-8 border-t border-bone-50/15 pt-10">
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
                      onClick={() => events.phoneClick("contacto_section", "+525555451308")}
                      className="hover:text-gold-600 transition-colors"
                    >
                      +52 55 5545 1308
                    </a>
                    <span className="text-bone-300 mx-2">/</span>
                    <a
                      href="tel:+525555451309"
                      onClick={() => events.phoneClick("contacto_section", "+525555451309")}
                      className="hover:text-gold-600 transition-colors"
                    >
                      1309
                    </a>
                  </p>
                </Detail>

                <Detail label="Correo">
                  <a
                    href="mailto:sbissu@bissuabogados.com"
                    onClick={() => events.emailClick("contacto_section")}
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
                        onClick={() => {
                          if (label === "WhatsApp") {
                            events.whatsappClick("contacto_section");
                          } else {
                            events.socialClick(String(label).toLowerCase(), "contacto_section");
                          }
                        }}
                        className="text-bone-50 hover:text-gold-600 transition-colors"
                      >
                        {label} ↗
                      </a>
                    ))}
                  </div>
                </Detail>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={200}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  events.formSubmit(motivo);
                  setSubmitted(true);
                }}
                className="border border-bone-50/20 bg-ink-900"
              >
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => switchMotivo("contacta")}
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
                    onClick={() => switchMotivo("trabaja")}
                    className={`flex-1 py-4 font-sans text-[11px] tracking-[0.22em] uppercase transition-colors border-l border-bone-50/20 font-medium ${
                      motivo === "trabaja"
                        ? "bg-bone-50 text-ink-900"
                        : "text-bone-300 hover:text-bone-50"
                    }`}
                  >
                    Trabaja para nosotros
                  </button>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-10 lg:p-12 border-t border-bone-50/20 min-h-[420px] flex flex-col items-start justify-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-400 mb-6">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-400" fill="none">
                        <path
                          d="M5 12.5 L10 17.5 L19 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="font-display text-bone-50 text-3xl sm:text-4xl tracking-tightest mb-4 balance">
                      Recibimos tu mensaje<span className="text-gold-400">.</span>
                    </p>
                    <p className="font-body text-bone-50 text-[15px] leading-[1.7] max-w-md">
                      Un abogado titular te va a contactar en menos de 24 horas hábiles.
                      Si tu caso es urgente, podés llamarnos al{" "}
                      <a
                        href="tel:+525555451308"
                        onClick={() => events.phoneClick("post_submit", "+525555451308")}
                        className="text-gold-400 hover:underline"
                      >
                        +52 55 5545 1308
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 lg:p-12 border-t border-bone-50/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                      <Field label="Nombre completo" name="nombre" required />
                      <Field label="Correo" name="email" type="email" required />
                      <Field label="Teléfono" name="phone" type="tel" required />
                      <Field
                        label={
                          motivo === "contacta" ? "Tipo de asunto" : "Área de interés"
                        }
                        name="tipo"
                      />
                    </div>

                    <div className="mt-10">
                      <label className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium block mb-3">
                        {motivo === "contacta"
                          ? "Cuéntanos brevemente tu caso"
                          : "Cuéntanos sobre ti"}
                        <span className="text-gold-600 ml-1">*</span>
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
                        Al enviar aceptas nuestro aviso de privacidad. Tu información
                        está protegida bajo secreto profesional.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-bone-50 hover:bg-gold-400 text-ink-900 font-sans text-[11px] tracking-[0.22em] uppercase px-7 py-3.5 transition-colors font-semibold"
                      >
                        {motivo === "contacta"
                          ? "Solicitar consulta gratuita"
                          : "Enviar postulación"}
                        <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>

                    {/* Trust strip below CTA */}
                    {motivo === "contacta" && (
                      <div className="mt-8 pt-6 border-t border-bone-50/12 flex items-center gap-4 flex-wrap">
                        <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-400 font-medium">
                          Reconocidos por
                        </span>
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-50 font-medium">
                          Best Lawyers Mexico 2026
                        </span>
                        <span className="text-bone-50/30">·</span>
                        <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bone-50 font-medium">
                          Leaders League 2025
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </Reveal>
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
