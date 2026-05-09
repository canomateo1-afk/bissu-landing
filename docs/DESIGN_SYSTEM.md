# Bissu Abogados — Design System

> **Single source of truth para diseño visual.** Antes de crear o modificar cualquier sección, página o componente, leer este documento y respetar tokens, patrones y motion sin re-deliberar.

> **Live reference**: la ruta `/design-system` (en este mismo proyecto) renderiza tokens y componentes en vivo. Útil para inspección visual rápida y para validar consistencia.

> **Prioridad de tokens**: usar **siempre** primero los tokens semánticos (`text-display-h2`, `text-ui-label`...) antes de los literales (`text-[40px]`). Ver §4.

---

## Tabla de contenidos

1. [Filosofía](#1-filosofía)
2. [Brand foundations](#2-brand-foundations)
3. [Color tokens](#3-color-tokens)
4. [Typography (semántica + literal)](#4-typography)
5. [Spacing & layout](#5-spacing--layout)
6. [Surfaces & elevation](#6-surfaces--elevation)
7. [Motion](#7-motion)
8. [Iconography](#8-iconography)
9. [Componentes (catálogo completo)](#9-componentes-catálogo-completo)
10. [Patterns recurrentes](#10-patterns-recurrentes)
11. [Patterns jurídicos / editoriales premium](#11-patterns-jurídicos--editoriales-premium)
12. [Estados (disabled / loading / error / empty / success)](#12-estados)
13. [Background & atmosphere](#13-background--atmosphere)
14. [Voice & microcopy](#14-voice--microcopy)
15. [Responsive discipline](#15-responsive-discipline)
16. [Accessibility (con ratios concretos)](#16-accessibility)
17. [Anti-patterns](#17-anti-patterns)
18. [Excepciones documentadas](#18-excepciones-documentadas)
19. [Quick reference](#19-quick-reference)
20. [Backlog / nice-to-have](#20-backlog--nice-to-have)

---

## 1. Filosofía

Bissu es un **despacho boutique de litigio y arbitraje en CDMX** con presencia institucional (Best Lawyers Mexico 2026, Leaders League 2025). El sistema visual proyecta:

- **Editorial luxury**: revista premium impresa más que dashboard tech. Tipografía serif protagonista, baselines amplias, ritmo pausado.
- **Refined minimalism con tensión**: superficies generosas + un único acento gold + un único momento dramático por sección (kinetic title, parallax image, brush underline).
- **Trust through restraint**: nada de gradientes saturados, sombras blandas o iconografía 3D. La autoridad se construye con materiales nobles (paper, ink, gold leaf), no con efectos.
- **Intencionalidad**: cada decimal de letter-spacing, cada delay de animación está calibrado. **No improvisar valores** sin razón — usar la escala documentada o agregar tokens nuevos al sistema antes de usarlos.

**Inspiración aceptable**: Aman Resorts, Bottega Veneta editorial, monografías Gagosian, suplemento dominical de Le Monde, Loro Piana storytelling, the Browser Company website.

**Anti-inspiración**: dashboards SaaS, marketing pages "modernas" con gradiente azul-violeta, hero con video de stock, glass-morphism heavy, neumorphism, bento grids saturados de color.

---

## 2. Brand foundations

Tres tokens canónicos del manual de marca de Bissu:

| Token | HEX | Uso |
|---|---|---|
| `brand.black` | `#231F20` | Texto, ink puro, logo |
| `brand.gold` | `#B4975A` | Acento único — pleca, capital point ".", italic underline, líneas finas |
| `brand.white` | `#FFFFFF` | Reserva editorial |

Estos tres son **inviolables**. La paleta extendida (`ink`, `bone`, `gold`) deriva de ellos para uso programático.

---

## 3. Color tokens

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
| `bone-400` | `#8A8082` | Texto terciario (timestamps, meta uppercase). **Nunca body párrafo** — falla AA. |

### Border opacity scale (`bone-50/N`)

Modulación de la "tinta" para borders, hairlines y backgrounds sutiles. Memorizar la tabla:

| Opacity | Uso canónico |
|---|---|
| `bone-50/[0.02]` | Bg de card sobre `ink-900` |
| `bone-50/[0.04]` | Variante leve de bg card |
| `bone-50/12` | **Border default de card** (hairline visible) |
| `bone-50/15` | Border de section / nav / hairlines en bandas |
| `bone-50/20` | Border de form field / divider sutil |
| `bone-50/25` | Border de input idle |
| `bone-50/30` | Reservado (raro) |
| `bone-50/40` | Estados activos / hover de inputs |

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
- **Excepción documentada**: `bg-gold-400/[0.06]` en columna BISSU del componente `Comparacion`. Es el único uso de gold como background area — usado para distinguir "tu opción" en tabla comparativa. **No replicar** en otra sección.
- Toda sección termina su título con `<span className="text-gold-400">.</span>` (capital point — ver §10 + excepciones §18).
- En links externos: `↗` en `text-bone-400 group-hover:text-gold-500`.

---

## 4. Typography

Tres familias. Cada una tiene un **rol fijo** — nunca intercambiar.

### Stack

```ts
fontFamily: {
  display: ["var(--font-display)", "Playfair Display", "serif"],
  sans:    ["var(--font-sans)",    "Manrope", "system-ui", "sans-serif"],
  body:    ["var(--font-body)",    "Libre Baskerville", "Baskerville", "serif"],
}
```

### Tokens semánticos (preferir sobre literales)

Definidos en `tailwind.config.ts > theme.extend.fontSize`. **Default para nuevo código**:

| Token | Resuelve a | Uso |
|---|---|---|
| `text-display-hero` | `clamp(40px, 6.5vw, 120px)` · LH `0.94` · LS `-0.025em` | H1 hero |
| `text-display-h2-xl` | `clamp(60px, 8vw, 140px)` · LH `0.94` · LS `-0.025em` | H2 super grande (footer wordmark, "Hablemos.") |
| `text-display-h2` | `clamp(40px, 5vw, 84px)` · LH `0.98` · LS `-0.025em` | H2 sección |
| `text-display-card` | `clamp(22px, 2vw, 26px)` · LH `1.15` | Heading de card |
| `text-display-counter` | `clamp(44px, 9vw, 140px)` · LH `1.0` · LS `-0.025em` | Stats hero (Counter) |
| `text-body-intro` | `clamp(17px, 1.4vw, 19px)` · LH `1.55` | Intro grande bajo H1 |
| `text-body-default` | `15px` · LH `1.7` | Body párrafo |
| `text-body-card` | `13px` · LH `1.7` | Body interno de card |
| `text-body-micro` | `12px` · LH `1.65` | Microcopy (footnotes, helpers) |
| `text-ui-cta` | `11px` · LH `1` · LS `0.22em` | **Toda CTA primaria** (uppercase) |
| `text-ui-label` | `11px` · LH `1.4` · LS `0.22em` | UI labels uppercase |
| `text-ui-meta` | `10px` · LH `1.4` · LS `0.32em` | Captions Fig. XX, "01" small numerals |
| `text-ui-micro` | `9px` · LH `1.4` · LS `0.22em` | Hint micro ("En vivo", helper extremo) |

> **Regla**: en código nuevo escribir `text-display-h2 font-display font-normal text-bone-50`. Solo recurrir a `text-[Npx]` si el caso es una excepción visualmente justificada — y ahí documentarla como "one-off".

### Tracking microscale (sumada)

Para casos sub-uppercase intermedios:

| Token Tailwind | Equivalente | Uso |
|---|---|---|
| `tracking-ui-tight` | `0.06em` | Sub-uppercase H3 sans |
| `tracking-ui-snug` | `0.12em` | Display caps cortos |
| `tracking-ui-base` | `0.16em` | Mid uppercase headers |
| `tracking-[0.18em]` | 0.18em | Body uppercase mid |
| `tracking-[0.22em]` | 0.22em | **Default UI label · CTA** |
| `tracking-[0.28em]` | 0.28em | Stats labels · Fig. captions |
| `tracking-[0.32em]` | 0.32em | Section meta · "01" small numerals |
| `tracking-[0.42em]` | 0.42em | Wordmark sub ("Abogados" en Footer) |

### `font-display` — Playfair Display

| Property | Value | Por qué |
|---|---|---|
| `font-weight` | `400` (normal), nunca bold | Playfair en bold rompe la elegancia |
| `tracking` | `tracking-tightest` (`-0.025em`) | Cierra el ojo tipográfico a tamaños grandes |
| `leading` | `0.94`–`0.98` para H1/H2 | Densidad editorial |
| `text-wrap` | `balance` (en H1/H2) | Líneas balanceadas |
| Italic | `<span className="italic">` para frases clave | Ritmo y jerarquía |

### `font-body` — Libre Baskerville

| Property | Value |
|---|---|
| `font-weight` | `400` (normal) o `700` (raro) |
| `leading` | `1.55`–`1.75` |
| Italic | OK para énfasis editorial corto |
| `text-wrap` | `pretty` (en párrafos) |

### `font-sans` — Manrope

**Uso**: **TODO el UI uppercase**: labels, badges, CTAs, timestamps, navegación.

> Si está en uppercase, es Manrope. Si tiene tracking positivo, es Manrope. Sin excepción.

> Las CTAs primarias siempre `font-ui-cta uppercase font-semibold`. CTAs secundarias dentro de cards pueden usar `font-medium`.

### Editorial typographic features (CSS utility classes)

Definidas en `globals.css`:

| Clase | Aplica | Uso |
|---|---|---|
| `.smallcaps` | `font-variant-caps: all-small-caps` + `LS 0.04em` | Subtítulos serif con presencia editorial |
| `.oldstyle` | `font-variant-numeric: oldstyle-nums proportional-nums` | Años en bio cards (1989, 2017) — más editorial |
| `.lining` / `.tabular` | `lining-nums tabular-nums` | Counters, comparativas numéricas |
| `.swash` | `font-variant-alternates: swash(default)` | Frases italic clave del Hero (Playfair tiene swashes) |
| `.drop-cap` | `::first-letter` 5.5em italic gold float | Intro de Firma / Manifiesto |

### Text-wrap discipline

| Modo | Cuándo |
|---|---|
| `balance` | H1, H2, headlines de hasta ~6 líneas. |
| `pretty` | Párrafos body. Evita huérfana última línea. |
| sin nada | Meta uppercase, captions cortos, labels. |

---

## 5. Spacing & layout

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

Splits canónicos: **7/5** (texto/imagen), **8/4** (texto/sidebar), **6/6** (forms). En cards de área usar 1/2/3 cols (`md:grid-cols-2 lg:grid-cols-3`).

### Section padding vertical

| Tipo | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero (top) | `pt-44` | `sm:pt-52` | — |
| Hero (bottom) | `pb-16` | `sm:pb-20` | — |
| Sección normal | `py-24` | `sm:py-32` | `lg:py-40` |
| Mid-section (CTA bridge) | `py-16` | `sm:py-20` | `lg:py-24` |
| Bloque interno | `mt-20` | `sm:mt-28` | — |

### Stack interno

`mt-3` (1 línea), `mt-6` (subgrupo), `mt-10`/`mt-12` (subsección), `mt-16`/`mt-20` (bloque dentro de sección), `mt-24`/`mt-28` (bloques mayores).

### Gap spacing (tokens más usados)

`gap-2` (8px), `gap-3` (12px), `gap-4` (16px), `gap-5` (20px), `gap-6` (24px), `gap-12` (48px), `gap-16` (64px). Fuera de esto, justificar.

---

## 6. Surfaces & elevation

**No hay sombras.** No `shadow-md`, no `shadow-2xl`. La elevación se hace con **borders hairline + bg muy sutil + backdrop-blur**.

### 3 variantes oficiales de card

**Card default** (sobre `ink-900` o cualquier sección):

```tsx
<div className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8">...</div>
```

**Card "deep"** (cuando se requiere más peso óptico — ej. Areas service cards):

```tsx
<div className="border border-bone-50/12 bg-ink-800/40 backdrop-blur-sm p-7 lg:p-8">...</div>
```

**Card stat compacta** (counters):

```tsx
<div className="border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-5 sm:p-6">...</div>
```

### Hover de card

```tsx
whileHover={reduce ? undefined : { y: -3 }}
transition={{ type: "spring", stiffness: 320, damping: 26 }}
```

Border puede pasar a `gold-400/40` en hover si conviene énfasis.

### Corner brackets (cards de Áreas)

Cuatro líneas gold en esquinas opuestas que aparecen en hover. Reservado para cards de áreas de práctica o servicios premium:

```tsx
<span aria-hidden className="absolute top-0 left-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute bottom-0 right-0 w-8 h-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<span aria-hidden className="absolute bottom-0 right-0 h-8 w-px bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
```

---

## 7. Motion

### Easings

```css
--ease-premium: cubic-bezier(0.22, 1, 0.36, 1);  /* default — entradas suaves */
--ease-elegant: cubic-bezier(0.65, 0, 0.35, 1);  /* simétrico — transiciones de estado */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* overshoot mínimo — botones */
```

Tailwind: `ease-premium`, `ease-elegant`, `ease-spring`.

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

### Patterns canónicos

Ver el código en `Hero.tsx`, `Areas.tsx`, `Casos.tsx` para implementaciones de referencia.

**Reveal en scroll** — usar `<Reveal delay={120}>`.

**Stagger container** — `staggerChildren: 0.06–0.11`, `delayChildren: 0.1–0.35`.

**Kinetic title** — palabras en `<span className="word-mask">`, variants `{ y: "115%", opacity: 0, skewY: 3 } → { y: 0, opacity: 1, skewY: 0 }`. Stagger 0.11. Reservado para H1 hero o titles dramáticos.

**Brush underline** — gradient gold 8%/50%/92%/transparent, scaleX 0→1 con delay 1.6s. Solo **una** por sección.

**Image clip-reveal** — `clipPath: inset(0 100% 0 0) → inset(0 0 0 0)`, 1.6s.

**Hover lift card** — spring 320/26.

**Magnetic button** — usar `<MagneticButton>`.

**Parallax sutil** — `useScroll` + `useTransform` para `y` y `scale`.

### Reduced motion (regla operativa)

```tsx
const reduce = useReducedMotion();
const imgY = useTransform(scrollY, [0, 1200], [0, 100]);
// CSS global mata animation/transition pero NO los style={{ y: motionValue }}.
// Por eso forzar:
<motion.div style={reduce ? {} : { y: imgY }} />
```

Toda animación nueva con `useTransform` o `useMotionValue` debe respetar el toggle. Los keyframes globales y `<Reveal>` ya están manejados.

---

## 8. Iconography

### Pleca — el ícono principal

Marca vertical gold con gradient. **Es el ícono brand-defining**. Usar antes que cualquier ícono genérico.

```tsx
<span className="pleca pleca-md" aria-hidden />
```

Variants: `pleca-sm` (24px), `pleca-md` (40px), `pleca-lg` (64px).

### Hairline divider

```tsx
<div className="hairline-gold opacity-60" aria-hidden />
```

### Glyph dividers (editorial)

Para transiciones de sección/capítulo, usar la utility `.glyph-divider` con un glyph centrado:

```tsx
<div className="glyph-divider" aria-hidden>
  <span>§</span>
</div>
```

Glyphs aprobados:
- `§` — referencias legales (default Bissu)
- `❧` — sección editorial cálida
- `✦` — luxury accent
- `⁂` — asterism, raro

### Award icons (laurel / medal / diamond / star)

Stroke-only SVGs en `gold-400`. Usar via `<AwardBadge>`. No mezclar con icon set diferente.

### Area icons

Definidos inline en `Areas.tsx` (`AreaIcon`). Stroke 1.5, viewBox cuadrado. Reusar.

### Iconos terceros

**Ningún Lucide, Heroicons o Phosphor.** Si hace falta uno nuevo:
1. Ver si existe en repo.
2. Si no, inline SVG estilo "stroke 1.5, currentColor, viewBox cuadrado".
3. Documentarlo acá si va a reusarse.

---

## 9. Componentes (catálogo completo)

> Usar siempre el componente existente. No reescribir patterns.

### Layout / Atomic

| Componente | Uso |
|---|---|
| `<Reveal delay={120}>` | Fade-up on scroll (intersection observer) |
| `<FadeIn>` | Fade simple sin scroll trigger |
| `<SectionLabel n="04" label="..." />` | Header de sección con pleca + número + label |
| `<Counter to={8} delay={1.2} pad={2} />` | Número animado (acepta `prefix`/`suffix`) |
| `.pleca` (utility) | Marca vertical gold |

### Interactive

| Componente | Uso |
|---|---|
| `<MagneticButton href="..." variant="dark/light/ghost" external onClick>` | CTA principal (3 variants) |
| `<WhatsAppButton />` | FAB flotante WhatsApp |
| `<StickyCTA />` | Bottom bar mobile (aparece tras hero) |
| `<ScrollProgress />` | Hairline gold tracker top de página |
| `<Navbar />` | Top nav fija con scroll-spy |

### Surfaces

| Componente | Uso |
|---|---|
| `<AwardBadge icon="laurel/medal/diamond/star" subtitle="..." year="2026" title="..." href="..." />` | Badge de reconocimiento |
| `<Logo />` | Wordmark "Bissu Abogados" del Navbar |
| Card patterns (no componente único) | Ver §6 |

### Section components (cada uno con su pattern propio)

| Component | Pattern aportado | Token / spacing único |
|---|---|---|
| `Hero` | Kinetic title + parallax photo + bento stats + award row | `pt-44 sm:pt-52` · `text-display-hero` |
| `TopMarquee` | Marquee con fade-mask side-to-side | `animate-marquee` 60s |
| `Pleca` | Strip horizontal de plecas + texto manifesto corto | — |
| `Firma` | Sección "Quiénes somos" con bio del despacho + drop cap | `.drop-cap` |
| `Areas` | Grid 6 cards con corner brackets + ghost number "04" + image 4/3 | `bg-ink-800/40` (deep card) |
| `Proceso` | Timeline vertical con dots + lines + step cards | dots `w-[14px] rounded-full ring-4 ring-ink-900` |
| `Casos` | Featured case (7/5, metric `text-display-counter` + duración) + grid card cases con metric + image | `border-t border-b py-10/14` |
| `Comparacion` | Tabla 3-col comparativa con BISSU column highlighted | `bg-gold-400/[0.06]` (única excepción §3) |
| `Abogados` | Bio cards: pleca-lg + role + name `text-[40px]` + Estudios/Antecedentes blocks + contact grid | `border-t border-bone-50/20` |
| `Personas` | Grid de iconos + label corto (clientes a quienes servimos) | `gap-x-12` |
| `Reconocimientos` | Wall de premios + AwardBadge grid + logos | — |
| `Clientes` | Logos en filas con grayscale + hover saturate | `grayscale group-hover:grayscale-0` |
| `EditorialBreak` | Full-bleed image + quote overlay + double hairline + "BIS · 2017" mark | `h-[60vh] sm:h-[70vh] lg:h-[80vh]` |
| `MidCTA` | Bridge CTA: headline + italic accent + plain CTA inline + microcopy | `py-16 sm:py-20 lg:py-24` (mid-section padding §5) |
| `FAQ` | Accordion + sidebar "Hacer una pregunta →" | `lg:col-span-4 / 8` |
| `Recursos` | Cards de recursos (guías, papers) | — |
| `Contacto` | Form con tabs Contacta/Trabaja + form fields border-bottom + trust strip | `border-bone-50/25` |
| `Footer` | Wordmark gigante + columnas oficinas/contacto/redes + créditos | `text-display-h2-xl` |

> **Regla**: estos no se duplican como "section" en otra landing. Si se necesita una variante (e.g. Hero v5), se llama `Hero5.tsx` o se mete en `src/app/v5/`. Las versiones `v2/v3/v4` existentes son explorations legacy.

### Botones — variantes oficiales

**Primary (dark, default)** — `<MagneticButton>` magnetic + gradient sweep:

```tsx
<MagneticButton href="#contacto">
  Agenda consulta gratuita
  <span className="text-base leading-none arrow-drift">→</span>
</MagneticButton>
```

**Light** — `variant="light"` para fondos oscuros (raro hoy).

**Ghost** — `variant="ghost"` text-only border-bottom.

**CTA secundario plain** (dentro de cards, sin magnetic):

```tsx
<a
  href="#contacto"
  className="group inline-flex items-center gap-3 bg-bone-50 text-ink-900 px-7 py-3.5 text-ui-cta uppercase font-medium hover:bg-gold-400 transition-colors"
>
  Agenda tu consulta
  <span className="text-base leading-none arrow-drift">→</span>
</a>
```

> **CTAs primarias** (hero, navbar, sticky): `font-semibold`.
> **CTAs secundarias** (dentro de card, bridge): `font-medium`.

### Form fields — patrón canónico

Border inferior, bg transparente, focus gold. Editorial.

```tsx
<div>
  <label className="text-ui-meta uppercase text-bone-300 font-medium block mb-3">
    Nombre completo<span className="text-gold-600 ml-1">*</span>
  </label>
  <input
    type="text"
    className="w-full bg-transparent border-b border-bone-50/25 focus:border-gold-400 focus:outline-none py-2.5 text-bone-50 text-[14px] font-body transition-colors"
  />
</div>
```

---

## 10. Patterns recurrentes

### "Fig. XX · Caption"

Cada imagen full-bleed lleva caption Manrope abajo:

```tsx
<p className="text-ui-meta uppercase text-bone-300 font-medium tabular">
  Fig. 01 · Oficinas Bissu Abogados — Polanco, CDMX
</p>
```

Numerar correlativamente. Coords geo a la derecha — opcional pero firma editorial.

### Live ping dot

```tsx
<span className="relative flex h-2 w-2 shrink-0">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
</span>
```

### Numeración tipográfica decorativa (ghost number)

Número gigante italic Playfair con opacidad `bone-50/[0.025]`, posicionado fuera del flujo:

```tsx
<div
  className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 font-display italic text-[280px] sm:text-[420px] lg:text-[560px] leading-none text-bone-50/[0.025] select-none pointer-events-none tracking-tightest"
  aria-hidden
>
  04
</div>
```

**Una sola por sección**.

### Capital point gold

Cada title termina con `.` en gold:

```tsx
<h2>Áreas de <span className="italic">práctica jurídica</span><span className="text-gold-400">.</span></h2>
```

**Inviolable** salvo excepciones documentadas en §18.

### Pleca-prefixed label

```tsx
<div className="flex items-center gap-3">
  <span className="pleca pleca-sm" aria-hidden />
  <p className="text-ui-meta uppercase text-bone-300 font-medium">Reconocidos por</p>
  <span className="flex-1 h-px bg-bone-50/15 ml-3" aria-hidden />
</div>
```

### Italic key phrase

Una frase clave por bloque va italic:

```tsx
<h2>Casos representativos de <span className="italic">litigio y arbitraje</span><span className="text-gold-400">.</span></h2>
```

### Mini-sparkline

```tsx
<div className="flex items-end gap-1 h-3" aria-hidden>
  {[0.4, 0.55, 0.45, 0.7, 0.65, 0.8, 0.75, 0.95].map((h, i) => (
    <span key={i} className="w-1.5 bg-gold-400/30 group-hover:bg-gold-400/60 transition-colors duration-500" style={{ height: `${h * 100}%` }} />
  ))}
</div>
```

### Asymmetric bento (3+1)

Stat principal `col-span-2 lg:col-span-3` + 3 satélites `col-span-1`. No 4 idénticos.

### Trust strip

Inline awards line bajo CTA con `·` separators (ver §11 patterns).

### Tabular numbers

Para todo número que se compare visualmente: `className="tabular"`.

---

## 11. Patterns jurídicos / editoriales premium

Sumar estos patterns en secciones donde aplique.

### Citation block (testimonio / cita jurisprudencial)

```tsx
<figure className="border-l border-gold-400 pl-6 py-2 my-10 max-w-2xl">
  <blockquote className="font-display italic text-bone-50 text-[24px] leading-[1.35] balance">
    "El equipo de Bissu nos resolvió un litigio que tres despachos previos habían descartado."
  </blockquote>
  <figcaption className="mt-4 text-ui-meta uppercase text-bone-300">
    — Director Jurídico · Empresa industrial · Sector manufactura
  </figcaption>
</figure>
```

Useful en Casos, Recursos, Firma.

### Footnote editorial

Numerito volado con anchor a nota al pie.

```tsx
{/* en el body */}
<sup className="font-sans text-[10px] text-gold-600 ml-0.5 align-super cursor-help">
  <a href="#fn1" className="no-underline">1</a>
</sup>

{/* al pie de la sección */}
<aside className="mt-20 pt-6 border-t border-bone-50/12 max-w-2xl">
  <p className="font-body text-body-micro text-bone-300">
    <sup id="fn1" className="text-gold-600 mr-2">1</sup>
    Datos validados por SCJN, Ley de Concursos Mercantiles art. 145.
  </p>
</aside>
```

### Drop cap editorial

Para intros largas estilo manifiesto (`Firma`):

```tsx
<p className="drop-cap font-body text-bone-50 text-body-default max-w-2xl">
  En 2017 fundamos Bissu con una idea clara…
</p>
```

CSS ya en `globals.css` como `.drop-cap`.

### Bluebook citation

```tsx
<p className="font-body text-body-micro text-bone-300 indent-[-1.5em] pl-6">
  <span className="font-sans uppercase text-ui-meta text-gold-600">SCJN, </span>
  Amparo en revisión 1284/2015, sentencia de 15 de junio de 2016, ponente Min. Gutiérrez Ortiz Mena.
</p>
```

### Pull quote (lateral)

```tsx
<aside className="float-right w-[40%] ml-8 my-6 hidden lg:block">
  <p className="font-display italic text-[28px] leading-[1.2] text-bone-50 border-t border-b border-gold-400/40 py-5 balance">
    "Sin intermediarios, sin escalamientos, sin sorpresas."
  </p>
</aside>
```

### Glyph divider (transición de capítulo)

```tsx
<div className="glyph-divider" aria-hidden>
  <span>§</span>
</div>
```

### Marginalia (notas al margen estilo Tufte)

Container 2 col, sticky aside con nota de contexto.

```tsx
<div className="grid lg:grid-cols-[1fr_220px] lg:gap-8">
  <article>...body principal...</article>
  <aside className="text-ui-micro tracking-[0.18em] uppercase text-bone-400 leading-[1.7] sticky top-32 self-start">
    Las negociaciones extrajudiciales reducen 40% el ciclo promedio en concurso mercantil.
  </aside>
</div>
```

---

## 12. Estados

### Disabled

```tsx
<button disabled className="opacity-40 cursor-not-allowed pointer-events-none">…</button>
```

### Loading inline (CTA)

```tsx
<span className="inline-flex items-center gap-3">
  <span className="w-3 h-3 border border-bone-50/40 border-t-gold-400 rounded-full animate-spin" />
  Enviando…
</span>
```

### Error de form

```tsx
<p className="mt-2 text-ui-meta uppercase text-[#A04545]">
  Campo requerido
</p>
```

Color error: **`#A04545`** — un burgundy oscuro coherente con paleta paper. NO red puro.

### Success de form

Ya implementado en `Contacto.tsx` (post-submit state). Patrón:

```tsx
<div className="p-8 sm:p-10 lg:p-12 border-t border-bone-50/20 min-h-[420px] flex flex-col items-start justify-center">
  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-400 mb-6">
    <CheckIcon className="w-6 h-6 text-gold-400" />
  </span>
  <p className="font-display text-bone-50 text-3xl sm:text-4xl tracking-tightest mb-4 balance">
    Recibimos tu mensaje<span className="text-gold-400">.</span>
  </p>
  <p className="font-body text-bone-50 text-body-default max-w-md">...</p>
</div>
```

### Empty state

```tsx
<div className="border border-dashed border-bone-50/15 p-10 text-center">
  <p className="font-display italic text-bone-300 text-[24px] mb-2">Sin resultados</p>
  <p className="font-body text-body-card text-bone-400">Intentá otra búsqueda o filtro.</p>
</div>
```

### Focus visible

Auto-aplicado por `globals.css`: outline 2px gold, offset 3px. **No remover en componentes nuevos**.

---

## 13. Background & atmosphere

### Page-wide grain overlay

Activo por default en `body::before`. SVG noise multiply `opacity 0.32`. **Nunca desactivar**, nunca duplicar. Print styles lo apagan automáticamente.

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

Solo en hero o secciones flagship. Opacity gold 6–10%, ink 5%.

### Image filter editorial

```tsx
style={{ filter: "saturate(0.85) contrast(1.04)" }}
```

Toda imagen editorial debe pasar por ese filter.

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

---

## 14. Voice & microcopy

### Idioma & registro

- **Español mexicano formal** (cliente Bissu). Nunca rioplatense ("vos/podés"). Usar "tú" o impersonal ("le respondemos en 24 horas").
- Palabras: "despacho jurídico", "abogado titular", "consulta", "asesoría", "litigio", "arbitraje". Evitar "estudio jurídico".
- Estados verbales: "Disponible", "En vivo", "Verificado", "Reconocido".

### Microcopy patterns

| Contexto | Copy canónico |
|---|---|
| CTA primaria | "Agenda consulta gratuita" / "Agenda tu consulta" / "Agenda una cita" |
| CTA WA | "WhatsApp directo" |
| Trust strip | "20 min · Sin compromiso · Vía video o presencial" |
| Trust strip 2 | "20 min · Sin compromiso", "Respuesta en menos de 24 hs", "Secreto profesional garantizado" |
| Promise list | "Dictamen escrito en 24 horas", "Honorarios transparentes desde el día 1", "Atención directa con abogado titular" |
| Submit success | "Recibimos tu mensaje." con "Un abogado titular te va a contactar en menos de 24 horas hábiles." |
| Card CTA | "Consultar caso" / "Hacer una pregunta" |

### Estados de UI — copy

| Estado | Copy | Tono |
|---|---|---|
| Loading | "Enviando…" / "Cargando…" (con elipsis) | Sobrio |
| Error required | "Campo requerido" (no "Faltó el correo") | Neutral |
| Error formato | "Correo no válido" | Neutral |
| Empty | "Sin resultados aún." | Tranquilo |
| Tooltip | Frase corta con punto. Mayúscula inicial. | Editorial |

### Reglas de copy

- **Nunca em-dash** (—). Usar punto, coma, dos puntos o paréntesis.
- Separar bloques con saltos de línea reales, **nunca `<br>`**.
- Capital point gold al final de cada title (ver §10 + excepciones §18).
- Italic en frase clave del title.
- Numerales con `tabular` o `oldstyle` según contexto (ver §4).

---

## 15. Responsive discipline

| Breakpoint | px | Cuándo usar |
|---|---|---|
| `(default)` | 0 | Mobile, primera regla siempre |
| `sm` | 640 | Mobile-large |
| `md` | 768 | Solo si layout cambia (e.g. tablet 2-col) |
| `lg` | 1024 | Desktop primary, donde aparecen splits 7/5 |
| `xl` | 1280 | Solo H1 hero (escala extra) y refinamientos finales |
| `2xl` | 1536 | **No usar** — el container está capped a 1440 |

> Si una H2 escala `[40px] sm:[60px] lg:[84px]`, en `md` (768) se mantiene en 60px. OK. **No metas `md:` en typography** salvo razón fuerte.

> Layout cambios estructurales (1-col → 2-col → 3-col) usar `md:` y `lg:`. Typography y spacing usar `sm:` y `lg:`.

---

## 16. Accessibility

### Focus ring

`gold-400` 2px outline-offset 3px. Definido global. **No remover.**

### Reduced motion

Handler global + hooks framer (`useReducedMotion`). Toda animación nueva debe respetar (ver §7 regla operativa).

### Selection color

`gold-400` 32% / text ink. Global.

### Contrast ratios concretos

Combos que importan (calculados sobre `ink-900` `#FBF8F1`):

| Token | Ratio | Nivel | Uso seguro |
|---|---|---|---|
| `bone-50` (`#231F20`) | **15.4:1** | AAA todos los tamaños | ✓ Body, headings, todo |
| `bone-300` (`#5A5253`) | **5.6:1** | AA normal text · AAA Large | ✓ Captions, secondary, mid-uppercase |
| `bone-400` (`#8A8082`) | **3.4:1** | AA Large only (≥18px o ≥14px bold) | ⚠ Solo uppercase ≥10px tracking ≥0.22em o text ≥18px. NUNCA body párrafo |
| `gold-600` (`#7C6435`) | **4.9:1** | AA normal | ✓ Labels uppercase pequeñas (10–11px) |
| `gold-500` (`#9A7E45`) | **3.5:1** | AA Large only | ✓ Hover highlights ≥18px |
| `gold-400` (`#B4975A`) | **2.7:1** | Falla AA | ❌ NUNCA texto. Solo decoración (líneas, dots, capital point) |

### `aria-hidden`

Usar en ornamentos visuales: pleca, hairlines, sparklines, ghost numbers, icons decorativos, mesh backgrounds.

### `aria-label`

En botones icon-only (WhatsApp button: `aria-label="Escríbenos por WhatsApp"`).

### Screen reader semantics

- `<figure>` + `<figcaption>` para imágenes con caption.
- `<blockquote>` + `<cite>` para citas.
- `<aside>` para marginalia y notas al margen.
- Headings jerarquía sin saltos (h1 → h2 → h3, no h2 → h4).

### Keyboard navigation

- Tab order natural (DOM order = visual order).
- Skip-link al inicio para saltar nav (TODO si la lista crece).
- Modals/sticky bars: trap focus si bloquean contenido principal.

---

## 17. Anti-patterns

- ❌ Sombras (`shadow-md`, `shadow-2xl`...). Reemplazar por borders hairline.
- ❌ `bg-white` o `bg-black` puros como surface.
- ❌ Gradientes saturados como bg de sección.
- ❌ Iconos Lucide / Heroicons / 3D / emoji.
- ❌ Em-dashes (—) en prosa.
- ❌ `<br>` en captions o copy.
- ❌ Bold en `font-display` (Playfair). Solo `font-normal`.
- ❌ Múltiples brush underlines en una sección.
- ❌ Más de 1 ghost number gigante por sección.
- ❌ Capital point en cualquier color que no sea `text-gold-400`.
- ❌ Cards con border-radius. Hard edges salvo excepciones §18.
- ❌ Letter-spacing negativo en sans (es para serif).
- ❌ Emojis (salvo aprobados: `→`, `↗`, `·`, glyphs §/❧/✦).
- ❌ Texto en `gold-400` o `bone-400` para body párrafo (contrast fail).
- ❌ `text-[Npx]` literal en código nuevo cuando existe un token semántico (`text-display-h2`, `text-ui-cta`...).
- ❌ Inventar variantes de motion (`type: "tween" duration: 0.4`) cuando hay 3 easings nombrados.

---

## 18. Excepciones documentadas

Reglas con casos específicos donde no aplican.

### Capital point gold (§10)

**No lleva capital point**:
- Nombres propios (`Samuel Bissu Bazbaz`, `Adolfo Julián Vargas Alvarado`).
- Headers de columna en tablas (`Bissu`, `Despacho tradicional`).
- Counters tipo `8+` — el `+` reemplaza el punto.
- Wordmarks ("Bissu Abogados").

### Hard edges / border-radius (§17)

**`rounded-full` SÍ permitido en**:
- Dots de live ping (`rounded-full bg-gold-400 w-2 h-2`).
- Pulse rings (`rounded-full animate-ping`).
- Iconos circulares en check/cross icons.
- Avatars circulares (si aplica).
- Spinners loading (border-radius nativo).

**NO en**: cards, badges rectangulares, inputs, buttons, sections.

### Surface variant (§6)

**`bg-ink-800/40`** (deep card) — usado en `Areas.tsx` para que las cards sobre `ink-900` page bg ganen peso óptico (ya que el bg de section también es `ink-900`). Tratar como variante oficial, no improvisar más opacities.

### Gold como background area (§3)

**Única excepción permitida**: `bg-gold-400/[0.06]` en columna BISSU del componente `Comparacion`. Sirve para destacar "tu opción" en tabla comparativa. **No replicar en otra sección sin discusión.**

### CTA font-weight (§9)

- **Primarias** (hero, navbar, sticky bar): `font-semibold`.
- **Secundarias** (dentro de card, mid-bridge, FAQ link): `font-medium` permitido.

---

## 19. Quick reference

```
COLORS
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

CAPITAL POINT (toda title — excepciones §18)
  <span className="text-gold-400">.</span>

ITALIC ACCENT (1 frase por title)
  <span className="italic">...</span>

PRINT (Bissu's clientes legales imprimen casos)
  global @media print: grain off, paper white, anchors expanded
```

---

## 20. Backlog / nice-to-have

Aún no implementado pero deseable para llevar el sistema a tier "Le Monde Magazine":

- **Cursor follow blob** sobre imagen full-bleed (`pointermove` listener + `transform translate`).
- **View Transitions API** entre rutas (`@view-transition { navigation: auto }`) — útil cuando aparezcan `/abogados/[slug]`, `/casos/[id]`.
- **Container queries** (Tailwind v4) — para que cards respondan a su contenedor en lugar del viewport.
- **`color-mix()`** en hover states tonal: `border-color: color-mix(in oklch, #B4975A 40%, transparent)`.
- **Numerales romanos** opcionales en `SectionLabel` (IV en lugar de 04) — más Le Monde, menos SaaS.
- **Hover-replay de kinetic title**: click en H1 re-anima word-by-word.
- **Cursor halt sobre imágenes editoriales** con caption flotante (lupa gold).
- **Skip-link** al inicio de la nav para keyboard a11y (cuando crezca el sitemap).
- **Trap focus en modal** del FAQ accordion si se vuelve modal full-screen.

---

**Última actualización**: 2026-05-09 · v2 (post-review). Mantener actualizado al introducir nuevas variantes o patterns.
