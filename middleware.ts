import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "fr", "ar"] as const;
const DEFAULT_LOCALE = "en";

function getPreferredLocale(request: NextRequest): string {
  const cookie = request.cookies.get("medinova-lang")?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) {
    return cookie;
  }
  const acceptLang = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLang.includes("ar")) return "ar";
  if (acceptLang.includes("fr")) return "fr";
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip non-page assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/sitemap-") ||
    pathname === "/llms.txt" ||
    /\.(png|jpe?g|webp|svg|ico|txt|xml|json|woff2?)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already localized
  if (/^\/(en|fr|ar)(\/|$)/.test(pathname)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const newPath = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(new URL(newPath, request.url));
}

export const config = {
  matcher: [
    // Match all request paths except static files
    "/((?!_next/static|_next/image|favicon.ico|images/|fonts/).*)",
  ],
};