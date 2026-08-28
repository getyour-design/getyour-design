import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../data/dictionaries";
import { products } from "../data/products";
import { getProductPath, getShopPath, type Locale } from "../lib/i18n";
import { getLocalizedProductPrice } from "../lib/productTitles";

const artCopy: Record<Locale, { eyebrow: string; title: string; description: string }> = {
  de: {
    eyebrow: "Kunst",
    title: "Kunstwerke, Papierarbeiten, Skulpturen und Editionen.",
    description: "Ausgewählte Arbeiten für Räume, Sammlungen und Interieurs mit eigenem Blick.",
  },
  en: {
    eyebrow: "Art",
    title: "Artworks, works on paper, sculptures and editions.",
    description: "Selected works for rooms, collections and interiors with an independent point of view.",
  },
  fr: {
    eyebrow: "Art",
    title: "Œuvres, travaux sur papier, sculptures et éditions.",
    description: "Une sélection d’œuvres pour les espaces, les collections et les intérieurs au regard singulier.",
  },
  es: {
    eyebrow: "Arte",
    title: "Obras, trabajos sobre papel, esculturas y ediciones.",
    description: "Una selección de obras para espacios, colecciones e interiores con una mirada propia.",
  },
  zh: {
    eyebrow: "艺术",
    title: "艺术作品、纸上作品、雕塑与限量版。",
    description: "为居所、收藏与室内空间精选的独立艺术作品。",
  },
  ar: {
    eyebrow: "الفن",
    title: "أعمال فنية وأعمال على الورق ومنحوتات وإصدارات.",
    description: "أعمال مختارة للمساحات والمجموعات والديكورات الداخلية برؤية مستقلة.",
  },
};

const artworkDetailsFallback: Partial<Record<Locale, Record<string, string>>> = {
  en: { "sebastian-schrader-bauernopfer": "Oil on canvas · 180 × 240 cm" },
  fr: { "sebastian-schrader-bauernopfer": "Huile sur toile · 180 × 240 cm" },
  es: { "sebastian-schrader-bauernopfer": "Óleo sobre lienzo · 180 × 240 cm" },
  zh: { "sebastian-schrader-bauernopfer": "布面油画 · 180 × 240 厘米" },
  ar: { "sebastian-schrader-bauernopfer": "زيت على قماش · 180 × 240 سم" },
};

const artworkImageDimensions: Record<string, { width: number; height: number }> = {
  "michael-fischer-art-untitled-2024": { width: 1023, height: 1537 },
  "stefan-hirsig-die-erklaerung-der-welt": { width: 1187, height: 1326 },
  "silke-weyer-paso-due": { width: 567, height: 567 },
  "silke-weyer-toro-blanco": { width: 567, height: 589 },
  "gudrun-bruene-bernhard-heisig": { width: 1080, height: 1456 },
  "sebastian-schrader-bauernopfer": { width: 3508, height: 2616 },
  "christian-achenbach-guckst-du": { width: 1481, height: 1772 },
};

const artProducts = products.filter((product) => product.category === "Kunst");

export function LocalizedArtPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = artCopy[locale];

  return (
    <main>
      <section className="section-pad border-b hairline bg-[#f3f2ef]">
        <div className="mx-auto max-w-[1540px]">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{copy.eyebrow}</p>
          <h1 className="serif mt-4 max-w-3xl text-3xl leading-tight tracking-[0.08em] md:text-4xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4b5356]">{copy.description}</p>
        </div>
      </section>

      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto max-w-[1540px] columns-1 gap-5 sm:columns-2">
          {artProducts.map((product) => {
            const localizedContent = locale === "de" ? undefined : product.localized?.[locale];
            const image = localizedContent?.images?.[0] ?? product.images?.[0];
            const title = localizedContent?.cardTitle ?? localizedContent?.title ?? product.cardTitle ?? product.title;
            const description = localizedContent?.shortDescription ?? product.description;
            const materials = (localizedContent?.materialDetails ?? product.materialDetails ?? [product.material])
              .filter((detail) => !/^\d{4}$/.test(detail));
            const localizedDimensions = localizedContent?.dimensionsDetails;
            const dimensions = localizedDimensions?.length === 1 && !/\d/.test(localizedDimensions[0])
              ? localizedDimensions[0]
              : product.dimensions;
            const artworkDetails = artworkDetailsFallback[locale]?.[product.slug]
              ?? [...materials, dimensions].join(" · ");
            const imageDimensions = artworkImageDimensions[product.slug] ?? { width: 1200, height: 1200 };
            const href = product.pathMode === "nested"
              ? getProductPath(locale, product.categorySlug, product.slug)
              : getShopPath(locale, product.slug);

            return (
              <article className="mb-12 break-inside-avoid" key={product.slug}>
                <Link className="group block overflow-hidden bg-[#e2e1dd]" href={href}>
                  {image ? (
                    <Image
                      alt={image.alt || title}
                      className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.04]"
                      height={imageDimensions.height}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      src={image.src}
                      width={imageDimensions.width}
                    />
                  ) : null}
                </Link>
                <div className="mt-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{dictionary.shop.categories.Kunst ?? copy.eyebrow}</p>
                  <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">
                    <Link href={href}>{title}</Link>
                  </h2>
                  <p className="mt-0.5 text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-[#667174]">{artworkDetails}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-[#667174]">{product.maker}</p>
                  <p className="mt-3 text-sm leading-7 text-[#4b5356]">{description}</p>
                  <p className="pt-4 text-sm text-[#353b3e]">{getLocalizedProductPrice(product.price, locale)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
