import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Kollektionen",
  description: "Ateliers, Manufakturen und Hersteller hinter ausgewählten Arbeiten bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/collections",
  },
};

export default function CollectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kollektionen"
        title="Werkstätten, Materialien und Arbeiten nach Maß."
        description="Ein ruhiger Blick auf Ateliers, Manufakturen und Herstellungsprozesse hinter Möbeln, Leuchten, Objekten, Editionen und individuellen Projekten."
      />
      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="border-b border-black/15 pb-7">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Atelierporträts</p>
            <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Orte für Objektkultur, Materialwissen und präzise Fertigung</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brands.map((brand) => (
              <article className="flex min-h-[35rem] flex-col border hairline bg-[#f7f7f5] p-7" key={brand.slug}>
                <p className="text-[0.68rem] tracking-[0.2em] text-[#667174]">{brand.name.toLowerCase()}</p>
                <div className="mt-8 flex flex-1 flex-col">
                  <Link className="group relative mb-8 block aspect-[16/10] overflow-hidden bg-[#181615]" href={`/de/collections/${brand.slug}`}>
                    {brand.heroImage ? <Image alt={`${brand.name} Atelieransicht`} className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]" fill sizes="(min-width: 1024px) 38vw, 100vw" src={brand.heroImage} /> : null}
                  </Link>
                  <h3 className="serif min-h-[3.5rem] text-2xl tracking-[0.08em]"><Link href={`/de/collections/${brand.slug}`}>{brand.name}</Link></h3>
                  <p className="mt-4 min-h-[5.25rem] max-w-xl text-sm leading-7 text-[#4b5356]">{brand.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
