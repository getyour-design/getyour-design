import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kollektionen",
  description: "Kuratierte Commerce-Einstiege von GETYOUR.DESIGN für Möbel, Kunst, Objekte und Materialien.",
};

const gallery = ["Wohnraum-Edit", "Sammler-Suite", "Atelier-Auswahl", "Objekttisch", "Materialraum", "Private Auswahl"];

export default function GalleryPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Kollektionen</p>
        <h1 className="serif mt-4 max-w-4xl text-balance text-6xl leading-none lg:text-8xl">
          Kuratierte Einstiege für sammelbare Interiors.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <article className="group border hairline bg-[#fbf8f1]" key={item}>
              <div className={`aspect-[4/5] ${index % 3 === 0 ? "bg-[#111]" : index % 3 === 1 ? "bg-[#cfc4b4]" : "bg-[#eee6d8]"}`} />
              <div className="flex items-center justify-between p-5">
                <h2 className="serif text-3xl">{item}</h2>
                <span className="text-xs uppercase tracking-[0.18em] text-[#786f64]">Ansehen</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
