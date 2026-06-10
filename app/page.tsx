import Link from "next/link";
import { artists } from "./data/artists";
import { artworks } from "./data/artworks";
import { brands } from "./data/brands";
import { collections } from "./data/collections";
import { materialCards } from "./data/materials";
import { products } from "./data/products";
import { stories } from "./data/stories";

const platformAreas = [
  {
    title: "Neu eingetroffen",
    description: "Neue Produkte, Kunstwerke, Editionen und besondere Objekte.",
    href: "/shop",
  },
  {
    title: "Kunst",
    description: "Kunstwerke als integrierte Shop-Kategorie, nicht als separate Galerie.",
    href: "/art",
  },
  {
    title: "Designmöbel",
    description: "Sitzobjekte, Tische, Leuchten und Möbel mit Sammlerwert.",
    href: "/shop",
  },
  {
    title: "Objekte",
    description: "Keramik, Bronze, Papierarbeiten und außergewöhnliche Einzelstücke.",
    href: "/shop",
  },
  {
    title: "Künstler & Ateliers",
    description: "Fiktive Profile für Editionen, Kollaborationen und Herkunft.",
    href: "/artists",
  },
  {
    title: "Kollektionen",
    description: "Kuratierte Einstiege nach Stil, Material, Raum und Thema.",
    href: "/collections",
  },
  {
    title: "Journal",
    description: "Verkaufsunterstützender Content für Suche, Inspiration und Verlinkung.",
    href: "/stories",
  },
  {
    title: "Für Architekten & Interior Designer",
    description: "Trade-Anfragen, Projektlisten, Sonderanfertigungen und Objektbeschaffung.",
    href: "/trade",
  },
];

const commerceModels = [
  "Produkte",
  "Kunstwerke",
  "Partnerprodukte",
  "Affiliate-Produkte",
  "Trade-Projekte",
  "Sonderanfertigungen",
];

export default function Home() {
  return (
    <main className="bg-[#fbfaf6]">
      <section className="border-b hairline px-5 py-10 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#777068]">
              Kunst · Design · Interior · Collectible Design
            </p>
            <h1 className="serif mt-8 text-balance text-6xl font-medium leading-[0.92] text-[#10100f] md:text-8xl lg:text-[8.5rem]">
              Sagen Sie mir, womit Sie sich umgeben, und ich sage Ihnen, wer Sie sind.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Kunstwerke, Designmöbel, Objekte und Collectible Design für
              Menschen mit Stil, Individualität und einem eigenen Blick auf
              Gestaltung.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="border border-black bg-black px-7 py-4 text-center text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#2a2723]" href="/shop">
                Shop entdecken
              </Link>
              <Link className="border border-black px-7 py-4 text-center text-xs uppercase tracking-[0.2em] transition hover:bg-[#eee9df]" href="/collections">
                Bereiche ansehen
              </Link>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden bg-[#ebe5da] lg:min-h-[680px]">
            <div className="absolute inset-x-[12%] bottom-0 h-[78%] rounded-t-full bg-[#cfc5b6]" />
            <div className="absolute left-[18%] top-[12%] h-[52%] w-[54%] bg-[#11100f]" />
            <div className="absolute bottom-[14%] right-[10%] h-[36%] w-[38%] bg-[#f8f4eb] shadow-[-26px_26px_0_rgba(114,105,94,0.24)]" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-black/20 pt-5">
              <p className="max-w-[12rem] text-xs uppercase leading-5 tracking-[0.18em] text-[#4d4841]">
                Produkte, Kunst, Ateliers, Journal und Trade in einem System
              </p>
              <p className="serif text-5xl">01</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#fbfaf6] px-5 py-14 lg:px-10">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Was Sie hier finden</p>
              <h2 className="serif mt-4 text-balance text-5xl leading-none lg:text-6xl">
                Eine kuratierte Commerce-Plattform, keine reine Inspirationsseite.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#5f5a52]">
                GETYOUR.DESIGN verbindet kaufbare Produkte, Kunst, Ateliers,
                Materialien, Journal-Inhalte und Trade-Anfragen zu einer
                klaren Plattformarchitektur.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {platformAreas.map((area, index) => (
                <Link
                  className="grid min-h-52 content-between border hairline bg-[#f6f2eb] p-5 transition hover:bg-[#eee8dd]"
                  href={area.href}
                  key={area.title}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#777068]">
                    Bereich 0{index + 1}
                  </p>
                  <div>
                    <h3 className="serif text-3xl leading-tight">{area.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#5f5a52]">{area.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Neu im Shop</p>
              <h2 className="serif mt-3 text-5xl font-medium lg:text-6xl">Was Sie kaufen, anfragen oder vormerken können</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/shop">
              Zum Shop
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
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Künstler im Fokus</p>
            <h2 className="serif mt-5 text-balance text-5xl leading-none lg:text-7xl">
              Künstler, Ateliers und Marken werden Teil des Shop-Systems.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#5f5a52]">
              Profile, Kunstwerke, Editionen und Produkte sollen langfristig
              miteinander verknüpft werden: für bessere Orientierung, interne
              Verlinkung und klare Kauf- oder Anfragewege.
            </p>
            <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/artists">
              Künstler entdecken
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad border-b hairline bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-3">
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/art">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Kunst im Shop</p>
            <div className="mt-8 h-40 bg-[#11100f]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{artworks[0].title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Kunst als integrierte Shop-Kategorie mit Medium, Jahr und Anfrage-Logik.</p>
          </Link>
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/brands">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Marken & Ateliers</p>
            <div className="mt-8 h-40 bg-[#c7beb1]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{brands[0].name}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{brands[0].description}</p>
          </Link>
          <Link className="border hairline bg-[#f6f2eb] p-7 transition hover:bg-[#eee8dd]" href="/artists">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Künstler</p>
            <div className="mt-8 h-40 bg-[#d8d0c3]" />
            <h2 className="serif mt-6 text-4xl leading-tight">{artists[0].name}</h2>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{artists[0].profile}</p>
          </Link>
        </div>
      </section>

      <section className="border-b hairline bg-[#fbfaf6] px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Commerce-Logik</p>
            <h2 className="serif mt-4 text-5xl leading-none">
              Mehrere Angebotsformen, ein kuratiertes System.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commerceModels.map((model) => (
              <div className="border-t border-black/20 py-5 text-sm uppercase tracking-[0.16em] text-[#3f3932]" key={model}>
                {model}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Kuratierte Kollektionen</p>
              <h2 className="serif mt-3 text-5xl font-medium lg:text-6xl">Einstiege in den Shop</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/collections">
              Kollektionen ansehen
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {collections.map((item, index) => (
              <Link className="group grid min-h-80 content-between border hairline bg-[#f6f2eb] p-5 transition hover:bg-[#eee8dd]" href="/collections" key={item.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#777068]">
                  Kollektion 0{index + 1}
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
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Materialbibliothek</p>
            <h2 className="serif mt-4 text-5xl leading-none">Materialien als Basis für Auswahl und Wert.</h2>
            <Link className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/materials">
              Materialien entdecken
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Journal & Inspiration</p>
              <h2 className="serif mt-4 text-5xl leading-none">Content, der Kaufentscheidungen unterstützt.</h2>
            </div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {stories.map((story) => (
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href="/stories" key={story.title}>
                  <h3 className="serif text-3xl leading-tight">{story.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#777068]">Lesen</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-2">
          <article className="border hairline bg-[#11100f] p-8 text-[#fbfaf6] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#bdb4a7]">Trade</p>
            <h2 className="serif mt-5 text-5xl leading-none">Für Architekten, Interior Designer, Hotels und Projektkunden.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">
              Zusätzlicher Vertriebskanal für Projektbeschaffung, reservierte
              Editionen, Materialauswahl und kuratierte Objektlisten.
            </p>
            <Link className="mt-8 inline-block border border-[#fbfaf6] px-6 py-3 text-xs uppercase tracking-[0.2em]" href="/trade">
              Trade anfragen
            </Link>
          </article>
          <article className="border hairline bg-[#f1ede4] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Newsletter</p>
            <h2 className="serif mt-5 text-5xl leading-none">Früher Zugang zu neuen Objekten und privaten Editionen.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#fbfaf6] px-4 py-4 text-sm text-[#777068]">
                E-Mail-Adresse
              </div>
              <Link className="border border-black bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-white" href="/stories">
                Anmelden
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
