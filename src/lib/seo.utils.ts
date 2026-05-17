import type { Metadata } from "next";
import { SEO } from "@/constants/seo";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${trimmed}`;
}

export function absoluteUrl(path: string): string {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${SEO.siteUrl}${trimmed}`;
}

interface BuildMetadataInput {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly noIndex?: boolean;
}

export function buildMetadata({ title, description, path, noIndex }: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SEO.siteName,
      locale: SEO.locale,
    },
    twitter: {
      card: "summary_large_image",
      site: SEO.twitterHandle,
      title,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
