import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minotti 2026 Collection auf dem Salone del Mobile.Milano",
  description:
    "Minotti präsentiert die 2026 Collection in Mailand – eine neue Wohnlandschaft zwischen Architektur, Material und Kunst.",
  alternates: {
    canonical: "/de/journal/minotti-2026-collection",
  },
  openGraph: {
    images: [
      {
        url: "/images/journal-minotti-2026-cover.png",
        alt: "Editoriale Architekturaufnahme zur Minotti 2026 Collection",
      },
    ],
  },
};

export default function Minotti2026CollectionJournalPage() {
  return (
    <main className="bg-[#f3f2ef]">
      <article>
        <header className="relative mx-auto max-w-[1120px] px-5 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
          <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/de/journal">
            Journal
          </Link>
          <time className="absolute right-5 top-16 text-right text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:hidden">2. Mai 2026</time>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Messen &amp; Veranstaltungen · Mai 2026</p>
          <h1 className="serif mt-5 max-w-4xl text-4xl leading-[1.1] tracking-[0.06em] sm:text-5xl lg:text-6xl">
            Minotti 2026 Collection: Eine neue Wohnlandschaft in Mailand
          </h1>
          <time className="mt-5 hidden text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:block">Veröffentlicht am 2. Mai 2026</time>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4b5356] lg:text-xl lg:leading-9">
            Auf dem Salone del Mobile.Milano 2026 verbindet Minotti Architektur, Kunst, Natur und Möbeldesign zu einer räumlichen Erzählung.
          </p>
        </header>

        <figure className="mx-auto max-w-[1540px] px-5 lg:px-10">
          <Image
            alt="Editoriale Architekturaufnahme in Beton, Holz und Wasser – eine visuelle Interpretation des Beitrags"
            className="aspect-[16/9] w-full object-cover"
            height={941}
            priority
            sizes="(min-width: 1540px) 1540px, 100vw"
            src="/images/journal-minotti-2026-cover.png"
            width={1672}
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Editoriale Visualisierung von GETYOUR.DESIGN – kein offizielles Minotti-Pressebild.</figcaption>
        </figure>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 lg:grid-cols-[0.32fr_0.68fr] lg:px-10 lg:py-24">
          <aside className="border-t border-black/15 pt-4 text-sm leading-6 text-[#4b5356]">
            <p className="uppercase tracking-[0.16em] text-[#667174]">Quelle</p>
            <a className="mt-3 block underline underline-offset-4" href="https://www.minotti.com/de/the-2026-collection-at-salone-del-mobilemilano" rel="noreferrer" target="_blank">
              Minotti News, Mai 2026
            </a>
          </aside>

          <div className="max-w-2xl text-[1.05rem] leading-8 text-[#252827]">
            <p>
              Auf dem Salone del Mobile.Milano 2026 stellte Minotti seine neue Kollektion in einem Pavillon vor, der weit mehr als eine Produktbühne war: Architektur, Kunst, Natur und Möbeldesign verbinden sich zu einer räumlichen Erzählung.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Architektur als Atmosphäre</h2>
            <p className="mt-5">
              Sichtbeton und dunkel gebeiztes Palisanderholz prägen den Auftritt des Minotti Pavilion. Im Inneren öffnet sich eine Folge großzügiger Räume mit doppelter Raumhöhe, wechselnden Blickachsen sowie spannungsreichen Farb- und Materialkontrasten. Anklänge an die Architektur der 1970er- und 1990er-Jahre geben der Inszenierung ihren charakteristischen Rahmen.
            </p>
            <p className="mt-5">
              Wasserflächen und Grünzonen strukturieren den Weg durch den Pavillon. In Zusammenarbeit mit der Florentiner Galerie Tornabuoni Arte wurden zudem Werke italienischer Künstlerinnen und Künstler aus den 1950er- bis 1970er-Jahren integriert.
            </p>

            <figure className="my-14">
              <Image
                alt="Editoriale Materialstudie in Beton, Holz und Wasser – eine visuelle Interpretation des Beitrags"
                className="aspect-[3/2] w-full object-cover"
                height={1024}
                sizes="(min-width: 1120px) 720px, 100vw"
                src="/images/journal-minotti-2026-materials.png"
                width={1536}
              />
              <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Editoriale Visualisierung von GETYOUR.DESIGN – kein offizielles Minotti-Pressebild.</figcaption>
            </figure>

            <h2 className="serif text-3xl leading-tight tracking-[0.06em]">Komfort mit klarer Haltung</h2>
            <p className="mt-5">
              Die 2026 Collection entsteht aus der Zusammenarbeit von Minotti Studio mit Giampiero Tagliaferri. Ergänzt wird die kreative Handschrift durch sechs internationale Positionen: Marcio Kogan / Studio MK27, Nendo, GamFratesi, Inoda+Sveje, Hannes Peer und Giampiero Tagliaferri interpretieren den Stil der italienischen Marke auf jeweils eigene Weise.
            </p>
            <p className="mt-5">
              Zu den Neuheiten zählen die Sitzsysteme Orion von Giampiero Tagliaferri, Ruffle von GamFratesi und Softcase von Hannes Peer. Skulptural wirkende Sessel, markante Tische und Stauraummöbel ergänzen die Kollektion. Gleichzeitig wird die Verbindung von Innen- und Außenbereich weitergedacht – mit leichten, komfortablen Sitzmöbeln, Tischen und Accessoires für fließende Wohnräume.
            </p>
            <p className="mt-5">
              Die Kollektion zeigt eine Wohnwelt, in der Möbel nicht isoliert stehen, sondern Teil einer umfassenden Atmosphäre werden: ruhig, materiell und offen für individuelle Perspektiven.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
