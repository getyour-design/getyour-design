# GETYOUR.DESIGN Website Inventory & Migration Matrix

Generated: 2026-06-23T11:53:14.426Z
Root crawled: https://www.getyour.design

## Executive Findings

- Crawled pages: 117
- Sitemap URLs found: 0
- XML sitemap endpoints checked: /sitemap.xml, /sitemap_index.xml, /server-sitemap.xml on www and non-www
- Critical blocker: robots.txt returns `Disallow: /`
- Critical blocker: 117/117 crawled HTML pages include `noindex,nofollow`
- Indexable pages under current live configuration: 0
- Internal links captured: 1729
- Images captured: 25
- External partner/affiliate links captured: 0
- GEO pages detected: 1
- Affiliate pages detected: 0
- Duplicate risks detected: 4

## Page Type Counts

- Atelier: 2
- Journal: 1
- Kategorie: 9
- Kunstwerk: 23
- Künstler: 1
- Landingpage: 5
- Produkt: 74
- Sonstige: 1
- Startseite: 1

## Recommended Structure Counts

- Accessoires: 12
- Ateliers: 6
- Design-Shop: 17
- Journal: 1
- Kollektionen: 1
- Kunst: 14
- Kunstwerke: 13
- Leuchten: 13
- Möbel: 13
- Objekte: 14
- Teppiche: 13

## Current Navigation

Main navigation currently found in local source/live crawl: Kunst, Kollektionen, Journal, Commissions & Collaborations, Ateliers, Shop. Strategic gap: Design is missing as primary commercial entry; Shop and Commissions should become secondary.

## Critical SEO / Indexing Issues

1. `public/robots.txt` blocks all crawlers with `Disallow: /`.
2. `app/layout.tsx` sets global robots `index:false, follow:false` and hard-coded `noindex,nofollow` meta tags.
3. No sitemap was found at the tested common endpoints.
4. No canonical tags were detected in crawled HTML.
5. All pages are reachable internally, but none are indexable in the current live state.

## Migration Notes

No URL is assigned to deletion. Every crawled URL has a recommended new structure in `migration_matrix.csv`. Product/category URLs should be preserved and internally re-homed under the new IA rather than redirected away unless the URL itself changes later.
