import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Home from "../page";
import { artworks } from "../data/artworks";
import { collections } from "../data/collections";
import { materialCards } from "../data/materials";
import { products } from "../data/products";
import { stories } from "../data/stories";
import { getAlternateLanguages, getShopPath, isLocale, localizedRoutes, type Locale } from "../lib/i18n";
import { getEnglishProductTitle } from "../lib/productTitles";

type LocalizedHomeProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export async function generateMetadata({ params }: LocalizedHomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: locale === "en" ? "Curated Design, Art and Objects" : undefined,
    description:
      locale === "en"
        ? "GETYOUR.DESIGN is a curated platform for contemporary design, art, objects, lighting, rugs and editions."
        : undefined,
    alternates: {
      canonical: localizedRoutes.home[locale],
      languages: getAlternateLanguages("home"),
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    return <EnglishHome />;
  }

  return <Home />;
}

const englishShopHubLinks = [
  { label: "Furniture", href: getShopPath("en", "moebel") },
  { label: "Rugs", href: getShopPath("en", "teppiche") },
  { label: "Lighting", href: getShopPath("en", "leuchten") },
  { label: "Accessories", href: getShopPath("en", "tabletop") },
  { label: "Objects", href: getShopPath("en", "objekte") },
  { label: "Artworks", href: getShopPath("en", "kunst") },
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
    meta: "Natural stone, object, interior",
    image: productImages[1],
    href: "/en/shop",
  },
  {
    title: artworks[1].title,
    meta: "Bronze, sculpture, edition",
    image: productImages[5],
    href: "/en/art",
  },
  {
    title: products[3].title,
    meta: "Paper, structure, wall work",
    image: productImages[3],
    href: "/en/art",
  },
  {
    title: products[5].title,
    meta: "Lighting, bronze, project",
    image: productImages[5],
    href: "/en/shop",
  },
];

const smallObjects = [
  {
    title: "Vase aus glasierter Keramik",
    type: "Ceramic object",
    price: "EUR 180",
    image: productImages[2],
  },
  {
    title: "Schale aus hellem Steinzeug",
    type: "Accessories",
    price: "EUR 240",
    image: productImages[0],
  },
  {
    title: "Untersetzer aus Naturstein",
    type: "Object",
    price: "EUR 120",
    image: productImages[1],
  },
  {
    title: "Kerzenhalter aus patinierter Bronze",
    type: "Bronze object",
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

const englishAreas = [
  {
    title: "Design",
    text: "Furniture, lighting, rugs and distinctive objects selected for lasting rooms.",
    href: "/en/shop",
  },
  {
    title: "Art",
    text: "Artworks, editions and positions with an independent point of view.",
    href: "/en/art",
  },
  {
    title: "Collections",
    text: "Curated entries by mood, material and object type.",
    href: "/en/collections",
  },
  {
    title: "Ateliers",
    text: "Makers, workshops and production contexts behind selected works.",
    href: "/en/ateliers",
  },
  {
    title: "Journal",
    text: "Interviews, essays and background stories connected to the collection.",
    href: "/en/journal",
  },
];

const englishCollectionTitles = [
  "Material and Surface",
  "Quiet Rooms",
  "Collectible Design",
  "Editions and Artworks",
  "Seating and Design Furniture",
  "Natural Materials",
];

const englishStoryTitles = [
  "How a Single Object Shapes a Room",
  "Materials That Gain Over Time",
  "When Design Becomes Collectible",
  "Where Works Are Made",
];

function EnglishHome() {
  return (
    <main className="bg-[#f3f2ef]">
      <section className="border-b hairline bg-[#f3f2ef] px-5 pb-6 pt-10 lg:px-10 lg:pb-8 lg:pt-12">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:min-h-[720px] lg:grid-cols-[0.36fr_0.64fr] lg:items-center xl:gap-8">
          <div className="flex max-w-[33rem] flex-col self-center lg:translate-y-8 lg:pr-0">
            <h1 className="serif text-balance text-[1.45rem] font-normal leading-[1.22] text-[#10100f] md:text-[1.85rem] lg:text-[2.12rem]">
              Tell us
              <br />
              what surrounds you
              <br />
              <span className="mt-6 block">
                and we will tell you
                <br />
                who you are
              </span>
            </h1>
            <p className="serif mt-10 max-w-[34rem] text-[1.28rem] font-normal leading-snug tracking-[0.06em] text-[#10100f] md:text-[1.45rem] lg:whitespace-nowrap">
              Design and art for individualists.
            </p>
            <div className="mt-14 grid gap-3 text-xs uppercase tracking-[0.2em] text-[#10100f] sm:grid-cols-2">
              <Link className="border hairline bg-[#f7f7f5] px-5 py-4 text-center transition hover:bg-[#f8f8f6] hover:text-black" href="/en/shop">
                Explore Shop
              </Link>
              <Link className="border hairline bg-[#f7f7f5] px-5 py-4 text-center text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href="/en/collections">
                View Collections
              </Link>
            </div>
          </div>
          <div className="self-stretch lg:-mr-10 lg:py-0">
            <div className="h-full bg-[#e7ecef] p-0">
              <img
                alt="Photograph of an LC2 chair in an architectural interior context"
                className="h-full min-h-[520px] w-full object-cover object-[58%_59%] lg:min-h-[720px]"
                src="/images/hero-lc2-blue.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f3f2ef] px-5 py-6 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {englishShopHubLinks.map((item) => (
            <Link
              className="border hairline bg-[#f7f7f5] px-4 py-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">New Arrivals</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Furniture, artworks, objects, lighting, rugs and editions</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/en/shop">
              Design Shop
            </Link>
          </div>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 8).map((item, index) => (
              <article className="group" key={item.title}>
                <div className="overflow-hidden border hairline bg-[#f8f8f6]">
                  <img
                    alt={getEnglishProductTitle(item.title)}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={productImages[index % productImages.length]}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{item.maker.replace("Künstlerposition", "Artist Position")}</p>
                    <h3 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getEnglishProductTitle(item.title)}</h3>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Selected Works</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Objects, artworks and editions with presence</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/en/shop">
              View Works
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {selectedWorks.map((work, index) => (
              <Link className="group" href={work.href} key={work.title}>
                <div className="overflow-hidden bg-[#f7f7f5]">
                  <img
                alt={getEnglishProductTitle(work.title)}
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={work.image}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-5 border-t border-black/15 pt-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#667174]">
                      Work 0{index + 1}
                    </p>
                    <h3 className="serif mt-2 text-lg leading-snug tracking-[0.08em]">{getEnglishProductTitle(work.title)}</h3>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Objects & Editions</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">
                Smaller works for first acquisitions and precise accents
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
              Vases, bowls, ceramic objects, trays, candleholders, glass objects
              and small editions from approximately EUR 100 to 1,000.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {smallObjects.map((item, index) => (
              <Link className="group" href="/en/shop" key={item.title}>
                <div className="overflow-hidden border hairline bg-[#f8f8f6]">
                  <img
                    alt={getEnglishProductTitle(item.title)}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={item.image}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#667174]">
                    {item.type} 0{index + 1}
                  </p>
                  <h3 className="serif mt-2 text-base leading-snug tracking-[0.08em]">{getEnglishProductTitle(item.title)}</h3>
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
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Submit Work</p>
            <h2 className="serif mt-4 text-xl font-normal leading-snug tracking-[0.08em]">
              Submit a work
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-sm leading-7 text-[#4b5356]">
              We are interested in exceptional works from art, design and object culture.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5356]">
              If you would like to submit a work, edition, collection, light,
              piece of furniture or object, we welcome your note.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5356]">
              Every submission is reviewed individually. Inclusion is based on
              curatorial selection.
            </p>
            <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/en/submit-work">
              Submit Work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f3f2ef] px-5 py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div className="max-w-[28rem]">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Orientation</p>
              <h2 className="serif mt-4 text-balance text-base leading-snug tracking-[0.08em] lg:text-lg">
                Entries into design, art, collections, ateliers and journal.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {englishAreas.map((area, index) => (
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
                    <p className="mt-3 text-sm leading-6 text-[#4b5356]">{area.text}</p>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Curated Collections</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">Entries into the shop</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href="/en/collections">
              View Collections
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {collections.map((item, index) => (
              <Link className="group grid min-h-80 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]" href="/en/collections" key={item.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">
                  Collection 0{index + 1}
                </p>
                <div>
                  <img
                    alt={englishCollectionTitles[index] ?? item.title}
                    className="mb-6 h-32 w-full object-cover"
                    src={collectionImages[index % collectionImages.length]}
                  />
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">{englishCollectionTitles[index] ?? item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Ateliers</p>
            <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">Origin, material and craft behind the works.</h2>
            <Link className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/en/ateliers">
              Meet Ateliers
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <Link className="border hairline bg-[#f3f2ef] p-5" href="/en/ateliers" key={material.name}>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Journal</p>
              <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">Object stories, materials and rooms.</h2>
            </div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {stories.map((story, index) => (
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href="/en/journal" key={story.title}>
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">{englishStoryTitles[index] ?? story.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#667174]">Read</span>
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
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">For architects, interior designers, hotels and project clients.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">
              For project sourcing, reserved editions, material selection and
              curated object lists.
            </p>
            <Link className="mt-8 inline-block border border-[#f3f2ef] px-6 py-3 text-xs uppercase tracking-[0.2em]" href="/en/trade">
              Send Inquiry
            </Link>
          </article>
          <article className="border hairline bg-[#e8eceb] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Newsletter</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">Early access to new objects and private editions.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#f3f2ef] px-4 py-4 text-sm text-[#667174]">
                Email address
              </div>
              <Link className="border border-black bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-white" href="/en/journal">
                Sign Up
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
