"use client";

import { v4Areas } from "@/lib/v4-areas";
import { v4Team } from "@/lib/v4-team";

/**
 * Shared rich footer used on every V4 surface (home, team profiles, area
 * pillars). Single source of truth so the structure never drifts.
 */
export default function V4Footer() {
  return (
    <footer className="bg-[#FBF7EE] border-t border-[rgba(26,23,20,0.10)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 sm:py-20">
        {/* Wordmark */}
        <div className="border-b border-[rgba(26,23,20,0.10)] pb-12 mb-12">
          <a
            href="/"
            className="inline-flex items-baseline gap-4 sm:gap-6 group"
            aria-label="Bissu Abogados — Inicio"
          >
            <p
              className="v3-display leading-[0.9] transition-colors group-hover:text-[#8C7339]"
              style={{
                fontSize: "clamp(4rem, 14vw, 14rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Bissu<span className="text-[#B4975A]">.</span>
            </p>
            <p className="text-[12px] sm:text-[14px] tracking-[0.32em] uppercase text-[#5A4F45] font-medium pb-2 sm:pb-4">
              Abogados
            </p>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 lg:gap-x-10">
          {/* Áreas */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Áreas
            </p>
            <ul className="space-y-1.5 text-[13px]">
              {v4Areas.map((a) => (
                <li key={a.slug}>
                  <a
                    href={`/v4/areas/${a.slug}`}
                    className="text-[#1A1714] hover:text-[#8C7339] transition-colors"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipo */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Equipo
            </p>
            <ul className="space-y-1.5 text-[13px]">
              {v4Team.map((m) => (
                <li key={m.slug}>
                  <a
                    href={`/v4/equipo/${m.slug}`}
                    className="text-[#1A1714] hover:text-[#8C7339] transition-colors"
                  >
                    {m.name.split(" ").slice(0, 2).join(" ")}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#abogados"
                  className="text-[#5A4F45] hover:text-[#8C7339] transition-colors"
                >
                  Ver equipo completo →
                </a>
              </li>
            </ul>
          </div>

          {/* Oficinas */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Oficinas
            </p>
            <p className="text-[13px] leading-[1.6] text-[#1A1714]">
              Av. Prado Norte 365, Int. 6
              <br />
              Lomas de Chapultepec
              <br />
              Miguel Hidalgo, 11000, CDMX
            </p>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Contacto
            </p>
            <div className="space-y-1.5 text-[13px]">
              <a
                href="mailto:sbissu@bissuabogados.com"
                className="block text-[#1A1714] hover:text-[#8C7339] transition-colors break-all"
              >
                sbissu@bissuabogados.com
              </a>
              <a
                href="/#cta"
                className="block text-[#5A4F45] hover:text-[#8C7339] transition-colors"
              >
                Agenda consulta gratuita →
              </a>
            </div>
            <div className="mt-5">
              <p className="text-[10px] tracking-[0.16em] uppercase text-[#948876] font-medium mb-2">
                Síguenos
              </p>
              <div className="flex flex-col gap-1.5 text-[12px] tracking-[0.12em] uppercase font-medium">
                {[
                  ["Instagram", "https://www.instagram.com/bissuabogados/"],
                  [
                    "LinkedIn",
                    "https://www.linkedin.com/company/bissu-abogados-s-c-/",
                  ],
                  ["Facebook", "https://www.facebook.com/BissuAbogados/"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A1714] hover:text-[#8C7339] transition-colors"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Reconocimientos */}
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#B4975A] font-medium mb-3">
              Reconocimientos
            </p>
            <ul className="space-y-1.5 text-[12px] text-[#1A1714]">
              <li>Best Lawyers in Mexico 2026</li>
              <li>Leaders League 2025</li>
              <li>Tops · Diamante 2025</li>
            </ul>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-12 pt-6 border-t border-[rgba(26,23,20,0.08)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.18em] uppercase text-[#5A4F45] font-medium">
          <p>© {new Date().getFullYear()} Bissu Abogados, S.C. · Est. 2017</p>
          <p>
            Información de carácter informativo · No constituye asesoría legal
          </p>
        </div>
      </div>
    </footer>
  );
}
