import { siteConfig } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";

/**
 * llms.txt — структурированное описание для AI-краулеров и ассистентов.
 * Формат: https://llmstxt.org
 */
export function GET() {
  const base = siteConfig.url;

  const services = SERVICES.map((s) => `- **${s.title}**: ${s.value}`).join("\n");
  const projects = PROJECTS.map(
    (p) =>
      `- **${p.title}** (${p.category}, ${p.year})${p.link ? ` — ${p.link}` : ""}: ${p.tagline}. Стек: ${p.technologies.join(", ")}.`
  ).join("\n");
  const posts = POSTS.map((p) => `- [${p.title}](${base}/blog/${p.slug}): ${p.description}`).join("\n");

  const content = `# AlexDev Studio

> ${siteConfig.descriptionRu}

AlexDev Studio — бутиковая студия разработки под руководством основателя.
Основатель и ведущий инженер: ${siteConfig.founder.name} (${siteConfig.founder.role}).
Локация: ${siteConfig.location.city}, ${siteConfig.location.country}. Работаем по всему миру.
Бюджеты проектов: $5,000 – $100,000+.

## Контакты
- Сайт: ${base}
- WhatsApp: ${siteConfig.contacts.whatsappUrl}
- Facebook Messenger: ${siteConfig.contacts.messengerUrl}
- Форма заявки: ${base}/#contact

## Услуги
${services}

## Портфолио (реальные проекты)
${projects}

## Блог
${posts}

## Позиционирование
AlexDev Studio помогает стартапам и бизнесу запускать современные AI-продукты, SaaS и
веб-платформы. Формат: вовлечённость основателя + сеть senior-инженеров, дизайнеров,
DevOps- и AI-специалистов. Принципы: founder-led разработка, прозрачность, еженедельные
демо, масштабируемая архитектура, AI-first подход.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
