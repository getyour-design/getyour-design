import Link from "next/link";
import type { Locale } from "../lib/i18n";

type LuxuryCoastersPageProps = {
  locale: Locale;
};

const details = {
  en: {
    eyebrow: "Luxury Coasters",
    title: "Stone coasters as quiet objects for the table.",
    intro:
      "A considered landing page for natural stone coasters, small tabletop objects and refined gift-ready details within the GETYOUR.DESIGN world.",
    primaryCta: "Explore Accessories",
    secondaryCta: "Contact Studio",
    materialsTitle: "Materials, weight and surface",
    materialsText:
      "Natural stone, mineral tones and softened edges give small objects a sense of permanence. Each piece is understood less as decoration and more as a precise material accent.",
    packagingTitle: "Packaging and presentation",
    packagingText:
      "Coasters and small objects can be prepared for private gifting, interior projects or hospitality contexts. Packaging, quantities and availability are confirmed individually.",
    useTitle: "For rooms, projects and rituals",
    useText:
      "Designed for side tables, dining settings, bars, trays and reading corners where a small object can quietly define the atmosphere of a surface.",
    notes: ["Natural stone and ceramic surfaces", "Small batches and curated availability", "Private, hospitality and project inquiries"],
    shopHref: "/en/shop/accessories",
    contactHref: "/en/contact",
  },
  de: {
    eyebrow: "Luxus-Untersetzer",
    title: "Untersetzer aus Stein als ruhige Objekte für den Tisch.",
    intro:
      "Eine kuratierte Landingpage für Naturstein-Untersetzer, kleinere Tabletop-Objekte und präzise Geschenkdetails innerhalb der Welt von GETYOUR.DESIGN.",
    primaryCta: "Accessoires entdecken",
    secondaryCta: "Kontakt aufnehmen",
    materialsTitle: "Material, Gewicht und Oberfläche",
    materialsText:
      "Naturstein, mineralische Töne und weich bearbeitete Kanten geben kleinen Objekten eine dauerhafte Präsenz. Jedes Stück wird weniger als Dekoration verstanden, sondern als präziser materieller Akzent.",
    packagingTitle: "Verpackung und Präsentation",
    packagingText:
      "Untersetzer und kleine Objekte können für private Geschenke, Interior-Projekte oder Hospitality-Kontexte vorbereitet werden. Verpackung, Mengen und Verfügbarkeit werden individuell bestätigt.",
    useTitle: "Für Räume, Projekte und Rituale",
    useText:
      "Für Beistelltische, Dinner-Settings, Bars, Tabletts und Lesezonen, in denen ein kleines Objekt die Atmosphäre einer Oberfläche leise prägt.",
    notes: ["Naturstein- und Keramikoberflächen", "Kleine Serien und kuratierte Verfügbarkeit", "Private, Hospitality- und Projektanfragen"],
    shopHref: "/de/shop/tabletop",
    contactHref: "/de/kontakt",
  },
};

export function LuxuryCoastersPage({ locale }: LuxuryCoastersPageProps) {
  const copy = details[locale];

  return (
    <main>
      <section className="border-b hairline bg-[#f3f2ef] px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.72fr_0.58fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#667174]">{copy.eyebrow}</p>
            <h1 className="serif mt-5 max-w-5xl text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
              {copy.title}
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-[#4b5356]">{copy.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
              <Link className="border border-black bg-[#000000] px-6 py-4 !text-[#ffffff] transition hover:bg-[#111111]" href={copy.shopHref}>
                {copy.primaryCta}
              </Link>
              <Link className="border hairline bg-[#f7f7f5] px-6 py-4 text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black" href={copy.contactHref}>
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-5 md:grid-cols-3">
          {[copy.materialsTitle, copy.packagingTitle, copy.useTitle].map((title, index) => (
            <article className="grid min-h-80 content-between border hairline bg-[#f7f7f5] p-6" key={title}>
              <div className={index === 0 ? "h-36 bg-[#d9d0c1]" : index === 1 ? "h-36 bg-[#11100f]" : "h-36 bg-[#c7beb1]"} />
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">0{index + 1}</p>
                <h2 className="serif mt-3 text-xl leading-snug tracking-[0.08em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#4b5356]">
                  {index === 0 ? copy.materialsText : index === 1 ? copy.packagingText : copy.useText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-[#e8eceb] px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">
              {locale === "en" ? "Selection Notes" : "Hinweise zur Auswahl"}
            </p>
            <h2 className="serif mt-4 text-xl font-normal leading-snug tracking-[0.08em]">
              {locale === "en" ? "Small objects with a clear material role." : "Kleine Objekte mit klarer Materialrolle."}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.notes.map((note) => (
              <p className="border-t border-black/20 pt-4 text-sm leading-7 text-[#353b3e]" key={note}>
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

