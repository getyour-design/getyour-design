import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../data/dictionaries";
import { collections } from "../data/collections";
import { materialCards } from "../data/materials";
import { products, visibleShopCategories } from "../data/products";
import { stories } from "../data/stories";
import { getProductPath, getShopPath, localizeHref, type Locale } from "../lib/i18n";
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

const featuredCommerceProduct = products.find((product) => product.slug === "sitzobjekt-kuhfell");

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
  const featuredProductContent = featuredCommerceProduct?.localized?.[locale];
  const featuredProductImage = featuredProductContent?.images[0] ?? featuredCommerceProduct?.images?.[0];
  const featuredProductTitle = featuredProductContent?.title ?? featuredCommerceProduct?.title;
  const featuredProductDescription = featuredProductContent?.shortDescription ?? featuredCommerceProduct?.description;
  const featuredProductHref = featuredCommerceProduct
    ? getProductPath(locale, featuredCommerceProduct.categorySlug, featuredCommerceProduct.slug)
    : undefined;

  return (
    <main className="bg-[#f3f2ef]">
      <section className="bg-[#8d8376]">
        <div className="relative overflow-hidden bg-[#8d8376]">
          <Image
            alt="GETYOUR.DESIGN interior context"
            className="block h-[760px] w-full object-cover object-[50%_48%] md:h-[800px] lg:h-auto lg:object-fill"
            height={1024}
            priority
            sizes="100vw"
            src="/images/hero-editorial.png"
            width={1536}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,0.66)_0%,rgba(10,10,9,0.48)_24%,rgba(10,10,9,0.12)_40%,rgba(10,10,9,0)_50%)]" aria-hidden="true" />
          <div className="absolute left-6 right-6 top-28 z-10 max-w-[36rem] text-[#f3f2ef] md:left-12 md:right-auto md:top-36 lg:left-[6.8%] lg:top-[26%] lg:w-[42%] lg:max-w-[40rem] [@media_(min-width:1024px)_and_(max-height:900px)]:top-[24%]">
            <h1 className="serif text-balance text-[2.1rem] font-normal leading-[1.18] tracking-[0.02em] md:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.78rem] [@media_(min-width:1024px)_and_(max-height:900px)]:!text-[2.36rem] [@media_(min-width:1024px)_and_(max-height:900px)]:!leading-[1.14]">
              {heroLines[0]}
              <br />
              {heroLines[1]}
              <br />
              <span className="mt-8 block [@media_(min-width:1024px)_and_(max-height:900px)]:mt-6">
                <span className="lg:whitespace-nowrap">{heroLines[2]}</span>
                <br />
                {heroLines[3]}
              </span>
            </h1>
            <p className="mt-9 max-w-[24rem] text-[1.18rem] font-normal uppercase leading-[1.45] tracking-[0.14em] [@media_(min-width:1024px)_and_(max-height:900px)]:mt-7 [@media_(min-width:1024px)_and_(max-height:900px)]:!text-[1.02rem] [@media_(min-width:1024px)_and_(max-height:900px)]:!leading-[1.34]">
              {dictionary.home.tagline}
            </p>
            <div className="mt-12 grid gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:flex [@media_(min-width:1024px)_and_(max-height:900px)]:mt-9 [@media_(min-width:1024px)_and_(max-height:900px)]:gap-3">
              <Link className="flex h-[62px] shrink-0 items-center justify-center border border-[#f3f2ef]/90 px-6 text-center transition hover:bg-[#f3f2ef] hover:text-black sm:w-[230px] [@media_(min-width:1024px)_and_(max-height:900px)]:h-[54px]" href={localizedHref("/shop", locale)}>
                {dictionary.home.primaryCta}
              </Link>
              <Link className="flex h-[62px] shrink-0 items-center justify-center border border-[#f3f2ef]/90 px-6 text-center transition hover:bg-[#f3f2ef] hover:text-black sm:w-[272px] [@media_(min-width:1024px)_and_(max-height:900px)]:h-[54px]" href={localizedHref("/collections", locale)}>
                {dictionary.home.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 font-sans md:px-8 lg:bottom-[5.4%] lg:px-[2.7%] lg:pb-0 [@media_(min-width:1024px)_and_(max-height:900px)]:bottom-[3.6%]" aria-label={dictionary.home.shopLinksTitle}>
            <div className="mx-auto grid max-w-none auto-cols-[9.5rem] grid-flow-col grid-rows-2 overflow-x-auto border-l border-t border-[#f3f2ef]/25 bg-[#0f0f0e]/10 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-4 sm:overflow-hidden lg:grid-cols-8">
              {visibleShopCategories.map((item) => (
                <Link
                  className="flex min-h-[55px] items-center justify-center border-b border-r border-[#f3f2ef]/25 px-3 text-center font-sans text-[0.66rem] font-medium uppercase leading-tight tracking-[0.14em] transition hover:bg-white/10 md:px-4 [@media_(min-width:1024px)_and_(max-height:900px)]:min-h-[48px] [@media_(min-width:1024px)_and_(max-height:900px)]:text-[0.62rem]"
                  href={getShopPath(locale, item.slug)}
                  key={item.slug}
                >
                  <span className={`whitespace-nowrap font-sans text-white ${item.title === "Collectible Design" ? "text-[0.6rem] tracking-[0.12em]" : ""}`}>{dictionary.shop.categories[item.title] ?? item.label ?? item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredCommerceProduct && featuredProductHref ? (
        <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <Link className="group block" href={featuredProductHref}>
              <div className="relative aspect-[3/2] overflow-hidden border hairline bg-[#f8f8f6]">
                {featuredProductImage ? (
                  <Image
                    alt={featuredProductImage.alt}
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    src={featuredProductImage.src}
                  />
                ) : null}
              </div>
            </Link>
            <div className="max-w-2xl">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">
                {dictionary.home.featuredProductEyebrow}
              </p>
              <p className="mt-7 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">
                {dictionary.shop.categories[featuredCommerceProduct.category] ?? featuredCommerceProduct.category}
              </p>
              <h2 className="serif mt-3 text-balance text-2xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-3xl">
                <Link href={featuredProductHref}>{featuredProductTitle}</Link>
              </h2>
              <p className="mt-5 text-sm text-[#353b3e]">{featuredCommerceProduct.price}</p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#4b5356]">
                {featuredProductDescription}
              </p>
              <Link
                className="mt-8 inline-block border-b border-black pb-2 text-xs uppercase tracking-[0.2em]"
                href={featuredProductHref}
              >
                {dictionary.home.featuredProductLink}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

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
              <Link className="group grid min-h-80 content-between border hairline bg-[#f7f7f5] p-5 transition hover:bg-[#f8f8f6]" href={localizedHref("/collections", locale)} key={item.key}>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
                <div>
                  <img
                    alt={dictionary.collections[item.key]?.title ?? item.title}
                    className="mb-6 h-32 w-full object-cover"
                    src={collectionImages[index % collectionImages.length]}
                  />
                  <h3 className="serif text-xl leading-snug tracking-[0.08em]">
                    {dictionary.collections[item.key]?.title ?? item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4b5356]">
                    {dictionary.collections[item.key]?.description ?? item.description}
                  </p>
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
                <h3 className="serif text-xl tracking-[0.08em]">{dictionary.home.materialLabels[material.name] ?? material.name}</h3>
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
