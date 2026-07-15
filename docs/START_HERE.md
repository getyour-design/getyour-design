# GETYOUR.DESIGN – Dokumentations-Einstieg

Dieses Dokument ist der verbindliche Einstieg für jede zukünftige Arbeit an GETYOUR.DESIGN. Es erklärt, welche Dokumente für welche Aufgabe maßgeblich sind und wie mit dem aktuellen Referenzwissen gearbeitet wird.

## Arbeitsprinzip

1. Zuerst den aktuellen Code und den Working-Tree-Status prüfen.
2. Danach die für die Aufgabe benannten Fachdokumente lesen.
3. Bei Widersprüchen gilt: aktueller Code vor Dokumentation; aktuelle fachliche Policies vor historischen Referenzen.
4. Ausschließlich beauftragte Änderungen vornehmen. Keine Refactorings, URL-Änderungen, Commerce-Aktivierungen oder Commits ohne ausdrückliche Freigabe.

Die ausführlichen Prozessregeln stehen in [CODEX_WORKFLOW.md](CODEX_WORKFLOW.md).

## Dokumentenhierarchie

| Priorität | Quelle | Zweck |
| --- | --- | --- |
| 1 | Aktueller Code und Nutzerauftrag | Tatsächliches Verhalten und freigegebener Arbeitsumfang |
| 2 | Aktive Fach-Policies in `docs/` | Dauerhafte, aufgabenspezifische Regeln in verbindlicher Reihenfolge |
| 3 | Projekt-DNA und Spezifikationen | Architektur-, Marken- und Strategiekontext |
| 4 | `docs/reference/` | Referenzwissen, Baselines, Audits und Entscheidungshistorie |

`docs/reference/` ist ausdrücklich kein Archiv: Die dort liegenden Unterlagen bleiben wertvolles Referenzwissen. Sie erhalten nur nicht automatisch Vorrang vor aktuellem Code oder aktiven Policies.

## Verbindliche fachliche Reihenfolge

Die aktive Projektdokumentation folgt dieser Entscheidungsreihenfolge:

```text
PRODUCT_VISION → BRAND_DNA → UX_EXPERIENCE → DESIGN_SYSTEM
→ PROJECT_ARCHITECTURE → CONTENT_SEO_I18N
→ COMMERCE_GOVERNANCE → LEGAL_AFFILIATE_POLICY
```

Sie ist bewusst nicht technisch, sondern strategisch aufgebaut: Vision bestimmt Marke; Marke bestimmt Nutzererlebnis; Nutzererlebnis bestimmt Design; Architektur ermöglicht diese Entscheidungen. Commerce und Legal sichern die Umsetzung ab, statt sie vorzugeben.

## Welche Dokumente sind zu lesen?

| Aufgabe | Pflichtlektüre |
| --- | --- |
| Jede Änderung | [CODEX_WORKFLOW.md](CODEX_WORKFLOW.md) und die unmittelbar betroffenen Dateien |
| Strategie, Positionierung oder Geschäftsmodell | `PRODUCT_VISION.md`; bis zur Erstellung die relevanten Abschnitte aus `COMMERCE_TRANSFORMATION_MASTERPLAN.md`, `PROJECT_SPEC.md` und `GETYOUR_DESIGN_BRAND_DNA.md` |
| UI, Markenauftritt, Texte oder Bilder | `BRAND_DNA.md`, `UX_EXPERIENCE.md`, `DESIGN_SYSTEM.md`; bis zur Erstellung `GETYOUR_DESIGN_BRAND_DNA.md` |
| Komponenten, Datenmodell, Routen oder APIs | `PROJECT_ARCHITECTURE.md`; bis zur Erstellung `PROJECT_SPEC.md` und `PROJECT_DNA_FULL.md` |
| Locale-Routing, Übersetzungen oder SEO | `CONTENT_SEO_I18N.md`; bis zur Erstellung `PROJECT_SPEC.md`, `PROJECT_DNA_FULL.md` und die betroffenen Dateien in `app/lib/` bzw. `app/data/` |
| Commerce, Checkout, Produktstatus oder Affiliate | `COMMERCE_GOVERNANCE.md`, `LEGAL_AFFILIATE_POLICY.md`; bis zur Erstellung `COMMERCE_TRANSFORMATION_MASTERPLAN.md`, `docs/affiliate-readiness.md` und die betroffenen Commerce-Dateien |
| Rechtliche Inhalte | `LEGAL_AFFILIATE_POLICY.md`; bis zur Erstellung `docs/legal.md` |
| Regressionen oder frühere SEO-/Commerce-Entscheidungen | die passende Referenzunterlage in `docs/reference/`, sobald sie dorthin überführt wurde |

Eine vollständige Übersicht der vorhandenen, geplanten und künftig als Referenz geführten Unterlagen steht in [DOCUMENT_MAP.md](DOCUMENT_MAP.md).

## Aktueller Dokumentationsstatus

Die neue Zielstruktur ist angelegt, aber es wurden noch keine Inhalte migriert oder bestehende Dokumente verschoben. Bis zur ausdrücklich freigegebenen Migration bleiben alle aktuellen Dokumente an ihren bisherigen Orten gültig.

Für jede spätere Migration gilt:

- Inhalte nur kontrolliert und nachvollziehbar übertragen.
- Keine Referenzinformation löschen.
- Verweise erst nach erfolgreicher Überführung ändern.
- Fachliche Aussagen gegen den aktuellen Code prüfen.
- Veraltete Aussagen sichtbar als historisch kennzeichnen, statt sie stillschweigend umzudeuten.
