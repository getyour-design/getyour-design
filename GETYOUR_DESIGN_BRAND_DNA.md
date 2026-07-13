# GETYOUR.DESIGN Brand, Design, Content and Technical DNA

Aktualisierung zum committed Repository-Stand `3520e12` vom 2026-07-13: Die gestalterische und inhaltliche DNA dieses Dokuments bleibt verbindlich. Technische Aussagen zu Checkout, Commerce-Datenmodell und Kategorien sind seit den Commerce-Phasen erweitert worden. Stripe ist als Testcheckout nur feature-gated fuer `sitzobjekt-kuhfell` vorbereitet; es gibt keine globale Checkout-Aktivierung, keinen echten Warenkorbzustand, keine Bestellpersistenz und keine Affiliate-Live-Links. Der Shop verwendet inzwischen `visibleShopCategories` mit 16 sichtbaren Commerce-Kategorien. Bestehende Designregeln, Tonalitaet, Typografie, Farben, SEO-/i18n-Schutz und vorsichtige rechtliche Sprache bleiben unveraendert gueltig.

Interne Arbeitsgrundlage fuer neue Produktseiten, Texte, Bilder, Uebersetzungen und technische Erweiterungen. Stand: Analyse des bestehenden Codes im Projekt `/Users/ibt/Code/getyour-design`.

Diese Dokumentation beschreibt nur, was aus der bestehenden Website und dem Code ableitbar ist. Unsicherheiten und Inkonsistenzen stehen separat am Ende.

## 1. Markenpositionierung

GETYOUR.DESIGN wirkt aktuell nicht wie ein reiner Checkout-Shop und nicht wie ein klassisches Magazin. Die Website positioniert sich als kuratierte Design- und Kunstplattform mit Shop-Funktion, Galerie-Anmutung, Materialbibliothek, Atelier-Bezug und Projekt-/Sourcing-Angebot.

Belegbare Signale:

- `app/layout.tsx`: "Contemporary Design, Kunst, Moebel, Objekte, Leuchten, Teppiche und Editionen ausgewaehlter Kuenstler, Ateliers und Hersteller."
- `app/page.tsx`: Hero "Sagen Sie uns / was Sie umgibt / und wir sagen Ihnen / wer Sie sind" plus "DESIGN UND KUNST / FUER INDIVIDUALISTEN."
- Navigation: Design-Shop, Kunst, Kollektionen, Ateliers, Journal.
- Footer: "Contemporary Design, Kunst, Objekte, Leuchten, Teppiche und Editionen ausgewaehlter Kuenstler, Ateliers und Hersteller."
- Produkt- und Kategoriebegriffe: kuratiert, ausgewaehlt, Arbeiten, Objekte, Editionen, Ateliers, Materialien, Raeume, Herkunft, Werkstatt, Projektanfragen.

Markenkern:

- Kuratierte Auswahl statt Massenkatalog.
- Objektkultur zwischen Design, Kunst, Handwerk und Interior.
- Ruhige, architektonische, materialorientierte Luxuspositionierung.
- Fokus auf Raeume, Material, Herkunft, Proportion, Patina, Edition, Atelier.
- Commerce ist vorbereitet, aber Beratungs-, Anfrage- und Kurationslogik ist genauso wichtig.

Zielgruppen:

- Privatkundinnen und Privatkunden mit Interesse an individuellen Raeumen, Kunst, Designobjekten und Editionen.
- Sammlerinnen und Sammler von Kunst, Editionen und Collectible Design.
- Architektinnen, Interior Designer, Hotels, Projektkunden und Entwickler (`app/page.tsx`, `app/trade/page.tsx`, `app/agb/page.tsx`).
- Ateliers, Kuenstler, Manufakturen und Hersteller, die Arbeiten einreichen wollen (`app/arbeit-einreichen/page.tsx`).

Werte:

- Kuratorische Auswahl.
- Materialwissen und handwerkliche Praezision.
- Zurueckhaltung statt lauter Verkaufsrhetorik.
- Langlebigkeit, Herkunft, Patina und Reparierbarkeit.
- Individualitaet, aber nicht als lautes Statusversprechen.
- Projektfaehigkeit fuer professionelle Interieurs.

## 2. Tonalitaet und Schreibstil

Die Sprache ist ruhig, knapp, kuratorisch und materialnah. Sie beschreibt Objekte als "Arbeiten", "Objekte", "Editionen" und "Positionen". Sie verkauft nicht aggressiv.

### Ueberschriften

Muster:

- "Moebel, Leuchten, Kunst, Teppiche, Objekte und Editionen."
- "Kuratierte Einstiege in den Shop."
- "Eine Bibliothek fuer Oberflaechen, Haptik und Wertigkeit."
- "Geschichten ueber Raeume, Objekte und Arbeiten mit Bestand."
- "Werkstaetten, Materialien und Arbeiten nach Mass."

Regeln:

- Kurz, nominal, ruhig.
- Hauefig Satzfragmente statt Werbesatz.
- Keine Ausrufezeichen.
- Keine Claims wie "das Beste", "einzigartig" ohne belegbaren Produktgrund.
- H1/H2 in der Regel mit Punkt, wenn sie als kuratorische Aussage stehen.

### Einleitungen und Fliesstext

Muster:

- "Eine Auswahl aus Designmoebeln, Kunstwerken, Leuchten, Teppichen, Accessoires, Collectible Design, Objekten und Editionen fuer besondere Raeume."
- "Ein ruhiger Blick auf Ateliers, Manufakturen und Herstellungsprozesse..."
- "Materialien fuehren zu Objekten, Moebeln, Leuchten, Kunstwerken und Editionen im Shop."

Regeln:

- 1 bis 2 Saetze pro Absatz.
- Mittlere Satzlaenge bevorzugen: ca. 10 bis 22 Woerter.
- Lange Listen nur wenn sie Sortimentsbreite zeigen; nicht als KI-Dreierformel.
- Konkrete Substantive vor abstrakten Adjektiven.
- Material, Form, Raumwirkung und Herkunft stehen vor Lifestyle-Versprechen.

### Produktnamen und Produktbeschreibungen

Bestehende Produktnamen sind konkret und beschreibend:

- "Sitzobjekt aus dunklem Holz"
- "Niedrige Bank aus Eiche"
- "Keramikobjekt mit Griffoeffnung"
- "Bronzeobjekt in kleiner Auflage"
- "Wollteppich in Naturtoenen"

Regeln fuer neue Produktnamen:

- Struktur: Objektart + Material/Form/Technik.
- Keine Fantasienamen ohne beschreibenden Zusatz.
- Keine Superlative.
- Keine generischen Luxusnamen.
- Wenn Edition: Auflage, Material oder Werktyp nennen.

Produktbeschreibungen sollen enthalten:

- Objektart und Funktion, falls relevant.
- Material und Oberflaeche.
- Form, Proportion oder Silhouette.
- Handwerk, Herkunft oder Herstellungsart, wenn belegt.
- Raumwirkung, aber zurueckhaltend.
- Nutzung oder Platzierung, wenn hilfreich.

Gutes Muster:

> Niedrige Bank aus geoelter Eiche mit klarer Kante und ruhiger Laenge. Die Arbeit eignet sich als Sitzobjekt, Ablage oder niedriger Akzent in offenen Raeumen.

Nicht passend:

> Dieses exklusive Meisterwerk vereint zeitlose Eleganz und perfekte Funktionalitaet fuer anspruchsvolle Kunden.

### Buttons und CTAs

Bestehende CTAs:

- "Shop entdecken"
- "Kollektionen ansehen"
- "Zum Shop"
- "Arbeiten ansehen"
- "Anfrage senden"
- "Preis anfragen"
- "In den Warenkorb"
- "Arbeit einreichen"
- "Lesen"

Regeln:

- Verb + Objekt, kurz.
- Keine werblichen Imperative wie "Jetzt zugreifen".
- Bei hochpreisigen/limitierten Arbeiten eher Anfrage-Logik.
- Checkout-CTAs nur verwenden, wenn Status und technischer Ablauf wirklich aktiv sind.

### Navigation und Footer

Navigation ist sortiments- und orientierungsorientiert:

- Hauptnavigation: Design-Shop, Kunst, Kollektionen, Ateliers, Journal.
- Sekundaere Bereiche im Footer: Shop, Kunst, Kollektionen, Marken & Ateliers, Kuenstler, Materialien, Journal, Commissions & Collaborations, Ateliers, Arbeit einreichen.

Regeln:

- Navigationslabels kurz halten.
- Keine Marketinglabels in der Navigation.
- Bestehende Routen und Lokalisierung nicht umgehen.
- Footer-Texte sachlich und sortimentsnah halten.

### Legal-Seiten

Legal-Ton ist sachlich, rechtlich vorsichtig und ohne Markensprache-Ueberschwang. Muster:

- "Abbildungen, Beschreibungen, Masse, Materialien und Preise werden sorgfaeltig gepflegt, stellen aber kein verbindliches Angebot dar."
- "Viele Arbeiten sind Einzelstuecke, limitierte Editionen oder nur in begrenzter Verfuegbarkeit erhaeltlich."

Regeln:

- Keine emotionalen Formulierungen in Legal-Inhalten.
- Konkrete Betreiberangaben konsistent halten.
- Rechtliche Platzhalter fuer nicht uebersetzte Sprachen klar kennzeichnen.

## 3. Design-DNA

### Farben

Zentrale Farben aus `app/globals.css` und Komponenten:

- Paper: `#f3f2ef`
- Cream: `#f7f7f5`
- Pale green/grey band: `#e8eceb`
- Ink: `#080808`, `#10100f`, `#11100f`
- Body text: `#4b5356`, `#353b3e`
- Muted labels: `#667174`
- Warm legal/contact accent: `#786f64`, `#5f574f`
- Coasters-Sonderseite: Rubin-Akzent `#7A1028` / `#6f1d2d`

Regeln:

- Hauptseiten bleiben hell, ruhig, neutral.
- Flaechen wechseln zwischen `#f3f2ef`, `#f7f7f5` und `#e8eceb`.
- Schwarz nur fuer Text, Linien, aktive Buttons oder starke CTA-Flaechen.
- Neue Produktseiten sollen keine neue dominante Markenfarbe einfuehren.
- Akzentfarben nur bei klarer Untermarke oder Produktkampagne, wie `LuxuryCoastersPage`.

### Typografie

Globale Schrift:

- `--font-canela`: `"Canela Light", Canela, "Canela Deck", "Canela Text", "Times New Roman", serif`
- Body nutzt ebenfalls diese Serif-Schrift.
- `.serif` setzt `font-weight: 300`, `letter-spacing: 0.08em`, `text-transform: uppercase`.

Regeln:

- Ueberschriften und Markenlabels bleiben uppercase, weit gespationiert.
- Kleine Labels: `text-[0.68rem]`, uppercase, Tracking `0.2em` bis `0.28em`.
- Bodycopy: meist `text-sm leading-7` oder `text-base leading-8`.
- Keine zweite Schriftfamilie ohne Designentscheidung.
- Keine fetten, lauten Display-Groessen ausserhalb bestehender Skalen.

### Layout, Raster und Abstaende

Muster:

- Maximalbreite meist `max-w-[1540px]`.
- Standardsection: `.section-pad` = `clamp(4rem, 8vw, 8rem)` vertikal und `clamp(1.25rem, 4vw, 4rem)` horizontal.
- Hero/PageHero: zwei Spalten, links Titel, rechts Beschreibung.
- Homepage-Hero: `lg:grid-cols-[0.36fr_0.64fr]`, Bild rechts, Text links.
- Produktdetail: `lg:grid-cols-[0.55fr_0.45fr]`, Visual links, Details rechts.
- Legal/Kontakt: `max-w-7xl`, `lg:grid-cols-[0.9fr_1.1fr]`.

Regeln:

- Neue Seiten sollen bestehende Raster wiederverwenden: `PageHero`, `section-pad`, `max-w-[1540px]`.
- Keine verschachtelten Card-in-Card-Strukturen.
- Karten nur fuer wiederholte Entitaeten, Formulare oder Legal-Boxen.
- Grosszuegiger Weissraum ist Teil der Marke; keine dichten E-Commerce-Layouts.

### Linien, Karten und Buttons

Muster:

- Hairline-Klasse: `border-color: rgba(8, 8, 8, 0.16)`.
- Karten: `border hairline bg-[#f7f7f5]`, oft `p-5` bis `p-7`.
- Buttons: uppercase, klein, starkes Tracking, Border.
- Primaere Produkt-CTA: schwarzer Button mit weisser Schrift.
- Sekundaere CTAs: Border-Bottom oder helle Border-Buttons.
- Hover: sehr subtil, meist `hover:bg-[#f8f8f6]`, `hover:text-black`, leichte Bildskalierung `group-hover:scale-[1.02]`.

Regeln:

- Keine runden Pills oder verspielten Buttons.
- Keine starken Schatten.
- Keine grossen Animationen.
- Hover-Zustaende leise und funktional halten.

### Mobile und Desktop

Muster:

- Mobile: einspaltig, `px-5`, Navigation horizontal scrollbar.
- Desktop: breite Grids, `lg:px-10`, max. 1540 px.
- Produkt-/Collection-Grids: `sm:grid-cols-2`, `lg:grid-cols-3`, manchmal `xl:grid-cols-4/6/8`.
- RTL wird ueber `dir="rtl"` im Locale-Layout fuer Arabisch gesetzt.

Regeln:

- Texte muessen in einspaltigen mobilen Layouts ohne Ueberlauf funktionieren.
- Karten und Produktpreise in flexiblen Zeilen mit `gap` halten.
- Lange lokalisierte Labels vor allem in FR/ES/AR testen.

## 4. Bildsprache

Vorhandene Bildtypen:

- Homepage-Hero: `public/images/hero-lc2-blue.png`, 1535 x 1024, Interior-Kontext, als grosses rechtes Hero-Bild.
- Produktplatzhalter: SVGs mit `viewBox 0 0 900 1125`, also 4:5.
- Collection-Bilder: SVGs mit `viewBox 0 0 900 700`, ca. 9:7.
- Coasters-Seite: reale JPGs in `public/images/coasters`, meist breite Produkt-/Materialbilder.
- Produktdetailseiten nutzen derzeit `PlaceholderArtwork`, keine echten Produktfotos.

Regeln fuer zukuenftige Produktbilder:

- Produktkarten bevorzugt 4:5 oder kompatibel zu `aspect-[4/5]`.
- Detail-/Editorialbilder koennen breiter sein, aber muessen in die bestehenden Raster passen.
- Bildsprache: ruhige Hintergruende, natuerliches oder kontrolliertes Licht, sichtbare Materialoberflaeche.
- Keine lauten Stockfotos, keine generischen Luxus-Interiors ohne Produktbezug.
- Objekt muss erkennbar sein; keine uebermaessig dunklen, stark gecroppten oder rein atmosphaerischen Bilder.
- Materialdetails sind sinnvoll, wenn sie Haptik, Patina, Struktur oder Verarbeitung zeigen.
- Interior-Kontext ist passend, wenn Proportion, Nutzung und Raumwirkung sichtbar werden.
- Freisteller nur verwenden, wenn sie bewusst ruhig und galeristisch wirken.
- Alt-Texte beschreiben das Bild konkret: Objektart, Material, Kontext. Keine Keywordlisten.

## 5. Produktseiten-DNA

### Datenstruktur

Quelle: `app/data/products.ts`.

Produktfelder entstehen aus `categorySeeds`:

- `title`
- `slug`
- `category`
- `secondaryCategories`
- `maker`
- `type`
- `price`
- `status`
- `availability`
- `description`
- `dimensions`
- `material`
- `origin`
- `palette`

Statuswerte:

- `sofort-kaufen`
- `anfragen`
- `preis-auf-anfrage`
- `reserviert`
- `verkauft`

Verfuegbarkeit:

- `Verfuegbar`
- `Auf Anfrage verfuegbar`
- `Preis auf Anfrage`
- `Reserviert`
- `Verkauft`

Kategorien:

- Moebel
- Leuchten
- Kunst
- Teppiche
- Objekte
- Tabletop, im UI teils als Accessoires
- Collectible Design
- Editionen

### Kartenaufbau

Produktkarte:

1. Visual oder `PlaceholderArtwork`
2. Kategorie oder Maker als Eyebrow
3. Produkttitel in `.serif`
4. Maker-Link oder Zusatzinfo
5. Merken/Teilen via `EntityActions`
6. Preis rechts

Regeln:

- Preis nicht verstecken.
- Status und Preis logisch trennen.
- Bei Kunst/Editionen kann "Auf Anfrage" statt Preis stehen.
- Keine langen Produktbeschreibungen in Karten.

### Produktdetailseite

Quelle: `app/shop/[slug]/page.tsx` und lokalisierte Variante in `app/[locale]/[...slug]/page.tsx`.

Reihenfolge:

1. Grosses Visual links.
2. Zurueck-Link zur Kategorie.
3. Breadcrumb-Zeile: Shop / Kategorie / Titel.
4. H1 Produkttitel.
5. Preis und Verfuegbarkeit in einer Border-Zeile.
6. Beschreibung.
7. Merken/Teilen.
8. Details: Masse, Material, Herkunft.
9. CTA je Status.

Standardstruktur fuer neue Produktseiten:

- Titel: konkret, material- oder formbezogen.
- Slug: lesbar, klein, deutsch/transliteriert, keine Fantasiekuerzel.
- Kategorie: eine Hauptkategorie aus `shopCategories`.
- Preis: `EUR x,xxx`, `Ab EUR x,xxx`, `Auf Anfrage`, `Preis auf Anfrage` oder projektbezogene Formulierung.
- Status: einer der vorhandenen `ProductStatus`-Werte.
- Beschreibung: 2 Saetze, materialnah.
- Masse: exakte Werte oder "Individuelle Masse".
- Material: maximal praezise.
- Herkunft: Atelier, Werkstatt, Manufaktur, Kuenstlerposition oder reale Herkunft, wenn bekannt.
- Visual: echtes Bild nur wenn vorhanden und passend; sonst keine Fake-Bilder einfuehren.

### Anfrage und Checkout

`app/lib/commerce.ts` mappt Status auf CTA und steuert zusaetzlich die zentrale Commerce-CTA-Entscheidung. `prepareCheckout()` bleibt fuer den Warenkorb-Preview deaktiviert. Der Stripe-Testcheckout ist separat serverseitig vorbereitet, aber nur fuer `sitzobjekt-kuhfell`, nur bei aktivem Feature-Flag und vorhandenen Credentials sichtbar.

Regeln:

- Keine globale Stripe- oder Checkout-Aktivierung ohne ausdruecklichen Auftrag.
- Status "sofort-kaufen" fuehrt weiterhin zum Warenkorb/Status-Fallback; Checkoutfaehigkeit entsteht nicht automatisch aus dem Status.
- Der vorhandene Stripe-Testcheckout darf nicht als allgemeiner Shop-Checkout interpretiert werden.
- "Anfrage senden" und "Preis anfragen" fuehren zu Kontakt.
- Bei "Reserviert" und "Verkauft" Button deaktivieren.

### Fehlende/noch nicht vorhandene Elemente

Nicht vorhanden oder nur vorbereitet:

- Keine echte Galerie auf Produktdetailseiten.
- Keine Breadcrumb-Komponente, nur Textzeile.
- Keine Produktbilder pro Produkt, nur Platzhalter/Pooled Visuals.
- Keine aehnlichen Produkte im Detail.
- Keine aktive Suche.
- Keine aktive Warenkorb-/Checkout-Logik.
- Keine JSON-LD Product-/Breadcrumb-Schemas.

## 6. Mehrsprachigkeit

Unterstuetzte Sprachen in `app/lib/i18n.ts`:

- `de`
- `en`
- `fr`
- `es`
- `zh`
- `ar`

Technik:

- Lokalisierte Routen: `localizedRoutes`.
- Root-Redirects: `/` und alte Root-Pfade gehen nach `/de/...`.
- Kategorie-Slugs: fuer nicht-deutsche Shop-Kategorien werden englische Slugs genutzt (`furniture`, `lighting`, `rugs`, `objects`, `artworks`, `editions`, `accessories`).
- `getLanguageSwitchPath()` erhaelt Shop-Slugs beim Sprachwechsel.
- `app/[locale]/layout.tsx` setzt `lang` und fuer Arabisch `dir="rtl"`.
- `app/data/dictionaries.ts` enthaelt zentrale UI-, Home-, Shop-, Journal-, Collection- und Metadaten.
- Deutsche Seiten sind haeufig eigene Komponenten. Nicht-deutsche Seiten laufen teils ueber `LocalizedHomePage`, `LocalizedShopPage`, lokale Platzhalter oder englische Sonderseiten.

Regeln fuer neue Inhalte:

- Neue globale UI-Texte gehoeren in `app/data/dictionaries.ts`.
- Neue Produktdaten gehoeren zuerst in `app/data/products.ts`.
- Englische Produkttitel muessen in `app/lib/productTitles.ts` ergaenzt werden.
- Fuer FR/ES/ZH/AR existiert aktuell ein generischer Produktnamens-Fallback: `Curated Work 01` bzw. lokalisierte Entsprechung. Das ist fuer finale Produktseiten nur ein Platzhalter und sollte vor Launch echter Produktinhalte ersetzt werden.
- Neue Routen muessen in `RouteKey`, `localizedRoutes`, `rootRedirects`, Sitemap und ggf. Navigation/Dictionary gepflegt werden.
- Arabisch: Layout wird RTL gesetzt, aber einzelne englische Legal-Platzhalter setzen `lang="en" dir="ltr"`. Bei echten arabischen Texten auf Zeilenlaenge, Navigation und Formularfelder testen.

## 7. SEO-DNA

Vorhanden:

- Globale `metadataBase`: `https://www.getyour.design`.
- Globaler Title-Default und Template in `app/layout.tsx`.
- Keywords in `app/layout.tsx`.
- Open Graph global fuer Website.
- Robots global `index, follow`.
- Pinterest-Verifikation.
- Pro Seite `metadata` mit `title`, `description`, `canonical`.
- Lokalisierte Seiten erzeugen `alternates.languages` mit hreflang und `x-default`.
- Sitemap in `app/sitemap.ts` mit statischen Routen, Shop-Kategorien und Produkten.
- Warenkorb ist lokalisiert auf `noindex, nofollow`.

Nicht gefunden:

- Keine JSON-LD-Ausgabe.
- Kein Product-Schema.
- Kein Breadcrumb-Schema.
- Kein explizites Open-Graph-Bild im analysierten Code.
- Kein `next/image` fuer die meisten Bilder; Ausnahme `LuxuryCoastersPage`.

Regeln fuer neue Produktseiten:

- Title: Produkttitel, durch Template automatisch `| GETYOUR.DESIGN`.
- Meta Description: Produkttitel + Kategorie + Material + Preis, kurz und konkret.
- Canonical: lokalisierter Produktpfad.
- hreflang: alle sechs Locales plus `x-default`.
- Alt-Text: Bild konkret beschreiben, keine SEO-Wiederholung.
- H1 nur einmal pro Seite.
- H2 fuer Abschnitte wie Material, Herkunft, Details, Anfrage.
- Interne Links: Kategorie, Shop, relevante Kollektion, Atelier/Hersteller, Kontakt.
- Bei spaeterer Implementierung: Product-Schema erst hinzufuegen, wenn Preis, Verfuegbarkeit, Bild, Brand/Maker und rechtlicher Angebotsstatus belastbar sind.

## 8. Technische Architektur

Zentrale Verzeichnisse:

- `app/page.tsx`: deutsche Startseite.
- `app/components/LocalizedHomePage.tsx`: nicht-deutsche Startseiten.
- `app/[locale]/page.tsx`: lokalisierte Homepage-Metadaten und Routing.
- `app/[locale]/[...slug]/page.tsx`: lokalisierte dynamische Routen, lokalisierte Shop- und Legal-Logik.
- `app/shop/page.tsx`: deutscher Shop-Hub.
- `app/shop/[slug]/page.tsx`: deutsche Kategorie- und Produktdetailseite.
- `app/data/products.ts`: Produkt- und Kategorie-Daten.
- `app/data/dictionaries.ts`: Uebersetzungen und lokalisierte UI-Texte.
- `app/lib/i18n.ts`: Locales, Routen, Slug-Aufloesung, Sprachwechsel.
- `app/lib/commerce.ts`: CTA-Statuslogik, Checkout vorbereitet aber inaktiv.
- `app/components/PageHero.tsx`: Standard-Hero fuer Unterseiten.
- `app/components/PlaceholderArtwork.tsx`: Produkt-/Artwork-Platzhalter.
- `app/components/EntityActions.tsx`: Merken/Teilen, localStorage.
- `app/components/Navigation.tsx` und `Footer.tsx`: globale Navigation.
- `public/images`: statische Assets.

Stellen fuer neue Produkte:

1. `app/data/products.ts`: Produktdaten.
2. `app/lib/productTitles.ts`: englischer Titel.
3. Optional `public/images/...`: echte Bilddateien, wenn vorhanden.
4. Falls echte Produktbilder eingefuehrt werden: Produktdatenstruktur und Karten/Detailseiten minimal erweitern, statt pro Produkt Komponenten zu duplizieren.
5. Sitemap wird automatisch aus `products` und `shopCategories` generiert.

Nicht duplizieren:

- Keine neue Produktdetail-Komponente, solange `app/shop/[slug]/page.tsx` und `LocalizedShopSlugPage` erweitert werden koennen.
- Keine zweite i18n-Struktur neben `dictionaries.ts` und `i18n.ts`.
- Keine neuen Button-/Hero-Stile fuer Standardseiten.
- Keine Checkout-Provider-Logik ausserhalb von `app/lib/commerce.ts`, solange Checkout nicht beauftragt ist.

## 9. Anti-Roboter-Regeln

Vermeiden:

- "vereint Form und Funktion"
- "setzt neue Massstaebe"
- "zeitlose Eleganz"
- "fuer anspruchsvolle Kunden"
- "ein echtes Statement"
- "perfekte Symbiose"
- "hochwertige Materialien treffen auf"
- "luxurioeses Highlight"
- "must-have"
- "einzigartiges Designerstueck" ohne belegbare Einzigartigkeit
- "perfekt fuer jedes Zuhause"
- generische Dreierlisten wie "stilvoll, elegant und modern"
- nicht belegbare Superlative: "beste", "exklusivste", "unvergleichlich"
- KI-typische Saetze wie "Dieses Produkt ist mehr als nur..."

Stattdessen:

- Material konkret nennen: "geoelte Eiche", "patinierte Bronze", "mundgeblasenes Glas".
- Form konkret nennen: "niedrige Bank", "klare Kante", "Griffoeffnung", "flache Schale".
- Herstellung nennen, wenn belegt: "gegossen", "handgeformt", "handgeknoepft", "geschnitzt".
- Eigenschaften nennen: Masse, Gewicht, Oberflaeche, Patina, Edition, Verfuegbarkeit.
- Raumbezug sparsam verwenden: "als niedriger Akzent", "fuer offene Raeume", "auf Tisch, Sockel oder Wand".
- Saetze kurz halten.
- Keine Emotion erzwingen; Wirkung aus Material und Proportion ableiten.

## 10. Checkliste fuer neue Produkte

Content:

- Titel beschreibt Objektart und Material/Form.
- Kategorie ist eine bestehende Shop-Kategorie.
- Beschreibung besteht aus 1 bis 2 konkreten Absaetzen.
- Material, Masse, Herkunft und Verfuegbarkeit sind gepflegt.
- Preisformat ist konsistent.
- Keine Luxusfloskeln oder Superlative.

Bilder:

- Echtes Produktbild vorhanden und rechtlich nutzbar.
- Dateiname klein, sprechend, ohne Leerzeichen.
- Dateiendung passt zum tatsaechlichen Dateityp.
- Produktkartenbild funktioniert in 4:5.
- Detail-/Editorialbild zeigt Material oder Raumwirkung klar.
- Alt-Text beschreibt Bildinhalt.

Uebersetzungen:

- EN-Titel in `productTitles.ts`.
- Alle UI-/Kategorie-/CTA-Texte aus `dictionaries.ts` nutzen.
- FR/ES/ZH/AR nicht mit generischen Platzhaltern launchen, wenn Produktseite final sein soll.
- Arabisch auf RTL, Zeilenlaenge und Layout testen.

SEO:

- Title und Meta Description konkret.
- Canonical korrekt.
- hreflang in lokalisierten Routen erhalten.
- H1 eindeutig.
- Interne Links zu Kategorie, Shop, Kontakt und ggf. Atelier.
- Schema erst ergaenzen, wenn Daten vollstaendig und rechtlich belastbar sind.

Technik:

- Produktdaten zentral in `app/data/products.ts`.
- Keine neue Route pro Produkt.
- Keine Komponenten duplizieren.
- CTA ueber `getProductCta()` bzw. lokalisierte Statuslogik fuehren.
- Keine Stripe-/Checkout-Integration ohne Auftrag.

QA:

- `npm run build` ausfuehren.
- Deutsche Produktseite und mindestens eine lokalisierte Produktseite pruefen.
- Kategorieuebersicht pruefen.
- Sprachwechsel auf Produktdetail pruefen.
- Mobile und Desktop pruefen.
- Bild-URL direkt pruefen.

Mobile:

- Titel bricht sauber um.
- Preis und Verfuegbarkeit laufen nicht aus dem Container.
- Buttons bleiben bedienbar.
- Kartenabstaende bleiben luftig.

Performance:

- Bilder nicht unnoetig gross einbinden.
- Keine neuen Abhaengigkeiten fuer reine Content-Erweiterungen.
- `next/image` nur mit sauberer Groesse/Sizes-Konfiguration verwenden.

Rechtliches:

- Keine verbindlichen Zusagen zu Verfuegbarkeit, Zustand, Lieferung oder Checkout, wenn nicht bestaetigt.
- Bei Einzelstuecken, Kunst, Vintage, Patina und Sonderanfertigung rechtliche Vorsicht beibehalten.
- Betreiber- und Kontaktangaben nicht pro Seite kopieren, wenn zentrale Legal-Inhalte genutzt werden koennen.

Checkout-Vorbereitung:

- Statuslogik pruefen.
- "In den Warenkorb" nur fuer `sofort-kaufen`.
- Anfragen fuer `anfragen` und `preis-auf-anfrage`.
- Reserviert/verkauft deaktiviert.
- Keine Zahlungsarten nennen, solange Checkout nicht final aktiviert ist.

## Bestehende Inkonsistenzen und Unsicherheiten

Inkonsistenzen:

- Produktdaten sind deutsch; EN hat echte Produkttitel in `productTitles.ts`, FR/ES/ZH/AR nutzen generische Produktnamen wie "Curated Work 01".
- Manche deutschen Root-Pfade wie `/shop` existieren technisch weiter und redirecten teils nach `/de/shop`; deutsche Komponenten haben dennoch Canonicals wie `/shop`.
- Legal-Seiten sind deutsch rechtsverbindlich, englisch convenience version, andere Sprachen zeigen englische Legal-Platzhalter.
- Die Coasters-Seite hat eine eigene, rubinrote Kampagnen-DNA und reale Produktfotos; sie weicht bewusst von der neutralen Hauptseiten-DNA ab.
- Shop-Produktdetailseiten verwenden Platzhaltervisuals, waehrend die Homepage teilweise statische SVG-Produktbilder nutzt.
- `Tabletop` wird im UI teils als "Accessoires" angezeigt; Datenkategorie bleibt `Tabletop`.
- Suche, Warenkorb und Arbeit-einreichen sind vorbereitet, aber nicht voll funktional.
- `app/page.tsx` enthaelt eine ungenutzte Funktion `ProductVisual`; sie wurde nicht geaendert.

Unsicherheiten:

- Reale Markenwerte ausserhalb der Website sind nicht bekannt.
- Ob alle Produktdaten Platzhalter oder finale Katalogeintraege sind, ist aus dem Code nicht eindeutig ableitbar.
- Rechtliche Anforderungen fuer echte Checkout-/Produkt-Schema-Daten muessen vor Aktivierung extern geprueft werden.
- Fuer echte Produktbilder fehlen im aktuellen Hauptkatalog produktbezogene Dateien; zukuenftige Bildregeln basieren daher auf vorhandenen Assets und Layouts.
