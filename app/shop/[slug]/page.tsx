import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCardMedia, ProductGallery } from "../../components/ProductMedia";
import { EntityActions } from "../../components/EntityActions";
import { ProductCommerceBlock } from "../../components/ProductCommerceBlock";
import { getDictionary } from "../../data/dictionaries";
import { getCommerceCta, getProductCta } from "../../lib/commerce";
import { getProductPath } from "../../lib/i18n";
import { get54CouturePresentationCopy } from "../../lib/productTitles";
import { products, visibleShopCategories } from "../../data/products";

type ShopSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryDescriptions: Record<string, string> = {
  Kunst: "Kuratierte Kunstwerke, Editionen und Sammlerstücke ausgewählter Künstler und Ateliers.",
  Möbel: "Designmöbel mit architektonischer Haltung und zeitloser Materialität.",
  Leuchten: "Leuchten als funktionale Objekte mit skulpturaler Präsenz.",
  Objekte: "Objekte, Editionen und Sammlerstücke für besondere Räume.",
  Tabletop: "Kleine Objekte und funktionale Stücke für den täglichen Gebrauch.",
  Teppiche: "Textile Arbeiten und Teppiche mit Charakter, Struktur und Herkunft.",
  Editionen: "Limitierte Editionen und ausgewählte Arbeiten in kleiner Auflage.",
  "Collectible Design": "Sammlerobjekte zwischen Design, Handwerk und Kunst.",
};

type Product = (typeof products)[number];

function getRootProductPath(product: Product) {
  return product.pathMode === "nested"
    ? `/shop/${product.categorySlug}/${product.slug}`
    : `/shop/${product.slug}`;
}

function getProductCanonical(product: Product) {
  return product.pathMode === "nested"
    ? getProductPath("de", product.categorySlug, product.slug)
    : `/shop/${product.slug}`;
}

export async function generateStaticParams() {
  return [
    ...visibleShopCategories.map((category) => ({ slug: category.slug })),
    ...products.map((product) => ({ slug: product.slug })),
  ];
}

export async function generateMetadata({ params }: ShopSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const category = visibleShopCategories.find((item) => item.slug === slug);
  const dictionary = getDictionary("de");

  if (product) {
    const productPath = getProductCanonical(product);

    return {
      title: product.metaTitle ?? product.title,
      description: product.metaDescription ?? `${product.title} bei GETYOUR.DESIGN: ${product.category}, ${product.material}, ${product.price}.`,
      openGraph: {
        title: product.metaTitle ?? product.title,
        description: product.metaDescription ?? product.description,
        url: productPath,
        images: product.images?.[0] ? [{ url: product.images[0].src, alt: product.images[0].alt }] : undefined,
      },
      alternates: {
        canonical: productPath,
      },
    };
  }

  if (category) {
    return {
      title: dictionary.shop.categoryMetaTitles[category.title] ?? category.title,
      description: dictionary.shop.categoryMetaDescriptions[category.title] ?? `${category.title} bei GETYOUR.DESIGN entdecken.`,
      alternates: {
        canonical: `/shop/${category.slug}`,
      },
    };
  }

  return {};
}

export default async function ShopSlugPage({ params }: ShopSlugPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const category = visibleShopCategories.find((item) => item.slug === slug);

  if (product) {
    const cta = getProductCta(product.status);
    const productIndex = products.findIndex((item) => item.slug === product.slug);
    const productCategory = visibleShopCategories.find((item) => item.title === product.category);
    const categoryHref = productCategory ? `/shop/${productCategory.slug}` : "/shop";
    const productHref = getRootProductPath(product);
    const productCta = product.ctaLabel ? { ...cta, label: product.ctaLabel } : cta;
    const cowhidePresentation = get54CouturePresentationCopy(product.slug, "de");
    const dictionary = getDictionary("de");
    const commerceCta = getCommerceCta({
      productSlug: product.slug,
      commerceMode: product.commerceMode,
      affiliateLink: product.affiliateLink,
      fallbackCta: productCta,
      labels: {
        direct: "KAUFEN",
        affiliate: "Beim Partner ansehen",
        presentation: dictionary.shop.commerce,
      },
    });
    const displayCommerceCta = product.slug === "sitzobjekt-kuhfell" ? { ...commerceCta, sellerLabel: undefined } : commerceCta;

    return (
      <main>
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <ProductGallery images={product.images} index={productIndex} palette={product.palette} title={product.title} />
            <div>
              <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href={categoryHref}>
                ← Zurück zu {product.category}
              </Link>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">
                Shop / {product.category} / {product.title}
              </p>
              <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {cowhidePresentation ? (
                  <>
                    <span className="block">{cowhidePresentation.title}</span>
                    <span className="mt-2 block">{cowhidePresentation.subtitle}</span>
                  </>
                ) : (
                  product.title
                )}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#4b5356]">{product.description}</p>
              <div className="mt-8 border-y border-black/15 py-4 text-[#353b3e]">
                <p className="text-base">{cowhidePresentation?.price ?? product.price}</p>
                {product.priceNote ? (
                  <p className="mt-2 text-[0.68rem] leading-5 text-[#667174]">
                    <span className="mr-1 align-super text-[0.55rem]">*</span>
                    {product.priceNote}
                  </p>
                ) : null}
              </div>
              <ProductCommerceBlock
                checkoutErrorMessage="Der Checkout ist derzeit nicht verfügbar. Bitte nutzen Sie alternativ die Anfrage."
                checkoutLoadingLabel="Checkout wird vorbereitet"
                commerceCta={displayCommerceCta}
                fallbackHref="/contact"
                productSlug={product.slug}
              />
              {product.longDescription ? (
                <div className="mt-8 grid gap-4 text-sm leading-7 text-[#4b5356]">
                  {product.longDescription.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {product.artistBio ? (
                <section className="mt-10 border-t border-black/15 pt-6">
                  <h2 className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Über den Künstler</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4b5356]">{product.artistBio}</p>
                </section>
              ) : null}
              <dl className="mt-10 grid gap-5 border-t border-black/15 pt-6 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Maße</dt>
                  <dd className="mt-2 grid gap-1 text-[#353b3e]">
                    {(product.dimensionsDetails ?? [product.dimensions]).map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Material</dt>
                  <dd className="mt-2 grid gap-1 text-[#353b3e]">
                    {(product.materialDetails ?? [product.material]).map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Herkunft</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.origin}</dd>
                </div>
                {product.uniqueNote ? (
                  <div className="md:col-span-2">
                    <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Unikathinweis</dt>
                    <dd className="mt-2 text-[#353b3e]">{product.uniqueNote}</dd>
                  </div>
                ) : null}
              </dl>
              <EntityActions
                href={productHref}
                id={`product:${product.slug}`}
                title={product.title}
                type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (category) {
    const dictionary = getDictionary("de");
    const categoryTitle = dictionary.shop.categories[category.title] ?? category.label ?? category.title;
    const categoryProducts = products.filter(
      (item) =>
        item.category === category.title ||
        item.secondaryCategories?.includes(category.title),
    );
    const description = dictionary.shop.categoryDescriptions[category.title] ?? categoryDescriptions[category.title] ?? `${category.title} bei GETYOUR.DESIGN entdecken.`;
    const emptyState = dictionary.shop.categoryEmptyStates[category.title];

    return (
      <main>
        <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#667174]">Shop / {categoryTitle}</p>
              <Link className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/shop">
                ← Zurück zum Shop
              </Link>
              <h1 className="serif mt-5 max-w-5xl text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {categoryTitle}
              </h1>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#667174]">
                {categoryProducts.length} Arbeiten
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#4b5356]">{description}</p>
          </div>
        </section>
        <section className="section-pad bg-[#f3f2ef]">
          {categoryProducts.length > 0 ? (
            <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((item) => {
              const index = products.findIndex((productItem) => productItem.slug === item.slug);
              const cowhidePresentation = get54CouturePresentationCopy(item.slug, "de");

              return (
                <article className="group" key={item.slug}>
                  <Link href={getRootProductPath(item)}>
                    <ProductCardMedia
                      images={item.images}
                      fit={cowhidePresentation ? "cover" : undefined}
                      index={index}
                      imageIndex={item.slug === "sitzobjekt-kuhfell" ? 1 : undefined}
                      palette={item.palette}
                      title={item.cardTitle}
                    />
                  </Link>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.category}</p>
                      <Link href={getRootProductPath(item)}>
                        <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">
                          {cowhidePresentation ? (
                            <>
                              <span className="block">{cowhidePresentation.title}</span>
                              <span className="mt-2 block">{cowhidePresentation.subtitle}</span>
                            </>
                          ) : item.cardTitle}
                        </h2>
                      </Link>
                      <p className="mt-2 text-sm text-[#4b5356]">{item.maker}</p>
                      <EntityActions
                        href={getRootProductPath(item)}
                        id={`product:${item.slug}`}
                        title={item.cardTitle}
                        type={item.category === "Kunst" || item.category === "Editionen" ? "Kunstwerk" : item.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
                      />
                    </div>
                    <p className="shrink-0 text-sm text-[#353b3e]">{cowhidePresentation?.price ?? item.price}</p>
                  </div>
                </article>
              );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-[1540px] border-y border-black/15 py-12">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{emptyState?.title ?? "Auswahl in Vorbereitung"}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4b5356]">
                {emptyState?.text ?? "Eine kuratierte Auswahl wird derzeit zusammengestellt. Neue Objekte und Empfehlungen werden schrittweise ergänzt."}
              </p>
            </div>
          )}
        </section>
      </main>
    );
  }

  notFound();
}
