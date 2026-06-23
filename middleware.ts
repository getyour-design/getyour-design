import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { englishShopCategorySlugs, rootRedirects } from "./app/lib/i18n";

const publicFilePattern = /\.(.*)$/;

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

  if (pathname.startsWith("/de/art")) {
    return redirect(request, pathname.replace(/^\/de\/art/, "/de/kunst"));
  }

  if (pathname.startsWith("/de/collections")) {
    return redirect(request, pathname.replace(/^\/de\/collections/, "/de/kollektionen"));
  }

  if (pathname === "/en/imprint") {
    return redirect(request, "/en/legal-notice");
  }

  if (pathname === "/en/privacy") {
    return redirect(request, "/en/privacy-policy");
  }

  if (pathname === "/en/terms") {
    return redirect(request, "/en/terms-and-conditions");
  }

  const legacyEnglishCategorySlug = pathname.match(/^\/en\/shop\/([^/]+)$/)?.[1];

  if (legacyEnglishCategorySlug && englishShopCategorySlugs[legacyEnglishCategorySlug]) {
    return redirect(request, `/en/shop/${englishShopCategorySlugs[legacyEnglishCategorySlug]}`);
  }

  if (pathname.startsWith("/shop/")) {
    return redirect(request, `/de${pathname}`);
  }

  const target = rootRedirects[pathname];

  if (target) {
    return redirect(request, target);
  }

  return NextResponse.next();
}

function redirect(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api).*)"],
};
