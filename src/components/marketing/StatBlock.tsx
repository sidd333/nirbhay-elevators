import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface StatItem {
  readonly value: string;
  readonly label: string;
}

interface StatBlockProps {
  readonly heading?: string;
  readonly items: readonly StatItem[];
}

export function StatBlock({ heading, items }: StatBlockProps) {
  return (
    <Section tone="dark" spacing="md">
      <Container width="xl" className="space-y-12">
        {heading ? (
          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-steel-50 sm:text-4xl">
            {heading}
          </h2>
        ) : null}
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="border-t border-steel-800 pt-6">
              <dt className="text-sm font-medium uppercase tracking-[0.18em] text-steel-400">{item.label}</dt>
              <dd className="mt-2 font-heading text-4xl font-semibold text-brass-300 sm:text-5xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
