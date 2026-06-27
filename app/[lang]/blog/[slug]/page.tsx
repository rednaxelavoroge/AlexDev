import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { POSTS, getPost, type Block } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { getDict, LANGS, type Lang } from "@/lib/i18n/dict";
import { isValidLang } from "@/lib/i18n";

export const revalidate = 3600;

export function generateStaticParams() {
  const paths: { lang: Lang; slug: string }[] = [];
  for (const lang of LANGS) {
    for (const post of POSTS) {
      paths.push({ lang, slug: post.slug });
    }
  }
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${lang}/blog/${post.slug}`,
      languages: Object.fromEntries(
        LANGS.map((l) => [l, `/${l}/blog/${post.slug}`])
      ) as Record<string, string>,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${siteConfig.url}/${lang}/blog/${post.slug}`,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

function fmt(date: string, lang: Lang) {
  const locale = lang === "ru" ? "ru-RU" : lang === "ka" ? "ka-GE" : lang === "hy" ? "hy-AM" : "en-US";
  try {
    return new Date(date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  }
}

function Renderer({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-2xl font-bold text-white font-display mt-10 mb-4">{block.text}</h2>;
    case "p":
      return <p className="text-gray-300 leading-relaxed mb-5">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-2.5 mb-5 pl-1">
          {block.items.map((it) => (
            <li key={it} className="flex gap-3 text-gray-300">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 pl-5 border-l-2 border-indigo-500/60 text-lg text-white/90 italic font-display">
          {block.text}
        </blockquote>
      );
  }
}

export default async function Article({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: raw, slug } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;
  const dict = getDict(lang);
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <ArticleJsonLd title={post.title} description={post.description} date={post.date} slug={post.slug} lang={lang} />
      <BreadcrumbJsonLd
        items={[
          { name: dict.site.name, url: `${siteConfig.url}/${lang}` },
          { name: dict.blog.heading, url: `${siteConfig.url}/${lang}/blog` },
          { name: post.title, url: `${siteConfig.url}/${lang}/blog/${post.slug}` },
        ]}
      />
      <Navigation />
      <main id="main" className="pt-32 pb-24">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}/blog`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> {dict.blog.backToBlog}
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-10 pb-8 border-b border-white/5">
            <span>{fmt(post.date, lang)}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readingMinutes} min read</span>
          </div>

          <div className="text-[15px]">
            {post.body.map((b, i) => (
              <Renderer key={i} block={b} />
            ))}
          </div>

          <div className="mt-14 glass-panel rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white font-display mb-2">{dict.blog.ctaLine}</h2>
            <p className="text-gray-400 mb-6">{dict.hero.description}</p>
            <Link
              href={`/${lang}/#contact`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition-all"
            >
              {dict.blog.cta}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
