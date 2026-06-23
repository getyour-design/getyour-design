import type { MetadataRoute } from "next";
import { products, shopCategories } from "./data/products";

const siteUrl = "https://www.getyour.design";
const lastModified = new Date("2026-06-23");

const staticRoutes = [
  "",
  "/arbeit-einreichen",
  "/art",
  "/artists",
  "/ateliers",
  "/brands",
  "/collections",
  "/contact",
  "/gallery",
  "/journal",
  "/materials",
  "/objects",
  "/sculptural-seating",
  "/shop",
  "/trade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const shopRoutes = [
    ...shopCategories.map((category) => `/shop/${category.slug}`),
    ...products.map((product) => `/shop/${product.slug}`),
  ];

  return [...staticRoutes, ...shopRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
