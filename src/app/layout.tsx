import type { Metadata } from "next";
import { Playfair_Display, Manrope, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Bissu Abogados — Despacho jurídico, Ciudad de México",
  description:
    "Despacho jurídico especializado en litigio civil, comercial, concursal, familiar, constitucional y mecanismos alternativos de resolución de conflictos. Reconocidos por Best Lawyers in Mexico y Leaders League.",
  keywords: [
    "Bissu Abogados",
    "despacho jurídico CDMX",
    "abogados Polanco",
    "litigio civil",
    "litigio mercantil",
    "litigio concursal",
    "derecho familiar",
    "derecho constitucional",
    "arbitraje",
    "mediación",
    "Best Lawyers Mexico",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Bissu Abogados — Despacho jurídico en CDMX",
    description:
      "Asesoría, consultoría y práctica jurídica en diversas áreas del ámbito legal en México.",
    url: "https://bissuabogados.com",
    siteName: "Bissu Abogados",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Bissu Abogados, S.C.",
  description:
    "Despacho jurídico especializado en litigio y mecanismos alternativos de resolución de conflictos.",
  url: "https://bissuabogados.com",
  telephone: "+52-55-5545-1308",
  email: "sbissu@bissuabogados.com",
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
  founder: {
    "@type": "Person",
    name: "Samuel Bissu Bazbaz",
    jobTitle: "Socio fundador y Director",
  },
  award: [
    "The Best Lawyers in Mexico 2026",
    "Leaders League 2025 — Resolución de Conflictos",
    "Tops · Los Mejores Abogados en México 2025 — Diamante",
  ],
  serviceType: [
    "Litigio Civil",
    "Litigio Comercial, Mercantil y Corporativo",
    "Litigio Concursal",
    "Litigio Familiar",
    "Litigio Constitucional",
    "Mecanismos Alternativos de Solución de Controversias",
  ],
  sameAs: [
    "https://www.instagram.com/bissuabogados/",
    "https://www.facebook.com/BissuAbogados/",
    "https://www.linkedin.com/company/bissu-abogados-s-c-/",
    "https://www.bestlawyers.com/firms/bissu-abogados/99213/MX",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${body.variable}`}
    >
      <body className="font-sans antialiased bg-ink-900 text-bone-50 selection:bg-gold-400/35 selection:text-bone-100">
        <Script
          id="ld-legal-service"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(legalServiceSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}
