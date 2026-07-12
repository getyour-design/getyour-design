# Affiliate Readiness

## Aktueller Status

GETYOUR.DESIGN hat aktuell keine aktiven Affiliate-Partner, keine freigegebenen Affiliate-Links, keine Tracking-IDs und keine live geschalteten Affiliate-Produkte. Diese Datei dokumentiert nur die interne Bereitschaft fuer einen spaeteren Affiliate-Pilot, insbesondere im Kontext Tableware.

Es werden keine Partnerschaften behauptet. Es gibt keine oeffentliche Tableware-Kategorie, keine neuen Produkte, keine sichtbaren Seiten, keine Haendlertexte, keine externen Produktbilder und keine aktiven Live-Links.

## Vorhandene Architektur

Produkte werden zentral in `app/data/products.ts` gepflegt. Das bestehende Produktmodell unterstuetzt bereits optionale Commerce-Felder wie `commerceMode`, `productType`, `affiliateLink`, `affiliatePartner`, `affiliateCategory`, `externalId`, `sourceSystem`, `sourceUrl`, `brand`, `brandSlug`, `rooms`, `collections`, `country`, `style` und `relatedProducts`.

Die CTA-Entscheidung liegt zentral in `app/lib/commerce.ts`. Fuer `commerceMode: "affiliate"` wird ein externer Link nur verwendet, wenn `affiliateLink` eine absolute HTTPS-URL ist. Fehlt ein gueltiger Link, bleibt die bestehende Status-, Anfrage- oder Fallback-Logik aktiv.

Publishing- und Social-Strukturen sind in `app/data/publishing.ts` vorbereitet. Dort existieren Felder und Checks fuer Open Graph, Pinterest, Affiliate-Relevanz und Tracking-Vorbereitung.

## Notwendige Produktfelder

Ein spaeteres Affiliate-Produkt sollte mindestens folgende Informationen kontrolliert enthalten:

- stabile interne Produktkennung und Slug
- neutraler Produkttitel und eigene Beschreibung
- `commerceMode: "affiliate"`
- `productType: "affiliate"` oder ein passender bestehender Produkttyp
- passende Kategorie und optionale Raum- oder Collection-Zuordnung
- Marke nur als sachliche Produktinformation, nicht als Partnerschaftsbehauptung
- `affiliateLink` als absolute HTTPS-URL
- `affiliatePartner` und `affiliateCategory`, sobald ein echter Partner freigegeben ist
- `externalId`, `sourceSystem` oder `sourceUrl` zur technischen Rueckverfolgbarkeit
- `affiliateDisclosure` fuer die Kennzeichnung
- `affiliatePriceLabel` nur bei gepruefter Preislogik
- `affiliateAvailabilityLabel` nur bei gepruefter Verfuegbarkeitslogik
- `affiliateLastCheckedAt` fuer Preis-, Link- und Verfuegbarkeitspruefung
- `affiliateImageSource` fuer Bildrechte und Bildherkunft
- `affiliateDataSource` fuer Text- und Produktdatenherkunft
- SEO-, Open-Graph- und Pinterest-Bilder nur mit geklaerten Rechten

Tracking-IDs werden in dieser Phase nicht befuellt. Eine spaetere Tracking-Integration darf erst nach Datenschutz-, Consent- und Partnerfreigabe erfolgen.

## Livegang-Voraussetzungen

Vor einem Affiliate-Livegang muessen mindestens geprueft sein:

- klare Affiliate-Kennzeichnung im sichtbaren Nutzungskontext
- Preisaktualitaet und Umgang mit Preisabweichungen
- Verfuegbarkeit und Umgang mit Ausverkauf oder Lieferzeit
- Bildrechte fuer Produktbilder, Pinterest-Bilder und Open-Graph-Bilder
- Textrechte fuer Produktbeschreibungen und technische Daten
- Markenrecht und Vermeidung von Partnerschafts- oder Haendlerbehauptungen
- Datenschutz und Tracking inklusive Consent-Anforderungen
- externe Links, Linkziel, Sicherheit und Kennzeichnung
- Haftungsausschluss fuer externe Preise, Verfuegbarkeit und Bestellabwicklung
- moegliche Ergaenzungen in Impressum und Datenschutzerklaerung

## Bild- und Textrechte

Keine Drittanbieterbilder oder fremden Produkttexte duerfen ohne dokumentierte Freigabe uebernommen werden. Eigene redaktionelle Texte sind zu bevorzugen. Produktbilder muessen eine belegbare Quelle, Nutzungserlaubnis und einen geklaerten Einsatz fuer Website, Open Graph und Pinterest haben.

## CTA- und Link-Regeln

Affiliate-CTAs duerfen nur erscheinen, wenn das Produkt explizit `commerceMode: "affiliate"` nutzt und ein gueltiger HTTPS-Link vorhanden ist. Externe Affiliate-Links muessen mit `sponsored`, `nofollow`, `noopener` und `noreferrer` gekennzeichnet bleiben. Ohne gueltigen Link darf keine tote Affiliate-Schaltflaeche sichtbar werden.

## SEO- und Pinterest-Regeln

Affiliate-Produkte duerfen nicht automatisch indexierbar oder fuer Pinterest optimiert werden, bevor Rechte, Kennzeichnung, Produktdaten und Linkziele geprueft sind. Open-Graph- und Pinterest-Medien brauchen dieselbe Rechteklaerung wie sichtbare Produktbilder.

## Tracking-Vorbereitung

Tracking ist nur vorbereitet, nicht aktiv. Vor einer spaeteren Nutzung muessen Partneranforderungen, Datenschutzgrundlage, Consent-Verhalten, UTM- oder Netzwerkparameter und Protokollierung eindeutig dokumentiert sein. Tracking-IDs oder Partnerkennungen werden in dieser Phase nicht gepflegt.

## Tableware-Pilot-Checkliste

- keine oeffentliche Tableware-Kategorie anlegen, bevor Sortiment, Rechte und Partner freigegeben sind
- keine Produkte anlegen, bevor Produktdaten, Bildrechte und Linkziele geprueft sind
- keine Marken als Partner darstellen, solange keine echte Beziehung besteht
- eigene neutrale Produkttexte erstellen
- Preis- und Verfuegbarkeitslogik vor Livegang festlegen
- Affiliate-Kennzeichnung und Datenschutztexte vor Livegang pruefen
- Pinterest- und Open-Graph-Nutzung vor Livegang rechtlich pruefen
- Regression fuer Navigation, Homepage, Sitemap, Canonicals und hreflang durchfuehren

## Ausdruecklicher Hinweis

Diese Readiness-Dokumentation aktiviert keine Affiliate-Funktion im Livebetrieb. Es gibt keine aktiven Partner, keine Live-Links, keine Tracking-IDs, keine neue oeffentliche Kategorie und keine behaupteten Markenpartnerschaften.
