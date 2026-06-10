import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { artworks } from "../data/artworks";

export const metadata: Metadata = {
  title: "Art",
  description:
    "Explore collectible artworks prepared for the GETYOUR.DESIGN future art and design commerce architecture.",
};

export default function ArtPage() {
  return (
    <main>
      <PageHero
        eyebrow="Art"
        title="Artworks selected for interiors with presence."
        description="A future-ready art section with artist, medium, year, and price or inquiry logic represented through static editorial cards."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {artworks.map((artwork, index) => (
            <article key={artwork.title}>
              <PlaceholderArtwork index={index} palette={artwork.palette} />
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">{artwork.artist}</p>
                <h2 className="serif mt-2 text-3xl leading-tight">{artwork.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                  {artwork.medium}, {artwork.year}
                </p>
                <p className="mt-3 text-sm text-[#11100f]">{artwork.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
