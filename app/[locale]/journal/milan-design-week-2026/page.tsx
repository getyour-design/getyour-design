import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Milan Design Week 2026: Design als Prozess",
  description:
    "Die wichtigsten Themen und Eindrücke der Milan Design Week 2026 – und 54 COUTURE mittendrin.",
  alternates: {
    canonical: "/de/journal/milan-design-week-2026",
  },
  openGraph: {
    images: [
      {
        url: "/images/journal-milan-design-week-2026-minotti.jpg",
        alt: "Minotti auf dem Salone Internazionale del Mobile 2026",
      },
    ],
  },
};

export default function MilanDesignWeek2026JournalPage() {
  return (
    <main className="bg-[#f3f2ef]">
      <article>
        <header className="relative mx-auto max-w-[1120px] px-5 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
          <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/de/journal">
            Journal
          </Link>
          <time className="absolute right-5 top-16 text-right text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:hidden">29. April 2026</time>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Messen &amp; Veranstaltungen · April 2026</p>
          <h1 className="serif mt-5 max-w-4xl text-4xl leading-[1.1] tracking-[0.06em] sm:text-5xl lg:text-6xl">
            Milan Design Week 2026: Design als Prozess
          </h1>
          <time className="mt-5 hidden text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:block">Veröffentlicht am 29. April 2026</time>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4b5356] lg:text-xl lg:leading-9">
            In Mailand wurde Design 2026 nicht nur gezeigt, sondern verhandelt: als Materialforschung, Begegnung und offener Prozess. 54 COUTURE war vor Ort.
          </p>
        </header>

        <figure className="mx-auto max-w-[1540px] px-5 lg:px-10">
          <Image
            alt="Minotti auf dem Salone Internazionale del Mobile 2026"
            className="h-auto w-full"
            height={4264}
            priority
            sizes="(min-width: 1540px) 1540px, 100vw"
            src="/images/journal-milan-design-week-2026-minotti.jpg"
            width={6396}
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Minotti, Salone Internazionale del Mobile 2026. Courtesy of Salone del Mobile.Milano.</figcaption>
        </figure>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 lg:grid-cols-[0.32fr_0.68fr] lg:px-10 lg:py-24">
          <aside className="border-t border-black/15 pt-4 text-sm leading-6 text-[#4b5356]">
            <p className="uppercase tracking-[0.16em] text-[#667174]">Quellen</p>
            <a className="mt-3 block underline underline-offset-4" href="https://www.fuorisalone.it/en/magazine/focus/article/2013/milan-design-week-2026-what-happened-milano-fuorisalone" rel="noreferrer" target="_blank">
              Fuorisalone, Rückblick 2026
            </a>
            <a className="mt-3 block underline underline-offset-4" href="https://www.salonemilano.it/en/press" rel="noreferrer" target="_blank">
              Salone del Mobile.Milano, Press &amp; Media 2026
            </a>
          </aside>

          <div className="max-w-2xl text-[1.05rem] leading-8 text-[#252827]">
            <p>
              Vom 20. bis 26. April verwandelte die Milan Design Week die Stadt erneut in ein dichtes Netz aus Ausstellungen, Installationen, Gesprächen und Begegnungen. Während der Salone del Mobile.Milano vom 21. bis 26. April die internationale Möbel- und Interiorbranche in Rho zusammenbrachte, machte Fuorisalone ganz Mailand zum Ausstellungsraum. Der offizielle Rückblick von Fuorisalone zählt mehr als 1.300 Veranstaltungen in der Stadt und über 500.000 Besucherinnen und Besucher.
            </p>

            <div className="my-14 grid gap-6 md:grid-cols-2">
              <figure>
                <Image
                  alt="Arper auf dem Salone Internazionale del Mobile 2026"
                  className="h-auto w-full"
                  height={4644}
                  sizes="(min-width: 768px) 360px, 100vw"
                  src="/images/journal-milan-design-week-2026-arper.jpg"
                  width={6966}
                />
                <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Arper, Salone Internazionale del Mobile 2026. © Saverio Lombardi Vallauri / Salone del Mobile.Milano.</figcaption>
              </figure>
              <figure>
                <Image
                  alt="Edra auf dem Salone Internazionale del Mobile 2026"
                  className="h-auto w-full"
                  height={4045}
                  sizes="(min-width: 768px) 360px, 100vw"
                  src="/images/journal-milan-design-week-2026-edra.jpg"
                  width={6067}
                />
                <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Edra, Salone Internazionale del Mobile 2026. © Saverio Lombardi Vallauri / Salone del Mobile.Milano.</figcaption>
              </figure>
            </div>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Weniger Finale, mehr Entstehung</h2>
            <p className="mt-5">
              „Essere Progetto“ – auf Deutsch etwa „Projekt sein“ – prägte die Ausgabe von Fuorisalone. Der Gedanke dahinter: Design nicht als fertiges Objekt zu betrachten, sondern als Bewegung zwischen Recherche, Material, Versuch, Fehler und Veränderung. Der offizielle Rückblick beschreibt genau diese Zwischenräume als sichtbar gemachte Methode, Zeit, Anpassung und Experiment – anstelle bloßer Perfektion.
            </p>
            <p className="mt-5">
              Materialkreisläufe, Handwerk und Technologie wurden dabei nicht getrennt gedacht. Re-Programming Wood, NikeAir_Lab und weitere von Fuorisalone ausgezeichnete Projekte zeigten, wie Daten, neue Produktionsweisen und physische Erfahrung zusammenwirken können. Design wurde zu einer Sprache für Transformation – taktil, sozial und offen für neue Maßstäbe.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Mailand als Ausstellung</h2>
            <p className="mt-5">
              Die stärksten Eindrücke entstanden häufig dort, wo Architektur, Ort und Inhalt sich gegenseitig verstärkten. Historische Innenhöfe, ehemalige Industrieareale, Pools, private Residenzen und neue Quartiere wurden zu Bühnen für Design. In Brera, Tortona, Durini, 5VIE, Isola, Porta Venezia und weiteren Stadtteilen konnten Besucherinnen und Besucher nicht nur Objekte sehen, sondern urbane Räume neu lesen.
            </p>
            <p className="mt-5">
              Auch der Salone setzte mit seinem öffentlichen Programm auf Austausch: Talks, Workshops und das neue Salone Contract Forum brachten Architektur, Produktion und Projektkultur in ein gemeinsames Gespräch. Diese Verbindung von Messe, Stadt und Diskurs ist es, die Mailand weiterhin einzigartig macht.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">54 COUTURE vor Ort</h2>
            <p className="mt-5">
              54 COUTURE war während der Milan Design Week 2026 in Mailand vor Ort, um Eindrücke zu sammeln, Gespräche zu führen und neue Perspektiven auf Material, handwerkliche Präzision und zeitgenössisches Wohnen mitzunehmen. Gerade in einer Woche, in der Oberflächen, Herkunft und die Geschichten hinter Objekten sichtbar wurden, war der direkte Austausch besonders wertvoll.
            </p>
            <p className="mt-5">
              Für GETYOUR.DESIGN bleibt Mailand damit ein wichtiger Resonanzraum: ein Ort, an dem sich neue Positionen, etablierte Marken und unabhängige Ateliers begegnen – und an dem aus Beobachtung neue Ideen entstehen.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
