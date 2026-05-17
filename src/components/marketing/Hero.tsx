import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { withBasePath } from "@/lib/seo.utils";
import { cn } from "@/lib/utils";

const heroLayoutVariants = cva("grid items-center gap-12", {
  variants: {
    layout: {
      split: "lg:grid-cols-[1.05fr_0.95fr]",
      "image-right": "lg:grid-cols-[0.95fr_1.05fr]",
      centered: "lg:grid-cols-1 text-center",
    },
  },
  defaultVariants: { layout: "split" },
});

interface HeroProps extends VariantProps<typeof heroLayoutVariants> {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly primaryCta?: { readonly label: string; readonly href: Route };
  readonly secondaryCta?: { readonly label: string; readonly href: Route };
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly tone?: "default" | "dark" | "muted";
}

export function Hero({
  layout,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  tone = "default",
}: HeroProps) {
  const isCentered = layout === "centered";
  const sectionTone = tone === "dark" ? "dark" : tone === "muted" ? "muted" : "default";

  return (
    <Section tone={sectionTone} spacing="lg" className="relative overflow-hidden">
      <Container width="xl">
        <div className={cn(heroLayoutVariants({ layout }))}>
          <div className={cn("max-w-2xl space-y-6", isCentered && "mx-auto")}>
            {eyebrow ? (
              <p className="inline-flex items-center rounded-full border border-steel-200 bg-steel-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-steel-700">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-steel-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-steel-600 sm:text-xl">{subtitle}</p>
            {(primaryCta || secondaryCta) && (
              <div className={cn("flex flex-wrap gap-3", isCentered && "justify-center")}>
                {primaryCta ? (
                  <Button asChild size="lg">
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button asChild size="lg" variant="outline">
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </div>

          {imageSrc && imageAlt && !isCentered ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-steel-100 shadow-xl shadow-steel-900/10 lg:aspect-[5/6]">
              <Image
                src={withBasePath(imageSrc)}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
