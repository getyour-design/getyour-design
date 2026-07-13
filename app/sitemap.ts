import type { MetadataRoute } from "next";
import { products, visibleShopCategories } from "./data/products";
import { getAlternateLanguages, getProductPath, getShopPath, localizedRoutes, locales, type Locale, type RouteKey } from "./lib/i18n";

const siteUrl = "https://www.getyour.design";
const lastModified = new Date("2026-06-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(localizedRoutes).flatMap(([routeKey, paths]) =>
    locales.map((locale) => ({
      url: `${siteUrl}${paths[locale]}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages(getAlternateLanguages(routeKey as RouteKey)),
      },
    })),
  );
  const shopRoutes = visibleShopCategories.map((category) => category.slug).flatMap((slug) => {
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
        languages: absoluteLanguages(getAlternateLanguages("luxury-coasters")),
      },
    },
  ];

  return [...staticRoutes, ...legacyRoutes, ...shopRoutes, ...productRoutes];
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
