import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/constants/products";
import { absoluteUrl } from "@/lib/seo.utils";

export const dynamic = "force-static";

const STATIC_PATHS: ReadonlyArray<{ readonly path: string; readonly priority: number; readonly changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticEntries, ...productEntries];
}
