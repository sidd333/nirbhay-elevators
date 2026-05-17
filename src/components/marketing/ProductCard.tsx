import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product.types";
import { withBasePath } from "@/lib/seo.utils";
import { cn } from "@/lib/utils";

const productCardVariants = cva(
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-steel-100 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-steel-900/5",
  {
    variants: {
      size: {
        default: "",
        compact: "rounded-xl",
      },
    },
    defaultVariants: { size: "default" },
  },
);

interface ProductCardProps extends VariantProps<typeof productCardVariants> {
  readonly product: Product;
  readonly className?: string;
}

export function ProductCard({ product, size, className }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className={cn(productCardVariants({ size }), className)}>
      <div className={cn("relative w-full overflow-hidden bg-steel-100", size === "compact" ? "aspect-[4/3]" : "aspect-[5/4]")}>
        <Image
          src={withBasePath(product.heroImage)}
          alt={product.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge variant="outline" className="self-start border-steel-200 text-xs uppercase tracking-[0.18em] text-steel-600">
          {product.category}
        </Badge>
        <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-steel-950">{product.name}</h3>
        <p className="text-sm leading-relaxed text-steel-600">{product.tagline}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-medium text-steel-900 transition-colors group-hover:text-brass-600">
          View specs
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
