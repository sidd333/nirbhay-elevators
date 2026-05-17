import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/marketing/Hero";
import { ContactForm } from "@/components/marketing/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/constants/company";
import { CONTACT_COPY } from "@/copies/contact";
import { buildMetadata } from "@/lib/seo.utils";
import { breadcrumbSchema, buildGraph } from "@/lib/jsonld.utils";

export const metadata: Metadata = buildMetadata({
  title: CONTACT_COPY.metaTitle,
  description: CONTACT_COPY.metaDescription,
  path: "/contact",
});

const ADDRESS_LINES = [
  COMPANY.legalName,
  COMPANY.address.street,
  `${COMPANY.address.locality}, ${COMPANY.address.city} ${COMPANY.address.postalCode}`,
  `${COMPANY.address.state}, India`,
];

export default function ContactPage() {
  const graph = buildGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  );
  const mapsQuery = encodeURIComponent(
    `${COMPANY.legalName}, ${COMPANY.address.street}, ${COMPANY.address.locality}, ${COMPANY.address.city}`,
  );
  const phoneHref = `tel:${COMPANY.phonePrimary.replace(/\s+/g, "")}`;
  const serviceHref = `tel:${COMPANY.phoneService.replace(/\s+/g, "")}`;

  return (
    <>
      <Hero
        layout="centered"
        eyebrow={CONTACT_COPY.hero.eyebrow}
        title={CONTACT_COPY.hero.title}
        subtitle={CONTACT_COPY.hero.subtitle}
        tone="muted"
      />

      <Section tone="default" spacing="lg">
        <Container width="xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-steel-950">
                {CONTACT_COPY.form.heading}
              </h2>
              <ContactForm />
            </div>

            <aside className="space-y-6">
              <div className="space-y-3 rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-steel-950">
                  <MapPin aria-hidden className="size-4 text-brass-600" />
                  {CONTACT_COPY.info.headquartersHeading}
                </h3>
                <address className="not-italic text-sm leading-relaxed text-steel-700">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="space-y-3 rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-steel-950">
                  <Phone aria-hidden className="size-4 text-brass-600" />
                  {CONTACT_COPY.info.salesHeading}
                </h3>
                <a href={phoneHref} className="block text-sm font-medium text-steel-900 hover:text-brass-600">
                  {COMPANY.phonePrimary}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="block text-sm text-steel-700 hover:text-brass-600">
                  <Mail aria-hidden className="mr-1.5 inline size-3.5 align-text-bottom" />
                  {COMPANY.email}
                </a>
              </div>

              <div className="space-y-3 rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-steel-950">
                  <Phone aria-hidden className="size-4 text-brass-600" />
                  {CONTACT_COPY.info.serviceHeading}
                </h3>
                <a href={serviceHref} className="block text-sm font-medium text-steel-900 hover:text-brass-600">
                  {COMPANY.phoneService}
                </a>
              </div>

              <div className="space-y-3 rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-steel-950">
                  <Clock aria-hidden className="size-4 text-brass-600" />
                  {CONTACT_COPY.info.hoursHeading}
                </h3>
                <ul className="space-y-1 text-sm text-steel-700">
                  <li>{COMPANY.hours.weekdays}</li>
                  <li>{COMPANY.hours.sunday}</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="md">
        <Container width="xl">
          <div className="overflow-hidden rounded-2xl border border-steel-100 bg-card shadow-sm">
            <iframe
              title={`Map showing ${COMPANY.legalName} headquarters`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </Container>
      </Section>

      <JsonLd id="ld-contact" graph={graph} />
    </>
  );
}
