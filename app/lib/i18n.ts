export const locales = ["de", "en", "fr", "es", "zh", "ar"] as const;

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
  | "luxury-coasters"
  | "materials"
  | "objects"
  | "sculptural-seating"
  | "shop"
  | "suche"
  | "trade"
  | "warenkorb";

function localizedPath(dePath: string, internationalPath: string): Record<Locale, string> {
  return {
    de: dePath,
    en: `/en${internationalPath}`,
    fr: `/fr${internationalPath}`,
    es: `/es${internationalPath}`,
    zh: `/zh${internationalPath}`,
    ar: `/ar${internationalPath}`,
  };
}

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: {
    de: "/de",
    en: "/en",
    fr: "/fr",
    es: "/es",
    zh: "/zh",
    ar: "/ar",
  },
  agb: localizedPath("/de/agb", "/terms-and-conditions"),
  "arbeit-einreichen": localizedPath("/de/arbeit-einreichen", "/submit-work"),
  art: localizedPath("/de/kunst", "/art"),
  artists: localizedPath("/de/kuenstler", "/artists"),
  ateliers: localizedPath("/de/ateliers", "/ateliers"),
  brands: localizedPath("/de/marken", "/brands"),
  collections: localizedPath("/de/kollektionen", "/collections"),
  contact: localizedPath("/de/kontakt", "/contact"),
  datenschutz: localizedPath("/de/datenschutz", "/privacy-policy"),
  gallery: localizedPath("/de/galerie", "/gallery"),
  impressum: localizedPath("/de/impressum", "/legal-notice"),
  journal: localizedPath("/de/journal", "/journal"),
  "luxury-coasters": localizedPath("/de/luxus-untersetzer", "/luxury-coasters"),
  materials: localizedPath("/de/materialien", "/materials"),
  objects: localizedPath("/de/objekte", "/objects"),
  "sculptural-seating": localizedPath("/de/sculptural-seating", "/sculptural-seating"),
  shop: localizedPath("/de/shop", "/shop"),
  suche: localizedPath("/de/suche", "/search"),
  trade: localizedPath("/de/projekte", "/trade"),
  warenkorb: localizedPath("/de/warenkorb", "/cart"),
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
    locales.forEach((locale) => {
      routes[paths[locale].replace(/^\/(de|en|fr|es|zh|ar)\/?/, "") || ""] = key as RouteKey;
    });
    return routes;
  },
  {} as Record<string, RouteKey>,
);

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLanguages(routeKey: RouteKey, suffix = "") {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${localizedRoutes[routeKey][locale]}${suffix}`]),
    ),
    "x-default": `${localizedRoutes[routeKey].de}${suffix}`,
  };
}

export const localizedShopCategorySlugs: Record<Locale, Record<string, string>> = {
  de: {
    moebel: "moebel",
    leuchten: "leuchten",
    teppiche: "teppiche",
    objekte: "objekte",
    kunst: "kunst",
    editionen: "editionen",
    tabletop: "tabletop",
    "collectible-design": "collectible-design",
    decoration: "dekoration",
    tableware: "geschirr",
    glassware: "glaeser",
    kitchen: "kueche",
    textiles: "textilien",
    outdoor: "outdoor",
    bath: "bad",
    kids: "kinder",
  },
  en: {
    moebel: "furniture",
    leuchten: "lighting",
    teppiche: "rugs",
    objekte: "objects",
    kunst: "artworks",
    editionen: "editions",
    tabletop: "accessories",
    "collectible-design": "collectible-design",
    decoration: "decoration",
    tableware: "tableware",
    glassware: "glassware",
    kitchen: "kitchen",
    textiles: "textiles",
    outdoor: "outdoor",
    bath: "bath",
    kids: "kids",
  },
  fr: {
    moebel: "furniture",
    leuchten: "lighting",
    teppiche: "rugs",
    objekte: "objects",
    kunst: "artworks",
    editionen: "editions",
    tabletop: "accessories",
    "collectible-design": "collectible-design",
    decoration: "decoration",
    tableware: "arts-de-la-table",
    glassware: "verrerie",
    kitchen: "cuisine",
    textiles: "textiles",
    outdoor: "outdoor",
    bath: "bain",
    kids: "enfants",
  },
  es: {
    moebel: "furniture",
    leuchten: "lighting",
    teppiche: "rugs",
    objekte: "objects",
    kunst: "artworks",
    editionen: "editions",
    tabletop: "accessories",
    "collectible-design": "collectible-design",
    decoration: "decoracion",
    tableware: "vajilla",
    glassware: "cristaleria",
    kitchen: "cocina",
    textiles: "textiles",
    outdoor: "exterior",
    bath: "bano",
    kids: "infantil",
  },
  zh: {
    moebel: "furniture",
    leuchten: "lighting",
    teppiche: "rugs",
    objekte: "objects",
    kunst: "artworks",
    editionen: "editions",
    tabletop: "accessories",
    "collectible-design": "collectible-design",
    decoration: "zhuangshi",
    tableware: "canju",
    glassware: "boliqi",
    kitchen: "chufang",
    textiles: "fangzhi",
    outdoor: "huwai",
    bath: "weiyu",
    kids: "ertong",
  },
  ar: {
    moebel: "furniture",
    leuchten: "lighting",
    teppiche: "rugs",
    objekte: "objects",
    kunst: "artworks",
    editionen: "editions",
    tabletop: "accessories",
    "collectible-design": "collectible-design",
    decoration: "decor",
    tableware: "tableware",
    glassware: "glassware",
    kitchen: "kitchen",
    textiles: "textiles",
    outdoor: "outdoor",
    bath: "bath",
    kids: "kids",
  },
};

export const englishShopCategorySlugs: Record<string, string> = Object.fromEntries(
  Object.entries(localizedShopCategorySlugs.en).filter(([slug, localizedSlug]) => slug !== localizedSlug),
);

export const legacyEnglishShopCategorySlugs = Object.fromEntries(
  Object.entries(englishShopCategorySlugs).map(([germanSlug, englishSlug]) => [englishSlug, germanSlug]),
) as Record<string, string>;

export function getLocalizedShopSlug(locale: Locale, slug: string) {
  return localizedShopCategorySlugs[locale][slug] ?? slug;
}

export function resolveShopSlug(locale: Locale, slug: string) {
  const localizedSlugs = localizedShopCategorySlugs[locale];
  const resolvedSlug = Object.entries(localizedSlugs).find(([, localizedSlug]) => localizedSlug === slug)?.[0];

  return resolvedSlug ?? slug;
}

export function getShopPath(locale: Locale, slug = "") {
  return `${localizedRoutes.shop[locale]}${slug ? `/${getLocalizedShopSlug(locale, slug)}` : ""}`;
}

export function getProductPath(locale: Locale, categorySlug: string, productSlug: string) {
  return `${getShopPath(locale, categorySlug)}/${productSlug}`;
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return localizedRoutes.home[locale];
  }

  if (href.startsWith("/shop/")) {
    const [categorySlug, productSlug] = href.slice("/shop/".length).split("/");

    return productSlug ? getProductPath(locale, categorySlug, productSlug) : getShopPath(locale, categorySlug);
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
  const localeShopPattern = new RegExp(`^/(${locales.join("|")})/shop/`);

  if (localeShopPattern.test(pathname)) {
    const currentLocale = getLocaleFromPath(pathname);
    const [, , categorySlug, productSlug] = pathname.split("/").filter(Boolean);
    const resolvedCategorySlug = resolveShopSlug(currentLocale, categorySlug);

    return productSlug
      ? getProductPath(targetLocale, resolvedCategorySlug, productSlug)
      : getShopPath(targetLocale, resolvedCategorySlug);
  }

  if (locales.some((locale) => pathname === `/${locale}`) || pathname === "/") {
    return localizedRoutes.home[targetLocale];
  }

  for (const paths of Object.values(localizedRoutes)) {
    if (locales.some((locale) => pathname === paths[locale])) {
      return paths[targetLocale];
    }
  }

  return localizedRoutes.home[targetLocale];
}
