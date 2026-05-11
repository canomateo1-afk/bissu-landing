import type { Metadata } from "next";
import { Playfair_Display, Manrope, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://bissuabogados.com";
const SITE_NAME = "Bissu Abogados";
const DESCRIPTION =
  "Despacho de abogados en CDMX especializado en litigio civil, mercantil, concursal, familiar, constitucional y arbitraje internacional en México. Reconocidos por Best Lawyers in Mexico 2026 y Leaders League 2025. Consulta inicial gratuita.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bissu Abogados | Despacho de Litigio y Arbitraje en CDMX, México",
    template: "%s | Bissu Abogados",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Samuel Bissu Bazbaz" }],
  generator: "Next.js",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "x-default": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE_NAME,
    title: "Bissu Abogados | Despacho de Litigio y Arbitraje en CDMX",
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 800,
        alt: "Oficinas Bissu Abogados — despacho jurídico en Polanco, CDMX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bissu Abogados | Despacho de Litigio y Arbitraje en CDMX",
    description: DESCRIPTION,
    images: ["/images/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // google: "TODO — agregar GSC verification token",
  },
  other: {
    "geo.region": "MX-CMX",
    "geo.placename": "Ciudad de México",
    "geo.position": "19.4326;-99.1332",
    ICBM: "19.4326, -99.1332",
  },
};

const ORG_ID = `${SITE_URL}#organization`;
const SITE_ID = `${SITE_URL}#website`;
const FOUNDER_ID = `${SITE_URL}#samuel-bissu`;
const PARTNER_JR_ID = `${SITE_URL}#adolfo-vargas`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LegalService", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Bissu Abogados, S.C.",
      legalName: "Bissu Abogados, S.C.",
      alternateName: "Bissu",
      description:
        "Despacho jurídico especializado en litigio y mecanismos alternativos de resolución de conflictos para empresas, instituciones e individuos en todo México.",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/images/hero-1.jpg`,
      telephone: "+52-55-5545-1308",
      email: "sbissu@bissuabogados.com",
      foundingDate: "2017",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Prado Norte 365, Int. 6",
        addressLocality: "Lomas de Chapultepec V Sección, Miguel Hidalgo",
        postalCode: "11000",
        addressRegion: "Ciudad de México",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.4326",
        longitude: "-99.1332",
      },
      areaServed: { "@type": "Country", name: "Mexico" },
      founder: { "@id": FOUNDER_ID },
      employee: [{ "@id": FOUNDER_ID }, { "@id": PARTNER_JR_ID }],
      award: [
        "The Best Lawyers in Mexico 2026",
        "Leaders League 2025 — Resolución de Conflictos",
        "Tops · Los Mejores Abogados en México 2025 — Diamante",
      ],
      knowsAbout: [
        "Litigio Civil",
        "Litigio Mercantil",
        "Litigio Concursal",
        "Litigio Familiar",
        "Litigio Constitucional",
        "Arbitraje Comercial Internacional",
        "Mecanismos Alternativos de Solución de Controversias",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Áreas de práctica",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigio Civil" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigio Comercial, Mercantil y Corporativo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigio Concursal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigio Familiar" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigio Constitucional" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mecanismos Alternativos de Solución de Controversias" } },
        ],
      },
      sameAs: [
        "https://www.instagram.com/bissuabogados/",
        "https://www.facebook.com/BissuAbogados/",
        "https://www.linkedin.com/company/bissu-abogados-s-c-/",
        "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".faq-answer", ".intro-paragraph"],
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-MX",
      publisher: { "@id": ORG_ID },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Samuel Bissu Bazbaz",
      jobTitle: "Socio fundador y Director",
      worksFor: { "@id": ORG_ID },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Universidad Panamericana",
          url: "https://www.up.edu.mx",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidad Iberoamericana",
          url: "https://ibero.mx",
        },
      ],
      knowsAbout: [
        "Litigio mercantil",
        "Concurso mercantil",
        "Arbitraje internacional",
        "Reestructura empresarial",
        "Conflictos accionarios",
        "Derecho corporativo mexicano",
      ],
      sameAs: [
        "https://www.linkedin.com/company/bissu-abogados-s-c-/",
        "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
      ],
    },
    {
      "@type": "Person",
      "@id": PARTNER_JR_ID,
      name: "Adolfo Julián Vargas Alvarado",
      jobTitle: "Socio Jr.",
      worksFor: { "@id": ORG_ID },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Universidad Panamericana",
          url: "https://www.up.edu.mx",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidad Tres Culturas",
        },
      ],
      knowsAbout: [
        "Litigio civil",
        "Litigio familiar",
        "Litigio constitucional",
        "Derecho procesal constitucional",
        "Juicio de amparo",
        "Restitución internacional de menores",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-MX"
      className={`${display.variable} ${sans.variable} ${body.variable}`}
    >
      <head>
        {/* Preload del hero LCP — poster del <video> que ocupa el viewport inicial */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-1.jpg"
          // @ts-expect-error fetchpriority no está en el typing de React aún
          fetchpriority="high"
        />
      </head>
      <body className="font-sans antialiased bg-ink-900 text-bone-50 selection:bg-gold-400/35 selection:text-bone-100">
        <Analytics />
        <Script
          id="ld-org-graph"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}
