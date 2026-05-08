# Bissu Abogados — Full SEO Audit Report

**Fecha**: 2026-05-08
**URL local**: http://localhost:3000
**URL deploy actual**: https://bissu-landing-aab00h7c1-mateo-space-palcos-projects.vercel.app (preview, `x-robots-tag: noindex`)
**Dominio destino**: https://bissuabogados.com (asumido del schema)
**Tipo de negocio detectado**: LegalService — despacho jurídico mexicano (CDMX)

---

## 1. Resumen ejecutivo

### SEO Health Score: **62/100**

| Categoría | Peso | Score | Notas |
|---|---|---|---|
| Technical SEO | 25% | 14/25 | Falta robots.txt, sitemap.xml, canonical, hreflang |
| Content Quality | 25% | 19/25 | Copy fuerte, jerarquía OK, falta densidad para keywords largos |
| On-Page SEO | 20% | 13/20 | Title/desc OK, falta og:image, Twitter card incompleto |
| Schema/Structured Data | 10% | 5/10 | Solo LegalService — falta FAQPage, Person, BreadcrumbList |
| Performance (CWV) | 10% | 6/10 | Hero pesado, framer-motion en SSR, gradient mesh costoso |
| Images | 5% | 4/5 | 100% con alt, lazy loading OK |
| AI Search Readiness | 5% | 1/5 | FAQs sin schema, sin definiciones, sin TL;DR |

### Top 5 problemas críticos
1. **No hay sitemap.xml ni robots.txt** — Google no sabe qué crawlear
2. **No existe canonical URL** — Riesgo de duplicados con dominios alternativos
3. **FAQ schema FALTANTE** — Pierde rich snippets de Google y citas de AI Overviews
4. **og:image FALTA** — Compartidos en redes/WhatsApp se ven sin imagen
5. **Solo 1 schema (LegalService)** — Falta Person, BreadcrumbList, BlogPosting, Service

### Top 5 quick wins
1. Crear `app/robots.ts` y `app/sitemap.ts` (15 min, +5 pts técnico)
2. Cambiar `lang="es"` → `lang="es-MX"` + agregar `metadataBase` (5 min, geo-targeting MX)
3. Agregar `og:image` con la imagen del despacho (Fig. 01) (10 min, +UX redes)
4. Agregar `FAQPage` JSON-LD a sección FAQ (20 min, **alto impacto GEO**)
5. Agregar `Person` schema por cada abogado en Equipo (30 min, E-E-A-T)

---

## 2. Technical SEO

### 2.1 Crawlability

| Item | Status | Notas |
|---|---|---|
| robots.txt | ❌ MISSING | 404 en preview deploy |
| sitemap.xml | ❌ MISSING | 404 en preview deploy |
| `<meta name="robots">` | ✅ `index, follow` | Configurado en layout.tsx |
| Vercel `x-robots-tag` | ⚠️ `noindex` en preview | Normal para previews · OK al deployar a dominio prod |
| Internal linking | ✅ 14 anchor links | Navegación intra-página correcta |
| External links | ✅ 17 (social + Best Lawyers) | OK con `rel="noopener"` en WhatsApp |

### 2.2 Indexability

- ✅ `<html lang="es">` declarado
- ⚠️ Lang debería ser `es-MX` para señalizar mercado mexicano a Google
- ❌ Falta `<link rel="canonical">` — riesgo si el sitio queda accesible por subdominios o www/no-www
- ❌ Falta `hreflang` — no crítico (sitio mono-idioma) pero recomendable: `hreflang="es-MX"`
- ❌ Falta `<meta name="geo.region" content="MX-CMX">` (recomendación legacy pero útil)

### 2.3 URL structure

- ✅ URLs limpias (Next App Router)
- ⚠️ Anchor links (`#firma`, `#areas`, etc.) — buenos para UX, pero no generan páginas indexables individuales
- ❌ **Recomendación crítica**: separar áreas de práctica en páginas propias (`/areas/litigio-civil`, `/areas/concursal`, etc.) — esto es donde está el oro SEO de un despacho jurídico

### 2.4 Security headers (Vercel response)

| Header | Status |
|---|---|
| `Strict-Transport-Security` | ✅ `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | ✅ definido (en next.config.mjs) |
| `X-Content-Type-Options` | ❌ falta `nosniff` |
| `Referrer-Policy` | ❌ falta (recomendado: `strict-origin-when-cross-origin`) |
| `Permissions-Policy` | ❌ falta |
| `X-Frame-Options` | ❌ falta (alternativa: `frame-ancestors` en CSP) |

### 2.5 HTTPS / Cache

- ✅ HTTPS enforced (Vercel)
- ✅ `cache-control: public, max-age=0, must-revalidate` — correcto para SSR/ISR
- ✅ `etag` presente

---

## 3. On-Page SEO

### 3.1 Title & Meta description

| Campo | Valor | Long. | Status |
|---|---|---|---|
| Title | "Bissu Abogados — Despacho jurídico, Ciudad de México" | 53 char | ✅ |
| Description | "Despacho jurídico especializado en litigio civil, comercial, concursal..." | 200 char | ✅ |
| Keywords | 11 términos legales | — | ⚠️ Deprecado por Google (no daña pero no aporta) |

### 3.2 Heading structure

| Tag | Count | Status |
|---|---|---|
| H1 | 1 | ✅ "Práctica jurídica de fondo." |
| H2 | 9 | ✅ Buena distribución por secciones |
| H3 | 23 | ⚠️ Demasiados — varios son títulos de cards, podrían ser H4 |
| H4–H6 | 0 | ⚠️ Sin uso |

**Problema**: salto de jerarquía H2→H3 sin H4 intermedio. Las cards de Áreas/Casos/Recursos ocupan H3 cuando estructuralmente son sub-elementos.

### 3.3 Open Graph & Twitter Cards

| Item | Status |
|---|---|
| `og:title` | ✅ |
| `og:description` | ✅ |
| `og:type` | ✅ `website` |
| `og:url` | ✅ |
| `og:locale` | ✅ `es_MX` |
| **`og:image`** | ❌ **FALTA** — crítico para compartidos |
| `og:site_name` | ✅ "Bissu Abogados" |
| `twitter:card` | ⚠️ `summary` (debería ser `summary_large_image`) |
| `twitter:title` | ✅ |
| `twitter:description` | ❌ falta |
| `twitter:image` | ❌ falta |

### 3.4 Internal linking

- ✅ 14 anchor links entre secciones
- ❌ Sección Recursos tiene 4 links a `href="#"` (rotos) — Google los lee como dead-ends
- ❌ "Ver todos los artículos" → `href="#"` también roto

### 3.5 Content quality

- **Word count**: 1,496 palabras — bueno para una single-page landing
- **Lectura**: español natural, sin keyword stuffing
- **Tone**: editorial, profesional, formal. Buen E-E-A-T.
- **Datos verificables**: estadísticas en hero (08+ años, 06 áreas, 24h), reconocimientos con año, dirección física, teléfono — todos buenos signals de confianza.
- **Identificación**: no hay headshot/foto del founder Samuel Bissu Bazbaz — agregar mejora E-E-A-T significativamente

---

## 4. Schema & Structured Data

### 4.1 Implementado

```json
{
  "@type": "LegalService",
  "name": "Bissu Abogados, S.C.",
  "telephone": "+52-55-5545-1308",
  "address": {...},
  "geo": {...},
  "founder": "Samuel Bissu Bazbaz",
  "award": [...],
  "serviceType": [...],
  "sameAs": [...]
}
```

✅ LegalService bien estructurado, con address completo, geo coords, awards, serviceType, sameAs (4 perfiles).

### 4.2 Faltantes críticos

| Schema | Prioridad | Impacto |
|---|---|---|
| **`FAQPage`** | 🔴 Crítico | Rich snippets en SERP + cita en AI Overviews |
| **`Person`** (× abogados) | 🔴 Alto | E-E-A-T, signals de autoridad para founder |
| **`BreadcrumbList`** | 🟡 Medio | Mejora SERP con migas |
| **`Service`** (× área de práctica) | 🟡 Medio | Cuando se creen sub-pages |
| **`BlogPosting`** | 🟡 Medio | Para Recursos cuando publiquen artículos |
| **`AggregateRating`** | 🟢 Bajo | Si suman testimonios públicos |
| **`Place`** (oficinas) | 🟢 Bajo | Local SEO si abren sucursales |

### 4.3 Issues del schema actual

- `url` hardcoded a `https://bissuabogados.com` — verificar dominio prod o usar `metadataBase` en Next
- `priceRange: "$$$"` — OK indicativo
- Falta `openingHours`
- Falta `hasOfferCatalog` listando servicios

---

## 5. Performance & Core Web Vitals

### 5.1 LCP risks

- **Candidato LCP**: `/images/hero-1.jpg` (1200x801, 869KB)
  - ✅ Marcado `priority` en next/image
  - ✅ `quality={92}` (alto pero correcto para hero)
  - ✅ `sizes="100vw"`
  - ⚠️ Tamaño 869KB — convertir a AVIF/WebP optimizado (Next lo hace pero del JPEG inicial pesado)

### 5.2 CLS risks

- ✅ next/image con dimensiones — no shifts
- ⚠️ Word reveal animation con `translateY(115%)` — puede causar paint flash si fuente carga slow
- ⚠️ Gradient mesh con 3 radial gradients — paint cost moderate

### 5.3 INP risks

- ⚠️ `useScroll` + `useTransform` en Hero (parallax) — listener constante
- ⚠️ `useInView` en muchos componentes (Reveal, Casos, Areas, Comparacion) — múltiples IntersectionObservers
- ⚠️ MagneticButton calcula `getBoundingClientRect` en cada `mousemove` — throttle recomendado

### 5.4 Bundle

- Framer-motion v12 ~50KB gzipped (necesario)
- Next.js 14.2 — base ~80KB
- Estimado First Load JS: ~200-250KB (aceptable pero ajustable)

### 5.5 Fonts

- ✅ next/font con `display: "swap"` para los 3 fonts
- ✅ Fonts self-hosted vía next/font (no third-party request)
- ⚠️ Cargando 3 familias × múltiples weights — auditar si todos los weights se usan

---

## 6. Images

| Métrica | Valor | Status |
|---|---|---|
| Total imágenes | 10 | ✅ |
| Sin alt | 0 | ✅ |
| Lazy loaded | 8 (no-priority) | ✅ |
| Priority | 2 (hero) | ✅ |
| Formato | JPEG/WebP via next/image | ✅ |
| Unsplash en CSP | ✅ permitido | ✅ |

### Recomendaciones
- Servir hero-1.jpg en formato AVIF directo (no esperar transformación de Next)
- Reducir hero-1.jpg de 869KB → 250KB (tool: ImageOptim, squoosh)
- Convertir local hero-2/3 a AVIF + WebP fallback
- Agregar `<picture>` con sources si Next/Image no maneja AVIF default

---

## 7. AI Search Readiness (GEO)

### 7.1 Estructura para citación AI

| Pattern | Status |
|---|---|
| Pregunta + respuesta directa (FAQ) | ⚠️ Existe FAQ component pero **sin schema** |
| Definiciones explícitas ("X es...") | ❌ Falta — agregar en intro de cada área |
| TL;DR/summary box | ❌ Falta |
| Listas/bullets para extracción | ✅ Áreas, Comparación, Casos |
| Stats/números verificables | ✅ Hero stats, métricas en casos |
| Author/expert byline | ❌ Falta autor en Recursos |
| Date stamps | ⚠️ Recursos tiene fechas pero artículos no son reales |

### 7.2 Citability score

**1/5** — el contenido es bueno pero no está en formato citable. AI Overviews y Perplexity necesitan:
- FAQs estructuradas con `FAQPage` schema (cita directa)
- Párrafos respuesta-primero (50-100 palabras directos)
- Definiciones marcadas (`<dfn>` o destacadas)
- Listas numeradas/bullets para steps

### 7.3 Authority signals

- ✅ Awards listados con año y categoría
- ✅ sameAs a 4 perfiles oficiales (LinkedIn, Best Lawyers)
- ✅ Address físico verificable
- ❌ Falta foto + bio rica del founder Samuel Bissu (Person schema + headshot)
- ❌ Falta link a publicaciones legales del equipo (papers, conferencias, casos publicados)
- ❌ Falta "About"/"Acerca de" page propia (LegalService schema apunta a homepage)

---

## 8. Mobile

- ✅ Viewport meta correcto
- ✅ Tailwind responsive (`sm:`, `lg:` breakpoints)
- ✅ Touch targets >44px en CTAs
- ⚠️ Algunos textos H1 a 52px en mobile pueden requerir tap-zoom — OK para display pero verificar

---

## 9. International / Local SEO

### Para el mercado mexicano:
- ✅ `og:locale` = `es_MX`
- ⚠️ `<html lang>` = `es` (debería ser `es-MX`)
- ✅ `addressCountry: MX` en schema
- ❌ Sin `geo.region` meta
- ❌ Sin Google Business Profile linkeado (asumir que existe pero no está en sameAs)

### Local SEO opportunities
- Crear contenido geo-específico: "Despacho jurídico en Polanco, CDMX"
- Schema `Place` con `containsPlace` apuntando al barrio
- Embed de Google Maps de las oficinas (con `iframe-src` ya permitido en CSP)

---

## 10. Métricas de oportunidad

### Keywords que apuntar (research preliminar)

| Keyword | Volumen estimado MX | Dificultad | Status actual |
|---|---|---|---|
| despacho jurídico CDMX | Alto | Alta | Targeted |
| abogados Polanco | Medio | Media | Targeted |
| abogado litigio mercantil CDMX | Medio | Media | Mencionado |
| amparo administrativo CDMX | Medio | Media | Mencionado |
| concurso mercantil abogado | Medio | Baja | Mencionado |
| custodia compartida internacional México | Bajo | Baja | Mencionado |
| arbitraje comercial CCI México | Bajo | Baja | Mencionado |
| reestructura empresa familiar México | Bajo | Baja | **Oportunidad** (caso destacado) |

### Programmatic SEO opportunity

Crear sub-pages programáticas:
- `/areas/litigio-civil-cdmx`
- `/areas/litigio-mercantil-cdmx`
- `/areas/concurso-mercantil-mexico`
- `/areas/amparo-cdmx`
- `/areas/derecho-familiar-cdmx`
- `/areas/arbitraje-internacional-mexico`

Cada una con: hero específico + casos relacionados + FAQs específicas + schema Service + cluster con la home.

---

## 11. Conclusiones

**Lo que está bien**:
- Arquitectura técnica sólida (Next.js 14, App Router, next/font, next/image)
- Copy editorial profesional, brand voice consistente
- LegalService schema bien hecho
- Heading hierarchy clara
- 100% imágenes con alt
- HTTPS + HSTS + CSP

**Lo que duele**:
- Sin sitemap, sin robots.txt
- Sin og:image
- 1 sola schema cuando hay 4-5 oportunidades grandes
- FAQ no marcadas (pierde rich snippets + citas AI)
- Single-page sin sub-pages programáticas → pierde long-tail enorme
- Recursos con links rotos
- E-E-A-T del founder sin foto + Person schema

**Score actual: 62/100**
**Score post-quick-wins: 78/100** (estimado tras implementar Top 5 acciones críticas)
**Score con full implementation: 90+/100** (con sub-pages programáticas + FAQ schema + Person schemas + sitemap)
