import type { MetadataRoute } from "next";
import { SEO } from "@/constants/seo";
import { COMPANY } from "@/constants/company";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.brandName,
    short_name: COMPANY.brandName,
    description: SEO.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: SEO.themeColor,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
