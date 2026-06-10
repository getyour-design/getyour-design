import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the GETYOUR.DESIGN gallery of collectible furniture, objects, and sculptural interior compositions.",
};

const gallery = ["Living Gallery", "Collector Suite", "Atelier View", "Object Table", "Material Room", "Private Salon"];

export default function GalleryPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Gallery</p>
        <h1 className="serif mt-4 max-w-4xl text-balance text-6xl leading-none lg:text-8xl">
          Curated scenes for collected interiors.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <article className="group border hairline bg-[#fbf8f1]" key={item}>
              <div className={`aspect-[4/5] ${index % 3 === 0 ? "bg-[#111]" : index % 3 === 1 ? "bg-[#cfc4b4]" : "bg-[#eee6d8]"}`} />
              <div className="flex items-center justify-between p-5">
                <h2 className="serif text-3xl">{item}</h2>
                <span className="text-xs uppercase tracking-[0.18em] text-[#786f64]">View</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
