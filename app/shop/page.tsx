import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { products } from "../data/products";

const shopAreas = [
  "Möbel",
  "Leuchten",
  "Kunst",
  "Teppiche",
  "Objekte",
  "Tabletop",
  "Collectible Design",
  "Editionen",
];

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Möbel, Leuchten, Kunst, Teppiche, Objekte, Tabletop, Collectible Design und Editionen ausgewählter Künstler, Ateliers und Hersteller.",
};

export default function ShopPage() {
  return (
    <main>
      <PageHero
        eyebrow="Shop"
        title="Möbel, Leuchten, Kunst, Teppiche, Objekte und Editionen."
        description="Eine Auswahl aus Designmöbeln, Kunstwerken, Leuchten, Teppichen, Tabletop, Collectible Design, Objekten und Editionen für besondere Räume."
      />
      <section className="border-b hairline bg-[#f3f2ef] px-5 py-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {shopAreas.map((area) => (
            <div className="border hairline bg-[#f7f7f5] px-4 py-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e]" key={area}>
              {area}
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article className="group" key={product.title}>
              <PlaceholderArtwork index={index} palette={product.palette} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Objekt 0{index + 1}</p>
                  <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{product.title}</h2>
                  <Link className="mt-2 inline-block text-sm text-[#4b5356] hover:text-black" href={product.maker.includes("Künstlerposition") ? "/artists" : "/brands"}>
                    {product.maker}
                  </Link>
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
