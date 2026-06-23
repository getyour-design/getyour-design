import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Commissions & Collaborations",
  description:
    "Commissions & Collaborations für Architekten, Interior Designer, Hotels und Projektkunden mit Möbeln, Kunstwerken, Objekten, Leuchten und Editionen.",
  alternates: {
    canonical: "/trade",
  },
};

const audiences = ["Architekten", "Interior Designer", "Hotels", "Projektkunden"];
const benefits = ["Projektanfragen", "Private Beschaffung", "Atelier-Anfragen", "Arbeit einreichen", "Reservierte Editionen", "Materialberatung"];

export default function TradePage() {
  return (
    <main>
      <PageHero
        eyebrow="Commissions & Collaborations"
        title="Objekte, Kunstwerke und Editionen für professionelle Projekte."
        description="Für Architekten, Interior Designer, Hotels und Projektkunden mit Bedarf an besonderen Möbeln, Leuchten, Materialien und Arbeiten."
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
            <h2 className="serif mt-12 max-w-2xl text-xl leading-snug tracking-[0.08em]">Objekte, Editionen und Materialien für konkrete Räume anfragen.</h2>
            <Link className="mt-8 inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href="/contact">
              Anfrage senden
            </Link>
          </article>
        </div>
      </section>
      <section className="border-t hairline bg-[#f3f2ef] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
            Sie möchten uns eine Arbeit, Edition, Kollektion, Leuchte, ein
            Möbelstück oder ein Objekt vorstellen?
          </p>
          <Link className="inline-block w-fit border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href="/arbeit-einreichen">
            Arbeit einreichen
          </Link>
        </div>
      </section>
      <section className="border-t hairline bg-[#e8eceb] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-[#4b5356]">
            Ateliers, Werkstätten und Herstellungsprozesse bilden die Grundlage
            für individuelle Arbeiten und Commissioned Pieces.
          </p>
          <Link className="border-b border-black pb-2 text-xs uppercase tracking-[0.2em]" href="/ateliers">
            Ateliers ansehen
          </Link>
        </div>
      </section>
    </main>
  );
}
