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
};

export type ShopCategory = {
  key?: string;
  title: string;
  slug: string;
  label?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
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
  ctaLabel: string;
  images: ProductImage[];
  metaTitle: string;
  metaDescription: string;
};

type ProductSeed = {
  title: string;
  cardTitle?: string;
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
  { key: "moebel", title: "Möbel", slug: "moebel", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "leuchten", title: "Leuchten", slug: "leuchten", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "kunst", title: "Kunst", slug: "kunst", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "teppiche", title: "Teppiche", slug: "teppiche", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "objekte", title: "Objekte", slug: "objekte", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "tabletop", title: "Tabletop", label: "Accessoires", slug: "tabletop", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "collectible-design", title: "Collectible Design", slug: "collectible-design", status: "active", commerceVisible: true, navigationVisible: true },
  { key: "editionen", title: "Editionen", slug: "editionen", status: "active", commerceVisible: true, navigationVisible: true },
];

export const draftShopCategories: ShopCategory[] = [
  { key: "decoration", title: "Decoration", slug: "decoration", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "tableware", title: "Tableware", slug: "tableware", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "glassware", title: "Glassware", slug: "glassware", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "kitchen", title: "Kitchen", slug: "kitchen", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "textiles", title: "Textiles", slug: "textiles", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "outdoor", title: "Outdoor", slug: "outdoor", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "bath", title: "Bath", slug: "bath", status: "draft", commerceVisible: false, navigationVisible: false },
  { key: "kids", title: "Kids", slug: "kids", status: "draft", commerceVisible: false, navigationVisible: false },
];

export const allShopCategories: ShopCategory[] = [...shopCategories, ...draftShopCategories];

export const visibleShopCategories = allShopCategories.filter(
  (category) => category.status !== "draft" && category.commerceVisible !== false,
);

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
        title: "Sitzobjekt aus europäischem Kuhfell",
        cardTitle: "Sitzobjekt aus Kuhfell",
        pathMode: "nested",
        slug: "sitzobjekt-kuhfell",
        price: "7.200 €",
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
          "Jedes Exemplar unterscheidet sich in Farbe, Struktur und Fellverlauf. Diese Abweichungen sind materialbedingt und machen jedes Sitzobjekt zu einem Einzelstück.",
        ],
        origin: "Handgefertigt in Europa",
        uniqueNote:
          "Farbe, Zeichnung und Fellverlauf unterscheiden sich bei jedem Exemplar. Die gezeigten Bilder dienen als Referenz für Form und Materialwirkung.",
        ctaLabel: "Verfügbarkeit anfragen",
        images: [
          {
            src: "/images/products/sculptural-cowhide-seat-hero.png",
            alt: "Gelbes kreisrundes Sitzobjekt aus europäischem Kuhfell in hellem Raum",
          },
          {
            src: "/images/products/yellow-cowhide-seat.webp",
            alt: "Gelbes Sitzobjekt aus europäischem Kuhfell mit sichtbarer Fellstruktur",
          },
        ],
        metaTitle: "Sitzobjekt aus europäischem Kuhfell",
        metaDescription:
          "Kreisrundes Sitzobjekt aus europäischem Kuhfell, handgefertigt in Europa, 126 cm Durchmesser und 30 cm Höhe.",
        localized: {
          en: {
            title: "Sculptural Seat in European Cowhide",
            cardTitle: "Cowhide Seating Object",
            priceNote: "Including statutory VAT, excluding shipping.",
            shortDescription:
              "A sculptural seating object made from carefully selected European cowhide. Its low circular form brings the material, colour and natural texture into focus.",
            longDescription: [
              "The seating object is made from selected European cowhide and finished by hand.",
              "Its low circular form is quiet yet visually present. The natural markings of the hide define the character of each individual piece.",
              "With a diameter of 126 centimetres, it can be used as a generous seat, a central element within a room or a freestanding furniture object.",
              "Each piece differs in colour, texture and hair direction. These natural variations make every object unique.",
            ],
            dimensionsDetails: ["Diameter: 126 cm", "Height: 30 cm"],
            materialDetails: [
              "Genuine European cowhide",
              "High-quality upholstery core",
              "Handcrafted in Europe",
            ],
            origin: "Handcrafted in Europe",
            uniqueNote:
              "Colour, markings and hair direction differ with every piece. The images shown serve as a reference for form and material effect.",
            ctaLabel: "Request availability",
            images: [
              {
                src: "/images/products/sculptural-cowhide-seat-hero.png",
                alt: "Yellow circular seating object in European cowhide in a bright room",
              },
              {
                src: "/images/products/yellow-cowhide-seat.webp",
                alt: "Yellow seating object in European cowhide with visible hair texture",
              },
            ],
            metaTitle: "Sculptural Seat in European Cowhide",
            metaDescription:
              "Circular seating object in European cowhide, handcrafted in Europe, 126 cm in diameter and 30 cm high.",
          },
          fr: {
            title: "Assise sculpturale en peau de vache européenne",
            cardTitle: "Assise en peau de vache",
            priceNote: "TVA légale incluse, frais de livraison en supplément.",
            shortDescription:
              "Une assise sculpturale réalisée en peau de vache européenne soigneusement sélectionnée. Sa forme basse et circulaire met la matière, la couleur et la texture naturelle au premier plan.",
            longDescription: [
              "L'assise est réalisée en peau de vache européenne sélectionnée et finie à la main.",
              "Sa forme basse et circulaire est à la fois calme et présente. Les marques naturelles de la peau déterminent le caractère de chaque pièce.",
              "Avec un diamètre de 126 centimètres, elle peut servir d'assise généreuse, d'élément central dans une pièce ou de meuble indépendant.",
              "Chaque exemplaire diffère par sa couleur, sa texture et le sens du poil. Ces variations naturelles font de chaque assise une pièce unique.",
            ],
            dimensionsDetails: ["Diamètre : 126 cm", "Hauteur : 30 cm"],
            materialDetails: [
              "Peau de vache européenne véritable",
              "Noyau de rembourrage de haute qualité",
              "Fabriqué à la main en Europe",
            ],
            origin: "Fabriqué à la main en Europe",
            uniqueNote:
              "La couleur, le dessin et le sens du poil varient d'un exemplaire à l'autre. Les images présentées servent de référence pour la forme et l'effet de matière.",
            ctaLabel: "Demander la disponibilité",
            images: [
              {
                src: "/images/products/sculptural-cowhide-seat-hero.png",
                alt: "Assise circulaire jaune en peau de vache européenne dans un espace clair",
              },
              {
                src: "/images/products/yellow-cowhide-seat.webp",
                alt: "Assise jaune en peau de vache européenne avec texture du poil visible",
              },
            ],
            metaTitle: "Assise sculpturale en peau de vache européenne",
            metaDescription:
              "Assise circulaire en peau de vache européenne, fabriquée à la main en Europe, 126 cm de diamètre et 30 cm de hauteur.",
          },
          es: {
            title: "Asiento escultórico en piel de vaca europea",
            cardTitle: "Asiento en piel de vaca",
            priceNote: "IVA legal incluido, gastos de envío no incluidos.",
            shortDescription:
              "Un asiento escultórico realizado en piel de vaca europea cuidadosamente seleccionada. Su forma baja y circular sitúa el material, el color y la textura natural en primer plano.",
            longDescription: [
              "El asiento se realiza en piel de vaca europea seleccionada y se acaba a mano.",
              "Su forma baja y circular resulta serena y visualmente presente. Las marcas naturales de la piel definen el carácter de cada pieza.",
              "Con un diámetro de 126 centímetros, puede utilizarse como asiento amplio, elemento central de una estancia o mueble independiente.",
              "Cada pieza difiere en color, textura y dirección del pelo. Estas variaciones naturales hacen que cada asiento sea único.",
            ],
            dimensionsDetails: ["Diámetro: 126 cm", "Altura: 30 cm"],
            materialDetails: [
              "Piel de vaca europea auténtica",
              "Núcleo de tapicería de alta calidad",
              "Hecho a mano en Europa",
            ],
            origin: "Hecho a mano en Europa",
            uniqueNote:
              "El color, el dibujo y la dirección del pelo varían en cada pieza. Las imágenes mostradas sirven como referencia de forma y efecto material.",
            ctaLabel: "Consultar disponibilidad",
            images: [
              {
                src: "/images/products/sculptural-cowhide-seat-hero.png",
                alt: "Asiento circular amarillo en piel de vaca europea en un espacio luminoso",
              },
              {
                src: "/images/products/yellow-cowhide-seat.webp",
                alt: "Asiento amarillo en piel de vaca europea con textura visible",
              },
            ],
            metaTitle: "Asiento escultórico en piel de vaca europea",
            metaDescription:
              "Asiento circular en piel de vaca europea, hecho a mano en Europa, 126 cm de diámetro y 30 cm de altura.",
          },
          zh: {
            title: "欧洲牛皮雕塑感座椅",
            cardTitle: "欧洲牛皮座椅",
            priceNote: "含法定增值税，运费另计。",
            shortDescription:
              "一件采用严选欧洲牛皮制成的雕塑感座椅。低矮的圆形结构让材质、色彩与天然毛面纹理成为视觉重点。",
            longDescription: [
              "这件座椅采用严选欧洲牛皮制成，并以手工完成。",
              "低矮的圆形形体安静而具有存在感。牛皮的天然纹理决定了每一件作品的性格。",
              "直径 126 厘米的尺度使其可作为宽大的坐面、空间中心或独立家具使用。",
              "每一件在颜色、纹理与毛流方向上都会有所不同。这些天然差异使每件座椅都成为独件。",
            ],
            dimensionsDetails: ["直径：126 厘米", "高度：30 厘米"],
            materialDetails: ["真正的欧洲牛皮", "高品质软包内芯", "欧洲手工制作"],
            origin: "欧洲手工制作",
            uniqueNote:
              "每件作品的颜色、纹理与毛流方向都会不同。所示图片用于说明形态与材质效果。",
            ctaLabel: "咨询库存",
            images: [
              {
                src: "/images/products/sculptural-cowhide-seat-hero.png",
                alt: "明亮空间中的黄色圆形欧洲牛皮座椅",
              },
              {
                src: "/images/products/yellow-cowhide-seat.webp",
                alt: "可见毛面纹理的黄色欧洲牛皮座椅",
              },
            ],
            metaTitle: "欧洲牛皮雕塑感座椅",
            metaDescription:
              "欧洲手工制作的圆形欧洲牛皮座椅，直径 126 厘米，高 30 厘米。",
          },
          ar: {
            title: "مقعد نحتي من جلد البقر الأوروبي",
            cardTitle: "مقعد من جلد البقر",
            priceNote: "شامل ضريبة القيمة المضافة القانونية، ولا يشمل تكاليف الشحن.",
            shortDescription:
              "مقعد نحتي مصنوع من جلد بقر أوروبي مختار بعناية. يبرز شكله الدائري المنخفض المادة واللون والملمس الطبيعي للجلد.",
            longDescription: [
              "يصنع المقعد من جلد بقر أوروبي مختار وينهى يدويا.",
              "يجمع شكله الدائري المنخفض بين الهدوء والحضور البصري. تحدد العلامات الطبيعية في الجلد طابع كل قطعة.",
              "بقطر يبلغ 126 سم، يمكن استخدامه كمقعد واسع أو كعنصر مركزي في الغرفة أو كقطعة أثاث قائمة بذاتها.",
              "تختلف كل قطعة في اللون والملمس واتجاه الشعر. هذه الاختلافات الطبيعية تجعل كل مقعد قطعة فريدة.",
            ],
            dimensionsDetails: ["القطر: 126 سم", "الارتفاع: 30 سم"],
            materialDetails: [
              "جلد بقر أوروبي حقيقي",
              "لب تنجيد عالي الجودة",
              "مصنوع يدويا في أوروبا",
            ],
            origin: "مصنوع يدويا في أوروبا",
            uniqueNote:
              "يختلف اللون والرسم الطبيعي واتجاه الشعر في كل قطعة. الصور المعروضة مرجع للشكل وتأثير المادة.",
            ctaLabel: "استفسر عن التوفر",
            images: [
              {
                src: "/images/products/sculptural-cowhide-seat-hero.png",
                alt: "مقعد دائري أصفر من جلد البقر الأوروبي في مساحة مضيئة",
              },
              {
                src: "/images/products/yellow-cowhide-seat.webp",
                alt: "مقعد أصفر من جلد البقر الأوروبي مع ملمس شعر واضح",
              },
            ],
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

export const products = categorySeeds.flatMap((category) =>
  category.items.map((item, index) => {
    const status = statuses[index % statuses.length];
    const maker = `${category.makerPrefix} ${String.fromCharCode(65 + (index % 8))}`;
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
