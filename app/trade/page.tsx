import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Trade",
  description:
    "Trade für Architekten, Interior Designer, Hotels und Projektkunden als zusätzlicher Vertriebskanal von GETYOUR.DESIGN.",
};

const audiences = ["Architekten", "Interior Designer", "Hotels", "Projektkunden"];
const benefits = ["Projektbezogene Beschaffung", "Reservierte Editionen", "Materialberatung", "Gebündelter Anfrageprozess", "Maßanfertigungen und Sonderwünsche", "Dokumentation für Projekte"];

export default function TradePage() {
  return (
    <main>
      <PageHero
        eyebrow="Trade"
        title="Ein zusätzlicher Vertriebskanal für professionelle Projekte."
        description="Die Trade-Seite definiert Zielgruppen, Vorteile und Anfragewege, bevor Authentifizierung, Angebotsprozesse oder Checkout-Funktionen eingeführt werden."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="border hairline bg-[#11100f] p-8 text-[#f3f2ef] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9fc6e3]">Für wen</p>
            <div className="mt-8 grid gap-4">
              {audiences.map((audience) => (
                <p className="border-b border-white/20 pb-4 serif text-xl tracking-[0.08em]" key={audience}>{audience}</p>
              ))}
            </div>
          </article>
          <article className="border hairline bg-[#e8eceb] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Vorteile</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div className="border-t border-black/20 pt-4 text-sm leading-7 text-[#353b3e]" key={benefit}>{benefit}</div>
              ))}
            </div>
            <h2 className="serif mt-12 max-w-2xl text-xl leading-snug tracking-[0.08em]">Projektlisten vorbereiten, bevor die vollständige Commerce-Infrastruktur folgt.</h2>
            <Link className="mt-8 inline-block border border-black bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white" href="/contact">
              Trade-Anfrage senden
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
