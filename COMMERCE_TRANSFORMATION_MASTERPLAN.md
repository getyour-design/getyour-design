# GETYOUR.DESIGN – COMMERCE TRANSFORMATION MASTERPLAN

**Status:** Verbindliche Referenz vor jeder Commerce-Implementierung
**Arbeitsprinzip:** Repository-first, non-destructive editing
**Projekt:** `/Users/ibt/Code/getyour-design`

**Umsetzungsstand ergänzt am 2026-07-13 fuer committed HEAD `3520e12`:** Dieser Masterplan bleibt als Phasenplan bestehen. Die Statuszeilen in den Phasen dokumentieren nur, was bereits im Repository umgesetzt wurde; sie ersetzen nicht die jeweiligen Schutzregeln.

## 1. Zweck

Dieser Masterplan steuert die kontrollierte Transformation von GETYOUR.DESIGN zu einer internationalen Commerce-First-Plattform, ohne bestehende Marken-, SEO-, Routing-, i18n-, Affiliate-, Pinterest- oder Content-Werte zu beschädigen.

Er ergänzt:

- `PROJECT_DNA_FULL.md`
- `GETYOUR_DESIGN_BRAND_DNA.md`

Priorität bei Widersprüchen:

1. Tatsächlicher Repository-Zustand
2. Repository-first, non-destructive editing
3. Bestehende URLs, Slugs, Canonicals, hreflang und funktionierende Inhalte
4. `PROJECT_DNA_FULL.md`
5. `GETYOUR_DESIGN_BRAND_DNA.md`
6. Dieser Masterplan
7. Einzelauftrag

## 2. Ausgangslage

Bereits vorhanden:

- Next.js App Router
- sechs Sprachen: DE, EN, FR, ES, ZH, AR
- lokalisierte Routen
- Shop-Kategorien und Produktmodell
- Produktkarten und Produktdetailseiten
- Produktstatus und CTA-Logik
- Sitemap, Canonicals und hreflang
- Open-Graph-Grundlagen und Pinterest-Verifikation
- Kunst-, Collection-, Journal-, Material-, Atelier- und Projektbereiche
- ein reales Produkt mit Bildern und vollständig lokalisierter Detailseite
- Stripe-Testcheckout serverseitig vorbereitet und feature-gated fuer `sitzobjekt-kuhfell`
- additive Commerce-Felder im Produktmodell
- zentrale Commerce-CTA-Entscheidung
- Brand-, Room- und Collection-Datenmodelle als vorbereitete interne Architektur
- Affiliate-Readiness-Dokumentation ohne aktive Partner oder Live-Links
- interne Filterarchitektur ohne sichtbare Filter-UI
- 16 sichtbare Commerce-Kategorien in Shop, Routing und Sitemap

Noch nicht produktiv vorhanden:

- echter Warenkorbzustand
- aktiver Stripe Checkout
- Bestellpersistenz
- vollständiges Affiliate-Produktsystem
- öffentliche Brand-Detailseiten
- öffentliche Room-Seiten
- sichtbare Filter-UI und aktive Suche
- CMS oder Datenbank

Affiliate- und Pinterest-Funktionen müssen immer als **vorhanden**, **vorbereitet** oder **geplant** klassifiziert werden. Nichts darf erfunden werden.

## 3. Zielbild

GETYOUR.DESIGN wird eine internationale Commerce-First-Plattform für hochwertiges Wohnen, Design, Kunst und kuratierte Objekte.

Unterstützte Geschäftsmodelle:

- Direktverkauf
- Affiliate-Produkte
- Hersteller- und Markenprodukte
- Manufakturprodukte
- Kunstwerke
- Editionen
- Collectible Design
- projektbezogene Leistungen

Differenzierung:

- kuratorische Auswahl
- materialnahe Sprache
- ruhige visuelle Identität
- Kunst und Collectible Design
- Journal und Storytelling
- Interior-Projekte
- Atelier- und Herstellerbezug
- Pinterest-fähige Bildstruktur

## 4. Unveränderliche Schutzregeln

Ohne ausdrückliche Freigabe niemals ändern:

- URLs und Slugs
- Canonicals und hreflang
- Locale-Routing und Middleware
- Sitemap-Logik
- bestehende Kategorien und Collections
- Kunst-, Journal- und Legal-Inhalte
- bestehende Produktstatus und Produktdaten
- Navigation und Design-Tokens

Jede Änderung muss bevorzugt:

- optionale Felder ergänzen,
- bestehende Komponenten erweitern,
- rückwärtskompatibel bleiben,
- alte Pfade erhalten,
- bestehende Fallbacks bewahren.

Nicht erlaubt:

- pauschale URL-Migration
- globale Canonical-Umstellung
- neue parallele Shop- oder i18n-Architektur
- globale Sortieränderungen durch Datenreihenfolge
- Einführung von CMS, Datenbank oder Suchplattform ohne eigenen Architekturentscheid

**Ein Thema pro Commit. Kein Push ohne Freigabe.**

## 5. Zielarchitektur

Langfristige Hauptebenen:

- SHOP
- BRANDS
- ROOMS
- COLLECTIONS
- ART
- JOURNAL
- PROJECTS

Produktdimensionen:

- category
- brand
- rooms
- collections
- material
- style
- country
- availability
- productType
- commerceMode

Commerce-Modi:

- `direct`: eigener Checkout
- `affiliate`: externer Partnerlink
- `inquiry`: Anfrage
- `artwork`
- `edition`
- `service`

Keine Vermischung der CTAs.

## 6. Additive Produktmodell-Erweiterung

Bestehende Felder bleiben erhalten. Neue Felder zunächst optional:

```ts
brand?: string
brandSlug?: string
rooms?: string[]
collections?: string[]
affiliateLink?: string
affiliatePartner?: string
affiliateCategory?: string
country?: string
style?: string[]
relatedProducts?: string[]
externalId?: string
sourceSystem?: string
sourceUrl?: string
productType?: "affiliate" | "physical" | "manufacturer" | "brand" | "artwork" | "edition" | "collectible" | "service"
commerceMode?: "direct" | "affiliate" | "inquiry"
shippingProfile?: string
taxCode?: string
inventoryMode?: "tracked" | "untracked" | "made-to-order" | "single-piece"
```

Regeln:

- bestehende Produkte funktionieren unverändert,
- keine Feldbelegung erfinden,
- keine Markenpartnerschaften voraussetzen,
- Affiliate-Links nur mit echten Programmdaten,
- interne Quellenfelder nicht unnötig öffentlich ausgeben.

## 7. Kategorien-Zielbild

Bestehende Kategorien bleiben erhalten.

Geplante Erweiterungen:

- Furniture
- Lighting
- Rugs
- Decoration
- Accessories
- Tableware
- Glassware
- Kitchen
- Textiles
- Outdoor
- Garden
- Bedroom
- Dining
- Office
- Bath
- Kids
- Art
- Collectible Design
- Editions

Eine Kategorie darf erst live gehen, wenn definiert sind:

- lokalisierter Titel und Slug
- Description
- Canonical und hreflang
- Sitemap-Verhalten
- Produktzuordnung
- interne Verlinkung
- Bild-/OG-Strategie
- leerer Zustand

## 8. Brand-System

Skalierbare Brand-Ebene:

```ts
type Brand = {
  name: string
  slug: string
  description?: string
  country?: string
  website?: string
  logo?: string
  heroImage?: string
  featured?: boolean
  localized?: Record<Locale, LocalizedBrandContent>
}
```

Zielroute:

```text
/{locale}/brands/{brand}
```

Keine Marke öffentlich als Partner darstellen, solange keine reale Produkt-, Händler- oder Affiliate-Beziehung besteht.

## 9. Room-System

Produkte können mehreren Räumen zugeordnet werden:

- Living Room
- Dining Room
- Bedroom
- Kitchen
- Office
- Outdoor
- Garden
- Bath
- Kids

Room-Seiten sind kaufbare Orientierungsseiten und keine Kopien von Kategorien.

## 10. Collection-System

Collections bleiben unabhängig von Kategorien und können Produkte aus mehreren Kategorien, Marken und Räumen enthalten.

Beispiele:

- Quiet Luxury
- Italian Design
- Modern Villa
- Scandinavian Living
- Outdoor Living
- Coastal Living
- Urban Loft
- Timeless Design

Bestehende Collection-Slugs und Inhalte bleiben erhalten.

## 11. Affiliate-Architektur

Ein Affiliate-Produkt benötigt:

- `commerceMode: "affiliate"`
- `affiliateLink`
- `affiliatePartner`
- externe CTA
- klare Kennzeichnung
- `rel="sponsored nofollow noopener noreferrer"`
- keine Darstellung als eigener Verkäufer
- Preis-/Verfügbarkeitsdisclaimer
- keine Stripe-Verarbeitung

Westwing und Connox dürfen nur als UX- und Strukturreferenz dienen.

Nicht erlaubt:

- Texte oder Bilder kopieren
- Produktdaten ohne Rechte übernehmen
- Partnerschaften behaupten
- identische Seitenlayouts reproduzieren

## 12. Pinterest- und Bildschutz

Jede Commerce-Erweiterung prüft:

- Open-Graph-Bild
- Bildformat und Bildpfad
- Alt-Text
- Produktbild-URL
- Collection- und Journal-Verknüpfung
- Share-Link
- Canonical

Keine bestehenden Bildpfade ohne Migration ändern.

## 13. SEO-Schutzmatrix

Unverändert erhalten:

- bestehende Canonicals
- hreflang-Beziehungen
- Slugs
- Sitemap-Einträge
- Root-Redirects
- Kategorie-, Produkt-, Journal- und Kunst-URLs

Neue Brand-, Room- und Collection-Seiten werden erst indexierbar, wenn sie:

- echten Inhalt besitzen,
- stabile Canonicals und hreflang haben,
- intern verlinkt sind,
- keine leeren Templates darstellen,
- eine eindeutige Suchintention bedienen.

Product- und Breadcrumb-JSON-LD erst aktivieren, wenn Preis, Verfügbarkeit, Bild, Verkäuferstatus und Produkttyp belastbar sind.

# PHASENPLAN

## Phase 0 – Governance und Baseline

Status: abgeschlossen.
Commit: `6b00e7b Document commerce baseline`.
Hinweis: `COMMERCE_BASELINE.md` bleibt historischer Phase-0-Snapshot und wird nicht zum aktuellen Ist-Zustand umgeschrieben.

Ziel:

- aktuellen Git-Stand sichern,
- bestehende Routen, Kategorien, Status, Sitemap, Canonicals und hreflang dokumentieren,
- Build und Screenshots sichern.

Keine funktionalen Änderungen.

## Phase 1 – Produktmodell Commerce-fähig erweitern

Status: abgeschlossen.
Commit: `144c41c Extend product model for commerce modes`.

Ziel:

- optionale Felder für Direct, Affiliate, Brand, Room und Collection.

Grenzen:

- keine neuen Routen,
- keine Navigation,
- keine Homepage- oder Sitemap-Änderung,
- bestehende Produkte unverändert.

Commit:

`Extend product model for commerce modes`

## Phase 2 – Stripe-Probelauf mit dem Kuhfell-Sitzobjekt

Status: abgeschlossen als Testcheckout, nicht global live aktiviert.
Commits: `4bf5a32 Prepare Stripe test checkout for cowhide seat`, `7a7a15a Harden Stripe checkout validation`.

Umfang:

- ausschließlich dieses Produkt,
- Stripe Testmodus,
- serverseitige Checkout-Session,
- Success- und Cancel-Seite,
- Webhook,
- Bestellreferenz,
- Testzahlung.

Noch nicht:

- globaler Warenkorb,
- mehrere Produkte,
- Coupons,
- komplexe Versandzonen,
- Shop-weite Checkout-Aktivierung.

Vor Livegang prüfen:

- Lieferzeit
- Versandkosten
- Widerruf/Rückgabe
- AGB
- Datenschutz mit Stripe
- Produktverfügbarkeit

Commit-Schnitt:

1. Checkout Session
2. Success/Cancel
3. Webhook
4. Produkt-CTA

## Phase 3 – Commerce-Modi und CTA-System

Status: abgeschlossen.
Commit: `37bc285 Unify commerce CTA modes`.
Ergaenzung: Die sichtbare Commerce-Praesentation auf Produktseiten wurde mit `518f507 Add unified commerce presentation to product pages` vereinheitlicht.

Zentrale Trennung:

- direct
- affiliate
- inquiry

Ein zentraler Helper steuert:

- CTA-Label
- interne/externe URL
- disabled state
- sponsored/nofollow
- Checkoutfähigkeit
- Anfragepfad

## Phase 4 – Brand-Datenmodell

Status: abgeschlossen als Datenmodell-Vorbereitung.
Commits: `eaf025e Prepare brand data model`, `0da79b0 Prepare scalable brand data model`.

- Brand-Typ
- Datenquelle
- Produktzuordnung
- Ateliers nicht ersetzen
- noch keine große Navigation

## Phase 5 – Brand-Seiten

Status: offen.

- Brand-Index
- Brand-Detail
- lokalisierte Metadaten
- interne Links
- Produkte nach Brand

Erst mit echten Daten indexierbar.

## Phase 6 – Room-System

Status: teilweise abgeschlossen.
Commit: `78e5da9 Prepare scalable room data model`.
Umgesetzt ist das interne Room-Datenmodell mit Helpern; öffentliche Room-Seiten bleiben offen.

- Room-Datenmodell
- Room-Zuordnung
- Room-Index und Detailseiten
- Kategorien bleiben unverändert

## Phase 7 – Collections commerce-fähig machen

Status: teilweise abgeschlossen.
Commit: `2ca6e40 Prepare collections for commerce assignments`.
Umgesetzt sind additive Collection-Felder und Helper; sichtbare Commerce-Collection-Seiten und Produktzuordnungen bleiben offen.

- Produkte mit bestehenden Collections verbinden
- Editorial Intro
- Produktgrid
- Journal-Links
- Pinterest-/OG-Bilder
- bestehende Slugs schützen

## Phase 8 – Kategorien erweitern

Status: abgeschlossen fuer Datenmodell, Routing, lokalisierte Slugs, Sitemap und sichtbare Shop-Kategorieebene.
Commits: `1570857 Prepare complete commerce category data model`, `62cc25d Expose complete commerce category layer`, `3520e12 Fix localized commerce category labels`.

Nicht alle gleichzeitig.

Empfohlene Reihenfolge:

1. Tableware
2. Glassware
3. Decoration
4. Textiles
5. Outdoor

Jede Kategorie eigener Commit.

## Phase 9 – Commerce Navigation

Status: offen.

Mögliches Ziel:

- SHOP
- BRANDS
- ROOMS
- COLLECTIONS
- ART
- JOURNAL
- PROJECTS

Vor Umsetzung:

- Desktop, Mobile und RTL prüfen,
- bestehende URLs wiederverwenden,
- Labels nicht mit Routen verwechseln,
- Sprachumschalter schützen.

## Phase 10 – Homepage Commerce Transformation

Status: begonnen.
Commit: `abfa694 Add featured commerce product to homepage`.
Umgesetzt ist eine Featured-Commerce-Produktsektion auf der Homepage. Weitere visuelle Homepage-Commerce-Schritte sind nicht Teil des committed Stands `3520e12`, sofern sie nur uncommitted im Working Tree liegen.

Schrittweise, Sektion für Sektion:

- Shop-Kategorien
- Featured Products
- Neuheiten
- Brands
- Rooms
- Collections
- Art
- Journal
- Projects

Schutz:

- Hero-DNA bewahren,
- Kunst und Journal sichtbar lassen,
- keine Discount-Optik,
- keine globale Produktreihenfolge ändern,
- jede Sektion separater Commit.

## Phase 11 – Filterarchitektur

Status: abgeschlossen als interne Architektur ohne sichtbare UI.
Commit: `058a135 Prepare scalable product filter architecture`.

Filter:

- Brand
- Room
- Collection
- Category
- Material
- Style
- Country
- Availability

Zunächst ohne externe Suche, Datenbank oder neue Library.

## Phase 12 – Affiliate-Rollout

Status: Readiness abgeschlossen, Rollout offen.
Commit: `9a52fd8 Prepare affiliate commerce readiness`.
Es gibt keine aktiven Affiliate-Produkte, keine Partnerlinks und keine Tracking-IDs.

Voraussetzungen:

- tatsächliche Affiliate-Zulassung
- Kennzeichnungsregeln
- Produktdaten- und Bildrechte
- Tracking
- Partnerzuordnung
- Preis-/Verfügbarkeitsdisclaimer

Pilot:

- Tableware
- Glassware
- Accessories

Erst Conversion und Tracking validieren, dann skalieren.

## 14. Minimal Viable Commerce Transformation

Kleinste sinnvolle erste Ausbaustufe:

1. Baseline sichern
2. Produktmodell additiv erweitern
3. Stripe Checkout nur für das Kuhfell-Sitzobjekt
4. Direct/Affiliate/Inquiry sauber trennen
5. eine affiliate-fähige Kategorie vorbereiten
6. eine kleine Commerce-Sektion auf der Homepage ergänzen
7. Ergebnisse auswerten

Nicht für das MVP erforderlich:

- komplette Navigationstransformation
- alle Brands und Rooms
- alle Kategorien
- Filter
- Datenbank
- CMS
- Suchdienst
- tausende Produkte

## 15. Freigabepunkte

Vor jeder Phase beantworten:

1. Was ist das Geschäftsziel?
2. Welche Dateien sind betroffen?
3. Was bleibt garantiert unverändert?
4. Welche URLs sind betroffen?
5. SEO-Auswirkungen?
6. i18n-Auswirkungen?
7. Affiliate-Auswirkungen?
8. Pinterest-Auswirkungen?
9. Performance-Auswirkungen?
10. Regressionstests?
11. Rollback-Pfad?
12. separater Commit?

Ohne klare Antwort keine Implementierung.

## 16. Standardauftrag für Codex

```text
Repository-first, non-destructive editing.

Lies vollständig:
- PROJECT_DNA_FULL.md
- GETYOUR_DESIGN_BRAND_DNA.md
- COMMERCE_TRANSFORMATION_MASTERPLAN.md

Setze ausschließlich die ausdrücklich genannte Phase um.

Vor Code:
1. Ist-Zustand analysieren
2. betroffene Dateien nennen
3. Risiken benennen
4. Auswirkungen auf SEO, i18n, Affiliate, Pinterest, Performance, Navigation und Conversion bewerten
5. bestätigen, was unverändert bleibt
6. Umsetzungsplan nennen

Während der Umsetzung:
- nur additive, minimale Änderungen
- keine Refactorings außerhalb der Phase
- keine URL-/Slug-/Canonical-/hreflang-/Sitemap-Änderungen ohne ausdrückliche Freigabe
- keine Inhalte löschen
- keine parallele Architektur
- bestehende Komponenten wiederverwenden

Nach der Umsetzung:
- git diff --check
- npm run build
- Regressionstests
- geänderte Dateien und Risiken berichten
- thematisch kleinen Commit erstellen
- nicht pushen
```

## 17. Definition of Done

Eine Phase ist nur abgeschlossen, wenn:

- Ziel erreicht
- keine bestehenden Funktionen beschädigt
- Build erfolgreich
- Regressionstests erfolgreich
- URLs stabil
- i18n geprüft
- SEO geprüft
- Affiliate/Pinterest geprüft
- Performance geprüft
- Git-Diff klein und nachvollziehbar
- Commit thematisch sauber
- kein Push ohne Freigabe

## 18. Offene langfristige Entscheidungen

Noch nicht entscheiden:

- CMS
- Datenbank
- Warenwirtschaft
- ERP
- Suchdienst
- automatischer Produktimport
- Feed-Management
- Multi-Currency
- internationale Steuerautomatisierung
- komplexe Versandlogik
- Kundenkonto
- Rezensionen

Diese Entscheidungen werden erst getroffen, wenn reale Produktanzahl, Umsatz, Traffic und operative Anforderungen es rechtfertigen.

## 19. Empfohlener nächster Schritt

1. Phase 0: Baseline dokumentieren.
2. Phase 2: Stripe-Probelauf nur für das bestehende Kuhfell-Sitzobjekt.
3. Phase 1 nur soweit vorbereiten, wie sie für Checkout oder Affiliate-Pilot tatsächlich benötigt wird.

Die Commerce-Transformation wird nicht in einem einzigen Coding-Lauf umgesetzt. Sie wird unter diesem Masterplan kontrolliert, phasenweise und in rückwärtskompatiblen Deltas durchgeführt.
