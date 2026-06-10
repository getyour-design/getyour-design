import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Der GETYOUR.DESIGN Shop als Hauptsystem für eigene Produkte, Partnerprodukte, Affiliate-Produkte, Kunstwerke, Maßanfertigungen und Trade-Anfragen.",
};

export default function ShopPage() {
  return (
    <main>
      <PageHero
        eyebrow="Shop"
        title="Das Hauptsystem für Möbel, Kunst, Objekte und Editionen."
        description="Statische Produktkarten zeigen bereits die spätere Commerce-Logik: eigene Produkte, Partnerprodukte, Affiliate-Produkte, Kunstwerke, Maßanfertigungen und Trade-Anfragen."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="group" key={product.title}>
              <PlaceholderArtwork index={index} palette={product.palette} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">{product.type}</p>
                  <h2 className="serif mt-2 text-3xl leading-tight">{product.title}</h2>
                  <p className="mt-2 text-sm text-[#5f5a52]">{product.maker}</p>
                </div>
                <p className="shrink-0 text-sm text-[#4d4841]">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
