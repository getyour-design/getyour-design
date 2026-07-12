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
  featured?: boolean;
  status?: BrandStatus;
  localized?: Partial<Record<BrandLocale, LocalizedBrandContent>>;
};

export const brands: Brand[] = [
  {
    name: "Atelier A",
    slug: "atelier-a",
    description: "Steinbasierte Möbel und Objekte mit ruhiger, architektonischer Präsenz.",
    status: "editorial",
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
