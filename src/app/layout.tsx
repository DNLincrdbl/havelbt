import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Hável Bt.",
  },
  description: site.description,
  keywords: [
    "vízszerelés",
    "gázszerelés",
    "fűtésszerelés",
    "víz",
    "gáz",
    "fűtés",
    "padlófűtés",
    "falfűtés",
    "kazán",
    "szerelő",
    "kivitelező",
    "épületgépészet",
    "Vác",
    "Hável",
  ],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness"],
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: "+36 20 953 5710",
  foundingDate: "1983",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "HU",
  },
  areaServed: "HU",
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      data-scroll-behavior="smooth"
      className={`${instrument.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Ugrás a tartalomhoz
        </a>
        <SiteHeader />
        <main id="tartalom" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
