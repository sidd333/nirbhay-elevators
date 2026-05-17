import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { ProjectCard } from "@/components/marketing/ProjectCard";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROJECTS } from "@/constants/projects";
import { PROJECTS_COPY } from "@/copies/projects";
import { buildMetadata } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph } from "@/lib/jsonld.utils";

export const metadata: Metadata = buildMetadata({
  title: PROJECTS_COPY.metaTitle,
  description: PROJECTS_COPY.metaDescription,
  path: "/projects",
});

export default function ProjectsPage() {
  const graph = buildGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  );

  return (
    <>
      <Hero
        layout="centered"
        eyebrow={PROJECTS_COPY.hero.eyebrow}
        title={PROJECTS_COPY.hero.title}
        subtitle={PROJECTS_COPY.hero.subtitle}
      />

      <Section tone="default" spacing="lg">
        <Container width="xl" className="space-y-10">
          <nav aria-label={PROJECTS_COPY.filterLabel} className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-steel-500">
              {PROJECTS_COPY.filterLabel}:
            </span>
            {PROJECTS_COPY.categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.anchor}
                className="rounded-full border border-steel-200 px-4 py-1.5 text-sm font-medium text-steel-700 transition-colors hover:bg-steel-50 hover:text-steel-900"
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          <ul id="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBanner
        tone="accent"
        heading={PROJECTS_COPY.finalCta.heading}
        subtitle={PROJECTS_COPY.finalCta.subtitle}
        primaryCta={{ label: PROJECTS_COPY.finalCta.primaryCta, href: PROJECTS_COPY.finalCta.primaryCtaHref }}
      />

      <JsonLd id="ld-projects" graph={graph} />
    </>
  );
}
