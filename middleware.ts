import { NextResponse, type NextRequest } from "next/server";
import { detectLang, LANGS, DEFAULT_LANG } from "@/lib/i18n";

const COOKIE_NAME = "alexdev_lang";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/public") ||
    pathname.match(/\.(ico|svg|png|jpg|jpeg|webp|css|js|xml|json|txt)$/)
  ) {
    return NextResponse.next();
  }

  // Check if path already has a language prefix
  const langMatch = pathname.match(/^\/(en|ru|ka|hy)(\/|$)/);
  if (langMatch) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, langMatch[1], {
      maxAge: 365 * 24 * 60 * 60,
      path: "/",
    });
    return res;
  }

  // Detect language
  const cookie = request.cookies.get(COOKIE_NAME)?.value ?? null;
  const acceptLang = request.headers.get("accept-language");
  const lang = detectLang(acceptLang, cookie);

  // Redirect to localized path
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${lang}${pathname}`;
  const res = NextResponse.redirect(newUrl);
  res.cookies.set(COOKIE_NAME, lang, {
    maxAge: 365 * 24 * 60 * 60,
    path: "/",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|public|icon\\.svg|favicon\\.ico|opengraph-image).*)"],
};
