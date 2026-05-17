import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const ctaVariants = cva("rounded-3xl px-8 py-12 sm:px-14 sm:py-16", {
  variants: {
    tone: {
      default: "bg-steel-50 text-steel-950",
      dark: "bg-steel-950 text-steel-50",
      accent: "bg-brass-300 text-steel-950",
    },
  },
  defaultVariants: { tone: "default" },
});

interface CtaBannerProps extends VariantProps<typeof ctaVariants> {
  readonly heading: string;
  readonly subtitle?: string;
  readonly primaryCta: { readonly label: string; readonly href: Route };
  readonly secondaryCta?: { readonly label: string; readonly href: Route };
}

export function CtaBanner({ heading, subtitle, primaryCta, secondaryCta, tone }: CtaBannerProps) {
  const isDark = tone === "dark";
  return (
    <Section tone="default" spacing="md">
      <Container width="xl">
        <div className={cn(ctaVariants({ tone }))}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{heading}</h2>
              {subtitle ? (
                <p className={cn("text-base leading-relaxed", isDark ? "text-steel-300" : "text-steel-700")}>{subtitle}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant={isDark ? "secondary" : "default"}>
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Button>
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
