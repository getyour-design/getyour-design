import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skulpturales Sitzen",
  description: "Skulpturale Sitzobjekte von GETYOUR.DESIGN mit Komfort, Silhouette und materieller Zurückhaltung.",
};

const seating = ["Monolith Lounge Chair", "Low Arc Chair", "Split Stone Sofa", "Club Chair Sora"];

export default function SculpturalSeatingPage() {
  return (
    <main>
      <section className="bg-[#080808] section-pad text-[#f7f3ea]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b9ad9f]">Skulpturales Sitzen</p>
          <h1 className="serif mt-4 max-w-4xl text-balance text-6xl leading-none lg:text-8xl">
            Sitzobjekte als Architektur im kleinen Maßstab.
          </h1>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {seating.map((item, index) => (
            <article className="grid min-h-80 content-between border hairline bg-[#fbf8f1] p-6" key={item}>
              <div className={`h-44 ${index % 2 === 0 ? "bg-[#171717]" : "bg-[#d8cfc2]"}`} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#786f64]">Edition auf Anfrage</p>
                <h2 className="serif mt-3 text-4xl">{item}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
