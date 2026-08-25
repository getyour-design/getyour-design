import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3daysofdesign 2026: Kopenhagen als Designlabor",
  description:
    "3daysofdesign 2026 rückt Kopenhagen, Begegnung und zeitgenössische Gestaltung in den Mittelpunkt.",
  alternates: {
    canonical: "/de/journal/3daysofdesign-2026-copenhagen",
  },
  openGraph: {
    images: [
      {
        url: "/images/journal-3daysofdesign-2026-objects-of-desire.jpeg",
        alt: "Objects of Desire bei 3daysofdesign 2026",
      },
    ],
  },
};

export default function ThreeDaysOfDesign2026JournalPage() {
  return (
    <main className="bg-[#f3f2ef]">
      <article>
        <header className="relative mx-auto max-w-[1120px] px-5 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
          <Link className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]" href="/de/journal">
            Journal
          </Link>
          <time className="absolute right-5 top-16 text-right text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:hidden">16. Juni 2026</time>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Design &amp; Kultur · Juni 2026</p>
          <h1 className="serif mt-5 max-w-4xl text-4xl leading-[1.1] tracking-[0.06em] sm:text-5xl lg:text-6xl">
            3daysofdesign 2026: Kopenhagen als Designlabor
          </h1>
          <time className="mt-5 hidden text-[0.68rem] uppercase tracking-[0.16em] text-[#667174] lg:block">Veröffentlicht am 16. Juni 2026</time>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4b5356] lg:text-xl lg:leading-9">
            Vom 10. bis 12. Juni macht 3daysofdesign die dänische Hauptstadt zur Bühne für Gestaltung, Gespräche und neue Formen des Zusammenseins.
          </p>
        </header>

        <figure className="mx-auto max-w-[1540px] px-5 lg:px-10">
          <Image
            alt="Objects of Desire bei 3daysofdesign 2026"
            className="h-auto w-full"
            height={853}
            priority
            sizes="(min-width: 1540px) 1540px, 100vw"
            src="/images/journal-3daysofdesign-2026-objects-of-desire.jpeg"
            width={1280}
          />
          <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Objects of Desire. © Stefania Zanetti / 3daysofdesign 2026</figcaption>
        </figure>

        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 lg:grid-cols-[0.32fr_0.68fr] lg:px-10 lg:py-24">
          <aside className="border-t border-black/15 pt-4 text-sm leading-6 text-[#4b5356]">
            <p className="uppercase tracking-[0.16em] text-[#667174]">Quelle</p>
            <a className="mt-3 block underline underline-offset-4" href="https://ccmagazine.es/en/3daysofdesign-2026-copenhagen-festival-highlights/" rel="noreferrer" target="_blank">
              CC/magazine, Mai 2026
            </a>
          </aside>

          <div className="max-w-2xl text-[1.05rem] leading-8 text-[#252827]">
            <p>
              Für drei Tage wird Kopenhagen im Juni zum offenen Designlabor. 3daysofdesign bringt etablierte Marken, junge Studios, Galerien, Architektur und Gespräche über die Zukunft des Gestaltens in der ganzen Stadt zusammen. Die Ausgabe 2026 steht unter dem Motto „Make This Moment Matter“ und rückt damit Präsenz, Austausch und gemeinsame Erfahrungen in den Vordergrund.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Design als gemeinsamer Moment</h2>
            <p className="mt-5">
              Statt sich auf reine Produktinszenierung zu konzentrieren, versteht das Festival Design als kulturelle Praxis. Showrooms, Höfe, Museen, Cafés und historische Gebäude werden zu Orten der Entdeckung. Die Stadt selbst ist nicht bloß Kulisse, sondern Teil der Ausstellung: Sie lädt dazu ein, Wege zu Fuß oder mit dem Rad zu machen, Perspektiven zu wechseln und Gestaltung im Alltag zu erleben.
            </p>
            <p className="mt-5">
              Mit den Long Table Dinners erhält dieses Prinzip eine besonders persönliche Form. An großen gemeinschaftlichen Tischen treffen Designerinnen und Designer, Marken, Medien und Besucher zusammen. Es geht nicht um schnelles Networking, sondern um Zeit, Gespräch und Gastlichkeit – also um jene Qualitäten, die auch Räume und Objekte langfristig prägen.
            </p>

            <div className="my-14 grid gap-6 md:grid-cols-2">
              <div className="grid content-start gap-6">
                <figure>
                  <Image
                    alt="Vitra-Präsentation bei 3daysofdesign 2026"
                    className="h-auto w-full"
                    height={853}
                    sizes="(min-width: 768px) 360px, 100vw"
                    src="/images/journal-3daysofdesign-2026-vitra.jpeg"
                    width={1280}
                  />
                  <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Vitra. © Laura Alvarez / 3daysofdesign 2026</figcaption>
                </figure>
                <figure>
                  <Image
                    alt="Long Table Dinner am Kanal bei 3daysofdesign 2026"
                    className="h-auto w-full"
                    height={853}
                    sizes="(min-width: 768px) 360px, 100vw"
                    src="/images/journal-3daysofdesign-2026-long-table-by-canal.jpeg"
                    width={1280}
                  />
                  <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Long Table Dinner – By the Canal. © Andreas Aicka Thomsen / 3daysofdesign 2026</figcaption>
                </figure>
              </div>
              <figure>
                <Image
                  alt="Materialstudie bei 3daysofdesign 2026"
                  className="h-auto w-full"
                  height={1280}
                  sizes="(min-width: 768px) 360px, 100vw"
                  src="/images/journal-3daysofdesign-2026-material-matters.jpeg"
                  width={853}
                />
                <figcaption className="mt-3 text-xs leading-5 text-[#667174]">Material Matters. © Sam Harrons / 3daysofdesign 2026</figcaption>
              </figure>
            </div>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Neue Wege durch die Stadt</h2>
            <p className="mt-5">
              2026 erweitert das Festival seine Karte um Islands Brygge. Das Quartier am Wasser verbindet zeitgenössische Architektur mit einer entspannten, urbanen Atmosphäre und ergänzt die bestehenden Designrouten um eine neue Perspektive auf Kopenhagen. Die Design Walks führen außerdem durch Studios, Galerien und architektonische Orte in verschiedenen Stadtteilen.
            </p>

            <h2 className="serif mt-14 text-3xl leading-tight tracking-[0.06em]">Zwischen Handwerk, Natur und Gegenwart</h2>
            <p className="mt-5">
              Das Programm greift Themen auf, die die aktuelle Designkultur prägen: unser emotionales Verhältnis zu Objekten, neue materielle Experimente, Handwerk als lebendiges Wissen sowie die Beziehung zwischen gebauter Umwelt und Natur. Ausstellungen wie Objects of Desire, Ukurant, This is not a Forest und Homo Faber Fellowship stehen beispielhaft für diese Spannweite.
            </p>
            <p className="mt-5">
              Begleitet wird das Festival vom Symposium „Entering the Now“, das Nachhaltigkeit, Technologie, kulturelle Identität und zukünftige Formen des Wohnens diskutiert. Gerade darin liegt die besondere Stärke von 3daysofdesign: Das Festival verbindet Neuheiten mit einer offenen Frage danach, wie wir leben, gestalten und miteinander in Beziehung treten wollen.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
