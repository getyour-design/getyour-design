import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Marken & Ateliers",
  description:
    "Ateliers, Manufakturen und Hersteller ausgewählter Möbel, Objekte, Leuchten und Editionen.",
};

export default function BrandsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marken & Ateliers"
        title="Ateliers, Manufakturen und Hersteller mit eigener Haltung."
        description="Profile zu ausgewählten Werkstätten, Objektserien, Materialien und Editionen."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2">
          {brands.map((brand, index) => (
            <article className="grid min-h-72 content-between border hairline bg-[#f7f7f5] p-7" key={brand.name}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Atelier 0{index + 1}</p>
              <div>
                <div className={`mb-8 h-28 ${index % 2 === 0 ? "bg-[#11100f]" : "bg-[#c7beb1]"}`} />
                <h2 className="serif text-2xl tracking-[0.08em]">{brand.name}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#4b5356]">{brand.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
