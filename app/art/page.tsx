import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { artworks } from "../data/artworks";

export const metadata: Metadata = {
  title: "Kunst",
  description:
    "Kunstwerke, Papierarbeiten, Skulpturen und Editionen bei GETYOUR.DESIGN.",
};

export default function ArtPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kunst"
        title="Kunstwerke, Papierarbeiten, Skulpturen und Editionen."
        description="Ausgewählte Arbeiten für Räume, Sammlungen und Interieurs mit eigenem Blick."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {artworks.map((artwork, index) => (
            <article key={artwork.title}>
              <PlaceholderArtwork index={index} palette={artwork.palette} />
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{artwork.artist}</p>
                <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{artwork.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#4b5356]">
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
