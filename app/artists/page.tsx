import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { artists } from "../data/artists";

export const metadata: Metadata = {
  title: "Künstler",
  description:
    "Künstlerprofile für Kunstwerke, Editionen, Objekte und Räume bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/artists",
  },
};

export default function ArtistsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Künstler"
        title="Künstler, die Objekte, Oberflächen und Räume prägen."
        description="Kurzprofile zu Positionen, Arbeiten, Materialien und Ateliergeschichten."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, index) => (
            <article className="border hairline bg-[#f7f7f5] p-6" key={artist.name}>
              <div className={`aspect-[4/5] ${index % 2 === 0 ? "bg-[#d8d0c3]" : "bg-[#11100f]"}`} />
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Künstlerprofil</p>
              <h2 className="serif mt-2 text-2xl tracking-[0.08em]">{artist.name}</h2>
              <p className="mt-4 text-sm leading-7 text-[#4b5356]">{artist.profile}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t hairline bg-[#e8eceb] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
            Arbeiten, Editionen und Objekte ausgewählter Künstler erscheinen im
            Shop sowie in kuratierten Kollektionen.
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
