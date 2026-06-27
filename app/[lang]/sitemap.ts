import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { POSTS } from "@/lib/blog";
import { LANGS } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    entries.push(
      { url: `${base}/${lang}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: `${base}/${lang}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    );
    for (const post of POSTS) {
      entries.push({
        url: `${base}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
