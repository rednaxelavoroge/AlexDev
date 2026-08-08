import { notFound } from 'next/navigation';
import { locales } from '../../lib/i18n';
import { getContent } from '../../content';
import SiteV2 from '../../components/SiteV2';

export default function LocaleIndex({ params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();
  const content = getContent(locale);
  return <SiteV2 content={content} locale={locale} />;
}
