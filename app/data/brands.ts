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
  featured?: boolean;
  status?: BrandStatus;
  localized?: Partial<Record<BrandLocale, LocalizedBrandContent>>;
};

export const brands: Brand[] = [
  {
    name: "54COUTURE",
    slug: "54couture",
    description:
      "54COUTURE verbindet handwerkliche Präzision mit einer expressiven Materialästhetik. Die Kollektionen umfassen Möbel, Teppiche und Objekte aus ausgewählten europäischen Kuh- und Lammfellen.",
    website: "https://www.54couture.com/",
    heroImage: "/images/ateliers/54couture-atelier-rug.jpg",
    detailImage: "/images/ateliers/54couture-atelier-object.png",
    featured: true,
    status: "active",
    localized: {
      en: {
        description:
          "54COUTURE combines artisan precision with an expressive material language. Its collections include furniture, rugs and objects in selected European cowhide and lambskin.",
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
