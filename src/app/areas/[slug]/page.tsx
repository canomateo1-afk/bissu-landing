import "../../v3/v3.css";
import V4AreaPage from "@/components/v4/V4AreaPage";
import { v4Areas, getAreaBySlug } from "@/lib/v4-areas";
import { getMemberBySlug } from "@/lib/v4-team";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const SITE_URL = "https://bissuabogados.com";

export function generateStaticParams() {
  return v4Areas.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) {
    return {
      title: "Área no encontrada",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_URL}/areas/${area.slug}`;
  const title = `${area.title} | Bissu Abogados`;
  const ogImage = "/images/hero-1.jpg";

  return {
    title: area.title,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: {
      canonical: url,
      languages: { "es-MX": url, "x-default": url },
    },
    openGraph: {
      type: "article",
      locale: "es_MX",
      url,
      siteName: "Bissu Abogados",
      title,
      description: area.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 800,
          alt: `${area.title} — Bissu Abogados`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: area.metaDescription,
      images: [ogImage],
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
}

export default async function AreaPillarPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const url = `${SITE_URL}/areas/${area.slug}`;
  const ORG_ID = `${SITE_URL}#organization`;
  const SERVICE_ID = `${url}#service`;

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
        serviceType: area.title,
        description: area.metaDescription,
        url,
        image: `${SITE_URL}/images/hero-1.jpg`,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Mexico" },
        category: "Legal services",
        offers: {
          "@type": "Offer",
          name: "Consulta inicial gratuita",
          description:
            "Reunión de 20 minutos con abogado titular. Dictamen escrito en 24 horas. Sin cobro hasta firmar convenio.",
          price: "0",
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#cta`,
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
        "@id": `${url}#faq`,
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
        "@id": `${url}#webpage`,
        url,
        name: `${area.title} | Bissu Abogados`,
        inLanguage: "es-MX",
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": SERVICE_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/hero-1.jpg`,
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
            name: "Áreas de práctica",
            item: `${SITE_URL}/#areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.label,
            item: url,
          },
        ],
      },
    ],
  };

  // JSON-LD server-rendered una sola vez (sin doble serialización vía
  // <Script> + RSC payload). El contenido se genera 100% server-side a
  // partir de constantes tipadas; no hay input de usuario.
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
