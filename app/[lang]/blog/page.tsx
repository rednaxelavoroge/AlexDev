import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { POSTS } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { getDict, type Lang, LANGS } from "@/lib/i18n/dict";
import { isValidLang } from "@/lib/i18n";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;
  const dict = getDict(lang);
  return {
    title: dict.seo.blogTitle,
    description: dict.blog.subheading,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}/blog`])) as Record<string, string>,
    },
  };
}

const COVER: Record<string, string> = {
  indigo: "from-indigo-600/30 to-indigo-900/10",
  purple: "from-purple-600/30 to-purple-900/10",
  teal: "from-teal-600/30 to-teal-900/10",
};

function fmt(date: string, lang: Lang) {
  const locale = lang === "ru" ? "ru-RU" : lang === "ka" ? "ka-GE" : lang === "hy" ? "hy-AM" : "en-US";
  try {
    return new Date(date).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  }
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;
  const dict = getDict(lang);
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <BreadcrumbJsonLd
        items={[
          { name: dict.site.name, url: `${siteConfig.url}/${lang}` },
          { name: dict.blog.heading, url: `${siteConfig.url}/${lang}/blog` },
        ]}
      />
      <Navigation />
      <main id="main" className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-14 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
              {dict.blog.heading}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight">
              {dict.blog.heading}
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              {dict.blog.subheading}
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-7">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/${lang}/blog/${p.slug}`}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col"
              >
                <div className={`relative h-40 bg-gradient-to-br ${COVER[p.cover] ?? COVER.indigo} flex items-end p-5`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="relative flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-black/30 text-white/90 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{fmt(p.date, lang)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.readingMinutes} min</span>
                  </div>
                  <h2 className="text-xl font-bold text-white font-display mb-2 group-hover:text-indigo-300 transition-colors flex items-start justify-between gap-2">
                    {p.title}
                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-indigo-400 transition-colors shrink-0 mt-1" />
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
