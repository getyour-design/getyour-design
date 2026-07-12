import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCardMedia, ProductGallery } from "../../components/ProductMedia";
import { EntityActions } from "../../components/EntityActions";
import { getProductCta } from "../../lib/commerce";
import { getProductPath } from "../../lib/i18n";
import { products, shopCategories } from "../../data/products";

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
    ...shopCategories.map((category) => ({ slug: category.slug })),
    ...products.map((product) => ({ slug: product.slug })),
  ];
}

export async function generateMetadata({ params }: ShopSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const category = shopCategories.find((item) => item.slug === slug);

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
      title: category.title,
      description: `${category.title} bei GETYOUR.DESIGN entdecken.`,
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
  const category = shopCategories.find((item) => item.slug === slug);

  if (product) {
    const cta = getProductCta(product.status);
    const productIndex = products.findIndex((item) => item.slug === product.slug);
    const productCategory = shopCategories.find((item) => item.title === product.category);
    const categoryHref = productCategory ? `/shop/${productCategory.slug}` : "/shop";
    const productHref = getRootProductPath(product);
    const productCta = product.ctaLabel ? { ...cta, label: product.ctaLabel } : cta;

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
                {product.title}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-black/15 py-5 text-sm text-[#353b3e]">
                <p>{product.price}</p>
                <p>{product.availability}</p>
              </div>
              {product.priceNote ? <p className="mt-4 text-sm leading-7 text-[#4b5356]">{product.priceNote}</p> : null}
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#4b5356]">{product.description}</p>
              {product.longDescription ? (
                <div className="mt-8 grid gap-4 text-sm leading-7 text-[#4b5356]">
                  {product.longDescription.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              <EntityActions
                href={productHref}
                id={`product:${product.slug}`}
                title={product.title}
                type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
              />
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
              {productCta.disabled ? (
                <button className="mt-10 border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]" disabled>
                  {productCta.label}
                </button>
              ) : (
                <Link className="mt-10 inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href={productCta.href ?? "/contact"}>
                  {productCta.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (category) {
    const categoryTitle = "label" in category ? category.label : category.title;
    const categoryProducts = products.filter(
      (item) =>
        item.category === category.title ||
        item.secondaryCategories?.includes(category.title),
    );
    const description = categoryDescriptions[category.title] ?? `${category.title} bei GETYOUR.DESIGN entdecken.`;

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
          <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((item) => {
              const index = products.findIndex((productItem) => productItem.slug === item.slug);

              return (
                <article className="group" key={item.slug}>
                  <Link href={getRootProductPath(item)}>
                    <ProductCardMedia images={item.images} index={index} palette={item.palette} title={item.cardTitle} />
                  </Link>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.category}</p>
                      <Link href={getRootProductPath(item)}>
                        <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{item.cardTitle}</h2>
                      </Link>
                      <p className="mt-2 text-sm text-[#4b5356]">{item.maker}</p>
                      <EntityActions
                        href={getRootProductPath(item)}
                        id={`product:${item.slug}`}
                        title={item.cardTitle}
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
