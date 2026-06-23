export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export type RouteKey =
  | "home"
  | "agb"
  | "arbeit-einreichen"
  | "art"
  | "artists"
  | "ateliers"
  | "brands"
  | "collections"
  | "contact"
  | "datenschutz"
  | "gallery"
  | "impressum"
  | "journal"
  | "materials"
  | "objects"
  | "sculptural-seating"
  | "shop"
  | "suche"
  | "trade"
  | "warenkorb";

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: { de: "/de", en: "/en" },
  agb: { de: "/de/agb", en: "/en/terms-and-conditions" },
  "arbeit-einreichen": { de: "/de/arbeit-einreichen", en: "/en/submit-work" },
  art: { de: "/de/kunst", en: "/en/art" },
  artists: { de: "/de/kuenstler", en: "/en/artists" },
  ateliers: { de: "/de/ateliers", en: "/en/ateliers" },
  brands: { de: "/de/marken", en: "/en/brands" },
  collections: { de: "/de/kollektionen", en: "/en/collections" },
  contact: { de: "/de/kontakt", en: "/en/contact" },
  datenschutz: { de: "/de/datenschutz", en: "/en/privacy-policy" },
  gallery: { de: "/de/galerie", en: "/en/gallery" },
  impressum: { de: "/de/impressum", en: "/en/legal-notice" },
  journal: { de: "/de/journal", en: "/en/journal" },
  materials: { de: "/de/materialien", en: "/en/materials" },
  objects: { de: "/de/objekte", en: "/en/objects" },
  "sculptural-seating": { de: "/de/sculptural-seating", en: "/en/sculptural-seating" },
  shop: { de: "/de/shop", en: "/en/shop" },
  suche: { de: "/de/suche", en: "/en/search" },
  trade: { de: "/de/projekte", en: "/en/trade" },
  warenkorb: { de: "/de/warenkorb", en: "/en/cart" },
};

export const rootRedirects: Record<string, string> = {
  "/": localizedRoutes.home.de,
  "/agb": localizedRoutes.agb.de,
  "/arbeit-einreichen": localizedRoutes["arbeit-einreichen"].de,
  "/art": localizedRoutes.art.de,
  "/artists": localizedRoutes.artists.de,
  "/ateliers": localizedRoutes.ateliers.de,
  "/brands": localizedRoutes.brands.de,
  "/collections": localizedRoutes.collections.de,
  "/contact": localizedRoutes.contact.de,
  "/datenschutz": localizedRoutes.datenschutz.de,
  "/gallery": localizedRoutes.gallery.de,
  "/impressum": localizedRoutes.impressum.de,
  "/journal": localizedRoutes.journal.de,
  "/materials": localizedRoutes.materials.de,
  "/objects": localizedRoutes.objects.de,
  "/position-vorstellen": localizedRoutes["arbeit-einreichen"].de,
  "/sculptural-seating": localizedRoutes["sculptural-seating"].de,
  "/shop": localizedRoutes.shop.de,
  "/stories": localizedRoutes.journal.de,
  "/suche": localizedRoutes.suche.de,
  "/trade": localizedRoutes.trade.de,
  "/warenkorb": localizedRoutes.warenkorb.de,
};

export const localizedPathToRouteKey = Object.entries(localizedRoutes).reduce(
  (routes, [key, paths]) => {
    routes[paths.de.replace(/^\/(de|en)\//, "") || ""] = key as RouteKey;
    routes[paths.en.replace(/^\/(de|en)\//, "") || ""] = key as RouteKey;
    return routes;
  },
  {} as Record<string, RouteKey>,
);

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLanguages(routeKey: RouteKey, suffix = "") {
  return {
    de: `${localizedRoutes[routeKey].de}${suffix}`,
    en: `${localizedRoutes[routeKey].en}${suffix}`,
    "x-default": `${localizedRoutes[routeKey].de}${suffix}`,
  };
}

export const englishShopCategorySlugs: Record<string, string> = {
  moebel: "furniture",
  leuchten: "lighting",
  teppiche: "rugs",
  objekte: "objects",
  kunst: "artworks",
  editionen: "editions",
  tabletop: "accessories",
};

export const legacyEnglishShopCategorySlugs = Object.fromEntries(
  Object.entries(englishShopCategorySlugs).map(([germanSlug, englishSlug]) => [englishSlug, germanSlug]),
) as Record<string, string>;

export function getLocalizedShopSlug(locale: Locale, slug: string) {
  if (locale === "en") {
    return englishShopCategorySlugs[slug] ?? slug;
  }

  return slug;
}

export function resolveShopSlug(locale: Locale, slug: string) {
  if (locale === "en") {
    return legacyEnglishShopCategorySlugs[slug] ?? slug;
  }

  return slug;
}

export function getShopPath(locale: Locale, slug = "") {
  return `${localizedRoutes.shop[locale]}${slug ? `/${getLocalizedShopSlug(locale, slug)}` : ""}`;
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return localizedRoutes.home[locale];
  }

  if (href.startsWith("/shop/")) {
    const slug = href.slice("/shop/".length);
    return getShopPath(locale, slug);
  }

  const rootTarget = rootRedirects[href];
  const matchingKey = rootTarget
    ? Object.entries(localizedRoutes).find(([, paths]) => paths.de === rootTarget)?.[0]
    : undefined;

  return matchingKey ? localizedRoutes[matchingKey as RouteKey][locale] : href;
}

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : "de";
}

export function getLanguageSwitchPath(pathname: string, targetLocale: Locale) {
  if (pathname.startsWith("/de/shop/") || pathname.startsWith("/en/shop/")) {
    const currentLocale = getLocaleFromPath(pathname);
    const slug = resolveShopSlug(currentLocale, pathname.split("/").slice(3).join("/"));
    return getShopPath(targetLocale, slug);
  }

  if (pathname === "/de" || pathname === "/en" || pathname === "/") {
    return localizedRoutes.home[targetLocale];
  }

  for (const paths of Object.values(localizedRoutes)) {
    if (pathname === paths.de || pathname === paths.en) {
      return paths[targetLocale];
    }
  }

  return localizedRoutes.home[targetLocale];
}
