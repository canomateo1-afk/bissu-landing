# Bissu Abogados — Arquitectura Pillar / Cluster / Glosario

**Fecha**: 2026-05-08
**Estructura actual**: single-page landing (homepage únicamente)
**Estructura objetivo**: Hub-and-spoke con pillars × 6 áreas + cluster artículos + glosario jurídico

---

## Estado actual

| Surface | Existente | Status |
|---|---|---|
| Pillars | Homepage hace de pillar único | ⚠️ Pierde long-tail enorme |
| Spokes (artículos) | Recursos con 3 placeholders | ❌ No reales |
| Categorías | Implícitas en cards de homepage | ❌ Sin URL propia |
| Glosario | No existe | ❌ Oportunidad GEO masiva |

**Problema principal**: el sitio es plano. Google no tiene jerarquía topical para asignar autoridad. Pierde ~80% del tráfico potencial de queries long-tail jurídicas.

---

## Arquitectura propuesta

```
                    ┌─────────────────────┐
                    │   Homepage (/)      │  ← Brand pillar
                    │   "Bissu Abogados"  │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
       ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
       │  Pillars    │  │  Categorías  │  │  Glosario    │
       │  /areas/    │  │ /categoria/  │  │ /glosario/   │
       │  × 6 áreas  │  │  × 6 cat     │  │  × ~30 terms │
       └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
              │                │                │
       ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
       │  Spokes     │  │  CollectionPg│  │  DefinedTerm │
       │ /recursos/  │◄─┤  agrupa por  │  │   schema     │
       │  × 12-30    │  │   categoría  │  │              │
       └─────────────┘  └─────────────┘  └─────────────┘
              ▲                                  ▲
              └──────────────────────────────────┘
              cross-links: spoke → pillar + glosario
```

---

## 1. Pillars (`/areas/[slug]`) — 6 hubs principales

Cada área de práctica es un pillar. Se transforman las cards actuales en pages dedicadas.

| Pillar URL | Title | Target keywords primary | Spokes esperados |
|---|---|---|---|
| `/areas/litigio-civil` | Litigio Civil en México — Bissu Abogados | "abogado litigio civil cdmx", "demanda civil mexico" | 5-8 |
| `/areas/litigio-mercantil` | Litigio Mercantil y Corporativo | "abogado mercantil cdmx", "litigio sociedades mexico" | 5-8 |
| `/areas/litigio-concursal` | Concurso Mercantil y Reestructura | "concurso mercantil mexico", "abogado quiebra cdmx" | 4-6 |
| `/areas/litigio-familiar` | Derecho Familiar y Custodia | "abogado familiar cdmx", "divorcio mexico", "custodia compartida internacional" | 6-10 |
| `/areas/litigio-constitucional` | Litigio Constitucional y Amparo | "amparo cdmx", "juicio amparo mexico", "abogado constitucional" | 4-6 |
| `/areas/arbitraje-y-masc` | Arbitraje Internacional y MASC | "arbitraje cci mexico", "mediacion comercial cdmx" | 4-6 |

### Estructura de cada pillar (1000-1500 palabras)

```markdown
# {Área} en México

## ¿Qué es {área}?
[60-80 palabras de definición — passage citable]

## ¿Cuándo necesitás un abogado de {área}?
- Bullet 1
- Bullet 2
- Bullet 3
- Bullet 4
- Bullet 5

## Servicios incluidos
[Lista de los items que ya están en el card actual]

## Cómo trabaja Bissu un caso de {área}
[Reusar Proceso pero contextualizado a esta área]

## Casos resueltos en {área}
[Filtrar cases del componente Casos por área]

## Guías relacionadas
- [{spoke 1}](/recursos/...)
- [{spoke 2}](/recursos/...)
- [{spoke 3}](/recursos/...)

## Términos jurídicos relacionados
- [{glosario term 1}](/glosario/...)
- [{glosario term 2}](/glosario/...)

## Preguntas frecuentes
[5-8 FAQs específicas del área — render como FAQPage schema]

## Solicitar consulta
[CTA Calendly + WhatsApp]
```

### Schema por pillar

```ts
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bissuabogados.com/areas/litigio-civil#service",
      "serviceType": "Litigio Civil",
      "provider": { "@id": "https://bissuabogados.com#organization" },
      "areaServed": { "@type": "Country", name: "Mexico" },
      "hasOfferCatalog": {...}
    },
    {
      "@type": "Article",
      "headline": "Litigio Civil en México — Guía completa",
      "datePublished": "2026-05-08",
      "dateModified": "2026-05-08",
      "lastReviewed": "2026-05-08",
      "author": { "@id": "https://bissuabogados.com#samuel-bissu" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [...]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { position: 1, name: "Inicio", item: "https://bissuabogados.com" },
        { position: 2, name: "Áreas de práctica", item: "https://bissuabogados.com/areas" },
        { position: 3, name: "Litigio Civil" }
      ]
    }
  ]
}
```

---

## 2. Spokes (`/recursos/[slug]`) — Artículos detallados

Reemplazar los 3 placeholders actuales con contenido real. Cada spoke linkea a su pillar correspondiente + glosario terms.

### Topical clusters por pillar (sugerencias para Sprint 1)

#### Cluster: Litigio Civil
1. `qué-hacer-si-te-demandan-civilmente` — los primeros 30 días
2. `daños-y-perjuicios-cómo-cuantificar`
3. `homologación-sentencia-extranjera-mexico`
4. `acción-colectiva-cuando-aplica`
5. `arrendamiento-conflicto-inquilino-arrendador`

#### Cluster: Litigio Mercantil
1. `conflicto-entre-accionistas-cómo-resolverlo`
2. `dilución-accionaria-defensa-minoritario`
3. `interpretación-contrato-mercantil`
4. `fideicomiso-empresarial-cuándo-conviene`
5. `convenio-no-competencia-validez-mexico`

#### Cluster: Concursal
1. `concurso-mercantil-cuándo-solicitarlo` (ya tienen idea de este)
2. `convenio-concursal-vs-quiebra-diferencias`
3. `recuperación-créditos-procedimiento-concursal`
4. `quita-y-espera-negociación-acreedores`
5. `concurso-mercantil-internacional-homologación`

#### Cluster: Familiar
1. `custodia-compartida-internacional-derechos-menor` (placeholder existente)
2. `pensión-alimenticia-cuanto-y-cómo`
3. `restitución-internacional-menores-convenio-haya`
4. `divorcio-mutuo-acuerdo-vs-necesario`
5. `sucesión-testamentaria-vs-legítima`
6. `patria-potestad-pérdida-y-recuperación`

#### Cluster: Constitucional
1. `amparo-contra-acto-administrativo-pyme` (placeholder existente)
2. `amparo-directo-vs-indirecto-cuál-corresponde`
3. `acción-inconstitucionalidad-quien-puede-promoverla`
4. `controversia-constitucional-órganos-poder`
5. `suspensión-amparo-cómo-y-cuándo`

#### Cluster: Arbitraje y MASC
1. `arbitraje-cci-cuándo-conviene-vs-litigio`
2. `cláusula-arbitral-redacción-correcta`
3. `homologación-laudo-extranjero-mexico`
4. `mediación-comercial-vs-arbitraje`
5. `medidas-cautelares-arbitraje-cuándo-pedirlas`

**Total Sprint 1 ambicioso**: 30 artículos. **Realista**: empezar con 12 (2 por pillar) y crecer.

### Estructura de cada spoke

```markdown
# {Título-pregunta o how-to}

## TL;DR
[40-60 palabras — passage extractable]

## ¿Qué es / Por qué importa?
[Definición clara con link a /glosario/{término-clave}]

## [Cuerpo del artículo — H2/H3 question-based, 800-1500 palabras]

## Casos típicos en Bissu
[1-2 ejemplos anonimizados — vincular a Casos del homepage si aplica]

## Guías relacionadas
- [{otro spoke del mismo cluster}](/recursos/...)
- [{spoke de cluster relacionado}](/recursos/...)

## Términos relacionados
- [{glosario term}](/glosario/...)

## ¿Tu caso encaja con esto?
[CTA pillar + Calendly]

---
*Última revisión: {lastReviewed}*
*Autor: Samuel Bissu Bazbaz, Bissu Abogados*
```

### Schema por spoke

```ts
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "dateModified": "...",
  "lastReviewed": "...",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".tldr", "h2"]
  },
  "author": { "@id": "https://bissuabogados.com#samuel-bissu" },
  "publisher": { "@id": "https://bissuabogados.com#organization" },
  "isPartOf": { "@id": "https://bissuabogados.com/areas/{pillar}" },
  "image": "..."
}
```

---

## 3. Categorías (`/categoria/[slug]`) — CollectionPages

Cada categoría = una vista filtrada de spokes que ranquea por sí sola.

| URL | Title | Spokes incluidos |
|---|---|---|
| `/categoria/litigio-civil` | "Recursos de Litigio Civil — Bissu Abogados" | filtrar spokes con `category: "Litigio Civil"` |
| `/categoria/concursal` | "Recursos de Litigio Concursal" | ... |
| `/categoria/familiar` | "Recursos de Derecho Familiar" | ... |
| `/categoria/mercantil` | "Recursos de Litigio Mercantil" | ... |
| `/categoria/constitucional` | "Recursos de Litigio Constitucional" | ... |
| `/categoria/arbitraje` | "Recursos de Arbitraje y MASC" | ... |

**Diferencia con pillar**: pillar es "guía completa del área", categoría es "todos los recursos de la categoría". Pillar tiene contenido editorial propio; categoría es listing.

### Schema CollectionPage

```ts
{
  "@type": "CollectionPage",
  "name": "Recursos de Litigio Concursal",
  "url": "https://bissuabogados.com/categoria/concursal",
  "description": "Guías y análisis sobre concurso mercantil, reestructura, quiebra y convenios concursales en México.",
  "isPartOf": { "@id": "https://bissuabogados.com#website" },
  "hasPart": [
    { "@type": "Article", "@id": "https://bissuabogados.com/recursos/concurso-mercantil-cuando-solicitarlo" },
    ...
  ]
}
```

### Regla crítica: filtrar categorías vacías del sitemap

```ts
// src/app/sitemap.ts
import { resourceIndex } from '@/content/resources';
import { CATEGORIES } from '@/lib/categories';

const categoriesWithContent = new Set(resourceIndex.map(r => r.category));
const categoryEntries = CATEGORIES
  .filter(c => categoriesWithContent.has(c.slug))
  .map(c => ({
    url: `https://bissuabogados.com/categoria/${c.slug}`,
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  }));
```

Y en la page hacer `notFound()` si la categoría está vacía:
```tsx
export default async function CategoryPage({ params }) {
  const articles = resourceIndex.filter(r => r.category === params.slug);
  if (articles.length === 0) notFound();
  return ...;
}
```

---

## 4. Glosario (`/glosario/[term]`) — DefinedTerm pages

Cada término jurídico que aparece en el sitio merece su propia URL ~500 palabras con `DefinedTerm` schema. Los LLMs (ChatGPT, Perplexity) priorizan estos para "qué es X".

### 30 términos prioritarios para Bissu

**Civil/Procesal**:
1. `acción-colectiva` — Definición + cuándo aplica
2. `daño-moral` — Diferencia con daño patrimonial
3. `homologación-sentencia` — Procedimiento en MX
4. `responsabilidad-civil` — Tipos
5. `acción-personal-vs-real`

**Mercantil/Corporativo**:
6. `título-de-crédito`
7. `fideicomiso` — Tipos y partes
8. `dilución-accionaria`
9. `convenio-de-no-competencia`
10. `cláusula-de-confidencialidad`

**Concursal**:
11. `concurso-mercantil` — Definición + etapas
12. `quita` — Cómo se calcula
13. `convenio-concursal`
14. `quiebra` — Diferencia con concurso
15. `acreedor-reconocido`
16. `conciliador-concursal`

**Familiar**:
17. `patria-potestad`
18. `custodia-compartida`
19. `pensión-alimenticia`
20. `restitución-internacional-menores`
21. `convenio-de-la-haya`

**Constitucional**:
22. `amparo` — Tipos
23. `amparo-directo`
24. `amparo-indirecto`
25. `acción-de-inconstitucionalidad`
26. `controversia-constitucional`
27. `suspensión-del-acto-reclamado`

**Arbitraje/MASC**:
28. `arbitraje-comercial-internacional`
29. `cláusula-arbitral`
30. `laudo-arbitral`
31. `medidas-cautelares-arbitraje`
32. `cci` — Cámara de Comercio Internacional

### Estructura de cada glosario term (~500 palabras)

```markdown
# {Término}

## Definición
[2-3 frases extractables — máximo 60 palabras]

## ¿Para qué sirve / cuándo se usa?
[Contexto de uso, 100-150 palabras]

## ¿Cómo se aplica en México?
[Procedimiento, plazos, autoridad competente, ley que lo regula]

## Ejemplo concreto
[Caso típico abreviado]

## Términos relacionados
- [{related glosario}](/glosario/...)
- [{related glosario}](/glosario/...)

## Guías que profundizan
- [{spoke}](/recursos/...)
- [{pillar}](/areas/...)
```

### Schema DefinedTerm

```ts
{
  "@type": "DefinedTerm",
  "@id": "https://bissuabogados.com/glosario/concurso-mercantil#term",
  "name": "Concurso mercantil",
  "description": "Procedimiento judicial mexicano regulado por la Ley de Concursos Mercantiles que permite a una empresa con problemas financieros reestructurar su deuda con acreedores o liquidarse de forma ordenada.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://bissuabogados.com/glosario#set",
    "name": "Glosario jurídico Bissu Abogados",
    "url": "https://bissuabogados.com/glosario"
  },
  "url": "https://bissuabogados.com/glosario/concurso-mercantil",
  "subjectOf": {
    "@type": "WebPage",
    "url": "https://bissuabogados.com/glosario/concurso-mercantil"
  }
}
```

### Glosario index `/glosario`

Página listing alfabético + agrupado por área. Schema `DefinedTermSet`.

---

## 5. Internal linking rules

```
Homepage ─────┐
              ├──→ /areas/[pillar] ──→ /recursos/[spoke] ──→ /glosario/[term]
/categoria/x ─┘                            ↑                       ↑
                                           └───────────────────────┘
```

### Reglas concretas

- **Homepage** linkea a los 6 pillars (en sección Áreas) + 1-3 spokes destacados (en Recursos)
- **Pillar** linkea a 5-8 spokes propios + 2-5 glosario terms + 1 link al pillar próximo (cross-pillar journey)
- **Spoke** linkea a SU pillar (≥1 link en body) + 2-3 spokes hermanos + 2-4 glosario terms
- **Categoría** linkea SOLO a spokes (mantener clean)
- **Glosario term** linkea a 2-3 spokes que profundizan + 1 pillar correspondiente

### Audit objetivo: 0 articles huérfanos

```js
// scripts/internal-link-report.mjs
import { resourceIndex } from './content/resources';
const inbound = Object.fromEntries(resourceIndex.map(r => [r.slug, []]));

for (const r of resourceIndex) {
  const links = [...r.body.matchAll(/\]\(\/recursos\/([a-z0-9-]+)\)/g)];
  for (const m of links) {
    if (inbound[m[1]]) inbound[m[1]].push(r.slug);
  }
}

const orphans = Object.entries(inbound).filter(([_, ins]) => ins.length === 0);
console.log(`Orphans: ${orphans.length}`);
```

---

## 6. Implementación — Sprint plan

### Sprint 1 (2 semanas) — Foundation
- [ ] Crear estructura de routes:
  - `src/app/areas/[slug]/page.tsx`
  - `src/app/recursos/[slug]/page.tsx`
  - `src/app/categoria/[slug]/page.tsx`
  - `src/app/glosario/page.tsx` + `src/app/glosario/[term]/page.tsx`
- [ ] MDX setup (next-mdx-remote o @next/mdx)
- [ ] Frontmatter types
- [ ] 6 pillar pages (1500w cada uno)
- [ ] Sitemap actualizado
- [ ] Cards de Áreas en homepage linkean a `/areas/[slug]` (no más cards inertes)

### Sprint 2 (2 semanas) — Content depth
- [ ] 12 spokes (2 por pillar) — usar skill `claura-guide` adaptado
- [ ] 15 glosario terms iniciales
- [ ] CollectionPage por categoría
- [ ] Reemplazar Recursos.tsx placeholders con datos reales

### Sprint 3 (mes 2) — Scale
- [ ] 18 spokes adicionales (total 30)
- [ ] 17 glosario terms adicionales (total 32)
- [ ] Internal link audit script en CI
- [ ] Buscar quotes/data points únicos para enriquecer pillars

### Sprint 4 (mes 3) — Authority
- [ ] Republicar pillars con casos actualizados
- [ ] `lastReviewed` mensual
- [ ] Backlink outreach: media legal mexicano para citation
- [ ] Schema validation en CI

---

## 7. Verificación post-deploy

```bash
BASE="https://bissuabogados.com"

# Pillars (esperado: 200 + Article+FAQPage schema)
for p in litigio-civil litigio-mercantil litigio-concursal litigio-familiar litigio-constitucional arbitraje-y-masc; do
  status=$(curl -sL -o /dev/null -w "%{http_code}" "$BASE/areas/$p")
  schema=$(curl -sL "$BASE/areas/$p" | grep -c '"@type":"FAQPage"')
  echo "areas/$p: $status · FAQPage schema: $schema"
done

# Categorías
for c in litigio-civil mercantil concursal familiar constitucional arbitraje; do
  status=$(curl -sL -o /dev/null -w "%{http_code}" "$BASE/categoria/$c")
  echo "categoria/$c: $status"
done

# Glosario
status=$(curl -sL -o /dev/null -w "%{http_code}" "$BASE/glosario")
echo "glosario index: $status"
schema_count=$(curl -sL "$BASE/glosario/concurso-mercantil" | grep -c '"@type":"DefinedTerm"')
echo "DefinedTerm schemas en concurso-mercantil: $schema_count"

# Sitemap
curl -sL "$BASE/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | wc -l
```

Resultado esperado:
- 6 pillars × 200 + cada con `FAQPage` schema ≥ 1
- 6 categorías × 200
- Glosario index 200
- Cada glosario term con `DefinedTerm` schema ≥ 1
- Sitemap con ≥ 60 URLs (1 home + 6 pillars + 6 categorías + glosario index + ~30 terms + ~12 spokes)

---

## 8. Métricas de éxito

### Después de Sprint 1
- [ ] Homepage cards de Áreas linkean a sub-pages reales
- [ ] 6 pillars indexables
- [ ] Sitemap con 13+ URLs

### Después de Sprint 2
- [ ] 12+ spokes con autores
- [ ] 15 glosario terms con DefinedTerm schema
- [ ] CollectionPage por categoría
- [ ] Internal linking sin huérfanos

### Después de Sprint 3
- [ ] 30 spokes (cubriendo todos los clusters)
- [ ] 32 glosario terms
- [ ] Search Console: queries crecientes en long-tail jurídicas
- [ ] Cita en al menos 1 AI Overview (Google) o Perplexity para query genérica jurídica

### Después de Sprint 4
- [ ] Backlinks de medios legales mexicanos (LegisLab, El Mundo del Abogado, etc.)
- [ ] Wikipedia mention si lograron entry
- [ ] YouTube canal con 5+ videos del founder

---

## 9. Cómo conecta con la implementación actual

El sitio actual tiene los **datos** para todos los pillars + glosario en los componentes:
- `Areas.tsx` — bodies de pillars (los items + summary)
- `FAQ.tsx` — FAQ del pillar agregado
- `Casos.tsx` — casos a vincular desde pillars
- Comparación, Proceso — content reusable en pillars

**Refactoring path**:
1. Extraer datos de áreas a `src/content/areas/[slug].mdx`
2. Crear `src/app/areas/[slug]/page.tsx` que lee MDX + renderiza con componentes existentes
3. Cards de homepage Areas.tsx pasan a `<Link href={\`/areas/\${slug}\`}>`
4. Recursos pasa a leer de `src/content/recursos/*.mdx`
5. Glosario nuevo en `src/content/glosario/*.mdx`

Es **refactor, no rewrite** — reusa todo lo existente.

---

## Próximo paso

Ejecutar el skill **`claura-guide`** o **`programmatic-seo`** para producir el primer batch de 6 pillars + 12 spokes con FAQs reales. Cada pillar toma ~1.5h con asistencia AI; cada spoke ~1h.

Total Sprint 1 + 2 estimado: **20-30 horas de content + 8-12 horas de implementación técnica** (4-6 semanas de trabajo a tiempo parcial).
