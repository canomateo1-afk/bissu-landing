"use client";

import { useState, useEffect } from "react";
import { events } from "@/lib/analytics";

const links = [
  { href: "#firma", label: "Firma" },
  { href: "#areas", label: "Áreas" },
  { href: "#casos", label: "Casos" },
  { href: "#abogados", label: "Equipo" },
  { href: "#recursos", label: "Recursos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-900/90 backdrop-blur-md border-b border-bone-50/10"
          : "bg-ink-900 border-b border-bone-50/8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className="font-display text-[22px] sm:text-[24px] font-medium text-bone-50 leading-none">
              Bissu
            </span>
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 mt-px">
              Abogados
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11px] tracking-[0.22em] uppercase transition-colors link-underline ${
                    isActive ? "text-gold-600 font-semibold" : "text-bone-300 hover:text-bone-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contacto"
            onClick={() => events.ctaClick("navbar_desktop", "Agenda una cita")}
            className="hidden lg:inline-flex items-center gap-2.5 font-sans text-[11px] tracking-[0.22em] uppercase text-ink-900 bg-bone-50 hover:bg-bone-100 px-5 py-2.5 transition-colors font-medium"
          >
            Agenda una cita
            <span className="text-[14px] leading-none">→</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-bone-50 p-2 -mr-2"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-6 -mx-6 px-6 border-t border-bone-50/10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 py-4 border-b border-bone-50/10 font-sans text-[12px] tracking-[0.22em] uppercase text-bone-50"
              >
                <span className="pleca pleca-sm" aria-hidden />
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => {
                setMenuOpen(false);
                events.ctaClick("navbar_mobile_menu", "Agenda una cita");
              }}
              className="block w-full mt-5 text-ink-900 bg-bone-50 py-3 font-sans text-[11px] tracking-[0.22em] uppercase text-center font-medium"
            >
              Agenda una cita →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
