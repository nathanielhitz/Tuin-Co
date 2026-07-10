import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import MobileStickyCta from "@/components/MobileStickyCta";
import { company } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuinenco.nl"),
  title: "Tuin & Co — Hovenier in Puttershoek & de Hoeksche Waard",
  description:
    "Hoveniersbedrijf Tuin & Co legt complete tuinen aan in Puttershoek en de Hoeksche Waard: tuinontwerp, aanleg, bestrating, beplanting, verlichting en onderhoud. Eén vaste vakman, eerlijke prijs.",
  openGraph: {
    title: "Tuin & Co — Hovenier in de Hoeksche Waard",
    description:
      "Complete tuinen van ontwerp tot onderhoud, door één vaste vakman uit Puttershoek. Klimaatbewust aangelegd, eerlijke prijs.",
    siteName: "Hoveniersbedrijf Tuin & Co",
    locale: "nl_NL",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: company.fullName,
  founder: company.owner,
  foundingDate: String(company.foundedYear),
  telephone: `+31${company.phonePrimary.slice(1)}`,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressRegion: "Zuid-Holland",
    addressCountry: "NL",
  },
  areaServed: "Hoeksche Waard",
  url: "https://www.tuinenco.nl",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-moss focus:px-4 focus:py-2 focus:text-paper"
        >
          Ga naar hoofdinhoud
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <MobileStickyCta />
      </body>
    </html>
  );
}
