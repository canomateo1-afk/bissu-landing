import type { MetadataRoute } from "next";
import { v4Team } from "@/lib/v4-team";
import { v4Areas } from "@/lib/v4-areas";

const SITE_URL = "https://bissuabogados.com";

/**
 * Sitemap principal. Solo URLs indexables (sin fragments `#`, que Google
 * descarta y trata como duplicados de la home). Si más adelante se separan
 * secciones de la home en páginas propias (`/proceso`, `/casos`, etc.),
 * agregarlas acá.
 */
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

    // Áreas de práctica — pillar pages, máxima prioridad
    ...v4Areas.map((a) => ({
      url: `${SITE_URL}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Páginas de perfil del equipo — alto valor SEO (Knowledge Graph + Person schema)
    ...v4Team.map((m) => ({
      url: `${SITE_URL}/equipo/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
