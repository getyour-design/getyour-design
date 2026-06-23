import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzinformationen der 2B Home GmbH für GETYOUR.DESIGN.",
  alternates: {
    canonical: "/datenschutz",
  },
};

const privacySections = [
  {
    title: "Verantwortliche Stelle",
    body: [
      "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist die 2B Home GmbH, Kurfürstendamm 193d, 10707 Berlin.",
      "Für datenschutzbezogene Anfragen erreichen Sie uns unter: home [at] 2b.berlin.",
    ],
  },
  {
    title: "Server- und Logdaten",
    body: [
      "Beim Besuch dieser Website können technisch erforderliche Zugriffsdaten verarbeitet werden. Dazu gehören zum Beispiel die aufgerufene Seite, Datum und Uhrzeit des Abrufs, Browser- und Geräteinformationen sowie die IP-Adresse.",
      "Diese Daten werden verarbeitet, um die Website sicher, stabil und technisch funktionsfähig bereitzustellen. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht, soweit dies nicht aus Sicherheitsgründen oder aufgrund gesetzlicher Pflichten erforderlich ist.",
    ],
  },
  {
    title: "Kontaktaufnahme und Anfragen",
    body: [
      "Wenn Sie uns per E-Mail oder über vorbereitete Anfrage-Links kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Dies kann Name, Kontaktdaten, Projektinformationen, Objektinteressen und den Inhalt der Kommunikation umfassen.",
      "Die Verarbeitung erfolgt zur Bearbeitung vorvertraglicher oder vertraglicher Anfragen sowie aufgrund unseres berechtigten Interesses an einer individuellen Kommunikation.",
    ],
  },
  {
    title: "Merkliste und lokale Speicherung",
    body: [
      "GETYOUR.DESIGN kann eine Merken- oder Favoritenfunktion im Browser vorbereiten. Dabei werden gemerkte Objekte lokal auf Ihrem Gerät im localStorage gespeichert.",
      "Diese Daten werden nicht automatisch an uns übertragen und können durch das Löschen der Browserdaten oder durch Entfernen der gespeicherten Einträge gelöscht werden.",
    ],
  },
  {
    title: "Social Links",
    body: [
      "Diese Website enthält Links zu externen Profilen auf Instagram, Pinterest und LinkedIn. Beim bloßen Besuch dieser Website werden dadurch keine Daten an diese Plattformen übertragen.",
      "Erst wenn Sie einen externen Social-Link öffnen, verlassen Sie GETYOUR.DESIGN. Für die dortige Datenverarbeitung gelten die Datenschutzbestimmungen der jeweiligen Plattform.",
    ],
  },
  {
    title: "Speicherdauer",
    body: [
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
      "Anfrage- und Kommunikationsdaten können für die Dauer der Bearbeitung sowie zur Dokumentation geschäftlicher Vorgänge gespeichert werden.",
    ],
  },
  {
    title: "Ihre Rechte",
    body: [
      "Sie haben nach Maßgabe der gesetzlichen Vorschriften das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen bestimmte Verarbeitungen.",
      "Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Rechtliches</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            Datenschutz
          </h1>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">Datenschutzinformationen</p>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-[#4b5356]">
            {privacySections.map((section) => (
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

