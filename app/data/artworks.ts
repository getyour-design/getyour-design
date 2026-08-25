export type Artwork = {
  title: string;
  artist: string;
  medium: string;
  year: string;
  price: string;
  palette: string;
  aspectClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
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
    imageWidth: 3508,
    imageHeight: 2616,
    productSlug: "sebastian-schrader-bauernopfer",
    images: [
      {
        src: "/images/products/sebastian-schrader-bauernopfer-01-cover.jpg",
        alt: "Sebastian Schrader, Bauernopfer, Gesamtansicht des Gemäldes",
      },
    ],
  },
  {
    title: "GUCKST DU",
    artist: "Christian Achenbach",
    medium: "Öl und Acryl auf Leinwand, gerahmt",
    year: "2011",
    price: "Auf Anfrage",
    palette: "bg-[#e2ddd3]",
    aspectClassName: "aspect-[184/154]",
    imageWidth: 1481,
    imageHeight: 1772,
    productSlug: "christian-achenbach-guckst-du",
    images: [
      {
        src: "/images/products/christian-achenbach-guckst-du-01-cover.jpg",
        alt: "Christian Achenbach, GUCKST DU, 2011, Öl und Acryl auf Leinwand, gerahmt",
      },
    ],
  },
];
