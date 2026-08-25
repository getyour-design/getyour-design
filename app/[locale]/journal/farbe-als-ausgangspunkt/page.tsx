import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farbe als Ausgangspunkt: Paletten für Räume und Objekte",
  description:
    "Wie digitale Farbpaletten helfen, Material, Licht und Atmosphäre in Räumen bewusster zusammenzudenken.",
  alternates: {
    canonical: "/de/journal/farbe-als-ausgangspunkt",
  },
  openGraph: {
    images: [
      {
        url: "/images/journal-farbe-als-ausgangspunkt-cover.png",
        alt: "Abstrakte Farbpalette mit Materialproben",
      },
    ],
  },
};

export default function ColourPalettesJournalPage() {
  return (
    <main className="bg-[#f3f2ef]">
      <article>
        <header className="relative mx-auto max-w-[1120px] px-5 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
          <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/de/journal">
            Journal
          </Link>
          <time className="absolute right-5 top-16 text-right text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:hidden">10. August 2026</time>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Gestaltung &amp; Materialien · August 2026</p>
          <h1 className="serif mt-5 max-w-4xl text-4xl leading-[1.1] tracking-[0.06em] sm:text-5xl lg:text-6xl">
            Farbe als Ausgangspunkt
          </h1>
          <time className="mt-5 hidden text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:block">Veröffentlicht am 10. August 2026</time>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4b5356] lg:text-xl lg:leading-9">
            Digitale Paletten können Ideen beschleunigen. Entscheidend wird Farbe aber erst im Zusammenspiel mit Material, Licht und Raum.
          </p>
        </header>

        <figure className="mx-auto max-w-[1540px] px-5 lg:px-10">
          <Image
            alt="Abstrakte Farbpalette mit Papier- und Materialproben"
            className="h-auto w-full"
            height={941}
            priority
            sizes="(min-width: 1540px) 1540px, 100vw"
            src="/images/journal-farbe-als-ausgangspunkt-cover.png"
            width={1672}
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Editoriale Visualisierung von GETYOUR.DESIGN.</figcaption>
        </figure>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 lg:grid-cols-[0.32fr_0.68fr] lg:px-10 lg:py-24">
          <aside className="border-t border-black/15 pt-4 text-sm leading-6 text-[#4b5356]">
            <p className="uppercase tracking-[0.16em] text-[#667174]">Quelle</p>
            <a className="mt-3 block underline underline-offset-4" href="https://www.designerinaction.de/gestaltung/farbpaletten-generatoren/" rel="noreferrer" target="_blank">
              Designer in Action, August 2026
            </a>
          </aside>

          <div className="max-w-2xl text-[1.05rem] leading-8 text-[#252827]">
            <p>
              Farbe entscheidet früh darüber, wie wir einen Raum oder ein Objekt lesen: zurückhaltend oder expressiv, kühl oder warm, präzise oder weich. Digitale Palettenwerkzeuge machen diese erste Phase schneller. Sie helfen, Beziehungen zwischen Tönen sichtbar zu machen, Varianten zu vergleichen und ein Farbklima zunächst als Hypothese zu formulieren.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Nicht die Palette ist das Ergebnis</h2>
            <p className="mt-5">
              Farbkreise, Zufallsgeneratoren, Bildanalysen und KI-gestützte Vorschläge setzen an unterschiedlichen Punkten an. Manche leiten harmonische Kontraste aus einer Grundfarbe ab, andere extrahieren Töne aus Fotografien oder zeigen eine Auswahl unmittelbar in einer Anwendungssituation. Ihr Wert liegt nicht in einer vermeintlich endgültigen Entscheidung, sondern darin, Möglichkeiten in Bewegung zu bringen.
            </p>
            <p className="mt-5">
              Gerade für den Entwurf von Interieurs ist das hilfreich: Ein erster Farbton kann eine Linie für Textilien, Lacke, Stein, Holz oder Kunst im Raum eröffnen. Die digitale Palette bleibt dabei ein Werkzeug für den Beginn – nicht der Ersatz für Materialproben, Maßstab und die Wahrnehmung vor Ort.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Vom Bildschirm in den Raum</h2>
            <p className="mt-5">
              Auf dem Bildschirm wirken Farben gleichmäßig und kontrollierbar. Im Raum verändern sie sich. Tageslicht, Oberflächenreflexionen, die Nähe zu anderen Materialien und die Größe einer Fläche verschieben ihre Wirkung. Ein warmes Beige kann neben gebürstetem Metall kühler erscheinen; ein sattes Blau wird auf Leinen anders wahrgenommen als auf lackiertem Holz.
            </p>
            <p className="mt-5">
              Deshalb lohnt es sich, eine Palette als Sequenz zu denken: Grundton, Kontrast, Übergang und Akzent. Statt jeden Farbwert gleich stark einzusetzen, entstehen Räume häufig gerade durch Abstufungen – durch Nuancen, die Materialität betonen und dem Blick Ruhe geben.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Ein Werkzeug für Haltung</h2>
            <p className="mt-5">
              Die im Ausgangsartikel versammelten Tools zeigen, wie vielfältig der Zugang sein kann: von klassischer Farbharmonie über kuratierte Referenzen bis zu Vorschauen für digitale Oberflächen. Für GETYOUR.DESIGN ist daran vor allem eines interessant: Gute Gestaltung beginnt oft nicht mit einer großen Geste, sondern mit einer bewussten Beziehung. Farbe kann diese Beziehung eröffnen – zwischen Objekt und Umgebung, zwischen Material und Licht, zwischen einem einzelnen Akzent und dem Ganzen.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
