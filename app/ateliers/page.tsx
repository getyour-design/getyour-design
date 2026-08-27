import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { EntityActions } from "../components/EntityActions";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Ateliers",
  description:
    "Ateliers, Werkstätten, Herstellungsprozesse und individuelle Projektanfragen bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/ateliers",
  },
};

export default function AteliersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ateliers"
        title="Werkstätten, Materialien und Arbeiten nach Maß."
        description="Ein ruhiger Blick auf Ateliers, Manufakturen und Herstellungsprozesse hinter Möbeln, Leuchten, Objekten, Editionen und individuellen Projekten."
      />

      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Atelierporträts</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">
                Orte für Objektkultur, Materialwissen und präzise Fertigung
              </h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/brands">
              Ateliers & Marken
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brands.map((brand, index) => (
              <article className="flex min-h-[35rem] flex-col border hairline bg-[#f7f7f5] p-7" key={brand.name}>
                <p className="text-[0.68rem] tracking-[0.2em] text-[#667174]">{brand.name.toLowerCase()}</p>
                <div className="mt-8 flex flex-1 flex-col">
                  {brand.heroImage ? (
                    <Link className="group relative mb-8 block aspect-[16/10] overflow-hidden bg-[#181615]" href={`/de/ateliers/${brand.slug}`}>
                      <Image
                        alt={`${brand.name} Atelieransicht`}
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        src={brand.heroImage}
                      />
                    </Link>
                  ) : (
                    <div className={`mb-8 aspect-[16/10] ${index % 2 === 0 ? "bg-[#11100f]" : "bg-[#c7beb1]"}`} />
                  )}
                  <h3 className="serif min-h-[3.5rem] text-2xl tracking-[0.08em]"><Link href={`/de/ateliers/${brand.slug}`}>{brand.name}</Link></h3>
                  <p className="mt-4 min-h-[5.25rem] max-w-xl text-sm leading-7 text-[#4b5356]">{brand.description}</p>
                  <div className="mt-auto">
                    <EntityActions
                      href="/ateliers"
                      id={`atelier:${brand.name}`}
                      title={brand.name}
                      type="Atelier"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
            Für Sonderanfertigungen, individuelle Projektanfragen und
            Commissioned Pieces können Arbeiten, Materialien und Ateliers früh
            im Prozess abgestimmt werden.
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
            <Link className="border-b border-black pb-2" href="/trade">Commissions & Collaborations</Link>
            <Link className="border-b border-black/30 pb-2" href="/arbeit-einreichen">Arbeit einreichen</Link>
            <Link className="border-b border-black/30 pb-2" href="/materials">Materialien</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
