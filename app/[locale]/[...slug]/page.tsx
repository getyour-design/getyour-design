import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AgbPage from "../../agb/page";
import SubmitWorkPage from "../../arbeit-einreichen/page";
import ArtPage from "../../art/page";
import ArtistsPage from "../../artists/page";
import AteliersPage from "../../ateliers/page";
import BrandsPage from "../../brands/page";
import CollectionsPage from "../../collections/page";
import ContactPage from "../../contact/page";
import DatenschutzPage from "../../datenschutz/page";
import GalleryPage from "../../gallery/page";
import ImpressumPage from "../../impressum/page";
import JournalPage from "../../journal/page";
import MaterialsPage from "../../materials/page";
import ObjectsPage from "../../objects/page";
import SculpturalSeatingPage from "../../sculptural-seating/page";
import ShopPage from "../../shop/page";
import ShopSlugPage from "../../shop/[slug]/page";
import SearchPage from "../../suche/page";
import TradePage from "../../trade/page";
import CartPage from "../../warenkorb/page";
import { PageHero } from "../../components/PageHero";
import { PlaceholderArtwork } from "../../components/PlaceholderArtwork";
import { ProductCardMedia, ProductGallery, type ProductImageAsset } from "../../components/ProductMedia";
import { EntityActions } from "../../components/EntityActions";
import { ProductCommerceBlock } from "../../components/ProductCommerceBlock";
import { LuxuryCoastersPage } from "../../components/LuxuryCoastersPage";
import { getDictionary } from "../../data/dictionaries";
import { products, visibleShopCategories } from "../../data/products";
import { collections } from "../../data/collections";
import { artworks } from "../../data/artworks";
import { brands } from "../../data/brands";
import { stories } from "../../data/stories";
import { getCommerceCta } from "../../lib/commerce";
import { getEnglishProductTitle } from "../../lib/productTitles";
import {
  getAlternateLanguages,
  getLocalizedShopSlug,
  getProductPath,
  getShopPath,
  isLocale,
  localizedPathToRouteKey,
  localizedRoutes,
  locales,
  resolveShopSlug,
  type Locale,
  type RouteKey,
} from "../../lib/i18n";

type LocalizedPageProps = {
  params: Promise<{ locale: string; slug: string[] }>;
};

const pageComponents: Partial<Record<RouteKey, ComponentType>> = {
  agb: AgbPage,
  "arbeit-einreichen": SubmitWorkPage,
  art: ArtPage,
  artists: ArtistsPage,
  ateliers: AteliersPage,
  brands: BrandsPage,
  collections: CollectionsPage,
  contact: ContactPage,
  datenschutz: DatenschutzPage,
  gallery: GalleryPage,
  impressum: ImpressumPage,
  journal: JournalPage,
  materials: MaterialsPage,
  objects: ObjectsPage,
  "sculptural-seating": SculpturalSeatingPage,
  shop: ShopPage,
  suche: SearchPage,
  trade: TradePage,
  warenkorb: CartPage,
};

const titles: Record<RouteKey, string> = {
  home: "GETYOUR.DESIGN",
  agb: "AGB",
  "arbeit-einreichen": "Arbeit einreichen",
  art: "Kunst",
  artists: "Künstler",
  ateliers: "Ateliers",
  brands: "Marken & Ateliers",
  collections: "Kollektionen",
  contact: "Kontakt",
  datenschutz: "Datenschutz",
  gallery: "Gallery",
  impressum: "Impressum",
  journal: "Journal",
  "luxury-coasters": "Luxus-Untersetzer",
  materials: "Materialien",
  objects: "Objekte",
  "sculptural-seating": "Sculptural Seating",
  shop: "Shop",
  suche: "Suche",
  trade: "Projektanfragen",
  warenkorb: "Warenkorb",
};

const englishTitles: Partial<Record<RouteKey, string>> = {
  agb: "Terms & Conditions",
  art: "Art",
  ateliers: "Ateliers",
  collections: "Collections",
  contact: "Contact",
  datenschutz: "Privacy Policy",
  impressum: "Legal Notice",
  journal: "Journal",
  "luxury-coasters": "Luxury Cowhide Coasters",
  shop: "Design Shop",
  suche: "Search",
  warenkorb: "Cart",
};

const englishDescriptions: Partial<Record<RouteKey, string>> = {
  art: "Selected artworks, editions and independent artistic positions at GETYOUR.DESIGN.",
  ateliers: "Ateliers, makers and workshops behind selected design objects, art and editions.",
  collections: "Curated collections for discovering design, art, materials and objects at GETYOUR.DESIGN.",
  contact: "Contact GETYOUR.DESIGN for private sourcing, product enquiries, artworks and project requests.",
  journal: "Essays, interviews and background stories on design, art, materials and ateliers.",
  "luxury-coasters": "Handcrafted European cowhide coasters by 54 COUTURE, made in Germany and presented in a luxury gift box.",
  shop: "Curated furniture, lighting, rugs, artworks, accessories and objects at GETYOUR.DESIGN.",
  suche: "Search design, art, ateliers and objects at GETYOUR.DESIGN.",
  warenkorb: "Cart at GETYOUR.DESIGN.",
};

const legalRouteKeys: RouteKey[] = ["agb", "datenschutz", "impressum"];

export function generateStaticParams() {
  const localizedStaticRoutes = Object.entries(localizedRoutes).flatMap(([routeKey, paths]) => {
    if (routeKey === "home") {
      return [];
    }

    return locales.map((locale) => ({
      locale,
      slug: paths[locale].replace(`/${locale}/`, "").split("/").filter(Boolean),
    }));
  });
  const localizedShopRoutes = locales.flatMap((locale) => [
    ...visibleShopCategories.map((category) => ({
      locale,
      slug: ["shop", getLocalizedShopSlug(locale, category.slug)],
    })),
    ...products.map((product) => ({
      locale,
      slug: ["shop", product.slug],
    })),
    ...products.filter((product) => product.pathMode === "nested").map((product) => ({
      locale,
      slug: ["shop", getLocalizedShopSlug(locale, product.categorySlug), product.slug],
    })),
  ]);

  return [...localizedStaticRoutes, ...localizedShopRoutes].filter((route) => route.slug.length > 0);
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const route = getRoute(locale, slug);

  if (!route) {
    return {};
  }

  if (route.kind === "shopItem") {
    const product = products.find((item) => item.slug === route.slug);
    const category = visibleShopCategories.find((item) => item.slug === route.slug);
    const dictionary = getDictionary(locale);
    const productContent = product ? getLocalizedProductContent(locale, product) : undefined;
    const title = product
      ? productContent?.metaTitle ?? productContent?.title ?? getLocalizedProductTitle(locale, product, products.findIndex((item) => item.slug === product.slug))
      : category
        ? dictionary.shop.categoryMetaTitles[category.title] ?? dictionary.shop.categories[category.title] ?? category.title
        : dictionary.shop.title;
    const description = product
      ? productContent?.metaDescription ?? `${title} | GETYOUR.DESIGN: ${dictionary.shop.categories[product.category] ?? product.category}, ${product.material}, ${product.price}.`
      : category
        ? dictionary.shop.categoryMetaDescriptions[category.title] ?? `${title} | GETYOUR.DESIGN.`
        : `${title} | GETYOUR.DESIGN.`;
    const productCanonical = product ? getLocalizedProductPath(locale, product) : undefined;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: productCanonical ?? getShopPath(locale, route.slug),
        images: productContent?.images?.[0] ? [{ url: productContent.images[0].src, alt: productContent.images[0].alt }] : undefined,
      },
      alternates: {
        canonical: productCanonical ?? getShopPath(locale, route.slug),
        languages: {
          ...Object.fromEntries(locales.map((targetLocale) => [
            targetLocale,
            product ? getLocalizedProductPath(targetLocale, product) : getShopPath(targetLocale, route.slug),
          ])),
          "x-default": product ? getLocalizedProductPath("de", product) : getShopPath("de", route.slug),
        },
      },
    };
  }

  const dictionary = getDictionary(locale);
  const page = dictionary.pages[route.key];

  return {
    title: page?.title ?? (locale === "de" ? titles[route.key] : englishTitles[route.key] ?? dictionary.metadata.title),
    description: page?.description ?? (locale === "de" ? undefined : englishDescriptions[route.key] ?? dictionary.metadata.description),
    robots: route.key === "warenkorb" ? {
      index: false,
      follow: false,
    } : undefined,
    openGraph: locale === "de" ? undefined : {
      title: page?.title ?? englishTitles[route.key] ?? dictionary.metadata.title,
      description: page?.description ?? englishDescriptions[route.key] ?? dictionary.metadata.description,
      url: localizedRoutes[route.key][locale],
    },
    alternates: {
      canonical: localizedRoutes[route.key][locale],
      languages: getAlternateLanguages(route.key),
    },
  };
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const route = getRoute(locale, slug);

  if (!route) {
    notFound();
  }

  if (route.kind === "shopItem") {
    if (locale === "de") {
      return <ShopSlugPage params={Promise.resolve({ slug: route.slug })} />;
    }

    return <LocalizedShopSlugPage locale={locale} slug={route.slug} />;
  }

  if (route.key === "luxury-coasters") {
    return locale === "de" || locale === "en"
      ? <LuxuryCoastersPage locale={locale} />
      : <LocalizedStaticPlaceholder locale={locale} routeKey={route.key} />;
  }

  if (locale === "en" && legalRouteKeys.includes(route.key)) {
    return <EnglishLegalPage routeKey={route.key} />;
  }

  if (locale !== "de" && legalRouteKeys.includes(route.key)) {
    return <LegalPlaceholderPage locale={locale} routeKey={route.key} />;
  }

  if (locale === "en") {
    return <EnglishStaticPage routeKey={route.key} />;
  }

  if (locale !== "de") {
    return <LocalizedStaticPlaceholder locale={locale} routeKey={route.key} />;
  }

  const Component = pageComponents[route.key];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

function getRoute(locale: Locale, slug: string[]) {
  const resolvedSlug = slug[0] === "shop" && slug[1]
    ? ["shop", resolveShopSlug(locale, slug[1]), ...slug.slice(2)]
    : slug;
  const path = resolvedSlug.join("/");

  if (resolvedSlug[0] === "shop" && resolvedSlug[1] && resolvedSlug[2]) {
    return { kind: "shopItem" as const, slug: resolvedSlug[2] };
  }

  if (resolvedSlug[0] === "shop" && resolvedSlug[1]) {
    return { kind: "shopItem" as const, slug: resolvedSlug[1] };
  }

  if (path === "shop") {
    return { kind: "static" as const, key: "shop" as RouteKey };
  }

  const routeKey = localizedPathToRouteKey[path];

  if (!routeKey) {
    return null;
  }

  return { kind: "static" as const, key: routeKey };
}

function getCategoryLabel(value: string) {
  return getDictionary("en").shop.categories[value] ?? value;
}

function getLocalizedCategoryLabel(locale: Locale, value: string) {
  return getDictionary(locale).shop.categories[value] ?? getCategoryLabel(value);
}

type Product = (typeof products)[number];

function getLocalizedProductPath(locale: Locale, product: Product) {
  return product.pathMode === "nested"
    ? getProductPath(locale, product.categorySlug, product.slug)
    : getShopPath(locale, product.slug);
}

function getLocalizedProductContent(locale: Locale, product: Product) {
  if (locale === "de") {
    return {
      title: product.title,
      cardTitle: product.cardTitle,
      priceNote: product.priceNote,
      shortDescription: product.description,
      longDescription: product.longDescription,
      dimensionsDetails: product.dimensionsDetails,
      materialDetails: product.materialDetails,
      origin: product.origin,
      uniqueNote: product.uniqueNote,
      ctaLabel: product.ctaLabel,
      images: product.images,
      metaTitle: product.metaTitle,
      metaDescription: product.metaDescription,
    };
  }

  return product.localized?.[locale];
}

function getLocalizedProductTitle(locale: Locale, product: Product, index: number) {
  const content = getLocalizedProductContent(locale, product);

  if (content?.title) {
    return content.title;
  }

  if (locale === "de") {
    return product.title;
  }

  if (locale === "en") {
    return getEnglishProductTitle(product.title);
  }

  return `${getDictionary(locale).shop.genericProductTitle} ${String(index + 1).padStart(2, "0")}`;
}

function getLocalizedProductCardTitle(locale: Locale, product: Product, index: number) {
  const content = getLocalizedProductContent(locale, product);

  return content?.cardTitle ?? getLocalizedProductTitle(locale, product, index);
}

function getLocalizedProductImages(locale: Locale, product: Product): ProductImageAsset[] | undefined {
  return getLocalizedProductContent(locale, product)?.images ?? product.images;
}

function getUniqueNoteLabel(locale: Locale) {
  return {
    de: "Unikathinweis",
    en: "Unique note",
    fr: "Note sur la pièce unique",
    es: "Nota de pieza única",
    zh: "独件说明",
    ar: "ملاحظة عن التفرد",
  }[locale];
}

function getLocalizedCta(locale: Locale, status: string) {
  const dictionary = getDictionary(locale);

  switch (status) {
    case "sofort-kaufen":
      return { label: dictionary.shop.cta["In den Warenkorb"], href: getShopPath(locale).replace(/\/shop$/, locale === "de" ? "/warenkorb" : "/cart"), disabled: false };
    case "anfragen":
      return { label: dictionary.shop.cta["Anfrage senden"], href: localizedRoutes.contact[locale], disabled: false };
    case "preis-auf-anfrage":
      return { label: dictionary.shop.cta["Preis anfragen"], href: localizedRoutes.contact[locale], disabled: false };
    case "reserviert":
      return { label: dictionary.shop.cta.Reserviert, href: localizedRoutes.contact[locale], disabled: true };
    case "verkauft":
      return { label: dictionary.shop.cta.Verkauft, href: localizedRoutes.contact[locale], disabled: true };
    default:
      return { label: dictionary.shop.cta["Anfrage senden"], href: localizedRoutes.contact[locale], disabled: false };
  }
}

function getLocalizedCheckoutCopy(locale: Locale) {
  return {
    de: {
      label: "KAUFEN",
      loadingLabel: "Checkout wird vorbereitet",
      errorMessage: "Der Checkout ist derzeit nicht verfügbar. Bitte nutzen Sie alternativ die Anfrage.",
    },
    en: {
      label: "BUY",
      loadingLabel: "Preparing checkout",
      errorMessage: "Checkout is currently unavailable. Please use the enquiry option instead.",
    },
    fr: {
      label: "ACHETER",
      loadingLabel: "Preparation du checkout",
      errorMessage: "Le checkout est actuellement indisponible. Veuillez utiliser la demande.",
    },
    es: {
      label: "COMPRAR",
      loadingLabel: "Preparando checkout",
      errorMessage: "El checkout no esta disponible actualmente. Utilice la consulta.",
    },
    zh: {
      label: "购买",
      loadingLabel: "正在准备结账",
      errorMessage: "结账当前不可用。请改用咨询选项。",
    },
    ar: {
      label: "شراء",
      loadingLabel: "جار تجهيز الدفع",
      errorMessage: "الدفع غير متاح حاليا. يرجى استخدام خيار الاستفسار.",
    },
  }[locale];
}

function LocalizedStaticPlaceholder({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  if (routeKey === "shop") {
    return <LocalizedShopPage locale={locale} />;
  }

  if (routeKey === "journal") {
    return <LocalizedJournalPage locale={locale} />;
  }

  if (routeKey === "collections") {
    return <LocalizedCollectionsPage locale={locale} />;
  }

  if (routeKey === "warenkorb") {
    return <LocalizedCartPage locale={locale} />;
  }

  const dictionary = getDictionary(locale);
  const page = dictionary.pages[routeKey] ?? {
    title: englishTitles[routeKey] ?? titles[routeKey],
    description: englishDescriptions[routeKey] ?? dictionary.metadata.description,
  };

  return (
    <main>
      <PageHero eyebrow="GETYOUR.DESIGN" title={page.title} description={page.description} />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.home.areas.slice(0, 3).map((item) => (
            <Link
              className="grid min-h-56 content-between border hairline bg-[#f7f7f5] p-6 transition hover:bg-[#f8f8f6]"
              href={localizedRoutes.shop[locale]}
              key={item.title}
            >
              <h2 className="serif text-xl leading-snug tracking-[0.08em]">{item.title}</h2>
              <p className="text-sm leading-7 text-[#4b5356]">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function LocalizedShopPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main>
      <PageHero
        eyebrow={dictionary.shop.title}
        title={dictionary.shop.headline}
        description={dictionary.shop.description}
      />
      <section className="border-b hairline bg-[#f3f2ef] px-5 py-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {visibleShopCategories.map((area) => (
            <Link className="border hairline bg-[#f7f7f5] px-4 py-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href={getShopPath(locale, area.slug)} key={area.slug}>
              {getLocalizedCategoryLabel(locale, area.title)}
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="group" key={product.slug}>
              <Link href={getLocalizedProductPath(locale, product)}>
                <PlaceholderArtwork index={index} palette={product.palette} />
              </Link>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{getLocalizedCategoryLabel(locale, product.category)}</p>
                  <Link href={getLocalizedProductPath(locale, product)}>
                    <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getLocalizedProductCardTitle(locale, product, index)}</h2>
                  </Link>
                  <p className="mt-2 text-sm text-[#4b5356]">{product.maker.replace("Künstlerposition", "Artist Position")}</p>
                  <EntityActions
                    href={getLocalizedProductPath(locale, product)}
                    id={`product:${product.slug}`}
                    title={getLocalizedProductCardTitle(locale, product, index)}
                    type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
                  />
                </div>
                <p className="shrink-0 text-sm text-[#353b3e]">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function LocalizedShopSlugPage({ locale, slug }: { locale: Locale; slug: string }) {
  const dictionary = getDictionary(locale);
  const product = products.find((item) => item.slug === slug);
  const category = visibleShopCategories.find((item) => item.slug === slug);

  if (product) {
    const productIndex = products.findIndex((item) => item.slug === product.slug);
    const productCategory = visibleShopCategories.find((item) => item.title === product.category);
    const categoryHref = productCategory ? getShopPath(locale, productCategory.slug) : localizedRoutes.shop[locale];
    const cta = getLocalizedCta(locale, product.status);
    const content = getLocalizedProductContent(locale, product);
    const productTitle = getLocalizedProductTitle(locale, product, productIndex);
    const productHref = getLocalizedProductPath(locale, product);
    const productCta = content?.ctaLabel ? { ...cta, label: content.ctaLabel } : cta;
    const productImages = getLocalizedProductImages(locale, product);
    const checkoutCopy = getLocalizedCheckoutCopy(locale);
    const commerceCta = getCommerceCta({
      productSlug: product.slug,
      commerceMode: product.commerceMode,
      affiliateLink: product.affiliateLink,
      fallbackCta: productCta,
      labels: {
        direct: checkoutCopy.label,
        affiliate: dictionary.shop.cta["Beim Partner ansehen"],
        presentation: dictionary.shop.commerce,
      },
    });

    return (
      <main>
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <ProductGallery images={productImages} index={productIndex} palette={product.palette} title={productTitle} />
            <div>
              <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href={categoryHref}>
                {dictionary.shop.backToCategory} {getLocalizedCategoryLabel(locale, product.category)}
              </Link>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">
                {dictionary.shop.breadcrumbShop} / {getLocalizedCategoryLabel(locale, product.category)} / {productTitle}
              </p>
              <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {productTitle}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-black/15 py-5 text-sm text-[#353b3e]">
                <p>{product.price}</p>
                <p>{dictionary.shop.availability[product.availability] ?? product.availability}</p>
              </div>
              {content?.priceNote ? <p className="mt-4 text-sm leading-7 text-[#4b5356]">{content.priceNote}</p> : null}
              <ProductCommerceBlock
                checkoutErrorMessage={checkoutCopy.errorMessage}
                checkoutLoadingLabel={checkoutCopy.loadingLabel}
                commerceCta={commerceCta}
                fallbackHref={localizedRoutes.contact[locale]}
                productSlug={product.slug}
              />
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#4b5356]">{content?.shortDescription ?? dictionary.shop.productDescription}</p>
              {content?.longDescription ? (
                <div className="mt-8 grid gap-4 text-sm leading-7 text-[#4b5356]">
                  {content.longDescription.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              <EntityActions
                href={productHref}
                id={`product:${product.slug}`}
                title={productTitle}
                type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
              />
              <dl className="mt-10 grid gap-5 border-t border-black/15 pt-6 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.shop.dimensions}</dt>
                  <dd className="mt-2 grid gap-1 text-[#353b3e]">
                    {(content?.dimensionsDetails ?? [product.dimensions]).map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.shop.material}</dt>
                  <dd className="mt-2 grid gap-1 text-[#353b3e]">
                    {(content?.materialDetails ?? [product.material]).map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.shop.origin}</dt>
                  <dd className="mt-2 text-[#353b3e]">{content?.origin ?? product.origin.replace("Künstlerposition", "Artist Position")}</dd>
                </div>
                {content?.uniqueNote ? (
                  <div className="md:col-span-2">
                    <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{getUniqueNoteLabel(locale)}</dt>
                    <dd className="mt-2 text-[#353b3e]">{content.uniqueNote}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (category) {
    const categoryProducts = products.filter(
      (item) =>
        item.category === category.title ||
        item.secondaryCategories?.includes(category.title),
    );
    const categoryTitle = getLocalizedCategoryLabel(locale, category.title);
    const emptyState = dictionary.shop.categoryEmptyStates[category.title];

    return (
      <main>
        <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#667174]">{dictionary.shop.breadcrumbShop} / {categoryTitle}</p>
              <Link className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href={localizedRoutes.shop[locale]}>
                {dictionary.shop.backToShop}
              </Link>
              <h1 className="serif mt-5 max-w-5xl text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {categoryTitle}
              </h1>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#667174]">
                {categoryProducts.length} {dictionary.shop.works}
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#4b5356]">{dictionary.shop.categoryDescriptions[category.title] ?? dictionary.shop.description}</p>
          </div>
        </section>
        <section className="section-pad bg-[#f3f2ef]">
          {categoryProducts.length > 0 ? (
            <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((item) => {
              const index = products.findIndex((productItem) => productItem.slug === item.slug);

              return (
                <article className="group" key={item.slug}>
                  <Link href={getLocalizedProductPath(locale, item)}>
                    <ProductCardMedia
                      images={getLocalizedProductImages(locale, item)}
                      index={index}
                      palette={item.palette}
                      title={getLocalizedProductCardTitle(locale, item, index)}
                    />
                  </Link>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{getLocalizedCategoryLabel(locale, item.category)}</p>
                      <Link href={getLocalizedProductPath(locale, item)}>
                        <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getLocalizedProductCardTitle(locale, item, index)}</h2>
                      </Link>
                      <p className="mt-2 text-sm text-[#4b5356]">{item.maker.replace("Künstlerposition", "Artist Position")}</p>
                      <EntityActions
                        href={getLocalizedProductPath(locale, item)}
                        id={`product:${item.slug}`}
                        title={getLocalizedProductCardTitle(locale, item, index)}
                        type={item.category === "Kunst" || item.category === "Editionen" ? "Kunstwerk" : item.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
                      />
                    </div>
                    <p className="shrink-0 text-sm text-[#353b3e]">{item.price}</p>
                  </div>
                </article>
              );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-[1540px] border-y border-black/15 py-12">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{emptyState?.title ?? dictionary.shop.headline}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4b5356]">
                {emptyState?.text ?? dictionary.shop.description}
              </p>
            </div>
          )}
        </section>
      </main>
    );
  }

  notFound();
}

function LocalizedJournalPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main>
      <PageHero eyebrow={dictionary.journal.eyebrow} title={dictionary.journal.title} description={dictionary.journal.description} />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <article className="grid min-h-80 content-between border hairline bg-[#f7f7f5] p-6" key={story.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.journal.categories[index] ?? dictionary.journal.eyebrow}</p>
              <div>
                <h2 className="serif text-2xl leading-snug tracking-[0.08em]">{dictionary.journal.titles[index] ?? story.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#4b5356]">{dictionary.journal.teasers[index] ?? dictionary.journal.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function LocalizedCollectionsPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.collections;

  return (
    <main>
      <PageHero eyebrow={page.title} title={page.title} description={page.description} />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => {
            const localizedCollection = dictionary.collections[collection.key] ?? collection;

            return (
              <article className="grid min-h-96 content-between border hairline bg-[#f7f7f5] p-6" key={collection.key}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
                <div>
                  <div className={`mb-7 h-36 ${index % 3 === 0 ? "bg-[#11100f]" : index % 3 === 1 ? "bg-[#c7beb1]" : "bg-[#e8e1d6]"}`} />
                  <h2 className="serif text-2xl leading-snug tracking-[0.08em]">{localizedCollection.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#4b5356]">{localizedCollection.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function LocalizedCartPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.nav.cart}</p>
          <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">{dictionary.nav.cart}</h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#4b5356]">{dictionary.shop.productDescription}</p>
        </div>
      </div>
    </main>
  );
}

function EnglishStaticPage({ routeKey }: { routeKey: RouteKey }) {
  if (routeKey === "shop") {
    return <LocalizedShopPage locale="en" />;
  }

  if (routeKey === "art") {
    return <EnglishArtPage />;
  }

  if (routeKey === "collections") {
    return <LocalizedCollectionsPage locale="en" />;
  }

  if (routeKey === "ateliers") {
    return <EnglishAteliersPage />;
  }

  if (routeKey === "journal") {
    return <LocalizedJournalPage locale="en" />;
  }

  if (routeKey === "contact") {
    return <EnglishContactPage />;
  }

  if (routeKey === "suche") {
    return <EnglishSearchPage />;
  }

  if (routeKey === "warenkorb") {
    return <LocalizedCartPage locale="en" />;
  }

  const Component = pageComponents[routeKey];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

function EnglishArtPage() {
  return (
    <main>
      <PageHero eyebrow="Art" title="Artworks, works on paper, sculptures and editions." description="Selected works for rooms, collections and interiors with an independent point of view." />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {artworks.map((artwork, index) => (
            <article key={artwork.title}>
              <PlaceholderArtwork index={index} palette={artwork.palette} />
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{artwork.artist.replace("Künstlerposition", "Artist Position")}</p>
                <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{artwork.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4b5356]">{artwork.medium}, {artwork.year}</p>
                <p className="mt-3 text-sm text-[#11100f]">{artwork.price}</p>
                <EntityActions href="/en/art" id={`artwork:${artwork.title}`} title={artwork.title} type="Kunstwerk" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function EnglishAteliersPage() {
  return (
    <main>
      <PageHero eyebrow="Ateliers" title="Workshops, materials and made-to-order works." description="A quiet view of ateliers, makers and processes behind furniture, lighting, objects, editions and individual projects." />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2">
          {brands.map((brand, index) => (
            <article className="grid min-h-72 content-between border hairline bg-[#f7f7f5] p-7" key={brand.name}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Atelier 0{index + 1}</p>
              <div>
                <div className={`mb-8 h-28 ${index % 2 === 0 ? "bg-[#11100f]" : "bg-[#c7beb1]"}`} />
                <h2 className="serif text-2xl tracking-[0.08em]">{brand.name}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#4b5356]">{englishBrandDescriptions[index] ?? "An atelier selected for material knowledge, precise making and object culture."}</p>
                <EntityActions href="/en/ateliers" id={`atelier:${brand.name}`} title={brand.name} type="Atelier" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const englishBrandDescriptions = [
  "Stone-based furniture and objects with a quiet architectural presence.",
  "Limited seating objects and editions with sculptural, soft lines.",
  "Textile objects, rugs and made-to-measure pieces for considered rooms.",
  "Ceramics, vessels and small editions with craft depth.",
];

function EnglishContactPage() {
  const groups = [
    ["Products", ["Purchase inquiry", "Availability inquiry", "Advisory inquiry"]],
    ["Artworks", ["Artwork inquiry", "Price inquiry", "Collector inquiry"]],
    ["Ateliers", ["Project inquiry", "Collaboration inquiry", "Interior inquiry"]],
    ["B2B", ["Architect inquiry", "Hospitality inquiry", "Developer inquiry", "Object inquiry"]],
  ];

  return (
    <main className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Contact</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">Find the object that carries the room.</h1>
        </div>
        <div className="border hairline bg-[#fbf8f1] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">Private Inquiries</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5f574f]">Tell us about the room, material preference, timeline and need: individual object, curated selection, artwork or project.</p>
          <div className="mt-10 grid gap-5 text-sm">
            <a className="border-b border-black/20 pb-4" href="mailto:studio@getyour.design">studio@getyour.design</a>
            <p className="border-b border-black/20 pb-4">Remote appointments on request.</p>
            <p className="border-b border-black/20 pb-4">Project and private selection appointments by arrangement.</p>
          </div>
        </div>
      </div>
      <section className="mx-auto mt-16 max-w-7xl border-t hairline pt-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Inquiry Types</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(([title, items]) => (
            <article className="border hairline bg-[#f7f7f5] p-5" key={title as string}>
              <h2 className="serif text-lg leading-snug tracking-[0.08em]">{title}</h2>
              <div className="mt-5 grid gap-3 text-sm text-[#4b5356]">
                {(items as string[]).map((item) => (
                  <a className="border-b border-black/15 pb-3 hover:text-black" href={`mailto:studio@getyour.design?subject=${encodeURIComponent(item)}`} key={item}>{item}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function EnglishSearchPage() {
  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Search</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">Find design, art and ateliers.</h1>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <form action="/en/search" className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input className="border hairline bg-[#f3f2ef] px-5 py-4 text-sm text-[#353b3e] outline-none" name="q" placeholder="Search term" type="search" />
            <button className="border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff]" type="submit">Search</button>
          </form>
          <p className="mt-6 text-sm leading-7 text-[#4b5356]">Search is prepared as a simple entry point. A full search index can be added later from the existing entities.</p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
            {[
              ["Design Shop", "/en/shop"],
              ["Art", "/en/art"],
              ["Collections", "/en/collections"],
              ["Ateliers", "/en/ateliers"],
              ["Journal", "/en/journal"],
            ].map(([label, href]) => (
              <Link className="border hairline bg-[#f3f2ef] px-4 py-3 hover:text-black" href={href} key={href}>{label}</Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function EnglishLegalPage({ routeKey }: { routeKey: RouteKey }) {
  const content = englishLegalContent[routeKey];

  if (!content) {
    notFound();
  }

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Legal</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#4b5356]">
            This English version is provided for convenience. The German version is the legally binding version. In case of discrepancies, the German version prevails.
          </p>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">{content.heading}</p>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-[#4b5356]">
            {content.sections.map((section) => (
              <section className="border-t border-black/15 pt-6" key={section.title}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#667174]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{renderMailto(paragraph)}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function LegalPlaceholderPage({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const content = englishLegalContent[routeKey];

  if (!content) {
    notFound();
  }

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Legal placeholder</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#4b5356]">
            Official legal version available in English. This page is a non-binding presentation placeholder and is not a legal translation for the selected language.
          </p>
          <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href={localizedRoutes[routeKey].en}>
            Open official English version
          </Link>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10" lang="en" dir="ltr">
          <div className="border border-black/15 bg-[#e8eceb] p-5 text-sm leading-7 text-[#353b3e]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">Non-binding placeholder</p>
            <p className="mt-3">
              Official legal version available in English. The following content is shown in English only for presentation and orientation.
            </p>
          </div>
          <p className="serif mt-8 text-2xl tracking-[0.08em]">{content.heading}</p>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-[#4b5356]">
            {content.sections.map((section) => (
              <section className="border-t border-black/15 pt-6" key={`${locale}-${section.title}`}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#667174]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{renderMailto(paragraph)}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

const companyDetails = [
  "2B Home GmbH",
  "Kurfürstendamm 193d",
  "10707 Berlin",
  "Germany",
  "Phone: 030 8871 4880",
  "Fax: 030 1388 1599",
  "Email: home@2b.berlin",
  "Represented by: Diana Tarlig-Julich",
  "Register court: Amtsgericht Berlin",
  "Commercial register: HRB 235346 B",
  "VAT ID: DE348785133",
];

const contactEmail = "home@2b.berlin";
const renderMailto = (paragraph: string) => {
  if (!paragraph.includes(contactEmail)) {
    return paragraph;
  }

  const [before, after] = paragraph.split(contactEmail);

  return (
    <>
      {before}
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      {after}
    </>
  );
};

const englishLegalContent: Partial<Record<RouteKey, {
  title: string;
  heading: string;
  sections: Array<{ title: string; body: string[] }>;
}>> = {
  impressum: {
    title: "Legal Notice",
    heading: "Provider information",
    sections: [
      {
        title: "Company",
        body: companyDetails,
      },
      {
        title: "Responsible for Content",
        body: [
          "2B Home GmbH is responsible for the content of this website unless otherwise indicated.",
          "The information on GETYOUR.DESIGN is prepared with care. Availability, prices, dimensions and descriptions of objects, artworks and editions may change and are confirmed individually before purchase or order.",
        ],
      },
      {
        title: "Copyright",
        body: [
          "Texts, images, layouts and other content on this website are protected by copyright and related rights. Use, reproduction or distribution requires prior permission unless permitted by law.",
        ],
      },
    ],
  },
  datenschutz: {
    title: "Privacy Policy",
    heading: "Privacy information",
    sections: [
      {
        title: "Controller",
        body: [
          "The controller responsible for this website is 2B Home GmbH, Kurfürstendamm 193d, 10707 Berlin, Germany.",
          `For privacy-related enquiries, please contact: ${contactEmail}.`,
        ],
      },
      {
        title: "Use of This Website",
        body: [
          "When you visit this website, technical access data may be processed to provide the website securely and reliably. This can include the requested page, date and time of access, browser information, device information and IP address.",
          "This data is used for technical operation, security and error analysis. It is not used to identify visitors personally unless this is necessary for security reasons or required by law.",
        ],
      },
      {
        title: "Enquiries and Communication",
        body: [
          "If you contact GETYOUR.DESIGN by email or through an enquiry link, the information you provide is processed to handle your request. This may include your name, contact details, project information, object preferences and communication history.",
          "The legal basis is the handling of pre-contractual or contractual enquiries and legitimate interest in responding to individual requests.",
        ],
      },
      {
        title: "Social Links",
        body: [
          "This website links to external social media profiles such as Instagram, Pinterest and LinkedIn. Data is transferred to those platforms only when you open the external link. Their own privacy policies apply.",
        ],
      },
      {
        title: "Retention and Rights",
        body: [
          "Personal data is retained only as long as necessary for the relevant purpose or legal obligations. You may request access, correction, deletion, restriction of processing or data portability where applicable.",
          "You also have the right to object to processing based on legitimate interests and to lodge a complaint with a competent data protection authority.",
        ],
      },
    ],
  },
  agb: {
    title: "Terms & Conditions",
    heading: "Terms of use and sale",
    sections: [
      {
        title: "Scope",
        body: [
          "These Terms & Conditions apply to the use of GETYOUR.DESIGN and to enquiries, reservations, purchases and project-related requests made through the website or by direct communication, unless separate written terms are agreed.",
        ],
      },
      {
        title: "Objects, Artworks and Availability",
        body: [
          "GETYOUR.DESIGN presents curated design objects, furniture, lighting, rugs, artworks, editions and related pieces. Many items are individual works, limited editions or subject to availability.",
          "Images, descriptions, dimensions and prices are provided with care but do not constitute a binding offer. Availability and final terms are confirmed individually before a purchase, reservation or commissioned order is concluded.",
        ],
      },
      {
        title: "Enquiries, Orders and Payment",
        body: [
          "A purchase or project order is concluded only after individual confirmation by 2B Home GmbH or an authorised representative. Payment terms, delivery arrangements and any applicable deposits are confirmed as part of the order process.",
          "For professional, architectural, hospitality or project enquiries, separate terms may apply depending on scope, sourcing, production and delivery requirements.",
        ],
      },
      {
        title: "Delivery, Returns and Condition",
        body: [
          "Delivery, collection, insurance and export arrangements depend on the type, value, size and destination of the object or artwork and are agreed individually.",
          "Vintage, handmade, artistic or material-intensive pieces may show natural variations, patina, traces of production or age. Such characteristics are part of the object unless expressly agreed otherwise.",
        ],
      },
      {
        title: "Intellectual Property",
        body: [
          "All website content, including text, images, names, layouts and curatorial structures, remains protected by intellectual property rights. It may not be copied, reproduced or commercially used without permission.",
        ],
      },
      {
        title: "Governing Law",
        body: [
          "These Terms & Conditions are governed by the laws of the Federal Republic of Germany, unless mandatory consumer protection rules provide otherwise.",
        ],
      },
    ],
  },
};
