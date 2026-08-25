import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { englishShopCategorySlugs, rootRedirects } from "./app/lib/i18n";

const publicFilePattern = /\.(.*)$/;
const locales = new Set(["de", "en", "fr", "es", "zh", "ar"]);
const isComingSoonMode = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SITE_MODE !== "live";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    publicFilePattern.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isComingSoonMode && pathname !== "/coming-soon") {
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/de/art")) {
    return redirect(request, pathname.replace(/^\/de\/art/, "/de/kunst"));
  }

  if (pathname.startsWith("/de/collections")) {
    return redirect(request, pathname.replace(/^\/de\/collections/, "/de/kollektionen"));
  }

  if (pathname === "/en/imprint") return redirect(request, "/en/legal-notice");
  if (pathname === "/en/privacy") return redirect(request, "/en/privacy-policy");
  if (pathname === "/en/terms") return redirect(request, "/en/terms-and-conditions");

  const legacyEnglishCategorySlug = pathname.match(/^\/en\/shop\/([^/]+)$/)?.[1];
  if (legacyEnglishCategorySlug && englishShopCategorySlugs[legacyEnglishCategorySlug]) {
    return redirect(request, `/en/shop/${englishShopCategorySlugs[legacyEnglishCategorySlug]}`);
  }

  if (pathname.startsWith("/shop/")) return redirect(request, `/de${pathname}`);

  const target = rootRedirects[pathname];
  if (target) return redirect(request, target);

  return continueWithLocale(request);
}

function continueWithLocale(request: NextRequest) {
  const locale = request.nextUrl.pathname.split("/")[1];
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-getyour-locale", locales.has(locale) ? locale : "de");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

function redirect(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api).*)"],
};
