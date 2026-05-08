import type { MetadataRoute } from "next";

const SITE_URL = "https://bissuabogados.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — todos los crawlers permitidos
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/chunks/private/"],
      },

      // AI crawlers priority — allow para visibility en AI search
      // (Bissu busca authority y citation, no es contenido propietario)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "AppleBot", allow: "/" },
      { userAgent: "AppleBot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },

      // Bloqueados — training datasets de uso impreciso o sin valor para audiencia
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
