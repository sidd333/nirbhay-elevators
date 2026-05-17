import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, getProductBySlug } from "@/constants/products";
import { PRODUCTS_COPY } from "@/copies/products";
import { buildMetadata, withBasePath } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph, productSchema } from "@/lib/jsonld.utils";

interface ProductPageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({
      title: "Product not found",
      description: "The product you're looking for isn't here.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const graph = buildGraph(
    productSchema({
      name: product.name,
      description: product.description,
      image: product.heroImage,
      slug: product.slug,
      category: product.category,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: product.shortName, path: `/products/${product.slug}` },
    ]),
  );

  return (
    <>
      <Section tone="muted" spacing="lg">
        <Container width="xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-steel-200 text-xs uppercase tracking-[0.18em] text-steel-700">
                {product.category}
              </Badge>
              <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-steel-950 sm:text-5xl">
                {product.name}
              </h1>
              <p className="text-lg leading-relaxed text-steel-600">{product.tagline}</p>
              <p className="text-base leading-relaxed text-steel-700">{product.description}</p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-steel-100 shadow-xl shadow-steel-900/10">
              <Image
                src={withBasePath(product.heroImage)}
                alt={product.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="default" spacing="lg">
        <Container width="xl" className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading eyebrow="Specs" title={PRODUCTS_COPY.detail.specsHeading} />
            <dl className="divide-y divide-steel-100 rounded-2xl border border-steel-100 bg-card">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-steel-500">{spec.label}</dt>
                  <dd className="text-base text-steel-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-6">
            <SectionHeading eyebrow="Built for" title={PRODUCTS_COPY.detail.applicationsHeading} />
            <ul className="flex flex-wrap gap-3">
              {product.applications.map((app) => (
                <li key={app}>
                  <Badge className="bg-steel-900 px-4 py-2 text-sm font-medium text-steel-50">{app}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {product.features.length > 0 ? (
        <Section tone="muted" spacing="lg">
          <Container width="xl" className="space-y-10">
            <SectionHeading eyebrow="Engineering" title={PRODUCTS_COPY.detail.featuresHeading} />
            <FeatureGrid columns="3" items={product.features} />
          </Container>
        </Section>
      ) : null}

      <CtaBanner
        tone="dark"
        heading={PRODUCTS_COPY.detail.finalCta.heading}
        subtitle={PRODUCTS_COPY.detail.finalCta.subtitle}
        primaryCta={{ label: PRODUCTS_COPY.detail.finalCta.primaryCta, href: PRODUCTS_COPY.detail.finalCta.primaryCtaHref }}
      />

      <JsonLd id={`ld-product-${product.slug}`} graph={graph} />
    </>
  );
}
