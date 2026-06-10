import type { Metadata } from "next";
import { materials } from "../data";

export const metadata: Metadata = {
  title: "Materials",
  description: "A refined material palette for luxury interiors, including marble, walnut, bouclé, brass, steel, and linen.",
};

export default function MaterialsPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Materials</p>
        <h1 className="serif mt-4 max-w-4xl text-balance text-6xl leading-none lg:text-8xl">
          Surfaces chosen for tone, weight, and longevity.
        </h1>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {materials.map((material, index) => (
            <article className="border hairline bg-[#fbf8f1]" key={material}>
              <div className={`aspect-square ${index % 3 === 0 ? "bg-[#111]" : index % 3 === 1 ? "bg-[#b9ad9f]" : "bg-[#eee6d8]"}`} />
              <h2 className="p-5 text-lg">{material}</h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
