import Link from "next/link";
import { featuredObjects, materials } from "./data";

export default function Home() {
  return (
    <main>
      <section className="min-h-[86vh] bg-[#080808] px-5 py-16 text-[#f7f3ea] lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="pt-12 lg:pt-24">
            <p className="text-xs uppercase tracking-[0.28em] text-[#b9ad9f]">
              Luxury Design Marketplace
            </p>
            <h1 className="serif mt-8 max-w-4xl text-balance text-6xl font-medium leading-[0.92] md:text-8xl lg:text-9xl">
              GETYOUR.DESIGN
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#ded5ca]">
              Collectible furniture, sculptural seating, quiet materials, and
              rare objects curated for interiors with restraint and gravity.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link className="bg-[#f7f3ea] px-6 py-3 text-sm uppercase tracking-[0.18em] text-black" href="/gallery">
                View Gallery
              </Link>
              <Link className="border border-[#f7f3ea]/40 px-6 py-3 text-sm uppercase tracking-[0.18em]" href="/objects">
                Explore Objects
              </Link>
            </div>
          </div>
          <div className="grid aspect-[4/5] content-between border border-[#f7f3ea]/20 bg-[#151515] p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-44 bg-[#eee6d8]" />
              <div className="h-44 bg-[#3b3731]" />
              <div className="h-44 bg-[#b9ad9f]" />
              <div className="h-44 bg-[#080808] ring-1 ring-[#f7f3ea]/20" />
            </div>
            <p className="serif max-w-sm text-3xl leading-tight">
              An editorial catalogue for homes, hotels, ateliers, and collectors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#786f64]">Featured</p>
              <h2 className="serif mt-3 text-5xl">Objects with a point of view</h2>
            </div>
            <Link className="text-sm uppercase tracking-[0.18em] underline underline-offset-8" href="/objects">
              All Objects
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredObjects.map((item, index) => (
              <article className="border hairline bg-[#fbf8f1]" key={item.title}>
                <div className="aspect-[4/5] bg-[#111] p-4">
                  <div className={`h-full ${index % 2 === 0 ? "bg-[#eee6d8]" : "bg-[#b9ad9f]"}`} />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#786f64]">{item.category}</p>
                  <h3 className="serif mt-3 text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#5f574f]">{item.material}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee6d8] section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="serif text-5xl lg:text-6xl">Material intelligence for tactile interiors.</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {materials.map((material) => (
              <div className="border-b border-black/20 py-5 text-lg" key={material}>
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
