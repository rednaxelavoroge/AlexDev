import { siteConfig } from "@/lib/site";
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";
export const revalidate = 3600;

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const base = siteConfig.url;
  const items = [...POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      ${p.tags.map((t) => `<category>${escape(t)}</category>`).join("")}
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AlexDev Studio — Блог</title>
    <link>${base}/blog</link>
    <description>${escape(siteConfig.descriptionRu)}</description>
    <language>ru-RU</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
