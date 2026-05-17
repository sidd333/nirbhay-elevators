import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { PRODUCTS } from "@/constants/products";
import { PRODUCTS_COPY } from "@/copies/products";
import { buildMetadata } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph } from "@/lib/jsonld.utils";

export const metadata: Metadata = buildMetadata({
  title: PRODUCTS_COPY.index.metaTitle,
  description: PRODUCTS_COPY.index.metaDescription,
  path: "/products",
});

export default function ProductsPage() {
  const graph = buildGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
    ]),
  );

  return (
    <>
      <Hero
        layout="centered"
        eyebrow={PRODUCTS_COPY.index.hero.eyebrow}
        title={PRODUCTS_COPY.index.hero.title}
        subtitle={PRODUCTS_COPY.index.hero.subtitle}
      />

      <Section tone="default" spacing="lg">
        <Container width="xl">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBanner
        tone="default"
        heading={PRODUCTS_COPY.index.finalCta.heading}
        subtitle={PRODUCTS_COPY.index.finalCta.subtitle}
        primaryCta={{ label: PRODUCTS_COPY.index.finalCta.primaryCta, href: PRODUCTS_COPY.index.finalCta.primaryCtaHref }}
      />

      <JsonLd id="ld-products" graph={graph} />
    </>
  );
}
