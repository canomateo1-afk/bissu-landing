import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bissu Abogados | Despacho Jurídico en Polanco, CDMX",
  description:
    "Más de 25 años de experiencia en litigio, derecho civil, familiar y mercantil. Agenda tu consulta gratuita con nuestro equipo legal en Polanco, Ciudad de México.",
  keywords: [
    "abogados",
    "despacho jurídico",
    "Polanco",
    "CDMX",
    "litigio",
    "derecho civil",
    "derecho familiar",
    "derecho mercantil",
    "consulta legal gratuita",
  ],
  openGraph: {
    title: "Bissu Abogados | Despacho Jurídico en Polanco, CDMX",
    description:
      "Más de 25 años de experiencia defendiendo los derechos de personas y empresas en México.",
    url: "https://bissuabogados.com",
    siteName: "Bissu Abogados",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
