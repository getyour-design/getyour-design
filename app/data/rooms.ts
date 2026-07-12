import { products } from "./products";

export type RoomLocale = "de" | "en" | "fr" | "es" | "zh" | "ar";

export type LocalizedRoomContent = {
  title?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type RoomStatus = "active" | "draft" | "editorial";

export type Room = {
  title: string;
  slug: string;
  description?: string;
  heroImage?: string;
  featured?: boolean;
  status?: RoomStatus;
  localized?: Partial<Record<RoomLocale, LocalizedRoomContent>>;
};

export const rooms: Room[] = [
  { title: "Living Room", slug: "living-room", status: "draft" },
  { title: "Dining Room", slug: "dining-room", status: "draft" },
  { title: "Bedroom", slug: "bedroom", status: "draft" },
  { title: "Kitchen", slug: "kitchen", status: "draft" },
  { title: "Office", slug: "office", status: "draft" },
  { title: "Outdoor", slug: "outdoor", status: "draft" },
  { title: "Garden", slug: "garden", status: "draft" },
  { title: "Bath", slug: "bath", status: "draft" },
  { title: "Kids", slug: "kids", status: "draft" },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function getProductsByRoomSlug(slug: string) {
  return products.filter((product) => product.rooms?.includes(slug));
}
