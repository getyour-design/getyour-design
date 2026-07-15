# GETYOUR.DESIGN – Arbeitsworkflow für Codex

Diese Datei ist die dauerhafte Arbeitsanweisung für zukünftige Aufgaben in diesem Repository. Sie ergänzt die Projektdokumentation, ersetzt jedoch keine fachlichen oder rechtlichen Freigaben.

## 1. Projekt in Kürze

GETYOUR.DESIGN ist eine mit Next.js App Router, TypeScript und Tailwind CSS umgesetzte, kuratierte Design-, Kunst- und Objektplattform. Die Anwendung ist überwiegend statisch und datengetrieben:

- Inhalte liegen lokal in `app/data/`; es gibt kein CMS und keine Datenbank.
- Routen, Sprachwechsel, lokalisierte Shop-Slugs und `hreflang` werden zentral in `app/lib/i18n.ts` gesteuert.
- Die UI verwendet bestehende React-Komponenten und mobile-first Tailwind-Klassen.
- Commerce ist absichtlich begrenzt: Stripe ist nur als feature-geschützter Testcheckout für das whitelisted Produkt `sitzobjekt-kuhfell` vorbereitet. Warenkorb, Bestellpersistenz und Kundenkommunikation sind nicht produktiv implementiert.
- Unterstützte Locales sind `de`, `en`, `fr`, `es`, `zh` und `ar`; Arabisch ist die einzige RTL-Locale.

## 2. Verbindliche Informationsquellen

Vor einer Änderung die für das Thema relevanten Quellen lesen. Bei Widersprüchen gehen der aktuelle Code und ausdrücklich neuere, auf den aktuellen Stand bezogene Hinweise vor historischen Baselines.

| Thema | Zuerst prüfen |
| --- | --- |
| Architektur, Routing, SEO, i18n, Projektregeln | `PROJECT_SPEC.md` |
| Design-DNA, Datenmodell, bekannte Risiken, Qualitätscheck | `PROJECT_DNA_FULL.md` |
| Marken- und Gestaltungsgrundsätze | `GETYOUR_DESIGN_BRAND_DNA.md` |
| Commerce-Phasen und Schutzregeln | `COMMERCE_TRANSFORMATION_MASTERPLAN.md` |
| Bestehende Commerce-Regressionen | `COMMERCE_BASELINE.md` (historische Referenz) |
| Rechtliche Inhalte | `docs/legal.md` |
| Affiliate-Inhalte | `docs/affiliate-readiness.md` |

Zusätzlich immer die unmittelbar betroffenen Dateien lesen, bevor sie geändert werden. Für Änderungen an Seiten insbesondere die deutsche Originalseite und `app/[locale]/[...slug]/page.tsx` vergleichen.

## 3. Grundsätze für jede Aufgabe

1. **Repository-first arbeiten.** Erst Ist-Zustand, Datenfluss und bestehende Muster verstehen; keine Lösung aus Annahmen ableiten.
2. **Minimal und additiv ändern.** Nur Dateien ändern, die zur Aufgabe gehören. Keine opportunistischen Refactorings, Bereinigungen oder Architekturwechsel.
3. **Bestehende Muster wiederverwenden.** Vor neuen Komponenten, Datenstrukturen oder Helfern prüfen, ob `app/components`, `app/data`, `app/lib/i18n.ts` oder `app/lib/commerce.ts` bereits ein passendes Muster enthalten.
4. **Keine neuen Abhängigkeiten ohne ausdrücklichen Bedarf.** Keine UI-Bibliotheken, globalen State-Libraries oder externen Dienste als Abkürzung einführen.
5. **Keine Inhalte oder Behauptungen erfinden.** Das gilt besonders für Preise, Verfügbarkeiten, Lieferzeiten, Markenbeziehungen, Affiliate-Partnerschaften, Reviews, Awards, Rechte und rechtliche Aussagen.
6. **URLs stabil halten.** Slugs, Redirects, Canonicals, `hreflang` und Sitemap nur mit explizitem Auftrag und klarer Migrations-/Redirect-Strategie verändern.
7. **Keine Secrets behandeln.** `.env`-Dateien nicht lesen, ändern oder committen; keine Zugangsdaten im Code oder in Dokumenten ablegen.
8. **Keine Commits oder Pushes ohne Auftrag.** Vor einem Commit immer Diff, Staging-Inhalt und Nutzerfreigabe prüfen.

## 4. Standardablauf

### Vor der Umsetzung

1. `git status --short` prüfen und fremde oder bestehende Änderungen bewahren.
2. Relevante Projektdokumentation und die betroffenen Implementierungen lesen.
3. Ziel, betroffene Dateien, Annahmen und Risiken knapp benennen.
4. Auswirkungen auf mindestens diese Bereiche bewerten, sofern sie berührt sein könnten: Routing, i18n, SEO, Accessibility, Performance, Navigation, Affiliate, Commerce und Recht.
5. Benennen, was unverändert bleibt.
6. Bei einem materiellen Risiko oder fehlender fachlicher Freigabe anhalten und nachfragen; keine Produkt-, Rechts- oder Commerce-Entscheidung selbst treffen.

### Während der Umsetzung

1. TypeScript strikt und im vorhandenen Stil verwenden.
2. Server Components als Standard behandeln; Client Components nur für tatsächlich notwendige Browser-Interaktion einsetzen.
3. Datenmodelle und Dictionaries als Single Source of Truth nutzen; keine parallelen Listen oder hart codierten Übersetzungen anlegen.
4. Änderungen klein halten und nach jedem logisch abgeschlossenen Teil den Diff prüfen.
5. Keine anderen Dateien formatieren oder verändern, wenn sie nicht Teil der Aufgabe sind.

### Vor Übergabe oder Commit

1. `git diff --check` ausführen.
2. `git status --short` prüfen: Nur erwartete Dateien dürfen verändert sein.
3. Bei Codeänderungen `npm run build` ausführen, sofern der Nutzer dies nicht ausgeschlossen hat. Bei reinen Dokumentationsaufgaben keinen Build erzwingen, wenn er Artefakte erzeugen könnte.
4. Relevante Routen und Interaktionen proportional zum Risiko prüfen.
5. Änderungen, Validierung und verbleibende Risiken kurz berichten.
6. Erst nach ausdrücklicher Freigabe committen; nur aufgabenzugehörige Dateien stagen und niemals automatisch pushen.

## 5. Routing, Internationalisierung und SEO

- Locale-Logik ausschließlich über `locales`, `localizedRoutes`, `localizeHref`, `getShopPath`, `getProductPath` und verwandte Helper in `app/lib/i18n.ts` behandeln.
- Interne locale-abhängige Links nicht als harte Sprachpfade schreiben.
- Neue sichtbare, internationale UI-Texte im Dictionary-System (`app/data/dictionaries.ts`) ergänzen. Der englische Fallback ist bewusst, aber kein Ersatz für notwendige Übersetzungen.
- Für neue lokalisierte Seiten `RouteKey`, `localizedRoutes`, Catch-all-Auflösung, Metadata und Sitemap-Auswirkung gemeinsam prüfen.
- Canonical, `hreflang`, Open Graph und Sitemap nie unabhängig voneinander pflegen; immer die vorhandenen Helper verwenden.
- Ungültige Routen mit `notFound()` behandeln; Redirects über die vorhandene Middleware-/Next-Mechanik lösen.
- `ar` erhält als einzige Locale `dir="rtl"`. Feste links/rechts-basierte Layoutannahmen für neue locale-sensible UI vermeiden.
- Keine deutsche Originalseite unbeabsichtigt als internationale Seite ausliefern, wenn ein lokalisierter Inhalt oder ein ehrlicher Placeholder vorgesehen ist.
- JSON-LD nur mit überprüfbaren lokalen Daten ergänzen; niemals erfundene Ratings, Reviews, Preise, Verfügbarkeiten oder Partnerschaften auszeichnen.

## 6. Design, Inhalte und Barrierefreiheit

- Die Gestaltung bleibt ruhig, hochwertig, editorial, materialnah und mobile-first – nicht laut oder generisch e-commerce-artig.
- Bestehende Gestaltungsmittel bevorzugen: `PageHero`, `section-pad`, `hairline`, `max-w-[1540px]`, die vorhandene Typografie und die neutrale, mineralische Farbpalette.
- Kein visuelles Redesign, keine dominante neue Farbwelt und keine neue UI-Bibliothek ohne expliziten Auftrag.
- Keine Desktop-Optimierung darf Mobile UX, Lesbarkeit oder horizontales Verhalten verschlechtern.
- Semantische Überschriften, bedienbare Links/Buttons, ausreichende Kontraste und sinnvolle Touch-Targets sicherstellen.
- Für echte Bilder konkrete, objektbezogene Alt-Texte verwenden; dekorative Visuals nicht als reale Inhalte ausgeben.
- Neue Assets unter `public/images/...` ablegen, Bildformat und Dateiendung konsistent halten. Produktmedien bevorzugt mit `object-contain`, Landingpage-Fotografie nur gezielt mit `object-cover`.
- Tonalität: präzise, kuratorisch, sachlich und ohne unbelegte Superlative oder aggressive Verkaufsrhetorik.

## 7. Daten, Produkte und Commerce

- Produkt-, Marken-, Raum-, Kollektion- und Contentdaten in den vorhandenen Modulen unter `app/data/` pflegen; Felder nicht in Komponenten duplizieren.
- Neue Produkte bevorzugt in bestehende Kategorien einordnen und vollständige, belegbare Daten pflegen: Bilder, Alt-Texte, Material, Maße, Herkunft, Verfügbarkeit, Metadaten und bei wichtigen Produkten lokalisierte Inhalte.
- Produkt- und Kategoriepfade über die i18n-Helper generieren.
- Affiliate-Links ausschließlich als absolute HTTPS-URLs und nur mit geklärter Partner-, Kennzeichnungs-, Daten- und Bildrechtslage einsetzen. Die Regeln in `docs/affiliate-readiness.md` gelten verbindlich.
- Stripe, Checkout, Warenkorb, Zahlungsarten, Tracking, Bestellpersistenz, E-Mails oder Fulfillment nicht aktivieren oder erweitern, solange dies nicht ausdrücklich beauftragt und fachlich/rechtlich freigegeben ist.
- Die bestehende Stripe-Whitelist und das Feature-Gating in `app/lib/commerce.ts` nicht umgehen. Ohne gültige Konfiguration muss die Anfrage-/Statuslogik erhalten bleiben.
- Interne Quellen- und Beschaffungsdaten nicht unnötig öffentlich ausgeben.

## 8. Rechtliches und externe Kommunikation

- Deutsche Legal-Seiten sind verbindlich. Englisch ist eine vollständige Convenience-Version mit dem vorgesehenen Hinweis.
- Für `fr`, `es`, `zh` und `ar` keine automatischen oder erfundenen Rechtstexte einführen; ausschließlich die vorgesehenen nicht bindenden Placeholder mit Link zur englischen Version verwenden.
- Rechtliche, kommerzielle und markenbezogene Aussagen immer konservativ behandeln. Bei Unklarheit Rückfrage statt Annahme.
- Tracking, Affiliate-Kennzeichnung und externe Partnerdaten erst nach dokumentierter Datenschutz-, Consent- und Partnerfreigabe ergänzen.

## 9. Bekannte Grenzen und Fallstricke

- Der Catch-all `app/[locale]/[...slug]/page.tsx` bündelt viele Renderpfade. Routingänderungen dort besonders sorgfältig gegen deutsche Originalseiten, Kategorien und Produktpfade prüfen.
- `COMMERCE_BASELINE.md` ist ein historischer Regression-Snapshot; aktuelle Commerce-Implementierung und neuere Projektdokumentation haben Vorrang.
- Viele Katalogeinträge sind Seed-/Placeholder-Daten. Sie nicht als verifizierte Handelsdaten behandeln.
- Die Suche, das Einreichungsformular und der Warenkorb sind keine vollständigen Produktivfunktionen.
- Es gibt keine automatisierte Test-Suite. Der Build und gezielte manuelle Regressionen sind deshalb besonders wichtig.
- Das vorhandene `lint`-Skript ist für die eingesetzte Next-Version nicht als verlässlicher Standardcheck bestätigt; nicht als alleinige Qualitätsprüfung verwenden.
- `seo-audit-getyour-design/` enthält historische Auditdaten und ist nicht automatisch der aktuelle Zustand.
- Keine `.DS_Store`-Dateien, `.env`-Dateien oder nicht aufgabenzugehörigen Projektdokumente versehentlich committen.

## 10. Abschlussformat

Die Übergabe jeder Aufgabe nennt kurz:

- welche Dateien geändert wurden;
- welche Prüfungen erfolgreich durchgeführt wurden;
- welche Prüfungen bewusst nicht liefen und warum;
- relevante Restunsicherheiten oder notwendige fachliche Freigaben.

Bei Dokumentations- oder Analyseaufgaben gilt ebenfalls: keine unbeauftragten Nebenänderungen, kein Commit ohne Freigabe und ein sauberer Working Tree außerhalb der ausdrücklich angeforderten Dateien.
