export type ProductSlug =
  | "passenger"
  | "capsule"
  | "hospital"
  | "cargo"
  | "hydraulic"
  | "mrl"
  | "home";

export type ProductCategory = "residential" | "commercial" | "industrial" | "specialty";

export interface ProductSpec {
  readonly label: string;
  readonly value: string;
}

export interface ProductFeature {
  readonly title: string;
  readonly description: string;
}

export interface Product {
  readonly slug: ProductSlug;
  readonly name: string;
  readonly shortName: string;
  readonly category: ProductCategory;
  readonly tagline: string;
  readonly description: string;
  readonly heroImage: string;
  readonly heroImageAlt: string;
  readonly applications: readonly string[];
  readonly specs: readonly ProductSpec[];
  readonly features: readonly ProductFeature[];
  readonly seoTitle: string;
  readonly seoDescription: string;
}
