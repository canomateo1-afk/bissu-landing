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
  { name: "bone-50",  hex: "#231F20", role: "Texto primario · brand BLACK · ratio 15.4:1 AAA" },
  { name: "bone-100", hex: "#1A1718", role: "Hover deep" },
  { name: "bone-200", hex: "#100E0F", role: "Reserved" },
  { name: "bone-300", hex: "#5A5253", role: "Texto secundario muted · 5.6:1 AA" },
  { name: "bone-400", hex: "#8A8082", role: "Texto terciario · 3.4:1 AA Large only" },
];

const goldScale = [
  { name: "gold-100", hex: "#E9D7A7", role: "Lighter highlight" },
  { name: "gold-200", hex: "#D4B97A", role: "Gradient mid" },
  { name: "gold-300", hex: "#C2A368", role: "Gradient mid" },
  { name: "gold-400", hex: "#B4975A", role: "Brand gold canónico · 2.7:1 NEVER text" },
  { name: "gold-500", hex: "#9A7E45", role: "Hover de gold-400 · 3.5:1 AA Large" },
  { name: "gold-600", hex: "#7C6435", role: "Labels uppercase · 4.9:1 AA" },
];

const trackingScale = [
  { token: "tracking-ui-tight", val: "0.06em", uso: "Sub-uppercase H3 sans" },
  { token: "tracking-ui-snug", val: "0.12em", uso: "Display caps cortos" },
  { token: "tracking-ui-base", val: "0.16em", uso: "Mid uppercase headers" },
  { token: "tracking-[0.18em]", val: "0.18em", uso: "Body uppercase mid" },
  { token: "tracking-[0.22em]", val: "0.22em", uso: "Default UI label · CTA · nav" },
  { token: "tracking-[0.28em]", val: "0.28em", uso: "Stats labels · Fig. captions" },
  { token: "tracking-[0.32em]", val: "0.32em", uso: 'Section meta · "01" small numerals' },
];

const semanticType = [
  { token: "text-display-hero",    sample: "Aa.",   resolve: "clamp(40px, 6.5vw, 120px)", lh: "0.94", uso: "H1 hero" },
  { token: "text-display-h2-xl",   sample: "Hablemos.", resolve: "clamp(60px, 8vw, 140px)", lh: "0.94", uso: "H2 super grande" },
  { token: "text-display-h2",      sample: "Áreas de práctica.", resolve: "clamp(40px, 5vw, 84px)", lh: "0.98", uso: "H2 sección" },
  { token: "text-display-counter", sample: "08+",   resolve: "clamp(44px, 9vw, 140px)", lh: "1.0", uso: "Stats hero (Counter)" },
  { token: "text-display-card",    sample: "Litigio Mercantil", resolve: "clamp(22px, 2vw, 26px)", lh: "1.15", uso: "Heading de card" },
];

const easings = [
  { name: "ease-premium", curve: "cubic-bezier(0.22, 1, 0.36, 1)", uso: "Default · entradas · reveals" },
  { name: "ease-elegant", curve: "cubic-bezier(0.65, 0, 0.35, 1)", uso: "Estados simétricos" },
  { name: "ease-spring",  curve: "cubic-bezier(0.34, 1.56, 0.64, 1)", uso: "Magnetic button overshoot" },
];

const toc = [
  { n: "01", label: "Color",            id: "color" },
  { n: "02", label: "Tipografía",       id: "tipografia" },
  { n: "03", label: "Spacing & layout", id: "spacing" },
  { n: "04", label: "Surfaces & cards", id: "surfaces" },
  { n: "05", label: "Componentes",      id: "componentes" },
  { n: "06", label: "Patterns",         id: "patterns" },
  { n: "07", label: "Patterns jurídicos", id: "juridicos" },
  { n: "08", label: "Estados",          id: "estados" },
  { n: "09", label: "Motion",           id: "motion" },
  { n: "10", label: "Responsive",       id: "responsive" },
  { n: "11", label: "A11y · contrast",  id: "a11y" },
  { n: "12", label: "Excepciones",      id: "excepciones" },
  { n: "13", label: "Anti-patterns",    id: "anti" },
  { n: "14", label: "Quick reference",  id: "ref" },
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
              <p className="font-sans text-ui-meta uppercase text-gold-600 font-medium">
                Internal · No-index · v2
              </p>
              <p className="font-sans text-ui-label uppercase text-bone-50 font-medium">
                Bissu Abogados — Design System
              </p>
            </div>
          </div>
          <h1 className="font-display font-normal text-bone-50 leading-[0.94] tracking-tightest text-display-hero balance">
            La pluma, la tinta y el{" "}
            <span className="italic">pliego de oro</span>
            <span className="text-gold-400">.</span>
          </h1>
          <div className="mt-12 max-w-2xl flex gap-5">
            <span className="pleca pleca-lg shrink-0 mt-1.5" aria-hidden />
            <p className="font-body text-bone-50 text-body-intro balance">
              Living style guide del sistema visual de Bissu. Tokens semánticos, tipografía,
              motion, componentes, patterns jurídicos y estados en un solo lugar. Para la guía
              narrativa completa leer{" "}
              <code className="font-sans text-[14px] text-gold-600">/docs/DESIGN_SYSTEM.md</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout: sticky TOC + content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 grid grid-cols-12 gap-8">
        {/* Sticky TOC */}
        <aside className="hidden xl:block col-span-2">
          <nav className="sticky top-32 space-y-1">
            <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium mb-4 pb-3 border-b border-bone-50/12">
              Índice
            </p>
            <ul className="space-y-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block py-1.5 font-sans text-[11px] tracking-[0.06em] text-bone-300 hover:text-gold-400 transition-colors"
                  >
                    <span className="text-gold-600 mr-2 tabular">{item.n}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="col-span-12 xl:col-span-10">
          {/* 01 Color */}
          <Section id="color" n="01" label="Color">
            <Block title="Brand" desc="Tres tokens canónicos del manual de marca de Bissu. Inviolables.">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "brand.black", hex: "#231F20" },
                  { name: "brand.gold",  hex: "#B4975A" },
                  { name: "brand.white", hex: "#FFFFFF" },
                ].map((s) => <Swatch key={s.name} {...s} />)}
              </div>
            </Block>

            <Block title="ink-* — Surfaces" desc="Cream cálido. ink-900 default, ink-800 sección alterna.">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {inkScale.map((s) => <Swatch key={s.name} {...s} />)}
              </div>
            </Block>

            <Block title="bone-* — Text & ink (con ratios)" desc="Tokens de texto. bone-50 default. bone-300 muted. bone-400 SOLO uppercase pequeñas o text ≥18px.">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {boneScale.map((s) => <Swatch key={s.name} {...s} />)}
              </div>
            </Block>

            <Block title="gold-* — Único acento" desc="Escaso por diseño. gold-400 = capital point '.'. gold-600 = labels uppercase. NUNCA grandes áreas (excepción única en §12).">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {goldScale.map((s) => <Swatch key={s.name} {...s} />)}
              </div>
            </Block>

            <Block title="Border opacity scale" desc="Modulación de la 'tinta' para borders. Usar exactamente la opacidad listada por contexto.">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { op: "/[0.02]", uso: "Bg card" },
                  { op: "/[0.04]", uso: "Bg card alt" },
                  { op: "/12",     uso: "Border card · default" },
                  { op: "/15",     uso: "Section · nav" },
                  { op: "/20",     uso: "Form field · success" },
                  { op: "/25",     uso: "Input idle" },
                ].map((s) => (
                  <div key={s.op} className="border border-bone-50/12 bg-bone-50/[0.02] p-4">
                    <div className={`h-12 mb-3 border border-bone-50${s.op}`} />
                    <p className="font-sans text-[11px] tracking-[0.06em] text-bone-50 font-medium tabular">{s.op}</p>
                    <p className="mt-1 font-body text-[12px] text-bone-300">{s.uso}</p>
                  </div>
                ))}
              </div>
            </Block>
          </Section>

          {/* 02 Tipografía */}
          <Section id="tipografia" n="02" label="Tipografía">
            <Block title="Tokens semánticos (preferir sobre literales)" desc="text-display-* y text-ui-* resuelven con clamp + lh + tracking en un solo token. Usar estos en código nuevo.">
              <div className="space-y-7">
                {semanticType.map((t) => (
                  <div key={t.token} className="border-l border-gold-400/40 pl-6">
                    <Caption>{t.token} · {t.uso}</Caption>
                    <p className={`font-display font-normal text-bone-50 ${t.token}`}>
                      {t.sample}
                      {t.token.startsWith("text-display") && !t.sample.endsWith(".") && !t.sample.endsWith("+") && (
                        <span className="text-gold-400">.</span>
                      )}
                    </p>
                    <p className="mt-2 font-sans text-[11px] tracking-[0.06em] text-bone-300 tabular">
                      {t.resolve} · LH {t.lh}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="font-body · Libre Baskerville" desc="Párrafos editoriales. Italic OK para énfasis. text-body-* tokens semánticos.">
              <div className="space-y-7">
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>text-body-intro · Intro grande</Caption>
                  <p className="font-body text-bone-50 text-body-intro max-w-2xl balance">
                    Despacho boutique en CDMX especializado en{" "}
                    <span className="italic">litigio complejo</span> y arbitraje internacional.
                  </p>
                </div>
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>text-body-default · Body párrafo</Caption>
                  <p className="font-body text-bone-50 text-body-default max-w-xl pretty">
                    Atendemos cada asunto con el equipo titular del despacho. Sin intermediarios,
                    sin escalamientos, sin sorpresas.
                  </p>
                </div>
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>text-body-card · Body interno de card</Caption>
                  <p className="font-body text-bone-300 text-body-card max-w-md pretty">
                    Contratos, daños y perjuicios, derechos individuales y homologación
                    de sentencias extranjeras en México.
                  </p>
                </div>
              </div>
            </Block>

            <Block title="font-sans · Manrope · uppercase" desc="TODO el UI uppercase es Manrope. Tracking positivo según jerarquía.">
              <div className="space-y-5">
                {trackingScale.map((t) => (
                  <div key={t.token} className="border-l border-gold-400/40 pl-6">
                    <Caption>{t.token} · {t.uso}</Caption>
                    <p className="font-sans text-[12px] uppercase text-bone-50 font-medium" style={{ letterSpacing: t.val }}>
                      Agenda consulta gratuita
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Editorial typographic features" desc="Utilities CSS para small-caps, oldstyle nums, swashes. Aprovechar los font-features de Playfair y Manrope.">
              <div className="space-y-5">
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>.smallcaps</Caption>
                  <p className="font-display text-bone-50 text-[24px] smallcaps">Manifiesto Bissu Abogados</p>
                </div>
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>.oldstyle (años en bio)</Caption>
                  <p className="font-display text-bone-50 text-[24px] oldstyle">Universidad Panamericana, 2008–2013</p>
                </div>
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>.tabular / .lining (counters)</Caption>
                  <p className="font-display text-bone-50 text-[24px] tabular">2026 · 1,284 · 99213</p>
                </div>
                <div className="border-l border-gold-400/40 pl-6">
                  <Caption>.drop-cap (intro Firma / Manifiesto)</Caption>
                  <p className="font-body text-bone-50 text-body-default max-w-2xl drop-cap">
                    En 2017 fundamos Bissu con una idea clara. La justicia compleja merece atención
                    boutique, no la línea de producción de los grandes despachos. Tres socios titulares,
                    cada caso defendido como si fuera propio.
                  </p>
                </div>
              </div>
            </Block>
          </Section>

          {/* 03 Spacing */}
          <Section id="spacing" n="03" label="Spacing & layout">
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

            <Block title="Section padding vertical" desc="Hero, normal, mid-CTA bridge.">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "py-24 sm:py-32 lg:py-40", uso: "Sección normal" },
                  { label: "py-16 sm:py-20 lg:py-24", uso: "Mid-CTA bridge" },
                  { label: "pt-44 sm:pt-52 pb-16 sm:pb-20", uso: "Hero" },
                ].map((s) => (
                  <div key={s.label} className="border border-bone-50/12 bg-bone-50/[0.02] p-6">
                    <p className="font-display text-bone-50 text-display-card">{s.label}</p>
                    <p className="mt-2 font-sans text-ui-meta uppercase text-bone-300 font-medium">{s.uso}</p>
                  </div>
                ))}
              </div>
            </Block>
          </Section>

          {/* 04 Surfaces */}
          <Section id="surfaces" n="04" label="Surfaces & cards">
            <Block title="3 variantes oficiales de card" desc="Sin sombras. Border hairline + bg sutil + backdrop-blur.">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                <article className="group relative border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
                  <p className="font-sans text-ui-meta uppercase text-gold-600 font-medium mb-4">Default</p>
                  <h3 className="font-display text-bone-50 text-display-card mb-3">Card default</h3>
                  <p className="font-body text-bone-300 text-body-card pretty">
                    bg-bone-50/[0.02] · sobre cualquier sección.
                  </p>
                </article>

                <article className="group relative border border-bone-50/12 bg-ink-800/40 backdrop-blur-sm p-7 lg:p-8 overflow-hidden">
                  <span aria-hidden className="absolute top-0 left-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span aria-hidden className="absolute bottom-0 right-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span aria-hidden className="absolute bottom-0 right-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="font-sans text-ui-meta uppercase text-gold-600 font-medium mb-4">Deep</p>
                  <h3 className="font-display text-bone-50 text-display-card mb-3 group-hover:text-gold-600 transition-colors duration-500">
                    Card deep + corner brackets
                  </h3>
                  <p className="font-body text-bone-300 text-body-card pretty">
                    bg-ink-800/40 · gana peso óptico cuando la sección también es ink-900. Hover muestra brackets.
                  </p>
                </article>

                <article className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6">
                  <p className="font-display text-display-counter text-bone-50 tabular mb-3">
                    <span>6</span><span className="text-gold-400">+</span>
                  </p>
                  <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium">Áreas activas</p>
                  <p className="font-sans text-ui-micro uppercase text-gold-600 font-medium mt-1">Stat compacto</p>
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

          {/* 05 Componentes */}
          <Section id="componentes" n="05" label="Componentes interactivos">
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

            <Block title="CTA secundario · plain" desc='Sin magnetic. font-medium permitido. Para cards y bridges.'>
              <a
                href="#x"
                className="group inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 text-ui-cta uppercase font-medium hover:bg-gold-400 transition-colors"
              >
                Agenda tu consulta
                <span className="text-base leading-none arrow-drift">→</span>
              </a>
            </Block>

            <Block title="SectionLabel" desc="Pleca + número uppercase + label. Header de toda sección.">
              <SectionLabel n="04" label="Áreas de práctica" />
            </Block>

            <Block title="AwardBadge — 4 íconos" desc="Stroke-only SVGs en gold-400. laurel / medal / diamond / star.">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <AwardBadge icon="laurel" subtitle="Best Lawyers" year="2026" title="The Best Lawyers in Mexico" href="#x" />
                <AwardBadge icon="medal" subtitle="Leaders League" year="2025" title="Resolución de Conflictos · México" />
                <AwardBadge icon="diamond" subtitle="Tops · Diamante" year="2025" title="Los Mejores Abogados de México" />
                <AwardBadge icon="star" subtitle="Chambers" year="2024" title="Reconocimiento individual" />
              </div>
            </Block>

            <Block title="Counter" desc="Número animado tabular. Acepta delay, padding y prefix/suffix.">
              <p className="font-display text-display-counter text-bone-50 tabular">
                <Counter to={8} pad={2} />
                <span className="text-gold-400">+</span>
              </p>
              <p className="mt-3 font-sans text-ui-label uppercase text-bone-50 font-medium">
                Años defendiendo casos en México
              </p>
            </Block>
          </Section>

          {/* 06 Patterns */}
          <Section id="patterns" n="06" label="Patterns recurrentes">
            <Block title="Capital point gold" desc="Toda title cierra con punto en gold-400. Inviolable salvo §12.">
              <p className="font-display text-bone-50 text-[60px] leading-none tracking-tightest">
                Hablemos<span className="text-gold-400">.</span>
              </p>
            </Block>

            <Block title="Italic key phrase" desc="Una frase clave por title va italic.">
              <p className="font-display text-bone-50 text-[60px] leading-[0.98] tracking-tightest balance">
                Casos representativos de <span className="italic">litigio y arbitraje</span><span className="text-gold-400">.</span>
              </p>
            </Block>

            <Block title="Pleca" desc="Marca vertical gold con gradient. Tres tamaños: sm/md/lg.">
              <div className="flex items-end gap-12">
                {[
                  { cls: "pleca-sm", label: "pleca-sm · 24px" },
                  { cls: "pleca-md", label: "pleca-md · 40px" },
                  { cls: "pleca-lg", label: "pleca-lg · 64px" },
                ].map((p) => (
                  <div key={p.cls} className="flex flex-col items-center gap-2">
                    <span className={`pleca ${p.cls}`} aria-hidden />
                    <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-bone-300 font-medium">{p.label}</span>
                  </div>
                ))}
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
                <span className="font-sans text-ui-label uppercase text-bone-50 font-medium">
                  Disponible esta semana
                </span>
              </div>
            </Block>

            <Block title="Pleca-prefixed label" desc="Header pequeño con pleca + label uppercase + hairline.">
              <div className="flex items-center gap-3 max-w-md">
                <span className="pleca pleca-sm" aria-hidden />
                <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium">
                  Reconocidos por
                </p>
                <span className="flex-1 h-px bg-bone-50/15 ml-3" aria-hidden />
              </div>
            </Block>

            <Block title="Fig. XX caption" desc="Caption Manrope para imagen full-bleed + coords/meta opcional a la derecha.">
              <div className="flex items-baseline justify-between flex-wrap gap-2 max-w-2xl">
                <p className="font-sans text-ui-label uppercase text-bone-300 font-medium">
                  Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
                </p>
                <p className="font-sans text-ui-label uppercase text-bone-300 font-medium tabular">
                  19.4326° N · 99.1332° W
                </p>
              </div>
            </Block>

            <Block title="Ghost number gigante" desc="Italic Playfair, opacidad 2.5%, fuera del flujo. Una por sección.">
              <div className="relative h-48 overflow-hidden border border-bone-50/12 bg-bone-50/[0.02]">
                <span
                  className="absolute -left-4 top-1/2 -translate-y-1/2 font-display italic text-[280px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
                  aria-hidden
                >
                  04
                </span>
                <p className="absolute bottom-5 left-5 font-sans text-ui-meta uppercase text-bone-300 font-medium">
                  Ejemplo · ghost número decorativo
                </p>
              </div>
            </Block>

            <Block title="Mini sparkline" desc="6–8 barras gold. Refuerza una stat sin gráfico complejo.">
              <div className="flex items-end gap-1 h-3" aria-hidden>
                {[0.4, 0.55, 0.45, 0.7, 0.65, 0.8, 0.75, 0.95].map((h, i) => (
                  <span key={i} className="w-1.5 bg-gold-400/30" style={{ height: `${h * 100}%` }} />
                ))}
              </div>
            </Block>

            <Block title="Trust strip" desc="Awards line bajo CTA. Dot separator '·' entre items.">
              <div className="pt-6 border-t border-bone-50/12 flex items-center gap-4 flex-wrap max-w-3xl">
                <span className="font-sans text-ui-meta uppercase text-bone-400 font-medium">
                  Reconocidos por
                </span>
                <span className="font-sans text-ui-meta uppercase text-bone-50 font-medium tracking-[0.22em]">
                  Best Lawyers Mexico 2026
                </span>
                <span className="text-bone-50/30">·</span>
                <span className="font-sans text-ui-meta uppercase text-bone-50 font-medium tracking-[0.22em]">
                  Leaders League 2025
                </span>
              </div>
            </Block>
          </Section>

          {/* 07 Patterns jurídicos */}
          <Section id="juridicos" n="07" label="Patterns jurídicos / editoriales premium">
            <Block title="Citation block" desc="Testimonio cliente o cita jurisprudencial. Border-left gold + italic Playfair + figcaption manrope.">
              <figure className="border-l border-gold-400 pl-6 py-2 max-w-2xl">
                <blockquote className="font-display italic text-bone-50 text-[24px] leading-[1.35] balance">
                  El equipo de Bissu nos resolvió un litigio que tres despachos previos habían descartado.
                </blockquote>
                <figcaption className="mt-4 font-sans text-ui-meta uppercase text-bone-300 font-medium">
                  — Director Jurídico · Empresa industrial · Sector manufactura
                </figcaption>
              </figure>
            </Block>

            <Block title="Footnote editorial" desc="Numerito volado con anchor a nota al pie. Para datos, sentencias citadas, estadísticas.">
              <div className="max-w-2xl">
                <p className="font-body text-bone-50 text-body-default">
                  Las negociaciones extrajudiciales reducen el ciclo promedio en concurso mercantil
                  hasta un 40%
                  <sup className="font-sans text-[10px] text-gold-600 ml-0.5 align-super cursor-help">
                    <a href="#fn1" className="no-underline">1</a>
                  </sup>
                  , especialmente cuando el deudor mantiene operatividad.
                </p>
                <aside className="mt-10 pt-6 border-t border-bone-50/12">
                  <p className="font-body text-body-micro text-bone-300">
                    <sup id="fn1" className="text-gold-600 mr-2">1</sup>
                    Datos validados por SCJN, Ley de Concursos Mercantiles art. 145.
                  </p>
                </aside>
              </div>
            </Block>

            <Block title="Bluebook citation" desc="Formato de cita legal estándar internacional. Indent negativo + small uppercase para autoridad.">
              <div className="max-w-2xl border-l border-bone-50/15 pl-6 py-2">
                <p className="font-body text-body-micro text-bone-300 indent-[-1.5em] pl-6">
                  <span className="font-sans uppercase text-ui-meta text-gold-600 font-medium">SCJN, </span>
                  Amparo en revisión 1284/2015, sentencia de 15 de junio de 2016, ponente Min. Gutiérrez Ortiz Mena.
                </p>
                <p className="font-body text-body-micro text-bone-300 indent-[-1.5em] pl-6 mt-3">
                  <span className="font-sans uppercase text-ui-meta text-gold-600 font-medium">CCI, </span>
                  Reglamento de Arbitraje 2021, art. 28 (medidas cautelares).
                </p>
              </div>
            </Block>

            <Block title="Pull quote (lateral)" desc="Frase clave float-right en cuerpo largo. Solo lg+ (mobile colapsa). Border-t y border-b gold/40.">
              <div className="max-w-3xl">
                <aside className="float-right w-[40%] ml-8 my-2 hidden lg:block">
                  <p className="font-display italic text-[28px] leading-[1.2] text-bone-50 border-t border-b border-gold-400/40 py-5 balance">
                    Sin intermediarios, sin escalamientos, sin sorpresas.
                  </p>
                </aside>
                <p className="font-body text-bone-50 text-body-default pretty">
                  Atendemos cada asunto con el equipo titular del despacho. La consulta inicial la
                  toma un socio. La estrategia la define un socio. La ejecución, la supervisa un socio.
                  Esto no es un eslogan: es el modelo operativo desde 2017. Para una firma boutique,
                  es la única forma honesta de cobrar lo que cobramos.
                </p>
                <div className="clear-both" />
              </div>
            </Block>

            <Block title="Glyph divider — § ❧ ✦" desc="Transición entre secciones / capítulos. Default § (legal). Variantes: ❧ editorial cálido, ✦ luxury, ⁂ asterism.">
              <div className="space-y-4">
                {["§", "❧", "✦", "⁂"].map((g) => (
                  <div key={g} className="glyph-divider !my-2" aria-hidden>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Marginalia (Tufte-style)" desc="Notas al margen, sticky. Grid 1fr / 220px. Solo lg+.">
              <div className="grid lg:grid-cols-[1fr_220px] lg:gap-8 max-w-4xl">
                <article>
                  <p className="font-body text-bone-50 text-body-default pretty">
                    En el procedimiento de concurso mercantil, la fase de conciliación tiene como objetivo
                    central la celebración del convenio. Si las partes no llegan a un acuerdo en el plazo
                    legal, el proceso transita automáticamente a la fase de quiebra.
                  </p>
                </article>
                <aside className="font-sans text-ui-micro tracking-[0.18em] uppercase text-bone-400 leading-[1.7] lg:sticky lg:top-32 self-start">
                  Las negociaciones extrajudiciales reducen 40% el ciclo promedio en concurso mercantil.
                </aside>
              </div>
            </Block>
          </Section>

          {/* 08 Estados */}
          <Section id="estados" n="08" label="Estados (disabled / loading / error / empty / success)">
            <Block title="Disabled" desc="opacity-40 + cursor-not-allowed + pointer-events-none.">
              <button disabled className="bg-bone-50 text-ink-900 px-7 py-3.5 text-ui-cta uppercase font-medium opacity-40 cursor-not-allowed pointer-events-none">
                Enviando…
              </button>
            </Block>

            <Block title="Loading inline (CTA)" desc="Spinner border + animate-spin junto al copy.">
              <span className="inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 text-ui-cta uppercase font-medium">
                <span className="w-3 h-3 border border-bone-50/40 border-t-gold-400 rounded-full animate-spin" />
                Enviando…
              </span>
            </Block>

            <Block title="Error de form" desc="Color burgundy #A04545 (no red puro). Microcopy uppercase.">
              <div className="max-w-sm">
                <label className="font-sans text-ui-meta uppercase text-bone-300 font-medium block mb-3">
                  Correo<span className="text-gold-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="mail incompleto"
                  className="w-full bg-transparent border-b border-[#A04545] focus:outline-none py-2.5 text-bone-50 text-[14px] font-body transition-colors"
                />
                <p className="mt-2 font-sans text-ui-meta uppercase text-[#A04545] font-medium">
                  Correo no válido
                </p>
              </div>
            </Block>

            <Block title="Empty state" desc="Border dashed + italic display + body micro.">
              <div className="border border-dashed border-bone-50/15 p-10 text-center max-w-md">
                <p className="font-display italic text-bone-300 text-[24px] mb-2">Sin resultados</p>
                <p className="font-body text-body-card text-bone-400">Intentá otra búsqueda o filtro.</p>
              </div>
            </Block>

            <Block title="Success de form" desc="Pattern oficial — ya implementado en Contacto post-submit.">
              <div className="max-w-md p-8 border border-bone-50/20 bg-bone-50/[0.02]">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-400 mb-6">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-400" fill="none">
                    <path d="M5 12.5 L10 17.5 L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="font-display text-bone-50 text-[28px] tracking-tightest mb-4 balance">
                  Recibimos tu mensaje<span className="text-gold-400">.</span>
                </p>
                <p className="font-body text-bone-50 text-body-default">
                  Un abogado titular te va a contactar en menos de 24 horas hábiles.
                </p>
              </div>
            </Block>
          </Section>

          {/* 09 Motion */}
          <Section id="motion" n="09" label="Motion">
            <Block title="Easings disponibles" desc="Default ease-premium. ease-spring solo en magnetic button.">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {easings.map((e) => (
                  <div key={e.name} className="border border-bone-50/12 bg-bone-50/[0.02] p-6">
                    <p className="font-sans text-ui-meta uppercase text-gold-600 font-medium mb-3">{e.name}</p>
                    <p className="font-display text-bone-50 text-[15px] leading-tight mb-3">{e.uso}</p>
                    <code className="font-sans text-[11px] text-bone-300 break-all">{e.curve}</code>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="Reveal en scroll" desc="<Reveal delay={120}>...</Reveal>. y=28→0, opacity 0→1, 0.85s.">
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
                <li className="flex gap-3"><span className="text-gold-400 shrink-0">·</span><span>Toda animación con <code className="font-sans text-[13px] text-gold-600">useTransform</code> debe condicionarse: <code className="font-sans text-[13px] text-gold-600">style={"{ reduce ? {} : { y } }"}</code>.</span></li>
              </ul>
            </Block>
          </Section>

          {/* 10 Responsive */}
          <Section id="responsive" n="10" label="Responsive discipline">
            <Block title="Breakpoints — cuándo usar cuál" desc="Mobile-first. md solo si layout cambia. xl raro. 2xl prohibido.">
              <div className="overflow-x-auto">
                <table className="w-full font-body text-[14px] text-bone-50">
                  <thead className="text-ui-meta uppercase text-bone-300 font-medium">
                    <tr className="border-b border-bone-50/15">
                      <th className="text-left py-3 pr-4">Breakpoint</th>
                      <th className="text-left py-3 pr-4 tabular">px</th>
                      <th className="text-left py-3">Cuándo usar</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans text-[13px]">
                    {[
                      ["(default)", "0",    "Mobile, primera regla siempre"],
                      ["sm",        "640",  "Mobile-large"],
                      ["md",        "768",  "Solo si layout cambia (e.g. tablet 2-col)"],
                      ["lg",        "1024", "Desktop primary, splits 7/5 acá"],
                      ["xl",        "1280", "Solo H1 hero (escala extra) + refinamientos finales"],
                      ["2xl",       "1536", "❌ No usar — container capped a 1440"],
                    ].map(([bp, px, uso]) => (
                      <tr key={bp} className="border-b border-bone-50/10">
                        <td className="py-3 pr-4 text-bone-50 tabular">{bp}</td>
                        <td className="py-3 pr-4 text-gold-600 tabular">{px}</td>
                        <td className="py-3 text-bone-300">{uso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
          </Section>

          {/* 11 A11y */}
          <Section id="a11y" n="11" label="Accessibility · contrast ratios">
            <Block title="Contrast ratios concretos sobre ink-900" desc="Calculados sobre #FBF8F1. Decisión rápida: dónde se puede usar cada token.">
              <div className="overflow-x-auto">
                <table className="w-full font-sans text-[13px] text-bone-50">
                  <thead className="text-ui-meta uppercase text-bone-300 font-medium">
                    <tr className="border-b border-bone-50/15">
                      <th className="text-left py-3 pr-4">Token</th>
                      <th className="text-left py-3 pr-4 tabular">Ratio</th>
                      <th className="text-left py-3 pr-4">Nivel</th>
                      <th className="text-left py-3">Uso seguro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tok: "bone-50",  ratio: "15.4:1", lvl: "AAA todos", ok: "✓ Body, headings, todo" },
                      { tok: "bone-300", ratio: "5.6:1",  lvl: "AA / AAA Large", ok: "✓ Captions, secondary, mid-uppercase" },
                      { tok: "bone-400", ratio: "3.4:1",  lvl: "AA Large only", ok: "⚠ Solo uppercase ≥10px tracking ≥0.22em o text ≥18px" },
                      { tok: "gold-600", ratio: "4.9:1",  lvl: "AA normal", ok: "✓ Labels uppercase 10–11px" },
                      { tok: "gold-500", ratio: "3.5:1",  lvl: "AA Large only", ok: "✓ Hover highlights ≥18px" },
                      { tok: "gold-400", ratio: "2.7:1",  lvl: "Falla AA",  ok: "❌ NUNCA texto. Solo decoración" },
                    ].map((r) => (
                      <tr key={r.tok} className="border-b border-bone-50/10">
                        <td className="py-3 pr-4 text-bone-50 tabular">{r.tok}</td>
                        <td className="py-3 pr-4 text-gold-600 tabular">{r.ratio}</td>
                        <td className="py-3 pr-4 text-bone-300">{r.lvl}</td>
                        <td className="py-3 text-bone-300">{r.ok}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
          </Section>

          {/* 12 Excepciones */}
          <Section id="excepciones" n="12" label="Excepciones documentadas">
            <Block title="Reglas con casos donde no aplican" desc="Pre-aprobadas. No reabrir sin discusión.">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {[
                  { title: "Capital point '.'", body: "NO en: nombres propios (Samuel Bissu Bazbaz), headers de columna en tablas, counters tipo '8+', wordmarks." },
                  { title: "Hard edges", body: "rounded-full SÍ en: dots de live ping, pulse rings, icon circles (check/cross), avatars, spinners loading. NUNCA en cards/inputs/buttons." },
                  { title: "Surface variant", body: "bg-ink-800/40 (deep card) — usado en Areas service cards. Variante oficial." },
                  { title: "Gold como bg area", body: "Única excepción: bg-gold-400/[0.06] en columna BISSU del componente Comparacion. No replicar." },
                  { title: "CTA font-weight", body: "Primarias (hero/navbar/sticky): font-semibold. Secundarias (card/bridge/FAQ): font-medium permitido." },
                  { title: "md: en typography", body: "Saltar md: en text-* es OK — heredas sm:. Usar md: solo si cambia layout (1-col → 2-col)." },
                ].map((e) => (
                  <div key={e.title} className="border-l border-gold-400/40 pl-6">
                    <p className="font-display text-bone-50 text-[20px] leading-[1.2] mb-2">
                      {e.title}<span className="text-gold-400">.</span>
                    </p>
                    <p className="font-body text-body-card text-bone-300 pretty">{e.body}</p>
                  </div>
                ))}
              </div>
            </Block>
          </Section>

          {/* 13 Anti-patterns */}
          <Section id="anti" n="13" label="Anti-patterns">
            <Block title="NUNCA" desc="Si lo ves, corregilo.">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl font-body text-bone-50 text-[14px] leading-[1.7]">
                {[
                  "Sombras (shadow-md, shadow-2xl). Reemplazar por borders hairline.",
                  "bg-white o bg-black puros como surface.",
                  "Gradientes saturados (azul/violeta) como bg de sección.",
                  "Iconos Lucide / Heroicons / 3D / emoji (salvo glyphs §❧✦).",
                  "Em-dashes (—) en prosa.",
                  "<br> en captions o copy.",
                  "Bold en font-display (Playfair). Solo font-normal.",
                  "Más de 1 brush underline por sección.",
                  "Más de 1 ghost number gigante por sección.",
                  "Capital point '.' en cualquier color que no sea gold-400.",
                  "Cards con border-radius (excepto dots/avatars).",
                  "Letter-spacing negativo en sans (es para serif).",
                  "Texto en gold-400 o bone-400 como body párrafo (contrast fail).",
                  "text-[Npx] literal cuando existe token semántico (text-display-h2, text-ui-cta).",
                  "Inventar variantes de motion cuando hay 3 easings nombrados.",
                ].map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="text-gold-600 shrink-0 font-display italic text-[18px] leading-none mt-0.5">×</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </Section>

          {/* 14 Quick reference */}
          <Section id="ref" n="14" label="Quick reference">
            <Block title="Cheat sheet" desc="Imprimir y pegar al lado del monitor.">
              <pre className="font-mono text-[12px] leading-[1.8] text-bone-50 border border-bone-50/12 bg-bone-50/[0.02] p-6 overflow-x-auto whitespace-pre">
{`COLORS
  bg:    ink-900 (default), ink-800 (alt section)
  text:  bone-50 (primary), bone-300 (muted), gold-600 (uppercase labels)
  accent: gold-400 (only on lines, dots, capital point ".")
  borders: bone-50/12 default · /20 forms · /15 sections

FONTS (semantic preferred)
  display:  text-display-{hero,h2-xl,h2,counter,card}  → Playfair
  body:     text-body-{intro,default,card,micro}       → Libre Baskerville
  ui:       text-ui-{cta,label,meta,micro}             → Manrope uppercase

LAYOUT
  container: max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14
  grid:      grid-cols-12 gap-y-12 lg:gap-x-12
  splits:    7/5 (text/img), 8/4 (text/sidebar), 6/6 (forms)
  section:   py-24 sm:py-32 lg:py-40   (mid: py-16 sm:py-20 lg:py-24)

CARD (3 variants)
  default: border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8
  deep:    border border-bone-50/12 bg-ink-800/40    backdrop-blur-sm p-7 lg:p-8
  compact: border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6

CTA
  primary:   text-ui-cta uppercase font-semibold (MagneticButton)
  secondary: text-ui-cta uppercase font-medium   (plain anchor)

EASING (default)
  cubic-bezier(0.22, 1, 0.36, 1)   →   ease-premium

REVEAL
  <Reveal delay={120}>...</Reveal>

CAPITAL POINT (toda title — excepciones §12)
  <span className="text-gold-400">.</span>

ITALIC ACCENT (1 frase por title)
  <span className="italic">...</span>`}
              </pre>
            </Block>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 mt-32 pt-10 border-t border-bone-50/12">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium">
            Living style guide · Bissu Abogados · v2
          </p>
          <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium">
            Fuente: <code className="text-gold-600">/docs/DESIGN_SYSTEM.md</code>
          </p>
        </div>
      </div>
    </main>
  );
}

/* ----------------- Local helpers ----------------- */

function Section({ id, n, label, children }: { id: string; n: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative border-b border-bone-50/10 py-20 sm:py-28 scroll-mt-24">
      <div className="flex items-center gap-5 mb-12">
        <span className="pleca pleca-md" aria-hidden />
        <div className="flex flex-col gap-1">
          <span className="font-sans text-ui-meta uppercase text-gold-600 font-medium">{n}</span>
          <span className="font-sans text-ui-label uppercase text-bone-50 font-medium">{label}</span>
        </div>
      </div>
      <div className="space-y-16">{children}</div>
    </section>
  );
}

function Block({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display font-normal text-bone-50 text-[26px] sm:text-[32px] leading-[1.15] tracking-tightest mb-2 balance">
        {title}<span className="text-gold-400">.</span>
      </h3>
      {desc && (
        <p className="font-body text-bone-300 text-body-card max-w-2xl mb-7 pretty">{desc}</p>
      )}
      <div>{children}</div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-ui-meta uppercase text-bone-300 font-medium mb-3">
      {children}
    </p>
  );
}

function Swatch({ name, hex, role }: { name: string; hex: string; role?: string }) {
  const isLight = ["#FBF8F1", "#EDE5D2", "#E0D4B7", "#FFFFFF", "#E9D7A7", "#D4B97A"].includes(hex);
  return (
    <div className="border border-bone-50/12 bg-bone-50/[0.02]">
      <div className="aspect-[4/3] flex items-end p-4" style={{ background: hex }}>
        <span
          className={`font-sans text-[10px] tracking-[0.28em] uppercase font-semibold tabular ${isLight ? "text-[#231F20]" : "text-[#FBF8F1]"}`}
        >
          {hex}
        </span>
      </div>
      <div className="p-4">
        <p className="font-sans text-ui-label uppercase text-bone-50 font-medium">{name}</p>
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
      <div className={`${COL_SPAN[split[0]]} bg-bone-50/[0.04] border border-bone-50/12 h-12 flex items-center justify-center font-sans text-ui-meta uppercase text-bone-300 font-medium`}>
        col-span-{split[0]}
      </div>
      <div className={`${COL_SPAN[split[1]]} bg-gold-400/10 border border-gold-400/25 h-12 flex items-center justify-center font-sans text-ui-meta uppercase text-gold-600 font-medium`}>
        col-span-{split[1]}
      </div>
    </div>
  );
}

function FormField({ label, required }: { label: string; required?: boolean }) {
  return (
    <div>
      <label className="font-sans text-ui-meta uppercase text-bone-300 font-medium block mb-3">
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
