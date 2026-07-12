# GETYOUR.DESIGN Commerce Baseline

Phase: 0 - Governance und Baseline  
Repository: `/Users/ibt/Code/getyour-design`  
Baseline date: 2026-07-12  
Current commit: `370f3a97eff69f10488d0761b27b00f6e20a9842` (`370f3a9 Stabilize product routes and German shop rendering`)

This document records the current non-commerce baseline before any functional commerce work. It must be treated as a regression reference for future Stripe, affiliate, product model, SEO, i18n, Pinterest, navigation, and routing changes.

## 1. Git Baseline

- `HEAD`: `370f3a97eff69f10488d0761b27b00f6e20a9842`
- Recent commits:
  - `370f3a9 Stabilize product routes and German shop rendering`
  - `07539f5 Add sculptural cowhide seating object`
  - `0aa3209 Document getyour.design brand DNA`
  - `889a85a Fix broken homepage hero image`
  - `c2fe61c Update legal contact details`
- Pre-existing untracked documentation at the time of this baseline:
  - `COMMERCE_TRANSFORMATION_MASTERPLAN.md`
  - `PROJECT_DNA_FULL.md`
  - `PROJECT_SPEC.md`
- This baseline intentionally creates only `COMMERCE_BASELINE.md`.

## 2. Existing Routes

### Physical App Router Pages

- `/` via `app/page.tsx`
- `/{locale}` via `app/[locale]/page.tsx`
- `/{locale}/{...slug}` via `app/[locale]/[...slug]/page.tsx`
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
- `/shop/{slug}`
- `/stories`
- `/suche`
- `/trade`
- `/warenkorb`

### Locales

- `de`
- `en`
- `fr`
- `es`
- `zh`
- `ar`

### Localized Static Routes

| Route key | DE | EN | FR | ES | ZH | AR |
|---|---|---|---|---|---|---|
| home | `/de` | `/en` | `/fr` | `/es` | `/zh` | `/ar` |
| agb | `/de/agb` | `/en/terms-and-conditions` | `/fr/terms-and-conditions` | `/es/terms-and-conditions` | `/zh/terms-and-conditions` | `/ar/terms-and-conditions` |
| arbeit-einreichen | `/de/arbeit-einreichen` | `/en/submit-work` | `/fr/submit-work` | `/es/submit-work` | `/zh/submit-work` | `/ar/submit-work` |
| art | `/de/kunst` | `/en/art` | `/fr/art` | `/es/art` | `/zh/art` | `/ar/art` |
| artists | `/de/kuenstler` | `/en/artists` | `/fr/artists` | `/es/artists` | `/zh/artists` | `/ar/artists` |
| ateliers | `/de/ateliers` | `/en/ateliers` | `/fr/ateliers` | `/es/ateliers` | `/zh/ateliers` | `/ar/ateliers` |
| brands | `/de/marken` | `/en/brands` | `/fr/brands` | `/es/brands` | `/zh/brands` | `/ar/brands` |
| collections | `/de/kollektionen` | `/en/collections` | `/fr/collections` | `/es/collections` | `/zh/collections` | `/ar/collections` |
| contact | `/de/kontakt` | `/en/contact` | `/fr/contact` | `/es/contact` | `/zh/contact` | `/ar/contact` |
| datenschutz | `/de/datenschutz` | `/en/privacy-policy` | `/fr/privacy-policy` | `/es/privacy-policy` | `/zh/privacy-policy` | `/ar/privacy-policy` |
| gallery | `/de/galerie` | `/en/gallery` | `/fr/gallery` | `/es/gallery` | `/zh/gallery` | `/ar/gallery` |
| impressum | `/de/impressum` | `/en/legal-notice` | `/fr/legal-notice` | `/es/legal-notice` | `/zh/legal-notice` | `/ar/legal-notice` |
| journal | `/de/journal` | `/en/journal` | `/fr/journal` | `/es/journal` | `/zh/journal` | `/ar/journal` |
| luxury-coasters | `/de/luxus-untersetzer` | `/en/luxury-coasters` | `/fr/luxury-coasters` | `/es/luxury-coasters` | `/zh/luxury-coasters` | `/ar/luxury-coasters` |
| materials | `/de/materialien` | `/en/materials` | `/fr/materials` | `/es/materials` | `/zh/materials` | `/ar/materials` |
| objects | `/de/objekte` | `/en/objects` | `/fr/objects` | `/es/objects` | `/zh/objects` | `/ar/objects` |
| sculptural-seating | `/de/sculptural-seating` | `/en/sculptural-seating` | `/fr/sculptural-seating` | `/es/sculptural-seating` | `/zh/sculptural-seating` | `/ar/sculptural-seating` |
| shop | `/de/shop` | `/en/shop` | `/fr/shop` | `/es/shop` | `/zh/shop` | `/ar/shop` |
| suche | `/de/suche` | `/en/search` | `/fr/search` | `/es/search` | `/zh/search` | `/ar/search` |
| trade | `/de/projekte` | `/en/trade` | `/fr/trade` | `/es/trade` | `/zh/trade` | `/ar/trade` |
| warenkorb | `/de/warenkorb` | `/en/cart` | `/fr/cart` | `/es/cart` | `/zh/cart` | `/ar/cart` |

### Root Redirects and Legacy Behavior

- `/` -> `/de`
- `/shop` -> `/de/shop`
- `/shop/...` -> `/de/shop/...`
- `/stories` -> `/de/journal` by middleware/root redirects and `/stories/page.tsx` redirects to `/journal` at root.
- `/position-vorstellen` -> `/de/arbeit-einreichen`
- `/de/art...` -> `/de/kunst...`
- `/de/collections...` -> `/de/kollektionen...`
- `/en/imprint` -> `/en/legal-notice`
- `/en/privacy` -> `/en/privacy-policy`
- `/en/terms` -> `/en/terms-and-conditions`
- Legacy English category slug correction exists in middleware.

## 3. Existing Product Categories

| Category | Data slug | UI label | DE | EN/FR/ES/ZH/AR shop slug |
|---|---|---|---|---|
| Möbel | `moebel` | Möbel | `/de/shop/moebel` | `/en/shop/furniture`, `/fr/shop/furniture`, `/es/shop/furniture`, `/zh/shop/furniture`, `/ar/shop/furniture` |
| Leuchten | `leuchten` | Leuchten | `/de/shop/leuchten` | `/en/shop/lighting`, `/fr/shop/lighting`, `/es/shop/lighting`, `/zh/shop/lighting`, `/ar/shop/lighting` |
| Kunst | `kunst` | Kunst | `/de/shop/kunst` | `/en/shop/artworks`, `/fr/shop/artworks`, `/es/shop/artworks`, `/zh/shop/artworks`, `/ar/shop/artworks` |
| Teppiche | `teppiche` | Teppiche | `/de/shop/teppiche` | `/en/shop/rugs`, `/fr/shop/rugs`, `/es/shop/rugs`, `/zh/shop/rugs`, `/ar/shop/rugs` |
| Objekte | `objekte` | Objekte | `/de/shop/objekte` | `/en/shop/objects`, `/fr/shop/objects`, `/es/shop/objects`, `/zh/shop/objects`, `/ar/shop/objects` |
| Tabletop | `tabletop` | Accessoires | `/de/shop/tabletop` | `/en/shop/accessories`, `/fr/shop/accessories`, `/es/shop/accessories`, `/zh/shop/accessories`, `/ar/shop/accessories` |
| Collectible Design | `collectible-design` | Collectible Design | `/de/shop/collectible-design` | `/en/shop/collectible-design`, `/fr/shop/collectible-design`, `/es/shop/collectible-design`, `/zh/shop/collectible-design`, `/ar/shop/collectible-design` |
| Editionen | `editionen` | Editionen | `/de/shop/editionen` | `/en/shop/editions`, `/fr/shop/editions`, `/es/shop/editions`, `/zh/shop/editions`, `/ar/shop/editions` |

## 4. Product Status Model

Existing status values:

- `sofort-kaufen`
- `anfragen`
- `preis-auf-anfrage`
- `reserviert`
- `verkauft`

Availability mapping:

- `sofort-kaufen` -> `Verfügbar`
- `anfragen` -> `Auf Anfrage verfügbar`
- `preis-auf-anfrage` -> `Preis auf Anfrage`
- `reserviert` -> `Reserviert`
- `verkauft` -> `Verkauft`

## 5. Existing Products, Status, and Product URLs

There are 97 products. The canonical product URL is determined by `product.pathMode`:

- `flat`: `/{locale}/shop/{productSlug}`
- `nested`: `/{locale}/shop/{localizedCategorySlug}/{productSlug}`

Only `Sitzobjekt aus europäischem Kuhfell` currently uses `pathMode: "nested"`. All other products are `flat`.

| # | Kategorie | Produkt | Slug | Status | Path | DE | EN | FR | ES | ZH | AR |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Möbel | Sitzobjekt aus dunklem Holz | sitzobjekt-aus-dunklem-holz | sofort-kaufen | flat | /de/shop/sitzobjekt-aus-dunklem-holz | /en/shop/sitzobjekt-aus-dunklem-holz | /fr/shop/sitzobjekt-aus-dunklem-holz | /es/shop/sitzobjekt-aus-dunklem-holz | /zh/shop/sitzobjekt-aus-dunklem-holz | /ar/shop/sitzobjekt-aus-dunklem-holz |
| 2 | Möbel | Niedrige Bank aus Eiche | moebel-02-niedrige-bank-aus-eiche | anfragen | flat | /de/shop/moebel-02-niedrige-bank-aus-eiche | /en/shop/moebel-02-niedrige-bank-aus-eiche | /fr/shop/moebel-02-niedrige-bank-aus-eiche | /es/shop/moebel-02-niedrige-bank-aus-eiche | /zh/shop/moebel-02-niedrige-bank-aus-eiche | /ar/shop/moebel-02-niedrige-bank-aus-eiche |
| 3 | Möbel | Sessel mit Lederauflage | moebel-03-sessel-mit-lederauflage | preis-auf-anfrage | flat | /de/shop/moebel-03-sessel-mit-lederauflage | /en/shop/moebel-03-sessel-mit-lederauflage | /fr/shop/moebel-03-sessel-mit-lederauflage | /es/shop/moebel-03-sessel-mit-lederauflage | /zh/shop/moebel-03-sessel-mit-lederauflage | /ar/shop/moebel-03-sessel-mit-lederauflage |
| 4 | Möbel | Konsole aus geräuchertem Holz | moebel-04-konsole-aus-geraeuchertem-holz | reserviert | flat | /de/shop/moebel-04-konsole-aus-geraeuchertem-holz | /en/shop/moebel-04-konsole-aus-geraeuchertem-holz | /fr/shop/moebel-04-konsole-aus-geraeuchertem-holz | /es/shop/moebel-04-konsole-aus-geraeuchertem-holz | /zh/shop/moebel-04-konsole-aus-geraeuchertem-holz | /ar/shop/moebel-04-konsole-aus-geraeuchertem-holz |
| 5 | Möbel | Tisch mit Steinplatte | moebel-05-tisch-mit-steinplatte | verkauft | flat | /de/shop/moebel-05-tisch-mit-steinplatte | /en/shop/moebel-05-tisch-mit-steinplatte | /fr/shop/moebel-05-tisch-mit-steinplatte | /es/shop/moebel-05-tisch-mit-steinplatte | /zh/shop/moebel-05-tisch-mit-steinplatte | /ar/shop/moebel-05-tisch-mit-steinplatte |
| 6 | Möbel | Regalobjekt aus Nussbaum | moebel-06-regalobjekt-aus-nussbaum | sofort-kaufen | flat | /de/shop/moebel-06-regalobjekt-aus-nussbaum | /en/shop/moebel-06-regalobjekt-aus-nussbaum | /fr/shop/moebel-06-regalobjekt-aus-nussbaum | /es/shop/moebel-06-regalobjekt-aus-nussbaum | /zh/shop/moebel-06-regalobjekt-aus-nussbaum | /ar/shop/moebel-06-regalobjekt-aus-nussbaum |
| 7 | Möbel | Daybed mit Wollbezug | moebel-07-daybed-mit-wollbezug | anfragen | flat | /de/shop/moebel-07-daybed-mit-wollbezug | /en/shop/moebel-07-daybed-mit-wollbezug | /fr/shop/moebel-07-daybed-mit-wollbezug | /es/shop/moebel-07-daybed-mit-wollbezug | /zh/shop/moebel-07-daybed-mit-wollbezug | /ar/shop/moebel-07-daybed-mit-wollbezug |
| 8 | Möbel | Hocker aus massivem Holz | moebel-08-hocker-aus-massivem-holz | preis-auf-anfrage | flat | /de/shop/moebel-08-hocker-aus-massivem-holz | /en/shop/moebel-08-hocker-aus-massivem-holz | /fr/shop/moebel-08-hocker-aus-massivem-holz | /es/shop/moebel-08-hocker-aus-massivem-holz | /zh/shop/moebel-08-hocker-aus-massivem-holz | /ar/shop/moebel-08-hocker-aus-massivem-holz |
| 9 | Möbel | Schreibtisch mit klarer Kante | moebel-09-schreibtisch-mit-klarer-kante | reserviert | flat | /de/shop/moebel-09-schreibtisch-mit-klarer-kante | /en/shop/moebel-09-schreibtisch-mit-klarer-kante | /fr/shop/moebel-09-schreibtisch-mit-klarer-kante | /es/shop/moebel-09-schreibtisch-mit-klarer-kante | /zh/shop/moebel-09-schreibtisch-mit-klarer-kante | /ar/shop/moebel-09-schreibtisch-mit-klarer-kante |
| 10 | Möbel | Sideboard mit Steinauflage | moebel-10-sideboard-mit-steinauflage | verkauft | flat | /de/shop/moebel-10-sideboard-mit-steinauflage | /en/shop/moebel-10-sideboard-mit-steinauflage | /fr/shop/moebel-10-sideboard-mit-steinauflage | /es/shop/moebel-10-sideboard-mit-steinauflage | /zh/shop/moebel-10-sideboard-mit-steinauflage | /ar/shop/moebel-10-sideboard-mit-steinauflage |
| 11 | Möbel | Stuhl mit Stahlrahmen | moebel-11-stuhl-mit-stahlrahmen | sofort-kaufen | flat | /de/shop/moebel-11-stuhl-mit-stahlrahmen | /en/shop/moebel-11-stuhl-mit-stahlrahmen | /fr/shop/moebel-11-stuhl-mit-stahlrahmen | /es/shop/moebel-11-stuhl-mit-stahlrahmen | /zh/shop/moebel-11-stuhl-mit-stahlrahmen | /ar/shop/moebel-11-stuhl-mit-stahlrahmen |
| 12 | Möbel | Runder Tisch aus Esche | moebel-12-runder-tisch-aus-esche | anfragen | flat | /de/shop/moebel-12-runder-tisch-aus-esche | /en/shop/moebel-12-runder-tisch-aus-esche | /fr/shop/moebel-12-runder-tisch-aus-esche | /es/shop/moebel-12-runder-tisch-aus-esche | /zh/shop/moebel-12-runder-tisch-aus-esche | /ar/shop/moebel-12-runder-tisch-aus-esche |
| 13 | Möbel | Sitzobjekt aus europäischem Kuhfell | sitzobjekt-kuhfell | anfragen | nested | /de/shop/moebel/sitzobjekt-kuhfell | /en/shop/furniture/sitzobjekt-kuhfell | /fr/shop/furniture/sitzobjekt-kuhfell | /es/shop/furniture/sitzobjekt-kuhfell | /zh/shop/furniture/sitzobjekt-kuhfell | /ar/shop/furniture/sitzobjekt-kuhfell |
| 14 | Leuchten | Leuchte aus Bronze | leuchte-aus-bronze | sofort-kaufen | flat | /de/shop/leuchte-aus-bronze | /en/shop/leuchte-aus-bronze | /fr/shop/leuchte-aus-bronze | /es/shop/leuchte-aus-bronze | /zh/shop/leuchte-aus-bronze | /ar/shop/leuchte-aus-bronze |
| 15 | Leuchten | Wandleuchte mit Glasschirm | leuchten-02-wandleuchte-mit-glasschirm | anfragen | flat | /de/shop/leuchten-02-wandleuchte-mit-glasschirm | /en/shop/leuchten-02-wandleuchte-mit-glasschirm | /fr/shop/leuchten-02-wandleuchte-mit-glasschirm | /es/shop/leuchten-02-wandleuchte-mit-glasschirm | /zh/shop/leuchten-02-wandleuchte-mit-glasschirm | /ar/shop/leuchten-02-wandleuchte-mit-glasschirm |
| 16 | Leuchten | Tischleuchte aus Stahl | leuchten-03-tischleuchte-aus-stahl | preis-auf-anfrage | flat | /de/shop/leuchten-03-tischleuchte-aus-stahl | /en/shop/leuchten-03-tischleuchte-aus-stahl | /fr/shop/leuchten-03-tischleuchte-aus-stahl | /es/shop/leuchten-03-tischleuchte-aus-stahl | /zh/shop/leuchten-03-tischleuchte-aus-stahl | /ar/shop/leuchten-03-tischleuchte-aus-stahl |
| 17 | Leuchten | Stehleuchte mit Stoffschirm | leuchten-04-stehleuchte-mit-stoffschirm | reserviert | flat | /de/shop/leuchten-04-stehleuchte-mit-stoffschirm | /en/shop/leuchten-04-stehleuchte-mit-stoffschirm | /fr/shop/leuchten-04-stehleuchte-mit-stoffschirm | /es/shop/leuchten-04-stehleuchte-mit-stoffschirm | /zh/shop/leuchten-04-stehleuchte-mit-stoffschirm | /ar/shop/leuchten-04-stehleuchte-mit-stoffschirm |
| 18 | Leuchten | Pendelleuchte aus Messing | leuchten-05-pendelleuchte-aus-messing | verkauft | flat | /de/shop/leuchten-05-pendelleuchte-aus-messing | /en/shop/leuchten-05-pendelleuchte-aus-messing | /fr/shop/leuchten-05-pendelleuchte-aus-messing | /es/shop/leuchten-05-pendelleuchte-aus-messing | /zh/shop/leuchten-05-pendelleuchte-aus-messing | /ar/shop/leuchten-05-pendelleuchte-aus-messing |
| 19 | Leuchten | Keramische Wandlampe | leuchten-06-keramische-wandlampe | sofort-kaufen | flat | /de/shop/leuchten-06-keramische-wandlampe | /en/shop/leuchten-06-keramische-wandlampe | /fr/shop/leuchten-06-keramische-wandlampe | /es/shop/leuchten-06-keramische-wandlampe | /zh/shop/leuchten-06-keramische-wandlampe | /ar/shop/leuchten-06-keramische-wandlampe |
| 20 | Leuchten | Lichtobjekt aus Glas | leuchten-07-lichtobjekt-aus-glas | anfragen | flat | /de/shop/leuchten-07-lichtobjekt-aus-glas | /en/shop/leuchten-07-lichtobjekt-aus-glas | /fr/shop/leuchten-07-lichtobjekt-aus-glas | /es/shop/leuchten-07-lichtobjekt-aus-glas | /zh/shop/leuchten-07-lichtobjekt-aus-glas | /ar/shop/leuchten-07-lichtobjekt-aus-glas |
| 21 | Leuchten | Deckenleuchte mit Bronzedetail | leuchten-08-deckenleuchte-mit-bronzedetail | preis-auf-anfrage | flat | /de/shop/leuchten-08-deckenleuchte-mit-bronzedetail | /en/shop/leuchten-08-deckenleuchte-mit-bronzedetail | /fr/shop/leuchten-08-deckenleuchte-mit-bronzedetail | /es/shop/leuchten-08-deckenleuchte-mit-bronzedetail | /zh/shop/leuchten-08-deckenleuchte-mit-bronzedetail | /ar/shop/leuchten-08-deckenleuchte-mit-bronzedetail |
| 22 | Leuchten | Kleine Tischleuchte aus Stein | leuchten-09-kleine-tischleuchte-aus-stein | reserviert | flat | /de/shop/leuchten-09-kleine-tischleuchte-aus-stein | /en/shop/leuchten-09-kleine-tischleuchte-aus-stein | /fr/shop/leuchten-09-kleine-tischleuchte-aus-stein | /es/shop/leuchten-09-kleine-tischleuchte-aus-stein | /zh/shop/leuchten-09-kleine-tischleuchte-aus-stein | /ar/shop/leuchten-09-kleine-tischleuchte-aus-stein |
| 23 | Leuchten | Lineare Leuchte aus Aluminium | leuchten-10-lineare-leuchte-aus-aluminium | verkauft | flat | /de/shop/leuchten-10-lineare-leuchte-aus-aluminium | /en/shop/leuchten-10-lineare-leuchte-aus-aluminium | /fr/shop/leuchten-10-lineare-leuchte-aus-aluminium | /es/shop/leuchten-10-lineare-leuchte-aus-aluminium | /zh/shop/leuchten-10-lineare-leuchte-aus-aluminium | /ar/shop/leuchten-10-lineare-leuchte-aus-aluminium |
| 24 | Leuchten | Leuchtkörper mit Seidenschirm | leuchten-11-leuchtkoerper-mit-seidenschirm | sofort-kaufen | flat | /de/shop/leuchten-11-leuchtkoerper-mit-seidenschirm | /en/shop/leuchten-11-leuchtkoerper-mit-seidenschirm | /fr/shop/leuchten-11-leuchtkoerper-mit-seidenschirm | /es/shop/leuchten-11-leuchtkoerper-mit-seidenschirm | /zh/shop/leuchten-11-leuchtkoerper-mit-seidenschirm | /ar/shop/leuchten-11-leuchtkoerper-mit-seidenschirm |
| 25 | Leuchten | Wandobjekt mit indirektem Licht | leuchten-12-wandobjekt-mit-indirektem-licht | anfragen | flat | /de/shop/leuchten-12-wandobjekt-mit-indirektem-licht | /en/shop/leuchten-12-wandobjekt-mit-indirektem-licht | /fr/shop/leuchten-12-wandobjekt-mit-indirektem-licht | /es/shop/leuchten-12-wandobjekt-mit-indirektem-licht | /zh/shop/leuchten-12-wandobjekt-mit-indirektem-licht | /ar/shop/leuchten-12-wandobjekt-mit-indirektem-licht |
| 26 | Kunst | Papierarbeit mit Struktur | papierarbeit-mit-struktur | sofort-kaufen | flat | /de/shop/papierarbeit-mit-struktur | /en/shop/papierarbeit-mit-struktur | /fr/shop/papierarbeit-mit-struktur | /es/shop/papierarbeit-mit-struktur | /zh/shop/papierarbeit-mit-struktur | /ar/shop/papierarbeit-mit-struktur |
| 27 | Kunst | Mineralische Fläche auf Leinen | kunst-02-mineralische-flaeche-auf-leinen | anfragen | flat | /de/shop/kunst-02-mineralische-flaeche-auf-leinen | /en/shop/kunst-02-mineralische-flaeche-auf-leinen | /fr/shop/kunst-02-mineralische-flaeche-auf-leinen | /es/shop/kunst-02-mineralische-flaeche-auf-leinen | /zh/shop/kunst-02-mineralische-flaeche-auf-leinen | /ar/shop/kunst-02-mineralische-flaeche-auf-leinen |
| 28 | Kunst | Kleine Bronzeplastik | kunst-03-kleine-bronzeplastik | preis-auf-anfrage | flat | /de/shop/kunst-03-kleine-bronzeplastik | /en/shop/kunst-03-kleine-bronzeplastik | /fr/shop/kunst-03-kleine-bronzeplastik | /es/shop/kunst-03-kleine-bronzeplastik | /zh/shop/kunst-03-kleine-bronzeplastik | /ar/shop/kunst-03-kleine-bronzeplastik |
| 29 | Kunst | Wandarbeit aus Papier | kunst-04-wandarbeit-aus-papier | reserviert | flat | /de/shop/kunst-04-wandarbeit-aus-papier | /en/shop/kunst-04-wandarbeit-aus-papier | /fr/shop/kunst-04-wandarbeit-aus-papier | /es/shop/kunst-04-wandarbeit-aus-papier | /zh/shop/kunst-04-wandarbeit-aus-papier | /ar/shop/kunst-04-wandarbeit-aus-papier |
| 30 | Kunst | Relief aus hellem Holz | kunst-05-relief-aus-hellem-holz | verkauft | flat | /de/shop/kunst-05-relief-aus-hellem-holz | /en/shop/kunst-05-relief-aus-hellem-holz | /fr/shop/kunst-05-relief-aus-hellem-holz | /es/shop/kunst-05-relief-aus-hellem-holz | /zh/shop/kunst-05-relief-aus-hellem-holz | /ar/shop/kunst-05-relief-aus-hellem-holz |
| 31 | Kunst | Arbeit mit Asche und Pigment | kunst-06-arbeit-mit-asche-und-pigment | sofort-kaufen | flat | /de/shop/kunst-06-arbeit-mit-asche-und-pigment | /en/shop/kunst-06-arbeit-mit-asche-und-pigment | /fr/shop/kunst-06-arbeit-mit-asche-und-pigment | /es/shop/kunst-06-arbeit-mit-asche-und-pigment | /zh/shop/kunst-06-arbeit-mit-asche-und-pigment | /ar/shop/kunst-06-arbeit-mit-asche-und-pigment |
| 32 | Kunst | Textile Wandarbeit | kunst-07-textile-wandarbeit | anfragen | flat | /de/shop/kunst-07-textile-wandarbeit | /en/shop/kunst-07-textile-wandarbeit | /fr/shop/kunst-07-textile-wandarbeit | /es/shop/kunst-07-textile-wandarbeit | /zh/shop/kunst-07-textile-wandarbeit | /ar/shop/kunst-07-textile-wandarbeit |
| 33 | Kunst | Objekt aus Stein und Papier | kunst-08-objekt-aus-stein-und-papier | preis-auf-anfrage | flat | /de/shop/kunst-08-objekt-aus-stein-und-papier | /en/shop/kunst-08-objekt-aus-stein-und-papier | /fr/shop/kunst-08-objekt-aus-stein-und-papier | /es/shop/kunst-08-objekt-aus-stein-und-papier | /zh/shop/kunst-08-objekt-aus-stein-und-papier | /ar/shop/kunst-08-objekt-aus-stein-und-papier |
| 34 | Kunst | Schwarze Zeichnung auf Bütten | kunst-09-schwarze-zeichnung-auf-buetten | reserviert | flat | /de/shop/kunst-09-schwarze-zeichnung-auf-buetten | /en/shop/kunst-09-schwarze-zeichnung-auf-buetten | /fr/shop/kunst-09-schwarze-zeichnung-auf-buetten | /es/shop/kunst-09-schwarze-zeichnung-auf-buetten | /zh/shop/kunst-09-schwarze-zeichnung-auf-buetten | /ar/shop/kunst-09-schwarze-zeichnung-auf-buetten |
| 35 | Kunst | Skulptur aus gebranntem Ton | kunst-10-skulptur-aus-gebranntem-ton | verkauft | flat | /de/shop/kunst-10-skulptur-aus-gebranntem-ton | /en/shop/kunst-10-skulptur-aus-gebranntem-ton | /fr/shop/kunst-10-skulptur-aus-gebranntem-ton | /es/shop/kunst-10-skulptur-aus-gebranntem-ton | /zh/shop/kunst-10-skulptur-aus-gebranntem-ton | /ar/shop/kunst-10-skulptur-aus-gebranntem-ton |
| 36 | Kunst | Diptychon mit feiner Linie | kunst-11-diptychon-mit-feiner-linie | sofort-kaufen | flat | /de/shop/kunst-11-diptychon-mit-feiner-linie | /en/shop/kunst-11-diptychon-mit-feiner-linie | /fr/shop/kunst-11-diptychon-mit-feiner-linie | /es/shop/kunst-11-diptychon-mit-feiner-linie | /zh/shop/kunst-11-diptychon-mit-feiner-linie | /ar/shop/kunst-11-diptychon-mit-feiner-linie |
| 37 | Kunst | Kleine Arbeit auf Holz | kunst-12-kleine-arbeit-auf-holz | anfragen | flat | /de/shop/kunst-12-kleine-arbeit-auf-holz | /en/shop/kunst-12-kleine-arbeit-auf-holz | /fr/shop/kunst-12-kleine-arbeit-auf-holz | /es/shop/kunst-12-kleine-arbeit-auf-holz | /zh/shop/kunst-12-kleine-arbeit-auf-holz | /ar/shop/kunst-12-kleine-arbeit-auf-holz |
| 38 | Teppiche | Wollteppich in Naturtönen | wollteppich-in-naturtoenen | sofort-kaufen | flat | /de/shop/wollteppich-in-naturtoenen | /en/shop/wollteppich-in-naturtoenen | /fr/shop/wollteppich-in-naturtoenen | /es/shop/wollteppich-in-naturtoenen | /zh/shop/wollteppich-in-naturtoenen | /ar/shop/wollteppich-in-naturtoenen |
| 39 | Teppiche | Flacher Teppich aus Leinen | teppiche-02-flacher-teppich-aus-leinen | anfragen | flat | /de/shop/teppiche-02-flacher-teppich-aus-leinen | /en/shop/teppiche-02-flacher-teppich-aus-leinen | /fr/shop/teppiche-02-flacher-teppich-aus-leinen | /es/shop/teppiche-02-flacher-teppich-aus-leinen | /zh/shop/teppiche-02-flacher-teppich-aus-leinen | /ar/shop/teppiche-02-flacher-teppich-aus-leinen |
| 40 | Teppiche | Handgeknüpfter Teppich in Grau | teppiche-03-handgeknuepfter-teppich-in-grau | preis-auf-anfrage | flat | /de/shop/teppiche-03-handgeknuepfter-teppich-in-grau | /en/shop/teppiche-03-handgeknuepfter-teppich-in-grau | /fr/shop/teppiche-03-handgeknuepfter-teppich-in-grau | /es/shop/teppiche-03-handgeknuepfter-teppich-in-grau | /zh/shop/teppiche-03-handgeknuepfter-teppich-in-grau | /ar/shop/teppiche-03-handgeknuepfter-teppich-in-grau |
| 41 | Teppiche | Textile Fläche mit Relief | teppiche-04-textile-flaeche-mit-relief | reserviert | flat | /de/shop/teppiche-04-textile-flaeche-mit-relief | /en/shop/teppiche-04-textile-flaeche-mit-relief | /fr/shop/teppiche-04-textile-flaeche-mit-relief | /es/shop/teppiche-04-textile-flaeche-mit-relief | /zh/shop/teppiche-04-textile-flaeche-mit-relief | /ar/shop/teppiche-04-textile-flaeche-mit-relief |
| 42 | Teppiche | Läufer aus ungefärbter Wolle | teppiche-05-laeufer-aus-ungefaerbter-wolle | verkauft | flat | /de/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle | /en/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle | /fr/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle | /es/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle | /zh/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle | /ar/shop/teppiche-05-laeufer-aus-ungefaerbter-wolle |
| 43 | Teppiche | Teppich mit mineralischer Farbigkeit | teppiche-06-teppich-mit-mineralischer-farbigkeit | sofort-kaufen | flat | /de/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit | /en/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit | /fr/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit | /es/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit | /zh/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit | /ar/shop/teppiche-06-teppich-mit-mineralischer-farbigkeit |
| 44 | Teppiche | Runder Teppich in Naturweiß | teppiche-07-runder-teppich-in-naturweiss | anfragen | flat | /de/shop/teppiche-07-runder-teppich-in-naturweiss | /en/shop/teppiche-07-runder-teppich-in-naturweiss | /fr/shop/teppiche-07-runder-teppich-in-naturweiss | /es/shop/teppiche-07-runder-teppich-in-naturweiss | /zh/shop/teppiche-07-runder-teppich-in-naturweiss | /ar/shop/teppiche-07-runder-teppich-in-naturweiss |
| 45 | Teppiche | Gewebter Teppich mit Kante | teppiche-08-gewebter-teppich-mit-kante | preis-auf-anfrage | flat | /de/shop/teppiche-08-gewebter-teppich-mit-kante | /en/shop/teppiche-08-gewebter-teppich-mit-kante | /fr/shop/teppiche-08-gewebter-teppich-mit-kante | /es/shop/teppiche-08-gewebter-teppich-mit-kante | /zh/shop/teppiche-08-gewebter-teppich-mit-kante | /ar/shop/teppiche-08-gewebter-teppich-mit-kante |
| 46 | Teppiche | Teppich in dunkler Melange | teppiche-09-teppich-in-dunkler-melange | reserviert | flat | /de/shop/teppiche-09-teppich-in-dunkler-melange | /en/shop/teppiche-09-teppich-in-dunkler-melange | /fr/shop/teppiche-09-teppich-in-dunkler-melange | /es/shop/teppiche-09-teppich-in-dunkler-melange | /zh/shop/teppiche-09-teppich-in-dunkler-melange | /ar/shop/teppiche-09-teppich-in-dunkler-melange |
| 47 | Teppiche | Kleiner Teppich für Lesezone | teppiche-10-kleiner-teppich-fuer-lesezone | verkauft | flat | /de/shop/teppiche-10-kleiner-teppich-fuer-lesezone | /en/shop/teppiche-10-kleiner-teppich-fuer-lesezone | /fr/shop/teppiche-10-kleiner-teppich-fuer-lesezone | /es/shop/teppiche-10-kleiner-teppich-fuer-lesezone | /zh/shop/teppiche-10-kleiner-teppich-fuer-lesezone | /ar/shop/teppiche-10-kleiner-teppich-fuer-lesezone |
| 48 | Teppiche | Große textile Raumfläche | teppiche-11-grosse-textile-raumflaeche | sofort-kaufen | flat | /de/shop/teppiche-11-grosse-textile-raumflaeche | /en/shop/teppiche-11-grosse-textile-raumflaeche | /fr/shop/teppiche-11-grosse-textile-raumflaeche | /es/shop/teppiche-11-grosse-textile-raumflaeche | /zh/shop/teppiche-11-grosse-textile-raumflaeche | /ar/shop/teppiche-11-grosse-textile-raumflaeche |
| 49 | Teppiche | Wandteppich mit feinem Flor | teppiche-12-wandteppich-mit-feinem-flor | anfragen | flat | /de/shop/teppiche-12-wandteppich-mit-feinem-flor | /en/shop/teppiche-12-wandteppich-mit-feinem-flor | /fr/shop/teppiche-12-wandteppich-mit-feinem-flor | /es/shop/teppiche-12-wandteppich-mit-feinem-flor | /zh/shop/teppiche-12-wandteppich-mit-feinem-flor | /ar/shop/teppiche-12-wandteppich-mit-feinem-flor |
| 50 | Objekte | Beistelltisch aus Naturstein | beistelltisch-aus-naturstein | sofort-kaufen | flat | /de/shop/beistelltisch-aus-naturstein | /en/shop/beistelltisch-aus-naturstein | /fr/shop/beistelltisch-aus-naturstein | /es/shop/beistelltisch-aus-naturstein | /zh/shop/beistelltisch-aus-naturstein | /ar/shop/beistelltisch-aus-naturstein |
| 51 | Objekte | Steinobjekt mit geschliffener Kante | objekte-02-steinobjekt-mit-geschliffener-kante | anfragen | flat | /de/shop/objekte-02-steinobjekt-mit-geschliffener-kante | /en/shop/objekte-02-steinobjekt-mit-geschliffener-kante | /fr/shop/objekte-02-steinobjekt-mit-geschliffener-kante | /es/shop/objekte-02-steinobjekt-mit-geschliffener-kante | /zh/shop/objekte-02-steinobjekt-mit-geschliffener-kante | /ar/shop/objekte-02-steinobjekt-mit-geschliffener-kante |
| 52 | Objekte | Bronzeform für den Tisch | objekte-03-bronzeform-fuer-den-tisch | preis-auf-anfrage | flat | /de/shop/objekte-03-bronzeform-fuer-den-tisch | /en/shop/objekte-03-bronzeform-fuer-den-tisch | /fr/shop/objekte-03-bronzeform-fuer-den-tisch | /es/shop/objekte-03-bronzeform-fuer-den-tisch | /zh/shop/objekte-03-bronzeform-fuer-den-tisch | /ar/shop/objekte-03-bronzeform-fuer-den-tisch |
| 53 | Objekte | Keramikobjekt mit dunkler Glasur | objekte-04-keramikobjekt-mit-dunkler-glasur | reserviert | flat | /de/shop/objekte-04-keramikobjekt-mit-dunkler-glasur | /en/shop/objekte-04-keramikobjekt-mit-dunkler-glasur | /fr/shop/objekte-04-keramikobjekt-mit-dunkler-glasur | /es/shop/objekte-04-keramikobjekt-mit-dunkler-glasur | /zh/shop/objekte-04-keramikobjekt-mit-dunkler-glasur | /ar/shop/objekte-04-keramikobjekt-mit-dunkler-glasur |
| 54 | Objekte | Glasobjekt mit Einschluss | objekte-05-glasobjekt-mit-einschluss | verkauft | flat | /de/shop/objekte-05-glasobjekt-mit-einschluss | /en/shop/objekte-05-glasobjekt-mit-einschluss | /fr/shop/objekte-05-glasobjekt-mit-einschluss | /es/shop/objekte-05-glasobjekt-mit-einschluss | /zh/shop/objekte-05-glasobjekt-mit-einschluss | /ar/shop/objekte-05-glasobjekt-mit-einschluss |
| 55 | Objekte | Kleine Skulptur aus Holz | objekte-06-kleine-skulptur-aus-holz | sofort-kaufen | flat | /de/shop/objekte-06-kleine-skulptur-aus-holz | /en/shop/objekte-06-kleine-skulptur-aus-holz | /fr/shop/objekte-06-kleine-skulptur-aus-holz | /es/shop/objekte-06-kleine-skulptur-aus-holz | /zh/shop/objekte-06-kleine-skulptur-aus-holz | /ar/shop/objekte-06-kleine-skulptur-aus-holz |
| 56 | Objekte | Objekt aus Messing und Stein | objekte-07-objekt-aus-messing-und-stein | anfragen | flat | /de/shop/objekte-07-objekt-aus-messing-und-stein | /en/shop/objekte-07-objekt-aus-messing-und-stein | /fr/shop/objekte-07-objekt-aus-messing-und-stein | /es/shop/objekte-07-objekt-aus-messing-und-stein | /zh/shop/objekte-07-objekt-aus-messing-und-stein | /ar/shop/objekte-07-objekt-aus-messing-und-stein |
| 57 | Objekte | Wandobjekt aus Keramik | objekte-08-wandobjekt-aus-keramik | preis-auf-anfrage | flat | /de/shop/objekte-08-wandobjekt-aus-keramik | /en/shop/objekte-08-wandobjekt-aus-keramik | /fr/shop/objekte-08-wandobjekt-aus-keramik | /es/shop/objekte-08-wandobjekt-aus-keramik | /zh/shop/objekte-08-wandobjekt-aus-keramik | /ar/shop/objekte-08-wandobjekt-aus-keramik |
| 58 | Objekte | Schale aus Naturstein | objekte-09-schale-aus-naturstein | reserviert | flat | /de/shop/objekte-09-schale-aus-naturstein | /en/shop/objekte-09-schale-aus-naturstein | /fr/shop/objekte-09-schale-aus-naturstein | /es/shop/objekte-09-schale-aus-naturstein | /zh/shop/objekte-09-schale-aus-naturstein | /ar/shop/objekte-09-schale-aus-naturstein |
| 59 | Objekte | Objekt mit Grifföffnung | objekte-10-objekt-mit-griffoeffnung | verkauft | flat | /de/shop/objekte-10-objekt-mit-griffoeffnung | /en/shop/objekte-10-objekt-mit-griffoeffnung | /fr/shop/objekte-10-objekt-mit-griffoeffnung | /es/shop/objekte-10-objekt-mit-griffoeffnung | /zh/shop/objekte-10-objekt-mit-griffoeffnung | /ar/shop/objekte-10-objekt-mit-griffoeffnung |
| 60 | Objekte | Kleine Metallarbeit | objekte-11-kleine-metallarbeit | sofort-kaufen | flat | /de/shop/objekte-11-kleine-metallarbeit | /en/shop/objekte-11-kleine-metallarbeit | /fr/shop/objekte-11-kleine-metallarbeit | /es/shop/objekte-11-kleine-metallarbeit | /zh/shop/objekte-11-kleine-metallarbeit | /ar/shop/objekte-11-kleine-metallarbeit |
| 61 | Objekte | Sockelobjekt aus hellem Stein | objekte-12-sockelobjekt-aus-hellem-stein | anfragen | flat | /de/shop/objekte-12-sockelobjekt-aus-hellem-stein | /en/shop/objekte-12-sockelobjekt-aus-hellem-stein | /fr/shop/objekte-12-sockelobjekt-aus-hellem-stein | /es/shop/objekte-12-sockelobjekt-aus-hellem-stein | /zh/shop/objekte-12-sockelobjekt-aus-hellem-stein | /ar/shop/objekte-12-sockelobjekt-aus-hellem-stein |
| 62 | Tabletop | Keramikobjekt mit Grifföffnung | keramikobjekt-mit-griffoeffnung | sofort-kaufen | flat | /de/shop/keramikobjekt-mit-griffoeffnung | /en/shop/keramikobjekt-mit-griffoeffnung | /fr/shop/keramikobjekt-mit-griffoeffnung | /es/shop/keramikobjekt-mit-griffoeffnung | /zh/shop/keramikobjekt-mit-griffoeffnung | /ar/shop/keramikobjekt-mit-griffoeffnung |
| 63 | Tabletop | Vase aus glasierter Keramik | vase-aus-glasierter-keramik | anfragen | flat | /de/shop/vase-aus-glasierter-keramik | /en/shop/vase-aus-glasierter-keramik | /fr/shop/vase-aus-glasierter-keramik | /es/shop/vase-aus-glasierter-keramik | /zh/shop/vase-aus-glasierter-keramik | /ar/shop/vase-aus-glasierter-keramik |
| 64 | Tabletop | Flache Schale aus Steinzeug | tabletop-03-flache-schale-aus-steinzeug | preis-auf-anfrage | flat | /de/shop/tabletop-03-flache-schale-aus-steinzeug | /en/shop/tabletop-03-flache-schale-aus-steinzeug | /fr/shop/tabletop-03-flache-schale-aus-steinzeug | /es/shop/tabletop-03-flache-schale-aus-steinzeug | /zh/shop/tabletop-03-flache-schale-aus-steinzeug | /ar/shop/tabletop-03-flache-schale-aus-steinzeug |
| 65 | Tabletop | Untersetzer aus Naturstein | tabletop-04-untersetzer-aus-naturstein | reserviert | flat | /de/shop/tabletop-04-untersetzer-aus-naturstein | /en/shop/tabletop-04-untersetzer-aus-naturstein | /fr/shop/tabletop-04-untersetzer-aus-naturstein | /es/shop/tabletop-04-untersetzer-aus-naturstein | /zh/shop/tabletop-04-untersetzer-aus-naturstein | /ar/shop/tabletop-04-untersetzer-aus-naturstein |
| 66 | Tabletop | Kerzenhalter aus Ton | tabletop-05-kerzenhalter-aus-ton | verkauft | flat | /de/shop/tabletop-05-kerzenhalter-aus-ton | /en/shop/tabletop-05-kerzenhalter-aus-ton | /fr/shop/tabletop-05-kerzenhalter-aus-ton | /es/shop/tabletop-05-kerzenhalter-aus-ton | /zh/shop/tabletop-05-kerzenhalter-aus-ton | /ar/shop/tabletop-05-kerzenhalter-aus-ton |
| 67 | Tabletop | Kleines Tablett aus Messing | tabletop-06-kleines-tablett-aus-messing | sofort-kaufen | flat | /de/shop/tabletop-06-kleines-tablett-aus-messing | /en/shop/tabletop-06-kleines-tablett-aus-messing | /fr/shop/tabletop-06-kleines-tablett-aus-messing | /es/shop/tabletop-06-kleines-tablett-aus-messing | /zh/shop/tabletop-06-kleines-tablett-aus-messing | /ar/shop/tabletop-06-kleines-tablett-aus-messing |
| 68 | Tabletop | Glasbecher mit schwerem Boden | tabletop-07-glasbecher-mit-schwerem-boden | anfragen | flat | /de/shop/tabletop-07-glasbecher-mit-schwerem-boden | /en/shop/tabletop-07-glasbecher-mit-schwerem-boden | /fr/shop/tabletop-07-glasbecher-mit-schwerem-boden | /es/shop/tabletop-07-glasbecher-mit-schwerem-boden | /zh/shop/tabletop-07-glasbecher-mit-schwerem-boden | /ar/shop/tabletop-07-glasbecher-mit-schwerem-boden |
| 69 | Tabletop | Servierschale mit matter Glasur | tabletop-08-servierschale-mit-matter-glasur | preis-auf-anfrage | flat | /de/shop/tabletop-08-servierschale-mit-matter-glasur | /en/shop/tabletop-08-servierschale-mit-matter-glasur | /fr/shop/tabletop-08-servierschale-mit-matter-glasur | /es/shop/tabletop-08-servierschale-mit-matter-glasur | /zh/shop/tabletop-08-servierschale-mit-matter-glasur | /ar/shop/tabletop-08-servierschale-mit-matter-glasur |
| 70 | Tabletop | Objektvase in dunkler Glasur | tabletop-09-objektvase-in-dunkler-glasur | reserviert | flat | /de/shop/tabletop-09-objektvase-in-dunkler-glasur | /en/shop/tabletop-09-objektvase-in-dunkler-glasur | /fr/shop/tabletop-09-objektvase-in-dunkler-glasur | /es/shop/tabletop-09-objektvase-in-dunkler-glasur | /zh/shop/tabletop-09-objektvase-in-dunkler-glasur | /ar/shop/tabletop-09-objektvase-in-dunkler-glasur |
| 71 | Tabletop | Steinplatte für den Tisch | tabletop-10-steinplatte-fuer-den-tisch | verkauft | flat | /de/shop/tabletop-10-steinplatte-fuer-den-tisch | /en/shop/tabletop-10-steinplatte-fuer-den-tisch | /fr/shop/tabletop-10-steinplatte-fuer-den-tisch | /es/shop/tabletop-10-steinplatte-fuer-den-tisch | /zh/shop/tabletop-10-steinplatte-fuer-den-tisch | /ar/shop/tabletop-10-steinplatte-fuer-den-tisch |
| 72 | Tabletop | Kleine Schale aus Bronze | tabletop-11-kleine-schale-aus-bronze | sofort-kaufen | flat | /de/shop/tabletop-11-kleine-schale-aus-bronze | /en/shop/tabletop-11-kleine-schale-aus-bronze | /fr/shop/tabletop-11-kleine-schale-aus-bronze | /es/shop/tabletop-11-kleine-schale-aus-bronze | /zh/shop/tabletop-11-kleine-schale-aus-bronze | /ar/shop/tabletop-11-kleine-schale-aus-bronze |
| 73 | Tabletop | Keramikset mit drei Formen | tabletop-12-keramikset-mit-drei-formen | anfragen | flat | /de/shop/tabletop-12-keramikset-mit-drei-formen | /en/shop/tabletop-12-keramikset-mit-drei-formen | /fr/shop/tabletop-12-keramikset-mit-drei-formen | /es/shop/tabletop-12-keramikset-mit-drei-formen | /zh/shop/tabletop-12-keramikset-mit-drei-formen | /ar/shop/tabletop-12-keramikset-mit-drei-formen |
| 74 | Collectible Design | Limitierter Beistelltisch aus Stein | collectible-design-01-limitierter-beistelltisch-aus-stein | sofort-kaufen | flat | /de/shop/collectible-design-01-limitierter-beistelltisch-aus-stein | /en/shop/collectible-design-01-limitierter-beistelltisch-aus-stein | /fr/shop/collectible-design-01-limitierter-beistelltisch-aus-stein | /es/shop/collectible-design-01-limitierter-beistelltisch-aus-stein | /zh/shop/collectible-design-01-limitierter-beistelltisch-aus-stein | /ar/shop/collectible-design-01-limitierter-beistelltisch-aus-stein |
| 75 | Collectible Design | Sitzskulptur mit Stahlrahmen | collectible-design-02-sitzskulptur-mit-stahlrahmen | anfragen | flat | /de/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen | /en/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen | /fr/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen | /es/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen | /zh/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen | /ar/shop/collectible-design-02-sitzskulptur-mit-stahlrahmen |
| 76 | Collectible Design | Edition aus Bronze und Glas | collectible-design-03-edition-aus-bronze-und-glas | preis-auf-anfrage | flat | /de/shop/collectible-design-03-edition-aus-bronze-und-glas | /en/shop/collectible-design-03-edition-aus-bronze-und-glas | /fr/shop/collectible-design-03-edition-aus-bronze-und-glas | /es/shop/collectible-design-03-edition-aus-bronze-und-glas | /zh/shop/collectible-design-03-edition-aus-bronze-und-glas | /ar/shop/collectible-design-03-edition-aus-bronze-und-glas |
| 77 | Collectible Design | Objekttisch mit patinierter Fläche | collectible-design-04-objekttisch-mit-patinierter-flaeche | reserviert | flat | /de/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche | /en/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche | /fr/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche | /es/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche | /zh/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche | /ar/shop/collectible-design-04-objekttisch-mit-patinierter-flaeche |
| 78 | Collectible Design | Keramische Sitzform | collectible-design-05-keramische-sitzform | verkauft | flat | /de/shop/collectible-design-05-keramische-sitzform | /en/shop/collectible-design-05-keramische-sitzform | /fr/shop/collectible-design-05-keramische-sitzform | /es/shop/collectible-design-05-keramische-sitzform | /zh/shop/collectible-design-05-keramische-sitzform | /ar/shop/collectible-design-05-keramische-sitzform |
| 79 | Collectible Design | Regalobjekt in kleiner Edition | collectible-design-06-regalobjekt-in-kleiner-edition | sofort-kaufen | flat | /de/shop/collectible-design-06-regalobjekt-in-kleiner-edition | /en/shop/collectible-design-06-regalobjekt-in-kleiner-edition | /fr/shop/collectible-design-06-regalobjekt-in-kleiner-edition | /es/shop/collectible-design-06-regalobjekt-in-kleiner-edition | /zh/shop/collectible-design-06-regalobjekt-in-kleiner-edition | /ar/shop/collectible-design-06-regalobjekt-in-kleiner-edition |
| 80 | Collectible Design | Lichtskulptur aus Glas | collectible-design-07-lichtskulptur-aus-glas | anfragen | flat | /de/shop/collectible-design-07-lichtskulptur-aus-glas | /en/shop/collectible-design-07-lichtskulptur-aus-glas | /fr/shop/collectible-design-07-lichtskulptur-aus-glas | /es/shop/collectible-design-07-lichtskulptur-aus-glas | /zh/shop/collectible-design-07-lichtskulptur-aus-glas | /ar/shop/collectible-design-07-lichtskulptur-aus-glas |
| 81 | Collectible Design | Steinrelief als Objekt | collectible-design-08-steinrelief-als-objekt | preis-auf-anfrage | flat | /de/shop/collectible-design-08-steinrelief-als-objekt | /en/shop/collectible-design-08-steinrelief-als-objekt | /fr/shop/collectible-design-08-steinrelief-als-objekt | /es/shop/collectible-design-08-steinrelief-als-objekt | /zh/shop/collectible-design-08-steinrelief-als-objekt | /ar/shop/collectible-design-08-steinrelief-als-objekt |
| 82 | Collectible Design | Tischobjekt aus Holz und Bronze | collectible-design-09-tischobjekt-aus-holz-und-bronze | reserviert | flat | /de/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze | /en/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze | /fr/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze | /es/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze | /zh/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze | /ar/shop/collectible-design-09-tischobjekt-aus-holz-und-bronze |
| 83 | Collectible Design | Wandkonsole in limitierter Serie | collectible-design-10-wandkonsole-in-limitierter-serie | verkauft | flat | /de/shop/collectible-design-10-wandkonsole-in-limitierter-serie | /en/shop/collectible-design-10-wandkonsole-in-limitierter-serie | /fr/shop/collectible-design-10-wandkonsole-in-limitierter-serie | /es/shop/collectible-design-10-wandkonsole-in-limitierter-serie | /zh/shop/collectible-design-10-wandkonsole-in-limitierter-serie | /ar/shop/collectible-design-10-wandkonsole-in-limitierter-serie |
| 84 | Collectible Design | Sammelobjekt aus Keramik | collectible-design-11-sammelobjekt-aus-keramik | sofort-kaufen | flat | /de/shop/collectible-design-11-sammelobjekt-aus-keramik | /en/shop/collectible-design-11-sammelobjekt-aus-keramik | /fr/shop/collectible-design-11-sammelobjekt-aus-keramik | /es/shop/collectible-design-11-sammelobjekt-aus-keramik | /zh/shop/collectible-design-11-sammelobjekt-aus-keramik | /ar/shop/collectible-design-11-sammelobjekt-aus-keramik |
| 85 | Collectible Design | Edition eines Raumobjekts | collectible-design-12-edition-eines-raumobjekts | anfragen | flat | /de/shop/collectible-design-12-edition-eines-raumobjekts | /en/shop/collectible-design-12-edition-eines-raumobjekts | /fr/shop/collectible-design-12-edition-eines-raumobjekts | /es/shop/collectible-design-12-edition-eines-raumobjekts | /zh/shop/collectible-design-12-edition-eines-raumobjekts | /ar/shop/collectible-design-12-edition-eines-raumobjekts |
| 86 | Editionen | Kerzenhalter aus patinierter Bronze | kerzenhalter-aus-patinierter-bronze | sofort-kaufen | flat | /de/shop/kerzenhalter-aus-patinierter-bronze | /en/shop/kerzenhalter-aus-patinierter-bronze | /fr/shop/kerzenhalter-aus-patinierter-bronze | /es/shop/kerzenhalter-aus-patinierter-bronze | /zh/shop/kerzenhalter-aus-patinierter-bronze | /ar/shop/kerzenhalter-aus-patinierter-bronze |
| 87 | Editionen | Kleine Edition aus Papier | editionen-02-kleine-edition-aus-papier | anfragen | flat | /de/shop/editionen-02-kleine-edition-aus-papier | /en/shop/editionen-02-kleine-edition-aus-papier | /fr/shop/editionen-02-kleine-edition-aus-papier | /es/shop/editionen-02-kleine-edition-aus-papier | /zh/shop/editionen-02-kleine-edition-aus-papier | /ar/shop/editionen-02-kleine-edition-aus-papier |
| 88 | Editionen | Bronzeobjekt in kleiner Auflage | editionen-03-bronzeobjekt-in-kleiner-auflage | preis-auf-anfrage | flat | /de/shop/editionen-03-bronzeobjekt-in-kleiner-auflage | /en/shop/editionen-03-bronzeobjekt-in-kleiner-auflage | /fr/shop/editionen-03-bronzeobjekt-in-kleiner-auflage | /es/shop/editionen-03-bronzeobjekt-in-kleiner-auflage | /zh/shop/editionen-03-bronzeobjekt-in-kleiner-auflage | /ar/shop/editionen-03-bronzeobjekt-in-kleiner-auflage |
| 89 | Editionen | Glasobjekt als Edition | editionen-04-glasobjekt-als-edition | reserviert | flat | /de/shop/editionen-04-glasobjekt-als-edition | /en/shop/editionen-04-glasobjekt-als-edition | /fr/shop/editionen-04-glasobjekt-als-edition | /es/shop/editionen-04-glasobjekt-als-edition | /zh/shop/editionen-04-glasobjekt-als-edition | /ar/shop/editionen-04-glasobjekt-als-edition |
| 90 | Editionen | Keramikedition mit matter Glasur | editionen-05-keramikedition-mit-matter-glasur | verkauft | flat | /de/shop/editionen-05-keramikedition-mit-matter-glasur | /en/shop/editionen-05-keramikedition-mit-matter-glasur | /fr/shop/editionen-05-keramikedition-mit-matter-glasur | /es/shop/editionen-05-keramikedition-mit-matter-glasur | /zh/shop/editionen-05-keramikedition-mit-matter-glasur | /ar/shop/editionen-05-keramikedition-mit-matter-glasur |
| 91 | Editionen | Druck auf handgeschöpftem Papier | editionen-06-druck-auf-handgeschoepftem-papier | sofort-kaufen | flat | /de/shop/editionen-06-druck-auf-handgeschoepftem-papier | /en/shop/editionen-06-druck-auf-handgeschoepftem-papier | /fr/shop/editionen-06-druck-auf-handgeschoepftem-papier | /es/shop/editionen-06-druck-auf-handgeschoepftem-papier | /zh/shop/editionen-06-druck-auf-handgeschoepftem-papier | /ar/shop/editionen-06-druck-auf-handgeschoepftem-papier |
| 92 | Editionen | Kleine Wandarbeit aus Holz | editionen-07-kleine-wandarbeit-aus-holz | anfragen | flat | /de/shop/editionen-07-kleine-wandarbeit-aus-holz | /en/shop/editionen-07-kleine-wandarbeit-aus-holz | /fr/shop/editionen-07-kleine-wandarbeit-aus-holz | /es/shop/editionen-07-kleine-wandarbeit-aus-holz | /zh/shop/editionen-07-kleine-wandarbeit-aus-holz | /ar/shop/editionen-07-kleine-wandarbeit-aus-holz |
| 93 | Editionen | Edition aus Naturstein | editionen-08-edition-aus-naturstein | preis-auf-anfrage | flat | /de/shop/editionen-08-edition-aus-naturstein | /en/shop/editionen-08-edition-aus-naturstein | /fr/shop/editionen-08-edition-aus-naturstein | /es/shop/editionen-08-edition-aus-naturstein | /zh/shop/editionen-08-edition-aus-naturstein | /ar/shop/editionen-08-edition-aus-naturstein |
| 94 | Editionen | Objektset aus drei Formen | editionen-09-objektset-aus-drei-formen | reserviert | flat | /de/shop/editionen-09-objektset-aus-drei-formen | /en/shop/editionen-09-objektset-aus-drei-formen | /fr/shop/editionen-09-objektset-aus-drei-formen | /es/shop/editionen-09-objektset-aus-drei-formen | /zh/shop/editionen-09-objektset-aus-drei-formen | /ar/shop/editionen-09-objektset-aus-drei-formen |
| 95 | Editionen | Metallarbeit in kleiner Auflage | editionen-10-metallarbeit-in-kleiner-auflage | verkauft | flat | /de/shop/editionen-10-metallarbeit-in-kleiner-auflage | /en/shop/editionen-10-metallarbeit-in-kleiner-auflage | /fr/shop/editionen-10-metallarbeit-in-kleiner-auflage | /es/shop/editionen-10-metallarbeit-in-kleiner-auflage | /zh/shop/editionen-10-metallarbeit-in-kleiner-auflage | /ar/shop/editionen-10-metallarbeit-in-kleiner-auflage |
| 96 | Editionen | Papierrelief als Edition | editionen-11-papierrelief-als-edition | sofort-kaufen | flat | /de/shop/editionen-11-papierrelief-als-edition | /en/shop/editionen-11-papierrelief-als-edition | /fr/shop/editionen-11-papierrelief-als-edition | /es/shop/editionen-11-papierrelief-als-edition | /zh/shop/editionen-11-papierrelief-als-edition | /ar/shop/editionen-11-papierrelief-als-edition |
| 97 | Editionen | Keramisches Wandstück | editionen-12-keramisches-wandstueck | anfragen | flat | /de/shop/editionen-12-keramisches-wandstueck | /en/shop/editionen-12-keramisches-wandstueck | /fr/shop/editionen-12-keramisches-wandstueck | /es/shop/editionen-12-keramisches-wandstueck | /zh/shop/editionen-12-keramisches-wandstueck | /ar/shop/editionen-12-keramisches-wandstueck |

## 6. Sitemap Structure

Sitemap source: `app/sitemap.ts`.

Current structure:

1. Static localized routes from `localizedRoutes`, for every locale.
2. Legacy `/luxury-coasters` route.
3. Shop category routes for every locale.
4. Product routes for every locale.

Current `siteUrl`: `https://www.getyour.design`  
Current `lastModified`: `2026-06-23`

Product sitemap path rule:

- `flat` products use `getShopPath(locale, product.slug)`.
- `nested` products use `getProductPath(locale, product.categorySlug, product.slug)`.
- `x-default` points to the German path.

No product or category sitemap route should be removed or migrated without explicit approval.

## 7. Canonicals

Canonical sources:

- Global `metadataBase`: `https://www.getyour.design`
- Static localized pages: `localizedRoutes[routeKey][locale]`
- Root German category pages: `/shop/{categorySlug}`
- Root German product pages:
  - `flat`: `/shop/{productSlug}`
  - `nested`: `/de/shop/{categorySlug}/{productSlug}` via `getProductPath("de", ...)`
- Localized product pages:
  - `flat`: `/{locale}/shop/{productSlug}`
  - `nested`: `/{locale}/shop/{localizedCategorySlug}/{productSlug}`
- Localized categories: `getShopPath(locale, categorySlug)`
- Cart: localized static route, with `noindex` behavior on the cart page.

Important current inconsistency:

- Some root German pages still expose root canonicals like `/shop/{slug}` while middleware redirects root `/shop...` to `/de/shop...`. This is existing behavior and must not be normalized during Phase 0.

## 8. hreflang Structure

Static localized pages:

- `generateMetadata` in `app/[locale]/[...slug]/page.tsx` uses `getAlternateLanguages(route.key)`.
- `getAlternateLanguages` emits all six locales plus `x-default`.
- `x-default` points to the German route.

Product and category pages:

- Product metadata in the localized catchall emits all six locales plus `x-default`.
- Category metadata uses localized shop paths.
- Category slugs are localized through `getLocalizedShopSlug`.
- Product slugs are not translated.

Language switch behavior:

- `getLanguageSwitchPath` recognizes localized shop paths.
- For nested product paths it resolves the category slug back to the canonical German category slug and then emits the target-locale category slug.
- For flat product paths, the language switch treats the product slug as the shop slug; this is existing behavior and should be regression-tested before any future routing change.

## 9. Existing Commerce and CTA Logic

Source: `app/lib/commerce.ts` and localized helper in `app/[locale]/[...slug]/page.tsx`.

Root German CTA mapping:

- `sofort-kaufen`: label `In den Warenkorb`, href `/warenkorb`, enabled.
- `anfragen`: label `Anfrage senden`, href `/contact`, enabled.
- `preis-auf-anfrage`: label `Preis anfragen`, href `/contact`, enabled.
- `reserviert`: label `Reserviert`, disabled.
- `verkauft`: label `Verkauft`, disabled.

Localized CTA mapping:

- `sofort-kaufen`: localized `In den Warenkorb`, localized cart path, enabled.
- `anfragen`: localized `Anfrage senden`, localized contact path, enabled.
- `preis-auf-anfrage`: localized `Preis anfragen`, localized contact path, enabled.
- `reserviert`: localized `Reserviert`, disabled.
- `verkauft`: localized `Verkauft`, disabled.
- Product-level `ctaLabel` can override the label.

Checkout state:

- `prepareCheckout()` returns `{ enabled: false }`.
- There is no active Stripe integration.
- There is no real cart state.
- `/warenkorb` is a preview page with disabled checkout if `checkout.enabled` is false.

## 10. Existing Affiliate Preparation

Status: prepared, not implemented.

Existing preparation:

- `app/data/publishing.ts` includes `affiliateRelevanceReviewed` in `publishingQualityChecks`.
- `app/data/publishing.ts` includes `affiliatePage` in `entityTypes`.
- `COMMERCE_TRANSFORMATION_MASTERPLAN.md` defines future affiliate fields and constraints.

Not currently present:

- No `commerceMode`.
- No `affiliateLink`.
- No `affiliatePartner`.
- No affiliate CTA.
- No sponsored/nofollow affiliate link rendering.
- No affiliate product feed.
- No affiliate disclosure UI.

## 11. Existing Pinterest and Open Graph Structures

Pinterest:

- Global Pinterest verification is present in `app/layout.tsx` via `p:domain_verify`.
- Pinterest social link exists in `app/data/social.ts`: `https://www.pinterest.com/getyourdesignby2bhome/`.
- Publishing preparation includes `pinterestData`, `pinterestTitle`, `pinterestDescription`, `pinterestImage`.

Open Graph:

- Global Open Graph exists in `app/layout.tsx`:
  - title `GETYOUR.DESIGN`
  - description `Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen.`
  - type `website`
  - url `https://www.getyour.design`
- Product metadata uses product-specific `openGraph` title/description/url and first product image when `images` exist.
- Localized product metadata uses localized product content when available.
- There is no global dedicated OG image configured in `app/layout.tsx`.
- There is no Product JSON-LD or Breadcrumb JSON-LD.

## 12. Existing i18n Structure

Core files:

- `app/lib/i18n.ts`
- `app/data/dictionaries.ts`
- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/[...slug]/page.tsx`
- `app/components/LocalizedHomePage.tsx`

Current behavior:

- Six locales: `de`, `en`, `fr`, `es`, `zh`, `ar`.
- German is the primary content source.
- English is the fallback/baseline for dictionary merging.
- Arabic layout sets RTL in locale layout.
- Legal content:
  - German: binding version.
  - English: full convenience version.
  - FR/ES/ZH/AR: placeholder legal pages, not invented translations.
- Product localized content:
  - Only the Kuhfell seating product has full localized content for EN/FR/ES/ZH/AR.
  - Other products use title fallbacks.

## 13. Critical Regression Test Pages

Minimum regression set before and after future commerce work:

- `/de`
- `/en`
- `/ar`
- `/de/shop`
- `/en/shop`
- `/ar/shop`
- `/de/shop/moebel`
- `/en/shop/furniture`
- `/ar/shop/furniture`
- `/de/shop/sitzobjekt-aus-dunklem-holz`
- `/en/shop/sitzobjekt-aus-dunklem-holz`
- `/ar/shop/sitzobjekt-aus-dunklem-holz`
- `/de/shop/moebel-02-niedrige-bank-aus-eiche`
- `/de/shop/moebel/sitzobjekt-kuhfell`
- `/en/shop/furniture/sitzobjekt-kuhfell`
- `/ar/shop/furniture/sitzobjekt-kuhfell`
- `/de/warenkorb`
- `/en/cart`
- `/ar/cart`
- `/de/impressum`
- `/en/legal-notice`
- `/ar/legal-notice`
- `/de/datenschutz`
- `/en/privacy-policy`
- `/ar/privacy-policy`
- `/sitemap.xml`
- `/images/hero-lc2-blue.png`
- `/images/products/sculptural-cowhide-seat-hero.png`
- `/images/products/yellow-cowhide-seat.webp`

Spot-check expectations:

- All listed pages should return HTTP 200 after redirects.
- Existing flat product URLs should remain reachable.
- Kuhfell seating nested localized URLs should remain reachable.
- German shop/category/product pages should not show English fallback CTA/category text.
- `sitemap.xml` should include flat existing product URLs and nested Kuhfell product URLs.
- Cart must remain non-functional/preview-only until checkout is explicitly implemented.

## 14. Known Risks and Inconsistencies

- `PROJECT_SPEC.md` is untracked and must not be accidentally committed.
- `PROJECT_DNA_FULL.md` and `COMMERCE_TRANSFORMATION_MASTERPLAN.md` are currently untracked documentation files.
- `.DS_Store` files exist in the repository tree but are not part of the desired commit set.
- `yellow-cowhide-seat.webp` contains PNG data despite the `.webp` extension.
- Some coasters images have `.jpg` extensions with PNG data.
- No `next.config.ts` remote image configuration exists; this is correct for current local public assets.
- Search is a prototype and not a real search.
- Cart/checkout is disabled.
- `prepareCheckout()` is intentionally inactive.
- Many products are seed/catalog placeholders, not verified live commerce SKUs.
- Only the Kuhfell seating object has real product images and complete localized product content.
- Product route helper logic for `pathMode` currently exists in multiple files; future changes should avoid drift.
- Some root German canonicals and middleware redirects are not fully normalized; preserve this until a dedicated SEO/routing task.
- FR/ES/ZH/AR product pages for most products use generic title/content fallbacks.
- Affiliate and Pinterest structures are prepared but not commerce-active.
- No Product JSON-LD or Breadcrumb JSON-LD exists.

## 15. Verification

Commands required for this baseline:

- `git status --short`
- `npm run build`
- local spot checks for DE, EN, AR

Build result:

- `npm run build` completed successfully.
- Next.js generated 894 static pages.

No functional commerce implementation was performed in Phase 0.
