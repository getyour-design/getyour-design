import type { Metadata } from "next";
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
    href: "/brands",
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
};

export default function JournalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Geschichten über Räume, Objekte und Arbeiten mit Bestand."
        description="Einblicke in Kunst, Design, Materialien, Ateliers und Räume. Zurückhaltend kuratiert und eng mit den Arbeiten auf GETYOUR.DESIGN verbunden."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <article className="grid min-h-80 content-between border hairline bg-[#f7f7f5] p-6" key={story.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{story.category}</p>
              <div>
                <h2 className="serif text-2xl leading-snug tracking-[0.08em]">{story.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#4b5356]">{story.teaser}</p>
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
              <Link className="grid min-h-56 content-between border hairline bg-[#f7f7f5] p-6 transition hover:bg-[#f8f8f6]" href={item.href} key={item.title}>
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
