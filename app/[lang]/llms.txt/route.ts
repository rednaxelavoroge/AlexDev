import { siteConfig } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";
import { getDict, LANGS, type Lang } from "@/lib/i18n/dict";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function GET() {
  const dict = getDict("en");
  const base = siteConfig.url;

  const services = SERVICES.map((s) => `- **${s.title}**: ${s.value}`).join("\n");
  const projects = PROJECTS.map(
    (p) =>
      `- **${p.title}** (${p.category}, ${p.year})${p.link ? ` — ${p.link}` : ""}: ${p.tagline}. Stack: ${p.technologies.join(", ")}.`
  ).join("\n");
  const posts = POSTS.map((p) => `- [${p.title}](${base}/en/blog/${p.slug}): ${p.description}`).join("\n");

  const content = `# AlexDev Studio

> ${dict.site.description}

${dict.site.descriptionShort}

## Contact
- Website: ${base}
- WhatsApp: ${siteConfig.contacts.whatsappUrl}
- Messenger: ${siteConfig.contacts.messengerUrl}
- Contact form: ${base}/en/#contact

## Services
${services}

## Portfolio
${projects}

## Blog
${posts}

## Positioning
AlexDev Studio helps startups and businesses launch modern AI products, SaaS and
web platforms. Format: founder commitment + senior engineer network.
Principles: founder-led development, transparency, weekly demos,
scalable architecture, AI-first approach.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
