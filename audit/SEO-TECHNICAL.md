# Bissu Abogados — Technical SEO Audit

**Fecha**: 2026-05-08
**Stack**: Next.js 14.2 (App Router), Vercel hosting
**URLs**: prod (asumido) `https://bissuabogados.com` · preview `https://bissu-landing-aab00h7c1-mateo-space-palcos-projects.vercel.app`

---

## Technical Score: **52/100**

### Category Breakdown
| Category | Status | Score |
|----------|--------|-------|
| Crawlability | ❌ | 30/100 |
| Indexability | ⚠️ | 50/100 |
| Security | ⚠️ | 65/100 |
| URL Structure | ✅ | 80/100 |
| Mobile | ✅ | 90/100 |
| Core Web Vitals | ⚠️ | 60/100 |
| Structured Data | ⚠️ | 30/100 |
| JS Rendering | ✅ | 85/100 |

---

## 1. Crawlability — 30/100

| Item | Status | Detalle |
|---|---|---|
| robots.txt | ❌ | 404 en preview · MISSING en código |
| sitemap.xml | ❌ | 404 en preview · MISSING en código |
| robots referenced en sitemap | ❌ | N/A |
| Internal links visibles en HTML | ✅ | 14 anchor links en SSR |
| Crawl depth | ✅ | Single-page, depth=1 |
| JS rendering required | ⚠️ | Contenido principal en SSR, animaciones en JS (OK para Googlebot) |

### AI Crawler Management — N/A configurado
Sin robots.txt no hay management. **Recomendación**: permitir AI crawlers para citation traffic (recomendable para un despacho que busca authority).

```
# Recomendado (allow all incl. AI)
User-agent: *
Allow: /

# Bloquear solo training scrapers si se desea proteger contenido sin perder visibilidad search/AI
# (Bissu probablemente quiere AI citations, así que no bloquear)
```

### Acción
1. Crear `src/app/robots.ts` con MetadataRoute
2. Crear `src/app/sitemap.ts` con MetadataRoute
3. Una vez deployado a `bissuabogados.com`, verificar `curl -sI bissuabogados.com/robots.txt` → 200

---

## 2. Indexability — 50/100

| Item | Status | Detalle |
|---|---|---|
| `<meta name="robots">` | ✅ | `index, follow` |
| `x-robots-tag` (server) | ⚠️ | `noindex` en preview Vercel (normal · OK al deploy a custom domain) |
| Canonical | ❌ | **MISSING** |
| `metadataBase` (Next 14) | ❌ | **MISSING** — todas las URL relativas en metadata son problemáticas |
| Hreflang | ⚠️ | No declarado (sitio mono-idioma, OK pero recomendable `es-MX`) |
| `<html lang>` | ⚠️ | `es` (debería ser `es-MX`) |
| Duplicate content risk | ⚠️ | Sin canonical, www/no-www o trailing slash diferentes pueden duplicarse |

### Hreflang honesty check
- Solo idioma ES-MX. Recomendado:
```ts
alternates: {
  canonical: '/',
  languages: { 'es-MX': '/', 'x-default': '/' },
}
```

### Canonical ↔ BASE_URL alignment
- Schema actual usa `https://bissuabogados.com` (HTTP/2, sin www) — verificar que prod sirva exactamente eso.
- Recomendado: configurar `metadataBase = new URL('https://bissuabogados.com')` y dejar `canonical: '/'` en cada page.

---

## 3. Security — 65/100

Headers actuales (verificados con `curl -sI` en preview):

| Header | Status | Valor |
|---|---|---|
| `Strict-Transport-Security` | ✅ | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | ✅ | Definido (multiline en next.config.mjs) |
| `X-Content-Type-Options` | ❌ | **falta** |
| `Referrer-Policy` | ❌ | **falta** |
| `Permissions-Policy` | ❌ | **falta** |
| `X-Frame-Options` | ❌ | falta (`frame-ancestors` en CSP cubre, pero header explícito mejor) |

### CSP review
Política actual:
```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https://images.unsplash.com;
frame-src https://calendly.com https://www.google.com;
connect-src 'self' https://calendly.com;
```

⚠️ **`'unsafe-inline'` y `'unsafe-eval'`** en script-src — necesarios por Next.js dev pero puede ajustarse en prod via nonces.
⚠️ Falta `frame-ancestors 'none'` (anti-clickjacking).
⚠️ Falta `base-uri 'self'`.
⚠️ Falta `form-action 'self'`.

### Acción — agregar a `next.config.mjs`:
```js
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
{ key: "X-Frame-Options", value: "DENY" },
```

CSP additions:
```
frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

---

## 4. URL Structure — 80/100

| Item | Status | Detalle |
|---|---|---|
| Clean URLs | ✅ | Next App Router |
| Hierarchy | ⚠️ | Single-page actual — hierarchy no aplicable hasta crear sub-pages |
| Anchor links | ✅ | Bien usados para navegación interna |
| Trailing slash | ✅ | Consistente (no usa) |
| Query params | ✅ | No params en URLs principales |
| Redirects | N/A | Sin redirecciones (no hay legacy) |

### Próximos pasos
Cuando se creen sub-pages:
- `/areas/litigio-civil` (no `/area/litigio-civil` ni `/practica/litigio-civil` — consistencia)
- `/equipo/samuel-bissu` (slug del nombre)
- `/recursos/[slug]` (kebab-case)
- `/contacto`

---

## 5. Mobile Optimization — 90/100

| Item | Status | Detalle |
|---|---|---|
| Viewport meta | ✅ | `width=device-width, initial-scale=1` |
| Responsive CSS | ✅ | Tailwind con `sm:`, `md:`, `lg:` breakpoints |
| Touch targets | ✅ | CTAs >44px |
| Font size | ✅ | Body 14-15px, headings escalan |
| Mobile-first index | ✅ | Compatible (Google indexa mobile-first desde 2024) |

### Issues menores
- H1 hero a 52px en mobile — OK pero verificar legibilidad en mobile real
- Algunas cards con padding interior podrían apretar en pantallas <360px — testear en iPhone SE

---

## 6. Core Web Vitals — 60/100

### LCP (Target <2.5s)

**Candidato LCP**: `/images/hero-1.jpg` (1200×801, 869KB JPEG original)

| Optimización | Status | Acción |
|---|---|---|
| `<Image>` de Next | ✅ | usado |
| `priority` prop | ✅ | usado |
| `quality={92}` | ⚠️ | Alto — bajar a 85 (ahorra ~30%) |
| `sizes="100vw"` | ✅ | correcto para hero full-bleed |
| `fill` | ✅ | usado correctamente |
| Modern formats | ⚠️ | Next sirve WebP por defecto. Forzar AVIF: agregar `images.formats: ["image/avif", "image/webp"]` en next.config |
| Image preload | ⚠️ | Confirmar en build — Next debería emitir preload por `priority` |
| Source compression | ❌ | JPEG fuente 869KB → comprimir a ~250KB con MozJPEG/squoosh antes de buildear |

**Element render delay**: el hero tiene `clipPath` animation con framer-motion (`useScroll` + `useTransform`). El image div está dentro de `motion.div` con `clipPath: inset(0 100% 0 0)` initial — esto **demora el LCP** porque el contenido del image está clipeado hasta animar.

🔴 **Crítico**: el LCP element está dentro de un wrapper que arranca clipeado. Lighthouse marcará "element render delay". 

**Solución**: render el image sin clip inicial, agregar la clip-reveal animation solo a partir del second paint:
```tsx
// MAL (actual):
<motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }}>
  <Image priority ... />
</motion.div>

// BIEN: clip animation solo si JS habilitado, fallback no-clip
<motion.div initial={false} animate={{ clipPath: "inset(0 0 0 0)" }}>
  <Image priority ... />
</motion.div>
```

### INP (Target <200ms)

⚠️ **Riesgos detectados**:
- 61 elementos con transform/opacity inline (motion divs)
- `useScroll` + `useTransform` listener en Hero (parallax) — recalcula en cada scroll
- MagneticButton calcula `getBoundingClientRect` en cada `mousemove` (sin throttle)
- Múltiples `useInView` (Reveal × N usos) — cada uno crea IntersectionObserver

**Acción**:
- Throttle `onMouseMove` en MagneticButton (rAF-based)
- Reducir uso de `useInView` reusando un observer central
- `experimental.optimizePackageImports: ["framer-motion"]` en next.config

### CLS (Target <0.1)

✅ **Bien manejado**:
- `<Image>` con `fill` y `sizes` declarados — sin shift por imagen
- Font display swap — pero esto puede causar FOUT
- Word reveal animation — `translateY(115%)` puede causar paint shift visualmente pero NO CLS porque está dentro de `word-mask` overflow:hidden

⚠️ **Riesgos menores**:
- Grain texture overlay (`body::before` fixed) — paint cost, no shift
- Gradient mesh (3 radial gradients) — paint cost
- Si la fuente Playfair Display tarda en cargar, el headline puede saltar de fallback a serif → CLS
  - **Mitigation**: agregar `adjustFontFallback: true` (Next 14 default) y `font-feature-settings`

### Acción inmediata para LCP
1. Optimizar hero-1.jpg (869KB → 250KB)
2. Sacar el clipPath animation del wrapper de la imagen LCP
3. Agregar AVIF en `next.config.mjs`:
```js
images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [...],
}
```
4. `experimental.optimizePackageImports: ["framer-motion"]`

---

## 7. Structured Data — 30/100

### Implementado
- 1× `LegalService` JSON-LD (en `<Script>` con `strategy="beforeInteractive"`)

### Issues con el schema actual
- ✅ `@type: LegalService` correcto
- ✅ `address` PostalAddress completo
- ✅ `geo` GeoCoordinates
- ✅ `award` × 3
- ✅ `serviceType` × 6
- ✅ `sameAs` × 4
- ⚠️ Solo `LegalService` — debería ser array `["Organization", "LegalService"]` para mejor entity signal
- ⚠️ Falta `@id` (recomendado para entity consolidation)
- ⚠️ Falta `image` (logo o foto representativa)
- ⚠️ Falta `priceRange` ya está pero podría enriquecerse con `OfferCatalog`
- ⚠️ Falta `openingHours` (lun-vie 9-18 típico)
- ⚠️ `url` hardcoded — usar `metadataBase`

### Schemas faltantes (en orden de prioridad)

#### 🔴 Critical
**`FAQPage`** — Componente FAQ.tsx tiene 5+ Q&A pero sin schema. Pierde:
- Rich snippets en SERP (4-pack expandible)
- Citas en AI Overviews (Google)
- Citas en ChatGPT/Perplexity (las leen explícitamente)

#### 🔴 Critical
**`WebSite` con `SearchAction`** — habilita Sitelinks Search Box en branded SERPs. 5 minutos de implementación.

#### 🟠 High
**`BreadcrumbList`** — incluso single-page page, agregar `Inicio` como única lista. Crece cuando se creen sub-pages.

#### 🟠 High
**`Person`** — Samuel Bissu Bazbaz + Adolfo Julián Vargas Alvarado. Cada uno con:
- `jobTitle`, `worksFor` (referenciar LegalService por @id)
- `alumniOf` (universidades)
- `knowsAbout` (áreas de práctica)
- `sameAs` (LinkedIn personal, perfil Best Lawyers)
- Foto headshot

#### 🟡 Medium
**`Service`** × 6 áreas — cuando existan sub-pages dedicadas

#### 🟡 Medium
**`BlogPosting`** o `Article` — cuando Recursos tenga artículos reales

#### 🟢 Low
**`AggregateRating`** — si suman reviews verificables (Best Lawyers tiene reviews públicos)

### Multi-role recommendation
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LegalService", "ProfessionalService"],
  "@id": "https://bissuabogados.com#organization",
  ...
}
```

---

## 8. JavaScript Rendering — 85/100

| Check | Status | Detalle |
|---|---|---|
| Critical content in SSR HTML | ✅ | Hero, Firma, Proceso, Areas, Casos, Comparacion, Equipo, FAQ todo en SSR |
| Canonical en raw HTML | ⚠️ | No existe canonical (ni raw ni JS) |
| `<meta robots>` en raw HTML | ✅ | `index, follow` en SSR |
| JSON-LD en raw HTML | ✅ | `<Script strategy="beforeInteractive">` se renderiza pre-hidration |
| Title/desc en raw HTML | ✅ | Next genera SSR |

### JS-only content
- Animaciones (no afectan SEO)
- Gradient mesh / grain texture (decorativo)
- FAQ accordion expand/collapse — el contenido está en HTML inicial pero clipped via `grid-template-rows: 0fr` (alternativa CSS-only que sí indexa)
  - ⚠️ **Verificar**: si el `display: grid` con `grid-template-rows: 0fr` esconde el contenido para crawlers. Test: `view-source` la página y buscar el texto de la respuesta del FAQ — debe estar visible.

### Recomendación: critical SEO en SSR
Mover lo siguiente del client-side al SSR:
- Canonical link (cuando se agregue)
- Meta robots (ya está)
- JSON-LD (ya está)
- og:image absolute URL (vía metadataBase)

---

## 9. IndexNow Protocol

❌ No implementado. 

**Acción opcional**: agregar IndexNow para Bing/Yandex (no afecta Google):
1. Generar key UUID
2. Subir `[key].txt` a `/public`
3. POST a `https://api.indexnow.org/indexnow` cada vez que se publique contenido nuevo

Para un despacho jurídico que probablemente no actualiza diariamente, **opcional bajo prioridad**.

---

## Critical Issues (fix esta semana)

1. ✅ Crear `app/robots.ts`
2. ✅ Crear `app/sitemap.ts`
3. ✅ Agregar `metadataBase` en layout.tsx
4. ✅ Agregar `alternates: { canonical: '/' }`
5. ✅ Agregar `og:image` con `/images/hero-1.jpg`
6. ✅ Cambiar Twitter card a `summary_large_image` con image
7. ✅ Cambiar `lang="es"` → `lang="es-MX"`
8. ✅ Agregar `FAQPage` JSON-LD
9. ✅ Sacar clipPath animation del LCP image wrapper
10. ✅ Optimizar hero-1.jpg → ≤300KB

## High Priority (este mes)

11. Agregar headers de seguridad faltantes
12. Agregar `WebSite` + `SearchAction` JSON-LD
13. Agregar `Person` schemas para abogados (con foto)
14. Agregar `BreadcrumbList`
15. CSP: agregar `frame-ancestors`, `base-uri`, `form-action`
16. `experimental.optimizePackageImports: ["framer-motion"]`
17. Throttle MagneticButton onMouseMove
18. Verificar FAQ accordion content en raw HTML (no JS-only)

## Medium Priority (próximos 2 meses)

19. Sub-pages programáticas por área de práctica (`/areas/[slug]`)
20. `Service` schema por cada área
21. Image preload `<link rel="preload" as="image">` para hero (Next debería hacerlo con priority, verificar)
22. AVIF format en next.config
23. Page-level `Article` / `BlogPosting` schemas para Recursos cuando existan

## Low Priority (backlog)

24. IndexNow para Bing/Yandex
25. `AggregateRating` si reviews verificables
26. Schema validation en CI (schema.org validator action)
27. CSP nonces para sacar `'unsafe-inline'` en scripts en prod

---

## Próximo paso recomendado

Implementar **los 10 items Critical** en una sola PR — son ~2 horas de trabajo y suben el score técnico de 52 → 78. Después medir con Search Console + PageSpeed Insights real.
