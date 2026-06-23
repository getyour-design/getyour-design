import type { Metadata } from "next";
import Link from "next/link";
import { products } from "../data/products";
import { artworks } from "../data/artworks";
import { brands } from "../data/brands";

export const metadata: Metadata = {
  title: "Suche",
  description: "Suche nach Design, Kunst, Ateliers und Objekten bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/suche",
  },
};

const searchEntrypoints = [
  { label: "Design-Shop", href: "/shop" },
  { label: "Kunst", href: "/art" },
  { label: "Kollektionen", href: "/collections" },
  { label: "Ateliers", href: "/ateliers" },
  { label: "Journal", href: "/journal" },
];

export default function SearchPage() {
  const previewResults = [
    ...products.slice(0, 4).map((item) => ({
      title: item.title,
      meta: item.category,
      href: `/shop/${item.slug}`,
    })),
    ...artworks.slice(0, 2).map((item) => ({
      title: item.title,
      meta: "Kunst",
      href: "/art",
    })),
    ...brands.slice(0, 2).map((item) => ({
      title: item.name,
      meta: "Atelier",
      href: "/ateliers",
    })),
  ];

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Suche</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            Design, Kunst und Ateliers finden.
          </h1>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <form action="/suche" className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              className="border hairline bg-[#f3f2ef] px-5 py-4 text-sm text-[#353b3e] outline-none"
              name="q"
              placeholder="Suchbegriff"
              type="search"
            />
            <button className="border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff]" type="submit">
              Suchen
            </button>
          </form>
          <p className="mt-6 text-sm leading-7 text-[#4b5356]">
            Die Suchseite ist als einfacher Einstieg vorbereitet. Eine vollständige
            Suchlogik kann später auf Basis der bestehenden Entitäten ergänzt werden.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
            {searchEntrypoints.map((item) => (
              <Link className="border hairline bg-[#f3f2ef] px-4 py-3 hover:text-black" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className="mx-auto mt-16 max-w-7xl border-t hairline pt-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Auswahl</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {previewResults.map((item) => (
            <Link className="border hairline bg-[#f7f7f5] p-5 hover:bg-[#f8f8f6]" href={item.href} key={`${item.meta}-${item.title}`}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.meta}</p>
              <h2 className="serif mt-4 text-lg leading-snug tracking-[0.08em]">{item.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

