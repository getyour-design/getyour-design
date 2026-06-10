import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Marken & Ateliers",
  description:
    "Fiktive Marken und Ateliers als Grundlage für spätere Partnerprofile auf GETYOUR.DESIGN.",
};

export default function BrandsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marken & Ateliers"
        title="Partnerstrukturen für einen kuratierten Design-Shop."
        description="Marken- und Atelierprofile bereiten spätere Partnerflächen, Sortimente, Beschaffungsbeziehungen und Commerce-Verknüpfungen vor."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2">
          {brands.map((brand, index) => (
            <article className="grid min-h-72 content-between border hairline bg-[#f6f2eb] p-7" key={brand.name}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">Atelier 0{index + 1}</p>
              <div>
                <div className={`mb-8 h-28 ${index % 2 === 0 ? "bg-[#11100f]" : "bg-[#c7beb1]"}`} />
                <h2 className="serif text-4xl">{brand.name}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f5a52]">{brand.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
