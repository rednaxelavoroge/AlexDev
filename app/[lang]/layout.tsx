import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { LANGS } from "@/lib/i18n";
import { getDict, type Lang } from "@/lib/i18n/dict";
import { DictProvider } from "@/lib/i18n/DictProvider";
import { OrganizationJsonLd, WebsiteJsonLd, PersonJsonLd } from "@/components/seo/JsonLd";
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
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — AI, SaaS & Web Platforms for Business`,
      template: dict.seo.titleTemplate,
    },
    description: dict.site.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.founder.nameEn }],
    creator: siteConfig.founder.nameEn,
    publisher: siteConfig.name,
    keywords: [
      "AI software studio",
      "custom software development",
      "SaaS development",
      "Telegram Mini Apps",
      "Web3 development",
      "AI agents",
      "founder-led studio",
      "AlexDev Studio",
      "startup MVP",
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        LANGS.map((l) => [l, `/${l}`])
      ) as Record<string, string>,
      types: {
        "application/rss+xml": [{ url: `/${lang}/rss.xml`, title: `${siteConfig.name} Blog` }],
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ru" ? "ru_RU" : lang === "ka" ? "ka_GE" : lang === "hy" ? "hy_AM" : "en_US",
      url: `${siteConfig.url}/${lang}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} — We design. We build. We scale.`,
      description: dict.site.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — AI, SaaS & Web Platforms`,
      description: dict.site.description,
      images: ["/opengraph-image"],
    },
    category: "technology",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;

  return (
    <>
      <OrganizationJsonLd lang={lang} />
      <WebsiteJsonLd lang={lang} />
      <PersonJsonLd lang={lang} />
      <DictProvider lang={lang}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </DictProvider>
    </>
  );
}
