export { navItems } from "./navigation";
export { secondaryNavItems } from "./navigation";
export { footerNavItems } from "./navigation";
export { products } from "./products";
export { artworks } from "./artworks";
export { brands } from "./brands";
export { getProductsByRoomSlug, getRoomBySlug, rooms } from "./rooms";
export { artists } from "./artists";
export { materialCards } from "./materials";
export {
  collections,
  getCollectionByKey,
  getCollectionBySlug,
  getProductsByCollectionKey,
  getProductsByCollectionSlug,
} from "./collections";
export { stories } from "./stories";

export const featuredObjects = [
  {
    title: "Konsole aus Naturstein",
    category: "Steinobjekt",
    material: "Geschliffener Travertin, geräucherte Eiche",
  },
  {
    title: "Sitzobjekt aus dunklem Holz",
    category: "Skulpturales Sitzen",
    material: "Wolle, geschwärzter Stahl",
  },
  {
    title: "Keramikobjekt mit Grifföffnung",
    category: "Sammelbares Objekt",
    material: "Handgeformte Keramik",
  },
  {
    title: "Faltobjekt aus Leinen und Holz",
    category: "Raumobjekt",
    material: "Leinen, Nussbaum, patinierte Bronze",
  },
];

export const materials = [
  "Arabescato-Marmor",
  "Geräucherter Nussbaum",
  "Wolle in Naturweiß",
  "Patinierte Bronze",
  "Brünierter Stahl",
  "Rohes Leinen",
];

export { products as newArrivals } from "./products";
