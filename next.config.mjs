/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint and TS errors at build time — design preview branch
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ["image/avif", "image/webp"],
    // Sizes acotados — el set default de Next genera srcsets hasta 3840px y
    // por imagen mete ~10 entries en el HTML. Para una landing con thumbs
    // chicos + heros responsivos alcanza con estos breakpoints.
    deviceSizes: [640, 750, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async redirects() {
    return [
      // Legacy /v4/ prefix → clean SEO URLs (308 permanent)
      {
        source: "/v4/equipo/:slug",
        destination: "/equipo/:slug",
        permanent: true,
      },
      {
        source: "/v4/areas/:slug",
        destination: "/areas/:slug",
        permanent: true,
      },
      // Renamed slug — old "arbitraje-y-masc" → keyword-rich slug
      {
        source: "/areas/arbitraje-y-masc",
        destination: "/areas/arbitraje-comercial-internacional",
        permanent: true,
      },
      {
        source: "/v4/areas/arbitraje-y-masc",
        destination: "/areas/arbitraje-comercial-internacional",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://*.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://calendly.com https://*.calendly.com https://assets.calendly.com",
              "frame-src https://calendly.com https://www.google.com",
              "connect-src 'self' https://calendly.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
