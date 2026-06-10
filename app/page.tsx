import Link from "next/link";
import { artworks } from "./data/artworks";
import { collections } from "./data/collections";
import { materialCards } from "./data/materials";
import { products } from "./data/products";
import { stories } from "./data/stories";

const platformAreas = [
  {
    title: "Shop",
    description: "Möbel, Leuchten, Kunst, Teppiche, Objekte, Tabletop und Editionen entdecken.",
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
    href: "/stories",
  },
  {
    title: "Trade",
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
    type: "Tabletop",
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
      <section className="border-b hairline bg-[#f3f2ef] px-5 pb-20 pt-10 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:min-h-[720px] lg:grid-cols-[0.36fr_0.64fr] lg:items-center xl:gap-8">
          <div className="flex max-w-[33rem] flex-col self-center lg:translate-y-8 lg:pr-0">
            <h1 className="serif text-balance text-[1.45rem] font-normal leading-[1.22] text-[#10100f] md:text-[1.85rem] lg:text-[2.12rem]">
              Sagen Sie uns
              <br />
              was Sie umgibt
              <br />
              <span className="mt-6 block">
                und wir sagen Ihnen
                <br />
                wer Sie sind
              </span>
            </h1>
            <p className="mt-6 max-w-[30rem] text-[0.98rem] leading-7 text-[#353839] md:text-base md:leading-8">
              Möbel, Kunstwerke, Objekte, Leuchten, Teppiche und Editionen
              ausgewählter Künstler, Ateliers und Hersteller.
            </p>
            <div className="mt-14 flex flex-col gap-4 text-xs uppercase tracking-[0.2em] text-[#10100f] sm:flex-row sm:gap-8">
              <Link className="border-b border-black/40 pb-2 transition hover:border-black" href="/shop">
                Shop entdecken
              </Link>
              <Link className="border-b border-black/20 pb-2 text-[#353b3e] transition hover:border-black hover:text-[#10100f]" href="/collections">
                Kollektionen ansehen
              </Link>
            </div>
          </div>
          <div className="self-stretch lg:-mr-10 lg:py-0">
            <div className="h-full bg-[#e7ecef] p-0">
              <img
                alt="Fotografie eines LC2-Sessels in architektonischem Interior-Kontext"
                className="h-full min-h-[520px] w-full object-cover object-[58%_59%] lg:min-h-[720px]"
                src="/images/hero-lc2-blue.jpg"
              />
            </div>
          </div>
        </div>
      </section>

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
            {products.map((item, index) => (
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
                Einstiege in Sortiment, Kollektionen, Journal und Trade.
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
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href="/stories" key={story.title}>
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
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9fc6e3]">Trade</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">Für Architekten, Interior Designer, Hotels und Projektkunden.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">
              Für Projektbeschaffung, reservierte Editionen, Materialauswahl
              und kuratierte Objektlisten.
            </p>
            <Link className="mt-8 inline-block border border-[#f3f2ef] px-6 py-3 text-xs uppercase tracking-[0.2em]" href="/trade">
              Trade anfragen
            </Link>
          </article>
          <article className="border hairline bg-[#e8eceb] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Newsletter</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">Früher Zugang zu neuen Objekten und privaten Editionen.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#f3f2ef] px-4 py-4 text-sm text-[#667174]">
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
