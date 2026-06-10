import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description: "Editorial stories on collectible design, material culture, and the interiors shaped by GETYOUR.DESIGN.",
};

const stories = [
  "The return of the formal object",
  "Why low seating changes a room",
  "A collector's guide to quiet materials",
];

export default function StoriesPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Stories</p>
        <h1 className="serif mt-4 max-w-4xl text-balance text-6xl leading-none lg:text-8xl">
          Notes on interiors, collecting, and material presence.
        </h1>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article className="border-t border-black/20 pt-6" key={story}>
              <p className="text-xs uppercase tracking-[0.18em] text-[#786f64]">Journal</p>
              <h2 className="serif mt-4 text-4xl leading-tight">{story}</h2>
              <p className="mt-5 text-sm leading-6 text-[#5f574f]">
                Editorial perspective for designers, collectors, and clients
                shaping spaces with fewer, better pieces.
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
