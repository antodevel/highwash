import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services/`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${siteUrl}/services/${s.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
