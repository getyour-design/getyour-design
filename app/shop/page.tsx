import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { ProductCardMedia } from "../components/ProductMedia";
import { EntityActions } from "../components/EntityActions";
import { getDictionary } from "../data/dictionaries";
import { primaryShopCategories, products } from "../data/products";
import { getShopPath } from "../lib/i18n";
import { get54CouturePresentationCopy } from "../lib/productTitles";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Möbel, Leuchten, Kunst, Teppiche, Objekte, Tabletop, Collectible Design und Editionen ausgewählter Künstler, Ateliers und Hersteller.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  const dictionary = getDictionary("de");

  return (
    <main>
      <PageHero
        eyebrow="Shop"
        title="Möbel, Leuchten, Kunst, Teppiche, Objekte und Editionen."
        description="Eine Auswahl aus Designmöbeln, Kunstwerken, Leuchten, Teppichen, Accessoires, Collectible Design, Objekten und Editionen für besondere Räume."
      />
      <section className="border-b hairline bg-[#f3f2ef] px-5 py-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {primaryShopCategories.map((area) => (
            <Link className="border hairline bg-[#f7f7f5] px-4 py-3.5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href={getShopPath("de", area.slug)} key={area.slug}>
              {dictionary.shop.categories[area.title] ?? area.label ?? area.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const cowhidePresentation = get54CouturePresentationCopy(product.slug, "de");

            return (
              <article className="group" key={product.slug}>
              <Link href={`/shop/${product.slug}`}>
                <ProductCardMedia
                  aspectClassName="aspect-[4/5]"
                  images={product.images}
                  fit="cover"
                  index={index}
                  imageIndex={product.slug === "sitzobjekt-kuhfell" ? 1 : undefined}
                  palette={product.palette}
                  title={product.cardTitle}
                />
              </Link>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{product.category}</p>
                  <Link href={`/shop/${product.slug}`}>
                    <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">
                      {product.cardTitle}
                    </h2>
                  </Link>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-[#667174]">
                    {product.maker === "54COUTURE" ? "54COUTURE – THE FINEST EUROPEAN COW HIDES" : product.maker}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#4b5356]">{product.description}</p>
                  <EntityActions
                    href={`/shop/${product.slug}`}
                    id={`product:${product.slug}`}
                    title={product.title}
                    type={product.category === "Kunst" || product.category === "Editionen" ? "Kunstwerk" : product.category === "Collectible Design" ? "Collectible Design" : "Produkt"}
                  />
                </div>
                <p className="shrink-0 text-sm text-[#353b3e]">{cowhidePresentation?.price ?? product.price}</p>
              </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
