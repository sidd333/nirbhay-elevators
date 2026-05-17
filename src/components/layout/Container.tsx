import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-6 sm:px-8 lg:px-10", {
  variants: {
    width: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
    },
  },
  defaultVariants: { width: "xl" },
});

type ContainerProps = ComponentProps<"div"> & VariantProps<typeof containerVariants>;

export function Container({ className, width, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ width }), className)} {...props} />;
}
