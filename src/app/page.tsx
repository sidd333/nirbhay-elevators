import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { StatBlock } from "@/components/marketing/StatBlock";
import { ProductCard } from "@/components/marketing/ProductCard";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PRODUCTS, SERVICES, PROJECTS } from "@/constants";
import { HOME_COPY } from "@/copies/home";
import { buildMetadata } from "@/lib/seo.utils";

export const metadata: Metadata = buildMetadata({
  title: HOME_COPY.metaTitle,
  description: HOME_COPY.metaDescription,
  path: "/",
});

const TESTIMONIALS = [
  {
    quote:
      "Their service team picked up the call at 2am when our hospital lift halted. On-site in 70 minutes, back in service in 90. Worth every rupee of the AMC.",
    author: "Dr. Anjali Mehta",
    role: "Director of Facilities",
    company: "Kokilaben Hospital",
  },
  {
    quote:
      "We've installed Nirbhay across four towers now. Spec compliance, drawings, finish quality — they treat the lift like a product, not a commodity.",
    author: "Vikram Iyer",
    role: "Senior Project Manager",
    company: "Lodha Group",
  },
  {
    quote:
      "Modernized a 22-year-old freight lift without disrupting our shift schedule. Engineering team coordinated with our plant maintenance head-on.",
    author: "Suresh Patil",
    role: "GM Maintenance",
    company: "Tata Steel — Long Products",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero
        layout="split"
        eyebrow={HOME_COPY.hero.eyebrow}
        title={HOME_COPY.hero.title}
        subtitle={HOME_COPY.hero.subtitle}
        primaryCta={{ label: HOME_COPY.hero.primaryCta, href: HOME_COPY.hero.primaryCtaHref }}
        secondaryCta={{ label: HOME_COPY.hero.secondaryCta, href: HOME_COPY.hero.secondaryCtaHref }}
        imageSrc={HOME_COPY.hero.imageSrc}
        imageAlt={HOME_COPY.hero.imageAlt}
      />

      <StatBlock heading={HOME_COPY.stats.heading} items={HOME_COPY.stats.items} />

      <Section tone="default" spacing="lg">
        <Container width="xl" className="space-y-12">
          <SectionHeading
            eyebrow="Products"
            title={HOME_COPY.products.heading}
            subtitle={HOME_COPY.products.subtitle}
            action={{ label: HOME_COPY.products.ctaLabel, href: "/products" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container width="xl" className="space-y-12">
          <SectionHeading
            eyebrow="Services"
            title={HOME_COPY.services.heading}
            subtitle={HOME_COPY.services.subtitle}
            action={{ label: HOME_COPY.services.ctaLabel, href: "/services" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="default" spacing="lg">
        <Container width="xl" className="space-y-12">
          <SectionHeading
            eyebrow="Projects"
            title={HOME_COPY.projects.heading}
            subtitle={HOME_COPY.projects.subtitle}
            action={{ label: HOME_COPY.projects.ctaLabel, href: "/projects" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container width="xl" className="space-y-10">
          <SectionHeading eyebrow="What clients say" title="Two decades. One promise: pick up the phone." />
          <ul className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.author}>
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBanner
        tone="dark"
        heading={HOME_COPY.finalCta.heading}
        subtitle={HOME_COPY.finalCta.subtitle}
        primaryCta={{ label: HOME_COPY.finalCta.primaryCta, href: HOME_COPY.finalCta.primaryCtaHref }}
      />
    </>
  );
}
