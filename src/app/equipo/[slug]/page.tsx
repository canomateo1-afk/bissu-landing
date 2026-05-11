import "../../v3/v3.css";
import Script from "next/script";
import V4MemberPage from "@/components/v4/V4MemberPage";
import {
  v4Team,
  getMemberBySlug,
  getYearsOfPractice,
} from "@/lib/v4-team";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const SITE_URL = "https://bissuabogados.com";

export function generateStaticParams() {
  return v4Team.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) {
    return {
      title: "Perfil no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_URL}/equipo/${member.slug}`;
  const title = `${member.name} — ${member.role}`;
  const description =
    member.metaDescription ??
    `${member.name}, ${member.role.toLowerCase()} en Bissu Abogados (CDMX). ${member.subtitle}. Consulta inicial gratuita.`;
  const ogImage = member.photo;
  const fallbackImage = "/images/hero-1.jpg";

  const practiceKeywords = member.practiceAreas.map((p) => p.area.toLowerCase());

  return {
    title,
    description,
    keywords: [
      member.name,
      `abogado ${member.name.split(" ")[0]}`,
      ...practiceKeywords,
      "abogado CDMX",
      "Bissu Abogados",
      "despacho jurídico Ciudad de México",
      "consulta legal gratuita",
    ],
    alternates: {
      canonical: url,
      languages: { "es-MX": url, "x-default": url },
    },
    openGraph: {
      type: "profile",
      locale: "es_MX",
      url,
      siteName: "Bissu Abogados",
      title: `${member.name} | Bissu Abogados`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 1500,
          alt: `${member.name} — ${member.role}, Bissu Abogados`,
        },
        {
          url: fallbackImage,
          width: 1200,
          height: 800,
          alt: "Oficinas Bissu Abogados — Lomas de Chapultepec, CDMX",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} | Bissu Abogados`,
      description,
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
    other: {
      "profile:first_name": member.firstName ?? member.name.split(" ")[0],
      "profile:last_name": member.name.split(" ").slice(-1)[0] ?? "",
    },
  };
}

export default async function MemberProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const url = `${SITE_URL}/equipo/${member.slug}`;
  const ORG_ID = `${SITE_URL}#organization`;
  const PERSON_ID = `${url}#person`;
  const yearsOfPractice = getYearsOfPractice(member);

  const sameAs = [
    ...(member.linkedin ? [member.linkedin] : []),
    ...(member.sameAs ?? []),
  ];

  const datePublished = "2026-01-01";
  const dateModified = member.lastUpdated ?? new Date().toISOString().split("T")[0];

  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Person", "Attorney"],
      "@id": PERSON_ID,
      name: member.name,
      givenName: member.firstName ?? member.name.split(" ")[0],
      familyName: member.name.split(" ").slice(-1)[0],
      jobTitle: member.role,
      description: member.metaDescription ?? member.bio,
      image: `${SITE_URL}${member.photo}`,
      url,
      email: `mailto:${member.contact.email}`,
      telephone: member.contact.phone,
      knowsLanguage: member.languages,
      knowsAbout: member.practiceAreas.map((p) => p.area),
      worksFor: { "@id": ORG_ID },
      alumniOf: (member.alumniOf ?? []).map((a) => ({
        "@type": "EducationalOrganization",
        name: a.name,
        ...(a.url ? { url: a.url } : {}),
      })),
      ...(member.awards && member.awards.length > 0
        ? { award: member.awards }
        : {}),
      ...(sameAs.length > 0 ? { sameAs } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Prado Norte 365, Int. 6",
        addressLocality: "Lomas de Chapultepec V Sección, Miguel Hidalgo",
        postalCode: "11000",
        addressRegion: "Ciudad de México",
        addressCountry: "MX",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}#webpage`,
      url,
      name: `${member.name} — ${member.role} | Bissu Abogados`,
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": `${SITE_URL}#website` },
      inLanguage: "es-MX",
      datePublished,
      dateModified,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${member.photo}`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".intro-paragraph", ".faq-answer"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Equipo",
          item: `${SITE_URL}/#abogados`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: member.name,
          item: url,
        },
      ],
    },
  ];

  // FAQPage schema — only if member has FAQs
  if (member.faqs && member.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: member.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <>
      <Script
        id={`ld-person-${member.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(personSchema)}
      </Script>
      <V4MemberPage member={member} yearsOfPractice={yearsOfPractice} />
    </>
  );
}
