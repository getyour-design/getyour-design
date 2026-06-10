import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { materialCards } from "../data/materials";

export const metadata: Metadata = {
  title: "Materials",
  description: "Explore the GETYOUR.DESIGN materials library: wool, leather, ceramic, wood, travertine, and bronze.",
};

export default function MaterialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Materials"
        title="A library for surfaces, tactility, and long-term value."
        description="The material taxonomy prepares future filtering, product specifications, care guidance, and editorial sourcing paths."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {materialCards.map((material) => (
            <article className="border hairline bg-[#f6f2eb]" key={material.name}>
              <div className={`aspect-square ${material.palette}`} />
              <div className="p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">Material</p>
                <h2 className="serif mt-2 text-4xl">{material.name}</h2>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{material.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
