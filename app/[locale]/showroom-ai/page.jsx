import { notFound } from 'next/navigation';
import { locales } from '../../../lib/i18n';
import ShowroomAIPage from '../../../components/ShowroomAIPage';
import { showroomAIContent } from '../../../content/showroom-ai';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const c = showroomAIContent[locale] || showroomAIContent.en;
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: {
      canonical: `https://www.alex-dev.pro/${locale}/showroom-ai`,
    },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: `https://www.alex-dev.pro/${locale}/showroom-ai`,
      siteName: 'AlexDev',
      type: 'website',
      images: [{ url: '/og-showroom-ai.png', width: 1200, height: 630, alt: c.seoTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.seoTitle,
      description: c.seoDescription,
      images: ['/og-showroom-ai.png'],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    }
  };
}

export default function Page({ params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();
  return <ShowroomAIPage locale={locale} />;
}
