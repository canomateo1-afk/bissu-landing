import type { Metadata } from "next";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import AwardBadge from "@/components/AwardBadge";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Design System",
  description: "Living style guide — tokens, components and patterns of the Bissu Abogados visual system.",
  robots: { index: false, follow: false },
};

const inkScale = [
  { name: "ink-900", hex: "#FBF8F1", role: "Page bg — warm paper" },
  { name: "ink-800", hex: "#EDE5D2", role: "Alternating section" },
  { name: "ink-700", hex: "#E0D4B7", role: "Reserved" },
  { name: "ink-600", hex: "#CFC09C", role: "Reserved" },
  { name: "ink-500", hex: "#B7A57F", role: "Reserved" },
];

const boneScale = [
  { name: "bone-50",  hex: "#231F20", role: "Texto primario · brand BLACK" },
  { name: "bone-100", hex: "#1A1718", role: "Hover deep" },
  { name: "bone-200", hex: "#100E0F", role: "Reserved" },
  { name: "bone-300", hex: "#5A5253", role: "Texto secundario muted" },
  { name: "bone-400", hex: "#8A8082", role: "Texto terciario" },
];

const goldScale = [
  { name: "gold-100", hex: "#E9D7A7", role: "Lighter highlight" },
  { name: "gold-200", hex: "#D4B97A", role: "Gradient mid" },
  { name: "gold-300", hex: "#C2A368", role: "Gradient mid" },
  { name: "gold-400", hex: "#B4975A", role: "Brand gold canónico" },
  { name: "gold-500", hex: "#9A7E45", role: "Hover de gold-400" },
  { name: "gold-600", hex: "#7C6435", role: "Labels uppercase" },
];

const trackingScale = [
  { token: "tracking-[0.18em]", val: "0.18em", uso: "Mid uppercase meta" },
  { token: "tracking-[0.22em]", val: "0.22em", uso: "Default UI label · CTA · nav" },
  { token: "tracking-[0.28em]", val: "0.28em", uso: "Stats labels · Fig. captions" },
  { token: "tracking-[0.32em]", val: "0.32em", uso: 'Section meta · "01" small numerals' },
];

const easings = [
  { name: "ease-premium", curve: "cubic-bezier(0.22, 1, 0.36, 1)", uso: "Default · entradas · reveals" },
  { name: "ease-elegant", curve: "cubic-bezier(0.65, 0, 0.35, 1)", uso: "Estados simétricos" },
  { name: "ease-spring",  curve: "cubic-bezier(0.34, 1.56, 0.64, 1)", uso: "Magnetic button overshoot" },
];

export default function DesignSystemPage() {
  return (
    <main className="relative bg-ink-900 min-h-screen pb-40">
      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-bone-50/10">
        <div className="absolute top-[112px] left-0 right-0 hairline-gold opacity-60" aria-hidden />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 mb-10">
            <span className="pleca pleca-md" aria-hidden />
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium">
                Internal · No-index
              </p>
              <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-50 font-medium">
                Bissu Abogados — Design System
              </p>
            </div>
          </div>
          <h1 className="font-display font-normal text-bone-50 leading-[0.94] tracking-tightest text-[40px] sm:text-[60px] md:text-[80px] lg:text-[104px] xl:text-[120px] balance">
            La pluma, la tinta y el{" "}
            <span className="italic">pliego de oro</span>
            <span className="text-gold-400">.</span>
          </h1>
          <div className="mt-12 max-w-2xl flex gap-5">
            <span className="pleca pleca-lg shrink-0 mt-1.5" aria-hidden />
            <p className="font-body text-bone-50 text-[17px] sm:text-[19px] leading-[1.55] balance">
              Living style guide del sistema visual de Bissu. Tokens, tipografía,
              motion y componentes en un solo lugar. Para la guía narrativa
              completa leer <code className="font-sans text-[14px] text-gold-600">/docs/DESIGN_SYSTEM.md</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Color */}
      <Section n="01" label="Color">
        <Block title="Brand" desc="Tres tokens canónicos del manual de marca de Bissu. Inviolables.">
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "brand.black", hex: "#231F20" },
              { name: "brand.gold",  hex: "#B4975A" },
              { name: "brand.white", hex: "#FFFFFF" },
            ].map((s) => (
              <Swatch key={s.name} {...s} />
            ))}
          </div>
        </Block>

        <Block title="ink-* — Surfaces" desc="Cream cálido. ink-900 es la página, ink-800 es la sección alterna.">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {inkScale.map((s) => <Swatch key={s.name} {...s} />)}
          </div>
        </Block>

        <Block title="bone-* — Text & ink" desc="Tokens de texto. bone-50 default. bone-300 muted. Las /15, /12, /[0.02] son los borders y backgrounds de cards.">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {boneScale.map((s) => <Swatch key={s.name} {...s} />)}
          </div>
        </Block>

        <Block title="gold-* — Único acento" desc="Escaso por diseño. gold-400 = capital point '.'. gold-600 = labels uppercase. Nunca grandes áreas.">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {goldScale.map((s) => <Swatch key={s.name} {...s} />)}
          </div>
        </Block>
      </Section>

      {/* Typography */}
      <Section n="02" label="Tipografía">
        <Block title="font-display · Playfair Display" desc="H1, H2, números grandes, italic phrases. font-weight 400 siempre. tracking-tightest. Italic en frase clave.">
          <div className="space-y-8">
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>120px · Hero H1</Caption>
              <p className="font-display font-normal text-bone-50 leading-[0.94] tracking-tightest text-[120px]">
                Aa<span className="text-gold-400">.</span>
              </p>
            </div>
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>84px · H2 sección</Caption>
              <p className="font-display font-normal text-bone-50 leading-[0.98] tracking-tightest text-[84px]">
                Áreas de <span className="italic">práctica</span><span className="text-gold-400">.</span>
              </p>
            </div>
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>26px · Card heading</Caption>
              <p className="font-display text-bone-50 text-[26px] leading-[1.15]">
                Litigio Mercantil y Corporativo
              </p>
            </div>
          </div>
        </Block>

        <Block title="font-body · Libre Baskerville" desc="Párrafos editoriales. leading 1.55–1.75. Italic OK para énfasis.">
          <div className="space-y-8">
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>19px · Intro grande</Caption>
              <p className="font-body text-bone-50 text-[19px] leading-[1.55] max-w-2xl balance">
                Despacho de abogados boutique en CDMX especializado en{" "}
                <span className="italic">litigio complejo</span> y arbitraje
                internacional para empresas, instituciones e individuos en todo México.
              </p>
            </div>
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>15px · Body default</Caption>
              <p className="font-body text-bone-50 text-[15px] leading-[1.7] max-w-xl pretty">
                Atendemos cada asunto con el equipo titular del despacho. Sin intermediarios,
                sin escalamientos, sin sorpresas.
              </p>
            </div>
            <div className="border-l border-gold-400/40 pl-6">
              <Caption>13px · Card body</Caption>
              <p className="font-body text-bone-300 text-[13px] leading-[1.7] max-w-md pretty">
                Contratos, daños y perjuicios, derechos individuales y homologación
                de sentencias extranjeras en México.
              </p>
            </div>
          </div>
        </Block>

        <Block title="font-sans · Manrope · uppercase" desc="TODO el UI uppercase es Manrope. tracking positivo según jerarquía.">
          <div className="space-y-6">
            {trackingScale.map((t) => (
              <div key={t.token} className="border-l border-gold-400/40 pl-6">
                <Caption>{t.token} · {t.uso}</Caption>
                <p className={`font-sans text-[12px] uppercase text-bone-50 font-medium`} style={{ letterSpacing: t.val }}>
                  Agenda consulta gratuita
                </p>
              </div>
            ))}
          </div>
        </Block>
      </Section>

      {/* Spacing */}
      <Section n="03" label="Spacing & Layout">
        <Block title="Container" desc="max-w-[1440px] · px-6 sm:px-10 lg:px-14. Inviolable.">
          <div className="relative border border-bone-50/15 h-24 flex items-center justify-center font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
            <span className="absolute left-0 top-0 bottom-0 w-px bg-gold-400/30" />
            <span className="absolute right-0 top-0 bottom-0 w-px bg-gold-400/30" />
            max-w 1440px · px progresivo
          </div>
        </Block>

        <Block title="Grid 12 col · splits canónicos" desc="7/5 (texto/imagen), 8/4 (texto/sidebar), 6/6 (forms).">
          <div className="space-y-3">
            <GridDemo split={[7, 5]} />
            <GridDemo split={[8, 4]} />
            <GridDemo split={[6, 6]} />
          </div>
        </Block>

        <Block title="Section padding vertical" desc="py-24 sm:py-32 lg:py-40 — secciones normales. Hero usa pt-44 sm:pt-52 pb-16 sm:pb-20.">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "py-24", uso: "mobile" },
              { label: "py-32", uso: "tablet" },
              { label: "py-40", uso: "desktop" },
            ].map((s) => (
              <div key={s.label} className="border border-bone-50/12 bg-bone-50/[0.02] p-6 text-center">
                <p className="font-display text-bone-50 text-[28px] tracking-tightest">{s.label}</p>
                <p className="mt-2 font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">{s.uso}</p>
              </div>
            ))}
          </div>
        </Block>
      </Section>

      {/* Surfaces */}
      <Section n="04" label="Surfaces & Cards">
        <Block title="Card canónica" desc="border-bone-50/12 · bg-bone-50/[0.02] · backdrop-blur-sm. NO sombras.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <article className="group relative border border-bone-50/12 bg-ink-800/40 backdrop-blur-sm p-7 lg:p-8 overflow-hidden flex flex-col">
              <span aria-hidden className="absolute top-0 left-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span aria-hidden className="absolute bottom-0 right-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-4">01</p>
              <h3 className="font-display text-bone-50 text-[26px] leading-[1.15] mb-3 group-hover:text-gold-600 transition-colors duration-500">
                Card con corner brackets
              </h3>
              <p className="font-body text-bone-300 text-[13px] leading-[1.7] pretty">
                Hover muestra cuatro brackets gold en esquinas opuestas. Patrón premium para áreas o servicios.
              </p>
            </article>

            <article className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-7">
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-4">02</p>
              <h3 className="font-display text-bone-50 text-[26px] leading-[1.15] mb-3">Card básica</h3>
              <p className="font-body text-bone-300 text-[13px] leading-[1.7] pretty">
                Sin brackets. Mismo border, mismo bg. Útil para listas de servicios o copy editorial.
              </p>
            </article>

            <article className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6">
              <p className="font-display text-[44px] sm:text-[56px] leading-none text-bone-50 tracking-tightest tabular mb-3">
                <span>6</span>
                <span className="text-gold-400">+</span>
              </p>
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">Áreas activas</p>
              <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold-600 font-medium mt-1">Stat compacto</p>
            </article>
          </div>
        </Block>

        <Block title="Form fields" desc="Border inferior, bg transparente, focus gold. Editorial.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 max-w-2xl border border-bone-50/12 bg-bone-50/[0.02] p-8">
            <FormField label="Nombre completo" required />
            <FormField label="Correo" required />
            <FormField label="Teléfono" required />
            <FormField label="Tipo de asunto" />
          </div>
        </Block>
      </Section>

      {/* Componentes */}
      <Section n="05" label="Componentes interactivos">
        <Block title="MagneticButton — 3 variants" desc="Magnetic mouse track + gradient sweep en hover. Variants: dark / light / ghost.">
          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton href="#dark">
              Dark default
              <span className="text-base leading-none arrow-drift">→</span>
            </MagneticButton>
            <MagneticButton href="#light" variant="light">
              Light
              <span className="text-base leading-none arrow-drift">→</span>
            </MagneticButton>
            <MagneticButton href="#ghost" variant="ghost">
              Ghost
              <span className="text-base leading-none">↗</span>
            </MagneticButton>
          </div>
        </Block>

        <Block title="CTA secundario · plain" desc='Sin magnetic. Usar dentro de cards o trust strips.'>
          <a
            href="#x"
            className="group inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 font-sans text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-gold-400 transition-colors"
          >
            Agenda tu consulta
            <span className="text-base leading-none arrow-drift">→</span>
          </a>
        </Block>

        <Block title="SectionLabel" desc="Pleca + número uppercase + label. Header de toda sección.">
          <SectionLabel n="04" label="Áreas de práctica" />
        </Block>

        <Block title="AwardBadge — variantes de ícono" desc="Stroke-only SVGs en gold-400. Hover: shimmer sweep + border gold.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <AwardBadge icon="laurel" subtitle="Best Lawyers" year="2026" title="The Best Lawyers in Mexico" href="#x" />
            <AwardBadge icon="medal" subtitle="Leaders League" year="2025" title="Resolución de Conflictos · México" />
            <AwardBadge icon="diamond" subtitle="Tops · Diamante" year="2025" title="Los Mejores Abogados de México" />
          </div>
        </Block>

        <Block title="Counter" desc="Número animado tabular. Acepta delay, padding y prefix/suffix manuales.">
          <p className="font-display text-[88px] sm:text-[120px] leading-none text-bone-50 tracking-tightest tabular">
            <Counter to={8} pad={2} />
            <span className="text-gold-400">+</span>
          </p>
          <p className="mt-3 font-sans text-[11px] tracking-[0.28em] uppercase text-bone-50 font-medium">
            Años defendiendo casos en México
          </p>
        </Block>
      </Section>

      {/* Patrones */}
      <Section n="06" label="Patterns">
        <Block title="Capital point gold" desc="Toda title cierra con punto en gold-400. Inviolable.">
          <p className="font-display text-bone-50 text-[60px] leading-none tracking-tightest">
            Hablemos<span className="text-gold-400">.</span>
          </p>
        </Block>

        <Block title="Italic key phrase" desc="Una frase clave por title va italic. Ritmo + jerarquía.">
          <p className="font-display text-bone-50 text-[60px] leading-[0.98] tracking-tightest balance">
            Casos representativos de <span className="italic">litigio y arbitraje</span><span className="text-gold-400">.</span>
          </p>
        </Block>

        <Block title="Pleca" desc="Marca vertical gold con gradient. Tres tamaños: sm/md/lg.">
          <div className="flex items-end gap-12">
            <div className="flex flex-col items-center gap-2">
              <span className="pleca pleca-sm" aria-hidden />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">pleca-sm · 24px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="pleca pleca-md" aria-hidden />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">pleca-md · 40px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="pleca pleca-lg" aria-hidden />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">pleca-lg · 64px</span>
            </div>
          </div>
        </Block>

        <Block title="Hairline gold" desc="Divider horizontal 1px con fade gold.">
          <div className="hairline-gold opacity-60" />
        </Block>

        <Block title="Live ping dot" desc="Indicador en tiempo real. Para badges 'Disponible esta semana', 'En vivo'.">
          <div className="inline-flex items-center gap-3 border border-bone-50/15 bg-bone-50/[0.02] backdrop-blur-sm px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-bone-50 font-medium">
              Disponible esta semana
            </span>
          </div>
        </Block>

        <Block title="Pleca-prefixed label" desc="Patrón de header pequeño con pleca + label uppercase + hairline al resto.">
          <div className="flex items-center gap-3 max-w-md">
            <span className="pleca pleca-sm" aria-hidden />
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
              Reconocidos por
            </p>
            <span className="flex-1 h-px bg-bone-50/15 ml-3" aria-hidden />
          </div>
        </Block>

        <Block title="Fig. XX caption" desc="Caption para imagen full-bleed. Manrope uppercase + coords/meta opcional a la derecha.">
          <div className="flex items-baseline justify-between flex-wrap gap-2 max-w-2xl">
            <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
              Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
            </p>
            <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium tabular">
              19.4326° N · 99.1332° W
            </p>
          </div>
        </Block>

        <Block title="Ghost number gigante (sectional decoration)" desc="Italic Playfair, opacidad 2.5%, posicionado fuera del flujo. Una por sección.">
          <div className="relative h-48 overflow-hidden border border-bone-50/12 bg-bone-50/[0.02]">
            <span
              className="absolute -left-4 top-1/2 -translate-y-1/2 font-display italic text-[280px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
              aria-hidden
            >
              04
            </span>
            <p className="absolute bottom-5 left-5 font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">
              Ejemplo · ghost número decorativo
            </p>
          </div>
        </Block>

        <Block title="Mini sparkline / bars" desc="6–8 barras gold. Refuerza una stat sin gráfico complejo.">
          <div className="flex items-end gap-1 h-3" aria-hidden>
            {[0.4, 0.55, 0.45, 0.7, 0.65, 0.8, 0.75, 0.95].map((h, i) => (
              <span key={i} className="w-1.5 bg-gold-400/30" style={{ height: `${h * 100}%` }} />
            ))}
          </div>
        </Block>

        <Block title="Trust strip" desc="Awards line bajo CTA. Dot separator '·' entre items.">
          <div className="pt-6 border-t border-bone-50/12 flex items-center gap-4 flex-wrap max-w-3xl">
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
        </Block>
      </Section>

      {/* Motion */}
      <Section n="07" label="Motion">
        <Block title="Easings disponibles" desc="Default ease-premium. ease-spring solo en magnetic button.">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {easings.map((e) => (
              <div key={e.name} className="border border-bone-50/12 bg-bone-50/[0.02] p-6">
                <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold-600 font-medium mb-3">{e.name}</p>
                <p className="font-display text-bone-50 text-[15px] leading-tight mb-3">{e.uso}</p>
                <code className="font-sans text-[11px] text-bone-300 break-all">{e.curve}</code>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Reveal en scroll" desc="<Reveal delay={120}>...</Reveal>. fade-up y=28 → 0, opacity 0 → 1, duración 0.85s.">
          <div className="space-y-4">
            <Reveal>
              <div className="border border-bone-50/12 bg-bone-50/[0.02] p-6 max-w-md">
                <p className="font-display text-bone-50 text-[20px]">Reveal #1 (delay 0)</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-bone-50/12 bg-bone-50/[0.02] p-6 max-w-md">
                <p className="font-display text-bone-50 text-[20px]">Reveal #2 (delay 120ms)</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="border border-bone-50/12 bg-bone-50/[0.02] p-6 max-w-md">
                <p className="font-display text-bone-50 text-[20px]">Reveal #3 (delay 240ms)</p>
              </div>
            </Reveal>
          </div>
        </Block>

        <Block title="Reglas de motion" desc="Resumen para no improvisar.">
          <ul className="space-y-3 max-w-2xl font-body text-bone-50 text-[15px] leading-[1.7]">
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Default reveal: <code className="font-sans text-[13px] text-gold-600">y: 28 → 0, opacity 0 → 1, 0.85s ease-premium</code>.</span></li>
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Stagger entre hijos: <code className="font-sans text-[13px] text-gold-600">0.06–0.11s</code>.</span></li>
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Hover lift card: <code className="font-sans text-[13px] text-gold-600">y: -3, spring 320/26</code>.</span></li>
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Brush underline: <code className="font-sans text-[13px] text-gold-600">delay 1.6s, scaleX 0 → 1, 1.4s</code>.</span></li>
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Image clip-reveal: <code className="font-sans text-[13px] text-gold-600">clipPath inset(0 100% 0 0) → 0, 1.6s</code>.</span></li>
            <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Toda animación respeta <code className="font-sans text-[13px] text-gold-600">useReducedMotion()</code>.</span></li>
          </ul>
        </Block>
      </Section>

      {/* Anti-patterns */}
      <Section n="08" label="Anti-patterns">
        <Block title="Nunca hacer" desc="Estos rompen la atmósfera Bissu y hay que corregirlos al verlos.">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl font-body text-bone-50 text-[14px] leading-[1.7]">
            {[
              "Sombras (shadow-md, shadow-2xl). Reemplazar por borders hairline.",
              "bg-white o bg-black puros como surface.",
              "Gradientes saturados (azul/violeta) como bg de sección.",
              "Iconos Lucide / Heroicons / 3D / emoji.",
              "Em-dashes (—) en prosa.",
              "<br> en captions o copy.",
              "Bold en font-display (Playfair). Solo font-normal.",
              "Más de 1 brush underline por sección.",
              "Más de 1 ghost number gigante por sección.",
              "Capital point '.' en cualquier color que no sea gold-400.",
              "Cards con border-radius. Todo en hard edges.",
              "Letter-spacing negativo en sans (es para serif).",
              "Emojis salvo los aprobados: → ↗ ·",
            ].map((rule) => (
              <li key={rule} className="flex gap-3">
                <span className="text-gold-600 shrink-0 font-display italic text-[18px] leading-none mt-0.5">×</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Block>
      </Section>

      {/* Reference card */}
      <Section n="09" label="Quick reference">
        <Block title="Cheat sheet" desc="Imprimir y pegar al lado del monitor.">
          <pre className="font-mono text-[12px] leading-[1.8] text-bone-50 border border-bone-50/12 bg-bone-50/[0.02] p-6 overflow-x-auto whitespace-pre">
{`COLORS
  bg:    ink-900 (default), ink-800 (alt section)
  text:  bone-50 (primary), bone-300 (muted), gold-600 (uppercase labels)
  accent: gold-400 (only on lines, dots, capital point ".")

FONTS
  display: Playfair Display (font-display)        → H1/H2, counters, italic accents
  body:    Libre Baskerville (font-body)          → paragraphs
  sans:    Manrope (font-sans, uppercase 0.22em)  → ALL UI labels

LAYOUT
  container: max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14
  grid:      grid-cols-12 gap-y-12 lg:gap-x-12
  splits:    7/5 (text/img), 8/4 (text/sidebar), 6/6 (forms)
  section:   py-24 sm:py-32 lg:py-40

CARD
  border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8

CTA
  font-sans text-[11px] tracking-[0.22em] uppercase font-semibold

EASING (default)
  cubic-bezier(0.22, 1, 0.36, 1)

REVEAL
  <Reveal delay={120}>...</Reveal>

CAPITAL POINT (every title)
  <span className="text-gold-400">.</span>

ITALIC ACCENT (one phrase per title)
  <span className="italic">...</span>`}
          </pre>
        </Block>
      </Section>

      {/* Footer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mt-32 pt-10 border-t border-bone-50/12">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
            Living style guide · Bissu Abogados
          </p>
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
            Fuente: <code className="text-gold-600">/docs/DESIGN_SYSTEM.md</code>
          </p>
        </div>
      </div>
    </main>
  );
}

/* ----------------- Local helpers ----------------- */

function Section({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <section className="relative border-b border-bone-50/10 py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center gap-5 mb-12">
          <span className="pleca pleca-md" aria-hidden />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-gold-600 font-medium">{n}</span>
            <span className="font-sans text-[12px] tracking-[0.22em] uppercase text-bone-50 font-medium">{label}</span>
          </div>
        </div>
        <div className="space-y-16">{children}</div>
      </div>
    </section>
  );
}

function Block({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-bone-50 text-[26px] sm:text-[32px] leading-[1.15] tracking-tightest mb-2 balance">
        {title}<span className="text-gold-400">.</span>
      </h3>
      {desc && (
        <p className="font-body text-bone-300 text-[14px] leading-[1.65] max-w-2xl mb-7 pretty">{desc}</p>
      )}
      <div>{children}</div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium mb-3">
      {children}
    </p>
  );
}

function Swatch({ name, hex, role }: { name: string; hex: string; role?: string }) {
  const isLight = ["#FBF8F1", "#EDE5D2", "#E0D4B7", "#FFFFFF", "#E9D7A7", "#D4B97A"].includes(hex);
  return (
    <div className="border border-bone-50/12 bg-bone-50/[0.02]">
      <div
        className="aspect-[4/3] flex items-end p-4"
        style={{ background: hex }}
      >
        <span
          className={`font-sans text-[10px] tracking-[0.28em] uppercase font-semibold tabular ${isLight ? "text-[#231F20]" : "text-[#FBF8F1]"}`}
        >
          {hex}
        </span>
      </div>
      <div className="p-4">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-50 font-medium">{name}</p>
        {role && <p className="mt-1 font-body text-bone-300 text-[12px] leading-[1.5]">{role}</p>}
      </div>
    </div>
  );
}

const COL_SPAN: Record<number, string> = {
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
};

function GridDemo({ split }: { split: [number, number] }) {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className={`${COL_SPAN[split[0]]} bg-bone-50/[0.04] border border-bone-50/12 h-12 flex items-center justify-center font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium`}>
        col-span-{split[0]}
      </div>
      <div className={`${COL_SPAN[split[1]]} bg-gold-400/10 border border-gold-400/25 h-12 flex items-center justify-center font-sans text-[10px] tracking-[0.28em] uppercase text-gold-600 font-medium`}>
        col-span-{split[1]}
      </div>
    </div>
  );
}

function FormField({ label, required }: { label: string; required?: boolean }) {
  return (
    <div>
      <label className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium block mb-3">
        {label}
        {required && <span className="text-gold-600 ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder="Demo · no funcional"
        className="w-full bg-transparent border-b border-bone-50/25 focus:border-gold-400 focus:outline-none py-2.5 text-bone-50 text-[14px] font-body placeholder:text-bone-400 transition-colors"
      />
    </div>
  );
}
