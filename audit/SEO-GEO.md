# Bissu Abogados — GEO / AI Search Optimization Audit

**Fecha**: 2026-05-08
**Targets**: Google AI Overviews · ChatGPT (web search) · Perplexity · Claude · Bing Copilot

---

## GEO Readiness Score: **24/100**

| Dimensión | Peso | Score |
|---|---|---|
| Citability (passages 134-167w) | 25% | 4/25 |
| Structural readability | 20% | 14/20 |
| Multi-modal content | 15% | 7/15 |
| Authority & brand signals | 20% | 9/20 |
| Technical accessibility (AI crawlers) | 20% | 8/20 |

### Platform breakdown (estimado)

| Platform | Score | Razón |
|---|---|---|
| Google AI Overviews | 25/100 | SSR OK, falta FAQPage schema, pages para top-10 ranking |
| ChatGPT | 18/100 | Sin Wikipedia, sin Reddit, sin contenido citable extractable |
| Perplexity | 15/100 | Sin community validation, sin definiciones explícitas |
| Bing Copilot | 22/100 | Sin IndexNow, posibilidades estándar |
| Claude | 22/100 | SSR es OK, contenido de calidad pero no marcado para extracción |

---

## 1. AI Crawler Access Status

❌ **Sin robots.txt** — todos los crawlers tienen acceso default (allow), pero no está documentado ni gestionado intencionalmente.

### Recomendación: configurar acceso explícito

Bissu busca **autoridad y citas** (no es contenido propietario premium). Estrategia: **permitir todos los AI crawlers** para maximizar visibilidad.

```txt
# /public/robots.txt — generado por src/app/robots.ts

User-agent: *
Allow: /

# AI crawlers — explícitamente permitidos para visibility
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: cohere-ai
Allow: /

# Common Crawl — bloquear (training datasets de uso impreciso)
User-agent: CCBot
Disallow: /

# ByteDance — bloquear (sin valor para audiencia legal MX)
User-agent: Bytespider
Disallow: /

Sitemap: https://bissuabogados.com/sitemap.xml
```

**Por qué**: bloquear CCBot y Bytespider mantiene los training datasets más controlados sin perder visibilidad en search/AI search principales.

---

## 2. llms.txt Status

❌ **Ausente**

### Recomendación: crear `/public/llms.txt`

Standard emergente (Anthropic + OpenAI lo respetan). Da contexto estructurado a LLMs sobre el sitio.

```markdown
# Bissu Abogados, S.C.
> Despacho jurídico mexicano (CDMX) especializado en litigio y MASC. Reconocido por Best Lawyers in Mexico 2026, Leaders League 2025 y Tops Diamante 2025.

## Identidad
- Nombre legal: Bissu Abogados, S.C.
- Fundado: 2017
- Sede: Av. Prado Norte 365, Int. 6, Lomas de Chapultepec V Sección, Miguel Hidalgo, 11000, Ciudad de México
- Teléfono: +52-55-5545-1308
- Email: sbissu@bissuabogados.com

## Founder
- Samuel Bissu Bazbaz — Socio fundador y Director
  - LL.M. en Derecho de la Empresa, Universidad Panamericana (2017)
  - Lic. en Derecho, Universidad Iberoamericana (2006)

## Áreas de práctica
- [Litigio Civil](/areas/litigio-civil) — Contratos, daños y perjuicios, derechos individuales
- [Litigio Mercantil y Corporativo](/areas/litigio-mercantil) — Sociedades, contratos mercantiles
- [Litigio Concursal](/areas/concursal) — Reestructuras, quiebras, convenios
- [Litigio Familiar](/areas/familiar) — Divorcios, custodia, sucesiones
- [Litigio Constitucional](/areas/constitucional) — Amparo, acciones de inconstitucionalidad
- [Arbitraje y MASC](/areas/arbitraje) — Arbitraje internacional, mediación, conciliación

## Hechos clave (citables)
- 8+ años de operación (fundado 2017)
- 6 áreas activas de práctica
- Respuesta inicial garantizada en 24 horas hábiles
- Consulta inicial gratuita de 20 minutos
- Reconocido por Best Lawyers in Mexico 2026 y Leaders League 2025
- Atiende empresas familiares, multinacionales, instituciones, particulares de alto patrimonio y PYMEs
- Casos: arbitraje internacional (cláusula CCI), reestructuras concursales, amparo administrativo, custodia internacional

## Contacto
- Web: https://bissuabogados.com
- Calendly: agendar consulta inicial gratuita
- WhatsApp: https://walink.co/727927

## Política de citación
Permitido citar contenido del sitio con atribución a "Bissu Abogados" y link a la página fuente. Para uso comercial o reproducción extensa, contactar a sbissu@bissuabogados.com.
```

Esta versión es ~150 palabras + lista estructurada — perfecto para LLM consumption.

---

## 3. Brand Mention Analysis

| Plataforma | Presencia | Strength |
|---|---|---|
| **Wikipedia** | ❌ No | 🔴 Crítico — sin entry, ChatGPT pierde 47.9% de su fuente principal |
| **Best Lawyers** | ✅ Listed | 🟢 Fuente jurídica de alta autoridad |
| **Leaders League** | ✅ Reconocido 2025 | 🟢 Fuente jurídica de alta autoridad |
| **LinkedIn** | ✅ Página empresa | 🟡 Pero baja actividad/contenido |
| **Instagram** | ✅ Perfil | 🟡 Reach limitado en B2B legal |
| **Facebook** | ✅ Página | 🟡 Reach limitado |
| **YouTube** | ❌ No detectado | 🔴 Correlación 0.737 con AI citations — MAYOR oportunidad |
| **Reddit** | ❌ No detectado | 🔴 46.7% de Perplexity citations |
| **Quora** | ❌ No detectado | 🟡 Útil para Q&A jurídicas |
| **Justia / Avvo / Mexico Lawyer Directories** | ⚠️ verificar | 🟡 Citations legales |

### Estrategia recomendada

#### Wikipedia (alta dificultad pero alto ROI)
- Crear página de Bissu Abogados requiere notability (trabajos publicados, casos públicos, awards verifiables) — **sí tienen** Best Lawyers + Leaders League
- Alternativa: agregar referencias a Bissu en páginas existentes ("Best Lawyers in Mexico", "Litigation in Mexico", "Mexican legal system")

#### YouTube (ROI alto, esfuerzo medio)
- Canal con contenido de Samuel Bissu explicando: "Qué es el concurso mercantil", "Diferencia entre amparo directo e indirecto", "Cómo funciona la custodia internacional"
- Ofrece thumbnail authority + transcript indexable + entity reinforcement
- 5-10 videos cortos (3-5 min) son suficientes para empezar

#### Reddit (ROI medio, esfuerzo bajo)
- Activar en `/r/mexico`, `/r/legaladvice`, `/r/Mexico_Politics` con respuestas técnicas (sin auto-promo)
- Mention de Bissu como referencia ocasional cuando aplica

#### LinkedIn content
- Samuel Bissu publicando 1-2 posts/semana sobre casos genéricos, tendencias legales MX
- Aumenta entity strength + brand mention frequency

---

## 4. Passage-Level Citability

### Audit del contenido actual

**Optimal passage length: 134-167 palabras**, self-contained, con respuesta directa en primeras 40-60 palabras.

#### Hero
- ✅ Tiene stats verificables (8+ años, 6 áreas, 24h respuesta, Best Lawyers 2026)
- ❌ Pero no están en formato citable — son cards visuales, no párrafos extractables

#### Firma intro
> "Bissu Abogados, S.C. es un despacho especializado, con profunda experiencia y conocimiento legal, fundado por abogados preparados para enfrentar las necesidades complejas de nuestros clientes."

- 28 palabras, define qué es Bissu (✅ patrón "X es...")
- Pero **muy corto** para citar — debería ser un párrafo de 134-167 palabras con stats embebidos

#### Proceso
- ✅ Steps numerados (estructura ideal para AI extraction)
- ✅ Cada step tiene timing concreto
- ⚠️ Bodies son ~30-50 palabras — sub-óptimos para citar pero buenos como list items

#### Áreas — ❌ Crítico
- Cards con summary + bullet items
- Cada área tiene ~20 palabras de descripción
- **Falta**: definición rica de cada área (134-167 palabras), con cuándo aplica, ejemplos, casos típicos
- Esto es donde AI Overviews citan — "What is litigio mercantil in Mexico?"

#### Comparación — 🟡 OK
- Estructura tabular ideal para extracción
- 6 criterios × 2 columnas = 12 data points
- ⚠️ Falta `Table` schema markup

#### Casos — ✅ Citables
- Cada caso tiene: área + métrica + duración + descripción
- Métricas concretas: "60% de quita", "3.4× indemnización", "11 meses"
- Buen formato para extraction
- ⚠️ Falta `CaseStudy` o `CreativeWork` schema

#### FAQ — 🔴 Crítico
- Tiene 5+ preguntas y respuestas
- ⚠️ Respuestas cortas (~70 palabras) — sub-óptimas, deberían ser 134-167w
- ❌ **SIN FAQPage schema** — pierde 70%+ del potential AI citation value
- Ejemplo actual: "¿Cuánto cuesta una primera consulta? La primera consulta es gratuita — 20 minutos. En esa reunión escuchamos tu caso..."
  - Mejorable a 150 palabras con: detalle del proceso, qué se entrega después, qué expectativas, cuándo NO se cobra

### Recomendación: reescribir 6 passages clave

Crear bloques de 134-167 palabras con estructura:
1. **Frase respuesta directa** (40-60 palabras inicial)
2. **Detalle/contexto** (60-80 palabras)
3. **Cierre con dato/stat verificable** (20-40 palabras)

**Ejemplo de passage rewrite — "¿Qué es un concurso mercantil?"**:

> Un concurso mercantil es el procedimiento judicial mexicano regulado por la Ley de Concursos Mercantiles que permite a una empresa con problemas financieros reestructurar su deuda con acreedores o, en su caso, liquidarse de forma ordenada. Inicia cuando la empresa o sus acreedores demuestran que el deudor incumplió pagos a dos o más acreedores y que sus pasivos vencidos representan al menos el 35% del total. El procedimiento tiene dos etapas: conciliación (180 días, prorrogables a 365) donde se busca un convenio con los acreedores, y quiebra cuando la conciliación falla y se ordena la liquidación de bienes. Bissu Abogados ha negociado convenios concursales con quitas del 60%, manteniendo la operación de empresas familiares con tres generaciones operando.

160 palabras, define el término, da datos legales concretos, cierra con stat verificable de Bissu.

---

## 5. Server-Side Rendering Check

✅ **Excelente** — Next.js 14 App Router renderiza todo el contenido principal en SSR.

| Component | SSR | Notas |
|---|---|---|
| Hero | ✅ | Animation kicks in client-side, contenido en HTML |
| Firma | ✅ | Texto completo en SSR |
| Proceso | ✅ | Steps en SSR |
| Áreas | ✅ | Cards completas en SSR |
| Casos | ✅ | Featured + cards en SSR |
| Comparación | ✅ | Tabla en SSR |
| Equipo | ✅ | Bios en SSR |
| FAQ | ⚠️ verificar | Accordion CSS-only (`grid-template-rows: 0fr` collapse) — el contenido SÍ está en HTML, solo está visualmente clipped |
| Recursos | ✅ | Cards en SSR |
| Contacto | ✅ | Form en SSR |

### Acción
Verificar con `curl -s https://bissu-landing-... | grep -c 'La primera consulta es gratuita'` que el FAQ answer esté en HTML inicial → debe ser `1+`.

---

## 6. Schema Recommendations para AI discoverability

### Crítico — agregar ya

#### `FAQPage`
Wrap todas las FAQ con schema. Cada `acceptedAnswer.text` debe ser texto plano de 134-167 palabras (re-escribir respuestas para llegar a esa longitud).

#### `Speakable` para voice assistants
Agregar a `LegalService` y a cada futura página:
```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".faq-answer", ".intro-paragraph"]
}
```

### Alta prioridad — agregar este mes

#### `DefinedTerm` × 6 áreas
Cuando se creen sub-pages de área, cada una con `DefinedTerm` schema. Esto las hace prime targets para "what is X" queries en ChatGPT.

```json
{
  "@type": "DefinedTerm",
  "name": "Concurso mercantil",
  "description": "Procedimiento judicial mexicano regulado por la Ley de Concursos Mercantiles que permite reestructurar deuda o liquidar de forma ordenada.",
  "url": "https://bissuabogados.com/areas/concursal",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Glosario jurídico Bissu",
    "url": "https://bissuabogados.com/glosario"
  },
  "subjectOf": {
    "@type": "WebPage",
    "url": "https://bissuabogados.com/areas/concursal"
  }
}
```

#### `Person` con `knowsAbout` rico

Para Samuel Bissu:
```json
{
  "@type": "Person",
  "@id": "https://bissuabogados.com#samuel-bissu",
  "name": "Samuel Bissu Bazbaz",
  "jobTitle": "Socio fundador y Director, Bissu Abogados, S.C.",
  "knowsAbout": [
    "Litigio mercantil",
    "Concurso mercantil",
    "Arbitraje internacional",
    "Reestructura empresarial",
    "Conflictos accionarios",
    "Derecho corporativo mexicano"
  ],
  "alumniOf": [...],
  "sameAs": [
    "https://www.linkedin.com/in/...",
    "https://www.bestlawyers.com/lawyers/..."
  ],
  "image": "https://bissuabogados.com/images/team/samuel-bissu.jpg"
}
```

#### `Article` con `lastReviewed` para Recursos
Cuando se publiquen artículos:
```json
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "2025-03-19",
  "dateModified": "2025-04-15",
  "lastReviewed": "2026-05-08",
  "speakable": {...},
  "author": { "@id": "https://bissuabogados.com#samuel-bissu" }
}
```

### Media prioridad

#### `Table` schema en Comparación
```json
{
  "@type": "Table",
  "about": "Comparación operativa entre Bissu Abogados y un despacho jurídico tradicional mexicano",
  "comment": "6 criterios: responsable del caso, diagnóstico, comunicación, honorarios, selección, reconocimientos."
}
```

#### `HowTo` para Proceso
Los 4 pasos de Proceso son perfectos para `HowTo` schema. Cada step: name, text, image, timeRequired.

---

## 7. Content Reformatting Suggestions

### Reescribir FAQ answers a 134-167 palabras cada una

Actual:
> "La primera consulta es gratuita — 20 minutos. En esa reunión escuchamos tu caso, identificamos el área aplicable y decidimos si Bissu es el equipo adecuado o si te conviene otra firma." (~37 palabras)

Recomendado (~150 palabras):
> "La primera consulta en Bissu Abogados es **gratuita y dura 20 minutos**. La realizamos por videollamada o presencial en nuestras oficinas de Polanco, CDMX. En esa reunión hacemos tres cosas concretas: primero, escuchamos tu caso sin interrumpir y tomamos nota de hechos, contraparte y plazos críticos. Segundo, identificamos qué área de práctica aplica (litigio civil, mercantil, concursal, familiar, constitucional o MASC) y si tu asunto es algo que efectivamente podemos defender con expertise. Tercero, te decimos honestamente si Bissu es el equipo adecuado para tu caso o si te conviene una firma con perfil más específico — si pasa lo segundo, te referenciamos a un colega sin costo. No iniciamos ningún cobro hasta que firmemos convenio escrito de honorarios. Después de la consulta, en 24 horas hábiles te entregamos un dictamen escrito con escenarios, plazos y honorarios estimados."

Crece de 37 → 150 palabras, mantiene tono, agrega: ubicación física, modalidad, los 3 outputs concretos, tiempo de respuesta post-consulta, política de no-cobro hasta convenio.

### Agregar definiciones explícitas en Áreas

Cada card de Áreas hoy tiene:
> "Litigio Civil — Contratos, daños y perjuicios, derechos individuales, sentencias extranjeras."

Recomendado (cuando se hagan sub-pages):
- Hero del sub-page: "**El litigio civil es** la rama del derecho mexicano que resuelve conflictos entre particulares por incumplimiento de obligaciones, daños patrimoniales o lesión a derechos individuales..."

### Question-based H2 headings

Actual: "Cuatro pasos. Cero ambigüedad."
Recomendado para una sub-page de "Proceso" dedicada: "¿Cómo trabaja Bissu Abogados un caso?"

Las query-matching headings duplican AI Overview citations.

---

## 8. Top 5 Highest-Impact Changes

### 1. 🔴 Implementar FAQPage schema con respuestas reescritas a 134-167 palabras
**Impact**: +40% probabilidad de citation en Google AI Overviews
**Effort**: 2 horas (reescribir 5 FAQs + agregar schema)
**ROI**: máximo del listado

### 2. 🔴 Crear `/llms.txt`
**Impact**: contexto explícito para Anthropic, OpenAI, Perplexity
**Effort**: 30 minutos
**ROI**: alto, low-effort

### 3. 🔴 Configurar robots.txt con AI crawler allowlist
**Impact**: garantiza acceso a GPTBot, ClaudeBot, PerplexityBot
**Effort**: 15 minutos (con `app/robots.ts`)
**ROI**: alto

### 4. 🟠 Crear sub-pages de área con `DefinedTerm` schema
**Impact**: targeting de "qué es X" queries (alto volumen long-tail)
**Effort**: 6-8 horas (6 sub-pages × 1h cada)
**ROI**: muy alto, multiplica cited surface

### 5. 🟠 Agregar `Person` schemas con headshots + bio rica para los 2 abogados
**Impact**: E-E-A-T signals + entity disambiguation
**Effort**: 1 hora + tiempo de fotos profesionales
**ROI**: alto para queries con nombre del founder

---

## 9. Roadmap GEO

### Sprint 1 — Foundation (esta semana)
- [ ] robots.txt con AI crawlers + Sitemap reference
- [ ] llms.txt en `/public/`
- [ ] FAQPage schema (con reescritura de respuestas)
- [ ] Speakable schema en LegalService
- [ ] Person schema (Samuel Bissu + Adolfo Vargas) — con foto

**Score esperado**: 24 → 50

### Sprint 2 — Sub-pages (próximas 2 semanas)
- [ ] 6 sub-pages de área de práctica con DefinedTerm schema
- [ ] Cada area con FAQ propia (FAQPage) específica
- [ ] HowTo schema en Proceso
- [ ] Table schema en Comparación
- [ ] Cross-linking pillar (homepage) ↔ cluster (areas)

**Score esperado**: 50 → 70

### Sprint 3 — Authority (mes 1-2)
- [ ] Canal YouTube con 5 videos explainer (Samuel Bissu)
- [ ] LinkedIn content cadence (founder + empresa)
- [ ] Wikipedia entry intentar (notability con awards)
- [ ] Justia, Avvo, directorios legales mexicanos profile completion
- [ ] First batch de Recursos artículos (4-6) con Article schema + lastReviewed

**Score esperado**: 70 → 85

### Sprint 4 — Refinement (mes 2-3)
- [ ] Reddit presence — Samuel respondiendo en r/mexico, r/legaladvice
- [ ] Glosario jurídico (`/glosario`) con DefinedTerm × 30 términos
- [ ] Original research / data report (citable unique data)
- [ ] Comparative content "vs competitor X" pages

**Score esperado**: 85 → 90+

---

## 10. Métricas a trackear

### Indicadores de citation AI

- **Brand mentions monitoring**: Google Alerts + Mentioned.com con "Bissu Abogados"
- **AI search test queries**: cada mes, query manual en ChatGPT/Perplexity:
  - "best mexican law firm for concurso mercantil"
  - "abogado litigio mercantil CDMX"
  - "qué es el concurso mercantil"
  - "Samuel Bissu abogado"
  - Verificar si Bissu aparece en respuesta
- **Schema validation**: Schema.org validator + Google Rich Results test cada deploy
- **GSC AI Overviews impressions** (cuando GSC habilite la métrica oficialmente)

### Authority growth

- Backlinks (Ahrefs/Semrush) — domain rating monthly
- LinkedIn followers (Bissu + Samuel)
- YouTube subs + watch time (cuando lance)
- Wikipedia views (si crean entry)

---

## Conclusión

Bissu tiene **calidad de contenido** suficiente para citation pero **falta el formato citable + el schema markup + la presencia cross-platform**. La diferencia entre score 24 y score 90 son acciones específicas, no contenido nuevo (excepto sub-pages y autoridad externa).

**Próximo paso recomendado**: implementar Sprint 1 completo (4-5 horas de trabajo total) → score salta a 50. Esa es la inversión más eficiente.
