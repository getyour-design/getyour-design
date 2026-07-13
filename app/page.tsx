import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "./data/dictionaries";
import { artworks } from "./data/artworks";
import { collections } from "./data/collections";
import { materialCards } from "./data/materials";
import { products, visibleShopCategories } from "./data/products";
import { stories } from "./data/stories";
import { getProductPath, getShopPath } from "./lib/i18n";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const platformAreas = [
  {
    title: "Shop",
    description: "Möbel, Leuchten, Kunst, Teppiche, Objekte, Accessoires und Editionen entdecken.",
    href: "/shop",
  },
  {
    title: "Kollektionen",
    description: "Kuratierte Einstiege nach Stil, Material, Raum und Objektart.",
    href: "/collections",
  },
  {
    title: "Kunst",
    description: "Papierarbeiten, Skulpturen, Wandarbeiten und Editionen im Sortiment.",
    href: "/art",
  },
  {
    title: "Künstler & Ateliers",
    description: "Positionen, Ateliers, Manufakturen und Hersteller kennenlernen.",
    href: "/artists",
  },
  {
    title: "Materialien",
    description: "Naturstein, Leder, Bronze, Keramik, Wolle und Oberflächen verstehen.",
    href: "/materials",
  },
  {
    title: "Journal",
    description: "Beiträge zu Produkten, Materialien, Künstlern und Räumen.",
    href: "/journal",
  },
  {
    title: "Commissions & Collaborations",
    description: "Anfragen für Architekten, Interior Designer, Hotels und Projekte.",
    href: "/trade",
  },
];

const productImages = [
  "/images/product-stone-object.svg",
  "/images/product-stone-table.svg",
  "/images/product-ceramic.svg",
  "/images/product-paper.svg",
  "/images/product-rug.svg",
  "/images/product-bronze-lamp.svg",
];

const collectionImages = [
  "/images/collection-materials.svg",
  "/images/collection-studio.svg",
  "/images/collection-art.svg",
  "/images/collection-ceramic.svg",
  "/images/collection-lighting.svg",
  "/images/collection-textile.svg",
];

const selectedWorks = [
  {
    title: products[1].title,
    meta: "Naturstein, Objekt, Interior",
    image: productImages[1],
    href: "/shop",
  },
  {
    title: artworks[1].title,
    meta: "Bronze, Skulptur, Edition",
    image: productImages[5],
    href: "/art",
  },
  {
    title: products[3].title,
    meta: "Papier, Struktur, Wandarbeit",
    image: productImages[3],
    href: "/art",
  },
  {
    title: products[5].title,
    meta: "Leuchte, Bronze, Projekt",
    image: productImages[5],
    href: "/shop",
  },
];

const smallObjects = [
  {
    title: "Vase aus glasierter Keramik",
    type: "Keramikobjekt",
    price: "EUR 180",
    image: productImages[2],
  },
  {
    title: "Schale aus hellem Steinzeug",
    type: "Accessoires",
    price: "EUR 240",
    image: productImages[0],
  },
  {
    title: "Untersetzer aus Naturstein",
    type: "Objekt",
    price: "EUR 120",
    image: productImages[1],
  },
  {
    title: "Kerzenhalter aus patinierter Bronze",
    type: "Bronzeobjekt",
    price: "EUR 390",
    image: productImages[5],
  },
  {
    title: "Kleines Glasobjekt",
    type: "Edition",
    price: "EUR 460",
    image: productImages[3],
  },
  {
    title: "Kleine Edition aus Papier",
    type: "Edition",
    price: "EUR 620",
    image: productImages[3],
  },
];

const featuredCommerceProduct = products.find((product) => product.slug === "sitzobjekt-kuhfell");
const dictionary = getDictionary("de");

function ProductVisual({ index, palette }: { index: number; palette: string }) {
  const modes = [
    "lounge",
    "table",
    "ceramic",
    "paper",
    "rug",
    "lamp",
  ];
  const mode = modes[index % modes.length];

  return (
    <div className="relative aspect-[4/5] overflow-hidden border hairline bg-[#f8f8f6]">
      <div className="absolute inset-x-8 bottom-8 h-px bg-black/20" />
      {mode === "lounge" && (
        <>
          <div className={`absolute bottom-16 left-[18%] h-[34%] w-[54%] rounded-t-[42%] ${palette}`} />
          <div className="absolute bottom-16 left-[18%] h-[9%] w-[64%] bg-[#171615]" />
          <div className="absolute bottom-10 left-[25%] h-8 w-px bg-black/35" />
          <div className="absolute bottom-10 right-[22%] h-8 w-px bg-black/35" />
        </>
      )}
      {mode === "table" && (
        <>
          <div className={`absolute bottom-28 left-[24%] h-[28%] w-[52%] ${palette}`} />
          <div className="absolute bottom-20 left-[18%] h-4 w-[64%] bg-[#171615]" />
        </>
      )}
      {mode === "ceramic" && (
        <>
          <div className={`absolute bottom-20 left-[31%] h-[45%] w-[38%] rounded-t-full ${palette}`} />
          <div className="absolute bottom-[45%] left-[40%] h-[11%] w-[20%] rounded-full bg-[#f3f2ef]" />
        </>
      )}
      {mode === "paper" && (
        <>
          <div className="absolute inset-10 bg-[#f3f2ef] shadow-[18px_18px_0_rgba(0,0,0,0.08)]" />
          <div className={`absolute left-[24%] top-[24%] h-[36%] w-[42%] ${palette}`} />
          <div className="absolute bottom-[24%] left-[24%] h-px w-[52%] bg-black/30" />
        </>
      )}
      {mode === "rug" && (
        <>
          <div className={`absolute bottom-16 left-[18%] h-[58%] w-[64%] ${palette}`} />
          <div className="absolute bottom-16 left-[24%] h-[58%] w-px bg-black/12" />
          <div className="absolute bottom-16 right-[24%] h-[58%] w-px bg-black/12" />
        </>
      )}
      {mode === "lamp" && (
        <>
          <div className={`absolute top-[20%] left-[31%] h-[28%] w-[38%] rounded-t-full ${palette}`} />
          <div className="absolute bottom-[22%] left-1/2 h-[30%] w-px bg-[#171615]" />
          <div className="absolute bottom-[18%] left-[36%] h-3 w-[28%] bg-[#171615]" />
        </>
      )}
      <p className="absolute left-6 top-6 text-[0.62rem] uppercase tracking-[0.2em] text-[#667174]">
        Objekt 0{index + 1}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f3f2ef]">
      <section className="bg-[#8d8376]">
        <div className="relative overflow-hidden bg-[#8d8376]">
          <Image
            alt="Fotografie eines LC2-Sessels in architektonischem Interior-Kontext"
            className="block h-[760px] w-full object-cover object-[50%_48%] md:h-[800px] lg:h-auto lg:object-fill"
            height={1024}
            priority
            sizes="100vw"
            src="/images/hero-editorial.png"
            width={1536}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,0.66)_0%,rgba(10,10,9,0.48)_24%,rgba(10,10,9,0.12)_40%,rgba(10,10,9,0)_50%)]" aria-hidden="true" />
          <div className="absolute left-6 right-6 top-28 z-10 max-w-[36rem] text-[#f3f2ef] md:left-12 md:right-auto md:top-36 lg:left-[6.8%] lg:top-[26%] lg:w-[42%] lg:max-w-[40rem]">
            <h1 className="serif text-balance text-[2.1rem] font-normal leading-[1.18] tracking-[0.02em] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.78rem]">
              Sagen Sie uns
              <br />
              was Sie umgibt
              <br />
              <span className="mt-8 block">
                <span className="lg:whitespace-nowrap">und wir sagen Ihnen</span>
                <br />
                wer Sie sind
              </span>
            </h1>
            <p className="mt-9 max-w-[24rem] text-[1.18rem] font-normal uppercase leading-[1.45] tracking-[0.14em]">
              DESIGN UND KUNST
              <br />
              FÜR INDIVIDUALISTEN.
            </p>
            <div className="mt-12 grid gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:flex">
              <Link className="flex h-[62px] shrink-0 items-center justify-center border border-[#f3f2ef]/90 px-6 text-center transition hover:bg-[#f3f2ef] hover:text-black sm:w-[230px]" href="/shop">
                Shop entdecken
              </Link>
              <Link className="flex h-[62px] shrink-0 items-center justify-center border border-[#f3f2ef]/90 px-6 text-center transition hover:bg-[#f3f2ef] hover:text-black sm:w-[272px]" href="/collections">
                Kollektionen ansehen
              </Link>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 font-sans md:px-8 lg:bottom-[5.4%] lg:px-[2.7%] lg:pb-0">
            <div className="mx-auto grid max-w-none auto-cols-[9.5rem] grid-flow-col grid-rows-2 overflow-x-auto border-l border-t border-[#f3f2ef]/25 bg-[#0f0f0e]/10 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-4 sm:overflow-hidden lg:grid-cols-8">
              {visibleShopCategories.map((item) => (
                <Link
                  className="flex min-h-[55px] items-center justify-center border-b border-r border-[#f3f2ef]/25 px-3 text-center font-sans text-[0.66rem] font-medium uppercase leading-tight tracking-[0.14em] transition hover:bg-white/10 md:px-4"
                  href={getShopPath("de", item.slug)}
                  key={item.slug}
                >
                  <span className={`whitespace-nowrap font-sans text-white ${item.title === "Collectible Design" ? "text-[0.6rem] tracking-[0.12em]" : ""}`}>{dictionary.shop.categories[item.title] ?? item.label ?? item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredCommerceProduct ? (
        <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <Link
              className="group block"
              href={getProductPath("de", featuredCommerceProduct.categorySlug, featuredCommerceProduct.slug)}
            >
              <div className="relative aspect-[3/2] overflow-hidden border hairline bg-[#f8f8f6]">
                {featuredCommerceProduct.images?.[0] ? (
                  <Image
                    alt={featuredCommerceProduct.images[0].alt}
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    src={featuredCommerceProduct.images[0].src}
                  />
                ) : null}
              </div>
            </Link>
            <div className="max-w-2xl">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Ausgewähltes Objekt</p>
              <p className="mt-7 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">
                {featuredCommerceProduct.category}
              </p>
              <h2 className="serif mt-3 text-balance text-2xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-3xl">
                <Link href={getProductPath("de", featuredCommerceProduct.categorySlug, featuredCommerceProduct.slug)}>
                  {featuredCommerceProduct.title}
                </Link>
              </h2>
              <p className="mt-5 text-sm text-[#353b3e]">{featuredCommerceProduct.price}</p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#4b5356]">
                {featuredCommerceProduct.description}
              </p>
              <Link
                className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]"
                href={getProductPath("de", featuredCommerceProduct.categorySlug, featuredCommerceProduct.slug)}
              >
                Zum Objekt
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Neu eingetroffen</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Möbel, Kunstwerke, Objekte, Leuchten, Teppiche und Editionen</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/shop">
              Zum Shop
            </Link>
          </div>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 8).map((item, index) => (
              <article className="group" key={item.title}>
                <div className="overflow-hidden border hairline bg-[#f8f8f6]">
                  <img
                    alt={item.title}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={productImages[index % productImages.length]}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.maker}</p>
                    <h3 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{item.title}</h3>
                  </div>
                  <p className="shrink-0 text-sm text-[#353b3e]">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e8eceb] px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Ausgewählte Arbeiten</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Objekte, Kunstwerke und Editionen mit besonderer Präsenz</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/shop">
              Arbeiten ansehen
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {selectedWorks.map((work, index) => (
              <Link className="group" href={work.href} key={work.title}>
                <div className="overflow-hidden bg-[#f7f7f5]">
                  <img
                    alt={work.title}
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={work.image}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-5 border-t border-black/15 pt-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#667174]">
                      Arbeit 0{index + 1}
                    </p>
                    <h3 className="serif mt-2 text-lg leading-snug tracking-[0.08em]">{work.title}</h3>
                  </div>
                  <p className="max-w-[8rem] text-right text-xs leading-5 text-[#4b5356]">{work.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b hairline bg-[#f3f2ef]">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 border-b hairline pb-7 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Objekte & Editionen</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">
                Kleinere Arbeiten für Einstiegskäufe und präzise Akzente im Raum
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
              Vasen, Schalen, Keramikobjekte, Untersetzer, Kerzenhalter,
              Glasobjekte und kleine Editionen im Bereich von ca. EUR 100 bis
              1.000.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {smallObjects.map((item, index) => (
              <Link className="group" href="/shop" key={item.title}>
                <div className="overflow-hidden border hairline bg-[#f8f8f6]">
                  <img
                    alt={item.title}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={item.image}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#667174]">
                    {item.type} 0{index + 1}
                  </p>
                  <h3 className="serif mt-2 text-base leading-snug tracking-[0.08em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#353b3e]">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Arbeit einreichen</p>
            <h2 className="serif mt-4 text-xl font-normal leading-snug tracking-[0.08em]">
              Arbeit einreichen
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-sm leading-7 text-[#4b5356]">
              Wir interessieren uns für außergewöhnliche Arbeiten aus Kunst,
              Design und Objektkultur.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5356]">
              Wenn Sie eine Arbeit, Edition, Kollektion, Leuchte, ein
              Möbelstück oder ein Objekt einreichen möchten, freuen wir uns
              über Ihre Nachricht.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5356]">
              Jede Einsendung wird individuell geprüft. Eine Aufnahme erfolgt
              ausschließlich nach kuratorischer Auswahl.
            </p>
            <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/arbeit-einreichen">
              Arbeit einreichen
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f3f2ef] px-5 py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div className="max-w-[28rem]">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Orientierung</p>
              <h2 className="serif mt-4 text-balance text-base leading-snug tracking-[0.08em] lg:text-lg">
                Einstiege in Sortiment, Kollektionen, Journal und Commissions.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {platformAreas.map((area, index) => (
                <Link
                  className="grid min-h-44 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]"
                  href={area.href}
                  key={area.title}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#667174]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="serif text-base leading-snug tracking-[0.08em]">{area.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#4b5356]">{area.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Kuratierte Kollektionen</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Einstiege in den Shop</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/collections">
              Kollektionen ansehen
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {collections.map((item, index) => (
              <Link className="group grid min-h-80 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]" href="/collections" key={item.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">
                  Kollektion 0{index + 1}
                </p>
                <div>
                  <img
                    alt={item.title}
                    className="mb-6 h-32 w-full object-cover"
                    src={collectionImages[index % collectionImages.length]}
                  />
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Materialbibliothek</p>
            <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">Materialien als Basis für Auswahl und Wert.</h2>
            <Link className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/materials">
              Materialien entdecken
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <Link className="border hairline bg-[#f3f2ef] p-5" href="/materials" key={material.name}>
                <div className={`mb-5 h-24 ${material.palette}`} />
                <h3 className="serif text-xl tracking-[0.08em]">{material.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y hairline bg-[#f3f2ef]">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Journal & Inspiration</p>
              <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">Objektgeschichten, Materialien und Räume.</h2>
            </div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {stories.map((story) => (
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href="/journal" key={story.title}>
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">{story.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#667174]">Lesen</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-2">
          <article className="border hairline bg-[#11100f] p-8 text-[#f3f2ef] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9fc6e3]">Commissions & Collaborations</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">Für Architekten, Interior Designer, Hotels und Projektkunden.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">
              Für Projektbeschaffung, reservierte Editionen, Materialauswahl
              und kuratierte Objektlisten.
            </p>
            <Link className="mt-8 inline-block border border-[#f3f2ef] px-6 py-3 text-xs uppercase tracking-[0.2em]" href="/trade">
              Anfrage senden
            </Link>
          </article>
          <article className="border hairline bg-[#e8eceb] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Newsletter</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">Früher Zugang zu neuen Objekten und privaten Editionen.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#f3f2ef] px-4 py-4 text-sm text-[#667174]">
                E-Mail-Adresse
              </div>
              <Link className="border border-black bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-white" href="/journal">
                Anmelden
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
