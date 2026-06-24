import type { MetadataRoute } from "next";
import { products, shopCategories } from "./data/products";
import { getAlternateLanguages, getShopPath, localizedRoutes, type RouteKey } from "./lib/i18n";

const siteUrl = "https://www.getyour.design";
const lastModified = new Date("2026-06-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(localizedRoutes).flatMap(([routeKey, paths]) => [
    {
      url: `${siteUrl}${paths.de}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages(getAlternateLanguages(routeKey as RouteKey)),
      },
    },
    {
      url: `${siteUrl}${paths.en}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages(getAlternateLanguages(routeKey as RouteKey)),
      },
    },
  ]);
  const shopRoutes = [
    ...shopCategories.map((category) => category.slug),
    ...products.map((product) => product.slug),
  ].flatMap((slug) => [
    {
      url: `${siteUrl}${getShopPath("de", slug)}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages({
          de: getShopPath("de", slug),
          en: getShopPath("en", slug),
          "x-default": getShopPath("de", slug),
        }),
      },
    },
    {
      url: `${siteUrl}${getShopPath("en", slug)}`,
      lastModified,
      alternates: {
        languages: absoluteLanguages({
          de: getShopPath("de", slug),
          en: getShopPath("en", slug),
          "x-default": getShopPath("de", slug),
        }),
      },
    },
  ]);
  const legacyRoutes = [
    {
      url: `${siteUrl}/luxury-coasters`,
      lastModified,
      alternates: {
        languages: absoluteLanguages({
          de: localizedRoutes["luxury-coasters"].de,
          en: localizedRoutes["luxury-coasters"].en,
          "x-default": "/luxury-coasters",
        }),
      },
    },
  ];

  return [...staticRoutes, ...legacyRoutes, ...shopRoutes];
}

function absoluteLanguages(languages: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(languages).map(([locale, path]) => [locale, `${siteUrl}${path}`]),
  );
}
