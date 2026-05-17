import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/constants/seo";
import {
  buildGraph,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/jsonld.utils";
import { COMMON_COPY } from "@/copies/common";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  applicationName: SEO.siteName,
  authors: [{ name: SEO.siteName }],
  generator: "Next.js",
  keywords: [
    "elevators India",
    "passenger lifts",
    "cargo lifts",
    "hospital elevators",
    "capsule elevators",
    "home lifts",
    "elevator AMC India",
    "MRL elevator",
    "Nirbhay Elevators",
  ],
  openGraph: {
    type: "website",
    siteName: SEO.siteName,
    locale: SEO.locale,
    url: SEO.siteUrl,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SEO.siteUrl },
};

export const viewport: Viewport = {
  themeColor: SEO.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const graph = buildGraph(organizationSchema(), localBusinessSchema(), websiteSchema());

  return (
    <html lang={SEO.htmlLang} className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-steel-900 focus:px-4 focus:py-2 focus:text-steel-50"
        >
          {COMMON_COPY.skipToContent}
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd id="ld-site" graph={graph} />
      </body>
    </html>
  );
}
