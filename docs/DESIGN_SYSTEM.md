# Bissu Abogados — Design System

> **Single source of truth para diseño visual.** Antes de crear o modificar cualquier sección, página o componente, leer este documento y respetar tokens, patrones y motion sin re-deliberar.

> **Live reference**: la ruta `/design-system` (en este mismo proyecto) renderiza tokens y componentes en vivo. Útil para inspección visual rápida y para validar consistencia.

---

## 1. Filosofía

Bissu es un **despacho boutique de litigio y arbitraje en CDMX** con presencia institucional (Best Lawyers Mexico 2026, Leaders League 2025). El sistema visual proyecta:

- **Editorial luxury**: revista premium impresa más que dashboard tech. Tipografía serif protagonista, baselines amplias, ritmo pausado.
- **Refined minimalism con tensión**: superficies generosas + un único acento gold + un único momento dramático por sección (kinetic title, parallax image, brush underline).
- **Trust through restraint**: nada de gradientes saturados, sombras blandas o iconografía 3D. La autoridad se construye con materiales nobles (paper, ink, gold leaf), no con efectos.
- **Intencionalidad**: cada decimal de letter-spacing, cada `tracking-[0.22em]`, cada delay de animación está calibrado. **No improvisar valores nuevos** sin razón — usar la escala documentada.

**Inspiración aceptable**: Aman Resorts, Bottega Veneta editorial, monografías Gagosian, suplemento dominical de Le Monde, the Browser Company website, Linear changelog, Loro Piana storytelling.

**Anti-inspiración**: dashboards SaaS, marketing pages "modernas" con gradiente azul-violeta, hero con video de stock, glass-morphism heavy, neumorphism, bento grids saturados de color.

---

## 2. Brand Foundations (Manual oficial)

Tres tokens canónicos del manual de marca de Bissu:

| Token | HEX | Uso |
|---|---|---|
| `brand.black` | `#231F20` | Texto, ink puro, logo |
| `brand.gold` | `#B4975A` | Acento único — pleca, capital point ".", italic underline, líneas finas |
| `brand.white` | `#FFFFFF` | Reserva editorial |

Estos tres son **inviolables**. La paleta extendida (`ink`, `bone`, `gold`) deriva de ellos para uso programático.

---

## 3. Color Tokens

Todos los tokens viven en `tailwind.config.ts`. Usar siempre la clase Tailwind, nunca el HEX inline.

### `ink-*` — Surfaces (paper)

Cream cálido. La página es paper, no fondo.

| Token | HEX | Uso |
|---|---|---|
| `ink-900` | `#FBF8F1` | **Page bg**. Default warm paper. |
| `ink-800` | `#EDE5D2` | **Alternating section** (perceptiblemente más profundo). Usar para 1–2 secciones máximo por scroll. |
| `ink-700` | `#E0D4B7` | Reservado. |
| `ink-600` | `#CFC09C` | Reservado. |
| `ink-500` | `#B7A57F` | Reservado. |

> Nunca pure white (`#FFFFFF`) como bg de sección. Rompe la atmósfera paper.

### `bone-*` — Text & ink

Confusing nombre histórico (vienen de un tema dark previo). Hoy son tokens de **texto e ink**.

| Token | HEX | Uso |
|---|---|---|
| `bone-50` | `#231F20` | **Texto primario**. Brand black. Default para todo. |
| `bone-100` | `#1A1718` | Hover de bone-50 sobre bg paper (raro). |
| `bone-200` | `#100E0F` | Reservado. |
| `bone-300` | `#5A5253` | **Texto secundario** (subtítulos, captions, labels muted). |
| `bone-400` | `#8A8082` | Texto terciario (timestamps, deshabilitado). |

> `bone-50/15`, `bone-50/12`, `bone-50/[0.02]`, etc. son los borders y backgrounds de cards. Memorizar: `border-bone-50/12 bg-bone-50/[0.02]`.

### `gold-*` — Accent (único acento)

El gold es **escaso por diseño**. Si una sección lo usa más de 3 veces, está mal calibrada.

| Token | HEX | Uso |
|---|---|---|
| `gold-100` | `#E9D7A7` | Lighter highlight (raro). |
| `gold-200` | `#D4B97A` | Mid-tone para gradientes (pleca, brush underline). |
| `gold-300` | `#C2A368` | Mid-tone para gradientes. |
| `gold-400` | `#B4975A` | **Brand gold canónico**. Pulse dot, capital point ".", links activos. |
| `gold-500` | `#9A7E45` | Hover de gold-400. |
| `gold-600` | `#7C6435` | **Labels & subtítulos uppercase** ("01", "Reconocidos por", subtitle de cards). |

**Reglas de oro (literalmente):**
- Nunca usar gold para grandes áreas. Solo líneas, puntos, hairlines, hover states, capital point ".".
- Toda sección termina su título con `<span className="text-gold-400">.</span>`. Es la firma editorial.
- En links externos: `↗` en `text-bone-400 group-hover:text-gold-500`.

---

## 4. Typography

Tres familias. Cada una tiene un **rol fijo** — nunca intercambiar.

### Stack

```ts
// tailwind.config.ts
fontFamily: {
  display: ["var(--font-display)", "Playfair Display", "serif"],
  sans:    ["var(--font-sans)",    "Manrope", "system-ui", "sans-serif"],
  body:    ["var(--font-body)",    "Libre Baskerville", "Baskerville", "serif"],
}
```

### `font-display` — Playfair Display

**Uso**: H1, H2, números grandes (counters), italic phrases dramáticas, wordmark "Bissu".

| Property | Value | Por qué |
|---|---|---|
| `font-weight` | `400` (normal), nunca bold | Playfair en bold rompe la elegancia |
| `tracking` | `tracking-tightest` (`-0.025em`) | Cierra el ojo tipográfico a tamaños grandes |
| `leading` | `0.94`–`0.98` para H1/H2 | Densidad editorial |
| `text-wrap` | `balance` | Líneas balanceadas en headlines |
| Italic | `<span className="italic">` para frases clave | Ritmo y jerarquía |

**Escala display** (mobile → desktop):

| Nivel | Mobile | Tablet | Desktop | XL | Uso |
|---|---|---|---|---|---|
| Hero H1 | 40px | 60px → 80px | 104px | 120px | `text-[40px] sm:text-[60px] md:text-[80px] lg:text-[104px] xl:text-[120px]` |
| H2 sección | 40px | 60px | 84px | — | `text-[40px] sm:text-[60px] lg:text-[84px]` |
| H2 supergrande | 60px | 100px | 140px | — | `text-[60px] sm:text-[100px] lg:text-[140px]` (ej. footer wordmark, "Hablemos.") |
| Counter hero | 88px | — | 120px → 140px | — | Stats principales |
| Counter satélite | 44px | 56px | — | — | Stats secundarios |
| Card heading | 22px | 24px | 26px | — | `text-[22px] sm:text-2xl lg:text-[26px]` |

### `font-body` — Libre Baskerville

**Uso**: párrafos editoriales largos, intro paragraphs, lista de servicios dentro de cards, microcopy de fondo.

| Property | Value |
|---|---|
| `font-weight` | `400` (normal) o `700` (rare) |
| `leading` | `1.55`–`1.75` |
| Italic | OK para énfasis editorial corto |

**Escala body**:

| Nivel | Size | Uso |
|---|---|---|
| Intro grande | 17px → 19px | `text-[17px] sm:text-[19px] leading-[1.55]` |
| Body default | 15px | `text-[15px] leading-[1.7]` |
| Card body | 13px | `text-[13px] leading-[1.7] pretty` |
| Microcopy | 12px | `text-[12px] leading-[1.65]` |

### `font-sans` — Manrope

**Uso**: **TODO el UI uppercase**: labels, badges, CTAs, timestamps, pesos editoriales, navegación.

> Si está en uppercase, es Manrope. Si tiene `tracking-[0.XXem]`, es Manrope. Sin excepción.

| Tracking token | Valor | Uso típico |
|---|---|---|
| `tracking-[0.18em]` | 0.18em | Body uppercase mid (subtítulos meta) |
| `tracking-[0.22em]` | 0.22em | **Default UI label** — CTAs, nav, social, badges |
| `tracking-[0.24em]` | 0.24em | Sticky CTA mobile |
| `tracking-[0.28em]` | 0.28em | Stats labels, captions Fig. XX |
| `tracking-[0.32em]` | 0.32em | Small numerals ("01"), section meta, label de columna |

**Escala sans uppercase** (siempre `font-medium` o `font-semibold`):

| Size | Uso |
|---|---|
| `text-[9px]` | Hint micro (ej. "En vivo" en stat) |
| `text-[10px]` | Label default sobre card oscuro / pleca-prefixed labels |
| `text-[11px]` | CTA / nav / badge primario |
| `text-[12px]` | Section title bajo el "01" en SectionLabel |

> **Regla**: las CTAs primarias siempre `font-sans text-[11px] tracking-[0.22em] uppercase font-semibold`.

---

## 5. Spacing & Layout

### Container

```tsx
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
```

- Max-width fija **1440px** (no 1280, no 1536).
- Padding lateral progresivo: 24/40/56px.
- **Nunca** introducir un container distinto sin razón fortísima.

### Grid

12 columnas siempre, gap progresivo:

```tsx
<div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
  <div className="col-span-12 lg:col-span-7"> ... </div>
  <div className="col-span-12 lg:col-span-5"> ... </div>
</div>
```

Splits canónicos: **7/5** (texto/imagen) y **8/4** (texto/sidebar). 6/6 solo en formularios.

### Section padding vertical

| Tipo | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero (top) | `pt-44` | `sm:pt-52` | — |
| Hero (bottom) | `pb-16` | `sm:pb-20` | — |
| Sección normal | `py-24` | `sm:py-32` | `lg:py-40` |
| Bloque interno | `mt-20` | `sm:mt-28` | — |

### Stack interno (mt entre elementos relacionados)

`mt-3` (1 línea visual), `mt-6` (subgrupo), `mt-10`/`mt-12` (subsección), `mt-16`/`mt-20` (bloque dentro de sección), `mt-24`/`mt-28` (bloques mayores).

---

## 6. Surfaces & Elevation

**No hay sombras.** No `shadow-md`, no `shadow-2xl`. La elevación se hace con **borders hairline + bg muy sutil + backdrop-blur**.

### Card canónica (estilo único)

```tsx
<div className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8">
  ...
</div>
```

- Border `bone-50/12`: el "stroke" que define el card sin gritar.
- Bg `bone-50/[0.02]`: tinta apenas presente, da peso óptico.
- Backdrop-blur-sm: solo si está sobre gradient mesh / image.
- Padding canónico: `p-6 sm:p-8` (cards comunes), `p-7 lg:p-8` (cards grandes), `p-5 sm:p-6` (cards satélite/compactas).

### Hover de card

`whileHover={{ y: -3 }}` con `spring stiffness 320 damping 26`. Border puede pasar a `gold-400/40`.

### Corner brackets (cards de Áreas)

Para cards con énfasis premium, agregar 4 esquinas de gold que aparecen en hover:

```tsx
<span aria-hidden className="absolute top-0 left-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute bottom-0 right-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute bottom-0 right-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
```

---

## 7. Motion

### Easings (CSS variables ya definidas)

```css
--ease-premium: cubic-bezier(0.22, 1, 0.36, 1);  /* default — entradas suaves */
--ease-elegant: cubic-bezier(0.65, 0, 0.35, 1);  /* simétrico — transiciones de estado */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* overshoot mínimo — botones */
```

Tailwind expone: `ease-premium`, `ease-elegant`, `ease-spring`.

> **Default absoluto**: `--ease-premium` para reveals y micro-interacciones.

### Durations

| Tipo | Duración |
|---|---|
| Hover state (color, opacity) | `duration-500` |
| Hover state (transform) | `duration-300`–`450ms` |
| Reveal (default) | `0.85s` |
| Reveal fast | `0.55s` |
| Image clip-reveal | `1.4s`–`1.6s` |
| Word rise (kinetic title) | `1s` con stagger `0.11s` |
| Brush underline | `1.4s` con delay `1.2s`–`1.6s` |
| Scroll smooth | `smooth` nativo |

### Patrones de motion canónicos (usar estos antes de inventar)

**1. Reveal en scroll** — `<Reveal>` (componente)

```tsx
import Reveal from "@/components/Reveal";

<Reveal>
  <h2>...</h2>
</Reveal>
<Reveal delay={120}>
  <p>...</p>
</Reveal>
```

Variants: `hidden { opacity: 0, y: 28 }` → `show { opacity: 1, y: 0 }`. `delay` en milisegundos. Una vez disparado, no se repite (`once: true`).

**2. Stagger container** (cuando reveals dependen unos de otros)

```tsx
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const childVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
```

Stagger típico: `0.06`–`0.11s` entre hijos.

**3. Kinetic title** (Hero) — palabras suben desde abajo

Wrap cada palabra en `<span className="word-mask">` (overflow hidden) con `<motion.span variants={wordVariants}>` adentro. Variant: `hidden { y: "115%", opacity: 0, skewY: 3 }` → `show { y: 0, opacity: 1, skewY: 0 }`. Stagger 0.11.

Reservado para H1 de hero o "Hablemos." de sección contacto.

**4. Brush underline** (italic accent)

Aparece debajo de un grupo italic clave 1.2–1.6s después del title:

```tsx
<motion.span
  aria-hidden
  className="absolute left-0 right-0 bottom-[0.06em] h-[0.08em] origin-left"
  style={{
    background: "linear-gradient(to right, transparent 0%, #B4975A 8%, #C2A368 50%, #B4975A 92%, transparent 100%)",
  }}
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
/>
```

Solo **una** brush underline por sección, ideal solo en hero.

**5. Image clip-reveal**

```tsx
<motion.div
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  whileInView={{ clipPath: "inset(0 0 0 0)" }}
  viewport={{ once: true, margin: "-10% 0px" }}
  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
>
  <Image ... />
</motion.div>
```

Útil para imagen full-bleed después del hero o dentro de sección.

**6. Hover lift de card**

```tsx
whileHover={reduce ? undefined : { y: -3 }}
transition={{ type: "spring", stiffness: 320, damping: 26 }}
```

**7. Magnetic button** — usar componente `<MagneticButton>` (no recrear).

**8. Parallax sutil**

```tsx
const { scrollY } = useScroll();
const imgY = useTransform(scrollY, [0, 1200], [0, 100]);
const imgScale = useTransform(scrollY, [0, 1200], [1, 1.06]);
```

### Reduced motion

**Siempre** envolver animaciones complejas en `useReducedMotion()` y devolver `initial={"show"}` o sin transform si reduce. Los keyframes globales ya están manejados en `globals.css` con `@media (prefers-reduced-motion: reduce)`.

---

## 8. Iconography

### Pleca — el ícono principal

Marca vertical gold con gradient (manual sect. 1.10). **Es el ícono brand-defining**. Usar antes que cualquier ícono SVG genérico.

```tsx
<span className="pleca pleca-md" aria-hidden />
```

Variants: `pleca-sm` (24px), `pleca-md` (40px), `pleca-lg` (64px).

**Casos de uso**:
- Antes de cada SectionLabel
- Antes de columnas de detail (`Detail` component)
- Antes de stat labels
- Como divider visual entre subgrupos

### Hairline divider

```tsx
<div className="hairline-gold opacity-60" aria-hidden />
```

Línea horizontal de 1px con gold gradient fade.

### Award icons (laurel / medal / diamond / star)

Stroke-only SVGs en `gold-400`. Usar via `<AwardBadge>`. No mezclar con icon set diferente.

### Area icons (scale, trade, balance, family, column, handshake)

Definidos inline en `Areas.tsx` (`AreaIcon` component). Stroke 1.5, viewBox 32. Reusar.

### Iconos terceros

**Ningún Lucide, Heroicons o Phosphor por default.** Si hace falta un nuevo icono:
1. Primero ver si existe ya en el repo.
2. Si no, crear inline SVG estilo "stroke 1.5, currentColor, viewBox cuadrado", paleta `gold-400` o `bone-50/`.
3. Documentarlo acá si va a reusarse.

---

## 9. Componentes (catálogo)

> Usar siempre el componente existente. No reescribir patrones.

### Layout / Atomic

| Componente | Uso |
|---|---|
| `<Reveal delay={120}>` | Fade-up on scroll (intersection observer) |
| `<FadeIn>` | Fade simple sin scroll trigger |
| `<SectionLabel n="04" label="Áreas" />` | Header de sección con pleca + número + label |
| `<Counter to={8} delay={1.2} pad={2} />` | Número animado |
| `<Pleca>` (utility class) | Marca vertical gold |

### Interactive

| Componente | Uso |
|---|---|
| `<MagneticButton href="#x" variant="dark/light/ghost" external>` | CTA con magnetic mouse + gradient sweep |
| `<WhatsAppButton />` | FAB flotante |
| `<StickyCTA />` | Bottom bar mobile |
| `<ScrollProgress />` | Hairline gold tracker top |

### Surfaces

| Componente | Uso |
|---|---|
| `<AwardBadge icon="laurel" subtitle="..." year="2026" title="..." href="..." />` | Badge de reconocimiento |
| Card pattern (no componente) | Ver §6 |

### Sections (no reusar tal cual — son únicas por landing)

`Hero`, `Areas`, `Casos`, `Comparacion`, `FAQ`, `Contacto`, `Footer`, `Navbar`, `Pleca`, `MidCTA`, `EditorialBreak`, `TopMarquee`, `Reconocimientos`, `Abogados`, `Personas`, `Recursos`, `Proceso`, `Firma`, `Clientes`.

### Botones — variantes oficiales

**Primary (dark, default)**

```tsx
<MagneticButton href="#contacto">
  Agenda consulta gratuita
  <span className="text-base leading-none arrow-drift">→</span>
</MagneticButton>
```

Bg ink (negro brand) → text cream. Hover: gradient sweep a gold.

**Light**

```tsx
<MagneticButton href="#x" variant="light">...</MagneticButton>
```

Bg cream → text ink. Inverso del dark.

**Ghost (text-only with underline)**

```tsx
<MagneticButton href="https://wa.me/x" external variant="ghost">
  WhatsApp directo
  <span className="text-base leading-none">↗</span>
</MagneticButton>
```

**Sin estilo magnetic (`<a>` directo)** — usar para CTAs secundarios dentro de cards:

```tsx
<a
  href="#contacto"
  className="inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 font-sans text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-gold-400 transition-colors group"
>
  Agenda tu consulta
  <span className="text-base leading-none arrow-drift">→</span>
</a>
```

### Form fields — patrón canónico

```tsx
<div>
  <label className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium block mb-3">
    Nombre completo<span className="text-gold-600 ml-1">*</span>
  </label>
  <input
    type="text"
    className="w-full bg-transparent border-b border-bone-50/25 focus:border-gold-400 focus:outline-none py-2.5 text-bone-50 text-[14px] font-body transition-colors"
  />
</div>
```

- **Borde inferior**, no caja completa. Editorial.
- Bg transparente.
- Focus state: `border-gold-400`.
- Label uppercase Manrope `text-[10px] tracking-[0.32em] text-bone-300`.

---

## 10. Patrones recurrentes (memorizar)

### "Fig. XX · Caption"

Cada imagen full-bleed lleva caption Manrope abajo:

```tsx
<p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium">
  Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
</p>
<p className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone-300 font-medium tabular">
  19.4326° N · 99.1332° W
</p>
```

Numerar las figuras correlativamente (Fig. 01, Fig. 02...). Coords geográficas o metadatos a la derecha — opcional pero firma editorial.

### Live ping dot (disponibilidad / actualidad)

```tsx
<span className="relative flex h-2 w-2 shrink-0">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
</span>
```

Uso: badge "Disponible esta semana", "En vivo", indicadores de tiempo real.

### Numeración tipográfica decorativa

Número gigante `font-display italic` con opacidad `bone-50/[0.025]` posicionado fuera del flujo a la derecha o izquierda detrás del contenido:

```tsx
<div
  className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
  aria-hidden
>
  04
</div>
```

Uso: detrás de Areas (04), Casos (05), Comparacion (06), etc. **Una sola por sección**.

### Capital point gold

Cada title termina con `.` en gold:

```tsx
<h2>Áreas de <span className="italic">práctica jurídica</span><span className="text-gold-400">.</span></h2>
```

**Inviolable**. Es la firma de la marca.

### Pleca-prefixed label

```tsx
<div className="flex items-center gap-3">
  <span className="pleca pleca-sm" aria-hidden />
  <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone-300 font-medium">
    Reconocidos por
  </p>
  <span className="flex-1 h-px bg-bone-50/15 ml-3" aria-hidden />
</div>
```

Pleca + label uppercase + (opcional) hairline derivada que llena el resto.

### Italic key phrase

Una frase clave por bloque va italic:

```tsx
<h2>Casos representativos de <span className="italic">litigio y arbitraje</span><span className="text-gold-400">.</span></h2>
```

### Mini-sparkline / bar visual

Para reforzar estadística, agregar 6–8 barras pequeñas gold:

```tsx
<div className="flex items-end gap-1 h-3" aria-hidden>
  {[0.4, 0.55, 0.45, 0.7, 0.65, 0.8, 0.75, 0.95].map((h, i) => (
    <span key={i} className="w-1.5 bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors duration-500" style={{ height: `${h * 100}%` }} />
  ))}
</div>
```

### Asymmetric bento (3+1 / 1+3)

Stat principal `col-span-2 lg:col-span-3` + 3 satélites `col-span-1`. No 4 idénticos.

```tsx
<div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
  <StatHero className="col-span-2 lg:col-span-3" />
  <StatSatellite className="col-span-1" />
  <StatSatellite className="col-span-1" />
  <StatSatellite className="col-span-1" />
</div>
```

### Trust strip horizontal (Reconocidos por...)

Inline list de logros + dots separators bajo CTA:

```tsx
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
```

### Tabular numbers

Para todo número que se compare visualmente (counters, stats, coords): `className="tabular"` (utility custom = `font-variant-numeric: tabular-nums`).

---

## 11. Background & Atmosphere

### Page-wide grain overlay

Activo por default en `body::before`. SVG noise multiply `opacity 0.32`. **Nunca desactivar**, nunca duplicar.

### Atmospheric gradient mesh (hero)

```tsx
<div
  className="absolute inset-0 pointer-events-none"
  aria-hidden
  style={{
    background:
      "radial-gradient(ellipse 80% 60% at 18% 38%, rgba(180,151,90,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 82% 22%, rgba(180,151,90,0.06) 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 50% 90%, rgba(35,31,32,0.05) 0%, transparent 60%)",
  }}
/>
```

Solo en hero o secciones flagship. Opacity gold 6–10%, ink 5%. Nunca subir.

### Image filter editorial

```tsx
style={{ filter: "saturate(0.85) contrast(1.04)" }}
```

Toda imagen editorial (hero, sección photos) debe pasar por ese filter. Saca lo "stock photo".

### Image vignette (radial)

```tsx
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: "radial-gradient(ellipse at center, transparent 55%, rgba(35,31,32,0.22) 100%)",
  }}
  aria-hidden
/>
```

Solo en imagen full-bleed (hero photo). Centrado, 22% en bordes.

---

## 12. Voice & Microcopy

### Idioma & registro

- **Español mexicano formal** (cliente Bissu). Nunca rioplatense ("vos/podés"). Usar "tú" o impersonal ("le respondemos en 24 horas").
- Palabras: "despacho jurídico", "abogado titular", "consulta", "asesoría", "litigio", "arbitraje". Evitar "estudio jurídico" (rioplatense).
- Estados: "Disponible", "En vivo", "Verificado", "Reconocido".

### Microcopy patterns

| Contexto | Copy canónico |
|---|---|
| CTA primaria | "Agenda consulta gratuita" / "Agenda tu consulta" / "Agenda una cita" |
| CTA WA | "WhatsApp directo" |
| Trust strip | "20 min · Sin compromiso · Vía video o presencial" |
| Trust strip 2 | "20 min · Sin compromiso", "Respuesta en menos de 24 hs", "Secreto profesional garantizado" |
| Stat phrasing | "Años defendiendo casos en México", "Áreas activas", "Respuesta inicial" |
| Promise list | "Dictamen escrito en 24 horas", "Honorarios transparentes desde el día 1", "Atención directa con abogado titular" |
| Submit success | "Recibimos tu mensaje." con "Un abogado titular te va a contactar en menos de 24 horas hábiles." |
| Card CTA | "Consultar caso" / "Hacer una pregunta" |

### Reglas de copy

- **Nunca em-dash** (—). Usar punto, coma, dos puntos o paréntesis.
- Separar bloques con saltos de línea reales, **nunca `<br>`**.
- Capital point gold al final de cada title (ver §10).
- Italic en frase clave del title (ver §10).
- Numerales con `tabular-nums` siempre.

---

## 13. Accessibility

- **Focus ring**: `gold-400` 2px outline-offset 3px. Definido global en `globals.css`. No remover.
- **Reduced motion**: handler global + hooks de framer (`useReducedMotion`). Toda nueva animación debe respetar.
- **Selection color**: `gold-400` 32% / text ink. Definido global.
- **Contraste**: bone-50 (`#231F20`) sobre ink-900 (`#FBF8F1`) → AA. bone-300 (`#5A5253`) sobre ink-900 → AA para tamaño ≥14px. Verificar siempre.
- **`aria-hidden`** en ornamentos puramente visuales (pleca, hairlines, mini sparkline, ghost numbers, icons decorativos).
- **`aria-label`** en botones icon-only (WhatsApp button: `aria-label="Escríbenos por WhatsApp"`).

---

## 14. Anti-patterns (NUNCA)

- ❌ Sombras (`shadow-md`, `shadow-2xl`...). Reemplazar por borders hairline.
- ❌ `bg-white` o `bg-black` puros como surface.
- ❌ Gradientes saturados como bg de sección (azul/violeta/etc.).
- ❌ Iconos Lucide / Heroicons / 3D / emoji.
- ❌ Em-dashes en prosa.
- ❌ `<br>` en captions/copy.
- ❌ Bold en `font-display` (Playfair). Solo `font-normal`.
- ❌ Múltiples brush underlines en una sección.
- ❌ Más de 1 ghost number gigante por sección.
- ❌ Capital point en cualquier color que no sea `text-gold-400`.
- ❌ Cards con border-radius. Todo en hard edges.
- ❌ Letter-spacing negativo en sans (es para serif). Sans usa tracking positivo en uppercase.
- ❌ Emojis (salvo el aprobado: `→`, `↗`, `·`).

---

## 15. Cuándo crear nuevo componente vs reusar

| Situación | Acción |
|---|---|
| Nuevo CTA en sección | Reusar `<MagneticButton>` o el patrón link CTA secundario. |
| Card con stat / counter | Reusar bento pattern §6. |
| Section header | Reusar `<SectionLabel n="XX" label="..." />`. |
| Reveal en scroll | Reusar `<Reveal>` o variants stagger §7.2. |
| Award/badge | Reusar `<AwardBadge>` agregando `icon` si hace falta. |
| Photo + caption | Patrón Fig. XX §10. |
| Pattern visual nuevo | **Documentar acá antes de implementar en sección.** |

---

## 16. Cómo extender el sistema

1. **Tokens** (color, spacing, font) → editar `tailwind.config.ts` + esta documentación.
2. **Animations / patterns globales** → editar `globals.css` + §7 / §10 acá.
3. **Componentes shared** → archivo en `src/components/` + listar en §9.
4. **Variantes de pattern existente** (ej. nueva variant de `MagneticButton`) → extender el componente, agregar a §9 con descripción y screenshot/demo.
5. **Toda nueva sección de landing** → leer §1, §3, §4, §5, §6, §7 antes de empezar. Inspirarse de Hero/Areas/Casos antes de improvisar.

---

## 17. Quick reference card

```
COLORS
  bg:    ink-900 (default), ink-800 (alt section)
  text:  bone-50 (primary), bone-300 (muted), gold-600 (uppercase labels)
  accent: gold-400 (only on lines, dots, capital point ".")

FONTS
  display: Playfair Display (font-display, italic accents)  → H1/H2, counters
  body:    Libre Baskerville (font-body)                     → paragraphs
  sans:    Manrope (font-sans, uppercase tracking-[0.22em])  → ALL UI labels

LAYOUT
  container: max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14
  grid:      grid-cols-12 gap-y-12 lg:gap-x-12
  splits:    7/5 (text/img), 8/4 (text/sidebar), 6/6 (forms)

SECTION RHYTHM
  py-24 sm:py-32 lg:py-40

CARD
  border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8

BUTTON CTA
  font-sans text-[11px] tracking-[0.22em] uppercase font-semibold

EASING
  cubic-bezier(0.22, 1, 0.36, 1)   → entradas, default
  spring stiffness 320 damping 26   → hover lift cards

REVEAL
  <Reveal delay={120}>...</Reveal>
  variants: hidden { opacity: 0, y: 28 } → show { y: 0 }

CAPITAL POINT
  Toda title termina: <span className="text-gold-400">.</span>

ITALIC ACCENT
  Una frase clave por title: <span className="italic">...</span>
```

---

**Última actualización**: 2026-05-09. Mantener actualizado al introducir nuevas variantes o patterns.
