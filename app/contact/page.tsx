import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu GETYOUR.DESIGN für private Beschaffung, Trade-Anfragen, Materialauswahl und kuratierte Objekte.",
};

export default function ContactPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Kontakt</p>
          <h1 className="serif mt-4 text-balance text-6xl leading-none lg:text-8xl">
            Finden Sie das Objekt, das den Raum trägt.
          </h1>
        </div>
        <div className="border hairline bg-[#fbf8f1] p-6 lg:p-10">
          <p className="serif text-4xl">Private Anfragen</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5f574f]">
            Teilen Sie uns Raum, Materialwunsch, Zeitrahmen und Bedarf mit:
            einzelnes Objekt, kuratierte Auswahl, Kunstwerk oder Trade-Projekt.
          </p>
          <div className="mt-10 grid gap-5 text-sm">
            <a className="border-b border-black/20 pb-4" href="mailto:studio@getyour.design">
              studio@getyour.design
            </a>
            <p className="border-b border-black/20 pb-4">Berlin · Remote</p>
            <p className="border-b border-black/20 pb-4">Termine für Trade und private Auswahl auf Anfrage.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
