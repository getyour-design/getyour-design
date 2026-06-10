import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { collections } from "../data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse curated GETYOUR.DESIGN collections including Raw Beauty, Quiet Luxury, Collectible Design, Artist Editions, Sculptural Seating, and Natural Materials.",
};

export default function CollectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Collections"
        title="Curated pathways through collectible design."
        description="Collections organize the future marketplace into editorial buying paths that can later map to products, artworks, brands, artists, and materials."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <article className="grid min-h-96 content-between border hairline bg-[#f6f2eb] p-6" key={collection.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">Collection 0{index + 1}</p>
              <div>
                <div className={`mb-7 h-36 ${index % 3 === 0 ? "bg-[#11100f]" : index % 3 === 1 ? "bg-[#c7beb1]" : "bg-[#e8e1d6]"}`} />
                <h2 className="serif text-4xl leading-tight">{collection.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
