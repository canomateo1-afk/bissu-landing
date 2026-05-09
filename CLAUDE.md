# bissu-landing — Project Instructions

Landing page de Bissu Abogados (despacho boutique CDMX). Stack: Next.js 14 (App Router) + React 18 + Tailwind + framer-motion.

## REGLA #1 — Design System

**Antes de crear o modificar cualquier sección, página o componente visual, leer:**

- `docs/DESIGN_SYSTEM.md` — referencia escrita exhaustiva (tokens, tipografía, motion, componentes, patterns, anti-patterns)
- `/design-system` (route en este proyecto) — showcase visual en vivo

No improvisar tokens nuevos (colores, spacings, easings, fonts). Si necesitás algo que no está documentado, **agregalo al design system primero**, después usalo.

**Antes de empezar cualquier tarea de UI, mencionar explícitamente que leíste el DS** y citá qué patrones/tokens vas a usar.

## Reglas rápidas (resumen del DS — el detalle vive en docs/DESIGN_SYSTEM.md)

- **Colores**: `ink-900` bg default, `bone-50` text, `gold-400` solo en líneas/dots/capital point ".". Nunca `bg-white` puro, nunca gradientes saturados.
- **Tipografía**: `font-display` (Playfair) H1/H2 + counters. `font-body` (Libre Baskerville) párrafos. `font-sans` (Manrope) TODO el UI uppercase.
- **Container**: `max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14`. Inviolable.
- **Section padding**: `py-24 sm:py-32 lg:py-40`.
- **Card**: `border border-bone-50/12 bg-bone-50/[0.02] backdrop-blur-sm p-6 sm:p-8`. NUNCA shadows.
- **Botones**: usar `<MagneticButton>` (variants dark/light/ghost). Nunca `border-radius` en cards.
- **Capital point**: toda title termina `<span className="text-gold-400">.</span>`.
- **Italic accent**: una frase por title va `<span className="italic">...</span>`.
- **Motion**: ease default `cubic-bezier(0.22, 1, 0.36, 1)`. Reveal: `<Reveal delay={120}>`. Nunca olvidar `useReducedMotion()`.
- **Iconos**: Pleca (`pleca-sm/md/lg`) primero. SVG inline custom. NUNCA Lucide/Heroicons/3D/emoji.
- **Copy**: español mexicano formal ("tú", "consulta", "abogado titular"). Nunca em-dash. Nunca `<br>`.

## Otros

- **Idioma de comunicación con el user**: español argentino (vos), pero copy de la landing siempre mexicano formal.
- **Git**: siempre en `main`, nunca branches.
- **Deploy**: Vercel auto-deploy on push a `main` → `bissu-landing.vercel.app`. Para deploy manual: `npx vercel --prod --yes`.
- **Analytics**: GA4 instrumentado. Property `G-JZVTCFXZTR`. Helper `@/lib/analytics` con `events.*`. Si agregás CTAs nuevos, instrumentar `events.ctaClick(location, label)`.
- **Env vars**: `NEXT_PUBLIC_GA_ID` en Vercel production. Usar `printf "%s" | vercel env add ...`, nunca `echo`.
- **CSP**: definida en `next.config.mjs`. Si agregás un script externo nuevo (Stripe, Calendly extras, etc.), actualizar `script-src`/`connect-src`/`img-src` ahí.

## Cuando dudés

1. Mirar `docs/DESIGN_SYSTEM.md`.
2. Mirar `/design-system` en el browser.
3. Inspirarte de Hero/Areas/Casos antes de improvisar pattern nuevo.
4. Si igual dudás, preguntar al user.
