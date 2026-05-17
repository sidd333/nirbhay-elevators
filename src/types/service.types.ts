export type ServiceSlug = "installation" | "maintenance" | "modernization" | "amc";

export interface Service {
  readonly slug: ServiceSlug;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly bullets: readonly string[];
  readonly icon: "wrench" | "shield" | "refresh" | "calendar";
}
