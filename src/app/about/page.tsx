import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/constants/company";
import { ABOUT_COPY } from "@/copies/about";
import { buildMetadata } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph } from "@/lib/jsonld.utils";

export const metadata: Metadata = buildMetadata({
  title: ABOUT_COPY.metaTitle,
  description: ABOUT_COPY.metaDescription,
  path: "/about",
});

export default function AboutPage() {
  const graph = buildGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  );

  return (
    <>
      <Hero
        layout="image-right"
        eyebrow={ABOUT_COPY.hero.eyebrow}
        title={ABOUT_COPY.hero.title}
        subtitle={ABOUT_COPY.hero.subtitle}
        imageSrc={ABOUT_COPY.hero.imageSrc}
        imageAlt={ABOUT_COPY.hero.imageAlt}
      />

      <Section tone="default" spacing="lg">
        <Container width="lg" className="space-y-6">
          <SectionHeading eyebrow="Our story" title={ABOUT_COPY.story.heading} />
          <div className="space-y-5 text-lg leading-relaxed text-steel-700">
            {ABOUT_COPY.story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container width="xl" className="space-y-10">
          <SectionHeading eyebrow="What we hold to" title={ABOUT_COPY.values.heading} />
          <FeatureGrid columns="3" items={ABOUT_COPY.values.items} />
        </Container>
      </Section>

      <Section tone="default" spacing="lg">
        <Container width="lg" className="space-y-8">
          <SectionHeading eyebrow="Audited annually" title={ABOUT_COPY.certs.heading} subtitle={ABOUT_COPY.certs.description} />
          <ul className="flex flex-wrap gap-3">
            {COMPANY.certifications.map((cert) => (
              <li key={cert}>
                <Badge variant="outline" className="border-steel-200 px-4 py-2 text-sm font-medium text-steel-700">
                  {cert}
                </Badge>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBanner
        tone="accent"
        heading={ABOUT_COPY.finalCta.heading}
        subtitle={ABOUT_COPY.finalCta.subtitle}
        primaryCta={{ label: ABOUT_COPY.finalCta.primaryCta, href: ABOUT_COPY.finalCta.primaryCtaHref }}
      />

      <JsonLd id="ld-about" graph={graph} />
    </>
  );
}
