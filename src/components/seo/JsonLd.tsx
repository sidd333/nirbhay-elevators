import type { JsonLdGraph } from "@/lib/jsonld.utils";

interface JsonLdProps {
  readonly id: string;
  readonly graph: JsonLdGraph;
}

export function JsonLd({ id, graph }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
