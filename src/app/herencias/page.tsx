import "../v3/v3.css";
import V4AreaPage from "@/components/v4/V4AreaPage";
import { herenciasArea } from "@/lib/herencias-area";
import { getMemberBySlug } from "@/lib/v4-team";
import type { Metadata } from "next";

const SITE_URL = "https://bissuabogados.com";
const URL = `${SITE_URL}/herencias`;
const OG_IMAGE = "/images/areas/familiar.jpg";

export const metadata: Metadata = {
  title: herenciasArea.title,
  description: herenciasArea.metaDescription,
  keywords: herenciasArea.keywords,
  alternates: {
    canonical: URL,
    languages: { "es-MX": URL, "x-default": URL },
  },
  openGraph: {
    type: "article",
    locale: "es_MX",
    url: URL,
    siteName: "Bissu Abogados",
    title: `${herenciasArea.title} | Bissu Abogados`,
    description: herenciasArea.metaDescription,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: `${herenciasArea.title} — Bissu Abogados`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${herenciasArea.title} | Bissu Abogados`,
    description: herenciasArea.metaDescription,
    images: [OG_IMAGE],
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
};

export default function HerenciasPage() {
  const area = herenciasArea;
  const ORG_ID = `${SITE_URL}#organization`;
  const SERVICE_ID = `${URL}#service`;

  const teamMembers = area.teamSlugs
    .map((s) => getMemberBySlug(s))
    .filter((m): m is NonNullable<ReturnType<typeof getMemberBySlug>> =>
      Boolean(m)
    );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Service"],
        "@id": SERVICE_ID,
        name: area.title,
        alternateName: area.label,
        serviceType: "Derecho Sucesorio",
        description: area.metaDescription,
        url: URL,
        image: `${SITE_URL}${OG_IMAGE}`,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Mexico" },
        category: "Legal services",
        offers: {
          "@type": "Offer",
          name: "Consulta inicial gratuita",
          description:
            "Reunión de 20 minutos con abogado titular. Diagnóstico legal en 72 horas hábiles. Sin cobro hasta firmar convenio.",
          price: "0",
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          url: `${URL}#cta`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Servicios de ${area.label}`,
          itemListElement: area.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
          })),
        },
        ...(teamMembers.length > 0
          ? {
              employee: teamMembers.map((m) => ({
                "@type": ["Person", "Attorney"],
                name: m.name,
                jobTitle: m.role,
                url: `${SITE_URL}/equipo/${m.slug}`,
              })),
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${URL}#webpage`,
        url: URL,
        name: `${area.title} | Bissu Abogados`,
        inLanguage: "es-MX",
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": SERVICE_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${OG_IMAGE}`,
        },
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
          {
            "@type": "ListItem",
            position: 2,
            name: area.label,
            item: URL,
          },
        ],
      },
    ],
  };

  // JSON-LD server-rendered una sola vez. Contenido 100% server-side a partir
  // de constantes tipadas, sin input de usuario.
  const schemaJson = JSON.stringify(schema);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <V4AreaPage area={area} />
    </>
  );
}
