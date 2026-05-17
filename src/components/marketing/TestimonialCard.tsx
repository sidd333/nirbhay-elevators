import { Quote } from "lucide-react";

interface TestimonialCardProps {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-2xl border border-steel-100 bg-card p-7 shadow-sm">
      <Quote aria-hidden className="size-7 text-brass-400" />
      <blockquote className="flex-1 font-heading text-lg leading-relaxed tracking-tight text-steel-800">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="border-t border-steel-100 pt-4 text-sm">
        <span className="block font-semibold text-steel-950">{author}</span>
        <span className="text-steel-500">
          {role} · {company}
        </span>
      </figcaption>
    </figure>
  );
}
