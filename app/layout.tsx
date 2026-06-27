import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { OrganizationJsonLd, WebsiteJsonLd, PersonJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AlexDev Studio — AI, SaaS и веб-платформы для бизнеса",
    template: "%s — AlexDev Studio",
  },
  description: siteConfig.descriptionRu,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder.nameEn }],
  creator: siteConfig.founder.nameEn,
  publisher: siteConfig.name,
  keywords: [
    "AI software studio",
    "разработка AI",
    "SaaS разработка",
    "Telegram Mini Apps",
    "Web3 разработка",
    "AI агенты",
    "founder-led studio",
    "AlexDev Studio",
    "custom software",
    "MVP для стартапа",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "AlexDev Studio Blog" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AlexDev Studio — We design. We build. We scale.",
    description: siteConfig.descriptionRu,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlexDev Studio — AI, SaaS & Web платформы",
    description: siteConfig.descriptionRu,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="bg-[#030712] text-gray-100 antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <PersonJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
        >
          К основному содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
