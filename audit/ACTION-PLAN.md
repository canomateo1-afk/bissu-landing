# Bissu Abogados — SEO Action Plan

**Generado**: 2026-05-08
**Score actual**: 62/100 → objetivo: 90+/100

---

## 🔴 Critical (fix esta semana)

### 1. Crear `app/robots.ts` y `app/sitemap.ts`
**Impact**: Crawlability + indexability inmediata
**Effort**: 15 min
**Files**: `src/app/robots.ts`, `src/app/sitemap.ts`

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    sitemap: 'https://bissuabogados.com/sitemap.xml',
  };
}

// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bissuabogados.com', lastModified: new Date(), priority: 1, changeFrequency: 'monthly' },
    // Agregar sub-pages cuando existan
  ];
}
```

### 2. Configurar `metadataBase` y agregar canonical, og:image, Twitter card
**Impact**: Compartidos en redes con preview correcto + canonical URL
**Effort**: 20 min
**File**: `src/app/layout.tsx`

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://bissuabogados.com'),
  title: { default: 'Bissu Abogados — Despacho jurídico, Ciudad de México', template: '%s | Bissu Abogados' },
  description: '...',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Bissu Abogados — Despacho jurídico en CDMX',
    description: '...',
    url: '/',
    siteName: 'Bissu Abogados',
    locale: 'es_MX',
    type: 'website',
    images: [
      { url: '/images/hero-1.jpg', width: 1200, height: 800, alt: 'Bissu Abogados — Polanco, CDMX' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bissu Abogados — Despacho jurídico en CDMX',
    description: '...',
    images: ['/images/hero-1.jpg'],
  },
};
```

### 3. Cambiar `lang="es"` → `lang="es-MX"`
**Impact**: Geo-targeting México explícito
**Effort**: 1 min
**File**: `src/app/layout.tsx` línea 114

```tsx
<html lang="es-MX" ...>
```

### 4. Agregar FAQPage JSON-LD a sección FAQ
**Impact**: Rich snippets en SERP + citación en AI Overviews / ChatGPT / Perplexity
**Effort**: 30 min
**File**: `src/components/FAQ.tsx`

Inyectar JSON-LD con array de preguntas/respuestas en formato schema.org/FAQPage. Las respuestas deben ser texto plano (sin HTML), 50-150 palabras cada una para óptima citabilidad.

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
// renderizar como <Script type="application/ld+json">
```

### 5. Reparar links rotos en Recursos
**Impact**: Eliminar dead-ends para Google
**Effort**: 5 min
**File**: `src/components/Recursos.tsx`

**Opción A** (rápida): cambiar `href="#"` a `href="#contacto"` o esconder cards hasta tener artículos reales.
**Opción B** (correcta): crear pages MDX para cada artículo en `app/recursos/[slug]/page.mdx`.

---

## 🟠 High (fix este mes)

### 6. Agregar Person schema por cada abogado
**Impact**: E-E-A-T, signals de autoridad para AI Overviews
**Effort**: 45 min
**File**: nuevo `src/components/AbogadosSchema.tsx` o agregar a `Abogados.tsx`

```ts
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Bissu Bazbaz",
  jobTitle: "Socio fundador y Director",
  worksFor: { "@type": "LegalService", name: "Bissu Abogados, S.C." },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Universidad Panamericana" },
    { "@type": "EducationalOrganization", name: "Universidad Iberoamericana" },
  ],
  knowsAbout: ["Litigio mercantil", "Concurso mercantil", "Arbitraje internacional"],
  sameAs: ["https://www.linkedin.com/in/...", "https://www.bestlawyers.com/lawyers/..."],
};
```

Agregar foto (headshot profesional) — esto multiplica la autoridad percibida por Google.

### 7. Agregar BreadcrumbList schema
**Impact**: Migas en SERP
**Effort**: 10 min
**File**: `src/app/layout.tsx`

```ts
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bissu Abogados", item: "https://bissuabogados.com" },
  ],
};
```

(Crece cuando agreguen sub-pages)

### 8. Crear sub-pages programáticas por área de práctica
**Impact**: Multiplicar superficie indexable × 6 + targetear long-tail
**Effort**: 4-6 horas
**Files**: `src/app/areas/[slug]/page.tsx` + data file con contenido por área

Estructura por página:
- Hero con keyword targeting (`Litigio Mercantil en Ciudad de México`)
- Definición + servicios incluidos
- Casos relacionados (filtrar de Casos por área)
- FAQs específicas del área
- Schema `Service` + `FAQPage`
- CTA local

URLs:
- `/areas/litigio-civil`
- `/areas/litigio-mercantil`
- `/areas/concurso-mercantil`
- `/areas/derecho-familiar`
- `/areas/litigio-constitucional`
- `/areas/arbitraje-y-masc`

Las cards de Áreas en homepage linkean a estas pages (en lugar de quedar como cards inertes).

### 9. Agregar headers de seguridad faltantes
**Impact**: Best practices + ligero ranking boost
**Effort**: 5 min
**File**: `next.config.mjs`

```js
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
```

### 10. Optimizar hero-1.jpg
**Impact**: LCP -300ms estimado
**Effort**: 10 min
**Files**: `public/images/hero-1.jpg`

- Comprimir de 869KB → ~250KB (squoosh.app, MozJPEG quality 82)
- O exportar AVIF directo (~100KB) y referenciar
- Mantener JPEG fallback

---

## 🟡 Medium (fix este trimestre)

### 11. Recursos con artículos reales
**Impact**: Long-tail SEO + autoridad temática + citas en AI
**Effort**: ongoing
**Files**: `src/app/recursos/[slug]/page.mdx` + skill `claura-guide` ya existe

Aplicar el skill `faq-generator` y `claura-guide` para producir 6-12 artículos largos optimizados GEO + SEO con FAQs reales.

### 12. AggregateRating de testimonios
**Impact**: Rating estrellas en SERP
**Effort**: 30 min (si tienen reviews verificables)

Si hay Google Reviews / Best Lawyers reviews públicos:
```ts
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "47",
  bestRating: "5",
}
```

### 13. Página About/Equipo dedicada
**Impact**: E-E-A-T, target "Samuel Bissu abogado", "fundador despacho jurídico CDMX"
**Effort**: 2 horas
**Files**: `src/app/equipo/page.tsx`

Bio rica + Person schemas + foto + casos liderados + publicaciones + media mentions.

### 14. Local SEO push
**Impact**: Búsquedas geo "abogado Polanco", "despacho cerca de mí"
**Effort**: 3 horas

- Verificar/optimizar Google Business Profile
- Embed Maps en página Contacto (CSP ya lo permite)
- Schema `Place` con vecindario
- Citations en directorios legales mexicanos

### 15. Implementar `next/image` placeholder blur en hero
**Impact**: UX perceived performance + reducir CLS percibido
**Effort**: 10 min

```tsx
<Image src="/images/hero-1.jpg" placeholder="blur" blurDataURL="..." />
```

### 16. Reducir H3 count, agregar H4
**Impact**: jerarquía semántica más correcta
**Effort**: 1 hora

Cards de Casos/Áreas/Recursos: el título de la card debería ser H3 SI la sección es H2, pero entonces el "Resultado" o sub-elementos deben ser H4. Actualmente algunos h3 anidan h3 — corregir a h3 → h4.

---

## 🟢 Low (backlog / nice-to-have)

### 17. Service schema por cada práctica
**Effort**: 30 min cuando existan sub-pages

```ts
{
  "@type": "Service",
  serviceType: "Litigio Mercantil",
  provider: { "@type": "LegalService", name: "Bissu Abogados" },
  areaServed: "Mexico",
}
```

### 18. RSS feed para Recursos
**Effort**: 30 min cuando haya 5+ artículos

### 19. JSON-LD `WebSite` con `SearchAction` (sitelinks searchbox)
**Effort**: 10 min

```ts
{
  "@type": "WebSite",
  url: "https://bissuabogados.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bissuabogados.com/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}
```

### 20. Performance budget
**Effort**: setup en CI

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Total bundle < 250KB First Load JS

Vercel Analytics ya da CWV en producción.

### 21. Schema markup validation en CI
**Effort**: 30 min

Agregar test que valide JSON-LD contra schema.org via `schema-org-validator-action` en CI.

---

## Roadmap de implementación

### Sprint 1 (esta semana) — Critical
- [ ] robots.ts + sitemap.ts
- [ ] metadataBase + canonical + og:image + Twitter card
- [ ] lang="es-MX"
- [ ] FAQPage schema
- [ ] Reparar links rotos en Recursos

**Score esperado**: 62 → 78

### Sprint 2 (este mes) — High
- [ ] Person schema + headshot founder
- [ ] BreadcrumbList schema
- [ ] Headers de seguridad faltantes
- [ ] Optimizar hero-1.jpg

**Score esperado**: 78 → 85

### Sprint 3 (mes 2) — Sub-pages programáticas
- [ ] 6 sub-pages de área de práctica
- [ ] Service schema por cada una
- [ ] Sitemap actualizado
- [ ] Internal linking desde homepage

**Score esperado**: 85 → 92

### Sprint 4 (ongoing) — Content
- [ ] 6-12 artículos en Recursos (faq-generator + claura-guide)
- [ ] Bio detallada de cada abogado
- [ ] Local SEO push (GBP, citations)

**Score esperado**: 92 → 95+ (con autoridad ganada con tiempo)

---

## Métricas a monitorear (cuando deploy a prod)

- **Search Console**: impresiones por keyword, CTR, posición media
- **GA4 / Plausible**: organic traffic, bounce rate, time on page
- **Core Web Vitals**: LCP, INP, CLS via Vercel Analytics
- **SERP rankings**: targets `despacho jurídico CDMX`, `abogados Polanco`, `litigio mercantil CDMX`, etc.
- **AI citations**: mentions en ChatGPT/Perplexity para queries legales

Setup tools recomendados:
- Google Search Console (gratis, esencial)
- Vercel Analytics (incluido)
- Ahrefs/Semrush (paid, opcional)
- Brand monitoring para nombre + founder
