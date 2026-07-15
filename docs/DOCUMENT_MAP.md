# GETYOUR.DESIGN – Dokumentenlandkarte

Diese Landkarte beschreibt die Zielstruktur der Projektdokumentation. Sie verschiebt, ersetzt oder entwertet noch keine bestehenden Unterlagen.

## Zielstruktur

```text
docs/
├── START_HERE.md                 # Verbindlicher Einstieg und Lesepfade
├── CODEX_WORKFLOW.md             # Arbeitsprozess für Codex
├── DOCUMENT_MAP.md               # Diese Landkarte
│
├── PRODUCT_VISION.md             # Geplant: höchste strategische Ebene
├── BRAND_DNA.md                  # Geplant: Markenidentität und Ausdruck
├── UX_EXPERIENCE.md              # Geplant: Nutzererlebnis und Informationsarchitektur
├── DESIGN_SYSTEM.md              # Geplant: visuelles und interaktives System
│
├── PROJECT_ARCHITECTURE.md       # Geplant: aktuelle technische Architektur
├── CONTENT_SEO_I18N.md           # Geplant: Inhalte, SEO, Routing und Locales
├── COMMERCE_GOVERNANCE.md        # Geplant: Commerce-Regeln, Phasen und Freigaben
├── LEGAL_AFFILIATE_POLICY.md     # Geplant: Legal- und Affiliate-Governance
│
└── reference/                    # Geplant: wertvolles Referenzwissen
```

Die mit „Geplant“ markierten Fach-Policies werden erst in einer späteren, ausdrücklich freigegebenen Migrationsphase erstellt. Der Ordner `reference/` ist bereits angelegt, enthält jedoch noch keine verschobenen Dateien.

## Verbindliche Reihenfolge

```text
Vision → Marke → Nutzererlebnis → Design → Architektur → Inhalte → Commerce → Legal
```

Diese Reihenfolge ist eine Entscheidungslogik, keine bloße Sortierung. Architektur soll die strategische Vision, Markenhaltung und gewünschte Experience ermöglichen – nicht umgekehrt. Inhalte, Commerce und Legal konkretisieren und sichern die zuvor getroffenen Entscheidungen.

## Bestehende Unterlagen: aktuelle Rolle und künftige Zuordnung

| Bestehendes Dokument | Aktuelle Rolle | Künftige Rolle | Migration jetzt? |
| --- | --- | --- | --- |
| `docs/CODEX_WORKFLOW.md` | Arbeitsworkflow und Qualitätsregeln | Aktive Workflow-Policy | Nein; unverändert weiterführen |
| `GETYOUR_DESIGN_BRAND_DNA.md` | Marke, Gestaltung, Sprache, Bildwelt und technische Hinweise | Quelle für `docs/BRAND_DNA.md`, `docs/UX_EXPERIENCE.md` und `docs/DESIGN_SYSTEM.md`; danach Referenzwissen | Nein |
| `PROJECT_SPEC.md` | Architektur, Routing, SEO, i18n und Entwicklungsregeln | Quelle für `docs/PROJECT_ARCHITECTURE.md` und `docs/CONTENT_SEO_I18N.md`; danach Referenzwissen | Nein |
| `PROJECT_DNA_FULL.md` | Detaillierte Bestandsaufnahme des Repositories | Umfassendes Referenzwissen; Quelle für mehrere Fach-Policies | Nein |
| `COMMERCE_TRANSFORMATION_MASTERPLAN.md` | Commerce-Zielbild, Phasen und Schutzregeln | Quelle für `docs/PRODUCT_VISION.md` und `docs/COMMERCE_GOVERNANCE.md`; bleibt Referenz für Entscheidungen | Nein |
| `COMMERCE_BASELINE.md` | Commerce- und SEO-Regression-Snapshot | `docs/reference/` als historische Baseline | Nein |
| `docs/affiliate-readiness.md` | Affiliate-Readiness und Schutzregeln | Quelle für `docs/LEGAL_AFFILIATE_POLICY.md`; bleibt Referenz | Nein |
| `docs/legal.md` | Legal-Sprach- und Verbindlichkeitspolicy | Quelle für `docs/LEGAL_AFFILIATE_POLICY.md`; bleibt Referenz | Nein |
| `seo-audit-getyour-design/report.md` | SEO-Audit und Migrationsmatrix | `docs/reference/` als Audit-Referenz | Nein |
| `README.md` | Kurzstart für lokale Entwicklung | Projekt-Einstieg für Menschen; bleibt an der Repository-Wurzel | Nein |

## Künftige aktive Fach-Policies

| Zielunterlage | Verantwortungsbereich | Enthält nicht |
| --- | --- | --- |
| `PRODUCT_VISION.md` | Mission, Vision, Positionierung, Zielgruppen, Geschäftsmodell, Markenversprechen, Wettbewerbsumfeld, strategische Leitprinzipien und 3–5-Jahres-Zielbild | UI-Regeln, technische Detailimplementierung, operative Commerce-Logik |
| `BRAND_DNA.md` | Markenidentität, Tonalität, Content-Haltung, Bildkultur und Markenversprechen im Ausdruck | Nutzerfluss, Design-Tokens, technische Detailimplementierung |
| `UX_EXPERIENCE.md` | Nutzergruppen, Informationsarchitektur, Nutzerwege, Navigation, Conversion, Mobile Experience und Experience-Prinzipien | konkrete Farben, CSS-/Komponentenregeln, technische Architektur |
| `DESIGN_SYSTEM.md` | Typografie, Farben, Raster, Weißraum, Bildkomposition, Komponenten-, CTA- und Interaktionsprinzipien | Geschäftsstrategie, Daten- oder Routinglogik |
| `PROJECT_ARCHITECTURE.md` | Stack, App Router, Datenfluss, Komponenten, APIs, technische Risiken | Markenstil, Commerce-Roadmap, historische Inventare |
| `CONTENT_SEO_I18N.md` | Locales, Routing, Dictionaries, Metadata, Canonicals, `hreflang`, Sitemap, Bilder | langfristige Commerce-Phasen |
| `COMMERCE_GOVERNANCE.md` | Commerce-Modi, Produktdaten, Stripe-Grenzen, Freigaben, Affiliate-Abhängigkeiten | rechtsverbindliche Textfassungen |
| `LEGAL_AFFILIATE_POLICY.md` | Legal-Locale-Policy, Kennzeichnung, Rechte, Tracking- und Partnerfreigaben | allgemeines UI- oder Routingwissen |

## Referenzwissen in `docs/reference/`

Der Ordner wird später für Unterlagen verwendet, die weiterhin konsultierbar bleiben sollen, aber keinen laufenden Primärstatus beanspruchen:

- historische Baselines;
- SEO-Audits und Migrationsmatrizen;
- ausführliche Bestandsaufnahmen;
- abgelöste, aber entscheidungsrelevante Masterpläne;
- frühere Spezifikationsstände.

Beim Überführen wird jede Datei entweder unverändert verschoben oder in einer neuen aktiven Policy als Quelle verlinkt. Es werden keine Inhalte stillschweigend gelöscht.

## Vorgesehene Migrationsreihenfolge

1. Aktive Zuständigkeiten und Gültigkeit jeder Aussage festlegen.
2. `PRODUCT_VISION.md` als höchste strategische Grundlage erstellen.
3. `BRAND_DNA.md` als konzentrierte Marken- und Content-Quelle erstellen.
4. `UX_EXPERIENCE.md` für Nutzererlebnis, Navigation und Conversion erstellen.
5. `DESIGN_SYSTEM.md` als visuelle Übersetzung der Vision, Marke und UX erstellen.
6. `PROJECT_ARCHITECTURE.md` aus aktuellen Architekturregeln erstellen.
7. `CONTENT_SEO_I18N.md` aus Routing-, Locale- und SEO-Regeln erstellen.
8. `COMMERCE_GOVERNANCE.md` und `LEGAL_AFFILIATE_POLICY.md` erstellen.
9. Bestehende Langdokumente als Referenz unter `docs/reference/` einordnen.
10. Cross-References, Aktualitätsdaten und Gültigkeitshinweise prüfen.

Bis zu einer solchen Freigabe bleibt diese Landkarte rein organisatorisch: Bestehende Dokumente und ihre Inhalte werden nicht geändert.
