import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "yearly", priority: 1 },
    { url: `${site.url}/szolgaltatasok`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/kazanok`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
