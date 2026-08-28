import type { MetadataRoute } from "next";
import { indexableShopCategories, products } from "./data/products";
import { brands } from "./data/brands";
import { getAbsoluteAlternateLanguages, getProductPath, getShopPath, localizedRoutes, locales, siteUrl, type Locale, type RouteKey } from "./lib/i18n";

const lastModified = new Date("2026-08-22");

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SITE_MODE !== "live") {
    return [];
  }

  const staticRoutes = Object.entries(localizedRoutes).filter(([routeKey]) => routeKey !== "ateliers").flatMap(([routeKey, paths]) =>
    locales.map((locale) => ({
      url: `${siteUrl}${paths[locale]}`,
      lastModified,
      alternates: {
        languages: getAbsoluteAlternateLanguages(routeKey as RouteKey),
      },
    })),
  );
  const shopRoutes = indexableShopCategories.map((category) => category.slug).flatMap((slug) => {
    const languages = {
      ...Object.fromEntries(locales.map((locale) => [locale, getShopPath(locale, slug)])),
      "x-default": getShopPath("de", slug),
    };

    return locales.map((locale) => ({
      url: `${siteUrl}${getShopPath(locale, slug)}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages(languages),
      },
    }));
  });
  const productRoutes = products.flatMap((product) => {
    const languages = {
      ...Object.fromEntries(locales.map((locale) => [locale, getProductCanonicalPath(locale, product)])),
      "x-default": getProductCanonicalPath("de", product),
    };

    return locales.map((locale) => ({
      url: `${siteUrl}${getProductCanonicalPath(locale, product)}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages(languages),
      },
    }));
  });
  const legacyRoutes = [
    {
      url: `${siteUrl}/luxury-coasters`,
      lastModified,
      alternates: {
        languages: getAbsoluteAlternateLanguages("luxury-coasters"),
      },
    },
  ];

  const collectionProfileRoutes = brands.filter((brand) => brand.heroImage).flatMap((brand) => locales.map((locale) => ({
    url: `${siteUrl}/${locale}/collections/${brand.slug}`,
    lastModified,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((targetLocale) => [targetLocale, `${siteUrl}/${targetLocale}/collections/${brand.slug}`]),
        ["x-default", `${siteUrl}/de/collections/${brand.slug}`],
      ]),
    },
  })));

  return [...staticRoutes, ...legacyRoutes, ...shopRoutes, ...productRoutes, ...collectionProfileRoutes];
}

function absoluteLanguages(languages: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(languages).map(([locale, path]) => [locale, `${siteUrl}${path}`]),
  );
}

type Product = (typeof products)[number];

function getProductCanonicalPath(locale: Locale, product: Product) {
  return product.pathMode === "nested"
    ? getProductPath(locale, product.categorySlug, product.slug)
    : getShopPath(locale, product.slug);
}
