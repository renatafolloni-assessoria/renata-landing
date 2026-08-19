import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/constants";
import { SERVICES } from "./_lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/servicos/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
