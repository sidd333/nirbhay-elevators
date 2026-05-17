import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project.types";
import { withBasePath } from "@/lib/seo.utils";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={project.category}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-100 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-steel-900/5"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-steel-100">
        <Image
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge variant="outline" className="self-start border-steel-200 text-xs uppercase tracking-[0.18em] text-steel-600">
          {project.category}
        </Badge>
        <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-steel-950">{project.title}</h3>
        <p className="text-sm font-medium text-steel-500">{project.location}</p>
        <p className="text-sm leading-relaxed text-steel-700">{project.summary}</p>
        <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-steel-100 pt-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-steel-500">{stat.label}</dt>
              <dd className="mt-1 font-heading text-lg font-semibold text-steel-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
