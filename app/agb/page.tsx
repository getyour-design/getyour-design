import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen der 2B Home GmbH für GETYOUR.DESIGN.",
  alternates: {
    canonical: "/agb",
  },
};

const termsSections = [
  {
    title: "Geltungsbereich",
    body: [
      "Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung von GETYOUR.DESIGN sowie für Anfragen, Reservierungen, Käufe, Aufträge und projektbezogene Kommunikation mit der 2B Home GmbH, soweit nicht im Einzelfall abweichende schriftliche Vereinbarungen getroffen werden.",
    ],
  },
  {
    title: "Produktdarstellung",
    body: [
      "GETYOUR.DESIGN zeigt kuratierte Möbel, Leuchten, Teppiche, Objekte, Kunstwerke, Editionen und besondere Einzelstücke. Viele Arbeiten sind Einzelstücke, limitierte Editionen oder nur in begrenzter Verfügbarkeit erhältlich.",
      "Abbildungen, Beschreibungen, Maße, Materialien und Preise werden sorgfältig gepflegt, stellen aber kein verbindliches Angebot dar. Verfügbarkeit, Zustand und finale Konditionen werden vor Kauf, Reservierung oder Auftrag individuell bestätigt.",
    ],
  },
  {
    title: "Anfragen, Verfügbarkeit und Preise",
    body: [
      "Über die Website können Kauf-, Preis-, Verfügbarkeits-, Beratungs- und Projektanfragen vorbereitet werden. Eine Anfrage begründet noch keinen Anspruch auf Erwerb oder Reservierung eines Objekts.",
      "Preise können je nach Objekt, Edition, Verfügbarkeit, Transport, Versicherung, Zoll, Projektumfang oder besonderer Beschaffung variieren. Maßgeblich sind die individuell bestätigten Konditionen.",
    ],
  },
  {
    title: "Kauf, Reservierung und Auftrag",
    body: [
      "Ein Kauf, eine Reservierung oder ein Auftrag kommt erst zustande, wenn die 2B Home GmbH oder eine autorisierte Vertretung die jeweiligen Konditionen ausdrücklich bestätigt.",
      "Bei Kunstwerken, Editionen, Einzelstücken und Sonderanfertigungen können besondere Bedingungen zu Reservierung, Zahlung, Lieferung, Abholung oder Rückgabe gelten.",
    ],
  },
  {
    title: "Zahlung und Versand",
    body: [
      "Zahlungsarten, Anzahlungen, Fälligkeiten, Versand, Abholung, Verpackung, Versicherung und Lieferzeiten werden abhängig von Objekt, Wert, Größe, Zielort und Projektumfang individuell vereinbart.",
      "Auf der Website vorbereitete Warenkorb- oder Checkout-Funktionen begründen keine Zusage bestimmter Zahlungsarten, solange diese technisch und vertraglich nicht final aktiviert sind.",
    ],
  },
  {
    title: "Rückgabe und Reklamation",
    body: [
      "Gesetzliche Verbraucherrechte bleiben unberührt. Bei Einzelstücken, Kunstwerken, Vintage-Objekten, handwerklich hergestellten Arbeiten, Sonderanfertigungen oder projektbezogenen Beschaffungen können besondere gesetzliche oder vertragliche Regelungen gelten.",
      "Beanstandungen sollten unverzüglich nach Erhalt mit nachvollziehbarer Beschreibung und, soweit sinnvoll, Bildmaterial mitgeteilt werden.",
    ],
  },
  {
    title: "Kunstwerke, Editionen und Einzelstücke",
    body: [
      "Kunstwerke, Editionen und handwerklich gefertigte Objekte können natürliche Abweichungen, Materialspuren, Patina, Herstellungsmerkmale oder altersbedingte Eigenschaften aufweisen.",
      "Solche Merkmale sind Teil der Arbeit, sofern nicht ausdrücklich ein abweichender Zustand vereinbart wurde.",
    ],
  },
  {
    title: "B2B- und Projektanfragen",
    body: [
      "Für Architekten, Interior Designer, Hotels, Projektentwickler und gewerbliche Auftraggeber können gesonderte Konditionen, Lieferfenster, Reservierungen, Beschaffungsleistungen und projektbezogene Vereinbarungen gelten.",
      "Details werden abhängig von Umfang, Zeitplan, Objektart, Beschaffung, Produktion und Lieferung individuell abgestimmt.",
    ],
  },
  {
    title: "Urheberrechte",
    body: [
      "Texte, Bilder, Layouts, kuratorische Zusammenstellungen und sonstige Inhalte von GETYOUR.DESIGN sind urheberrechtlich oder durch verwandte Schutzrechte geschützt.",
      "Eine Nutzung, Vervielfältigung oder Weitergabe ist nur mit vorheriger Zustimmung zulässig, soweit sie nicht gesetzlich erlaubt ist.",
    ],
  },
];

export default function AgbPage() {
  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Rechtliches</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            AGB
          </h1>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">Allgemeine Geschäftsbedingungen</p>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-[#4b5356]">
            {termsSections.map((section) => (
              <section className="border-t border-black/15 pt-6" key={section.title}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#667174]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

