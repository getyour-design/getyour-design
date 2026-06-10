import type { Metadata } from "next";
import { featuredObjects } from "../data";

export const metadata: Metadata = {
  title: "Objekte",
  description: "Sammelbare Designobjekte von GETYOUR.DESIGN als Teil der kuratierten Commerce-Plattform.",
};

export default function ObjectsPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Objekte</p>
        <h1 className="serif mt-4 max-w-4xl text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
          Sammelbare Formen für Räume mit Haltung.
        </h1>
        <div className="mt-12 divide-y divide-black/15 border-y border-black/15">
          {featuredObjects.map((item) => (
            <article className="grid gap-5 py-8 md:grid-cols-[0.55fr_1fr_0.7fr] md:items-center" key={item.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-[#786f64]">{item.category}</p>
              <h2 className="serif text-2xl tracking-[0.08em]">{item.title}</h2>
              <p className="text-sm leading-6 text-[#5f574f]">{item.material}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
