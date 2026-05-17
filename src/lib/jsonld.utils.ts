import { COMPANY } from "@/constants/company";
import { SEO } from "@/constants/seo";
import { absoluteUrl } from "@/lib/seo.utils";

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | readonly JsonLdValue[]
  | { readonly [key: string]: JsonLdValue };

export type JsonLdNode = { readonly [key: string]: JsonLdValue };

export interface JsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly JsonLdNode[];
}

export function organizationSchema(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": `${SEO.siteUrl}#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.brandName,
    url: SEO.siteUrl,
    logo: absoluteUrl("/logo.svg"),
    sameAs: [COMPANY.social.linkedin, COMPANY.social.instagram, COMPANY.social.youtube],
    foundingDate: String(COMPANY.foundedYear),
  };
}

export function localBusinessSchema(): JsonLdNode {
  return {
    "@type": "LocalBusiness",
    "@id": `${SEO.siteUrl}#localbusiness`,
    name: COMPANY.brandName,
    image: absoluteUrl(SEO.ogImagePath),
    url: SEO.siteUrl,
    telephone: COMPANY.phonePrimary,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: `${COMPANY.address.locality}, ${COMPANY.address.city}`,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    openingHours: ["Mo-Sa 09:30-18:30"],
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": `${SEO.siteUrl}#website`,
    url: SEO.siteUrl,
    name: SEO.siteName,
    publisher: { "@id": `${SEO.siteUrl}#organization` },
    inLanguage: SEO.locale.replace("_", "-"),
  };
}

interface ProductSchemaInput {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly slug: string;
  readonly category: string;
}

export function productSchema(input: ProductSchemaInput): JsonLdNode {
  return {
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: absoluteUrl(input.image),
    category: input.category,
    brand: { "@type": "Brand", name: COMPANY.brandName },
    manufacturer: { "@id": `${SEO.siteUrl}#organization` },
    url: absoluteUrl(`/products/${input.slug}`),
  };
}

export function breadcrumbSchema(items: ReadonlyArray<{ readonly name: string; readonly path: string }>): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildGraph(...nodes: readonly JsonLdNode[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
