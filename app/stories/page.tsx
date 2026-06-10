import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { stories } from "../data/stories";

export const metadata: Metadata = {
  title: "Journal",
  description: "Journal für Räume, Materialien, Kunst und kuratierte Objekte als verkaufsunterstützender Content von GETYOUR.DESIGN.",
};

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Verkaufsunterstützender Content für Räume, Materialien und Objekte."
        description="Das Journal unterstützt SEO, Pinterest, Inspiration und interne Verlinkung zu Shop-Kategorien, Kollektionen, Kunst und Trade."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article className="grid min-h-80 content-between border hairline bg-[#f6f2eb] p-6" key={story.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">{story.category}</p>
              <div>
                <h2 className="serif text-4xl leading-tight">{story.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#5f5a52]">{story.teaser}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
