import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Marken & Ateliers",
  description:
    "Ateliers, Manufakturen und Hersteller ausgewählter Möbel, Objekte, Leuchten und Editionen.",
  alternates: {
    canonical: "/brands",
  },
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
      <section className="border-t hairline bg-[#e8eceb] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
            Möbel, Leuchten, Objekte und Editionen der Ateliers werden im Shop
            und in kuratierten Kollektionen zusammengeführt.
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
            <Link className="border-b border-black pb-2" href="/shop">Zum Shop</Link>
            <Link className="border-b border-black/30 pb-2" href="/collections">Kollektionen</Link>
            <Link className="border-b border-black/30 pb-2" href="/materials">Materialien</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
