import Link from "next/link";
import { getDictionary } from "../data/dictionaries";
import { collections } from "../data/collections";
import { materialCards } from "../data/materials";
import { products } from "../data/products";
import { stories } from "../data/stories";
import { getShopPath, localizeHref, type Locale } from "../lib/i18n";
import { getEnglishProductTitle } from "../lib/productTitles";

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

const shopHubLinks = [
  { label: "Möbel", slug: "moebel" },
  { label: "Teppiche", slug: "teppiche" },
  { label: "Leuchten", slug: "leuchten" },
  { label: "Tabletop", slug: "tabletop" },
  { label: "Objekte", slug: "objekte" },
  { label: "Kunst", slug: "kunst" },
];

function getProductTitle(locale: Locale, title: string, index: number) {
  if (locale === "de") {
    return title;
  }

  if (locale === "en") {
    return getEnglishProductTitle(title);
  }

  return `${getDictionary(locale).shop.genericProductTitle} ${String(index + 1).padStart(2, "0")}`;
}

export function LocalizedHomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const heroLines = dictionary.home.heroTitle;

  return (
    <main className="bg-[#f3f2ef]">
      <section className="border-b hairline bg-[#f3f2ef] px-5 pb-6 pt-10 lg:px-10 lg:pb-8 lg:pt-12">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:min-h-[720px] lg:grid-cols-[0.36fr_0.64fr] lg:items-center xl:gap-8">
          <div className="flex max-w-[33rem] flex-col self-center lg:translate-y-8 lg:pr-0">
            <h1 className="serif text-balance text-[1.45rem] font-normal leading-[1.22] text-[#10100f] md:text-[1.85rem] lg:text-[2.12rem]">
              {heroLines[0]}
              <br />
              {heroLines[1]}
              <br />
              <span className="mt-6 block">
                {heroLines[2]}
                <br />
                {heroLines[3]}
              </span>
            </h1>
            <p className="serif mt-12 max-w-[24rem] text-[1.05rem] font-normal leading-[1.45] tracking-[0.06em] text-[#10100f] md:text-[1.2rem]">
              {dictionary.home.tagline}
            </p>
            <div className="mt-12 grid gap-3 text-xs uppercase tracking-[0.2em] text-[#10100f] sm:grid-cols-2">
              <Link className="border hairline bg-[#f7f7f5] px-5 py-4 text-center transition hover:bg-[#f8f8f6] hover:text-black" href={localizedHref("/shop", locale)}>
                {dictionary.home.primaryCta}
              </Link>
              <Link className="border hairline bg-[#f7f7f5] px-5 py-4 text-center text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href={localizedHref("/collections", locale)}>
                {dictionary.home.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="self-stretch lg:-mr-10 lg:py-0">
            <div className="h-full bg-[#e7ecef] p-0">
              <img
                alt="GETYOUR.DESIGN interior context"
                className="h-full min-h-[520px] w-full object-cover object-[58%_59%] lg:min-h-[720px]"
                src="/images/hero-lc2-blue.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f3f2ef] px-5 py-6 lg:px-10" aria-label={dictionary.home.shopLinksTitle}>
        <div className="mx-auto grid max-w-[1540px] gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {shopHubLinks.map((item) => (
            <Link
              className="border hairline bg-[#f7f7f5] px-4 py-5 text-center text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black"
              href={getShopPath(locale, item.slug)}
              key={item.slug}
            >
              {dictionary.shop.categories[item.label] ?? item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-col justify-between gap-6 border-b hairline pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.newArrivalsEyebrow}</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">{dictionary.home.newArrivalsTitle}</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href={localizedHref("/shop", locale)}>
              {dictionary.home.shopCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 8).map((item, index) => (
              <article className="group" key={item.title}>
                <div className="overflow-hidden border hairline bg-[#f8f8f6]">
                  <img
                    alt={getProductTitle(locale, item.title, index)}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={productImages[index % productImages.length]}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.shop.categories[item.category] ?? item.category}</p>
                    <h3 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">{getProductTitle(locale, item.title, index)}</h3>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.selectedWorksEyebrow}</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">{dictionary.home.selectedWorksTitle}</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href={localizedHref("/shop", locale)}>
              {dictionary.home.selectedWorksCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((work, index) => (
              <Link className="group" href={localizedHref("/shop", locale)} key={work.title}>
                <div className="overflow-hidden bg-[#f7f7f5]">
                  <img
                    alt={getProductTitle(locale, work.title, index)}
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    src={productImages[index % productImages.length]}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-5 border-t border-black/15 pt-4">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
                    <h3 className="serif mt-2 text-lg leading-snug tracking-[0.08em]">{getProductTitle(locale, work.title, index)}</h3>
                  </div>
                  <p className="max-w-[8rem] text-right text-xs leading-5 text-[#4b5356]">{dictionary.shop.categories[work.category] ?? work.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.submitEyebrow}</p>
            <h2 className="serif mt-4 text-xl font-normal leading-snug tracking-[0.08em]">{dictionary.home.submitTitle}</h2>
          </div>
          <div className="max-w-3xl">
            {dictionary.home.submitText.map((text) => (
              <p className="mt-4 text-sm leading-7 text-[#4b5356]" key={text}>
                {text}
              </p>
            ))}
            <Link className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href={localizedHref("/arbeit-einreichen", locale)}>
              {dictionary.home.submitCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f3f2ef] px-5 py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div className="max-w-[28rem]">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.orientationEyebrow}</p>
              <h2 className="serif mt-4 text-balance text-base leading-snug tracking-[0.08em] lg:text-lg">
                {dictionary.home.orientationTitle}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dictionary.home.areas.map((area, index) => (
                <Link
                  className="grid min-h-44 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]"
                  href={localizedHref(area.href, locale)}
                  key={area.title}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.collectionsEyebrow}</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">{dictionary.home.collectionsTitle}</h2>
            </div>
            <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href={localizedHref("/collections", locale)}>
              {dictionary.home.collectionsCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-6">
            {collections.map((item, index) => (
              <Link className="group grid min-h-80 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]" href={localizedHref("/collections", locale)} key={item.title}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
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
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.materialsEyebrow}</p>
            <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">{dictionary.home.materialsTitle}</h2>
            <Link className="mt-7 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href={localizedHref("/ateliers", locale)}>
              {dictionary.home.materialsCta}
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materialCards.map((material) => (
              <Link className="border hairline bg-[#f3f2ef] p-5" href={localizedHref("/materials", locale)} key={material.name}>
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
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.journalEyebrow}</p>
              <h2 className="serif mt-4 text-xl leading-snug tracking-[0.08em]">{dictionary.home.journalTitle}</h2>
            </div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {stories.map((story, index) => (
                <Link className="grid gap-5 py-7 md:grid-cols-[1fr_auto] md:items-center" href={localizedHref("/journal", locale)} key={story.title}>
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">{dictionary.journal.titles[index] ?? story.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#667174]">{dictionary.home.journalRead}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-2">
          <article className="border hairline bg-[#11100f] p-8 text-[#f3f2ef] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9fc6e3]">{dictionary.home.tradeEyebrow}</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">{dictionary.home.tradeTitle}</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9d0c4]">{dictionary.home.tradeText}</p>
            <Link className="mt-8 inline-block border border-[#f3f2ef] px-6 py-3 text-xs uppercase tracking-[0.2em]" href={localizedHref("/trade", locale)}>
              {dictionary.home.tradeCta}
            </Link>
          </article>
          <article className="border hairline bg-[#e8eceb] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{dictionary.home.newsletterEyebrow}</p>
            <h2 className="serif mt-5 text-xl leading-snug tracking-[0.08em]">{dictionary.home.newsletterTitle}</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 border border-black/20 bg-[#f3f2ef] px-4 py-4 text-sm text-[#667174]">
                {dictionary.home.newsletterPlaceholder}
              </div>
              <Link className="border border-black bg-black px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-white" href={localizedHref("/journal", locale)}>
                {dictionary.home.newsletterCta}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function localizedHref(href: string, locale: Locale) {
  return localizeHref(href, locale);
}
