import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { collections } from "../data/collections";

export const metadata: Metadata = {
  title: "Kollektionen",
  description:
    "Kuratierte GETYOUR.DESIGN Kollektionen für Shop-Einstiege wie Rohe Schönheit, Leiser Luxus, sammelbares Design und natürliche Materialien.",
};

export default function CollectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kollektionen"
        title="Kuratierte Einstiege in den Shop."
        description="Kollektionen ordnen Möbel, Kunst, Objekte, Marken, Künstler und Materialien zu klaren Commerce-Pfaden."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <article className="grid min-h-96 content-between border hairline bg-[#f6f2eb] p-6" key={collection.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">Kollektion 0{index + 1}</p>
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
