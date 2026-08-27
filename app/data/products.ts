export type ProductStatus =
  | "sofort-kaufen"
  | "anfragen"
  | "preis-auf-anfrage"
  | "reserviert"
  | "verkauft";

type ProductLocale = "de" | "en" | "fr" | "es" | "zh" | "ar";

type ProductImage = {
  src: string;
  alt: string;
};

const bauernopferImageSources = [
  "/images/products/sebastian-schrader-bauernopfer-01-cover.jpg",
];

function bauernopferImages(alts: string[]): ProductImage[] {
  return bauernopferImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const guckstDuImageSources = [
  "/images/products/christian-achenbach-guckst-du-01-cover.jpg",
];

function guckstDuImages(alts: string[]): ProductImage[] {
  return guckstDuImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const michaelFischerArtImageSources = [
  "/images/products/michael-fischer-art-untitled-2024-01.png",
  "/images/products/michael-fischer-art-wandstueck-wall.jpg",
];

function michaelFischerArtImages(alts: string[]): ProductImage[] {
  return michaelFischerArtImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const stefanHirsigImageSources = [
  "/images/products/stefan-hirsig-die-erklaerung-der-welt-01.png",
];

function stefanHirsigImages(alts: string[]): ProductImage[] {
  return stefanHirsigImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const silkeWeyerImageSources = [
  "/images/products/silke-weyer-paso-due-01.webp",
];

function silkeWeyerImages(alts: string[]): ProductImage[] {
  return silkeWeyerImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const toroBlancoImageSources = [
  "/images/products/silke-weyer-toro-blanco-01.webp",
];

function toroBlancoImages(alts: string[]): ProductImage[] {
  return toroBlancoImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const gudrunBrueneImageSources = ["/images/products/gudrun-bruene-bernhard-heisig-01.png"];

function gudrunBrueneImages(alts: string[]): ProductImage[] {
  return gudrunBrueneImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const cowhideSeatImageSources = [
  "/images/products/cowhide-seat-v3-01-hero-rotated.png",
  "/images/products/cowhide-seat-v3-02-lifestyle-natural.png",
  "/images/products/cowhide-seat-v2-05-top-view.png",
  "/images/products/cowhide-seat-v2-06-material-detail.png",
  "/images/products/cowhide-seat-v3-07-long-hair-edge.png",
  "/images/products/cowhide-seat-v2-08-room-scale.png",
  "/images/products/cowhide-seat-v7-10-colour-palette.png",
  "/images/products/cowhide-seat-v8-11-detail.jpeg",
];

function cowhideSeatImages(alts: string[]): ProductImage[] {
  return cowhideSeatImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const up7ImageSources = [
  "/images/products/gaetano-pesce-up7-01-cover.png",
  "/images/products/gaetano-pesce-up7-02-detail.png",
];

function up7Images(alts: string[]): ProductImage[] {
  return up7ImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const apCollectionImageSources = [
  "/images/products/ap-collection-animal-chair-01.png",
];

function apCollectionImages(alts: string[]): ProductImage[] {
  return apCollectionImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

const rugImageSources = [
  "/images/products/54couture-rug-01-loft.jpeg",
  "/images/products/54couture-rug-02-red-texture.jpg",
  "/images/products/54couture-rug-03-edge-detail.png",
  "/images/products/54couture-rug-04-red-texture.jpg",
  "/images/products/54couture-rug-05-city-detail.jpg",
  "/images/products/54couture-rug-06-bordeaux-blue-detail.png",
  "/images/products/cowhide-seat-v7-10-colour-palette.png",
];

function rugImages(alts: string[]): ProductImage[] {
  return rugImageSources.map((src, index) => ({ src, alt: alts[index] }));
}

type ProductType =
  | "affiliate"
  | "physical"
  | "manufacturer"
  | "brand"
  | "artwork"
  | "edition"
  | "collectible"
  | "service";

type CommerceMode = "direct" | "affiliate" | "inquiry";

type InventoryMode = "tracked" | "untracked" | "made-to-order" | "single-piece";

type ShopCategoryStatus = "active" | "draft";

type LocalizedShopCategoryContent = {
  title?: string;
  slug?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  emptyStateTitle?: string;
  emptyStateText?: string;
};

export type ShopCategory = {
  key?: string;
  title: string;
  slug: string;
  label?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  emptyStateTitle?: string;
  emptyStateText?: string;
  heroImage?: string;
  openGraphImage?: string;
  featured?: boolean;
  status?: ShopCategoryStatus;
  commerceVisible?: boolean;
  navigationVisible?: boolean;
  sortOrder?: number;
  parentKey?: string;
  localized?: Partial<Record<ProductLocale, LocalizedShopCategoryContent>>;
};

type LocalizedProductContent = {
  title: string;
  cardTitle: string;
  priceNote: string;
  shortDescription: string;
  longDescription: string[];
  dimensionsDetails: string[];
  materialDetails: string[];
  origin: string;
  uniqueNote: string;
  artistBio?: string;
  ctaLabel: string;
  images: ProductImage[];
  metaTitle: string;
  metaDescription: string;
};

type ProductSeed = {
  title: string;
  cardTitle?: string;
  maker?: string;
  pathMode?: "flat" | "nested";
  price: string;
  priceNote?: string;
  material: string;
  materialDetails?: string[];
  dimensions: string;
  dimensionsDetails?: string[];
  slug?: string;
  status?: ProductStatus;
  availability?: string;
  description?: string;
  longDescription?: string[];
  origin?: string;
  uniqueNote?: string;
  artistBio?: string;
  ctaLabel?: string;
  images?: ProductImage[];
  metaTitle?: string;
  metaDescription?: string;
  brand?: string;
  brandSlug?: string;
  rooms?: string[];
  collections?: string[];
  affiliateLink?: string;
  affiliatePartner?: string;
  affiliateCategory?: string;
  affiliateDisclosure?: string;
  affiliatePriceLabel?: string;
  affiliateAvailabilityLabel?: string;
  affiliateLastCheckedAt?: string;
  affiliateImageSource?: string;
  affiliateDataSource?: string;
  affiliateNetwork?: string;
  country?: string;
  style?: string[];
  relatedProducts?: string[];
  externalId?: string;
  sourceSystem?: string;
  sourceUrl?: string;
  productType?: ProductType;
  commerceMode?: CommerceMode;
  shippingProfile?: string;
  taxCode?: string;
  inventoryMode?: InventoryMode;
  localized?: Partial<Record<ProductLocale, LocalizedProductContent>>;
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

export const shopCategories: ShopCategory[] = [
  { key: "moebel", title: "Möbel", slug: "moebel", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 10 },
  { key: "leuchten", title: "Leuchten", slug: "leuchten", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 20 },
  { key: "kunst", title: "Kunst", slug: "kunst", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 140 },
  { key: "teppiche", title: "Teppiche", slug: "teppiche", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 30 },
  { key: "objekte", title: "Objekte", slug: "objekte", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 50 },
  { key: "tabletop", title: "Tabletop", label: "Accessoires", slug: "tabletop", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 60 },
  { key: "collectible-design", title: "Collectible Design", slug: "collectible-design", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 150 },
  { key: "editionen", title: "Editionen", slug: "editionen", status: "active", commerceVisible: true, navigationVisible: true, sortOrder: 160 },
];

export const commerceExpansionShopCategories: ShopCategory[] = [
  { key: "decoration", title: "Decoration", slug: "decoration", parentKey: "objekte", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 40 },
  { key: "tableware", title: "Tableware", slug: "tableware", parentKey: "tabletop", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 70 },
  { key: "glassware", title: "Glassware", slug: "glassware", parentKey: "tabletop", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 80 },
  { key: "kitchen", title: "Kitchen", slug: "kitchen", parentKey: "tabletop", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 90 },
  { key: "textiles", title: "Textiles", slug: "textiles", parentKey: "teppiche", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 100 },
  { key: "outdoor", title: "Outdoor", slug: "outdoor", parentKey: "moebel", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 110 },
  { key: "bath", title: "Bath", slug: "bath", parentKey: "tabletop", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 120 },
  { key: "kids", title: "Kids", slug: "kids", parentKey: "moebel", status: "active", commerceVisible: true, navigationVisible: false, sortOrder: 130 },
];

export const draftShopCategories = commerceExpansionShopCategories;

export const allShopCategories: ShopCategory[] = [...shopCategories, ...commerceExpansionShopCategories];

export const visibleShopCategories = allShopCategories.filter(
  (category) => category.status !== "draft" && category.commerceVisible !== false,
).sort((firstCategory, secondCategory) => (firstCategory.sortOrder ?? 0) - (secondCategory.sortOrder ?? 0));

export const heroShopCategories = shopCategories.filter(
  (category) => category.status !== "draft" && category.commerceVisible !== false,
).sort((firstCategory, secondCategory) => (firstCategory.sortOrder ?? 0) - (secondCategory.sortOrder ?? 0));

export const primaryShopCategories = heroShopCategories;

export const subShopCategories = commerceExpansionShopCategories.filter(
  (category) => category.status !== "draft" && category.commerceVisible !== false,
).sort((firstCategory, secondCategory) => (firstCategory.sortOrder ?? 0) - (secondCategory.sortOrder ?? 0));

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
      {
        title: "UP7 – IL PIEDE",
        cardTitle: "UP7 – Gaetano Pesce",
        maker: "Gaetano Pesce",
        brand: "B&B Italia",
        pathMode: "nested",
        slug: "gaetano-pesce-up7-il-piede",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Polyurethan-Schaumstoff",
        materialDetails: ["Polyurethan-Schaumstoff", "Skulpturale Sitzform", "Entwurf von 1969"],
        dimensions: "Maße auf Anfrage",
        dimensionsDetails: ["Maße auf Anfrage"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description:
          "UP7 – Il Piede von Gaetano Pesce ist ein ikonisches Sitzobjekt in Form eines überdimensionierten Fußes – zwischen Möbel, Skulptur und Designgeschichte.",
        longDescription: [
          "Der Entwurf aus dem Jahr 1969 übersetzt den menschlichen Fuß in eine weiche, körperhafte Sitzform. Seine unverwechselbare Silhouette macht UP7 zu einem eigenständigen Objekt im Raum.",
          "Als Teil der UP-Serie steht das Objekt exemplarisch für Gaetano Pesces spielerischen, emotionalen Umgang mit Form, Maßstab und Material.",
        ],
        origin: "Italien",
        uniqueNote:
          "Die gezeigte Abbildung dient als Referenz für Form und Wirkung. Ausführung, Zustand und Verfügbarkeit werden individuell bestätigt.",
        artistBio:
          "Gaetano Pesce (1939–2024) war ein italienischer Architekt, Designer und Künstler. Seine Arbeiten verbinden experimentelle Materialien mit expressiven, erzählerischen Formen.",
        ctaLabel: "Preis anfragen",
        images: up7Images([
          "UP7 Il Piede von Gaetano Pesce als schwarzes skulpturales Sitzobjekt im Garten",
          "Detailansicht der Fußform von UP7 Il Piede von Gaetano Pesce im Garten",
        ]),
        metaTitle: "UP7 – Il Piede von Gaetano Pesce",
        metaDescription:
          "UP7 – Il Piede von Gaetano Pesce: ikonisches Sitzobjekt zwischen Skulptur, Möbel und Designgeschichte. Preis auf Anfrage.",
        productType: "collectible",
        commerceMode: "inquiry",
        inventoryMode: "single-piece",
        localized: {
          en: {
            title: "UP7 – IL PIEDE",
            cardTitle: "UP7 – Gaetano Pesce",
            priceNote: "Price and availability on request.",
            shortDescription: "UP7 – Il Piede by Gaetano Pesce is an iconic seating object in the form of an oversized foot – between furniture, sculpture and design history.",
            longDescription: ["The 1969 design translates the human foot into a soft, corporeal seating form. Its unmistakable silhouette makes UP7 an autonomous presence within a room.", "As part of the UP series, the object exemplifies Gaetano Pesce's playful and emotional approach to form, scale and material."],
            dimensionsDetails: ["Dimensions on request"],
            materialDetails: ["Polyurethane foam", "Sculptural seating form", "Designed in 1969"],
            origin: "Italy",
            uniqueNote: "The image shown serves as a reference for form and presence. Execution, condition and availability are confirmed individually.",
            ctaLabel: "Request price",
            images: up7Images([
              "UP7 Il Piede by Gaetano Pesce, a black sculptural seating object in a garden",
              "Detail view of the foot-shaped UP7 Il Piede by Gaetano Pesce in a garden",
            ]),
            metaTitle: "UP7 – Il Piede by Gaetano Pesce",
            metaDescription: "UP7 – Il Piede by Gaetano Pesce: an iconic seating object between sculpture, furniture and design history. Price on request.",
          },
          fr: {
            title: "UP7 – IL PIEDE",
            cardTitle: "UP7 – Gaetano Pesce",
            priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "UP7 – Il Piede de Gaetano Pesce est une assise iconique en forme de pied surdimensionné, entre meuble, sculpture et histoire du design.",
            longDescription: ["Le dessin de 1969 traduit le pied humain en une forme d'assise souple et corporelle. Sa silhouette singulière fait de UP7 une présence autonome dans l'espace.", "Comme élément de la série UP, l'objet illustre l'approche ludique et émotionnelle de Gaetano Pesce envers la forme, l'échelle et la matière."],
            dimensionsDetails: ["Dimensions sur demande"],
            materialDetails: ["Mousse de polyuréthane", "Forme d'assise sculpturale", "Dessiné en 1969"],
            origin: "Italie",
            uniqueNote: "L'image présentée sert de référence pour la forme et la présence. L'exécution, l'état et la disponibilité sont confirmés individuellement.",
            ctaLabel: "Demander le prix",
            images: up7Images([
              "UP7 Il Piede de Gaetano Pesce, assise sculpturale noire dans un jardin",
              "Vue détaillée de la forme de pied de UP7 Il Piede de Gaetano Pesce dans un jardin",
            ]),
            metaTitle: "UP7 – Il Piede de Gaetano Pesce",
            metaDescription: "UP7 – Il Piede de Gaetano Pesce : assise iconique entre sculpture, mobilier et histoire du design. Prix sur demande.",
          },
          es: {
            title: "UP7 – IL PIEDE",
            cardTitle: "UP7 – Gaetano Pesce",
            priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "UP7 – Il Piede de Gaetano Pesce es un icónico objeto de asiento con forma de pie sobredimensionado, entre mueble, escultura e historia del diseño.",
            longDescription: ["El diseño de 1969 traduce el pie humano en una forma de asiento suave y corpórea. Su inconfundible silueta convierte a UP7 en una presencia autónoma en el espacio.", "Como parte de la serie UP, el objeto ejemplifica la aproximación lúdica y emocional de Gaetano Pesce a la forma, la escala y el material."],
            dimensionsDetails: ["Dimensiones bajo consulta"],
            materialDetails: ["Espuma de poliuretano", "Forma de asiento escultórica", "Diseñado en 1969"],
            origin: "Italia",
            uniqueNote: "La imagen mostrada sirve de referencia para la forma y la presencia. La ejecución, el estado y la disponibilidad se confirman individualmente.",
            ctaLabel: "Consultar precio",
            images: up7Images([
              "UP7 Il Piede de Gaetano Pesce, objeto de asiento escultórico negro en un jardín",
              "Vista detallada de la forma de pie de UP7 Il Piede de Gaetano Pesce en un jardín",
            ]),
            metaTitle: "UP7 – Il Piede de Gaetano Pesce",
            metaDescription: "UP7 – Il Piede de Gaetano Pesce: objeto de asiento icónico entre escultura, mobiliario e historia del diseño. Precio bajo consulta.",
          },
          zh: {
            title: "UP7 – IL PIEDE",
            cardTitle: "UP7 – Gaetano Pesce",
            priceNote: "价格与供应情况请咨询。",
            shortDescription: "Gaetano Pesce 设计的 UP7 – Il Piede 是一件以放大脚部为造型的标志性座椅，介于家具、雕塑与设计史之间。",
            longDescription: ["这件1969年的设计将人的脚转化为柔软而富有身体感的座椅形态。其鲜明轮廓使 UP7 成为空间中独立而醒目的存在。", "作为 UP 系列的一部分，这件作品体现了 Gaetano Pesce 对形式、尺度与材质的趣味性和情感化处理。"],
            dimensionsDetails: ["尺寸请咨询"],
            materialDetails: ["聚氨酯泡沫", "雕塑感座椅形态", "设计于1969年"],
            origin: "意大利",
            uniqueNote: "展示图片仅作为形态与空间感的参考。具体版本、状态与供应情况将单独确认。",
            ctaLabel: "咨询价格",
            images: up7Images([
              "Gaetano Pesce 设计的 UP7 Il Piede，花园中的黑色雕塑感座椅",
              "花园中 Gaetano Pesce 设计的 UP7 Il Piede 脚部造型细节",
            ]),
            metaTitle: "Gaetano Pesce 设计的 UP7 – Il Piede",
            metaDescription: "Gaetano Pesce 设计的 UP7 – Il Piede：一件介于雕塑、家具与设计史之间的标志性座椅。价格请咨询。",
          },
          ar: {
            title: "UP7 – IL PIEDE",
            cardTitle: "UP7 – Gaetano Pesce",
            priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "UP7 – Il Piede من تصميم غايتانو بيتشي هو مقعد أيقوني على هيئة قدم كبيرة، بين الأثاث والنحت وتاريخ التصميم.",
            longDescription: ["يحوّل تصميم عام 1969 القدم البشرية إلى هيئة جلوس ناعمة وجسدية. ويجعل شكله المميز من UP7 حضوراً مستقلاً داخل المكان.", "وبوصفه جزءاً من سلسلة UP، يجسد هذا العمل مقاربة غايتانو بيتشي المرحة والعاطفية للشكل والمقياس والمادة."],
            dimensionsDetails: ["الأبعاد عند الطلب"],
            materialDetails: ["رغوة البولي يوريثان", "هيئة جلوس نحتية", "صُمم عام 1969"],
            origin: "إيطاليا",
            uniqueNote: "الصورة المعروضة مرجع للشكل والحضور. يتم تأكيد النسخة والحالة والتوفر بشكل فردي.",
            ctaLabel: "طلب السعر",
            images: up7Images([
              "UP7 Il Piede من تصميم غايتانو بيتشي، مقعد نحتي أسود في حديقة",
              "لقطة تفصيلية لشكل القدم في UP7 Il Piede من تصميم غايتانو بيتشي في حديقة",
            ]),
            metaTitle: "UP7 – Il Piede من تصميم غايتانو بيتشي",
            metaDescription: "UP7 – Il Piede من تصميم غايتانو بيتشي: مقعد أيقوني بين النحت والأثاث وتاريخ التصميم. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Animal Chair",
        cardTitle: "Animal Chair",
        maker: "AP Collection",
        brand: "AP Collection",
        pathMode: "nested",
        slug: "ap-collection-animal-chair",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Textile Figuren, Kunstfell, Polsterung, lackierter Stahlfuß",
        materialDetails: ["Individuell ausgewählte textile Figuren", "Polsterung", "Lackierter Stahlfuß"],
        dimensions: "Maße je nach Ausführung",
        dimensionsDetails: ["Maße je nach Ausführung"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description:
          "Ein expressives Sitzobjekt von AP Collection, als eigenständiges Stück aus individuell zusammengestellten textilen Figuren gefertigt.",
        longDescription: [
          "Die Animal Chairs von AP Collection verbinden die vertraute Silhouette eines drehbaren Sessels mit einer collageartigen Oberfläche aus textilen Figuren. Jede Zusammenstellung verleiht dem Objekt einen eigenen Charakter.",
          "Ausführung, Farbwelt und Zusammenstellung können auf Anfrage individuell abgestimmt werden. So entsteht ein Einzelstück, das auf den jeweiligen Raum und seine Atmosphäre reagiert.",
        ],
        origin: "Auf Anfrage",
        uniqueNote:
          "Jeder Animal Chair ist ein Einzelstück. Die gezeigte Ausführung dient als Referenz; Materialmix, Figuren und Farbwelt können individuell variieren.",
        artistBio:
          "AP Collection entwickelt expressive Sitzobjekte an der Schnittstelle von Komfort, Humor und skulpturaler Präsenz.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: apCollectionImages([
          "Animal Chairs von AP Collection als textile Sitzobjekte in einem hellen Interieur",
        ]),
        metaTitle: "Animal Chair von AP Collection",
        metaDescription:
          "Animal Chair von AP Collection: ein individuelles textiles Sitzobjekt, als Einzelstück und in verschiedenen Varianten auf Anfrage erhältlich.",
        productType: "collectible",
        commerceMode: "inquiry",
        inventoryMode: "single-piece",
        localized: {
          en: {
            title: "Animal Chair",
            cardTitle: "Animal Chair",
            priceNote: "Price and availability on request.",
            shortDescription: "An expressive seating object by AP Collection, made as an individual piece from a curated composition of textile figures.",
            longDescription: [
              "AP Collection's Animal Chairs combine the familiar silhouette of a swivel chair with a collage-like surface of textile figures. Each composition gives the object its own distinct character.",
              "Finish, colour palette and composition can be tailored on request. The result is a one-of-a-kind piece that responds to its particular space and atmosphere.",
            ],
            dimensionsDetails: ["Dimensions vary by configuration"],
            materialDetails: ["Individually selected textile figures", "Upholstery", "Lacquered steel base"],
            origin: "On request",
            uniqueNote: "Each Animal Chair is one of a kind. The version shown is a reference; the material mix, figures and colour palette can vary individually.",
            artistBio: "AP Collection creates expressive seating objects at the intersection of comfort, humour and sculptural presence.",
            ctaLabel: "Request availability",
            images: apCollectionImages(["Animal Chairs by AP Collection as textile seating objects in a bright interior"]),
            metaTitle: "Animal Chair by AP Collection",
            metaDescription: "Animal Chair by AP Collection: an individual textile seating object, available as a one-of-a-kind piece in different variations on request.",
          },
          fr: {
            title: "Animal Chair",
            cardTitle: "Animal Chair",
            priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "Une assise expressive d’AP Collection, réalisée comme pièce unique à partir d’une composition de figures textiles.",
            longDescription: [
              "Les Animal Chairs d’AP Collection associent la silhouette familière d’un fauteuil pivotant à une surface en collage de figures textiles. Chaque composition donne à l’objet son propre caractère.",
              "La finition, la palette de couleurs et la composition peuvent être définies sur demande. Il en résulte une pièce unique, pensée pour son espace et son atmosphère.",
            ],
            dimensionsDetails: ["Dimensions selon la configuration"],
            materialDetails: ["Figures textiles sélectionnées individuellement", "Rembourrage", "Piètement en acier laqué"],
            origin: "Sur demande",
            uniqueNote: "Chaque Animal Chair est une pièce unique. La version présentée sert de référence ; les matériaux, figures et couleurs peuvent varier individuellement.",
            artistBio: "AP Collection développe des assises expressives à la croisée du confort, de l’humour et de la présence sculpturale.",
            ctaLabel: "Demander la disponibilité",
            images: apCollectionImages(["Animal Chairs d’AP Collection, assises textiles dans un intérieur lumineux"]),
            metaTitle: "Animal Chair d’AP Collection",
            metaDescription: "Animal Chair d’AP Collection : une assise textile individuelle, disponible comme pièce unique dans différentes variations sur demande.",
          },
          es: {
            title: "Animal Chair",
            cardTitle: "Animal Chair",
            priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "Un asiento expresivo de AP Collection, creado como pieza individual a partir de una composición de figuras textiles.",
            longDescription: [
              "Las Animal Chairs de AP Collection combinan la silueta familiar de un sillón giratorio con una superficie tipo collage de figuras textiles. Cada composición confiere al objeto un carácter propio.",
              "El acabado, la paleta cromática y la composición se pueden definir bajo consulta. El resultado es una pieza única que responde a su espacio y atmósfera.",
            ],
            dimensionsDetails: ["Las dimensiones varían según la configuración"],
            materialDetails: ["Figuras textiles seleccionadas individualmente", "Tapizado", "Base de acero lacado"],
            origin: "Bajo consulta",
            uniqueNote: "Cada Animal Chair es una pieza única. La versión mostrada es una referencia; la mezcla de materiales, las figuras y la paleta de color pueden variar individualmente.",
            artistBio: "AP Collection crea asientos expresivos en la intersección entre confort, humor y presencia escultórica.",
            ctaLabel: "Solicitar disponibilidad",
            images: apCollectionImages(["Animal Chairs de AP Collection como asientos textiles en un interior luminoso"]),
            metaTitle: "Animal Chair de AP Collection",
            metaDescription: "Animal Chair de AP Collection: un asiento textil individual, disponible como pieza única en diferentes variaciones bajo consulta.",
          },
          zh: {
            title: "动物椅",
            cardTitle: "动物椅",
            priceNote: "价格与供应情况请咨询。",
            shortDescription: "AP Collection 的一件富有表现力的座椅作品，由精心组合的纺织玩偶构成独一无二的形式。",
            longDescription: [
              "AP Collection 的 Animal Chairs 将旋转椅熟悉的轮廓与拼贴般的纺织玩偶表面相结合。每一种组合都赋予作品独特的个性。",
              "表面处理、配色与组合方式均可按需定制，最终形成一件回应具体空间与氛围的独一无二作品。",
            ],
            dimensionsDetails: ["尺寸视具体配置而定"],
            materialDetails: ["个别挑选的纺织玩偶", "软垫", "烤漆钢制底座"],
            origin: "请咨询",
            uniqueNote: "每一把 Animal Chair 都是独一无二的作品。展示版本仅供参考；材料组合、玩偶与配色均可个别变化。",
            artistBio: "AP Collection 创作兼具舒适、幽默与雕塑感的表现性座椅。",
            ctaLabel: "咨询供应情况",
            images: apCollectionImages(["AP Collection 的 Animal Chairs，明亮室内的纺织座椅作品"]),
            metaTitle: "AP Collection 动物椅",
            metaDescription: "AP Collection 动物椅：可按需提供不同变体的独一无二纺织座椅作品。",
          },
          ar: {
            title: "كرسي الحيوانات",
            cardTitle: "كرسي الحيوانات",
            priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "قطعة جلوس معبّرة من AP Collection، تُنفذ كعمل فردي من تكوين مختار من الشخصيات النسيجية.",
            longDescription: [
              "تجمع Animal Chairs من AP Collection بين هيئة كرسي دوار مألوفة وسطح يشبه الكولاج من شخصيات نسيجية. ويمنح كل تكوين القطعة طابعها الخاص.",
              "يمكن تنسيق التشطيب ولوحة الألوان والتكوين عند الطلب. والنتيجة قطعة فريدة تستجيب لمساحتها وأجوائها الخاصة.",
            ],
            dimensionsDetails: ["تختلف الأبعاد بحسب التكوين"],
            materialDetails: ["شخصيات نسيجية مختارة فردياً", "تنجيد", "قاعدة فولاذية مطلية"],
            origin: "عند الطلب",
            uniqueNote: "كل Animal Chair قطعة فريدة. النسخة المعروضة مرجع فقط؛ ويمكن أن يختلف مزيج المواد والشخصيات ولوحة الألوان بشكل فردي.",
            artistBio: "تبتكر AP Collection قطع جلوس معبّرة عند تقاطع الراحة والفكاهة والحضور النحتي.",
            ctaLabel: "طلب التوفر",
            images: apCollectionImages(["Animal Chairs من AP Collection كقطع جلوس نسيجية في داخل مشرق"]),
            metaTitle: "Animal Chair من AP Collection",
            metaDescription: "Animal Chair من AP Collection: قطعة جلوس نسيجية فردية متاحة كعمل فريد وبنسخ مختلفة عند الطلب.",
          },
        },
      },
      {
        title: "Fell-Pouf",
        cardTitle: "Fell-Pouf",
        maker: "54COUTURE",
        brand: "54COUTURE",
        brandSlug: "54couture",
        pathMode: "nested",
        slug: "sitzobjekt-kuhfell",
        price: "Ab 7.200 €",
        priceNote: "inkl. gesetzlicher Umsatzsteuer, zzgl. Versandkosten",
        material: "Echtes europäisches Kuhfell, hochwertiger Polsterkern",
        materialDetails: [
          "Echtes europäisches Kuhfell",
          "Hochwertiger Polsterkern",
          "Handgefertigt in Europa",
        ],
        dimensions: "Durchmesser 126 cm, Höhe 30 cm",
        dimensionsDetails: ["Durchmesser: 126 cm", "Höhe: 30 cm"],
        status: "anfragen",
        availability: "Auf Anfrage verfügbar",
        description:
          "Ein skulpturales Sitzobjekt aus sorgfältig ausgewähltem europäischem Kuhfell. Die niedrige, kreisrunde Form lässt Material, Farbe und Fellstruktur in den Vordergrund treten.",
        longDescription: [
          "Das Sitzobjekt wird aus ausgewähltem europäischem Kuhfell gefertigt und von Hand verarbeitet.",
          "Seine niedrige, kreisrunde Form wirkt zugleich ruhig und präsent. Die natürliche Zeichnung des Fells bestimmt den Charakter jedes einzelnen Stücks.",
          "Mit einem Durchmesser von 126 Zentimetern ist das Objekt als großzügige Sitzfläche, Mittelpunkt eines Raumes oder frei stehendes Möbel einsetzbar.",
          "Das Sitzobjekt ist auf Anfrage in weiteren Farbvarianten erhältlich. Farbe, Zeichnung und Fellverlauf werden vor der Fertigung individuell abgestimmt.",
        ],
        origin: "Handgefertigt in Europa",
        uniqueNote:
          "Weitere Farbvarianten sind auf Anfrage erhältlich. Farbe, Zeichnung und Fellverlauf werden individuell abgestimmt; die gezeigten Bilder dienen als Referenz für Form und Materialwirkung.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: cowhideSeatImages([
          "Gelbes kreisrundes Sitzobjekt aus europäischem Kuhfell in hellem Raum",
          "Gelbes Sitzobjekt aus europäischem Kuhfell mit sichtbarer Fellstruktur",
          "Gelber Hocker aus europäischem Kuhfell in Frontansicht im Garten",
          "Detailansicht der Felloberfläche des gelben Hockers im Garten",
          "Profilansicht des gelben Hockers aus europäischem Kuhfell im Garten",
          "Niedrige Perspektive auf den gelben Hocker aus europäischem Kuhfell",
          "Farbpalette mit verschiedenen Ausführungen aus europäischem Kuhfell",
          "Detailansicht des gelben Sitzobjekts aus europäischem Kuhfell",
        ]),
        metaTitle: "Sitzobjekt aus europäischem Kuhfell",
        metaDescription:
          "Kreisrundes Sitzobjekt aus europäischem Kuhfell, handgefertigt in Europa, 126 cm Durchmesser und 30 cm Höhe.",
        localized: {
          en: {
            title: "Cowhide Pouf",
            cardTitle: "Cowhide Pouf",
            priceNote: "Including statutory VAT, excluding shipping.",
            shortDescription:
              "A sculptural seating object made from carefully selected European cowhide. Its low circular form brings the material, colour and natural texture into focus.",
            longDescription: [
              "The seating object is made from selected European cowhide and finished by hand.",
              "Its low circular form is quiet yet visually present. The natural markings of the hide define the character of each individual piece.",
              "With a diameter of 126 centimetres, it can be used as a generous seat, a central element within a room or a freestanding furniture object.",
              "The seating object is available on request in additional colourways. Colour, markings and hair direction are agreed individually before production.",
            ],
            dimensionsDetails: ["Diameter: 126 cm", "Height: 30 cm"],
            materialDetails: [
              "Genuine European cowhide",
              "High-quality upholstery core",
              "Handcrafted in Europe",
            ],
            origin: "Handcrafted in Europe",
            uniqueNote:
              "Additional colourways are available on request. Colour, markings and hair direction are agreed individually; the images shown serve as a reference for form and material effect.",
            ctaLabel: "Request availability",
            images: cowhideSeatImages([
              "Yellow circular seating object in European cowhide in a bright room",
              "Yellow European cowhide seating object with visible hair texture",
              "Yellow European cowhide pouf in a frontal garden view",
              "Detail of the yellow cowhide pouf surface in the garden",
              "Profile view of the yellow European cowhide pouf in the garden",
              "Low-angle view of the yellow European cowhide pouf",
              "Colour palette with various European cowhide finishes",
              "Detail view of the yellow European cowhide seating object",
            ]),
            metaTitle: "Sculptural Seat in European Cowhide",
            metaDescription:
              "Circular seating object in European cowhide, handcrafted in Europe, 126 cm in diameter and 30 cm high.",
          },
          fr: {
            title: "Pouf en peau de vache",
            cardTitle: "Pouf en peau de vache",
            priceNote: "TVA légale incluse, frais de livraison en supplément.",
            shortDescription:
              "Une assise sculpturale réalisée en peau de vache européenne soigneusement sélectionnée. Sa forme basse et circulaire met la matière, la couleur et la texture naturelle au premier plan.",
            longDescription: [
              "L'assise est réalisée en peau de vache européenne sélectionnée et finie à la main.",
              "Sa forme basse et circulaire est à la fois calme et présente. Les marques naturelles de la peau déterminent le caractère de chaque pièce.",
              "Avec un diamètre de 126 centimètres, elle peut servir d'assise généreuse, d'élément central dans une pièce ou de meuble indépendant.",
              "L'assise est disponible sur demande dans d'autres coloris. La couleur, le dessin et le sens du poil sont définis individuellement avant fabrication.",
            ],
            dimensionsDetails: ["Diamètre : 126 cm", "Hauteur : 30 cm"],
            materialDetails: [
              "Peau de vache européenne véritable",
              "Noyau de rembourrage de haute qualité",
              "Fabriqué à la main en Europe",
            ],
            origin: "Fabriqué à la main en Europe",
            uniqueNote:
              "D'autres coloris sont disponibles sur demande. La couleur, le dessin et le sens du poil sont définis individuellement ; les images présentées servent de référence pour la forme et l'effet de matière.",
            ctaLabel: "Demander la disponibilité",
            images: cowhideSeatImages([
              "Assise circulaire jaune en peau de vache européenne dans un espace clair",
              "Assise jaune en peau de vache européenne avec texture du poil visible",
              "Pouf jaune en peau de vache européenne, vue de face au jardin",
              "Détail de la surface du pouf jaune au jardin",
              "Vue de profil du pouf jaune en peau de vache européenne au jardin",
              "Vue en contre-plongée du pouf jaune en peau de vache européenne",
              "Palette de couleurs avec différentes finitions en peau de vache européenne",
              "Vue détaillée de l'assise jaune en peau de vache européenne",
            ]),
            metaTitle: "Assise sculpturale en peau de vache européenne",
            metaDescription:
              "Assise circulaire en peau de vache européenne, fabriquée à la main en Europe, 126 cm de diamètre et 30 cm de hauteur.",
          },
          es: {
            title: "Pouf en piel de vaca",
            cardTitle: "Pouf en piel de vaca",
            priceNote: "IVA legal incluido, gastos de envío no incluidos.",
            shortDescription:
              "Un asiento escultórico realizado en piel de vaca europea cuidadosamente seleccionada. Su forma baja y circular sitúa el material, el color y la textura natural en primer plano.",
            longDescription: [
              "El asiento se realiza en piel de vaca europea seleccionada y se acaba a mano.",
              "Su forma baja y circular resulta serena y visualmente presente. Las marcas naturales de la piel definen el carácter de cada pieza.",
              "Con un diámetro de 126 centímetros, puede utilizarse como asiento amplio, elemento central de una estancia o mueble independiente.",
              "El asiento está disponible bajo pedido en otros colores. El color, el dibujo y la dirección del pelo se definen individualmente antes de la fabricación.",
            ],
            dimensionsDetails: ["Diámetro: 126 cm", "Altura: 30 cm"],
            materialDetails: [
              "Piel de vaca europea auténtica",
              "Núcleo de tapicería de alta calidad",
              "Hecho a mano en Europa",
            ],
            origin: "Hecho a mano en Europa",
            uniqueNote:
              "Hay otros colores disponibles bajo pedido. El color, el dibujo y la dirección del pelo se definen individualmente; las imágenes mostradas sirven como referencia de forma y efecto material.",
            ctaLabel: "Consultar disponibilidad",
            images: cowhideSeatImages([
              "Asiento circular amarillo en piel de vaca europea en un espacio luminoso",
              "Asiento amarillo en piel de vaca europea con textura visible",
              "Puf amarillo en piel de vaca europea, vista frontal en el jardín",
              "Detalle de la superficie del puf amarillo en el jardín",
              "Vista de perfil del puf amarillo en piel de vaca europea en el jardín",
              "Vista en ángulo bajo del puf amarillo en piel de vaca europea",
              "Paleta de colores con distintos acabados en piel de vaca europea",
              "Detalle del asiento amarillo de piel de vaca europea",
            ]),
            metaTitle: "Asiento escultórico en piel de vaca europea",
            metaDescription:
              "Asiento circular en piel de vaca europea, hecho a mano en Europa, 126 cm de diámetro y 30 cm de altura.",
          },
          zh: {
            title: "牛皮矮凳",
            cardTitle: "牛皮矮凳",
            priceNote: "含法定增值税，运费另计。",
            shortDescription:
              "一件采用严选欧洲牛皮制成的雕塑感座椅。低矮的圆形结构让材质、色彩与天然毛面纹理成为视觉重点。",
            longDescription: [
              "这件座椅采用严选欧洲牛皮制成，并以手工完成。",
              "低矮的圆形形体安静而具有存在感。牛皮的天然纹理决定了每一件作品的性格。",
              "直径 126 厘米的尺度使其可作为宽大的坐面、空间中心或独立家具使用。",
              "该座椅作品可按需提供其他颜色。颜色、纹理与毛流方向均在制作前单独确认。",
            ],
            dimensionsDetails: ["直径：126 厘米", "高度：30 厘米"],
            materialDetails: ["真正的欧洲牛皮", "高品质软包内芯", "欧洲手工制作"],
            origin: "欧洲手工制作",
            uniqueNote:
              "可按需提供其他颜色。颜色、纹理与毛流方向均单独确认；所示图片用于说明形态与材质效果。",
            ctaLabel: "咨询库存",
            images: cowhideSeatImages([
              "明亮空间中的黄色圆形欧洲牛皮座椅",
              "可见毛面纹理的黄色欧洲牛皮座椅",
              "花园中黄色欧洲牛皮座椅的正面视角",
              "花园中黄色牛皮座椅表面细节",
              "花园中黄色欧洲牛皮座椅的侧面轮廓",
              "低角度拍摄的黄色欧洲牛皮座椅",
              "展示多种欧洲牛皮饰面的色彩样本",
              "黄色欧洲牛皮座椅的细节视图",
            ]),
            metaTitle: "欧洲牛皮雕塑感座椅",
            metaDescription:
              "欧洲手工制作的圆形欧洲牛皮座椅，直径 126 厘米，高 30 厘米。",
          },
          ar: {
            title: "بوف من جلد البقر",
            cardTitle: "بوف من جلد البقر",
            priceNote: "شامل ضريبة القيمة المضافة القانونية، ولا يشمل تكاليف الشحن.",
            shortDescription:
              "مقعد نحتي مصنوع من جلد بقر أوروبي مختار بعناية. يبرز شكله الدائري المنخفض المادة واللون والملمس الطبيعي للجلد.",
            longDescription: [
              "يصنع المقعد من جلد بقر أوروبي مختار وينهى يدويا.",
              "يجمع شكله الدائري المنخفض بين الهدوء والحضور البصري. تحدد العلامات الطبيعية في الجلد طابع كل قطعة.",
              "بقطر يبلغ 126 سم، يمكن استخدامه كمقعد واسع أو كعنصر مركزي في الغرفة أو كقطعة أثاث قائمة بذاتها.",
              "يتوفر مقعد الجلوس عند الطلب بألوان إضافية. يتم تحديد اللون والرسم الطبيعي واتجاه الشعر بشكل فردي قبل التصنيع.",
            ],
            dimensionsDetails: ["القطر: 126 سم", "الارتفاع: 30 سم"],
            materialDetails: [
              "جلد بقر أوروبي حقيقي",
              "لب تنجيد عالي الجودة",
              "مصنوع يدويا في أوروبا",
            ],
            origin: "مصنوع يدويا في أوروبا",
            uniqueNote:
              "تتوفر ألوان إضافية عند الطلب. يتم تحديد اللون والرسم الطبيعي واتجاه الشعر بشكل فردي؛ الصور المعروضة مرجع للشكل وتأثير المادة.",
            ctaLabel: "استفسر عن التوفر",
            images: cowhideSeatImages([
              "مقعد دائري أصفر من جلد البقر الأوروبي في مساحة مضيئة",
              "مقعد أصفر من جلد البقر الأوروبي مع ملمس شعر واضح",
              "منظر أمامي لمقعد أصفر من جلد البقر الأوروبي في الحديقة",
              "تفصيل سطح المقعد الأصفر من جلد البقر في الحديقة",
              "منظر جانبي لمقعد أصفر من جلد البقر الأوروبي في الحديقة",
              "منظر منخفض الزاوية لمقعد أصفر من جلد البقر الأوروبي",
              "لوحة ألوان بتشطيبات متنوعة من جلد البقر الأوروبي",
              "لقطة تفصيلية للمقعد الأصفر من جلد البقر الأوروبي",
            ]),
            metaTitle: "مقعد نحتي من جلد البقر الأوروبي",
            metaDescription:
              "مقعد دائري من جلد البقر الأوروبي مصنوع يدويا في أوروبا، قطره 126 سم وارتفاعه 30 سم.",
          },
        },
      },
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
      {
        title: "Wandstück",
        cardTitle: "Wandstück",
        maker: "Michael Fischer-Art",
        slug: "michael-fischer-art-untitled-2024",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Bemalte Holzarbeit",
        materialDetails: ["Bemalte Holzarbeit", "Handgefertigtes Unikat", "2024"],
        dimensions: "Maße auf Anfrage",
        dimensionsDetails: ["Maße auf Anfrage"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "Ein originales Wandfragment von Michael Fischer-Art – ein Stück Leipziger Stadtgeschichte, das aus dem früheren Wandgemälde am Brühl gesichert wurde.",
        longDescription: [
          "Dieses Wandstück stammt aus dem Wandgemälde von Michael Fischer-Art, das am Brühl in Leipzig sichtbar war. Die historischen Fragmente wurden durch die Initiative Kunstfreiheit gesichert, bewahrt und für eine neue Öffentlichkeit zugänglich gemacht.",
          "Das Wandgemälde gilt als kraftvolles Zeichen der Friedlichen Revolution von 1989. Kleine und größere Fragmente der limitierten Wandelemente wurden 2025 im Historischen Wartesaal des Leipziger Hauptbahnhofs präsentiert.",
        ],
        origin: "Leipzig, Deutschland",
        uniqueNote: "Originales Wandfragment. Form, Zustand und Verfügbarkeit werden individuell bestätigt. Ergänzende Bilddokumentation: Wandgemälde am Brühl in Leipzig, Foto: commlab GmbH.",
        artistBio: "Michael Fischer-Art, geboren 1969 in Leipzig, studierte von 1992 bis 1997 an der Hochschule für Grafik und Buchkunst Leipzig. Er arbeitet als Künstler, Designer und Autor mit starken Farben, einfachen Strukturen und comicartigen Figuren – von Tafelarbeiten bis zu großflächigen Projekten im öffentlichen Raum.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: michaelFischerArtImages(["Michael Fischer-Art, Wandstück, originales Wandfragment", "Das Wandgemälde am Brühl in Leipzig von Michael Fischer-Art, Foto: commlab GmbH"]),
        sourceUrl: "https://www.leipziginfo.de/aktuelles/artikel/gerettet-bewahrt-praesentiert-das-wandgemaelde-von-michael-fischer-art-als-neues-highlight-im-leipziger-hauptbahnhof/",
        metaTitle: "Michael Fischer-Art – Wandstück",
        metaDescription: "Wandstück von Michael Fischer-Art: originales Fragment des Wandgemäldes am Brühl in Leipzig. Preis auf Anfrage.",
        localized: {
          en: {
            title: "Wandstück", cardTitle: "Wandstück", priceNote: "Price and availability on request.",
            shortDescription: "An original wall fragment by Michael Fischer-Art – a piece of Leipzig's urban history, secured from the former mural at Brühl.",
            longDescription: ["This wall piece comes from Michael Fischer-Art's mural that was visible at Brühl in Leipzig. The historic fragments were secured and preserved by the Kunstfreiheit initiative, then made accessible to a new public.", "The mural is regarded as a powerful symbol of the Peaceful Revolution of 1989. Smaller and larger fragments of the limited wall elements were presented in 2025 in the Historic Waiting Hall of Leipzig Central Station."],
            dimensionsDetails: ["Dimensions on request"], materialDetails: ["Painted wood work", "Handcrafted unique piece", "2024"], origin: "Leipzig, Germany",
            uniqueNote: "Original wall fragment. Form, condition and availability are confirmed individually. Supplementary image documentation: mural at Brühl in Leipzig, photo: commlab GmbH.",
            artistBio: "Michael Fischer-Art, born in Leipzig in 1969, studied at the Academy of Visual Arts Leipzig from 1992 to 1997. As an artist, designer and author, he works with strong colour, simple structures and comic-like figures, from panel works to large public-space projects.",
            ctaLabel: "Request availability", images: michaelFischerArtImages(["Michael Fischer-Art, Wandstück, original wall fragment", "Mural at Brühl in Leipzig by Michael Fischer-Art, photo: commlab GmbH"]),
            metaTitle: "Michael Fischer-Art – Wandstück", metaDescription: "Wandstück by Michael Fischer-Art: an original fragment of the Brühl mural in Leipzig. Price on request.",
          },
          fr: {
            title: "Wandstück", cardTitle: "Wandstück", priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "Un fragment mural original de Michael Fischer-Art, issu de l’ancienne peinture murale du Brühl à Leipzig.",
            longDescription: ["Cette pièce murale provient de la peinture murale de Michael Fischer-Art visible au Brühl à Leipzig. Les fragments historiques ont été sauvés et préservés par l’initiative Kunstfreiheit, puis rendus accessibles à un nouveau public.", "La peinture murale est considérée comme un symbole fort de la Révolution pacifique de 1989. Des fragments des éléments muraux limités ont été présentés en 2025 dans la salle d’attente historique de la gare centrale de Leipzig."],
            dimensionsDetails: ["Dimensions sur demande"], materialDetails: ["Œuvre en bois peint", "Pièce unique réalisée à la main", "2024"], origin: "Leipzig, Allemagne",
            uniqueNote: "Fragment mural original. Forme, état et disponibilité confirmés individuellement. Documentation photographique complémentaire : peinture murale du Brühl à Leipzig, photo : commlab GmbH.", artistBio: "Michael Fischer-Art, né à Leipzig en 1969, a étudié de 1992 à 1997 à l’Académie des arts visuels de Leipzig. Artiste, designer et auteur, il travaille avec des couleurs fortes, des structures simples et des figures proches de la bande dessinée.",
            ctaLabel: "Demander la disponibilité", images: michaelFischerArtImages(["Michael Fischer-Art, Wandstück, fragment mural original", "Peinture murale du Brühl à Leipzig de Michael Fischer-Art, photo : commlab GmbH"]), metaTitle: "Michael Fischer-Art – Wandstück", metaDescription: "Wandstück de Michael Fischer-Art : fragment original de la peinture murale du Brühl à Leipzig. Prix sur demande.",
          },
          es: {
            title: "Wandstück", cardTitle: "Wandstück", priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "Un fragmento mural original de Michael Fischer-Art, procedente del antiguo mural de Brühl en Leipzig.",
            longDescription: ["Esta pieza mural procede del mural de Michael Fischer-Art que estuvo visible en Brühl, Leipzig. Los fragmentos históricos fueron rescatados y preservados por la iniciativa Kunstfreiheit y puestos al alcance de un nuevo público.", "El mural se considera un símbolo poderoso de la Revolución pacífica de 1989. Fragmentos de los elementos murales limitados se presentaron en 2025 en la Sala de Espera Histórica de la Estación Central de Leipzig."],
            dimensionsDetails: ["Dimensiones bajo consulta"], materialDetails: ["Obra en madera pintada", "Pieza única hecha a mano", "2024"], origin: "Leipzig, Alemania",
            uniqueNote: "Fragmento mural original. La forma, el estado y la disponibilidad se confirman individualmente. Documentación fotográfica complementaria: mural de Brühl en Leipzig, foto: commlab GmbH.", artistBio: "Michael Fischer-Art, nacido en Leipzig en 1969, estudió de 1992 a 1997 en la Academia de Artes Visuales de Leipzig. Como artista, diseñador y autor, trabaja con colores fuertes, estructuras sencillas y figuras de lenguaje cercano al cómic.",
            ctaLabel: "Consultar disponibilidad", images: michaelFischerArtImages(["Michael Fischer-Art, Wandstück, fragmento mural original", "Mural de Brühl en Leipzig de Michael Fischer-Art, foto: commlab GmbH"]), metaTitle: "Michael Fischer-Art – Wandstück", metaDescription: "Wandstück de Michael Fischer-Art: fragmento original del mural de Brühl en Leipzig. Precio bajo consulta.",
          },
          zh: {
            title: "Wandstück", cardTitle: "Wandstück", priceNote: "价格与供应情况请咨询。",
            shortDescription: "Michael Fischer-Art 的一件原始墙体碎片，来自莱比锡布吕尔旧壁画，是城市历史的一部分。",
            longDescription: ["这件墙体作品来自 Michael Fischer-Art 曾创作于莱比锡布吕尔的壁画。历史碎片由 Kunstfreiheit 倡议保存，并再次向公众开放。", "该壁画被视为1989年和平革命的有力象征。限量墙体元素的大大小小碎片于2025年在莱比锡中央火车站历史候车厅展出。"],
            dimensionsDetails: ["尺寸请咨询"], materialDetails: ["彩绘木质作品", "手工独件", "2024"], origin: "德国莱比锡",
            uniqueNote: "原始墙体碎片。具体形态、状态与供应情况将单独确认。补充图像资料：莱比锡布吕尔壁画，摄影：commlab GmbH。", artistBio: "Michael Fischer-Art 1969 年出生于莱比锡，1992 至 1997 年就读于莱比锡视觉艺术学院。他以强烈色彩、简洁结构和漫画感人物形象进行创作，涵盖架上作品及大型公共空间项目。",
            ctaLabel: "咨询供应情况", images: michaelFischerArtImages(["Michael Fischer-Art，《Wandstück》，原始墙体碎片", "Michael Fischer-Art 创作的莱比锡布吕尔壁画，摄影：commlab GmbH"]), metaTitle: "Michael Fischer-Art – Wandstück", metaDescription: "Michael Fischer-Art 的《Wandstück》：莱比锡布吕尔壁画的原始碎片。价格请咨询。",
          },
          ar: {
            title: "Wandstück", cardTitle: "Wandstück", priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "قطعة جدارية أصلية من Michael Fischer-Art، من بقايا الجدارية السابقة في برول بمدينة لايبزيغ.",
            longDescription: ["تأتي هذه القطعة الجدارية من جدارية Michael Fischer-Art التي كانت ظاهرة في برول في لايبزيغ. وقد أنقذت مبادرة Kunstfreiheit الأجزاء التاريخية وحافظت عليها ثم أتاحت وصولها إلى جمهور جديد.", "تُعد الجدارية رمزاً قوياً للثورة السلمية عام 1989. وعُرضت أجزاء صغيرة وكبيرة من عناصر الجدار المحدودة عام 2025 في قاعة الانتظار التاريخية بمحطة لايبزيغ المركزية."],
            dimensionsDetails: ["الأبعاد عند الطلب"], materialDetails: ["عمل خشبي مطلي", "قطعة فريدة مصنوعة يدوياً", "2024"], origin: "لايبزيغ، ألمانيا",
            uniqueNote: "قطعة جدارية أصلية. يتم تأكيد الشكل والحالة والتوفر بشكل فردي. توثيق مصوّر إضافي: جدارية برول في لايبزيغ، صورة: commlab GmbH.", artistBio: "وُلد Michael Fischer-Art في لايبزيغ عام 1969 ودرس في أكاديمية الفنون البصرية في لايبزيغ بين 1992 و1997. يعمل كفنان ومصمم ومؤلف بألوان قوية وبنى بسيطة وشخصيات ذات طابع كرتوني.",
            ctaLabel: "طلب التوفر", images: michaelFischerArtImages(["Michael Fischer-Art، Wandstück، قطعة جدارية أصلية", "جدارية برول في لايبزيغ من Michael Fischer-Art، صورة: commlab GmbH"]), metaTitle: "Michael Fischer-Art – Wandstück", metaDescription: "Wandstück من Michael Fischer-Art: جزء أصلي من جدارية برول في لايبزيغ. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Die Erklärung der Welt",
        maker: "Stefan Hirsig",
        slug: "stefan-hirsig-die-erklaerung-der-welt",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Öl auf Leinwand",
        materialDetails: ["Öl auf Leinwand", "2010"],
        dimensions: "140 × 110 cm",
        dimensionsDetails: ["Höhe: 140 cm", "Breite: 110 cm"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "In „Die Erklärung der Welt“ verdichtet Stefan Hirsig Figur, Blick und abstrakte Struktur zu einer vielschichtigen Bildwelt.",
        longDescription: [
          "Die Arbeit verbindet ein figürliches Antlitz mit überlagerten Augen, spiralartigen Linien und malerischen Farbflächen. So entsteht ein Bildraum zwischen Wahrnehmung, Erinnerung und offener Erzählung.",
          "Hirsigs Malerei bewegt sich zwischen Abstraktion und Figuration. Organische Formverläufe, geometrische Strukturen und fragmentierte Körper- oder Gesichtselemente werden im Arbeitsprozess immer wieder überarbeitet und neu zueinander gesetzt.",
        ],
        origin: "Berlin, Deutschland",
        uniqueNote: "Unikat, 2010. Öl auf Leinwand, 140 × 110 cm. Zustand und Verfügbarkeit auf Anfrage.",
        artistBio: "Stefan Hirsig, geboren 1966 in West-Berlin, studierte Malerei an der Hochschule der Künste Berlin bei Bernd Koberling und schloss sein Studium 1993 ab. Seine Arbeiten werden seit den 1990er-Jahren international gezeigt; er lebt und arbeitet in Berlin.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: stefanHirsigImages(["Stefan Hirsig, Die Erklärung der Welt, 2010, Öl auf Leinwand"]),
        metaTitle: "Stefan Hirsig – Die Erklärung der Welt",
        metaDescription: "Die Erklärung der Welt (2010) von Stefan Hirsig. Öl auf Leinwand, 140 × 110 cm. Preis auf Anfrage.",
        localized: {
          en: {
            title: "The Explanation of the World", cardTitle: "The Explanation of the World", priceNote: "Price and availability on request.",
            shortDescription: "In The Explanation of the World, Stefan Hirsig condenses figure, gaze and abstract structure into a layered visual world.",
            longDescription: ["The work combines a figurative face with layered eyes, spiral-like lines and painted fields of colour. The result is a pictorial space between perception, memory and open narrative.", "Hirsig's painting moves between abstraction and figuration. Organic forms, geometric structures and fragmented elements of bodies or faces are repeatedly reworked and repositioned during the process."],
            dimensionsDetails: ["Height: 140 cm", "Width: 110 cm"], materialDetails: ["Oil on canvas", "2010"], origin: "Berlin, Germany",
            uniqueNote: "Unique piece, 2010. Oil on canvas, 140 × 110 cm. Condition and availability on request.", artistBio: "Stefan Hirsig, born in West Berlin in 1966, studied painting at the Berlin University of the Arts with Bernd Koberling and completed his studies in 1993. His works have been shown internationally since the 1990s; he lives and works in Berlin.",
            ctaLabel: "Request availability", images: stefanHirsigImages(["Stefan Hirsig, The Explanation of the World, 2010, oil on canvas"]), metaTitle: "Stefan Hirsig – The Explanation of the World", metaDescription: "The Explanation of the World (2010) by Stefan Hirsig. Oil on canvas, 140 × 110 cm. Price on request.",
          },
          fr: {
            title: "L’explication du monde", cardTitle: "L’explication du monde", priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "Dans L’explication du monde, Stefan Hirsig condense figure, regard et structure abstraite en un univers visuel complexe.",
            longDescription: ["L’œuvre associe un visage figuratif à des yeux superposés, des lignes en spirale et des champs colorés. Elle crée un espace pictural entre perception, mémoire et narration ouverte.", "La peinture de Hirsig se situe entre abstraction et figuration. Formes organiques, structures géométriques et fragments de corps ou de visages sont sans cesse retravaillés et repositionnés."],
            dimensionsDetails: ["Hauteur : 140 cm", "Largeur : 110 cm"], materialDetails: ["Huile sur toile", "2010"], origin: "Berlin, Allemagne",
            uniqueNote: "Pièce unique, 2010. Huile sur toile, 140 × 110 cm. État et disponibilité sur demande.", artistBio: "Stefan Hirsig, né à Berlin-Ouest en 1966, a étudié la peinture à l’Université des arts de Berlin auprès de Bernd Koberling et a terminé ses études en 1993. Ses œuvres sont présentées internationalement depuis les années 1990 ; il vit et travaille à Berlin.",
            ctaLabel: "Demander la disponibilité", images: stefanHirsigImages(["Stefan Hirsig, L’explication du monde, 2010, huile sur toile"]), metaTitle: "Stefan Hirsig – L’explication du monde", metaDescription: "L’explication du monde (2010) de Stefan Hirsig. Huile sur toile, 140 × 110 cm. Prix sur demande.",
          },
          es: {
            title: "La explicación del mundo", cardTitle: "La explicación del mundo", priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "En La explicación del mundo, Stefan Hirsig condensa figura, mirada y estructura abstracta en un universo visual complejo.",
            longDescription: ["La obra combina un rostro figurativo con ojos superpuestos, líneas en espiral y campos de color. Así surge un espacio pictórico entre percepción, memoria y narración abierta.", "La pintura de Hirsig se mueve entre abstracción y figuración. Formas orgánicas, estructuras geométricas y fragmentos de cuerpos o rostros se reelaboran y reposicionan constantemente."],
            dimensionsDetails: ["Alto: 140 cm", "Ancho: 110 cm"], materialDetails: ["Óleo sobre lienzo", "2010"], origin: "Berlín, Alemania",
            uniqueNote: "Pieza única, 2010. Óleo sobre lienzo, 140 × 110 cm. Estado y disponibilidad bajo consulta.", artistBio: "Stefan Hirsig, nacido en Berlín Occidental en 1966, estudió pintura en la Universidad de las Artes de Berlín con Bernd Koberling y terminó sus estudios en 1993. Sus obras se muestran internacionalmente desde los años noventa; vive y trabaja en Berlín.",
            ctaLabel: "Consultar disponibilidad", images: stefanHirsigImages(["Stefan Hirsig, La explicación del mundo, 2010, óleo sobre lienzo"]), metaTitle: "Stefan Hirsig – La explicación del mundo", metaDescription: "La explicación del mundo (2010) de Stefan Hirsig. Óleo sobre lienzo, 140 × 110 cm. Precio bajo consulta.",
          },
          zh: {
            title: "世界的解释", cardTitle: "世界的解释", priceNote: "价格与供应情况请咨询。",
            shortDescription: "在《世界的解释》中，Stefan Hirsig 将人物、目光与抽象结构凝练为多层次的视觉世界。",
            longDescription: ["作品把具象面孔与层叠的眼睛、螺旋线及色彩区域结合起来，形成介于感知、记忆与开放叙事之间的画面空间。", "Hirsig 的绘画游走于抽象与具象之间。创作过程中，有机形态、几何结构以及身体或面部碎片会被不断重绘并重新组织。"],
            dimensionsDetails: ["高度：140 厘米", "宽度：110 厘米"], materialDetails: ["布面油画", "2010"], origin: "德国柏林",
            uniqueNote: "独一无二作品，2010。布面油画，140 × 110 厘米。状态与供应情况请咨询。", artistBio: "Stefan Hirsig 1966 年生于西柏林，曾师从 Bernd Koberling 于柏林艺术大学学习绘画，并于 1993 年完成学业。自 1990 年代起，他的作品在国际范围展出；现生活和工作于柏林。",
            ctaLabel: "咨询供应情况", images: stefanHirsigImages(["Stefan Hirsig，《世界的解释》，2010，布面油画"]), metaTitle: "Stefan Hirsig – 世界的解释", metaDescription: "Stefan Hirsig《世界的解释》（2010）。布面油画，140 × 110 厘米。价格请咨询。",
          },
          ar: {
            title: "تفسير العالم", cardTitle: "تفسير العالم", priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "في تفسير العالم، يختزل Stefan Hirsig الشكل والنظرة والبنية التجريدية في عالم بصري متعدد الطبقات.",
            longDescription: ["يجمع العمل وجهاً تصويرياً مع عيون متراكبة وخطوط لولبية ومساحات لونية، فينشئ فضاءً تصويرياً بين الإدراك والذاكرة والسرد المفتوح.", "تتحرك لوحة Hirsig بين التجريد والتصوير. وتُعاد معالجة الأشكال العضوية والبنى الهندسية وأجزاء الأجساد أو الوجوه وتغيير مواضعها باستمرار خلال العمل."],
            dimensionsDetails: ["الارتفاع: 140 سم", "العرض: 110 سم"], materialDetails: ["زيت على قماش", "2010"], origin: "برلين، ألمانيا",
            uniqueNote: "قطعة فريدة، 2010. زيت على قماش، 140 × 110 سم. الحالة والتوفر عند الطلب.", artistBio: "وُلد Stefan Hirsig في برلين الغربية عام 1966 ودرس الرسم في جامعة الفنون في برلين مع Bernd Koberling وأكمل دراسته عام 1993. تُعرض أعماله دولياً منذ التسعينيات ويعيش ويعمل في برلين.",
            ctaLabel: "طلب التوفر", images: stefanHirsigImages(["Stefan Hirsig، تفسير العالم، 2010، زيت على قماش"]), metaTitle: "Stefan Hirsig – تفسير العالم", metaDescription: "تفسير العالم (2010) من Stefan Hirsig. زيت على قماش، 140 × 110 سم. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Paso Due",
        maker: "Silke Weyer",
        slug: "silke-weyer-paso-due",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Öl auf Leinwand",
        materialDetails: ["Öl auf Leinwand", "2009"],
        dimensions: "250 × 250 cm",
        dimensionsDetails: ["Höhe: 250 cm", "Breite: 250 cm"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "In „Paso Due“ verdichtet Silke Weyer eine helle, offene Bildfläche zu einer spannungsvollen Verbindung von Geste, Farbe und materieller Spur.",
        longDescription: [
          "Die großformatige Arbeit entwickelt ihre Wirkung aus der Balance von Leere und Verdichtung. Eine dunkle, bewegte Form setzt sich gegen die helle Fläche und macht den Malprozess unmittelbar sichtbar.",
          "Silke Weyers Malerei verbindet körperhafte Farbspuren mit einer offenen Bildanlage. Die Arbeit lässt Raum für Assoziationen und verändert sich mit Abstand, Licht und Blickwinkel.",
        ],
        origin: "Berlin, Deutschland",
        uniqueNote: "Unikat, 2009. Öl auf Leinwand, 250 × 250 cm. Zustand und Verfügbarkeit auf Anfrage.",
        artistBio: "Silke Weyer studierte Malerei an der Kunsthochschule Berlin Weißensee, schloss 2009 ihr Diplom ab und war 2009 bis 2010 Meisterschülerin bei Prof. Werner Liebmann. Sie lebt und arbeitet in Berlin.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: silkeWeyerImages(["Silke Weyer, Paso Due, 2009, Öl auf Leinwand"]),
        metaTitle: "Silke Weyer – Paso Due",
        metaDescription: "Paso Due (2009) von Silke Weyer. Öl auf Leinwand, 250 × 250 cm. Preis auf Anfrage.",
        localized: {
          en: {
            title: "Paso Due", cardTitle: "Paso Due", priceNote: "Price and availability on request.",
            shortDescription: "In Paso Due, Silke Weyer condenses a bright, open picture field into a tense connection of gesture, colour and material trace.",
            longDescription: ["The large-scale work draws its effect from the balance of emptiness and concentration. A dark, animated form is set against the bright ground, making the painting process immediately visible.", "Silke Weyer's painting combines corporeal traces of colour with an open pictorial structure. The work leaves room for association and shifts with distance, light and viewpoint."],
            dimensionsDetails: ["Height: 250 cm", "Width: 250 cm"], materialDetails: ["Oil on canvas", "2009"], origin: "Berlin, Germany",
            uniqueNote: "Unique piece, 2009. Oil on canvas, 250 × 250 cm. Condition and availability on request.", artistBio: "Silke Weyer studied painting at the Berlin Weißensee School of Art, completed her diploma in 2009 and was a master student of Prof. Werner Liebmann from 2009 to 2010. She lives and works in Berlin.",
            ctaLabel: "Request availability", images: silkeWeyerImages(["Silke Weyer, Paso Due, 2009, oil on canvas"]), metaTitle: "Silke Weyer – Paso Due", metaDescription: "Paso Due (2009) by Silke Weyer. Oil on canvas, 250 × 250 cm. Price on request.",
          },
          fr: {
            title: "Paso Due", cardTitle: "Paso Due", priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "Dans Paso Due, Silke Weyer condense un champ pictural clair et ouvert en une tension entre geste, couleur et trace matérielle.",
            longDescription: ["Cette œuvre grand format tire sa force de l’équilibre entre vide et densité. Une forme sombre et mouvante se détache du fond clair et rend le processus de peinture visible.", "La peinture de Silke Weyer associe des traces de couleur corporelles à une construction picturale ouverte. L’œuvre se transforme selon la distance, la lumière et le regard."],
            dimensionsDetails: ["Hauteur : 250 cm", "Largeur : 250 cm"], materialDetails: ["Huile sur toile", "2009"], origin: "Berlin, Allemagne",
            uniqueNote: "Pièce unique, 2009. Huile sur toile, 250 × 250 cm. État et disponibilité sur demande.", artistBio: "Silke Weyer a étudié la peinture à la Kunsthochschule Berlin Weißensee, a obtenu son diplôme en 2009 et a été Meisterschülerin du Prof. Werner Liebmann de 2009 à 2010. Elle vit et travaille à Berlin.",
            ctaLabel: "Demander la disponibilité", images: silkeWeyerImages(["Silke Weyer, Paso Due, 2009, huile sur toile"]), metaTitle: "Silke Weyer – Paso Due", metaDescription: "Paso Due (2009) de Silke Weyer. Huile sur toile, 250 × 250 cm. Prix sur demande.",
          },
          es: {
            title: "Paso Due", cardTitle: "Paso Due", priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "En Paso Due, Silke Weyer condensa un campo pictórico claro y abierto en una tensión de gesto, color y huella material.",
            longDescription: ["La obra de gran formato deriva su fuerza del equilibrio entre vacío y densidad. Una forma oscura y dinámica se enfrenta al fondo claro y hace visible el proceso de pintura.", "La pintura de Silke Weyer combina rastros corporales de color con una estructura pictórica abierta. La obra cambia con la distancia, la luz y el punto de vista."],
            dimensionsDetails: ["Alto: 250 cm", "Ancho: 250 cm"], materialDetails: ["Óleo sobre lienzo", "2009"], origin: "Berlín, Alemania",
            uniqueNote: "Pieza única, 2009. Óleo sobre lienzo, 250 × 250 cm. Estado y disponibilidad bajo consulta.", artistBio: "Silke Weyer estudió pintura en la Kunsthochschule Berlin Weißensee, obtuvo su diploma en 2009 y fue Meisterschülerin del Prof. Werner Liebmann de 2009 a 2010. Vive y trabaja en Berlín.",
            ctaLabel: "Consultar disponibilidad", images: silkeWeyerImages(["Silke Weyer, Paso Due, 2009, óleo sobre lienzo"]), metaTitle: "Silke Weyer – Paso Due", metaDescription: "Paso Due (2009) de Silke Weyer. Óleo sobre lienzo, 250 × 250 cm. Precio bajo consulta.",
          },
          zh: {
            title: "Paso Due", cardTitle: "Paso Due", priceNote: "价格与供应情况请咨询。",
            shortDescription: "在《Paso Due》中，Silke Weyer 将明亮、开放的画面凝练为手势、色彩与材质痕迹之间的张力。",
            longDescription: ["这件大型作品在留白与凝聚之间取得平衡。一处深色而富有动感的形态置于明亮底色之上，使绘画过程清晰可见。", "Silke Weyer 的绘画将富有身体感的色彩痕迹与开放的画面结构结合起来。作品会随距离、光线和观看角度而变化。"],
            dimensionsDetails: ["高度：250 厘米", "宽度：250 厘米"], materialDetails: ["布面油画", "2009"], origin: "德国柏林",
            uniqueNote: "独一无二作品，2009。布面油画，250 × 250 厘米。状态与供应情况请咨询。", artistBio: "Silke Weyer 曾就读于柏林魏森塞艺术学院绘画专业，2009 年取得文凭，并于 2009 至 2010 年师从 Werner Liebmann 教授。她生活和工作于柏林。",
            ctaLabel: "咨询供应情况", images: silkeWeyerImages(["Silke Weyer，《Paso Due》，2009，布面油画"]), metaTitle: "Silke Weyer – Paso Due", metaDescription: "Silke Weyer《Paso Due》（2009）。布面油画，250 × 250 厘米。价格请咨询。",
          },
          ar: {
            title: "Paso Due", cardTitle: "Paso Due", priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "في Paso Due، تكثف Silke Weyer مساحة تصويرية فاتحة ومفتوحة في توتر بين الإيماءة واللون والأثر المادي.",
            longDescription: ["يستمد العمل كبير الحجم قوته من التوازن بين الفراغ والكثافة. تقف هيئة داكنة ومتحركة أمام الخلفية الفاتحة وتُظهر عملية الرسم مباشرة.", "تجمع لوحة Silke Weyer بين آثار لونية جسدية وبنية تصويرية مفتوحة. ويتغير العمل مع المسافة والضوء وزاوية النظر."],
            dimensionsDetails: ["الارتفاع: 250 سم", "العرض: 250 سم"], materialDetails: ["زيت على قماش", "2009"], origin: "برلين، ألمانيا",
            uniqueNote: "قطعة فريدة، 2009. زيت على قماش، 250 × 250 سم. الحالة والتوفر عند الطلب.", artistBio: "درست Silke Weyer الرسم في Kunsthochschule Berlin Weißensee وحصلت على الدبلوم عام 2009 وكانت Meisterschülerin لدى Prof. Werner Liebmann بين 2009 و2010. تعيش وتعمل في برلين.",
            ctaLabel: "طلب التوفر", images: silkeWeyerImages(["Silke Weyer، Paso Due، 2009، زيت على قماش"]), metaTitle: "Silke Weyer – Paso Due", metaDescription: "Paso Due (2009) من Silke Weyer. زيت على قماش، 250 × 250 سم. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Toro Blanco",
        maker: "Silke Weyer",
        slug: "silke-weyer-toro-blanco",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Öl auf Leinwand",
        materialDetails: ["Öl auf Leinwand", "2009"],
        dimensions: "250 × 250 cm",
        dimensionsDetails: ["Höhe: 250 cm", "Breite: 250 cm"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "„Toro Blanco“ von Silke Weyer verbindet eine fast schwerelose, helle Bildfläche mit einer konzentrierten malerischen Bewegung.",
        longDescription: ["Die Arbeit aus dem Jahr 2009 entwickelt aus wenigen Farbresten, Linien und transparenten Schichten eine offene, körperhafte Form. Das große quadratische Format lässt der Malerei zugleich Präsenz und Ruhe.", "Silke Weyers Malerei bleibt im Wechselspiel von Spur, Material und Leere. Das Bild öffnet einen Raum für Assoziationen, ohne seine Bewegung festzuschreiben."],
        origin: "Berlin, Deutschland",
        uniqueNote: "Unikat, 2009. Öl auf Leinwand, 250 × 250 cm. Zustand und Verfügbarkeit auf Anfrage.",
        artistBio: "Silke Weyer studierte Malerei an der Kunsthochschule Berlin Weißensee, schloss 2009 ihr Diplom ab und war 2009 bis 2010 Meisterschülerin bei Prof. Werner Liebmann. Sie lebt und arbeitet in Berlin.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: toroBlancoImages(["Silke Weyer, Toro Blanco, 2009, Öl auf Leinwand"]),
        metaTitle: "Silke Weyer – Toro Blanco",
        metaDescription: "Toro Blanco (2009) von Silke Weyer. Öl auf Leinwand, 250 × 250 cm. Preis auf Anfrage.",
        localized: {
          en: {
            title: "Toro Blanco", cardTitle: "Toro Blanco", priceNote: "Price and availability on request.", shortDescription: "Toro Blanco by Silke Weyer pairs an almost weightless, bright picture field with a concentrated painterly movement.",
            longDescription: ["Created in 2009, the work develops an open, bodily form from sparse traces of colour, lines and transparent layers. Its large square format gives the painting both presence and calm.", "Silke Weyer's painting moves between trace, material and emptiness. The picture opens a space for association without fixing its movement."],
            dimensionsDetails: ["Height: 250 cm", "Width: 250 cm"], materialDetails: ["Oil on canvas", "2009"], origin: "Berlin, Germany", uniqueNote: "Unique piece, 2009. Oil on canvas, 250 × 250 cm. Condition and availability on request.", artistBio: "Silke Weyer studied painting at the Berlin Weißensee School of Art, completed her diploma in 2009 and was a master student of Prof. Werner Liebmann from 2009 to 2010. She lives and works in Berlin.", ctaLabel: "Request availability", images: toroBlancoImages(["Silke Weyer, Toro Blanco, 2009, oil on canvas"]), metaTitle: "Silke Weyer – Toro Blanco", metaDescription: "Toro Blanco (2009) by Silke Weyer. Oil on canvas, 250 × 250 cm. Price on request.",
          },
          fr: {
            title: "Toro Blanco", cardTitle: "Toro Blanco", priceNote: "Prix et disponibilité sur demande.", shortDescription: "Toro Blanco de Silke Weyer associe un champ pictural clair, presque immatériel, à un mouvement de peinture concentré.",
            longDescription: ["Réalisée en 2009, l’œuvre fait naître une forme ouverte et corporelle à partir de traces de couleur, de lignes et de couches transparentes. Son grand format carré donne à la peinture présence et calme.", "La peinture de Silke Weyer se déploie entre trace, matière et vide. L’image ouvre un espace d’associations sans fixer son mouvement."],
            dimensionsDetails: ["Hauteur : 250 cm", "Largeur : 250 cm"], materialDetails: ["Huile sur toile", "2009"], origin: "Berlin, Allemagne", uniqueNote: "Pièce unique, 2009. Huile sur toile, 250 × 250 cm. État et disponibilité sur demande.", artistBio: "Silke Weyer a étudié la peinture à la Kunsthochschule Berlin Weißensee, a obtenu son diplôme en 2009 et a été Meisterschülerin du Prof. Werner Liebmann de 2009 à 2010. Elle vit et travaille à Berlin.", ctaLabel: "Demander la disponibilité", images: toroBlancoImages(["Silke Weyer, Toro Blanco, 2009, huile sur toile"]), metaTitle: "Silke Weyer – Toro Blanco", metaDescription: "Toro Blanco (2009) de Silke Weyer. Huile sur toile, 250 × 250 cm. Prix sur demande.",
          },
          es: {
            title: "Toro Blanco", cardTitle: "Toro Blanco", priceNote: "Precio y disponibilidad bajo consulta.", shortDescription: "Toro Blanco de Silke Weyer une un campo pictórico claro, casi ingrávido, con un movimiento pictórico concentrado.",
            longDescription: ["La obra de 2009 desarrolla una forma abierta y corpórea a partir de rastros de color, líneas y capas transparentes. Su gran formato cuadrado otorga a la pintura presencia y calma.", "La pintura de Silke Weyer se mueve entre huella, material y vacío. La imagen abre un espacio de asociaciones sin fijar su movimiento."],
            dimensionsDetails: ["Alto: 250 cm", "Ancho: 250 cm"], materialDetails: ["Óleo sobre lienzo", "2009"], origin: "Berlín, Alemania", uniqueNote: "Pieza única, 2009. Óleo sobre lienzo, 250 × 250 cm. Estado y disponibilidad bajo consulta.", artistBio: "Silke Weyer estudió pintura en la Kunsthochschule Berlin Weißensee, obtuvo su diploma en 2009 y fue Meisterschülerin del Prof. Werner Liebmann de 2009 a 2010. Vive y trabaja en Berlín.", ctaLabel: "Consultar disponibilidad", images: toroBlancoImages(["Silke Weyer, Toro Blanco, 2009, óleo sobre lienzo"]), metaTitle: "Silke Weyer – Toro Blanco", metaDescription: "Toro Blanco (2009) de Silke Weyer. Óleo sobre lienzo, 250 × 250 cm. Precio bajo consulta.",
          },
          zh: {
            title: "Toro Blanco", cardTitle: "Toro Blanco", priceNote: "价格与供应情况请咨询。", shortDescription: "Silke Weyer 的《Toro Blanco》将近乎无重的明亮画面与凝练的绘画动势结合起来。",
            longDescription: ["这件 2009 年作品由少量色彩痕迹、线条和透明层次发展出开放而富有身体感的形态。大幅正方形尺寸赋予绘画存在感与宁静。", "Silke Weyer 的绘画在痕迹、材质与留白之间展开。画面为联想打开空间，却不固定其运动。"],
            dimensionsDetails: ["高度：250 厘米", "宽度：250 厘米"], materialDetails: ["布面油画", "2009"], origin: "德国柏林", uniqueNote: "独一无二作品，2009。布面油画，250 × 250 厘米。状态与供应情况请咨询。", artistBio: "Silke Weyer 曾就读于柏林魏森塞艺术学院绘画专业，2009 年取得文凭，并于 2009 至 2010 年师从 Werner Liebmann 教授。她生活和工作于柏林。", ctaLabel: "咨询供应情况", images: toroBlancoImages(["Silke Weyer，《Toro Blanco》，2009，布面油画"]), metaTitle: "Silke Weyer – Toro Blanco", metaDescription: "Silke Weyer《Toro Blanco》（2009）。布面油画，250 × 250 厘米。价格请咨询。",
          },
          ar: {
            title: "Toro Blanco", cardTitle: "Toro Blanco", priceNote: "السعر والتوفر عند الطلب.", shortDescription: "يجمع Toro Blanco من Silke Weyer مساحة تصويرية فاتحة تكاد تكون بلا وزن مع حركة رسم مركزة.",
            longDescription: ["يُطوّر عمل عام 2009 شكلاً مفتوحاً وجسدياً من آثار لون قليلة وخطوط وطبقات شفافة. ويمنح الشكل المربع الكبير اللوحة حضوراً وهدوءاً.", "تتحرك لوحة Silke Weyer بين الأثر والمادة والفراغ. وتفتح الصورة مجالاً للتداعي دون أن تثبت حركتها."],
            dimensionsDetails: ["الارتفاع: 250 سم", "العرض: 250 سم"], materialDetails: ["زيت على قماش", "2009"], origin: "برلين، ألمانيا", uniqueNote: "قطعة فريدة، 2009. زيت على قماش، 250 × 250 سم. الحالة والتوفر عند الطلب.", artistBio: "درست Silke Weyer الرسم في Kunsthochschule Berlin Weißensee وحصلت على الدبلوم عام 2009 وكانت Meisterschülerin لدى Prof. Werner Liebmann بين 2009 و2010. تعيش وتعمل في برلين.", ctaLabel: "طلب التوفر", images: toroBlancoImages(["Silke Weyer، Toro Blanco، 2009، زيت على قماش"]), metaTitle: "Silke Weyer – Toro Blanco", metaDescription: "Toro Blanco (2009) من Silke Weyer. زيت على قماش، 250 × 250 سم. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Bernhard Heisig",
        maker: "Gudrun Brüne",
        slug: "gudrun-bruene-bernhard-heisig",
        price: "Auf Anfrage",
        priceNote: "Preis und Verfügbarkeit auf Anfrage.",
        material: "Mischtechnik auf Hartfaser",
        materialDetails: ["Mischtechnik auf Hartfaser", "2011"],
        dimensions: "80 × 60 cm",
        dimensionsDetails: ["Höhe: 80 cm", "Breite: 60 cm"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "Gudrun Brüne verbindet im Porträt „Bernhard Heisig“ präzise Beobachtung mit einer körperhaften, expressiven Malweise.",
        longDescription: ["Die Arbeit zeigt Bernhard Heisig im Profil, begleitet von zwei überlagerten Köpfen. Dunkler Grund, dichte Farbspuren und die sichtbare Bewegung des Pinselstrichs machen das Porträt zugleich intim und vielschichtig.", "Gudrun Brüne studierte bei Bernhard Heisig an der Hochschule für Grafik und Buchkunst Leipzig. Das Werk von 2011 verhandelt Nähe, künstlerische Beziehung und Erinnerung in einer konzentrierten Bildform."],
        origin: "Leipzig, Deutschland",
        uniqueNote: "Unikat, 2011. Mischtechnik auf Hartfaser, 80 × 60 cm. Zustand und Verfügbarkeit auf Anfrage.",
        artistBio: "Gudrun Brüne (1941–2025) war eine deutsche Malerin und Hochschullehrerin. Sie studierte ab 1961 an der Hochschule für Grafik und Buchkunst Leipzig, war dort Schülerin von Bernhard Heisig und lehrte von 1979 bis 1999 an der Kunsthochschule Burg Giebichenstein.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: gudrunBrueneImages(["Gudrun Brüne, Bernhard Heisig, 2011, Mischtechnik auf Hartfaser"]),
        metaTitle: "Gudrun Brüne – Bernhard Heisig",
        metaDescription: "Bernhard Heisig (2011) von Gudrun Brüne. Mischtechnik auf Hartfaser, 80 × 60 cm. Preis auf Anfrage.",
        localized: {
          en: {
            title: "Bernhard Heisig", cardTitle: "Bernhard Heisig", priceNote: "Price and availability on request.", shortDescription: "In the portrait Bernhard Heisig, Gudrun Brüne combines close observation with a physical, expressive painterly language.",
            longDescription: ["The work shows Bernhard Heisig in profile, accompanied by two overlapping heads. A dark ground, dense traces of colour and visible brush movement make the portrait both intimate and layered.", "Gudrun Brüne studied with Bernhard Heisig at the Academy of Visual Arts Leipzig. The 2011 work explores proximity, artistic relationship and memory in a concentrated pictorial form."],
            dimensionsDetails: ["Height: 80 cm", "Width: 60 cm"], materialDetails: ["Mixed media on hardboard", "2011"], origin: "Leipzig, Germany", uniqueNote: "Unique piece, 2011. Mixed media on hardboard, 80 × 60 cm. Condition and availability on request.", artistBio: "Gudrun Brüne (1941–2025) was a German painter and university lecturer. From 1961, she studied at the Academy of Visual Arts Leipzig with Bernhard Heisig and taught at Burg Giebichenstein University of Art and Design from 1979 to 1999.", ctaLabel: "Request availability", images: gudrunBrueneImages(["Gudrun Brüne, Bernhard Heisig, 2011, mixed media on hardboard"]), metaTitle: "Gudrun Brüne – Bernhard Heisig", metaDescription: "Bernhard Heisig (2011) by Gudrun Brüne. Mixed media on hardboard, 80 × 60 cm. Price on request.",
          },
          fr: {
            title: "Bernhard Heisig", cardTitle: "Bernhard Heisig", priceNote: "Prix et disponibilité sur demande.", shortDescription: "Dans le portrait Bernhard Heisig, Gudrun Brüne associe observation précise et langage pictural physique et expressif.",
            longDescription: ["L'œuvre montre Bernhard Heisig de profil, accompagné de deux têtes superposées. Le fond sombre, les traces de couleur denses et le geste visible du pinceau rendent ce portrait à la fois intime et complexe.", "Gudrun Brüne a étudié auprès de Bernhard Heisig à l'École supérieure des arts graphiques et du livre de Leipzig. Cette œuvre de 2011 explore la proximité, la relation artistique et la mémoire dans une forme picturale concentrée."],
            dimensionsDetails: ["Hauteur : 80 cm", "Largeur : 60 cm"], materialDetails: ["Technique mixte sur panneau de fibres", "2011"], origin: "Leipzig, Allemagne", uniqueNote: "Pièce unique, 2011. Technique mixte sur panneau de fibres, 80 × 60 cm. État et disponibilité sur demande.", artistBio: "Gudrun Brüne (1941–2025) était une peintre et enseignante allemande. À partir de 1961, elle a étudié à l'École supérieure des arts graphiques et du livre de Leipzig auprès de Bernhard Heisig, puis a enseigné à la Burg Giebichenstein de 1979 à 1999.", ctaLabel: "Demander la disponibilité", images: gudrunBrueneImages(["Gudrun Brüne, Bernhard Heisig, 2011, technique mixte sur panneau de fibres"]), metaTitle: "Gudrun Brüne – Bernhard Heisig", metaDescription: "Bernhard Heisig (2011) de Gudrun Brüne. Technique mixte sur panneau de fibres, 80 × 60 cm. Prix sur demande.",
          },
          es: {
            title: "Bernhard Heisig", cardTitle: "Bernhard Heisig", priceNote: "Precio y disponibilidad bajo consulta.", shortDescription: "En el retrato Bernhard Heisig, Gudrun Brüne combina observación precisa con un lenguaje pictórico físico y expresivo.",
            longDescription: ["La obra muestra a Bernhard Heisig de perfil, acompañado por dos cabezas superpuestas. El fondo oscuro, las densas huellas de color y el movimiento visible del pincel hacen del retrato una obra íntima y compleja.", "Gudrun Brüne estudió con Bernhard Heisig en la Academia de Artes Visuales de Leipzig. La obra de 2011 aborda cercanía, relación artística y memoria en una forma pictórica concentrada."],
            dimensionsDetails: ["Alto: 80 cm", "Ancho: 60 cm"], materialDetails: ["Técnica mixta sobre tablero de fibra", "2011"], origin: "Leipzig, Alemania", uniqueNote: "Pieza única, 2011. Técnica mixta sobre tablero de fibra, 80 × 60 cm. Estado y disponibilidad bajo consulta.", artistBio: "Gudrun Brüne (1941–2025) fue una pintora y profesora universitaria alemana. Desde 1961 estudió en la Academia de Artes Visuales de Leipzig con Bernhard Heisig y enseñó en la Universidad de Arte y Diseño Burg Giebichenstein entre 1979 y 1999.", ctaLabel: "Consultar disponibilidad", images: gudrunBrueneImages(["Gudrun Brüne, Bernhard Heisig, 2011, técnica mixta sobre tablero de fibra"]), metaTitle: "Gudrun Brüne – Bernhard Heisig", metaDescription: "Bernhard Heisig (2011), de Gudrun Brüne. Técnica mixta sobre tablero de fibra, 80 × 60 cm. Precio bajo consulta.",
          },
          zh: {
            title: "Bernhard Heisig", cardTitle: "Bernhard Heisig", priceNote: "价格与供应情况请咨询。", shortDescription: "在肖像作品《Bernhard Heisig》中，Gudrun Brüne 将细致观察与富有力量的表现性绘画语言结合在一起。",
            longDescription: ["作品描绘侧身的 Bernhard Heisig，身旁叠加着两张头像。深色背景、浓密的色彩痕迹与可见的笔触运动，使这幅肖像既亲密又层次丰富。", "Gudrun Brüne 曾在莱比锡视觉艺术学院师从 Bernhard Heisig。这件2011年的作品以凝练的绘画形式探讨亲近、艺术关系与记忆。"],
            dimensionsDetails: ["高度：80 厘米", "宽度：60 厘米"], materialDetails: ["纤维板综合材料", "2011年"], origin: "德国莱比锡", uniqueNote: "孤品，2011年。纤维板综合材料，80 × 60 厘米。状态与供应情况请咨询。", artistBio: "Gudrun Brüne（1941–2025）是德国画家与大学教师。自1961年起，她在莱比锡视觉艺术学院师从 Bernhard Heisig，并于1979至1999年间在 Burg Giebichenstein 艺术与设计学院任教。", ctaLabel: "咨询供应情况", images: gudrunBrueneImages(["Gudrun Brüne，《Bernhard Heisig》，2011年，纤维板综合材料"]), metaTitle: "Gudrun Brüne – Bernhard Heisig", metaDescription: "Gudrun Brüne 的《Bernhard Heisig》（2011年）。纤维板综合材料，80 × 60 厘米。价格请咨询。",
          },
          ar: {
            title: "Bernhard Heisig", cardTitle: "Bernhard Heisig", priceNote: "السعر والتوفر عند الطلب.", shortDescription: "تجمع Gudrun Brüne في بورتريه Bernhard Heisig بين الملاحظة الدقيقة ولغة تصويرية جسدية وتعبيرية.",
            longDescription: ["يُظهر العمل Bernhard Heisig في وضع جانبي، ترافقه رأسان متراكبان. تجعل الأرضية الداكنة وآثار اللون الكثيفة وحركة الفرشاة المرئية من البورتريه عملاً حميمياً ومتعدد الطبقات.", "درست Gudrun Brüne لدى Bernhard Heisig في أكاديمية الفنون البصرية في لايبزيغ. يتناول عمل عام 2011 القرب والعلاقة الفنية والذاكرة في صيغة تصويرية مركزة."],
            dimensionsDetails: ["الارتفاع: 80 سم", "العرض: 60 سم"], materialDetails: ["تقنيات مختلطة على لوح ألياف", "2011"], origin: "لايبزيغ، ألمانيا", uniqueNote: "قطعة فريدة، 2011. تقنيات مختلطة على لوح ألياف، 80 × 60 سم. الحالة والتوفر عند الطلب.", artistBio: "Gudrun Brüne (1941–2025) كانت رسامة وأستاذة جامعية ألمانية. منذ عام 1961 درست في أكاديمية الفنون البصرية في لايبزيغ لدى Bernhard Heisig، ودرّست في جامعة Burg Giebichenstein للفنون والتصميم من 1979 إلى 1999.", ctaLabel: "طلب التوفر", images: gudrunBrueneImages(["Gudrun Brüne، Bernhard Heisig، 2011، تقنيات مختلطة على لوح ألياف"]), metaTitle: "Gudrun Brüne – Bernhard Heisig", metaDescription: "Bernhard Heisig (2011) من Gudrun Brüne. تقنيات مختلطة على لوح ألياف، 80 × 60 سم. السعر عند الطلب.",
          },
        },
      },
      {
        title: "Bauernopfer",
        maker: "Sebastian Schrader",
        slug: "sebastian-schrader-bauernopfer",
        price: "Auf Anfrage",
        material: "Öl auf Leinwand",
        dimensions: "180 × 240 cm",
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description:
          "In \u201eBauernopfer\u201c verdichtet Sebastian Schrader Figuren, Alltagsobjekte und malerische Zitate zu einer spannungsvollen Szene.",
        artistBio:
          "Sebastian Schrader, geboren 1978 in Berlin, studierte Malerei an der Kunsthochschule Berlin-Weißensee bei Prof. Werner Liebmann. Nach seinem Diplom 2006 wurde er 2007 Meisterschüler; er lebt und arbeitet in Berlin. Seine figurative Malerei steht im erweiterten Dialog mit der Neuen Leipziger Schule: einer heterogenen, seit den 1990er-Jahren international präsenten Strömung zeitgenössischer Malerei, die an die Leipziger Tradition der gegenständlichen, handwerklich präzisen Bildfindung anknüpft. Sie bezeichnet keinen einheitlichen Stil, sondern unterschiedliche künstlerische Positionen zwischen figurativer Erzählung, Landschaft, Interieur und subjektiver Bildsprache.",
        origin: "Berlin, Deutschland",
        uniqueNote: "Unikat, 2010. Öl auf Leinwand, 180 × 240 cm. Zustand und Verfügbarkeit werden auf Anfrage bestätigt.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: bauernopferImages([
          "Sebastian Schrader, Bauernopfer, Gesamtansicht des Gemäldes",
        ]),
        metaTitle: "Sebastian Schrader \u2013 Bauernopfer",
        metaDescription: "Bauernopfer (2010) von Sebastian Schrader. Öl auf Leinwand, 180 × 240 cm, Preis auf Anfrage.",
      },
      {
        title: "GUCKST DU",
        maker: "Christian Achenbach",
        slug: "christian-achenbach-guckst-du",
        price: "Auf Anfrage",
        material: "Öl und Acryl auf Leinwand, gerahmt",
        dimensions: "184 × 154 cm",
        dimensionsDetails: ["Höhe: 184 cm", "Breite: 154 cm", "Gerahmt"],
        materialDetails: ["Öl auf Leinwand", "Acryl auf Leinwand", "Gerahmt"],
        status: "preis-auf-anfrage",
        availability: "Preis auf Anfrage",
        description: "In „GUCKST DU“ verbindet Christian Achenbach gestische Malerei, figurative Motive und eine vielschichtige, farbintensive Bildfläche.",
        longDescription: ["Die Arbeit aus dem Jahr 2011 verbindet Öl und Acryl zu einer dichten, offenen Komposition.", "Wiederkehrende Hüte, Augen und strahlenartige Linien schaffen eine eigene Bildwelt zwischen Beobachtung, Humor und malerischer Energie."],
        origin: "2011",
        uniqueNote: "2011. Öl und Acryl auf Leinwand, gerahmt, 184 × 154 cm. Zustand und Verfügbarkeit auf Anfrage.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: guckstDuImages([
          "Christian Achenbach, GUCKST DU, 2011, Öl und Acryl auf Leinwand, gerahmt",
        ]),
        metaTitle: "Christian Achenbach – GUCKST DU",
        metaDescription: "GUCKST DU (2011) von Christian Achenbach. Öl und Acryl auf Leinwand, gerahmt, 184 × 154 cm. Preis auf Anfrage.",
        localized: {
          en: {
            title: "GUCKST DU",
            cardTitle: "GUCKST DU",
            priceNote: "Price and availability on request.",
            shortDescription: "In GUCKST DU, Christian Achenbach brings together gestural painting, figurative motifs and a layered, high-chroma picture field.",
            longDescription: ["Created in 2011, the work combines oil and acrylic in a dense, open composition.", "Recurring hats, eyes and radiating lines create a distinctive world between observation, humour and painterly energy."],
            dimensionsDetails: ["Height: 184 cm", "Width: 154 cm", "Framed"],
            materialDetails: ["Oil on canvas", "Acrylic on canvas", "Framed"],
            origin: "2011",
            uniqueNote: "2011. Oil and acrylic on canvas, framed, 184 × 154 cm. Condition and availability on request.",
            ctaLabel: "Request availability",
            images: guckstDuImages(["Christian Achenbach, GUCKST DU, 2011, oil and acrylic on canvas, framed"]),
            metaTitle: "Christian Achenbach – GUCKST DU",
            metaDescription: "GUCKST DU (2011) by Christian Achenbach. Oil and acrylic on canvas, framed, 184 × 154 cm. Price on request.",
          },
          fr: {
            title: "GUCKST DU",
            cardTitle: "GUCKST DU",
            priceNote: "Prix et disponibilité sur demande.",
            shortDescription: "Dans GUCKST DU, Christian Achenbach associe peinture gestuelle, motifs figuratifs et surface picturale dense aux couleurs intenses.",
            longDescription: ["Réalisée en 2011, l'œuvre associe huile et acrylique dans une composition dense et ouverte.", "Chapeaux, yeux et lignes rayonnantes composent un univers singulier, entre observation, humour et énergie picturale."],
            dimensionsDetails: ["Hauteur : 184 cm", "Largeur : 154 cm", "Encadré"],
            materialDetails: ["Huile sur toile", "Acrylique sur toile", "Encadré"],
            origin: "2011",
            uniqueNote: "2011. Huile et acrylique sur toile, encadré, 184 × 154 cm. État et disponibilité sur demande.",
            ctaLabel: "Demander la disponibilité",
            images: guckstDuImages(["Christian Achenbach, GUCKST DU, 2011, huile et acrylique sur toile, encadré"]),
            metaTitle: "Christian Achenbach – GUCKST DU",
            metaDescription: "GUCKST DU (2011) de Christian Achenbach. Huile et acrylique sur toile, encadré, 184 × 154 cm. Prix sur demande.",
          },
          es: {
            title: "GUCKST DU",
            cardTitle: "GUCKST DU",
            priceNote: "Precio y disponibilidad bajo consulta.",
            shortDescription: "En GUCKST DU, Christian Achenbach reúne pintura gestual, motivos figurativos y una superficie pictórica intensa y estratificada.",
            longDescription: ["La obra de 2011 combina óleo y acrílico en una composición densa y abierta.", "Sombreros, ojos y líneas radiantes crean un mundo propio entre observación, humor y energía pictórica."],
            dimensionsDetails: ["Alto: 184 cm", "Ancho: 154 cm", "Enmarcado"],
            materialDetails: ["Óleo sobre lienzo", "Acrílico sobre lienzo", "Enmarcado"],
            origin: "2011",
            uniqueNote: "2011. Óleo y acrílico sobre lienzo, enmarcado, 184 × 154 cm. Estado y disponibilidad bajo consulta.",
            ctaLabel: "Consultar disponibilidad",
            images: guckstDuImages(["Christian Achenbach, GUCKST DU, 2011, óleo y acrílico sobre lienzo, enmarcado"]),
            metaTitle: "Christian Achenbach – GUCKST DU",
            metaDescription: "GUCKST DU (2011), de Christian Achenbach. Óleo y acrílico sobre lienzo, enmarcado, 184 × 154 cm. Precio bajo consulta.",
          },
          zh: {
            title: "GUCKST DU",
            cardTitle: "GUCKST DU",
            priceNote: "价格与供应情况请咨询。",
            shortDescription: "在《GUCKST DU》中，Christian Achenbach 将手势性绘画、具象母题与色彩浓烈的多层画面融为一体。",
            longDescription: ["这件2011年的作品以油画与丙烯构成浓密而开放的画面。", "反复出现的帽子、眼睛与放射状线条，在观察、幽默与绘画能量之间形成独特的图像世界。"],
            dimensionsDetails: ["高度：184 厘米", "宽度：154 厘米", "带框"],
            materialDetails: ["布面油画", "布面丙烯", "带框"],
            origin: "2011年",
            uniqueNote: "2011年。布面油画与丙烯，带框，184 × 154 厘米。状态与供应情况请咨询。",
            ctaLabel: "咨询供应情况",
            images: guckstDuImages(["Christian Achenbach，《GUCKST DU》，2011年，布面油画与丙烯，带框"]),
            metaTitle: "Christian Achenbach – GUCKST DU",
            metaDescription: "Christian Achenbach 的《GUCKST DU》（2011年）。布面油画与丙烯，带框，184 × 154 厘米。价格请咨询。",
          },
          ar: {
            title: "GUCKST DU",
            cardTitle: "GUCKST DU",
            priceNote: "السعر والتوفر عند الطلب.",
            shortDescription: "في عمل GUCKST DU، يجمع كريستيان آخنباخ بين الرسم الإيمائي والرموز التصويرية وسطح لوني كثيف متعدد الطبقات.",
            longDescription: ["يجمع العمل، المنجز عام 2011، بين الزيت والأكريليك في تكوين كثيف ومفتوح.", "تشكّل القبعات والعيون والخطوط المشعّة عالماً بصرياً خاصاً بين المراقبة والفكاهة والطاقة التصويرية."],
            dimensionsDetails: ["الارتفاع: 184 سم", "العرض: 154 سم", "مؤطر"],
            materialDetails: ["زيت على قماش", "أكريليك على قماش", "مؤطر"],
            origin: "2011",
            uniqueNote: "2011. زيت وأكريليك على قماش، مؤطر، 184 × 154 سم. الحالة والتوفر عند الطلب.",
            ctaLabel: "طلب التوفر",
            images: guckstDuImages(["كريستيان آخنباخ، GUCKST DU، 2011، زيت وأكريليك على قماش، مؤطر"]),
            metaTitle: "Christian Achenbach – GUCKST DU",
            metaDescription: "GUCKST DU (2011) لكريستيان آخنباخ. زيت وأكريليك على قماش، مؤطر، 184 × 154 سم. السعر عند الطلب.",
          },
        },
      },
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
      {
        title: "Kuhfell-Teppich",
        cardTitle: "Kuhfell-Teppich",
        maker: "54COUTURE",
        brand: "54COUTURE",
        brandSlug: "54couture",
        pathMode: "nested",
        slug: "54couture-teppich-kuhfell",
        price: "Ab 5.700 €",
        priceNote: "inkl. gesetzlicher Umsatzsteuer, zzgl. Versandkosten",
        material: "Europäisches Kuhfell, handgefertigt",
        materialDetails: ["Echtes europäisches Kuhfell", "Handgefertigt in Europa"],
        dimensions: "260 x 340 cm",
        dimensionsDetails: ["Breite: 260 cm", "Länge: 340 cm"],
        status: "anfragen",
        availability: "Auf Anfrage verfügbar",
        description: "Ein großformatiger 54COUTURE Teppich aus feinstem europäischem Kuhfell. Material, Farbe und Fellstruktur werden für jedes Stück individuell abgestimmt.",
        longDescription: [
          "Der Teppich wird aus ausgewähltem europäischem Kuhfell gefertigt und von Hand verarbeitet.",
          "Mit seinen Maßen von 260 x 340 Zentimetern schafft er eine ruhige, präzise Fläche im Raum.",
          "Farbe, Zeichnung und Fellverlauf werden vor der Fertigung individuell abgestimmt.",
        ],
        origin: "Handgefertigt in Europa",
        uniqueNote: "Farbe, Zeichnung und Fellverlauf werden vor der Fertigung individuell abgestimmt.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: rugImages([
          "Bordeauxroter 54COUTURE Teppich in einem Loft-Interieur",
          "Detailansicht der bordeauxroten Kuhfellstruktur des 54COUTURE Teppichs",
          "Kanten- und Nahtdetail des bordeauxroten 54COUTURE Teppichs",
          "Detailansicht der außergewöhnlichen Textur des bordeauxroten 54COUTURE Teppichs",
          "Bordeauxroter 54COUTURE Teppich vor klassischer Stadtarchitektur",
          "Bordeaux- und blaue Kuhfellflächen des 54COUTURE Teppichs mit sichtbaren Nähten",
          "Farbpalette mit verschiedenen Ausführungen aus europäischem Kuhfell",
        ]),
        metaTitle: "54COUTURE Teppich aus europäischem Kuhfell",
        metaDescription: "54COUTURE Teppich aus europäischem Kuhfell, handgefertigt in Europa, 260 x 340 cm.",
        localized: {
          en: {
            title: "Cowhide Rug",
            cardTitle: "Cowhide Rug",
            priceNote: "Including statutory VAT, excluding shipping.",
            shortDescription: "A large-format 54COUTURE rug made from the finest European cowhide. Each piece is individually balanced in colour, marking and hair direction.",
            longDescription: ["The rug is made from selected European cowhide and finished by hand.", "At 260 x 340 centimetres, it creates a generous, precise presence in a room.", "Colour, natural markings and hair direction are agreed individually before production."],
            dimensionsDetails: ["Width: 260 cm", "Length: 340 cm"],
            materialDetails: ["Genuine European cowhide", "Handcrafted in Europe"],
            origin: "Handcrafted in Europe",
            uniqueNote: "Colour, natural markings and hair direction are agreed individually before production.",
            ctaLabel: "Request availability",
            images: rugImages(["Bordeaux 54COUTURE rug in a loft interior", "Detail of the cowhide texture", "Edge and seam detail of the 54COUTURE rug", "Detail of the rug's distinctive texture", "54COUTURE rug in front of classical city architecture", "Bordeaux and blue cowhide panels with visible seams", "Colour selection with European cowhide samples"]),
            metaTitle: "54COUTURE European cowhide rug",
            metaDescription: "54COUTURE rug in European cowhide, handcrafted in Europe, 260 x 340 cm.",
          },
          fr: {
            title: "Tapis en peau de vache",
            cardTitle: "Tapis en peau de vache",
            priceNote: "TVA légale incluse, frais de livraison en supplément.",
            shortDescription: "Un tapis grand format 54COUTURE en peau de vache européenne. Chaque pièce est accordée individuellement dans sa couleur, son dessin et le sens du poil.",
            longDescription: ["Le tapis est réalisé en peau de vache européenne sélectionnée et fini à la main.", "Avec ses 260 x 340 centimètres, il compose une présence généreuse et précise dans l'espace.", "La couleur, le dessin naturel et le sens du poil sont définis individuellement avant la fabrication."],
            dimensionsDetails: ["Largeur : 260 cm", "Longueur : 340 cm"],
            materialDetails: ["Véritable peau de vache européenne", "Fabriqué à la main en Europe"],
            origin: "Fabriqué à la main en Europe",
            uniqueNote: "La couleur, le dessin naturel et le sens du poil sont définis individuellement avant la fabrication.",
            ctaLabel: "Demander la disponibilité",
            images: rugImages(["Tapis 54COUTURE bordeaux dans un intérieur de loft", "Détail de la texture en peau de vache", "Détail de bord et de couture du tapis 54COUTURE", "Détail de la texture singulière du tapis", "Tapis 54COUTURE devant une architecture urbaine classique", "Panneaux bordeaux et bleus en peau de vache avec coutures visibles", "Nuancier avec échantillons de peau de vache européenne"]),
            metaTitle: "Tapis 54COUTURE en peau de vache européenne",
            metaDescription: "Tapis 54COUTURE en peau de vache européenne, fabriqué à la main en Europe, 260 x 340 cm.",
          },
          es: {
            title: "Alfombra de piel de vaca",
            cardTitle: "Alfombra de piel de vaca",
            priceNote: "IVA legal incluido, gastos de envío no incluidos.",
            shortDescription: "Una alfombra 54COUTURE de gran formato, realizada en piel de vaca europea. Cada pieza se ajusta individualmente en color, dibujo y dirección del pelo.",
            longDescription: ["La alfombra se realiza con piel de vaca europea seleccionada y se termina a mano.", "Con 260 x 340 centímetros, aporta una presencia generosa y precisa al espacio.", "El color, el dibujo natural y la dirección del pelo se acuerdan individualmente antes de la producción."],
            dimensionsDetails: ["Ancho: 260 cm", "Largo: 340 cm"],
            materialDetails: ["Piel de vaca europea auténtica", "Hecho a mano en Europa"],
            origin: "Hecho a mano en Europa",
            uniqueNote: "El color, el dibujo natural y la dirección del pelo se acuerdan individualmente antes de la producción.",
            ctaLabel: "Consultar disponibilidad",
            images: rugImages(["Alfombra 54COUTURE burdeos en un interior tipo loft", "Detalle de la textura de piel de vaca", "Detalle del borde y la costura de la alfombra 54COUTURE", "Detalle de la textura singular de la alfombra", "Alfombra 54COUTURE ante arquitectura urbana clásica", "Paneles de piel de vaca burdeos y azul con costuras visibles", "Carta de colores con muestras de piel de vaca europea"]),
            metaTitle: "Alfombra 54COUTURE de piel de vaca europea",
            metaDescription: "Alfombra 54COUTURE de piel de vaca europea, hecha a mano en Europa, 260 x 340 cm.",
          },
          zh: {
            title: "牛皮地毯",
            cardTitle: "牛皮地毯",
            priceNote: "含法定增值税，运费另计。",
            shortDescription: "一张以顶级欧洲牛皮制成的 54COUTURE 大尺寸地毯。每件作品的色彩、天然纹理与毛向均会单独协调。",
            longDescription: ["地毯以严选欧洲牛皮手工制作而成。", "260 x 340 厘米的尺寸，为空间带来宽阔而精准的存在感。", "色彩、天然纹理与毛向均在制作前单独确认。"],
            dimensionsDetails: ["宽度：260 厘米", "长度：340 厘米"],
            materialDetails: ["真品欧洲牛皮", "欧洲手工制作"],
            origin: "欧洲手工制作",
            uniqueNote: "色彩、天然纹理与毛向均在制作前单独确认。",
            ctaLabel: "咨询供应情况",
            images: rugImages(["阁楼空间中的酒红色 54COUTURE 地毯", "牛皮纹理细节", "54COUTURE 地毯边缘与缝线细节", "地毯独特纹理细节", "古典城市建筑前的 54COUTURE 地毯", "带可见缝线的酒红与蓝色牛皮拼接", "欧洲牛皮样品色卡"]),
            metaTitle: "54COUTURE 欧洲牛皮地毯",
            metaDescription: "54COUTURE 欧洲牛皮地毯，欧洲手工制作，260 x 340 厘米。",
          },
          ar: {
            title: "سجادة من جلد البقر",
            cardTitle: "سجادة من جلد البقر",
            priceNote: "شامل ضريبة القيمة المضافة القانونية، ولا يشمل تكاليف الشحن.",
            shortDescription: "سجادة 54COUTURE كبيرة الحجم مصنوعة من أفخر جلد البقر الأوروبي. يُحدَّد اللون والعلامات الطبيعية واتجاه الوبر لكل قطعة على حدة.",
            longDescription: ["تُصنع السجادة من جلد بقر أوروبي مختار وتُنجز يدوياً.", "بمقاس 260 × 340 سم، تمنح المكان حضوراً واسعاً ودقيقاً.", "يتم الاتفاق على اللون والعلامات الطبيعية واتجاه الوبر بشكل فردي قبل التنفيذ."],
            dimensionsDetails: ["العرض: 260 سم", "الطول: 340 سم"],
            materialDetails: ["جلد بقر أوروبي أصلي", "صناعة يدوية في أوروبا"],
            origin: "صناعة يدوية في أوروبا",
            uniqueNote: "يتم الاتفاق على اللون والعلامات الطبيعية واتجاه الوبر بشكل فردي قبل التنفيذ.",
            ctaLabel: "طلب التوفر",
            images: rugImages(["سجادة 54COUTURE بلون عنابي في مساحة لوفت", "تفصيل لملمس جلد البقر", "تفصيل الحافة والخياطة في سجادة 54COUTURE", "تفصيل لملمس السجادة المميز", "سجادة 54COUTURE أمام عمارة مدينة كلاسيكية", "ألواح من جلد البقر العنابي والأزرق مع خياطة ظاهرة", "بطاقة ألوان مع عينات من جلد البقر الأوروبي"]),
            metaTitle: "سجادة 54COUTURE من جلد البقر الأوروبي",
            metaDescription: "سجادة 54COUTURE من جلد البقر الأوروبي، مصنوعة يدوياً في أوروبا، 260 × 340 سم.",
          },
        },
      },
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

const allSeedProducts = categorySeeds.flatMap((category) =>
  category.items.map((item, index) => {
    const status = statuses[index % statuses.length];
    const maker = item.maker ?? `${category.makerPrefix} ${String.fromCharCode(65 + (index % 8))}`;
    const origin = `${category.originPrefix} ${String.fromCharCode(65 + (index % 8))}`;

    return {
      title: item.title,
      cardTitle: item.cardTitle ?? item.title,
      slug: item.slug ?? `${category.slug}-${String(index + 1).padStart(2, "0")}-${toSlug(item.title)}`,
      category: category.title,
      categorySlug: category.slug,
      secondaryCategories: [] as string[],
      maker,
      type: category.type,
      price: item.price,
      priceNote: item.priceNote,
      status: item.status ?? status,
      availability: item.availability ?? availabilityByStatus[item.status ?? status],
      description: item.description ?? `${category.description} ${item.title} ist als Teil einer kuratierten Auswahl für besondere Räume vorgesehen.`,
      longDescription: item.longDescription,
      dimensions: item.dimensions,
      dimensionsDetails: item.dimensionsDetails,
      material: item.material,
      materialDetails: item.materialDetails,
      origin: item.origin ?? origin,
      uniqueNote: item.uniqueNote,
      artistBio: item.artistBio,
      ctaLabel: item.ctaLabel,
      images: item.images,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      brand: item.brand,
      brandSlug: item.brandSlug,
      rooms: item.rooms,
      collections: item.collections,
      affiliateLink: item.affiliateLink,
      affiliatePartner: item.affiliatePartner,
      affiliateCategory: item.affiliateCategory,
      affiliateDisclosure: item.affiliateDisclosure,
      affiliatePriceLabel: item.affiliatePriceLabel,
      affiliateAvailabilityLabel: item.affiliateAvailabilityLabel,
      affiliateLastCheckedAt: item.affiliateLastCheckedAt,
      affiliateImageSource: item.affiliateImageSource,
      affiliateDataSource: item.affiliateDataSource,
      affiliateNetwork: item.affiliateNetwork,
      country: item.country,
      style: item.style,
      relatedProducts: item.relatedProducts,
      externalId: item.externalId,
      sourceSystem: item.sourceSystem,
      sourceUrl: item.sourceUrl,
      productType: item.productType,
      commerceMode: item.commerceMode,
      shippingProfile: item.shippingProfile,
      taxCode: item.taxCode,
      inventoryMode: item.inventoryMode,
      palette: palettes[index % palettes.length],
      pathMode: item.pathMode ?? "flat",
      localized: item.localized,
    };
  }),
);

// Only this compact, editorial selection is published in the Design Shop.
// The remaining seed entries stay available as drafts for future curation.
const curatedShopProductSlugs = [
  "sitzobjekt-kuhfell",
  "gaetano-pesce-up7-il-piede",
  "ap-collection-animal-chair",
  "54couture-teppich-kuhfell",
  "leuchte-aus-bronze",
  "michael-fischer-art-untitled-2024",
  "stefan-hirsig-die-erklaerung-der-welt",
  "silke-weyer-paso-due",
  "silke-weyer-toro-blanco",
  "gudrun-bruene-bernhard-heisig",
  "sebastian-schrader-bauernopfer",
  "christian-achenbach-guckst-du",
  "beistelltisch-aus-naturstein",
  "vase-aus-glasierter-keramik",
];

export const products = curatedShopProductSlugs.flatMap((slug) => {
  const product = allSeedProducts.find((item) => item.slug === slug);
  return product ? [product] : [];
});

export type CatalogProduct = (typeof products)[number];

export function getCategoryProducts(category: ShopCategory) {
  return products.filter(
    (product) => product.category === category.title || product.secondaryCategories.includes(category.title),
  );
}

export function getCategoryChildren(category: ShopCategory) {
  return subShopCategories.filter((child) => child.parentKey === category.key);
}

export const indexableShopCategories = visibleShopCategories.filter(
  (category) => getCategoryProducts(category).length > 0,
);
