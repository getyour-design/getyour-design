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
import { EntityActions } from "../../components/EntityActions";
import { LuxuryCoastersPage } from "../../components/LuxuryCoastersPage";
import { products, shopCategories } from "../../data/products";
import { collections } from "../../data/collections";
import { artworks } from "../../data/artworks";
import { brands } from "../../data/brands";
import { stories } from "../../data/stories";
import { getEnglishProductTitle } from "../../lib/productTitles";
import {
  getAlternateLanguages,
  getLocalizedShopSlug,
  getShopPath,
  isLocale,
  localizedPathToRouteKey,
  localizedRoutes,
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

export function generateStaticParams() {
  const localizedStaticRoutes = Object.entries(localizedRoutes).flatMap(([routeKey, paths]) => {
    if (routeKey === "home") {
      return [];
    }

    return (["de", "en"] as Locale[]).map((locale) => ({
      locale,
      slug: paths[locale].replace(`/${locale}/`, "").split("/").filter(Boolean),
    }));
  });
  const localizedShopRoutes = (["de", "en"] as Locale[]).flatMap((locale) => [
    ...shopCategories.map((category) => ({
      locale,
      slug: ["shop", getLocalizedShopSlug(locale, category.slug)],
    })),
    ...products.map((product) => ({
      locale,
      slug: ["shop", product.slug],
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
    const category = shopCategories.find((item) => item.slug === route.slug);
    const title = product ? (locale === "en" ? getEnglishProductTitle(product.title) : product.title) : (locale === "en" && category ? getCategoryLabel(category.title) : category?.title) ?? "Shop";
    const description = product
      ? locale === "en"
        ? `${getEnglishProductTitle(product.title)} at GETYOUR.DESIGN: ${getCategoryLabel(product.category)}, ${product.material}, ${product.price}.`
        : `${product.title} bei GETYOUR.DESIGN: ${product.category}, ${product.material}, ${product.price}.`
      : locale === "en"
        ? `${title} at GETYOUR.DESIGN.`
        : `${title} bei GETYOUR.DESIGN entdecken.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: getShopPath(locale, route.slug),
      },
      alternates: {
        canonical: getShopPath(locale, route.slug),
        languages: {
          de: getShopPath("de", route.slug),
          en: getShopPath("en", route.slug),
          "x-default": getShopPath("de", route.slug),
        },
      },
    };
  }

  return {
    title: locale === "en" ? englishTitles[route.key] ?? titles[route.key] : titles[route.key],
    description: locale === "en" ? englishDescriptions[route.key] : undefined,
    openGraph: locale === "en" ? {
      title: englishTitles[route.key] ?? titles[route.key],
      description: englishDescriptions[route.key],
      url: localizedRoutes[route.key][locale],
    } : undefined,
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
    if (locale === "en") {
      return <EnglishShopSlugPage slug={route.slug} />;
    }

    return <ShopSlugPage params={Promise.resolve({ slug: route.slug })} />;
  }

  if (route.key === "luxury-coasters") {
    return <LuxuryCoastersPage locale={locale} />;
  }

  if (locale === "en" && ["agb", "datenschutz", "impressum"].includes(route.key)) {
    return <EnglishLegalPage routeKey={route.key} />;
  }

  if (locale === "en") {
    return <EnglishStaticPage routeKey={route.key} />;
  }

  const Component = pageComponents[route.key];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

function getRoute(locale: Locale, slug: string[]) {
  const resolvedSlug = slug[0] === "shop" && slug[1] ? ["shop", resolveShopSlug(locale, slug[1])] : slug;
  const path = resolvedSlug.join("/");

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

const categoryLabels: Record<string, string> = {
  Möbel: "Furniture",
  Leuchten: "Lighting",
  Kunst: "Artworks",
  Teppiche: "Rugs",
  Objekte: "Objects",
  Tabletop: "Accessories",
  "Collectible Design": "Collectible Design",
  Editionen: "Editions",
};

const categoryDescriptionsEn: Record<string, string> = {
  Kunst: "Selected artworks, editions and collectable pieces by artists and ateliers.",
  Möbel: "Furniture with architectural clarity, lasting materials and quiet presence.",
  Leuchten: "Lighting as functional objects with sculptural presence.",
  Objekte: "Objects, editions and collectable pieces for distinctive rooms.",
  Tabletop: "Smaller accessories and functional objects for tables, shelves and ensembles.",
  Teppiche: "Rugs and textile works with character, structure and provenance.",
  Editionen: "Limited editions and selected works in small runs.",
  "Collectible Design": "Collectible design between function, craft and art.",
};

const availabilityLabels: Record<string, string> = {
  Verfügbar: "Available",
  "Auf Anfrage verfügbar": "Available on request",
  "Preis auf Anfrage": "Price on request",
  Reserviert: "Reserved",
  Verkauft: "Sold",
};

const ctaLabels: Record<string, string> = {
  "In den Warenkorb": "Add to cart",
  "Anfrage senden": "Send inquiry",
  "Preis anfragen": "Request price",
  Reserviert: "Reserved",
  Verkauft: "Sold",
};

function getCategoryLabel(value: string) {
  return categoryLabels[value] ?? value;
}

function EnglishStaticPage({ routeKey }: { routeKey: RouteKey }) {
  if (routeKey === "shop") {
    return <EnglishShopPage />;
  }

  if (routeKey === "art") {
    return <EnglishArtPage />;
  }

  if (routeKey === "collections") {
    return <EnglishCollectionsPage />;
  }

  if (routeKey === "ateliers") {
    return <EnglishAteliersPage />;
  }

  if (routeKey === "journal") {
    return <EnglishJournalPage />;
  }

  if (routeKey === "contact") {
    return <EnglishContactPage />;
  }

  if (routeKey === "suche") {
    return <EnglishSearchPage />;
  }

  if (routeKey === "warenkorb") {
    return <EnglishCartPage />;
  }

  const Component = pageComponents[routeKey];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

function EnglishShopPage() {
  return (
    <main>
      <PageHero
        eyebrow="Design Shop"
        title="Furniture, lighting, art, rugs, objects and editions."
        description="A curated selection of design furniture, artworks, lighting, rugs, accessories, collectible design, objects and editions for distinctive rooms."
      />
      <section className="border-b hairline bg-[#f3f2ef] px-5 py-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {shopCategories.map((area) => (
            <Link className="border hairline bg-[#f7f7f5] px-4 py-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href={getShopPath("en", area.slug)} key={area.slug}>
              {getCategoryLabel(area.title)}
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="group" key={product.title}>
              <Link href={`/en/shop/${product.slug}`}>
                <PlaceholderArtwork index={index} palette={product.palette} />
              </Link>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{getCategoryLabel(product.category)}</p>
                  <Link href={`/en/shop/${product.slug}`}>
                    <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getEnglishProductTitle(product.title)}</h2>
                  </Link>
                  <Link className="mt-2 inline-block text-sm text-[#4b5356] hover:text-black" href={product.maker.includes("Künstlerposition") ? "/en/artists" : "/en/brands"}>
                    {product.maker.includes("Künstlerposition") ? product.maker.replace("Künstlerposition", "Artist Position") : product.maker}
                  </Link>
                  <EntityActions
                    href={`/en/shop/${product.slug}`}
                    id={`product:${product.slug}`}
                    title={getEnglishProductTitle(product.title)}
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

function EnglishShopSlugPage({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug);
  const category = shopCategories.find((item) => item.slug === slug);

  if (product) {
    const productIndex = products.findIndex((item) => item.slug === product.slug);
    const productCategory = shopCategories.find((item) => item.title === product.category);
    const categoryHref = productCategory ? getShopPath("en", productCategory.slug) : "/en/shop";
    const cta = getEnglishCta(product.status);

    return (
      <main>
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <PlaceholderArtwork index={productIndex} palette={product.palette} />
            <div>
              <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href={categoryHref}>
                Back to {getCategoryLabel(product.category)}
              </Link>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">
                Shop / {getCategoryLabel(product.category)} / {getEnglishProductTitle(product.title)}
              </p>
              <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {getEnglishProductTitle(product.title)}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-black/15 py-5 text-sm text-[#353b3e]">
                <p>{product.price}</p>
                <p>{availabilityLabels[product.availability] ?? product.availability}</p>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#4b5356]">
                A curated {getCategoryLabel(product.category).toLowerCase()} selected for its material presence, proportion and lasting room quality.
              </p>
              <EntityActions
                href={`/en/shop/${product.slug}`}
                id={`product:${product.slug}`}
                title={getEnglishProductTitle(product.title)}
                type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
              />
              <dl className="mt-10 grid gap-5 border-t border-black/15 pt-6 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Dimensions</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Material</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.material}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Origin</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.origin.replace("Künstlerposition", "Artist Position")}</dd>
                </div>
              </dl>
              {cta.disabled ? (
                <button className="mt-10 border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]" disabled>
                  {cta.label}
                </button>
              ) : (
                <Link className="mt-10 inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href={cta.href}>
                  {cta.label}
                </Link>
              )}
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
    const categoryTitle = getCategoryLabel(category.title);

    return (
      <main>
        <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#667174]">Shop / {categoryTitle}</p>
              <Link className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/en/shop">
                Back to Shop
              </Link>
              <h1 className="serif mt-5 max-w-5xl text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {categoryTitle}
              </h1>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#667174]">
                {categoryProducts.length} Works
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#4b5356]">{categoryDescriptionsEn[category.title] ?? `${categoryTitle} at GETYOUR.DESIGN.`}</p>
          </div>
        </section>
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((item) => {
              const index = products.findIndex((productItem) => productItem.slug === item.slug);

              return (
                <article className="group" key={item.slug}>
                  <Link href={`/en/shop/${item.slug}`}>
                    <PlaceholderArtwork index={index} palette={item.palette} />
                  </Link>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{getCategoryLabel(item.category)}</p>
                      <Link href={`/en/shop/${item.slug}`}>
                        <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getEnglishProductTitle(item.title)}</h2>
                      </Link>
                      <p className="mt-2 text-sm text-[#4b5356]">{item.maker.replace("Künstlerposition", "Artist Position")}</p>
                      <EntityActions
                        href={`/en/shop/${item.slug}`}
                        id={`product:${item.slug}`}
                        title={getEnglishProductTitle(item.title)}
                        type={item.category === "Kunst" || item.category === "Editionen" ? "Kunstwerk" : item.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
                      />
                    </div>
                    <p className="shrink-0 text-sm text-[#353b3e]">{item.price}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  notFound();
}

function getEnglishCta(status: string) {
  switch (status) {
    case "sofort-kaufen":
      return { label: "Add to cart", href: "/en/cart", disabled: false };
    case "anfragen":
      return { label: "Send inquiry", href: "/en/contact", disabled: false };
    case "preis-auf-anfrage":
      return { label: "Request price", href: "/en/contact", disabled: false };
    case "reserviert":
      return { label: "Reserved", href: "/en/contact", disabled: true };
    case "verkauft":
      return { label: "Sold", href: "/en/contact", disabled: true };
    default:
      return { label: ctaLabels[status] ?? "Send inquiry", href: "/en/contact", disabled: false };
  }
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

function EnglishCollectionsPage() {
  return (
    <main>
      <PageHero eyebrow="Collections" title="Curated entries into the shop." description="Collections connect furniture, artworks, objects, lighting, rugs and materials into clear object worlds." />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <article className="grid min-h-96 content-between border hairline bg-[#f7f7f5] p-6" key={collection.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Collection 0{index + 1}</p>
              <div>
                <div className={`mb-7 h-36 ${index % 3 === 0 ? "bg-[#11100f]" : index % 3 === 1 ? "bg-[#c7beb1]" : "bg-[#e8e1d6]"}`} />
                <h2 className="serif text-2xl leading-snug tracking-[0.08em]">{englishCollectionTitles[index] ?? collection.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#4b5356]">{englishCollectionDescriptions[index] ?? "A curated selection for distinctive rooms and lasting objects."}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const englishCollectionTitles = ["Material and Surface", "Quiet Rooms", "Collectible Design", "Editions and Artworks", "Seating and Design Furniture", "Natural Materials"];
const englishCollectionDescriptions = [
  "Unpolished textures, mineral tones and objects with visible material traces.",
  "Subtle materials, balanced proportions and objects with restraint.",
  "Limited editions and furniture with long-term value for curated rooms.",
  "Works and objects at the intersection of art, furniture and interiors.",
  "Chairs, lounges and sofas with strong silhouettes and room-defining presence.",
  "Wood, wool, stone, leather, ceramic and bronze with tactile permanence.",
];

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

function EnglishJournalPage() {
  return (
    <main>
      <PageHero eyebrow="Journal" title="Stories about rooms, objects and works with permanence." description="Essays, interviews and background stories on art, design, materials, ateliers and rooms." />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <article className="grid min-h-80 content-between border hairline bg-[#f7f7f5] p-6" key={story.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{englishStoryCategories[index] ?? "Journal"}</p>
              <div>
                <h2 className="serif text-2xl leading-snug tracking-[0.08em]">{englishStoryTitles[index] ?? story.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#4b5356]">{englishStoryTeasers[index] ?? "A concise editorial note connected to selected works, materials and rooms."}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const englishStoryCategories = ["Objects", "Materials", "Collectible Design", "Ateliers"];
const englishStoryTitles = ["How a Single Object Shapes a Room", "Materials That Gain Over Time", "When Design Becomes Collectible", "Where Works Are Made"];
const englishStoryTeasers = [
  "Why a few deliberately selected works can define a room more strongly than a complete interior scheme.",
  "On ceramic, bronze, leather, wood and natural stone, and why traces, patina and origin become part of an object.",
  "A look at editions, unique pieces and works between function, sculpture and art.",
  "Ateliers, makers and workshops as places of attitude, material knowledge and precise craft.",
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

function EnglishCartPage() {
  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Cart</p>
          <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">Cart</h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#4b5356]">Checkout is currently being prepared.</p>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-8">
          <p className="text-sm leading-7 text-[#4b5356]">Saved checkout functionality will be connected once the live provider setup is ready.</p>
          <button className="mt-8 border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]" disabled>Prepare checkout</button>
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
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">{content.heading}</p>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-[#4b5356]">
            {content.sections.map((section) => (
              <section className="border-t border-black/15 pt-6" key={section.title}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#667174]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
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
  "Email: home [at] 2b.berlin",
  "Represented by: D. Tarlig",
  "Register court: Amtsgericht Berlin",
  "Commercial register: HRB 235346 B",
  "VAT ID: DE348785133",
];

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
          "For privacy-related enquiries, please contact: home [at] 2b.berlin.",
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
