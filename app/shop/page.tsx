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
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="group" key={product.title}>
              <PlaceholderArtwork index={index} palette={product.palette} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{product.type}</p>
                  <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{product.title}</h2>
                  <p className="mt-2 text-sm text-[#4b5356]">{product.maker}</p>
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
