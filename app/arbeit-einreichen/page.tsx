import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Arbeit einreichen",
  description:
    "Arbeiten, Editionen, Kollektionen, Leuchten, Möbelstücke und Objekte zur kuratorischen Prüfung bei GETYOUR.DESIGN einreichen.",
  alternates: {
    canonical: "/arbeit-einreichen",
  },
};

const fields = [
  { label: "Name", type: "text", required: true },
  { label: "E-Mail", type: "email", required: true },
  { label: "Website (optional)", type: "url", required: false },
  { label: "Instagram (optional)", type: "text", required: false },
  { label: "Titel der Arbeit / des Objekts", type: "text", required: true },
  { label: "Kategorie", type: "text", required: true },
  { label: "Preisvorstellung (optional)", type: "text", required: false },
];

export default function PositionVorstellenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Arbeit einreichen"
        title="Arbeit einreichen."
        description="Wir interessieren uns für Arbeiten aus Kunst, Design und Objektkultur. Jede Einsendung wird individuell geprüft."
      />

      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="max-w-md">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Hinweis</p>
            <h2 className="serif mt-4 text-xl font-normal leading-snug tracking-[0.08em]">
              Eine Aufnahme erfolgt ausschließlich nach kuratorischer Auswahl.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#4b5356]">
              Das Formular ist ein Frontend-Prototyp. Es werden keine Daten
              versendet und keine Dateien hochgeladen.
            </p>
          </div>

          <form className="grid gap-5 border hairline bg-[#f7f7f5] p-6 lg:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label className="grid gap-2 text-sm text-[#353b3e]" key={field.label}>
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{field.label}</span>
                  <input
                    className="border border-black/15 bg-[#f3f2ef] px-4 py-3 text-base outline-none transition focus:border-black"
                    required={field.required}
                    type={field.type}
                  />
                </label>
              ))}
            </div>

            <label className="grid gap-2 text-sm text-[#353b3e]">
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Beschreibung</span>
              <textarea
                className="min-h-40 border border-black/15 bg-[#f3f2ef] px-4 py-3 text-base outline-none transition focus:border-black"
                required
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#353b3e]">
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Bildupload</span>
                <input
                  className="border border-black/15 bg-[#f3f2ef] px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-black file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.18em] file:text-white"
                  required
                  type="file"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#353b3e]">
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">Weitere Dateien (optional)</span>
                <input
                  className="border border-black/15 bg-[#f3f2ef] px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-black file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.18em] file:text-white"
                  multiple
                  type="file"
                />
              </label>
            </div>

            <button className="mt-4 w-fit border border-black bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white" type="button">
              Arbeit einreichen
            </button>

            <p className="border-t border-black/15 pt-5 text-sm leading-7 text-[#4b5356]">
              Vielen Dank für Ihre Nachricht. Wir prüfen jede Anfrage
              individuell und melden uns bei Interesse persönlich.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
