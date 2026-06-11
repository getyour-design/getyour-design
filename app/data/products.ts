export type ProductStatus =
  | "sofort-kaufen"
  | "anfragen"
  | "preis-auf-anfrage"
  | "reserviert"
  | "verkauft";

type ProductSeed = {
  title: string;
  price: string;
  material: string;
  dimensions: string;
  slug?: string;
};

type ProductCategorySeed = {
  title: string;
  slug: string;
  makerPrefix: string;
  originPrefix: string;
  type: string;
  description: string;
  items: ProductSeed[];
};

export const shopCategories = [
  { title: "Möbel", slug: "moebel" },
  { title: "Leuchten", slug: "leuchten" },
  { title: "Kunst", slug: "kunst" },
  { title: "Teppiche", slug: "teppiche" },
  { title: "Objekte", slug: "objekte" },
  { title: "Tabletop", slug: "tabletop" },
  { title: "Collectible Design", slug: "collectible-design" },
  { title: "Editionen", slug: "editionen" },
];

const statuses: ProductStatus[] = [
  "sofort-kaufen",
  "anfragen",
  "preis-auf-anfrage",
  "reserviert",
  "verkauft",
];

const palettes = [
  "bg-[#d9d0c1]",
  "bg-[#efebe2]",
  "bg-[#181614]",
  "bg-[#9c9287]",
  "bg-[#f4f0e7]",
  "bg-[#c8c0b2]",
  "bg-[#e8eceb]",
  "bg-[#8b8174]",
  "bg-[#11100f]",
  "bg-[#d8d0c3]",
  "bg-[#c7beb1]",
  "bg-[#5d5247]",
];

const availabilityByStatus: Record<ProductStatus, string> = {
  "sofort-kaufen": "Verfügbar",
  anfragen: "Auf Anfrage verfügbar",
  "preis-auf-anfrage": "Preis auf Anfrage",
  reserviert: "Reserviert",
  verkauft: "Verkauft",
};

const categorySeeds: ProductCategorySeed[] = [
  {
    title: "Möbel",
    slug: "moebel",
    makerPrefix: "Atelier",
    originPrefix: "Atelier",
    type: "Möbel",
    description:
      "Möbelstück mit klarer Form, präziser Materialwirkung und ruhiger Präsenz im Raum.",
    items: [
      { title: "Sitzobjekt aus dunklem Holz", slug: "sitzobjekt-aus-dunklem-holz", price: "EUR 3,840", material: "Dunkles Holz, textile Polsterung", dimensions: "72 x 78 x 68 cm" },
      { title: "Niedrige Bank aus Eiche", price: "EUR 2,900", material: "Eiche, geölte Oberfläche", dimensions: "160 x 42 x 44 cm" },
      { title: "Sessel mit Lederauflage", price: "EUR 4,600", material: "Stahl, Leder", dimensions: "78 x 82 x 72 cm" },
      { title: "Konsole aus geräuchertem Holz", price: "EUR 5,200", material: "Geräucherte Eiche", dimensions: "180 x 38 x 82 cm" },
      { title: "Tisch mit Steinplatte", price: "EUR 8,900", material: "Naturstein, Stahl", dimensions: "220 x 92 x 74 cm" },
      { title: "Regalobjekt aus Nussbaum", price: "EUR 6,400", material: "Nussbaum, brünierter Stahl", dimensions: "120 x 36 x 180 cm" },
      { title: "Daybed mit Wollbezug", price: "EUR 7,800", material: "Wolle, Holz, Stahl", dimensions: "195 x 82 x 42 cm" },
      { title: "Hocker aus massivem Holz", price: "EUR 1,450", material: "Massivholz", dimensions: "38 x 38 x 46 cm" },
      { title: "Schreibtisch mit klarer Kante", price: "EUR 5,900", material: "Eiche, Leder", dimensions: "150 x 70 x 74 cm" },
      { title: "Sideboard mit Steinauflage", price: "EUR 9,200", material: "Holz, Naturstein", dimensions: "210 x 48 x 72 cm" },
      { title: "Stuhl mit Stahlrahmen", price: "EUR 1,980", material: "Stahl, Leder", dimensions: "52 x 56 x 78 cm" },
      { title: "Runder Tisch aus Esche", price: "EUR 4,300", material: "Esche, geölte Oberfläche", dimensions: "120 x 120 x 74 cm" },
    ],
  },
  {
    title: "Leuchten",
    slug: "leuchten",
    makerPrefix: "Hersteller",
    originPrefix: "Werkstatt",
    type: "Leuchte",
    description:
      "Leuchte mit skulpturaler Lichtwirkung, feiner Oberfläche und präziser Materialpräsenz.",
    items: [
      { title: "Leuchte aus Bronze", slug: "leuchte-aus-bronze", price: "Projektangebot", material: "Patinierte Bronze", dimensions: "32 x 18 x 44 cm" },
      { title: "Wandleuchte mit Glasschirm", price: "EUR 1,240", material: "Glas, Messing", dimensions: "18 x 22 x 34 cm" },
      { title: "Tischleuchte aus Stahl", price: "EUR 980", material: "Brünierter Stahl", dimensions: "24 x 18 x 42 cm" },
      { title: "Stehleuchte mit Stoffschirm", price: "EUR 2,600", material: "Stahl, Leinen", dimensions: "42 x 42 x 158 cm" },
      { title: "Pendelleuchte aus Messing", price: "EUR 3,200", material: "Messing, Glas", dimensions: "46 x 46 x 38 cm" },
      { title: "Keramische Wandlampe", price: "EUR 1,480", material: "Keramik, Messing", dimensions: "20 x 16 x 28 cm" },
      { title: "Lichtobjekt aus Glas", price: "Auf Anfrage", material: "Mundgeblasenes Glas", dimensions: "34 x 34 x 52 cm" },
      { title: "Deckenleuchte mit Bronzedetail", price: "EUR 2,850", material: "Bronze, Glas", dimensions: "58 x 58 x 22 cm" },
      { title: "Kleine Tischleuchte aus Stein", price: "EUR 1,700", material: "Naturstein, Glas", dimensions: "22 x 22 x 30 cm" },
      { title: "Lineare Leuchte aus Aluminium", price: "EUR 2,100", material: "Aluminium, Stahl", dimensions: "120 x 8 x 10 cm" },
      { title: "Leuchtkörper mit Seidenschirm", price: "EUR 1,960", material: "Seide, Messing", dimensions: "36 x 36 x 50 cm" },
      { title: "Wandobjekt mit indirektem Licht", price: "Auf Anfrage", material: "Gips, LED-Modul", dimensions: "50 x 10 x 70 cm" },
    ],
  },
  {
    title: "Kunst",
    slug: "kunst",
    makerPrefix: "Künstlerposition",
    originPrefix: "Künstlerposition",
    type: "Kunstwerk",
    description:
      "Arbeit zwischen Fläche, Material und Raumwirkung, ausgewählt für ruhige Interieurs.",
    items: [
      { title: "Papierarbeit mit Struktur", slug: "papierarbeit-mit-struktur", price: "Auf Anfrage", material: "Papier, Pigment, Strukturauftrag", dimensions: "70 x 100 cm" },
      { title: "Mineralische Fläche auf Leinen", price: "EUR 4,200", material: "Mineralpigment auf Leinen", dimensions: "90 x 120 cm" },
      { title: "Kleine Bronzeplastik", price: "EUR 2,900", material: "Gegossene Bronze", dimensions: "18 x 12 x 24 cm" },
      { title: "Wandarbeit aus Papier", price: "EUR 1,850", material: "Papier, Naturpigment", dimensions: "50 x 70 cm" },
      { title: "Relief aus hellem Holz", price: "Auf Anfrage", material: "Geschnitztes Holz", dimensions: "80 x 60 x 8 cm" },
      { title: "Arbeit mit Asche und Pigment", price: "EUR 3,100", material: "Papier, Asche, Pigment", dimensions: "65 x 90 cm" },
      { title: "Textile Wandarbeit", price: "EUR 5,400", material: "Wolle, Leinen", dimensions: "110 x 160 cm" },
      { title: "Objekt aus Stein und Papier", price: "EUR 2,450", material: "Stein, Papier", dimensions: "34 x 24 x 12 cm" },
      { title: "Schwarze Zeichnung auf Bütten", price: "EUR 1,200", material: "Tusche auf Büttenpapier", dimensions: "42 x 60 cm" },
      { title: "Skulptur aus gebranntem Ton", price: "EUR 3,800", material: "Gebrannter Ton", dimensions: "30 x 22 x 46 cm" },
      { title: "Diptychon mit feiner Linie", price: "Auf Anfrage", material: "Pigment, Leinwand", dimensions: "2 x 60 x 80 cm" },
      { title: "Kleine Arbeit auf Holz", price: "EUR 980", material: "Pigment auf Holz", dimensions: "32 x 40 cm" },
    ],
  },
  {
    title: "Teppiche",
    slug: "teppiche",
    makerPrefix: "Textilmanufaktur",
    originPrefix: "Textilmanufaktur",
    type: "Teppich",
    description:
      "Textile Arbeit mit ruhiger Oberfläche, feiner Haptik und klarer Wirkung im Raum.",
    items: [
      { title: "Wollteppich in Naturtönen", slug: "wollteppich-in-naturtoenen", price: "Ab EUR 7,400", material: "Wolle", dimensions: "Individuelle Maße" },
      { title: "Flacher Teppich aus Leinen", price: "EUR 3,600", material: "Leinen, Wolle", dimensions: "240 x 300 cm" },
      { title: "Handgeknüpfter Teppich in Grau", price: "EUR 8,200", material: "Wolle, Seide", dimensions: "250 x 350 cm" },
      { title: "Textile Fläche mit Relief", price: "Auf Anfrage", material: "Wolle", dimensions: "220 x 320 cm" },
      { title: "Läufer aus ungefärbter Wolle", price: "EUR 2,800", material: "Ungefärbte Wolle", dimensions: "90 x 280 cm" },
      { title: "Teppich mit mineralischer Farbigkeit", price: "EUR 6,900", material: "Wolle, Leinen", dimensions: "260 x 340 cm" },
      { title: "Runder Teppich in Naturweiß", price: "EUR 4,400", material: "Wolle", dimensions: "Durchmesser 240 cm" },
      { title: "Gewebter Teppich mit Kante", price: "EUR 5,200", material: "Leinen, Wolle", dimensions: "200 x 300 cm" },
      { title: "Teppich in dunkler Melange", price: "EUR 7,100", material: "Wolle, Baumwolle", dimensions: "240 x 340 cm" },
      { title: "Kleiner Teppich für Lesezone", price: "EUR 1,900", material: "Wolle", dimensions: "140 x 200 cm" },
      { title: "Große textile Raumfläche", price: "Auf Anfrage", material: "Wolle, Seide", dimensions: "Individuelle Maße" },
      { title: "Wandteppich mit feinem Flor", price: "EUR 4,800", material: "Wolle, Leinen", dimensions: "120 x 180 cm" },
    ],
  },
  {
    title: "Objekte",
    slug: "objekte",
    makerPrefix: "Werkstatt",
    originPrefix: "Werkstatt",
    type: "Objekt",
    description:
      "Objekt mit skulpturaler Qualität, Materialtiefe und leiser Präsenz auf Tisch, Sockel oder Wand.",
    items: [
      { title: "Beistelltisch aus Naturstein", slug: "beistelltisch-aus-naturstein", price: "EUR 6,200", material: "Naturstein", dimensions: "48 x 48 x 42 cm" },
      { title: "Steinobjekt mit geschliffener Kante", price: "EUR 1,600", material: "Naturstein", dimensions: "24 x 16 x 18 cm" },
      { title: "Bronzeform für den Tisch", price: "EUR 1,280", material: "Patinierte Bronze", dimensions: "18 x 12 x 10 cm" },
      { title: "Keramikobjekt mit dunkler Glasur", price: "EUR 720", material: "Glasierte Keramik", dimensions: "22 x 18 x 26 cm" },
      { title: "Glasobjekt mit Einschluss", price: "EUR 940", material: "Glas", dimensions: "16 x 16 x 24 cm" },
      { title: "Kleine Skulptur aus Holz", price: "EUR 1,100", material: "Holz", dimensions: "28 x 12 x 34 cm" },
      { title: "Objekt aus Messing und Stein", price: "EUR 1,850", material: "Messing, Stein", dimensions: "30 x 18 x 14 cm" },
      { title: "Wandobjekt aus Keramik", price: "Auf Anfrage", material: "Keramik", dimensions: "40 x 8 x 52 cm" },
      { title: "Schale aus Naturstein", price: "EUR 680", material: "Naturstein", dimensions: "30 x 20 x 8 cm" },
      { title: "Objekt mit Grifföffnung", price: "EUR 1,180", material: "Keramik", dimensions: "28 x 18 x 34 cm" },
      { title: "Kleine Metallarbeit", price: "EUR 560", material: "Brünierter Stahl", dimensions: "14 x 10 x 20 cm" },
      { title: "Sockelobjekt aus hellem Stein", price: "EUR 2,400", material: "Heller Naturstein", dimensions: "32 x 32 x 45 cm" },
    ],
  },
  {
    title: "Tabletop",
    slug: "tabletop",
    makerPrefix: "Keramikatelier",
    originPrefix: "Keramikatelier",
    type: "Tabletop",
    description:
      "Kleineres Objekt für Tisch, Regal oder Ensemble mit feiner Material- und Handwerksqualität.",
    items: [
      { title: "Keramikobjekt mit Grifföffnung", slug: "keramikobjekt-mit-griffoeffnung", price: "EUR 1,180", material: "Glasierte Keramik", dimensions: "28 x 18 x 34 cm" },
      { title: "Vase aus glasierter Keramik", slug: "vase-aus-glasierter-keramik", price: "EUR 180", material: "Glasierte Keramik", dimensions: "14 x 14 x 26 cm" },
      { title: "Flache Schale aus Steinzeug", price: "EUR 240", material: "Steinzeug", dimensions: "26 x 22 x 7 cm" },
      { title: "Untersetzer aus Naturstein", price: "EUR 120", material: "Naturstein", dimensions: "10 x 10 x 2 cm" },
      { title: "Kerzenhalter aus Ton", price: "EUR 160", material: "Gebrannter Ton", dimensions: "9 x 9 x 16 cm" },
      { title: "Kleines Tablett aus Messing", price: "EUR 340", material: "Messing", dimensions: "32 x 18 x 2 cm" },
      { title: "Glasbecher mit schwerem Boden", price: "EUR 140", material: "Glas", dimensions: "8 x 8 x 10 cm" },
      { title: "Servierschale mit matter Glasur", price: "EUR 290", material: "Keramik", dimensions: "30 x 22 x 8 cm" },
      { title: "Objektvase in dunkler Glasur", price: "EUR 420", material: "Keramik", dimensions: "18 x 18 x 30 cm" },
      { title: "Steinplatte für den Tisch", price: "EUR 380", material: "Naturstein", dimensions: "36 x 24 x 3 cm" },
      { title: "Kleine Schale aus Bronze", price: "EUR 520", material: "Bronze", dimensions: "16 x 16 x 6 cm" },
      { title: "Keramikset mit drei Formen", price: "EUR 620", material: "Keramik", dimensions: "Drei Objekte" },
    ],
  },
  {
    title: "Collectible Design",
    slug: "collectible-design",
    makerPrefix: "Atelier",
    originPrefix: "Atelier",
    type: "Collectible Design",
    description:
      "Sammelbares Design zwischen Funktion, Skulptur und Edition mit langfristiger Objektqualität.",
    items: [
      { title: "Limitierter Beistelltisch aus Stein", price: "EUR 7,800", material: "Naturstein", dimensions: "46 x 46 x 44 cm" },
      { title: "Sitzskulptur mit Stahlrahmen", price: "Auf Anfrage", material: "Stahl, Leder", dimensions: "80 x 74 x 72 cm" },
      { title: "Edition aus Bronze und Glas", price: "EUR 4,900", material: "Bronze, Glas", dimensions: "28 x 20 x 40 cm" },
      { title: "Objekttisch mit patinierter Fläche", price: "EUR 6,600", material: "Messing, Holz", dimensions: "70 x 50 x 38 cm" },
      { title: "Keramische Sitzform", price: "Auf Anfrage", material: "Keramik", dimensions: "52 x 42 x 46 cm" },
      { title: "Regalobjekt in kleiner Edition", price: "EUR 5,400", material: "Nussbaum, Stahl", dimensions: "90 x 32 x 160 cm" },
      { title: "Lichtskulptur aus Glas", price: "EUR 3,700", material: "Glas, Messing", dimensions: "40 x 24 x 58 cm" },
      { title: "Steinrelief als Objekt", price: "EUR 2,900", material: "Naturstein", dimensions: "60 x 8 x 80 cm" },
      { title: "Tischobjekt aus Holz und Bronze", price: "EUR 1,950", material: "Holz, Bronze", dimensions: "34 x 22 x 18 cm" },
      { title: "Wandkonsole in limitierter Serie", price: "EUR 4,300", material: "Stahl, Stein", dimensions: "80 x 28 x 32 cm" },
      { title: "Sammelobjekt aus Keramik", price: "EUR 1,200", material: "Keramik", dimensions: "26 x 18 x 32 cm" },
      { title: "Edition eines Raumobjekts", price: "Preis auf Anfrage", material: "Holz, Leinen", dimensions: "Individuelle Maße" },
    ],
  },
  {
    title: "Editionen",
    slug: "editionen",
    makerPrefix: "Edition",
    originPrefix: "Edition",
    type: "Edition",
    description:
      "Limitierte Arbeit mit klarer Materialität, kleiner Auflage und präziser Objektwirkung.",
    items: [
      { title: "Kerzenhalter aus patinierter Bronze", slug: "kerzenhalter-aus-patinierter-bronze", price: "EUR 390", material: "Patinierte Bronze", dimensions: "9 x 9 x 18 cm" },
      { title: "Kleine Edition aus Papier", price: "EUR 620", material: "Papier, Pigment", dimensions: "30 x 40 cm" },
      { title: "Bronzeobjekt in kleiner Auflage", price: "EUR 840", material: "Bronze", dimensions: "12 x 10 x 16 cm" },
      { title: "Glasobjekt als Edition", price: "EUR 460", material: "Glas", dimensions: "14 x 14 x 20 cm" },
      { title: "Keramikedition mit matter Glasur", price: "EUR 580", material: "Keramik", dimensions: "18 x 14 x 24 cm" },
      { title: "Druck auf handgeschöpftem Papier", price: "EUR 320", material: "Papier, Pigmentdruck", dimensions: "40 x 50 cm" },
      { title: "Kleine Wandarbeit aus Holz", price: "EUR 760", material: "Holz, Pigment", dimensions: "34 x 44 cm" },
      { title: "Edition aus Naturstein", price: "EUR 1,150", material: "Naturstein", dimensions: "18 x 12 x 10 cm" },
      { title: "Objektset aus drei Formen", price: "EUR 980", material: "Keramik, Glasur", dimensions: "Drei Objekte" },
      { title: "Metallarbeit in kleiner Auflage", price: "EUR 690", material: "Stahl, Bronze", dimensions: "20 x 12 x 18 cm" },
      { title: "Papierrelief als Edition", price: "EUR 540", material: "Papier, Prägung", dimensions: "35 x 45 cm" },
      { title: "Keramisches Wandstück", price: "Auf Anfrage", material: "Keramik", dimensions: "28 x 8 x 36 cm" },
    ],
  },
];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const products = categorySeeds.flatMap((category) =>
  category.items.map((item, index) => {
    const status = statuses[index % statuses.length];
    const maker = `${category.makerPrefix} ${String.fromCharCode(65 + (index % 8))}`;
    const origin = `${category.originPrefix} ${String.fromCharCode(65 + (index % 8))}`;

    return {
      title: item.title,
      slug: item.slug ?? `${category.slug}-${String(index + 1).padStart(2, "0")}-${toSlug(item.title)}`,
      category: category.title,
      secondaryCategories: [] as string[],
      maker,
      type: category.type,
      price: item.price,
      status,
      availability: availabilityByStatus[status],
      description: `${category.description} ${item.title} ist als Teil einer kuratierten Auswahl für besondere Räume vorgesehen.`,
      dimensions: item.dimensions,
      material: item.material,
      origin,
      palette: palettes[index % palettes.length],
    };
  }),
);
