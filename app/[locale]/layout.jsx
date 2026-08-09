import '../globals.css';
import { locales, dir as getDir } from '../../lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const description =
  'AlexDev is an AI-native engineering company that designs, builds and scales modern digital products through AI-native engineering.';

export const metadata = {
  metadataBase: new URL('https://www.alex-dev.pro'),
  title: 'AlexDev — AI-Native Engineering Company',
  description,
  openGraph: {
    type: 'website',
    siteName: 'AlexDev',
    title: 'AlexDev — AI-Native Engineering Company',
    description,
    url: 'https://www.alex-dev.pro',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AlexDev — AI-Native Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlexDev — AI-Native Engineering Company',
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  return (
    <html lang={locale} dir={getDir(locale)} data-theme="light">
      <body>{children}</body>
    </html>
  );
}
