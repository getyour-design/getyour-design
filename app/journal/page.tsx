import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { stories } from "../data/stories";

const journalConnections = [
  {
    title: "Künstler",
    text: "Portraits, Arbeiten und verfügbare Positionen ausgewählter Künstler.",
    href: "/artists",
  },
  {
    title: "Ateliers & Marken",
    text: "Werkstätten, Manufakturen und Hersteller hinter Möbeln, Leuchten, Objekten und Editionen.",
    href: "/ateliers",
  },
  {
    title: "Materialien",
    text: "Keramik, Bronze, Holz, Leder, Naturstein und weitere Materialien im Kontext konkreter Arbeiten.",
    href: "/materials",
  },
];

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Einblicke in Kunst, Design, Materialien, Ateliers und Räume bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalPage() {
  const orderedStories = [...stories].sort((a, b) =>
    (b.publishedAtIso ?? "").localeCompare(a.publishedAtIso ?? "")
  );

  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Geschichten über Räume, Objekte und Arbeiten mit Bestand."
        description="Einblicke in Kunst, Design, Materialien, Ateliers und Räume. Zurückhaltend kuratiert und eng mit den Arbeiten auf GETYOUR.DESIGN verbunden."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
          {orderedStories.map((story) => (
            <article className="flex h-full min-h-[25rem] flex-col overflow-hidden border hairline bg-[#f7f7f5]" key={story.title}>
              {story.image ? (
                <Link className="block overflow-hidden" href={story.href ?? "/de/journal"}>
                  <Image
                    alt={`Editoriale Visualisierung zu ${story.title}`}
                    className="aspect-[16/9] w-full bg-[#e8eceb] object-cover transition duration-500 hover:scale-[1.02]"
                    height={941}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    src={story.image}
                    width={1672}
                  />
                </Link>
              ) : (
                <div className="flex aspect-[16/9] items-end border-b hairline bg-[#e8eceb] p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Journal</p>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex min-h-10 items-start justify-between gap-4 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174] lg:min-h-[3.25rem]">
                  <p>{story.category}</p>
                </div>
                <div className="mt-4 grid flex-1 grid-rows-[4.25rem_3.25rem_1fr]">
                  <h2 className="serif text-[1.35rem] leading-[1.2] tracking-[0.04em] lg:text-[1.45rem]">
                    {story.href ? <Link href={story.href}>{story.title}</Link> : story.title}
                  </h2>
                  <div>
                    {story.subtitle ? <p className="serif text-[0.95rem] leading-snug tracking-[0.035em] text-[#667174]">{story.subtitle}</p> : null}
                  </div>
                  <div className="flex h-full flex-col">
                    <p className="text-sm leading-7 text-[#4b5356]">{story.teaser}</p>
                    {story.publishedAt ? <time className="mt-auto pt-6 text-[0.68rem] uppercase tracking-[0.12em] text-[#667174]">{story.publishedAt}</time> : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t hairline bg-[#e8eceb] px-5 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-8 border-b border-black/15 pb-7 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Künstler, Ateliers und Materialien</p>
              <h2 className="serif mt-3 text-lg font-normal tracking-[0.08em] lg:text-xl">
                Verbindungen hinter den Arbeiten
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
              Das Journal verbindet Arbeiten, Räume und Materialien mit den
              Menschen und Werkstätten hinter den Objekten.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {journalConnections.map((item) => (
              <Link className="grid min-h-44 content-between border hairline bg-[#f7f7f5] p-6 transition hover:bg-[#f8f8f6]" href={item.href} key={item.title}>
                <h3 className="serif text-xl leading-snug tracking-[0.08em]">{item.title}</h3>
                <p className="text-sm leading-7 text-[#4b5356]">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
