import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    tone: {
      default: "bg-background text-foreground",
      muted: "bg-steel-50 text-foreground",
      dark: "bg-steel-950 text-steel-50",
      accent: "bg-brass-50 text-foreground",
    },
    spacing: {
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20 lg:py-24",
      lg: "py-24 sm:py-28 lg:py-32",
    },
  },
  defaultVariants: { tone: "default", spacing: "md" },
});

type SectionProps = ComponentProps<"section"> & VariantProps<typeof sectionVariants>;

export function Section({ className, tone, spacing, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ tone, spacing }), className)} {...props} />;
}
