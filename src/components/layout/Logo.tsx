import Link from "next/link";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/constants/company";

interface LogoProps {
  readonly className?: string;
  readonly tone?: "default" | "inverse";
}

export function Logo({ className, tone = "default" }: LogoProps) {
  const textTone = tone === "inverse" ? "text-steel-50" : "text-steel-900";
  const markTone = tone === "inverse" ? "bg-brass-300 text-steel-950" : "bg-steel-900 text-brass-300";
  return (
    <Link
      href="/"
      aria-label={COMPANY.brandName}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-9 place-items-center rounded-md font-serif text-lg font-semibold leading-none",
          markTone,
        )}
      >
        N
      </span>
      <span className={cn("flex flex-col leading-tight", textTone)}>
        <span className="font-serif text-base font-semibold tracking-tight">Nirbhay</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] opacity-70">Elevators</span>
      </span>
    </Link>
  );
}
