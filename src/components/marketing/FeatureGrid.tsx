import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gridVariants = cva("grid gap-6 sm:gap-8", {
  variants: {
    columns: {
      "2": "sm:grid-cols-2",
      "3": "sm:grid-cols-2 lg:grid-cols-3",
      "4": "sm:grid-cols-2 lg:grid-cols-4",
    },
  },
  defaultVariants: { columns: "3" },
});

interface FeatureItem {
  readonly title: string;
  readonly description: string;
}

interface FeatureGridProps extends VariantProps<typeof gridVariants> {
  readonly items: readonly FeatureItem[];
  readonly className?: string;
}

export function FeatureGrid({ items, columns, className }: FeatureGridProps) {
  return (
    <ul className={cn(gridVariants({ columns }), className)}>
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-steel-100 bg-card p-6 shadow-sm">
          <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-steel-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
