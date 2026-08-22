import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBrandBySlug, getProductsByBrandSlug } from "../../../data/brands";
import { isLocale, locales, type Locale } from "../../../lib/i18n";

type AtelierPageProps = {
  params: Promise<{ locale: string; brand: string }>;
};

function getAtelierCopy(locale: Locale) {
  if (locale === "en") {
    return {
      back: "Back to Ateliers",
      eyebrow: "About 54COUTURE",
      title: "Cultivating spaces of presence.",
      paragraphs: [
        "Founded by Marlene, 54COUTURE is a Berlin label shaped by a fascination with space, materiality and artistic expression. Her work sits at the intersection of art, material and space, creating collectible pieces with emotional and architectural presence.",
        "Working with leather, hair-on-hide and tactile surfaces, 54COUTURE transforms natural material into rugs, furniture and objects. Each piece is made by hand in Europe and shaped by the individual texture, colour and character of the hide.",
        "The hides are responsibly sourced by-products of the European food industry and are reimagined as lasting works. Bold colour, couture craftsmanship and the signature purple backing make every original unmistakably 54COUTURE.",
      ],
      works: "Selected works",
      request: "Available on request",
    };
  }

  return {
    back: "Zurück zu Ateliers",
    eyebrow: "About 54COUTURE",
    title: "Räume mit Präsenz gestalten.",
    paragraphs: [
      "54COUTURE wurde von Marlene gegründet, die ihre Faszination für Raum, Materialität und künstlerischen Ausdruck in sammelbare Arbeiten übersetzt. Das Berliner Label bewegt sich an der Schnittstelle von Kunst, Material und Raum und schafft Stücke mit emotionaler und architektonischer Präsenz.",
      "Mit Leder, Kuhfell und haptischen Oberflächen verwandelt 54COUTURE natürliche Materialien in Teppiche, Möbel und Objekte. Jede Arbeit wird in Europa von Hand gefertigt und von der individuellen Textur, Farbe und Eigenart des Fells geprägt.",
      "Die Felle stammen verantwortungsvoll als Nebenprodukte aus der europäischen Lebensmittelindustrie und werden zu Arbeiten mit Bestand neu gedacht. Kräftige Farben, Couture-Handwerk und die charakteristische violette Rückseite machen jedes Original unverkennbar 54COUTURE.",
    ],
    works: "Ausgewählte Arbeiten",
    request: "Auf Anfrage",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, brand: "54couture" }));
}

export async function generateMetadata({ params }: AtelierPageProps): Promise<Metadata> {
  const { locale: rawLocale, brand: slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  const locale = rawLocale as Locale;
  const title = `${brand.name} | Atelier`;
  const description = brand.localized?.[locale]?.description ?? brand.description;
  const path = `/${locale}/ateliers/${brand.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: brand.heroImage ? { title, description, url: path, images: [{ url: brand.heroImage, alt: `${brand.name} atelier` }] } : undefined,
    twitter: brand.heroImage ? { card: "summary_large_image", title, description, images: [brand.heroImage] } : undefined,
  };
}

export default async function AtelierDetailPage({ params }: AtelierPageProps) {
  const { locale: rawLocale, brand: slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const brand = getBrandBySlug(slug);
  if (!brand?.heroImage) notFound();

  const locale = rawLocale as Locale;
  const copy = getAtelierCopy(locale);
  const products = getProductsByBrandSlug(brand.slug);
  const basePath = `/${locale}/ateliers`;

  return (
    <main className="bg-[#f3f2ef]">
      <section className="px-5 pb-10 pt-8 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[1540px]">
          <Link className="text-xs uppercase tracking-[0.2em] underline underline-offset-8" href={basePath}>{copy.back}</Link>
          <div className="mt-9 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#181615]">
              <Image alt={`${brand.name} atelier`} className="object-cover" fill priority sizes="(min-width: 1024px) 55vw, 100vw" src={brand.heroImage} />
            </div>
            <div className="pb-2">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{copy.eyebrow}</p>
              <h1 className="serif mt-4 text-4xl tracking-[0.08em] lg:text-5xl">{brand.name}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#353b3e]">{brand.localized?.[locale]?.description ?? brand.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.27fr_0.3fr_0.43fr]">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{copy.eyebrow}</p>
            <h2 className="serif mt-4 max-w-md text-2xl leading-snug tracking-[0.08em] lg:text-3xl">{copy.title}</h2>
          </div>
          {brand.founderImage ? (
            <div className="relative aspect-[2/3] overflow-hidden bg-[#d8d2c8]">
              <Image alt="Marlene, Gründerin und Designerin von 54COUTURE" className="object-cover" fill sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw" src={brand.founderImage} />
            </div>
          ) : null}
          <div className="grid max-w-2xl gap-5 text-sm leading-7 text-[#4b5356]">
            {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      {products.length ? (
        <section className="px-5 py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[1540px]">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{copy.works}</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {products.map((product) => (
                <Link className="group border hairline bg-[#f7f7f5] p-5" href={`/${locale}/shop/${product.slug}`} key={product.slug}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8eceb]">
                    {product.images?.[0] ? <Image alt={product.images[0].alt} className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]" fill sizes="(min-width: 768px) 45vw, 100vw" src={product.images[0].src} /> : null}
                  </div>
                  <h2 className="serif mt-5 text-xl tracking-[0.07em]">{product.title}</h2>
                  <p className="mt-3 text-sm text-[#4b5356]">{copy.request}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
