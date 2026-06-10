import Link from "next/link";
import { artists } from "./data/artists";
import { artworks } from "./data/artworks";
import { brands } from "./data/brands";
import { collections } from "./data/collections";
import { materialCards } from "./data/materials";
import { products } from "./data/products";
import { stories } from "./data/stories";

export default function Home() {
  return (
    <main className="bg-[#fbfaf6]">
      <section className="border-b hairline px-5 py-10 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#777068]">
              Luxury Design Marketplace
            </p>
            <h1 className="serif mt-8 text-balance text-6xl font-medium leading-[0.92] text-[#10100f] md:text-8xl lg:text-[8.5rem]">
              Collectible Design. Timeless Value.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Discover refined furniture, rare objects, collectible art, and
              material-led editions sourced from contemporary studios and
              independent ateliers.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="border border-black bg-black px-7 py-4 text-center text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#2a2723]" href="/shop">
                Shop New Arrivals
              </Link>
              <Link className="border border-black px-7 py-4 text-center text-xs uppercase tracking-[0.2em] transition hover:bg-[#eee9df]" href="/collections">
                Explore Collections
              </Link>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden bg-[#ebe5da] lg:min-h-[680px]">
            <div className="absolute inset-x-[12%] bottom-0 h-[78%] rounded-t-full bg-[#cfc5b6]" />
            <div className="absolute left-[18%] top-[12%] h-[52%] w-[54%] bg-[#11100f]" />
            <div className="absolute bottom-[14%] right-[10%] h-[36%] w-[38%] bg-[#f8f4eb] shadow-[-26px_26px_0_rgba(114,105,94,0.24)]" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-black/20 pt-5">
              <p className="max-w-[12rem] text-xs uppercase leading-5 tracking-[0.18em] text-[#4d4841]">
                Limited editions for considered interiors
              </p>
              <p className="serif text-5xl">01</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">New Arrivals</p>
              <h2 className="serif mt-3 text-5xl font-medium lg:text-6xl">Recently sourced pieces</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/shop">
              Shop all
            </Link>
          </div>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <article className="group" key={item.title}>
                <div className="aspect-[4/5] overflow-hidden border hairline bg-[#f0ece3] p-6">
                  <div className={`h-full transition duration-500 group-hover:scale-[1.02] ${item.palette}`} />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">{item.type}</p>
                    <h3 className="serif mt-2 text-3xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#5f5a52]">{item.maker}</p>
                  </div>
                  <p className="shrink-0 text-sm text-[#4d4841]">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#f1ede4] px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="min-h-[520px] bg-[#d8d0c3] p-6">
            <div className="h-full border border-black/18 bg-[#141311]" />
          </div>
          <div className="max-w-xl lg:pl-10">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Featured Artist</p>
            <h2 className="serif mt-5 text-balance text-5xl leading-none lg:text-7xl">
              Elena Mar Studio turns restraint into collectible form.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#5f5a52]">
              This month, the gallery focuses on stone, linen, and softened
              geometries from a studio known for quiet monumentality.
            </p>
            <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/artists">
              Explore artists
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad border-b hairline bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-3">
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/art">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Art & Collectibles</p>
            <div className="mt-8 h-40 bg-[#11100f]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{artworks[0].title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Artwork profiles with artist, medium, year, and inquiry logic.</p>
          </Link>
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/brands">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Featured Brands</p>
            <div className="mt-8 h-40 bg-[#c7beb1]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{brands[0].name}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{brands[0].description}</p>
          </Link>
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/artists">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Featured Artists</p>
            <div className="mt-8 h-40 bg-[#d8d0c3]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{artists[0].name}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{artists[0].profile}</p>
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Curated Collections</p>
              <h2 className="serif mt-3 text-5xl font-medium lg:text-6xl">Editorial buying paths</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/collections">
              View collections
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {collections.map((item, index) => (
              <Link className="group grid min-h-80 content-between border hairline bg-[#f6f2eb] p-5 transition hover:bg-[#eee8dd]" href="/collections" key={item.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">
                  Collection 0{index + 1}
                </p>
                <div>
                  <div className={`mb-6 h-32 ${index % 2 === 0 ? "bg-[#11100f]" : "bg-[#c7beb1]"}`} />
                  <h3 className="serif text-3xl leading-tight">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#f1ede4] px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Materials Library</p>
            <h2 className="serif mt-4 text-5xl leading-none">Filterable surfaces for future product data.</h2>
            <Link className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/materials">
              Explore materials
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <Link className="border hairline bg-[#fbfaf6] p-5" href="/materials" key={material.name}>
                <div className={`mb-5 h-24 ${material.palette}`} />
                <h3 className="serif text-3xl">{material.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y hairline bg-[#fbfaf6]">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Stories & Inspirations</p>
              <h2 className="serif mt-4 text-5xl leading-none">A sharper eye for better rooms.</h2>
            </div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {stories.map((story) => (
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href="/stories" key={story.title}>
                  <h3 className="serif text-3xl leading-tight">{story.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#777068]">Read</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-2">
          <article className="border hairline bg-[#11100f] p-8 text-[#fbfaf6] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#bdb4a7]">Trade Program</p>
            <h2 className="serif mt-5 text-5xl leading-none">For designers, architects, and hospitality studios.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">
              Access sourcing support, reserved editions, project quotes, and
              tailored material recommendations for professional interiors.
            </p>
            <Link className="mt-8 inline-block border border-[#fbfaf6] px-6 py-3 text-xs uppercase tracking-[0.2em]" href="/trade">
              Apply for trade
            </Link>
          </article>
          <article className="border hairline bg-[#f1ede4] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Newsletter</p>
            <h2 className="serif mt-5 text-5xl leading-none">First access to new objects and private releases.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#fbfaf6] px-4 py-4 text-sm text-[#777068]">
                Email address
              </div>
              <Link className="border border-black bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-white" href="/stories">
                Sign up
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
