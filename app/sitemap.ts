import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.pollitosconpapas.cl", lastModified: new Date() }];
}
