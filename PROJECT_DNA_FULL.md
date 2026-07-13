# GETYOUR.DESIGN PROJECT DNA FULL

Stand: 2026-07-12
Projektordner: `/Users/ibt/Code/getyour-design`
Zweck: Vollständige technische, gestalterische und inhaltliche Projekt-DNA als Übergabedokument für eine andere KI oder ein Entwicklungsteam ohne direkten Quellcodezugriff.

Diese Datei beschreibt den aktuell analysierten Codebestand rekursiv. Sie ist eine Arbeitsgrundlage für Weiterentwicklung, Pflege, Produktseiten, Internationalisierung, SEO, Designkonsistenz und technische Entscheidungen.

Aktualisierung zum committed Repository-Stand `3520e12` vom 2026-07-13: Die ursprüngliche DNA entstand vor den Commerce-Phasen. Die folgenden Abschnitte bleiben als historische Detailbeschreibung erhalten, werden aber durch diese Aktualisierung ergänzt, wo sie Checkout, Commerce-Datenmodell, Kategorien, Filter, Brand-, Room-, Collection- und Affiliate-Readiness noch als nicht vorhanden beschreiben.

Aktueller committed Architekturstand:

- Stripe-Testcheckout ist serverseitig vorbereitet, aber standardmäßig deaktiviert und nur für `sitzobjekt-kuhfell` whitelisted.
- `stripe` ist Produktionsabhängigkeit; `app/api/checkout/route.ts`, `app/api/stripe/webhook/route.ts` und `app/[locale]/checkout/[result]/page.tsx` existieren.
- Der Checkout erscheint nur, wenn `STRIPE_CHECKOUT_ENABLED=true` und `STRIPE_SECRET_KEY` vorhanden sind; ohne Konfiguration bleibt die bestehende Anfrage-/Statuslogik erhalten.
- Erforderliche Commerce-ENV-Variablen: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_CHECKOUT_ENABLED`, `NEXT_PUBLIC_SITE_URL`.
- `NEXT_PUBLIC_SITE_URL` wird zentral validiert; Production erlaubt `https://www.getyour.design` und `https://getyour.design`, Development erlaubt `http://localhost:3000` und `http://localhost:3001`.
- `app/lib/commerce.ts` enthält weiterhin `prepareCheckout()` als inaktiven Warenkorb-Preview-Helper, zusätzlich aber zentrale Commerce-CTA-, Stripe-, Affiliate-Readiness- und Checkout-Validierungslogik.
- Das Produktmodell enthält additive Commerce-Felder für `brand`, `brandSlug`, `rooms`, `collections`, Affiliate-Metadaten, `productType`, `commerceMode`, Shipping/Tax/Inventory und externe Quellsysteme.
- Die zentrale CTA-Entscheidung läuft über `getCommerceCta()` und `ProductCommerceBlock`; bestehende Produkte ohne `commerceMode` behalten ihr Status-/Anfrageverhalten.
- `app/data/brands.ts`, `app/data/rooms.ts` und `app/data/collections.ts` enthalten skalierbare additive Datenmodelle und Lookup-Helper.
- `app/lib/productFilters.ts` bereitet pure, interne Filterarchitektur für Brand, Room, Collection, Category, Material, Style, Country und Availability vor.
- `docs/affiliate-readiness.md` dokumentiert Affiliate-Readiness; es gibt keine aktiven Affiliate-Partner, keine Live-Links und keine Tracking-IDs.
- Der Shop hat 16 sichtbare Commerce-Kategorien über `visibleShopCategories`; Sitemap, lokalisierte Kategoriepfade und Kategorie-Seiten verwenden diese zentrale Quelle.
- Die Homepage enthält im committed Stand eine Featured-Commerce-Produktsektion für das Kuhfell-Sitzobjekt, ohne Checkout-, Anfrage- oder Affiliate-CTA auf der Homepage.
- COMMERCE_BASELINE.md bleibt ein historischer Phase-0-Snapshot und ist nicht der aktuelle Ist-Zustand.

## 1. Projektidentität

GETYOUR.DESIGN ist eine kuratierte Design-, Kunst- und Objektplattform mit Shop-Struktur, aber ohne aktivierten Checkout. Die Website verbindet Commerce, Galerie, Journal, Materialbibliothek, Atelier-/Maker-Bezug, Projektanfragen und rechtliche Basisinformationen.

Der Markenkern ist:

- Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen.
- Kuratierte Auswahl statt Massenkatalog.
- Objektkultur zwischen Design, Kunst, Handwerk und Interior.
- Ruhige, architektonische, materialorientierte Luxuspositionierung.
- Fokus auf Räume, Material, Herkunft, Proportion, Patina, Edition und Atelier.
- Anfrage- und Beratungslogik ist aktuell wichtiger als ein automatisierter Checkout.

Zielgruppen:

- Privatkundinnen und Privatkunden mit Interesse an individuellen Räumen, Kunst, Designobjekten und Editionen.
- Sammlerinnen und Sammler von Kunst, Editionen und Collectible Design.
- Architektinnen, Interior Designer, Hotels, Projektkunden und Projektentwickler.
- Ateliers, Künstler, Manufakturen und Hersteller, die Arbeiten einreichen wollen.

Wichtige Werte:

- Kuratorische Auswahl.
- Materialwissen.
- Handwerkliche Präzision.
- Zurückhaltung statt lauter Verkaufsrhetorik.
- Langlebigkeit, Herkunft, Patina und Reparierbarkeit.
- Individualität ohne aggressive Statussprache.
- Projektfähigkeit für professionelle Interieurs.

## 2. Technologie und Abhängigkeiten

Das Projekt ist eine Next.js-App mit App Router.

Package-Metadaten:

- `name`: `getyour-design`
- `version`: `0.1.0`
- `private`: `true`

Scripts:

- `npm run dev`: startet `next dev`
- `npm run build`: startet `next build`
- `npm run start`: startet `next start`
- `npm run lint`: startet `next lint`

Produktionsabhängigkeiten:

- `next`: `^15.0.0`
- `react`: `^19.0.0`
- `react-dom`: `^19.0.0`
- `stripe`: `^22.3.1`

Entwicklungsabhängigkeiten:

- `@tailwindcss/postcss`: `^4.0.0`
- `tailwindcss`: `^4.0.0`
- `typescript`: `^5.0.0`
- `@types/node`: `^22.0.0`
- `@types/react`: `^19.0.0`
- `@types/react-dom`: `^19.0.0`

Konfiguration:

- `next.config.ts` enthält aktuell ein leeres `NextConfig`-Objekt.
- Es gibt keine `images.remotePatterns` oder `images.domains`.
- Bildverarbeitung nutzt lokale Assets aus `public/images`.
- `tsconfig.json` nutzt `strict: true`, `noEmit: true`, `moduleResolution: "bundler"`, `jsx: "preserve"`, `allowJs: true`, `skipLibCheck: true`.
- `postcss.config.mjs` ist vorhanden und dient Tailwind/PostCSS.
- `public/robots.txt` erlaubt aktuell alles und verweist auf `https://www.getyour.design/sitemap.xml`.

Technische Grundentscheidung im aktuellen committed Stand:

- Keine Datenbank.
- Keine externe CMS-Anbindung.
- Keine echte Suche.
- Kein echter Warenkorbzustand.
- Stripe-Testcheckout ist vorhanden, aber feature-gated und nicht global live aktiviert.
- API-Routen existieren ausschließlich für Checkout-Session-Erzeugung und Stripe-Webhook.
- Alle Inhalte liegen als TypeScript-Datenmodule oder statische Komponenten im Repository.

## 3. Repository-Struktur

Wichtige Root-Dateien und Ordner:

- `app/`: Next.js App Router.
- `app/components/`: wiederverwendbare UI-Komponenten.
- `app/data/`: statische Datenmodelle für Navigation, Produkte, Kunst, Collections, Materialien, Marken, Künstler, Stories, Dictionaries.
- `app/lib/`: i18n-, Commerce- und Produkt-Titel-Helfer.
- `public/images/`: statische Bildassets.
- `docs/legal.md`: rechtliche Übersetzungs-/Platzhalter-Policy.
- `seo-audit-getyour-design/`: SEO-Audit-Artefakte.
- `GETYOUR_DESIGN_BRAND_DNA.md`: bereits vorhandene Brand-/Design-DNA.
- `PROJECT_SPEC.md`: Projektspezifikation fuer Architektur, Routing, SEO, i18n und Entwicklungsregeln.

Aktuell relevante Bildordner:

- `public/images/`: generische Hero-, Produkt- und Collection-Assets.
- `public/images/products/`: echte Produktbilder für das Kuhfell-Sitzobjekt.
- `public/images/coasters/`: Produkt-/Kampagnenbilder der Luxury-Coasters-Seite.

## 4. App-Architektur

Die App folgt Next.js App Router:

- `app/layout.tsx` ist das globale Root-Layout.
- `app/[locale]/layout.tsx` setzt pro Locale `lang` und bei Arabisch `dir="rtl"`.
- Root-Routen wie `/shop`, `/art`, `/contact` bestehen weiter als deutsche Legacy-/Rootseiten.
- Lokalisierte Routen laufen über `/de`, `/en`, `/fr`, `/es`, `/zh`, `/ar`.
- Dynamische lokalisierte Unterseiten laufen über `app/[locale]/[...slug]/page.tsx`.
- Shop-Kategorien und Produkte sind statisch generiert.

Globale App-Struktur:

- Root-HTML-Sprache ist `de`.
- `Navigation` wird global oberhalb aller Seiten gerendert.
- `Footer` wird global unterhalb aller Seiten gerendert.
- Localized Layout rendert zusätzlich eine umschließende `<div lang={dictionary.htmlLang} dir={...}>`.

## 5. Globales Layout und Metadaten

`app/layout.tsx` definiert:

- `metadataBase`: `https://www.getyour.design`
- Default Title: `GETYOUR.DESIGN | Contemporary Design, Kunst und Objekte`
- Title Template: `%s | GETYOUR.DESIGN`
- Description: Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen ausgewählter Künstler, Ateliers und Hersteller.
- Keywords: kuratierter Design Shop, sammelbares Design, skulpturales Sitzen, Kunst und Objekte, Designmöbel, Leuchten, Tabletop, Editionen, Collectible Design, Skulpturen, Künstler und Ateliers, Hersteller, Interior Design, Materialien, Commissions & Collaborations.
- Open Graph: Website-Typ, Titel `GETYOUR.DESIGN`, Root-URL.
- Robots: index/follow für Site und Googlebot.
- Pinterest-Verifizierung über `p:domain_verify`.

Root Layout rendert:

1. `<Navigation />`
2. `children`
3. `<Footer />`

## 6. Styling-Grundlagen

Global CSS in `app/globals.css`:

```css
@import "tailwindcss";
```

CSS Custom Properties:

- `--ink: #080808`
- `--paper: #f3f2ef`
- `--cream: #f7f7f5`
- `--stone: #9aa2a4`
- `--charcoal: #171717`
- `--font-canela: "Canela Light", Canela, "Canela Deck", "Canela Text", "Times New Roman", serif`

Globale Regeln:

- `box-sizing: border-box` für alle Elemente.
- `html { scroll-behavior: smooth; }`
- `body` nutzt `var(--paper)` als Hintergrund, `var(--ink)` als Textfarbe und `var(--font-canela)` als Schriftfamilie.
- Body hat `letter-spacing: 0.01em`.
- Links erben Farbe und haben keine Textdekoration.
- Selection invertiert in Ink/Paper.

Utility-Klassen:

- `.serif`: Canela/Serif, `font-weight: 300`, `letter-spacing: 0.08em`, `text-transform: uppercase`.
- `.text-balance`: `text-wrap: balance`.
- `.section-pad`: `padding: clamp(4rem, 8vw, 8rem) clamp(1.25rem, 4vw, 4rem)`.
- `.hairline`: Borderfarbe `rgba(8, 8, 8, 0.16)`.

## 7. Designregeln

Farbwelt:

- Hauptflächen: `#f3f2ef`, `#f7f7f5`, `#e8eceb`.
- Haupttext: `#080808`, `#10100f`, `#11100f`.
- Body-/Sekundärtext: `#4b5356`, `#353b3e`.
- Muted Labels: `#667174`.
- Kontakt-/Legal-Warmton: `#786f64`, `#5f574f`.
- Sonderseite Luxury Coasters: Rubin-Akzent `#7A1028`, `#6f1d2d`.

Typografie:

- Die ganze Seite nutzt eine serifige Canela-nahe Schrift.
- Überschriften, Markenlabels und Kartenüberschriften sind meist uppercase mit weitem Tracking.
- Kleine Labels: typischerweise `text-[0.68rem]`, uppercase, `tracking-[0.2em]` bis `tracking-[0.28em]`.
- Bodycopy: meist `text-sm leading-7` oder `text-base leading-8`.
- H1 in PageHero: `text-3xl md:text-4xl`, serif, uppercase, `tracking-[0.08em]`.

Layout:

- Standard-Maximalbreite: `max-w-[1540px]`.
- Legal/Kontakt nutzen häufig `max-w-7xl`.
- Standardsektionen nutzen `.section-pad`.
- Homepage-Hero: zwei Spalten, links Text, rechts großes Bild, Desktop `lg:grid-cols-[0.36fr_0.64fr]`.
- PageHero: zwei Spalten, `lg:grid-cols-[0.9fr_0.75fr]`.
- Produktdetail: zwei Spalten, `lg:grid-cols-[0.55fr_0.45fr]`.
- Kategorie-/Shop-Grids: `sm:grid-cols-2`, `lg:grid-cols-3`, teils `xl:grid-cols-8`.

Karten und Linien:

- Karten sind helle rechteckige Flächen mit `border hairline`.
- Keine abgerundeten Cards als Standard.
- Keine Schatten als Standard.
- Hairline-Linien trennen Abschnitte und Kartenelemente.
- Hover-Zustände sind subtil: heller Hintergrund, schwarzer Text, Bildskalierung `1.02`.

Buttons:

- Klein, uppercase, starkes Tracking.
- Sekundäre Aktionen: Border-Buttons oder Border-Bottom-Links.
- Primäre Produkt-CTA: schwarzer Button mit weißer Schrift.
- Deaktivierte CTA: hellgrau/grünliche Fläche mit gedecktem Text.

Nicht passende Muster:

- Keine lauten Gradients.
- Keine spielerischen Icons oder Animationen.
- Keine großen Schatten.
- Keine pillenförmigen Marketing-Badges.
- Keine aggressive E-Commerce-Sprache.

## 8. Bildsprache und Assets

Bildsprache:

- Ruhig, objektbezogen, materialnah.
- Produkte sollen als echte Objekte sichtbar sein.
- Helle, neutrale, architektonische oder studiohafte Kontexte.
- Keine stark dekorativen Stock-Atmosphären.
- Bei Produktbildern Objekt nicht unnötig croppen.

Vorhandene Assets:

- `public/images/hero-lc2-blue.png`: PNG, 1535 x 1024, Homepage-Hero, alt: Fotografie eines LC2-Sessels in architektonischem Interior-Kontext.
- `public/images/product-stone-object.svg`
- `public/images/product-stone-table.svg`
- `public/images/product-ceramic.svg`
- `public/images/product-paper.svg`
- `public/images/product-rug.svg`
- `public/images/product-bronze-lamp.svg`
- `public/images/collection-materials.svg`
- `public/images/collection-studio.svg`
- `public/images/collection-art.svg`
- `public/images/collection-ceramic.svg`
- `public/images/collection-lighting.svg`
- `public/images/collection-textile.svg`
- `public/images/products/sculptural-cowhide-seat-hero.png`: PNG, 1536 x 1024.
- `public/images/products/yellow-cowhide-seat.webp`: Dateiendung `.webp`, Inhalt laut Dateisignatur PNG, 2400 x 3000; Next Image kann es lokal optimieren.
- `public/images/coasters/hero.jpg`: JPEG, 1586 x 992.
- `public/images/coasters/product.jpg`: JPEG, 1402 x 1122.
- `public/images/coasters/material.jpg`: PNG-Inhalt, 1563 x 1006, Dateiendung `.jpg`.
- `public/images/coasters/packaging.jpg`: PNG-Inhalt, 1563 x 1006, Dateiendung `.jpg`.

Technische Bildverwendung:

- Normale Seiten nutzen teils `<img>` für SVGs und Hero.
- Produktbilder und Coaster-Bilder nutzen `next/image`.
- `ProductCardMedia` nutzt `object-contain`, damit Produktbilder nicht abgeschnitten werden.
- `ProductGallery` nutzt für das erste Bild `aspect-[3/2]`, `priority`, `object-contain`; weitere Bilder `aspect-[4/5]`.
- Luxury Coasters nutzt `object-cover`, weil es eine Kampagnen-/Landingpage mit fotografischer Bildführung ist.

## 9. Navigation

Datenquelle: `app/data/navigation.ts`.

Hauptnavigation:

- `Design-Shop` -> `/shop`
- `Kunst` -> `/art`
- `Kollektionen` -> `/collections`
- `Ateliers` -> `/ateliers`
- `Journal` -> `/journal`

Sekundärnavigation:

- `Künstler` -> `/artists`
- `Ateliers & Marken` -> `/brands`
- `Materialien` -> `/materials`
- `Arbeit einreichen` -> `/arbeit-einreichen`

Footer-Navigation:

- `Shop`
- `Kunst`
- `Kollektionen`
- `Marken & Ateliers`
- `Künstler`
- `Materialien`
- `Journal`
- `Commissions & Collaborations`
- `Ateliers`
- `Arbeit einreichen`

`Navigation`:

- Client Component.
- Nutzt `usePathname`.
- Ermittelt Locale per `getLocaleFromPath`.
- Holt Labels aus `getDictionary(locale)`.
- Lokalisiert Links per `localizeHref`.
- Markiert aktiven Link, wenn Path exakt passt oder unterhalb des lokalen Pfads liegt.
- Shop-Link ist zusätzlich optisch hervorgehoben.
- Sprachumschalter rendert `DE | EN | FR | ES | ZH | AR` ab `sm`.
- Mobile Navigation ist horizontal scrollbar.

`Footer`:

- Client Component.
- Ermittelt Locale per `usePathname`.
- Rendert Markenbeschreibung, Shop-/Service-/Trade-Gruppen, Social Links und Legal Links.
- Footer-Copyright: `© 2026 GETYOUR.DESIGN`.
- Legal Links werden über `localizeHref` lokalisiert.

## 10. Internationalisierung

Locales:

- `de`
- `en`
- `fr`
- `es`
- `zh`
- `ar`

Dateien:

- `app/lib/i18n.ts`: Routing, Locale-Erkennung, Link-Lokalisierung, Shop-Slug-Übersetzung.
- `app/data/dictionaries.ts`: UI-Texte und lokale Inhaltsvarianten.
- `app/[locale]/layout.tsx`: Sprache/Richtung.
- `app/[locale]/page.tsx`: lokalisierte Homepages.
- `app/[locale]/[...slug]/page.tsx`: lokalisierte statische Seiten, Shop, Kategorien, Produktdetails, Legal-Sonderfälle.

Locale Layout:

- Für valide Locale wird `dictionary.htmlLang` gesetzt.
- Arabisch bekommt `dir="rtl"`.
- Andere Locales haben `dir` nicht gesetzt, aber Dictionary kennt `dir`.

Lokalisierte statische Routen:

| RouteKey | DE | EN/FR/ES/ZH/AR internationaler Pfad |
|---|---|---|
| home | `/de` | `/en`, `/fr`, `/es`, `/zh`, `/ar` |
| agb | `/de/agb` | `/terms-and-conditions` |
| arbeit-einreichen | `/de/arbeit-einreichen` | `/submit-work` |
| art | `/de/kunst` | `/art` |
| artists | `/de/kuenstler` | `/artists` |
| ateliers | `/de/ateliers` | `/ateliers` |
| brands | `/de/marken` | `/brands` |
| collections | `/de/kollektionen` | `/collections` |
| contact | `/de/kontakt` | `/contact` |
| datenschutz | `/de/datenschutz` | `/privacy-policy` |
| gallery | `/de/galerie` | `/gallery` |
| impressum | `/de/impressum` | `/legal-notice` |
| journal | `/de/journal` | `/journal` |
| luxury-coasters | `/de/luxus-untersetzer` | `/luxury-coasters` |
| materials | `/de/materialien` | `/materials` |
| objects | `/de/objekte` | `/objects` |
| sculptural-seating | `/de/sculptural-seating` | `/sculptural-seating` |
| shop | `/de/shop` | `/shop` |
| suche | `/de/suche` | `/search` |
| trade | `/de/projekte` | `/trade` |
| warenkorb | `/de/warenkorb` | `/cart` |

Shop-Kategorie-Slug-Lokalisierung:

- Für Deutsch bleiben Kategorie-Slugs deutsch.
- Für Nicht-DE werden einige Kategorie-Slugs ins Englische übertragen.

Mapping:

- `moebel` -> `furniture`
- `leuchten` -> `lighting`
- `teppiche` -> `rugs`
- `objekte` -> `objects`
- `kunst` -> `artworks`
- `editionen` -> `editions`
- `tabletop` -> `accessories`
- Nicht gemappt bleibt unverändert, z. B. `collectible-design`.

Produktpfade:

- Deutsch: `/de/shop/{deutscher-kategorie-slug}/{produkt-slug}`
- Englisch: `/en/shop/{englischer-kategorie-slug}/{produkt-slug}`
- Französisch/Spanisch/Chinesisch/Arabisch nutzen ebenfalls die englischen Kategorie-Slugs.
- Produkt-Slugs selbst sind nicht übersetzt.

Beispiel:

- `/de/shop/moebel/sitzobjekt-kuhfell`
- `/en/shop/furniture/sitzobjekt-kuhfell`
- `/fr/shop/furniture/sitzobjekt-kuhfell`
- `/es/shop/furniture/sitzobjekt-kuhfell`
- `/zh/shop/furniture/sitzobjekt-kuhfell`
- `/ar/shop/furniture/sitzobjekt-kuhfell`

Language Switch:

- Erkennt lokalisierte Shop-Pfade.
- Übersetzt Kategorie-Slug zurück auf deutschen Canonical-Slug und dann in Ziel-Locale.
- Produkt-Slug bleibt gleich.
- Für statische Routen wird anhand `localizedRoutes` gewechselt.
- Fallback ist Ziel-Homepage.

Dictionary-Struktur:

- `localeName`
- `htmlLang`
- `dir`
- `metadata`
- `pages`
- `nav`
- `footer`
- `home`
- `shop`
- `journal`
- `collections`
- `ui`

Dictionary-Merging:

- Englisch ist Baseline.
- Jedes Locale wird über English gemerged.
- Verschachtelte Objekte wie `metadata`, `pages`, `nav.labels`, `footer.labels`, `shop.categoryDescriptions`, `shop.availability`, `shop.cta`, `shop.categories`, `collections`, `ui` werden gezielt zusammengeführt.

Legal-i18n-Regel:

- Deutsch ist bindende Version.
- Englisch ist vollständige Convenience-Version.
- Französisch, Spanisch, Chinesisch und Arabisch zeigen Legal-Placeholder, keine automatisch erfundenen Rechtstexte.
- Diese Regel ist in `docs/legal.md` dokumentiert.

## 11. Middleware und Redirects

Datei: `middleware.ts`.

Middleware lässt durch:

- `/_next`
- `/images`
- `/robots.txt`
- `/sitemap.xml`
- alle Pfade mit Datei-Endung

Redirects:

- `/de/art...` -> `/de/kunst...`
- `/de/collections...` -> `/de/kollektionen...`
- `/en/imprint` -> `/en/legal-notice`
- `/en/privacy` -> `/en/privacy-policy`
- `/en/terms` -> `/en/terms-and-conditions`
- Legacy englische Kategorie-Slugs werden korrigiert.
- `/shop/...` -> `/de/shop/...`
- Root-Redirects aus `rootRedirects`, z. B. `/` -> `/de`, `/shop` -> `/de/shop`, `/contact` -> `/de/kontakt`.

Alle Redirects nutzen HTTP 308.

Middleware Matcher:

- `"/((?!api).*)"`

## 12. Routing-Übersicht

Root-/deutsche Routen:

- `/`
- `/agb`
- `/arbeit-einreichen`
- `/art`
- `/artists`
- `/ateliers`
- `/brands`
- `/collections`
- `/contact`
- `/datenschutz`
- `/gallery`
- `/impressum`
- `/journal`
- `/luxury-coasters`
- `/materials`
- `/objects`
- `/position-vorstellen`
- `/sculptural-seating`
- `/shop`
- `/shop/[slug]`
- `/stories`
- `/suche`
- `/trade`
- `/warenkorb`

Lokalisierte Routen:

- `/{locale}`
- `/{locale}/{...slug}`

Spezialverhalten:

- `/stories` redirectet nach `/journal`.
- `/position-vorstellen` root-redirectet per Middleware nach `/de/arbeit-einreichen`.
- `/shop/[slug]` kann sowohl Kategorie als auch Produkt darstellen.
- Lokalisierter Catchall kann Kategorie, Produkt, statische Route, Legal-Sonderseite oder Placeholder darstellen.

Produkt-Routing:

- Alte flache Produkt-Routen werden weiterhin statisch generiert: `/{locale}/shop/{produkt-slug}`.
- Neue verschachtelte Produkt-Routen werden ebenfalls generiert: `/{locale}/shop/{kategorie-slug}/{produkt-slug}`.
- Die interne Verlinkung bevorzugt verschachtelte Produkt-Routen.

## 13. SEO

Globale SEO:

- Root Layout setzt `metadataBase`, Default-Title, Description, Keywords, OG und Robots.
- Die meisten Seiten setzen eigene `metadata`.
- Warenkorb ist `noindex, follow`.

Sitemap:

- Datei: `app/sitemap.ts`.
- `siteUrl`: `https://www.getyour.design`.
- `lastModified`: `2026-06-23`.
- Enthält:
  - alle statischen lokalisierten Routen,
  - Legacy-Route `/luxury-coasters`,
  - alle Shop-Kategorien pro Locale,
  - alle Produkte pro Locale unter Kategoriepfaden.
- Jede Sitemap-URL bekommt alternates/hreflang über `absoluteLanguages`.
- `x-default` zeigt bei statischen Routen und Shop/Produkt auf Deutsch.

Produkt-Metadata:

- Root-Produktseiten nutzen `metaTitle`/`metaDescription`, wenn vorhanden.
- Sonst generiert: `{product.title} bei GETYOUR.DESIGN: {category}, {material}, {price}.`
- Produkt-OG nutzt erstes Produktbild, wenn vorhanden.
- Lokalisierte Produkt-Metadata nutzt `localized`-Content, wenn vorhanden.

Kategorie-Metadata:

- Kategorie-Titel ist Kategorie-Name bzw. lokalisiertes Label.
- Beschreibung ist kurz: `{Kategorie} bei GETYOUR.DESIGN entdecken.` oder lokalisiert.

SEO-Audit-Artefakte:

- Ordner `seo-audit-getyour-design` enthält frühere Auditdaten.
- Audit-Report vom 2026-06-23 fand damals:
  - 117 gecrawlte Seiten.
  - Sitemap-Endpunkte lieferten 404.
  - Robots war damals `Disallow: /`.
  - 117/117 HTML-Seiten hatten damals `noindex,nofollow`.
  - Indexierbare Seiten damals: 0.
  - 4 Duplicate-Risiken.
- Aktueller Code unterscheidet sich davon: `public/robots.txt` erlaubt alles und `app/sitemap.ts` existiert.
- Das Audit ist historischer Kontext, kein zwingend aktueller Produktionszustand.

Bekannte Duplicate-Risiken aus Audit:

- `Kunst | GETYOUR.DESIGN` bei `/art` und `/shop/kunst`.
- Ähnliche H1-Paare bei einigen synthetischen Produktnamen.

## 14. Shop-Datenmodell

Datei: `app/data/products.ts`.

Typen:

`ProductStatus`:

- `sofort-kaufen`
- `anfragen`
- `preis-auf-anfrage`
- `reserviert`
- `verkauft`

`ProductLocale`:

- `de`
- `en`
- `fr`
- `es`
- `zh`
- `ar`

`ProductImage`:

- `src: string`
- `alt: string`

`LocalizedProductContent`:

- `title`
- `cardTitle`
- `priceNote`
- `shortDescription`
- `longDescription`
- `dimensionsDetails`
- `materialDetails`
- `origin`
- `uniqueNote`
- `ctaLabel`
- `images`
- `metaTitle`
- `metaDescription`

`ProductSeed`:

- `title`
- `cardTitle?`
- `price`
- `priceNote?`
- `material`
- `materialDetails?`
- `dimensions`
- `dimensionsDetails?`
- `slug?`
- `status?`
- `availability?`
- `description?`
- `longDescription?`
- `origin?`
- `uniqueNote?`
- `ctaLabel?`
- `images?`
- `metaTitle?`
- `metaDescription?`
- `localized?`

`ProductCategorySeed`:

- `title`
- `slug`
- `makerPrefix`
- `originPrefix`
- `type`
- `description`
- `items`

Shop-Kategorien:

1. `Möbel` -> `moebel`
2. `Leuchten` -> `leuchten`
3. `Kunst` -> `kunst`
4. `Teppiche` -> `teppiche`
5. `Objekte` -> `objekte`
6. `Tabletop` -> `tabletop`, Label `Accessoires`
7. `Collectible Design` -> `collectible-design`
8. `Editionen` -> `editionen`

Status-Rotation:

- Standardprodukte bekommen Status per Index aus `statuses[index % statuses.length]`.
- Reihenfolge: sofort-kaufen, anfragen, preis-auf-anfrage, reserviert, verkauft.
- Explizite Produktstatus überschreiben Rotation.

Availability-Mapping:

- `sofort-kaufen` -> `Verfügbar`
- `anfragen` -> `Auf Anfrage verfügbar`
- `preis-auf-anfrage` -> `Preis auf Anfrage`
- `reserviert` -> `Reserviert`
- `verkauft` -> `Verkauft`

Paletten:

- Produktplatzhalter rotieren durch Tailwind-Farbklassen:
  - `bg-[#d9d0c1]`
  - `bg-[#efebe2]`
  - `bg-[#181614]`
  - `bg-[#9c9287]`
  - `bg-[#f4f0e7]`
  - `bg-[#c8c0b2]`
  - `bg-[#e8eceb]`
  - `bg-[#8b8174]`
  - `bg-[#11100f]`
  - `bg-[#d8d0c3]`
  - `bg-[#c7beb1]`
  - `bg-[#5d5247]`

Slug-Generierung:

- `toSlug` lowercased.
- Deutsche Umlaute:
  - `ä` -> `ae`
  - `ö` -> `oe`
  - `ü` -> `ue`
  - `ß` -> `ss`
- Nicht-alphanumerische Sequenzen werden `-`.
- Leading/trailing `-` werden entfernt.
- Ohne expliziten Slug: `{category.slug}-{index+1 zweistellig}-{toSlug(title)}`.

Produktobjekt nach Transformation:

- `title`
- `cardTitle`
- `slug`
- `category`
- `categorySlug`
- `secondaryCategories: []`
- `maker`
- `type`
- `price`
- `priceNote`
- `status`
- `availability`
- `description`
- `longDescription`
- `dimensions`
- `dimensionsDetails`
- `material`
- `materialDetails`
- `origin`
- `uniqueNote`
- `ctaLabel`
- `images`
- `metaTitle`
- `metaDescription`
- `palette`
- `localized`

Maker/Origin-Generierung:

- `maker`: `{category.makerPrefix} {A-H}`
- `origin`: `{category.originPrefix} {A-H}`
- Buchstaben rotieren über Index modulo 8.

## 15. Produktbestand

Gesamtstruktur:

- Möbel: 13 Produkte.
- Alle anderen 7 Kategorien: je 12 Produkte.
- Insgesamt 97 Produkte.

### Möbel

1. `Sitzobjekt aus europäischem Kuhfell`
   - cardTitle: `Sitzobjekt aus Kuhfell`
   - slug: `sitzobjekt-kuhfell`
   - price: `7.200 €`
   - material: Echtes europäisches Kuhfell, hochwertiger Polsterkern
   - dimensions: Durchmesser 126 cm, Höhe 30 cm
   - status: `anfragen`
   - availability: `Auf Anfrage verfügbar`
   - images:
     - `/images/products/sculptural-cowhide-seat-hero.png`
     - `/images/products/yellow-cowhide-seat.webp`
   - vollständig lokalisiert in EN/FR/ES/ZH/AR.
2. `Sitzobjekt aus dunklem Holz`
3. `Niedrige Bank aus Eiche`
4. `Sessel mit Lederauflage`
5. `Konsole aus geräuchertem Holz`
6. `Tisch mit Steinplatte`
7. `Regalobjekt aus Nussbaum`
8. `Daybed mit Wollbezug`
9. `Hocker aus massivem Holz`
10. `Schreibtisch mit klarer Kante`
11. `Sideboard mit Steinauflage`
12. `Stuhl mit Stahlrahmen`
13. `Runder Tisch aus Esche`

### Leuchten

1. `Leuchte aus Bronze`
2. `Wandleuchte mit Glasschirm`
3. `Tischleuchte aus Stahl`
4. `Stehleuchte mit Stoffschirm`
5. `Pendelleuchte aus Messing`
6. `Keramische Wandlampe`
7. `Lichtobjekt aus Glas`
8. `Deckenleuchte mit Bronzedetail`
9. `Kleine Tischleuchte aus Stein`
10. `Lineare Leuchte aus Aluminium`
11. `Leuchtkörper mit Seidenschirm`
12. `Wandobjekt mit indirektem Licht`

### Kunst

1. `Papierarbeit mit Struktur`
2. `Mineralische Fläche auf Leinen`
3. `Kleine Bronzeplastik`
4. `Wandarbeit aus Papier`
5. `Relief aus hellem Holz`
6. `Arbeit mit Asche und Pigment`
7. `Textile Wandarbeit`
8. `Objekt aus Stein und Papier`
9. `Schwarze Zeichnung auf Bütten`
10. `Skulptur aus gebranntem Ton`
11. `Diptychon mit feiner Linie`
12. `Kleine Arbeit auf Holz`

### Teppiche

1. `Wollteppich in Naturtönen`
2. `Flacher Teppich aus Leinen`
3. `Handgeknüpfter Teppich in Grau`
4. `Textile Fläche mit Relief`
5. `Läufer aus ungefärbter Wolle`
6. `Teppich mit mineralischer Farbigkeit`
7. `Runder Teppich in Naturweiß`
8. `Gewebter Teppich mit Kante`
9. `Teppich in dunkler Melange`
10. `Kleiner Teppich für Lesezone`
11. `Große textile Raumfläche`
12. `Wandteppich mit feinem Flor`

### Objekte

1. `Beistelltisch aus Naturstein`
2. `Steinobjekt mit geschliffener Kante`
3. `Bronzeform für den Tisch`
4. `Keramikobjekt mit dunkler Glasur`
5. `Glasobjekt mit Einschluss`
6. `Kleine Skulptur aus Holz`
7. `Objekt aus Messing und Stein`
8. `Wandobjekt aus Keramik`
9. `Schale aus Naturstein`
10. `Objekt mit Grifföffnung`
11. `Kleine Metallarbeit`
12. `Sockelobjekt aus hellem Stein`

### Tabletop / Accessoires

1. `Keramikobjekt mit Grifföffnung`
2. `Vase aus glasierter Keramik`
3. `Flache Schale aus Steinzeug`
4. `Untersetzer aus Naturstein`
5. `Kerzenhalter aus Ton`
6. `Kleines Tablett aus Messing`
7. `Glasbecher mit schwerem Boden`
8. `Servierschale mit matter Glasur`
9. `Objektvase in dunkler Glasur`
10. `Steinplatte für den Tisch`
11. `Kleine Schale aus Bronze`
12. `Keramikset mit drei Formen`

### Collectible Design

1. `Limitierter Beistelltisch aus Stein`
2. `Sitzskulptur mit Stahlrahmen`
3. `Edition aus Bronze und Glas`
4. `Objekttisch mit patinierter Fläche`
5. `Keramische Sitzform`
6. `Regalobjekt in kleiner Edition`
7. `Lichtskulptur aus Glas`
8. `Steinrelief als Objekt`
9. `Tischobjekt aus Holz und Bronze`
10. `Wandkonsole in limitierter Serie`
11. `Sammelobjekt aus Keramik`
12. `Edition eines Raumobjekts`

### Editionen

1. `Kerzenhalter aus patinierter Bronze`
2. `Kleine Edition aus Papier`
3. `Bronzeobjekt in kleiner Auflage`
4. `Glasobjekt als Edition`
5. `Keramikedition mit matter Glasur`
6. `Druck auf handgeschöpftem Papier`
7. `Kleine Wandarbeit aus Holz`
8. `Edition aus Naturstein`
9. `Objektset aus drei Formen`
10. `Metallarbeit in kleiner Auflage`
11. `Papierrelief als Edition`
12. `Keramisches Wandstück`

## 16. Shoplogik und Checkout

Datei: `app/lib/commerce.ts`.

CTA-Mapping:

- `sofort-kaufen` -> Label `In den Warenkorb`, href `/warenkorb`, nicht disabled.
- `anfragen` -> Label `Anfrage senden`, href `/contact`, nicht disabled.
- `preis-auf-anfrage` -> Label `Preis anfragen`, href `/contact`, nicht disabled.
- `reserviert` -> Label `Reserviert`, kein href, disabled.
- `verkauft` -> Label `Verkauft`, kein href, disabled.

Lokalisierte CTA-Logik:

- In `app/[locale]/[...slug]/page.tsx` gibt es `getLocalizedCta`.
- `sofort-kaufen` führt lokalisiert zum Warenkorb.
- Anfrage- und Preisanfrage-Status führen zur lokalisierten Kontaktseite.
- Produkt-spezifisches `ctaLabel` überschreibt Label.

Checkout:

- `prepareCheckout()` gibt weiterhin `{ enabled: false }` zurück und steuert nur die alte Warenkorb-Preview.
- Zusätzlich existiert ein serverseitiger Stripe-Testcheckout für `sitzobjekt-kuhfell`.
- Freigabe erfolgt ausschließlich über `STRIPE_CHECKOUT_ENABLED=true` und vorhandenen `STRIPE_SECRET_KEY`.
- Die serverseitige Whitelist liegt in `app/lib/commerce.ts` und enthält nur `sitzobjekt-kuhfell` mit `720000` Cent, `eur`, Menge 1.
- Success- und Webhook-Validierung prüfen `mode`, `payment_status`, `amount_total`, `currency` und `metadata.productSlug`.
- Ohne gültige Stripe-Konfiguration bleibt der bestehende Anfrage-CTA sichtbar; es wird keine Session versucht.
- Keine Bestellpersistenz, keine E-Mail, kein Fulfillment und keine Live-Zahlungszusage sind implementiert.

Warenkorb:

- `app/warenkorb/page.tsx`
- `robots: noindex, follow`
- Zeigt zwei Preview-Items.
- Button `Checkout vorbereiten` ist disabled, wenn `checkout.enabled` false ist.
- Es gibt keinen echten Warenkorbzustand.

## 17. Komponenten

### `PageHero`

Props:

- `eyebrow`
- `title`
- `description`

Funktion:

- Standard-Hero für viele Indexseiten.
- Zweispaltig auf Desktop.
- H1 links, Beschreibung rechts.
- Design: `border-b hairline bg-[#f3f2ef]`, `max-w-[1540px]`.

### `PlaceholderArtwork`

Props:

- `palette`
- `index?`

Funktion:

- Abstrakter 4:5-Platzhalter für Kunst/Produkte ohne Bild.
- Nutzt Palette als innere Fläche.
- Zeigt zweistellige Nummer unten.

### `ProductMedia`

Exportiert:

- `ProductImageAsset`
- `ProductCardMedia`
- `ProductGallery`

`ProductCardMedia`:

- Nutzt erstes Bild, wenn vorhanden.
- Sonst Fallback auf `PlaceholderArtwork`.
- `aspect-[4/5]`, `object-contain`, lokale Public-Assets.

`ProductGallery`:

- Nutzt alle Bilder, erstes groß `aspect-[3/2]`, weitere in `sm:grid-cols-2`.
- Erstes Bild hat `priority`.
- Fallback auf `PlaceholderArtwork`.

### `EntityActions`

Client Component.

Props:

- `id`
- `title`
- `type`: `Produkt`, `Kunstwerk`, `Collectible Design`, `Atelier`
- `href`

Funktion:

- Speichert gemerkte Entitäten im `localStorage`.
- Key: `getyour-design:saved-entities`.
- Speicherdaten: `id`, `title`, `type`, `href`, `savedAt`.
- Button 1: Speichern/Merken, toggelt lokal.
- Button 2: Teilen.
- Teilen nutzt `navigator.share`, sonst `navigator.clipboard.writeText`.

Wichtig:

- Diese Daten verlassen den Browser nicht automatisch.
- Datenschutzseite erwähnt diese lokale Speicherung.

### `SocialLinks`

- Rendert Instagram, Pinterest, LinkedIn.
- Instagram und Pinterest haben externe Links.
- LinkedIn hat aktuell keinen href und wird als nicht klickbarer Button gerendert.
- Icons sind inline SVG.
- Externe Links: `rel="noopener noreferrer"`, `target="_blank"`.

### `Navigation`

- Global, clientseitig.
- Locale-aware.
- Aktiver Zustand.
- Sprachumschalter.
- Mobile horizontal scrollbar.

### `Footer`

- Global, clientseitig.
- Locale-aware.
- Social Links.
- Legal Links.

### `LocalizedHomePage`

- Internationalisierte Homepage für Nicht-DE.
- Deutsche `/de` Homepage verwendet aktuell Root-`Home`.
- Verwendet Dictionaries für Hero, CTAs, Sektionen, Kategorie-/Materiallabels.

### `LuxuryCoastersPage`

- Kampagnen-/Produktlandingpage für 54 COUTURE Cowhide Coasters.
- Nutzt `next/image`.
- Kopien nur für EN und DE, andere Locales bekommen im Catchall Platzhalter.
- Eigene Rubin-Farbwelt.
- CTA mailto: `info@getyour.design`.

## 18. Seiten und Funktionen

### Homepage `/` und `/de`

Root `app/page.tsx`.

Sektionen:

1. Hero mit Text:
   - `Sagen Sie uns / was Sie umgibt / und wir sagen Ihnen / wer Sie sind`
   - Tagline: `DESIGN UND KUNST / FÜR INDIVIDUALISTEN.`
   - CTAs: `Shop entdecken`, `Kollektionen ansehen`
   - Hero-Bild: `/images/hero-lc2-blue.png`
2. Shop-Hub-Links: Möbel, Teppiche, Leuchten, Accessoires, Objekte, Kunstwerke.
3. Ausgewähltes Objekt: Featured-Commerce-Produkt `sitzobjekt-kuhfell` mit bestehenden Produktdaten und Produktpfad.
4. Neu eingetroffen: erste 8 Produkte.
5. Ausgewählte Arbeiten.
6. Objekte & Editionen mit Small-Objects-Liste.
7. Arbeit einreichen.
8. Orientierung.
9. Kuratierte Kollektionen.
10. Materialbibliothek.
11. Journal & Inspiration.
12. Commissions & Collaborations.
13. Newsletter-Placeholder.

### Localized Homepage

`app/[locale]/page.tsx`:

- `generateStaticParams` generiert alle sechs Locales.
- `generateMetadata` nutzt Dictionary und hreflang.
- `de` rendert `Home`.
- Andere Locales rendern `LocalizedHomePage`.

### Shop `/shop`

`app/shop/page.tsx`.

- PageHero.
- Kategorie-Navigation über `visibleShopCategories`.
- Produktgrid aller Produkte.
- Produktkarten verlinken nach `/shop/{categorySlug}/{productSlug}`.
- EntityActions an jeder Produktkarte.
- Root `/shop` wird per Middleware nach `/de/shop` umgeleitet.

### Shop Slug `/shop/[slug]`

Kann Kategorie oder Produkt sein.

Kategorie:

- Erkennt `shopCategories.find(slug)`.
- PageHero-artiger Kategorie-Header.
- Grid der Kategorieprodukte.
- EntityActions.

Produkt:

- Erkennt `products.find(slug)`.
- Produktgallery links.
- Produktdetails rechts.
- Preis, Verfügbarkeit, Description, Long Description.
- Details: Maße, Material, Herkunft, Unique Note.
- CTA abhängig von Status.
- EntityActions.

Hinweis:

- `generateStaticParams` der Root-Shop-Slug-Seite generiert Kategorie-Slugs und flache Produkt-Slugs, nicht verschachtelte Root-Produktrouten. Verschachtelte Produktpfade sind vor allem über locale Catchall relevant und Root-Links werden per Middleware nach `/de/...` gelenkt.

### Lokalisierter Catchall

`app/[locale]/[...slug]/page.tsx` ist die komplexeste Datei.

Aufgaben:

- Statische Routen pro Locale auflösen.
- Kategorien/Produkte auflösen.
- Metadata generieren.
- Legal-Sonderfälle behandeln.
- Lokalisierte Shopseiten darstellen.
- Fallback-Platzhalter für nicht vollständig übersetzte statische Seiten.

Spezialfälle:

- `luxury-coasters`: DE/EN rendern echte `LuxuryCoastersPage`; andere Locales Platzhalter.
- Legal:
  - EN: vollständige Convenience-Version.
  - FR/ES/ZH/AR: nicht bindender Placeholder mit Link zur EN-Version.
- EN statische Seiten:
  - Shop, Art, Collections, Ateliers, Journal, Contact, Search, Cart haben eigene oder lokalisierte Darstellung.
  - Andere greifen auf Root-Komponenten zurück.
- Nicht-DE statische generische Seiten bekommen `LocalizedStaticPlaceholder`.

### Kunst `/art`

- PageHero.
- Grid aus `artworks`.
- PlaceholderArtwork.
- EntityActions.

### Artists `/artists`

- Künstlerprofile aus `artists`.
- Karten mit abstrakten Farbflächen.
- CTA-Zeile zu Shop, Collections, Materials.

### Ateliers `/ateliers`

- PageHero.
- Schwerpunkte: Sonderanfertigungen, individuelle Projektanfragen.
- Atelierporträts aus `brands`.
- EntityActions für Ateliers.
- CTA-Zeilen zu Trade, Arbeit einreichen, Materialien.

### Brands `/brands`

- PageHero.
- Karten aus `brands`.
- CTA-Zeile zu Shop, Collections, Materials.

### Collections `/collections`

- PageHero.
- Grid aus `collections`.
- Farbflächen statt echter Bilder.

### Materials `/materials`

- PageHero.
- Materialkarten aus `materialCards`.
- CTA-Zeile zu Shop, Collections, Journal.

### Contact `/contact`

- Kontaktseite mit Private-Anfragen-Panel.
- E-Mail: `studio@getyour.design`.
- SocialLinks.
- Anfragegruppen aus `inquiryGroups`.
- Mailto-Links mit Subject.
- Kein Formularversand.

### Trade `/trade`

- B2B/Projektseite.
- Zielgruppen: Architekten, Interior Designer, Hotels, Projektkunden.
- Benefits: Projektanfragen, Private Beschaffung, Atelier-Anfragen, Arbeit einreichen, Reservierte Editionen, Materialberatung.
- CTA zu `/contact` und `/arbeit-einreichen`.

### Arbeit Einreichen `/arbeit-einreichen`

- Frontend-Prototyp.
- Formularfelder:
  - Name
  - E-Mail
  - Website optional
  - Instagram optional
  - Titel der Arbeit / des Objekts
  - Kategorie
  - Preisvorstellung optional
  - Beschreibung
  - Bildupload
  - Weitere Dateien optional
- Button `Arbeit einreichen` ist `type="button"`.
- Keine Datenübertragung.
- Keine Upload-Logik.

### Impressum `/impressum`

Betreiberdaten:

- Unternehmen: `2B Home GmbH`
- Anschrift: `Kurfürstendamm 193d, 10707 Berlin`
- Telefon: `030 8871 4880`
- Fax: `030 1388 1599`
- E-Mail: `home@2b.berlin`
- Vertreten durch: `Diana Tarlig-Julich`
- Registergericht: `Amtsgericht Berlin`
- Handelsregister: `HRB 235346 B`
- USt-ID: `DE348785133`

E-Mail ist als mailto-Link gerendert.

### Datenschutz `/datenschutz`

Abschnitte:

- Verantwortliche Stelle.
- Server- und Logdaten.
- Kontaktaufnahme und Anfragen.
- Merkliste und lokale Speicherung.
- Social Links.
- Speicherdauer.
- Ihre Rechte.

Kontakt-E-Mail: `home@2b.berlin`, als mailto-Link.

### AGB `/agb`

Abschnitte:

- Geltungsbereich.
- Produktdarstellung.
- Anfragen, Verfügbarkeit und Preise.
- Kauf, Reservierung und Auftrag.
- Zahlung und Versand.
- Rückgabe und Reklamation.
- Kunstwerke, Editionen und Einzelstücke.
- B2B- und Projektanfragen.
- Urheberrechte.

### Suche `/suche`

- Frontend-Prototyp.
- Form action `/suche`.
- Keine echte Suchlogik.
- Preview-Ergebnisse aus Produkten, Artworks, Brands.
- Entrypoints zu Shop, Kunst, Kollektionen, Ateliers, Journal.

### Warenkorb `/warenkorb`

- Frontend-Prototyp.
- `robots: noindex, follow`.
- Preview Items.
- Checkout Button disabled.
- Kein echter Warenkorb.

### Gallery `/gallery`

- Kuratierte Einstiegsseite mit sechs statischen Labels:
  - Wohnraum-Edit
  - Sammler-Suite
  - Atelier-Auswahl
  - Objekttisch
  - Materialraum
  - Private Auswahl

### Objects `/objects`

- Nutzt `featuredObjects`.
- Listenartige Darstellung mit Kategorie, Titel, Material.

### Journal `/journal`

- PageHero.
- Story-Karten aus `stories`.
- Verbindungen zu Künstlern, Ateliers & Marken, Materialien.

### Stories `/stories`

- Redirect zu `/journal`.

### Sculptural Seating `/sculptural-seating`

- Dunkler Hero.
- Liste von vier Sitzobjekt-Platzhaltern.
- Sonderseitencharakter.

### Luxury Coasters `/luxury-coasters`

- Root-Seite rendert `LuxuryCoastersPage` auf Englisch.
- Lokalisierte Pfade: DE/EN echte Inhalte, andere Locales Placeholder.
- Bilder aus `public/images/coasters`.
- CTA via mailto `info@getyour.design`.

## 19. Datenmodule

### `app/data/artworks.ts`

Vier Kunstwerke:

- Papierarbeit mit mineralischer Fläche.
- Kleine Skulptur aus Bronze.
- Arbeit aus Papier, Asche und Pigment.
- Reliefobjekt aus hellem Holz.

Felder:

- `title`
- `artist`
- `medium`
- `year`
- `price`
- `palette`

### `app/data/artists.ts`

Vier Künstlerpositionen:

- Künstlerposition A
- Künstlerposition B
- Künstlerposition C
- Künstlerposition D

Felder:

- `name`
- `profile`

### `app/data/brands.ts`

Vier Marken/Ateliers:

- Atelier A
- Manufaktur B
- Textilmanufaktur C
- Keramikatelier D

Felder:

- `name`
- `description`

### `app/data/collections.ts`

Sechs Collections:

- `material-surface`
- `quiet-rooms`
- `collectible-design`
- `editions-artworks`
- `seating-design-furniture`
- `natural-materials`

Felder:

- `key`
- `title`
- `description`

### `app/data/materials.ts`

Sechs Materialien:

- Wolle
- Leder
- Keramik
- Holz
- Travertine
- Bronze

Felder:

- `name`
- `description`
- `palette`

### `app/data/stories.ts`

Vier Story-Platzhalter:

- Die Wirkung einzelner Objekte im Raum.
- Materialien, die mit der Zeit gewinnen.
- Wenn Design zum Sammlerstück wird.
- Wo Arbeiten entstehen.

Felder:

- `title`
- `category`
- `teaser`

### `app/data/inquiries.ts`

Anfragegruppen:

- Produkte: Kaufanfrage, Verfügbarkeitsanfrage, Beratungsanfrage.
- Kunstwerke: Werk anfragen, Preis anfragen, Sammleranfrage.
- Ateliers: Projektanfrage, Kooperationsanfrage, Interior-Anfrage.
- B2B: Architektenanfrage, Hotellerie-Anfrage, Projektentwickler-Anfrage, Objektanfrage.

### `app/data/social.ts`

Social Links:

- Instagram: `https://www.instagram.com/getyour.design.info/`
- Pinterest: `https://www.pinterest.com/getyourdesignby2bhome/`
- LinkedIn: kein href.

### `app/data/publishing.ts`

Publishing-/SEO-Feldlisten:

`publishingQualityChecks`:

- `seo`
- `metaTitle`
- `metaDescription`
- `germanContent`
- `englishPrepared`
- `pinterestData`
- `instagramData`
- `linkedInData`
- `openGraph`
- `imageSeo`
- `internalLinks`
- `canonical`
- `conversion`
- `inquiryOrPurchase`
- `entityAssignment`
- `geoRelevanceReviewed`
- `affiliateRelevanceReviewed`
- `trackingPrepared`

`socialPublishingFields`:

- canonicalUrl
- openGraphTitle
- openGraphDescription
- openGraphImage
- pinterestTitle
- pinterestDescription
- pinterestImage
- instagramCaption
- linkedInTitle
- linkedInDescription
- linkedInImage
- backlink

`entityTypes`:

- product
- artwork
- collectibleDesign
- atelier
- artist
- collection
- journalArticle
- geoPage
- affiliatePage

## 20. Coding Conventions

Allgemein:

- TypeScript.
- React Server Components als Default.
- Client Components nur bei Browserzustand/Hooks:
  - `Navigation`
  - `Footer`
  - `EntityActions`
  - `SocialLinks` ist serverfähig, aber ohne `"use client"`.
- Daten liegen in `app/data`.
- UI-Helfer liegen in `app/components`.
- Logik-Helfer liegen in `app/lib`.

Importmuster:

- Relative Imports.
- Typen werden mit `import type` importiert.
- Next-Metadaten mit `import type { Metadata } from "next"`.

Styling:

- Tailwind Utility Classes direkt in JSX.
- Keine separate Component-CSS-Dateien außer `globals.css`.
- Wiederkehrende Layoutwerte: `section-pad`, `hairline`, `max-w-[1540px]`.
- Hex-Farben inline in Tailwind-Klassen.

Rendering:

- Kein globales State-Management.
- Keine Server Actions.
- Kein Formular-Submit-Handling außer statischer action bei Suche.
- Kein API-Client.

Fehlerbehandlung:

- Ungültige Routen nutzen `notFound()`.
- Redirects über Middleware oder `redirect("/journal")`.

## 21. Tonalität und Content-Regeln

Sprache:

- Ruhig.
- Kuratorisch.
- Materialnah.
- Präzise.
- Keine aggressive Verkaufsrhetorik.

Produktnamen:

- Objektart + Material/Form/Technik.
- Beispiele:
  - Sitzobjekt aus europäischem Kuhfell.
  - Beistelltisch aus Naturstein.
  - Bronzeobjekt in kleiner Auflage.

Produktbeschreibungen:

- Material, Proportion, Form, Herkunft, Raumwirkung.
- Bei Einzelstücken natürliche Variation benennen.
- Keine unbelegten Superlative.

CTAs:

- Kurz und sachlich.
- Beispiele:
  - Shop entdecken.
  - Kollektionen ansehen.
  - Anfrage senden.
  - Preis anfragen.
  - Verfügbarkeit anfragen.

Legal:

- Sachlich und vorsichtig.
- Keine erfundenen Übersetzungen für FR/ES/ZH/AR.
- Betreiberangaben konsistent halten.

## 22. Bekannte technische Besonderheiten und Risiken

- `next.config.ts` hat keine Image-Remote-Konfiguration; das ist korrekt, solange nur lokale Public-Bilder verwendet werden.
- Einige Bilddateien haben Dateiendungen, die nicht zum tatsächlichen Bildformat passen:
  - `yellow-cowhide-seat.webp` enthält PNG-Daten.
  - `coasters/material.jpg` enthält PNG-Daten.
  - `coasters/packaging.jpg` enthält PNG-Daten.
- Next Image kann diese lokal optimieren, aber bei zukünftiger Asset-Pflege sollte Dateiendung und MIME konsistent sein.
- `PROJECT_SPEC.md` ist ungetrackt vorhanden und sollte nicht versehentlich committed werden.
- `.DS_Store`-Dateien liegen in Bildordnern und sollten nicht committed werden.
- `seo-audit-getyour-design` enthält historische Auditdaten, die nicht zwingend aktuellen Codezustand abbilden.
- Suchseite ist keine echte Suche.
- Arbeit-einreichen-Formular verschickt nichts.
- Warenkorb/Checkout ist deaktiviert.
- `prepareCheckout()` ist bewusst inaktiv.
- Social `LinkedIn` hat keinen externen Link.
- Viele Produkte sind Platzhalter/Seed-Daten, nicht echte Produktdaten.
- Nur das Kuhfell-Sitzobjekt ist aktuell mit echten Produktbildern und vollständigen LocalizedProductContent-Daten ausgebaut.

## 23. Weiterentwicklungsregeln für neue Arbeit

Neue Produktseite:

1. Produkt in `app/data/products.ts` ergänzen, bevorzugt in vorhandener Kategorie.
2. Echte Bilder unter `public/images/products/` ablegen.
3. `images` mit `src` und präzisen Alt-Texten setzen.
4. Für echte Produkte `description`, `longDescription`, `dimensionsDetails`, `materialDetails`, `origin`, `uniqueNote`, `ctaLabel`, `metaTitle`, `metaDescription` pflegen.
5. Für wichtige Produkte `localized` für EN/FR/ES/ZH/AR ergänzen.
6. Interne Links über `getProductPath(locale, categorySlug, productSlug)` erzeugen.
7. Keine neue Shop-Architektur bauen.
8. Keine Stripe- oder Checkout-Logik aktivieren, solange nicht ausdrücklich beauftragt.

Neue statische Seite:

1. Route unter `app/{route}/page.tsx` anlegen.
2. Metadata definieren.
3. Falls lokalisierbar, `RouteKey` und `localizedRoutes` in `app/lib/i18n.ts` erweitern.
4. Dictionary-Einträge in `app/data/dictionaries.ts` ergänzen.
5. Catchall-Mapping in `app/[locale]/[...slug]/page.tsx` beachten.
6. Sitemap wird über `localizedRoutes` automatisch erweitert, wenn RouteKey aufgenommen wird.

Neue Navigation:

1. `app/data/navigation.ts` ergänzen.
2. Dictionary-Labels in allen Locales ergänzen.
3. `localizeHref` muss Ziel kennen.

Neue Legal-Inhalte:

1. Deutsche bindende Version zuerst.
2. Englische Convenience-Version nur vollständig und mit Hinweis.
3. FR/ES/ZH/AR keine automatischen Legal-Übersetzungen.
4. `docs/legal.md` beachten.

Neue Bilder:

1. In `public/images/...` ablegen.
2. Dateiendung und tatsächliches Format konsistent halten.
3. Alt-Texte konkret und objektbezogen schreiben.
4. Für Produktkarten `object-contain` bevorzugen, damit nichts abgeschnitten wird.
5. Für Landingpage-Fotografie nur dann `object-cover`, wenn Cropping gestalterisch gewollt ist.

Designänderungen:

- Bestehende Farbbasis beibehalten.
- Bestehende Typografie beibehalten.
- `PageHero`, `section-pad`, `hairline` und `max-w-[1540px]` wiederverwenden.
- Keine neue UI-Bibliothek einführen.
- Keine Refactors ohne klaren Auftrag.

## 24. Qualitätscheckliste

Vor Abschluss einer Änderung:

- `git status --short` prüfen.
- Nur erwartete Dateien geändert.
- `PROJECT_SPEC.md` nicht versehentlich aufnehmen.
- `.DS_Store` nicht aufnehmen.
- Keine `.env` oder Secrets lesen/ändern/committen.
- `npm run build` ausführen, wenn Code geändert wurde.
- Neue Routen lokal prüfen.
- Bildpfade direkt prüfen.
- Next Image bei neuen Produktbildern prüfen.
- Lokalisierte Pfade und hreflang prüfen.
- `git diff --check` ausführen.
- Nur relevante Dateien stage/committen, falls Commit beauftragt ist.

## 25. Vollständige Dateiverantwortung

Dateien, die Design/Architektur stark prägen:

- `app/globals.css`
- `app/layout.tsx`
- `app/components/Navigation.tsx`
- `app/components/Footer.tsx`
- `app/components/PageHero.tsx`
- `app/components/ProductMedia.tsx`
- `app/data/products.ts`
- `app/data/dictionaries.ts`
- `app/lib/i18n.ts`
- `app/sitemap.ts`
- `middleware.ts`

Dateien, die Content stark prägen:

- `app/page.tsx`
- `app/components/LocalizedHomePage.tsx`
- `app/data/products.ts`
- `app/data/artworks.ts`
- `app/data/collections.ts`
- `app/data/materials.ts`
- `app/data/stories.ts`
- `app/data/brands.ts`
- `app/data/artists.ts`

Dateien, die Legal/Compliance prägen:

- `app/impressum/page.tsx`
- `app/datenschutz/page.tsx`
- `app/agb/page.tsx`
- `docs/legal.md`
- Legal-Abschnitte in `app/[locale]/[...slug]/page.tsx`

Dateien, die Commerce/Shoplogik prägen:

- `app/data/products.ts`
- `app/shop/page.tsx`
- `app/shop/[slug]/page.tsx`
- `app/[locale]/[...slug]/page.tsx`
- `app/lib/commerce.ts`
- `app/warenkorb/page.tsx`

## 26. Aktueller Entwicklungszustand in einem Satz

GETYOUR.DESIGN ist aktuell eine statisch gerenderte, mehrsprachig vorbereitete kuratierte Design- und Kunstplattform mit vollständiger Shop-Katalogstruktur, deaktiviertem Checkout, starken lokalen Datenmodellen, sehr konsistenter ruhiger Design-DNA und einem neu integrierten echten Produkt mit vollständiger lokalisierter Detailseite.
