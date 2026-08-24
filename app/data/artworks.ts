export type Artwork = {
  title: string;
  artist: string;
  medium: string;
  year: string;
  price: string;
  palette: string;
  aspectClassName?: string;
  productSlug?: string;
  images?: { src: string; alt: string }[];
};

export const artworks: Artwork[] = [
  {
    title: "Bauernopfer",
    artist: "Sebastian Schrader",
    medium: "Öl auf Leinwand",
    year: "2010",
    price: "Auf Anfrage",
    palette: "bg-[#282427]",
    aspectClassName: "aspect-[4/3]",
    productSlug: "sebastian-schrader-bauernopfer",
    images: [
      {
        src: "/images/products/sebastian-schrader-bauernopfer-01-cover.jpg",
        alt: "Sebastian Schrader, Bauernopfer, Gesamtansicht des Gemäldes",
      },
    ],
  },
  {
    title: "Papierarbeit mit mineralischer Fläche",
    artist: "Künstlerposition A",
    medium: "Mineralpigment auf Leinen",
    year: "2026",
    price: "EUR 4,200",
    palette: "bg-[#e7e0d5]",
  },
  {
    title: "Kleine Skulptur aus Bronze",
    artist: "Künstlerposition B",
    medium: "Gegossene Bronze",
    year: "2025",
    price: "Auf Anfrage",
    palette: "bg-[#5d5247]",
  },
];
