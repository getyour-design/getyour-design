import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderArtwork } from "../../components/PlaceholderArtwork";
import { PageHero } from "../../components/PageHero";
import { getProductCta } from "../../lib/commerce";
import { products, shopCategories } from "../../data/products";

type ShopSlugPageProps = {
  params: Promise<{ slug: string }>;
};

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
    return {
      title: product.title,
      description: `${product.title} bei GETYOUR.DESIGN: ${product.category}, ${product.material}, ${product.price}.`,
    };
  }

  if (category) {
    return {
      title: category.title,
      description: `${category.title} bei GETYOUR.DESIGN entdecken.`,
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

    return (
      <main>
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <PlaceholderArtwork index={productIndex} palette={product.palette} />
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{product.category}</p>
              <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
                {product.title}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-black/15 py-5 text-sm text-[#353b3e]">
                <p>{product.price}</p>
                <p>{product.availability}</p>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#4b5356]">{product.description}</p>
              <dl className="mt-10 grid gap-5 border-t border-black/15 pt-6 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Maße</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Material</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.material}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Herkunft</dt>
                  <dd className="mt-2 text-[#353b3e]">{product.origin}</dd>
                </div>
              </dl>
              {cta.disabled ? (
                <button className="mt-10 border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]" disabled>
                  {cta.label}
                </button>
              ) : (
                <Link className="mt-10 inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href={cta.href ?? "/warenkorb"}>
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

    return (
      <main>
        <PageHero
          eyebrow="Shop"
          title={category.title}
          description={`${category.title} aus dem Sortiment von GETYOUR.DESIGN.`}
        />
        <section className="section-pad bg-[#f3f2ef]">
          <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((item) => {
              const index = products.findIndex((productItem) => productItem.slug === item.slug);

              return (
                <article className="group" key={item.slug}>
                  <Link href={`/shop/${item.slug}`}>
                    <PlaceholderArtwork index={index} palette={item.palette} />
                  </Link>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.category}</p>
                      <Link href={`/shop/${item.slug}`}>
                        <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{item.title}</h2>
                      </Link>
                      <p className="mt-2 text-sm text-[#4b5356]">{item.maker}</p>
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
