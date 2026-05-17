import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly action?: { readonly label: string; readonly href: Route };
  readonly tone?: "light" | "dark";
  readonly align?: "left" | "center";
  readonly className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, action, tone = "light", align = "left", className }: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center lg:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-medium uppercase tracking-[0.2em]",
              isDark ? "text-brass-300" : "text-brass-600",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
            isDark ? "text-steel-50" : "text-steel-950",
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className={cn("text-base leading-relaxed sm:text-lg", isDark ? "text-steel-300" : "text-steel-600")}>{subtitle}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
            isDark ? "text-brass-300 hover:text-brass-200" : "text-steel-900 hover:text-brass-600",
          )}
        >
          {action.label}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
