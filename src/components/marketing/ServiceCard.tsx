import { Calendar, RefreshCw, Shield, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types/service.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ICONS: Readonly<Record<Service["icon"], LucideIcon>> = {
  wrench: Wrench,
  shield: Shield,
  refresh: RefreshCw,
  calendar: Calendar,
};

interface ServiceCardProps {
  readonly service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS[service.icon];
  return (
    <Card id={service.slug} className="scroll-mt-24 border-steel-100 bg-card transition-shadow hover:shadow-lg hover:shadow-steel-900/5">
      <CardHeader>
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brass-100 text-brass-700">
          <Icon aria-hidden className="size-5" />
        </span>
        <CardTitle className="mt-3 font-heading text-xl font-semibold leading-snug tracking-tight text-steel-950">
          {service.name}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-steel-600">{service.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-steel-700">{service.description}</p>
        <ul className="space-y-2 text-sm text-steel-700">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brass-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
