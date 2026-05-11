import type { MetadataRoute } from "next";
import { v4Team } from "@/lib/v4-team";
import { v4Areas } from "@/lib/v4-areas";

const SITE_URL = "https://bissuabogados.com";

// Áreas de práctica (futuras sub-pages — listarlas igual aunque aún no existan
// reduce el tiempo de descubrimiento cuando se publiquen).
// Filtrar las que existan al momento del build.
const PILLAR_AREAS = [
  "litigio-civil",
  "litigio-mercantil",
  "litigio-concursal",
  "litigio-familiar",
  "litigio-constitucional",
  "arbitraje-y-masc",
] as const;

const SECCIONES_HOME = [
  "firma",
  "proceso",
  "areas",
  "casos",
  "comparacion",
  "abogados",
  "faq",
  "recursos",
  "contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Homepage — la pillar/landing principal
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // Anchor URLs de la home — Google las trata como mismo doc, pero
    // declararlas ayuda a indexar fragmentos para AI Overviews.
    ...SECCIONES_HOME.map((s) => ({
      url: `${SITE_URL}/#${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),

    // Áreas de práctica — pillar pages, máxima prioridad
    ...v4Areas.map((a) => ({
      url: `${SITE_URL}/v4/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Páginas de perfil del equipo — alto valor SEO (Knowledge Graph + Person schema)
    ...v4Team.map((m) => ({
      url: `${SITE_URL}/v4/equipo/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Pillars futuros — descomentar a medida que se creen.
    // Importante: filtrar las que no existan aún para no servir 404s en sitemap.
    // ...PILLAR_AREAS.map((slug) => ({
    //   url: `${SITE_URL}/areas/${slug}`,
    //   lastModified: now,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.85,
    // })),
  ];
}
