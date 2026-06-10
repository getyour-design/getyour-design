import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { artists } from "../data/artists";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Explore artist profiles for the GETYOUR.DESIGN future art, collectible design, and editorial commerce platform.",
};

export default function ArtistsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Artists"
        title="Artists shaping objects, surfaces, and rooms."
        description="Static artist profiles define the future content model for biographies, artworks, collaborations, and edition releases."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, index) => (
            <article className="border hairline bg-[#f6f2eb] p-6" key={artist.name}>
              <div className={`aspect-[4/5] ${index % 2 === 0 ? "bg-[#d8d0c3]" : "bg-[#11100f]"}`} />
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">Artist profile</p>
              <h2 className="serif mt-2 text-4xl">{artist.name}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{artist.profile}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
