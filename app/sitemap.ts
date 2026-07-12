import type { MetadataRoute } from "next";
import { products, shopCategories } from "./data/products";
import { getAlternateLanguages, getProductPath, getShopPath, localizedRoutes, locales, type RouteKey } from "./lib/i18n";

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
  const shopRoutes = shopCategories.map((category) => category.slug).flatMap((slug) => {
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
      ...Object.fromEntries(locales.map((locale) => [locale, getProductPath(locale, product.categorySlug, product.slug)])),
      "x-default": getProductPath("de", product.categorySlug, product.slug),
    };

    return locales.map((locale) => ({
      url: `${siteUrl}${getProductPath(locale, product.categorySlug, product.slug)}`,
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
