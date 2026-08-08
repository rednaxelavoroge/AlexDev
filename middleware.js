import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  if (pathname === '/') {
    url.pathname = `/${defaultLocale}`;
  } else {
    url.pathname = `/${defaultLocale}${pathname}`;
  }
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
