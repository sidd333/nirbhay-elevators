export type ProjectCategory = "residential" | "commercial" | "hospital" | "industrial";

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly location: string;
  readonly category: ProjectCategory;
  readonly summary: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly stats: ReadonlyArray<{ readonly label: string; readonly value: string }>;
}
