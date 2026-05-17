import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/constants/services";
import { SERVICES_COPY } from "@/copies/services";
import { buildMetadata } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph } from "@/lib/jsonld.utils";

export const metadata: Metadata = buildMetadata({
  title: SERVICES_COPY.metaTitle,
  description: SERVICES_COPY.metaDescription,
  path: "/services",
});

export default function ServicesPage() {
  const graph = buildGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
  );

  return (
    <>
      <Hero
        layout="centered"
        eyebrow={SERVICES_COPY.hero.eyebrow}
        title={SERVICES_COPY.hero.title}
        subtitle={SERVICES_COPY.hero.subtitle}
      />

      <Section tone="default" spacing="lg">
        <Container width="xl">
          <ul className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container width="xl" className="space-y-12">
          <SectionHeading eyebrow="How it works" title={SERVICES_COPY.processHeading} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES_COPY.process.map((step) => (
              <li key={step.step} className="space-y-3 rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
                <span className="font-heading text-3xl font-semibold text-brass-500">{step.step}</span>
                <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-steel-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-steel-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBanner
        tone="default"
        heading={SERVICES_COPY.finalCta.heading}
        subtitle={SERVICES_COPY.finalCta.subtitle}
        primaryCta={{ label: SERVICES_COPY.finalCta.primaryCta, href: SERVICES_COPY.finalCta.primaryCtaHref }}
      />

      <JsonLd id="ld-services" graph={graph} />
    </>
  );
}
