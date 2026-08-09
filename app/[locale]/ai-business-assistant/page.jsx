import { notFound } from 'next/navigation';
import { locales } from '../../../lib/i18n';
import AIBusinessAssistantPage from '../../../components/AIBusinessAssistantPage';
import { aiBusinessAssistantContent } from '../../../content/ai-business-assistant';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const c = aiBusinessAssistantContent[locale] || aiBusinessAssistantContent.en;
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: `https://www.alex-dev.pro/${locale}/ai-business-assistant`,
      siteName: 'AlexDev',
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: c.seoTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.seoTitle,
      description: c.seoDescription,
      images: ['/og.png'],
    }
  };
}

export default function Page({ params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();
  return <AIBusinessAssistantPage locale={locale} />;
}
