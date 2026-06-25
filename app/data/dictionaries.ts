import type { Locale } from "../lib/i18n";

export type Dictionary = {
  localeName: string;
  htmlLang: string;
  dir: "ltr" | "rtl";
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    search: string;
    account: string;
    cart: string;
    labels: Record<string, string>;
  };
  footer: {
    description: string;
    shopHeading: string;
    serviceHeading: string;
    tradeHeading: string;
    socialHeading: string;
    labels: Record<string, string>;
    legal: {
      imprint: string;
      privacy: string;
      terms: string;
    };
  };
  home: {
    heroTitle: string[];
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    shopLinksTitle: string;
    newArrivalsEyebrow: string;
    newArrivalsTitle: string;
    shopCta: string;
    selectedWorksEyebrow: string;
    selectedWorksTitle: string;
    selectedWorksCta: string;
    smallObjectsEyebrow: string;
    smallObjectsTitle: string;
    smallObjectsDescription: string;
    submitEyebrow: string;
    submitTitle: string;
    submitText: string[];
    submitCta: string;
    orientationEyebrow: string;
    orientationTitle: string;
    collectionsEyebrow: string;
    collectionsTitle: string;
    collectionsCta: string;
    materialsEyebrow: string;
    materialsTitle: string;
    materialsCta: string;
    journalEyebrow: string;
    journalTitle: string;
    journalRead: string;
    tradeEyebrow: string;
    tradeTitle: string;
    tradeText: string;
    tradeCta: string;
    newsletterEyebrow: string;
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    areas: Array<{
      title: string;
      text: string;
      href: string;
    }>;
  };
  shop: {
    title: string;
    description: string;
    categoryDescriptions: Record<string, string>;
    backToShop: string;
    backToCategory: string;
    works: string;
    breadcrumbShop: string;
    dimensions: string;
    material: string;
    origin: string;
    productDescription: string;
    availability: Record<string, string>;
    cta: Record<string, string>;
    categories: Record<string, string>;
    genericProductTitle: string;
  };
  journal: {
    eyebrow: string;
    title: string;
    description: string;
    categories: string[];
    titles: string[];
    teasers: string[];
  };
  ui: {
    save: string;
    saved: string;
    share: string;
    read: string;
  };
};

const english: Dictionary = {
  localeName: "English",
  htmlLang: "en",
  dir: "ltr",
  metadata: {
    title: "Curated Design, Art and Objects",
    description:
      "GETYOUR.DESIGN is a curated platform for contemporary design, art, objects, lighting, rugs and editions.",
  },
  nav: {
    search: "Search",
    account: "Account",
    cart: "Cart (0)",
    labels: {
      "Design-Shop": "Design Shop",
      Kunst: "Art",
      Kollektionen: "Collections",
      Ateliers: "Ateliers",
      Journal: "Journal",
    },
  },
  footer: {
    description:
      "Contemporary design, art, objects, lighting, rugs and editions by selected artists, ateliers and makers.",
    shopHeading: "Shop",
    serviceHeading: "Service",
    tradeHeading: "Commissions & Collaborations",
    socialHeading: "Social",
    labels: {
      Shop: "Shop",
      Kunst: "Art",
      Kollektionen: "Collections",
      "Marken & Ateliers": "Brands & Ateliers",
      Künstler: "Artists",
      Materialien: "Materials",
      Journal: "Journal",
      "Commissions & Collaborations": "Commissions & Collaborations",
      Ateliers: "Ateliers",
      "Arbeit einreichen": "Submit Work",
      Versand: "Shipping",
      Retouren: "Returns",
      Authentifizierung: "Authentication",
      Pflegehinweise: "Care Notes",
      Projektanfragen: "Project Inquiries",
      "Private Beschaffung": "Private Sourcing",
      "Atelier-Anfragen": "Atelier Inquiries",
      Kontakt: "Contact",
    },
    legal: {
      imprint: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  home: {
    heroTitle: ["Tell us", "what surrounds you", "and we will tell you", "who you are"],
    tagline: "DESIGN AND ART FOR INDIVIDUALISTS.",
    primaryCta: "Explore Shop",
    secondaryCta: "View Collections",
    shopLinksTitle: "Shop entry points",
    newArrivalsEyebrow: "New Arrivals",
    newArrivalsTitle: "Furniture, artworks, objects, lighting, rugs and editions",
    shopCta: "Design Shop",
    selectedWorksEyebrow: "Selected Works",
    selectedWorksTitle: "Objects, artworks and editions with presence",
    selectedWorksCta: "View Works",
    smallObjectsEyebrow: "Objects & Editions",
    smallObjectsTitle: "Smaller works for first acquisitions and precise accents",
    smallObjectsDescription:
      "Neutral placeholder entries for objects, editions and accessories while final catalogue content is prepared.",
    submitEyebrow: "Submit Work",
    submitTitle: "Submit a work",
    submitText: [
      "We are interested in exceptional works from art, design and object culture.",
      "Every submission is reviewed individually. Inclusion is based on curatorial selection.",
    ],
    submitCta: "Submit Work",
    orientationEyebrow: "Orientation",
    orientationTitle: "Entries into design, art, collections, ateliers and journal.",
    collectionsEyebrow: "Curated Collections",
    collectionsTitle: "Entries into the shop",
    collectionsCta: "View Collections",
    materialsEyebrow: "Ateliers",
    materialsTitle: "Origin, material and craft behind the works.",
    materialsCta: "Meet Ateliers",
    journalEyebrow: "Journal",
    journalTitle: "Object stories, materials and rooms.",
    journalRead: "Read",
    tradeEyebrow: "Commissions & Collaborations",
    tradeTitle: "For architects, interior designers, hotels and project clients.",
    tradeText: "For project sourcing, reserved editions, material selection and curated object lists.",
    tradeCta: "Send Inquiry",
    newsletterEyebrow: "Newsletter",
    newsletterTitle: "Early access to new objects and private editions.",
    newsletterPlaceholder: "Email address",
    newsletterCta: "Sign Up",
    areas: [
      { title: "Design", text: "Furniture, lighting, rugs and distinctive objects selected for lasting rooms.", href: "/shop" },
      { title: "Art", text: "Artworks, editions and positions with an independent point of view.", href: "/art" },
      { title: "Collections", text: "Curated entries by mood, material and object type.", href: "/collections" },
      { title: "Ateliers", text: "Makers, workshops and production contexts behind selected works.", href: "/ateliers" },
      { title: "Journal", text: "Interviews, essays and background stories connected to the collection.", href: "/journal" },
    ],
  },
  shop: {
    title: "Design Shop",
    description:
      "A curated selection of design furniture, artworks, lighting, rugs, accessories, objects and editions for distinctive rooms.",
    categoryDescriptions: {
      Kunst: "Selected artworks, editions and collectible pieces by artists and ateliers.",
      Möbel: "Furniture with architectural clarity, lasting materials and quiet presence.",
      Leuchten: "Lighting as functional objects with sculptural presence.",
      Objekte: "Objects, editions and collectible pieces for distinctive rooms.",
      Tabletop: "Smaller accessories and functional objects for tables, shelves and ensembles.",
      Teppiche: "Rugs and textile works with character, structure and provenance.",
      Editionen: "Limited editions and selected works in small runs.",
      "Collectible Design": "Collectible design between function, craft and art.",
    },
    backToShop: "Back to Shop",
    backToCategory: "Back to",
    works: "Works",
    breadcrumbShop: "Shop",
    dimensions: "Dimensions",
    material: "Material",
    origin: "Origin",
    productDescription:
      "A neutral catalogue placeholder selected for its material presence, proportion and room quality.",
    availability: {
      Verfügbar: "Available",
      "Auf Anfrage verfügbar": "Available on request",
      "Preis auf Anfrage": "Price on request",
      Reserviert: "Reserved",
      Verkauft: "Sold",
    },
    cta: {
      "In den Warenkorb": "Add to cart",
      "Anfrage senden": "Send inquiry",
      "Preis anfragen": "Request price",
      Reserviert: "Reserved",
      Verkauft: "Sold",
    },
    categories: {
      Möbel: "Furniture",
      Leuchten: "Lighting",
      Kunst: "Artworks",
      Teppiche: "Rugs",
      Objekte: "Objects",
      Tabletop: "Accessories",
      "Collectible Design": "Collectible Design",
      Editionen: "Editions",
    },
    genericProductTitle: "Curated Work",
  },
  journal: {
    eyebrow: "Journal",
    title: "Stories about rooms, objects and works with permanence.",
    description: "Essays, interviews and background stories on art, design, materials, ateliers and rooms.",
    categories: ["Objects", "Materials", "Collectible Design", "Ateliers"],
    titles: [
      "How a Single Object Shapes a Room",
      "Materials That Gain Over Time",
      "When Design Becomes Collectible",
      "Where Works Are Made",
    ],
    teasers: [
      "A neutral editorial placeholder connected to selected works and rooms.",
      "A neutral material note for future editorial content.",
      "A neutral note on editions, unique pieces and collected design.",
      "A neutral atelier note for future maker stories.",
    ],
  },
  ui: {
    save: "Save",
    saved: "Saved",
    share: "Share",
    read: "Read",
  },
};

const german: Dictionary = {
  ...english,
  localeName: "Deutsch",
  htmlLang: "de",
  metadata: {
    title: "GETYOUR.DESIGN | Contemporary Design, Kunst und Objekte",
    description:
      "GETYOUR.DESIGN zeigt Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen ausgewählter Künstler, Ateliers und Hersteller.",
  },
  nav: {
    search: "Suche",
    account: "Konto",
    cart: "Warenkorb (0)",
    labels: {
      "Design-Shop": "Design-Shop",
      Kunst: "Kunst",
      Kollektionen: "Kollektionen",
      Ateliers: "Ateliers",
      Journal: "Journal",
    },
  },
  footer: {
    ...english.footer,
    description:
      "Contemporary Design, Kunst, Objekte, Leuchten, Teppiche und Editionen ausgewählter Künstler, Ateliers und Hersteller.",
    labels: {
      Shop: "Shop",
      Kunst: "Kunst",
      Kollektionen: "Kollektionen",
      "Marken & Ateliers": "Marken & Ateliers",
      Künstler: "Künstler",
      Materialien: "Materialien",
      Journal: "Journal",
      "Commissions & Collaborations": "Commissions & Collaborations",
      Ateliers: "Ateliers",
      "Arbeit einreichen": "Arbeit einreichen",
      Versand: "Versand",
      Retouren: "Retouren",
      Authentifizierung: "Authentifizierung",
      Pflegehinweise: "Pflegehinweise",
      Projektanfragen: "Projektanfragen",
      "Private Beschaffung": "Private Beschaffung",
      "Atelier-Anfragen": "Atelier-Anfragen",
      Kontakt: "Kontakt",
    },
    legal: {
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
    },
  },
  shop: {
    ...english.shop,
    categories: {
      Möbel: "Möbel",
      Leuchten: "Leuchten",
      Kunst: "Kunst",
      Teppiche: "Teppiche",
      Objekte: "Objekte",
      Tabletop: "Accessoires",
      "Collectible Design": "Collectible Design",
      Editionen: "Editionen",
    },
  },
  ui: {
    save: "Merken",
    saved: "Gemerkt",
    share: "Teilen",
    read: "Lesen",
  },
};

const french: Dictionary = {
  ...english,
  localeName: "Français",
  htmlLang: "fr",
  metadata: {
    title: "Design, art et objets sélectionnés",
    description:
      "GETYOUR.DESIGN présente une sélection de design contemporain, art, objets, luminaires, tapis et éditions.",
  },
  nav: {
    ...english.nav,
    search: "Recherche",
    account: "Compte",
    cart: "Panier (0)",
    labels: {
      "Design-Shop": "Boutique Design",
      Kunst: "Art",
      Kollektionen: "Collections",
      Ateliers: "Ateliers",
      Journal: "Journal",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["Dites-nous", "ce qui vous entoure", "et nous vous dirons", "qui vous êtes"],
    tagline: "DESIGN ET ART POUR INDIVIDUALISTES.",
    primaryCta: "Explorer la boutique",
    secondaryCta: "Voir les collections",
    newArrivalsEyebrow: "Nouveautés",
    selectedWorksEyebrow: "Sélection",
    submitCta: "Soumettre une œuvre",
    journalRead: "Lire",
  },
  shop: {
    ...english.shop,
    backToShop: "Retour à la boutique",
    backToCategory: "Retour à",
    works: "Œuvres",
    dimensions: "Dimensions",
    origin: "Origine",
    productDescription:
      "Placeholder neutre de catalogue, présenté pour sa présence matérielle, ses proportions et sa qualité spatiale.",
    genericProductTitle: "Œuvre sélectionnée",
  },
  ui: {
    save: "Enregistrer",
    saved: "Enregistré",
    share: "Partager",
    read: "Lire",
  },
};

const spanish: Dictionary = {
  ...english,
  localeName: "Español",
  htmlLang: "es",
  metadata: {
    title: "Diseño, arte y objetos seleccionados",
    description:
      "GETYOUR.DESIGN presenta diseño contemporáneo, arte, objetos, iluminación, alfombras y ediciones seleccionadas.",
  },
  nav: {
    ...english.nav,
    search: "Buscar",
    account: "Cuenta",
    cart: "Carrito (0)",
    labels: {
      "Design-Shop": "Tienda de diseño",
      Kunst: "Arte",
      Kollektionen: "Colecciones",
      Ateliers: "Ateliers",
      Journal: "Diario",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["Díganos", "qué le rodea", "y le diremos", "quién es"],
    tagline: "DISEÑO Y ARTE PARA INDIVIDUALISTAS.",
    primaryCta: "Explorar tienda",
    secondaryCta: "Ver colecciones",
    newArrivalsEyebrow: "Novedades",
    selectedWorksEyebrow: "Selección",
    submitCta: "Enviar obra",
    journalRead: "Leer",
  },
  shop: {
    ...english.shop,
    backToShop: "Volver a la tienda",
    backToCategory: "Volver a",
    works: "Obras",
    dimensions: "Dimensiones",
    material: "Material",
    origin: "Origen",
    productDescription:
      "Placeholder neutral de catálogo seleccionado por su presencia material, proporción y calidad espacial.",
    genericProductTitle: "Obra seleccionada",
  },
  ui: {
    save: "Guardar",
    saved: "Guardado",
    share: "Compartir",
    read: "Leer",
  },
};

const chinese: Dictionary = {
  ...english,
  localeName: "简体中文",
  htmlLang: "zh",
  metadata: {
    title: "精选设计、艺术与物件",
    description:
      "GETYOUR.DESIGN 展示当代设计、艺术、物件、灯具、地毯与限量作品的精选内容。",
  },
  nav: {
    ...english.nav,
    search: "搜索",
    account: "账户",
    cart: "购物车 (0)",
    labels: {
      "Design-Shop": "设计商店",
      Kunst: "艺术",
      Kollektionen: "系列",
      Ateliers: "工作室",
      Journal: "日志",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["告诉我们", "你被什么围绕", "我们会告诉你", "你是谁"],
    tagline: "为独立审美者呈现设计与艺术。",
    primaryCta: "浏览商店",
    secondaryCta: "查看系列",
    newArrivalsEyebrow: "新品",
    selectedWorksEyebrow: "精选作品",
    submitCta: "提交作品",
    journalRead: "阅读",
  },
  shop: {
    ...english.shop,
    backToShop: "返回商店",
    backToCategory: "返回",
    works: "作品",
    dimensions: "尺寸",
    material: "材质",
    origin: "来源",
    productDescription:
      "中性目录占位内容，用于展示材质存在感、比例与空间品质。",
    genericProductTitle: "精选作品",
  },
  ui: {
    save: "保存",
    saved: "已保存",
    share: "分享",
    read: "阅读",
  },
};

const arabic: Dictionary = {
  ...english,
  localeName: "العربية",
  htmlLang: "ar",
  dir: "rtl",
  metadata: {
    title: "تصميم وفن وقطع مختارة",
    description:
      "يعرض GETYOUR.DESIGN مختارات من التصميم المعاصر والفن والقطع والإضاءة والسجاد والإصدارات.",
  },
  nav: {
    ...english.nav,
    search: "بحث",
    account: "الحساب",
    cart: "السلة (0)",
    labels: {
      "Design-Shop": "متجر التصميم",
      Kunst: "فن",
      Kollektionen: "مجموعات",
      Ateliers: "مشاغل",
      Journal: "مجلة",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["أخبرنا", "ما الذي يحيط بك", "وسنخبرك", "من أنت"],
    tagline: "تصميم وفن لأصحاب الذائقة الفردية.",
    primaryCta: "استكشاف المتجر",
    secondaryCta: "عرض المجموعات",
    newArrivalsEyebrow: "وصل حديثا",
    selectedWorksEyebrow: "مختارات",
    submitCta: "إرسال عمل",
    journalRead: "قراءة",
  },
  shop: {
    ...english.shop,
    backToShop: "العودة إلى المتجر",
    backToCategory: "العودة إلى",
    works: "أعمال",
    dimensions: "الأبعاد",
    material: "المادة",
    origin: "المنشأ",
    productDescription:
      "محتوى عرض محايد في الكتالوج يبرز الحضور المادي والنسبة وجودة المساحة.",
    genericProductTitle: "عمل مختار",
  },
  ui: {
    save: "حفظ",
    saved: "محفوظ",
    share: "مشاركة",
    read: "قراءة",
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  de: german,
  en: english,
  fr: french,
  es: spanish,
  zh: chinese,
  ar: arabic,
};

export function getDictionary(locale: Locale): Dictionary {
  return {
    ...english,
    ...dictionaries[locale],
    metadata: {
      ...english.metadata,
      ...dictionaries[locale].metadata,
    },
    nav: {
      ...english.nav,
      ...dictionaries[locale].nav,
      labels: {
        ...english.nav.labels,
        ...dictionaries[locale].nav.labels,
      },
    },
    footer: {
      ...english.footer,
      ...dictionaries[locale].footer,
      labels: {
        ...english.footer.labels,
        ...dictionaries[locale].footer.labels,
      },
      legal: {
        ...english.footer.legal,
        ...dictionaries[locale].footer.legal,
      },
    },
    home: {
      ...english.home,
      ...dictionaries[locale].home,
    },
    shop: {
      ...english.shop,
      ...dictionaries[locale].shop,
      categoryDescriptions: {
        ...english.shop.categoryDescriptions,
        ...dictionaries[locale].shop.categoryDescriptions,
      },
      availability: {
        ...english.shop.availability,
        ...dictionaries[locale].shop.availability,
      },
      cta: {
        ...english.shop.cta,
        ...dictionaries[locale].shop.cta,
      },
      categories: {
        ...english.shop.categories,
        ...dictionaries[locale].shop.categories,
      },
    },
    journal: {
      ...english.journal,
      ...dictionaries[locale].journal,
    },
    ui: {
      ...english.ui,
      ...dictionaries[locale].ui,
    },
  };
}
