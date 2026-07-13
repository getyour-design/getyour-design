# GETYOUR.DESIGN Project Specification

## Projektuebersicht

GETYOUR.DESIGN ist ein kuratiertes Luxury-Design-Marktplatzkonzept auf Basis von Next.js App Router. Die Anwendung praesentiert Contemporary Design, Kunst, Moebel, Objekte, Leuchten, Teppiche, Editionen, Ateliers und Materialien in einem ruhigen, editorialen Frontend.

Das Projekt ist aktuell primaer eine statisch generierte Content- und Discovery-Plattform. Es nutzt lokale Datenquellen unter `app/data`, zentrale React-Komponenten unter `app/components` und ein eigenes Locale-Routing fuer Deutsch, Englisch, Franzoesisch, Spanisch, Mandarin/Simplified Chinese und Arabisch.

Die Codebasis ist bewusst leichtgewichtig: keine externe CMS-Anbindung, kein aktiver Checkout, keine globale State-Library und keine zusaetzlichen UI-Frameworks.

Aktualisierung zum committed Repository-Stand `3520e12` vom 2026-07-13: Es gibt inzwischen eine serverseitige, feature-gated Stripe-Testcheckout-Vorbereitung ausschliesslich fuer `sitzobjekt-kuhfell`. Das ist kein global aktiver Checkout und kein echter Warenkorbzustand. Ohne `STRIPE_CHECKOUT_ENABLED=true` und `STRIPE_SECRET_KEY` bleibt die bestehende Anfrage-/Statuslogik aktiv. Die Spezifikation beschreibt daher weiterhin die produktive Zurueckhaltung, muss aber die vorhandene Testcheckout-, Commerce-CTA-, Kategorie-, Filter-, Brand-, Room-, Collection- und Affiliate-Readiness-Architektur beruecksichtigen.

## Ziel und Business Case

Ziel ist der Aufbau einer hochwertigen digitalen Praesenz fuer kuratierte Designobjekte, Kunstwerke, Materialien und Ateliers. Die Seite soll Vertrauen, Geschmack und kuratorische Kompetenz vermitteln und langfristig als Grundlage fuer Commerce, Projektanfragen, private Beschaffung, Atelier-Kooperationen und internationale Discovery dienen.

Der Business Case besteht aus mehreren moeglichen Erloes- und Lead-Kanaelen:

- kuratierter Design-Shop mit zukuenftigem Checkout oder Anfrageprozess
- Produkt- und Atelier-Anfragen fuer private Kundschaft
- Trade- und Projektanfragen von Interior Design, Architektur, Hospitality und Sammlern
- Sichtbarkeit fuer Kuenstler, Ateliers, Marken und Editionen
- Pinterest-, SEO- und GEO-basierte Discovery fuer internationale Zielgruppen

## Tech Stack

- Framework: Next.js 15 mit App Router
- UI Runtime: React 19
- Sprache: TypeScript 5 mit strict mode
- Styling: Tailwind CSS 4 ueber `@import "tailwindcss"` in `app/globals.css`
- Package Manager: npm, inklusive `package-lock.json`
- Rendering: statische und serverseitig generierte App-Router-Seiten
- Daten: lokale TypeScript-Datenmodule in `app/data`
- i18n: eigenes Locale-Routing und zentrale Dictionaries, keine externe i18n-Library
- Middleware: Next.js Middleware fuer Redirects und Legacy-Pfade
- Deployment-Ziel: Next/Vercel-taugliche statische App

Wichtige Skripte aus `package.json`:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Hinweis: Das vorhandene `lint`-Script nutzt `next lint`. Bei Next.js 15 kann diese CLI je nach installierter Version eingeschraenkt oder entfernt sein. Vor Aenderungen pruefen, ob das Script im aktuellen lokalen Setup noch lauffaehig ist.

## Ordnerstruktur

```text
app/
  [locale]/
    page.tsx
    layout.tsx
    [...slug]/page.tsx
  components/
  data/
  lib/
  api/
  shop/
  luxury-coasters/
  globals.css
  layout.tsx
  page.tsx
  sitemap.ts
docs/
  legal.md
public/
  images/
  robots.txt
seo-audit-getyour-design/
middleware.ts
next.config.ts
package.json
postcss.config.mjs
tsconfig.json
```

### Wichtige Bereiche

- `app/page.tsx`: deutsche Startseite als Haupt-Home-Implementierung.
- `app/[locale]/page.tsx`: lokalisierte Startseiten fuer `de`, `en`, `fr`, `es`, `zh`, `ar`.
- `app/[locale]/[...slug]/page.tsx`: zentrale Catch-all-Route fuer lokalisierte Inhalts-, Shop-, Legal- und Placeholder-Seiten.
- `app/data/dictionaries.ts`: zentrale Uebersetzungs- und Fallback-Struktur.
- `app/data/brands.ts`: additive Brand-/Atelier-Datenstruktur mit Helpern.
- `app/data/rooms.ts`: vorbereitete Room-Datenstruktur mit Helpern.
- `app/data/collections.ts`: Collections mit optionalen Commerce-/SEO-Feldern und Helpern.
- `app/lib/i18n.ts`: Locale-Liste, Route-Mapping, hreflang-Helper, Shop-Slug-Helper, Link-Lokalisierung.
- `app/lib/commerce.ts`: Status-CTA, Commerce-CTA, Stripe-Testcheckout-Gating, Affiliate-Readiness und Checkout-Validierung.
- `app/lib/productFilters.ts`: interne pure Filterarchitektur ohne sichtbare UI.
- `app/components/ProductCommerceBlock.tsx`: einheitliche Produkt-Commerce-Praesentation.
- `app/components/CheckoutButton.tsx`: clientseitiger Redirect-Button fuer serverseitig erzeugte Stripe-Checkout-Sessions.
- `app/api/checkout/route.ts`: serverseitige Checkout-Session-Erzeugung fuer die Whitelist.
- `app/api/stripe/webhook/route.ts`: Stripe-Webhook mit Validierung fuer `checkout.session.completed`.
- `middleware.ts`: Redirects fuer Root-Pfade, Legacy-Pfade und lokalisierte Slug-Korrekturen.
- `app/sitemap.ts`: dynamische Sitemap mit Locales, Shop-Kategorien, Produkten und Alternate Languages.
- `docs/legal.md`: dokumentierte Legal-Policy.

## Routing

Das Projekt nutzt eine Mischung aus deutschen Root-Routen, lokalisierten Routen und Redirects.

### Locale-Routing

Unterstuetzte Locales:

- `de`
- `en`
- `fr`
- `es`
- `zh`
- `ar`

Startseiten:

- `/de`
- `/en`
- `/fr`
- `/es`
- `/zh`
- `/ar`

Die Locale-Routen werden in `app/lib/i18n.ts` ueber `localizedRoutes` definiert. Deutsche Pfade behalten deutsche Slugs, internationale Pfade verwenden ueberwiegend englische Slugs.

Beispiele:

- Deutsch: `/de/kollektionen`
- Englisch: `/en/collections`
- Franzoesisch: `/fr/collections`
- Spanisch: `/es/collections`
- Chinesisch: `/zh/collections`
- Arabisch: `/ar/collections`

### Root-Redirects

Unlokalisierte Pfade werden ueber `rootRedirects` und `middleware.ts` auf deutsche Zielpfade weitergeleitet. Beispiele:

- `/` -> `/de`
- `/shop` -> `/de/shop`
- `/collections` -> `/de/kollektionen`
- `/contact` -> `/de/kontakt`

### Shop-Routing

Shop-Kategorien und Produkte laufen ueber:

- deutsche Originalrouten: `/de/shop/:slug`
- internationale Routen: `/:locale/shop/:slug`
- alte unlokalisierte Shop-Pfade: `/shop/:slug` werden nach `/de/shop/:slug` redirected

Shop-Kategorie-Slugs bleiben stabil. Fuer internationale Shop-Kategorien werden englische Slug-Aliase in `app/lib/i18n.ts` gepflegt, z. B.:

- `moebel` -> `furniture`
- `leuchten` -> `lighting`
- `teppiche` -> `rugs`
- `objekte` -> `objects`
- `kunst` -> `artworks`
- `tabletop` -> `accessories`

Keine Slugs ohne Redirect aendern.

### Legal-Routing

Die Legal-Architektur ist festgelegt:

- Deutsch ist rechtlich massgeblich.
- Englisch ist eine vollstaendige internationale Convenience-Version.
- Franzoesisch, Spanisch, Chinesisch und Arabisch erhalten keine eigenen Rechtstexte, sondern Placeholder mit Hinweis und Link zur englischen Version.

Details stehen in `docs/legal.md`.

## Komponenten

Zentrale Komponenten:

- `Navigation.tsx`: sticky Header, Hauptnavigation, Suche/Account/Warenkorb-Links, Sprachumschalter.
- `Footer.tsx`: Footer-Navigation, Service-Links, Trade-Links, Social Links, Legal Links.
- `LocalizedHomePage.tsx`: lokalisierte Homepage fuer nicht-deutsche Locales.
- `LuxuryCoastersPage.tsx`: spezielle Landingpage fuer Luxury Cowhide Coasters.
- `PageHero.tsx`: wiederverwendbarer Seiten-Hero.
- `PlaceholderArtwork.tsx`: generative visuelle Platzhalter fuer Produkte/Inhalte.
- `EntityActions.tsx`: kleine UI-Aktionen fuer Speichern/Teilen.
- `SocialLinks.tsx`: Social-Link-Ausgabe aus lokalen Daten.

Komponenten sind in der Regel klein, datengetrieben und verwenden Tailwind-Klassen direkt im JSX. Bestehende Komponenten sollen erweitert werden, bevor neue Systeme eingefuehrt werden.

## Layout-System

Das globale Layout liegt in `app/layout.tsx` und rendert:

- `<html lang="de">`
- globale Metadaten
- `Navigation`
- Seiteninhalt
- `Footer`

Das Locale-Layout `app/[locale]/layout.tsx` setzt pro Locale:

- `lang` ueber `dictionary.htmlLang`
- `dir="rtl"` nur fuer `ar`

Layout-Strukturen verwenden vor allem:

- `max-w-[1540px]`
- responsive Grid-Systeme
- mobile-first Tailwind-Klassen
- Hairline-Borders ueber `.hairline`
- Section-Abstaende ueber `.section-pad`

Desktop-Layouts sind Erweiterungen der mobilen Basis. Mobile darf durch Desktop-Optimierungen nicht verschlechtert werden.

## Navigation

Die Hauptnavigation basiert auf `app/data/navigation.ts`:

- Design-Shop
- Kunst
- Kollektionen
- Ateliers
- Journal

Labels werden in `Navigation.tsx` ueber `getDictionary(locale)` lokalisiert. Links werden mit `localizeHref` aus `app/lib/i18n.ts` in die aktuelle Locale ueberfuehrt.

Der Sprachumschalter zeigt alle sechs Locales:

- DE
- EN
- FR
- ES
- ZH
- AR

Beim Sprachwechsel erzeugt `getLanguageSwitchPath` passende Zielpfade und behandelt Shop-Kategorie-Slugs gesondert.

Footer-Links werden ebenfalls datengetrieben und lokalisiert ausgegeben.

## Design-System

Das visuelle System ist editorial, ruhig und hochwertig. Es soll nach kuratiertem Design, Galerie, Atelier und Luxus-Marktplatz wirken, nicht nach generischem E-Commerce.

Design-Prinzipien:

- ruhig
- hochwertig
- reduziert
- grosszuegig
- mobile-first
- typografisch gepraegt
- mit feinen Linien statt schweren UI-Rahmen
- klare Produkt- und Inhaltsflaechen
- keine unnoetigen Animationen
- keine grellen Call-to-Action-Muster

Cards, Grids und Produktbloecke sollen die bestehende ruhige Formsprache fortsetzen. Kein optisches Redesign ohne expliziten Auftrag.

## Styling-Konventionen

Styling erfolgt ueber Tailwind CSS 4 und wenige globale CSS-Klassen in `app/globals.css`.

Globale Klassen:

- `.serif`: Canela-artige, uppercase Serif-Typografie
- `.text-balance`: `text-wrap: balance`
- `.section-pad`: responsive Section-Abstaende
- `.hairline`: feine Border-Farbe

Konventionen:

- Tailwind-Klassen direkt im JSX verwenden.
- Bestehende Utility-Muster wiederverwenden.
- Keine neue Design-Library einfuehren.
- Keine globale CSS-Ausweitung, wenn lokale Tailwind-Klassen genuegen.
- Responsive Varianten mobile-first formulieren.
- Farben moeglichst an bestehende Variablen und Hex-Werte anlehnen.
- Keine Layout-Aenderungen, die horizontales Scrollen auf Mobile erzeugen.

## Typografie

Die globale Schriftfamilie wird ueber `--font-canela` definiert:

```css
--font-canela: "Canela Light", Canela, "Canela Deck", "Canela Text", "Times New Roman", serif;
```

Der gesamte Body nutzt diese Serif-Familie. Die Klasse `.serif` setzt:

- font weight 300
- uppercase
- letter spacing `0.08em`

Navigation, Eyebrows und kleine Labels verwenden haeufig uppercase Text mit groesserem Letter-Spacing. Bei neuen Texten muss auf Lesbarkeit, Zeilenlaenge und Mobile-Fit geachtet werden.

## Farben

Globale CSS-Variablen:

- `--ink: #080808`
- `--paper: #f3f2ef`
- `--cream: #f7f7f5`
- `--stone: #9aa2a4`
- `--charcoal: #171717`

Weitere haeufige Farben im JSX:

- `#111`
- `#10100f`
- `#171615`
- `#26231f`
- `#37332e`
- `#4b5356`
- `#667174`
- `#e8eceb`
- `#efebe2`
- `#f8f8f6`

Die Farbwelt soll neutral, warm, mineralisch und editorial bleiben. Keine neue dominante Farbpalette ohne Auftrag einfuehren.

## SEO

SEO ist bereits an mehreren Stellen implementiert.

### Metadata

Globale Metadaten liegen in `app/layout.tsx`:

- `metadataBase: https://www.getyour.design`
- Default Title und Title Template
- globale Description
- Keywords
- Open Graph
- Robots index/follow
- Pinterest Domain Verification

Lokalisierte Metadaten liegen in:

- `app/[locale]/page.tsx`
- `app/[locale]/[...slug]/page.tsx`
- `app/data/dictionaries.ts`

Einzelne deutsche Originalseiten besitzen eigene `metadata`-Exports.

### Canonicals

Canonicals werden ueber Next Metadata `alternates.canonical` gesetzt. Lokalisierte Seiten verwenden die Pfade aus `localizedRoutes`. Shop-Kategorien und Produkte verwenden `getShopPath(locale, slug)`.

### Hreflang

`getAlternateLanguages` in `app/lib/i18n.ts` erzeugt Language Alternates inklusive `x-default`. Die Sitemap baut absolute Alternate URLs ueber `absoluteLanguages`.

Bei neuen Seiten muessen Canonical und hreflang konsistent mit `localizedRoutes` oder einem passenden Helper ergaenzt werden.

### Sitemap

`app/sitemap.ts` erzeugt:

- alle statischen lokalisierten Routen
- Shop-Kategorien
- Produkte
- Legacy-Eintrag fuer `/luxury-coasters`
- Alternates pro Locale

`lastModified` ist aktuell statisch auf `2026-06-23` gesetzt.

### Robots

`public/robots.txt` erlaubt Crawling und verweist auf:

```text
Sitemap: https://www.getyour.design/sitemap.xml
```

Der Warenkorb wird in lokalisierter Metadata ueber `robots: { index: false, follow: false }` auf noindex gesetzt.

### JSON-LD

Im aktuellen Runtime-Code wurden keine JSON-LD- oder `schema.org`-Einbindungen gefunden. Wenn strukturierte Daten ergaenzt werden, muessen sie wahrheitsgemaess, wartbar und zu den vorhandenen lokalen Daten passend sein.

Keine erfundenen Ratings, Reviews, Awards, Preise, Verfuegbarkeiten, Markenbeziehungen oder Affiliate-Daten in strukturierte Daten schreiben.

## Performance

Die App ist performancefreundlich angelegt:

- lokale Daten statt API-Requests
- statische Route-Generierung ueber `generateStaticParams`
- wenige Client Components
- keine globale State-Library
- keine grossen UI-Bibliotheken
- SVG- und Bildassets im `public/images`-Ordner
- einfache CSS/Tailwind-Struktur

Performance-Regeln:

- Neue Client Components nur einfuehren, wenn Interaktivitaet noetig ist.
- Bilder optimieren und lokal halten.
- Keine Hotlinks.
- Keine unnoetigen Dependencies.
- Keine schweren Animationen oder Layout-Skripte.
- Mobile Core Web Vitals priorisieren.

## Accessibility

Vorhandene Staerken:

- semantische Links und echte Navigationselemente
- sichtbare Linktexte
- Locale-spezifisches `lang` im Locale-Layout
- `dir="rtl"` fuer Arabisch
- responsives Layout

Bei neuen Aenderungen beachten:

- sinnvolle Heading-Hierarchie
- ausreichende Farbkontraste
- tastaturbedienbare Links und Buttons
- keine reinen Farbhinweise
- sprechende Alt-Texte fuer echte Bilder
- dekorative Visuals nicht als falsche Inhalte ausgeben
- Touch Targets auf Mobile gross genug halten
- RTL bei `ar` nicht durch feste Left/Right-Annahmen beschaedigen

## State Management

Es gibt keine globale State-Management-Library. Die Anwendung ist ueberwiegend servergerendert und datengetrieben.

Client-seitiger State ist auf kleine interaktive Bereiche begrenzt, z. B. Navigation, Sprachumschalter oder UI-Aktionen. Warenkorb und Checkout sind aktuell konzeptionell bzw. Platzhalter und nicht als echter Commerce-State umgesetzt.

Neue State-Loesungen nur einfuehren, wenn sie konkret benoetigt werden. Lokaler Component-State ist vorzuziehen.

## Datenfluss

Der Datenfluss ist einfach:

1. Lokale Daten liegen in `app/data`.
2. Pages und Components importieren diese Daten direkt.
3. i18n-Texte kommen aus `app/data/dictionaries.ts`.
4. Routing- und Link-Helper kommen aus `app/lib/i18n.ts`.
5. Pages rendern statische oder lokalisierte Ansichten.
6. Metadata und Sitemap nutzen dieselben lokalen Daten und Routing-Helper.

Wichtige Datenquellen:

- `products.ts`: Produkt- und Shop-Katalog inklusive Kategorien, Slugs, Preisen, Materialien, Status, Maker, Origin und Paletten.
- `collections.ts`: kuratierte Collections.
- `stories.ts`: Journal-/Story-Daten.
- `materials.ts`: Materialkarten.
- `navigation.ts`: Haupt- und Footer-Navigation.
- `social.ts`: Social Links.
- `dictionaries.ts`: zentrale UI-, Page-, Footer-, Shop-, Journal-, Collection- und Home-Uebersetzungen.

Englisch ist der Dictionary-Fallback fuer fehlende Keys.

## APIs und externe Services

Aktuell gibt es keine eigenen API-Routen und keine aktive externe Commerce-Integration.

Externe Beruehrungspunkte:

- Social Links zu Instagram und Pinterest
- LinkedIn ist als Label vorhanden, aber ohne `href`
- Pinterest Domain Verification in `app/layout.tsx`
- potenzielles Deployment auf Vercel

`app/lib/commerce.ts` enthaelt Commerce-Logik mit produktiv vorsichtigem Gating:

- `getProductCta(status)`
- `prepareCheckout()` mit `enabled: false` fuer den Warenkorb-Preview
- `getCommerceCta()` fuer `direct`, `affiliate`, `inquiry` und Status-Fallback
- `getDirectCheckoutProduct()` mit serverseitiger Whitelist nur fuer `sitzobjekt-kuhfell`
- `isStripeCheckoutConfigured()`
- `getCheckoutBaseUrl()` und `getAllowedCheckoutBaseUrl()`
- `validateDirectCheckoutSession()`
- Affiliate-Readiness-Helper

Der Stripe-Testcheckout ist vorbereitet, aber nicht global live aktiviert. Checkout-Integrationen fuer weitere Produkte, ein echter Warenkorb, Bestellpersistenz, E-Mail, Fulfillment, weitere Provider oder Live-Zahlungen duerfen erst erweitert werden, wenn echte Credentials, echte Produkte, rechtliche Anforderungen und ein belastbarer Checkout-Flow vorliegen.

## Environment Variables

Relevante Commerce-Environment-Variablen:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_CHECKOUT_ENABLED`
- `NEXT_PUBLIC_SITE_URL`

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` ist fuer den aktuellen serverseitigen Checkout-Redirect nicht erforderlich.

`metadataBase` ist fest auf `https://www.getyour.design` gesetzt. `NEXT_PUBLIC_SITE_URL` wird nur fuer sichere Checkout-Success-/Cancel-URLs verwendet und zentral validiert.

Wenn kuenftig Environment Variables eingefuehrt werden:

- klar dokumentieren
- `.env`-Dateien nicht committen
- keine Secrets im Code speichern
- lokale und Produktionswerte unterscheiden
- Fallbacks bewusst setzen

## Build-Prozess

Standard-Build:

```bash
npm run build
```

Der Build verwendet Next.js und erzeugt die App-Router-Ausgabe inklusive statischer Routen, Sitemap und Metadata.

Vor Abschluss jeder Code-Aufgabe sollte der Build laufen, sofern die Aufgabe nicht ausdruecklich nur lesend oder dokumentierend ist und der Nutzer keine Builds wuenscht. Bei reinen Dokumentationsaufgaben darf kein Build erzwungen werden, wenn dadurch andere Dateien oder Build-Artefakte veraendert wuerden.

## Deployment

Das Projekt ist fuer ein Next/Vercel-Deployment geeignet. Es gibt keine eigene `vercel.json` und keine serverseitigen Spezialanforderungen im Repository.

Deployment-Annahmen:

- Domain: `https://www.getyour.design`
- Sitemap: `https://www.getyour.design/sitemap.xml`
- Robots: `https://www.getyour.design/robots.txt`
- Build Command: `npm run build`
- Start Command: `npm run start` oder Vercel Default fuer Next.js

Vor Deployment pruefen:

- Build erfolgreich
- Canonicals korrekt
- hreflang korrekt
- Warenkorb noindex
- Legal-Policy unveraendert
- keine Dummy-Links oder erfundenen Commerce-Daten

## Coding-Standards

- TypeScript strikt verwenden.
- Bestehende Komponenten und Helper wiederverwenden.
- Keine neue Architektur einfuehren, wenn bestehende Muster ausreichen.
- Keine unnoetigen Dependencies installieren.
- Keine Slugs ohne Redirect aendern.
- Keine bestehende URL brechen.
- Keine visuellen Redesigns ohne Auftrag.
- Keine Daten duplizieren, wenn Dictionary- oder Helper-Strukturen existieren.
- Locales immer ueber `locales`, `localizedRoutes`, `localizeHref`, `getShopPath` und verwandte Helper behandeln.
- Neue sichtbare UI-Texte in Dictionaries eintragen, wenn sie lokalisiert erscheinen muessen.
- Englisch-Fallback bewusst nutzen, nicht als Ausrede fuer vergessene Lokalisierung.
- German original pages nicht unbeabsichtigt in internationalen Routen rendern, wenn lokalisierte Platzhalter oder Inhalte erwartet werden.

## Wiederverwendbare Patterns

### Dictionary-Fallback

`getDictionary(locale)` merged englische Defaults mit Locale-spezifischen Overrides. Neue lokalisierbare Bereiche sollten in den Dictionary-Typ aufgenommen und ueber diesen Merge-Pfad bereitgestellt werden.

### Link-Lokalisierung

Interne Links sollten ueber `localizeHref` oder die Route-Helper laufen. Harte internationale Pfade vermeiden, wenn ein Route-Key existiert.

### Shop-Pfade

Shop-Links sollten ueber `getShopPath(locale, slug)` entstehen. Slugs bleiben stabil, Kategorie-Aliase werden zentral in `app/lib/i18n.ts` gepflegt.

### Page Metadata

Neue lokalisierte Seiten sollten Metadata aus Dictionaries und Route-Helpern beziehen. Canonical und hreflang duerfen nicht manuell auseinanderlaufen.

### Placeholder-Seiten

Fuer nicht vollstaendig lokalisierte Seiten existieren Placeholder-Patterns in `app/[locale]/[...slug]/page.tsx`. Sie sollen praesentationsfaehig sein, aber keine erfundenen Inhalte vortaeuschen.

## Bereits implementierte Features

- Next.js App-Router-Struktur
- deutsche Hauptseiten
- sechs Locale-Startseiten
- zentrales Locale-Routing
- Sprachumschalter fuer DE, EN, FR, ES, ZH, AR
- Arabisch-RTL-Unterstuetzung ueber `dir="rtl"`
- lokalisierte Navigation und Footer-Strukturen
- lokalisierte Shop-, Journal-, Collection- und Home-Texte ueber Dictionaries
- statischer Produktkatalog
- Shop-Kategorien und Produktdetailrouten
- lokalisierte Shop-Kategorie-Slugs fuer internationale Locales
- Sitemap mit Alternate Languages
- Robots-Datei
- Warenkorb noindex
- Pinterest Domain Verification
- Legal-Policy mit deutscher verbindlicher Fassung, englischer Convenience-Version und Placeholdern fuer FR/ES/ZH/AR
- Luxury-Coasters-Landingpage fuer DE/EN
- Social Links
- SEO-Audit-Artefakte im Ordner `seo-audit-getyour-design`

## Fehlende Features

- echter Checkout
- echte Warenkorb-Logik
- echte Nutzerkonten
- Suche mit Index oder Backend
- CMS-Anbindung
- Produktbilder fuer alle Katalogeintraege
- finale echte Produkt-, Atelier- und Journal-Inhalte fuer alle Locales
- JSON-LD-Strukturierte Daten
- automatisierte Tests
- visuelle Regressionstests
- Accessibility-Testabdeckung
- echte Legal-Uebersetzungen fuer FR/ES/ZH/AR, bewusst nicht vorhanden
- vollstaendige externe Service-Integration

## Technische Schulden

- Einige deutsche Originalseiten und lokalisierte Catch-all-Pfade teilen sich Logik nur teilweise.
- `app/[locale]/[...slug]/page.tsx` enthaelt viele Renderpfade und koennte langfristig schwer wartbar werden.
- Produkt-, Collection- und Story-Inhalte sind lokal und teilweise Platzhalter.
- Es gibt keine Test-Suite.
- JSON-LD ist noch nicht implementiert.
- `next lint` im Script sollte fuer die konkrete Next-Version verifiziert werden.
- `lastModified` in der Sitemap ist statisch.
- Das Root-Layout setzt `<html lang="de">`; Locale-spezifisches `lang` liegt in einem inneren Wrapper, nicht am HTML-Element selbst.
- Einige Assets sind symbolische SVGs statt echte Produktfotografie.
- Commerce- und Account-Funktionen sind noch nicht produktionsreif.

## Empfehlungen fuer zukuenftige Entwickler

- Vor jeder Aenderung die betroffenen Dateien lesen.
- Fuer i18n zuerst `app/lib/i18n.ts` und `app/data/dictionaries.ts` pruefen.
- Fuer Seitenlogik zuerst `app/[locale]/[...slug]/page.tsx` und die jeweilige deutsche Originalseite pruefen.
- Fuer Navigation zuerst `app/data/navigation.ts`, `Navigation.tsx` und `Footer.tsx` pruefen.
- Fuer SEO zuerst `app/layout.tsx`, `app/sitemap.ts`, `public/robots.txt` und Metadata-Exports pruefen.
- Fuer Legal-Themen zuerst `docs/legal.md` lesen.
- Bestehende UI-Sprache und Layout-Rhythmik respektieren.
- Mobile zuerst testen.
- Keine Slugs oder URLs ohne Redirects aendern.
- Keine echten rechtlichen, kommerziellen oder markenbezogenen Behauptungen erfinden.
- Keine Dummy-Amazon-, Affiliate-, Review-, Rating- oder Award-Daten einfuehren.
- Content-Erweiterungen sind oft wertvoller als Infrastruktur-Arbeit.
- Neue technische Abstraktionen nur einfuehren, wenn sie konkrete Wiederholung oder Wartungsrisiken reduzieren.

## Regeln fuer KI-Assistenten

- Dieses Dokument immer zuerst vollstaendig lesen.
- Niemals Dateien aendern, die nicht Teil der Aufgabe sind.
- Niemals eigenstaendig refactoren.
- Niemals UI oder Design ohne Auftrag veraendern.
- Niemals neue Pakete installieren.
- Aenderungen immer minimal halten.
- Bestehenden Code-Stil beibehalten.
- Vor Abschluss sicherstellen, dass das Projekt erfolgreich baut.
- Nach jeder Aufgabe alle geaenderten Dateien kurz dokumentieren.

Zusaetzliche projektspezifische Regeln:

- Ausschliesslich in `/Users/ibt/Code/getyour-design` arbeiten, sofern der Nutzer nichts anderes explizit anweist.
- Bei Legal-Seiten gilt: Deutsch ist verbindlich, Englisch ist Convenience, FR/ES/ZH/AR sind Placeholder mit Link zur englischen Version.
- Neue sichtbare internationale UI-Texte muessen ueber Dictionaries lokalisierbar sein.
- Arabisch darf nur fuer Locale `ar` RTL-Verhalten erhalten.
- Mobile UX darf durch keine Aenderung schlechter werden.
- Keine geschuetzten Marken, urheberrechtlich geschuetzten Figuren, Prominentenreferenzen oder erfundenen Produktbehauptungen einfuehren.
- Keine Slugs aendern, wenn nicht gleichzeitig eine klare Redirect-Strategie beauftragt und umgesetzt wird.
