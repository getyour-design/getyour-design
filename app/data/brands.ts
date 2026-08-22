import { products } from "./products";

export type BrandLocale = "de" | "en" | "fr" | "es" | "zh" | "ar";

export type LocalizedBrandContent = {
  name?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type BrandStatus = "active" | "draft" | "editorial";

export type Brand = {
  name: string;
  slug: string;
  description?: string;
  country?: string;
  website?: string;
  logo?: string;
  heroImage?: string;
  detailImage?: string;
  founderImage?: string;
  featured?: boolean;
  status?: BrandStatus;
  localized?: Partial<Record<BrandLocale, LocalizedBrandContent>>;
};

export const brands: Brand[] = [
  {
    name: "54COUTURE",
    slug: "54couture",
    description:
      "54COUTURE ist ein Berliner Label für sammelbare Arbeiten an der Schnittstelle von Kunst, Material und Raum. Möbel, Teppiche und Objekte entstehen aus Leder und ausgewählten europäischen Kuhfellen.",
    website: "https://www.54couture.com/",
    heroImage: "/images/ateliers/54couture-atelier-red-detail.jpg",
    detailImage: "/images/ateliers/54couture-atelier-object.png",
    founderImage: "/images/ateliers/54couture-marlene.jpg",
    featured: true,
    status: "active",
    localized: {
      en: {
        description:
          "54COUTURE is a Berlin label for collectible works at the intersection of art, material and space. Furniture, rugs and objects are made in leather and selected European cowhide.",
      },
    },
  },
  {
    name: "Manufaktur B",
    slug: "manufaktur-b",
    description: "Limitierte Sitzobjekte und Editionen mit skulpturalen, weichen Linien.",
    status: "editorial",
  },
  {
    name: "Textilmanufaktur C",
    slug: "textilmanufaktur-c",
    description: "Textile Objekte, Teppiche und maßgefertigte Stücke für anspruchsvolle Räume.",
    status: "editorial",
  },
  {
    name: "Keramikatelier D",
    slug: "keramikatelier-d",
    description: "Keramik, Gefäße und kleine Editionen mit handwerklicher Tiefe.",
    status: "editorial",
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function getProductsByBrandSlug(slug: string) {
  return products.filter((product) => product.brandSlug === slug);
}
