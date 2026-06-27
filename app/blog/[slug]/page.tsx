import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { POSTS, getPost, type Block } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600; // ISR: ревалидация раз в час

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
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

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <ArticleJsonLd title={post.title} description={post.description} date={post.date} slug={post.slug} />
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", url: siteConfig.url },
          { name: "Блог", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ]}
      />
      <Navigation />
      <main id="main" className="pt-32 pb-24">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Все статьи
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
            <span>{fmt(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readingMinutes} мин чтения</span>
          </div>

          <div className="text-[15px]">
            {post.body.map((b, i) => (
              <Renderer key={i} block={b} />
            ))}
          </div>

          <div className="mt-14 glass-panel rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white font-display mb-2">Нужен похожий продукт?</h2>
            <p className="text-gray-400 mb-6">Обсудим вашу задачу и предложим решение.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition-all"
            >
              Обсудить проект
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
