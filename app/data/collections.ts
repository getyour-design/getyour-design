import { products } from "./products";

export type CollectionLocale = "de" | "en" | "fr" | "es" | "zh" | "ar";

export type LocalizedCollectionContent = {
  title?: string;
  description?: string;
  editorialIntro?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type CollectionStatus = "active" | "draft" | "editorial";

export type Collection = {
  key: string;
  slug?: string;
  title: string;
  description: string;
  editorialIntro?: string;
  heroImage?: string;
  openGraphImage?: string;
  featured?: boolean;
  status?: CollectionStatus;
  journalSlugs?: string[];
  localized?: Partial<Record<CollectionLocale, LocalizedCollectionContent>>;
};

export const collections: Collection[] = [
  {
    key: "material-surface",
    title: "Material und Oberfläche",
    description: "Unpolierte Texturen, mineralische Töne und Objekte mit sichtbarer Materialspur.",
  },
  {
    key: "quiet-rooms",
    title: "Ruhige Räume",
    description: "Subtile Materialien, ausgewogene Proportionen und Objekte mit Zurückhaltung.",
  },
  {
    key: "collectible-design",
    title: "Collectible Design",
    description: "Limitierte Editionen und Möbel mit langfristigem Wert für kuratierte Räume.",
  },
  {
    key: "editions-artworks",
    title: "Editionen und Kunstwerke",
    description: "Arbeiten und Objekte an der Schnittstelle von Kunst, Möbel und Interior.",
  },
  {
    key: "seating-design-furniture",
    title: "Sitzobjekte und Designmöbel",
    description: "Sessel, Lounges und Sofas mit starker Silhouette und raumprägender Präsenz.",
  },
  {
    key: "natural-materials",
    title: "Natürliche Materialien",
    description: "Holz, Wolle, Stein, Leder, Keramik und Bronze mit taktiler Beständigkeit.",
  },
];

export function getCollectionByKey(key: string) {
  return collections.find((collection) => collection.key === key);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductsByCollectionKey(key: string) {
  return products.filter((product) => product.collections?.includes(key));
}

export function getProductsByCollectionSlug(slug: string) {
  const collection = getCollectionBySlug(slug);

  return collection ? getProductsByCollectionKey(collection.key) : [];
}
