import type { Locale } from "../lib/i18n";

export type Dictionary = {
  localeName: string;
  htmlLang: string;
  dir: "ltr" | "rtl";
  metadata: {
    title: string;
    description: string;
  };
  pages: Record<string, {
    title: string;
    description: string;
  }>;
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
    featuredProductEyebrow: string;
    featuredProductLink: string;
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
    materialLabels: Record<string, string>;
  };
  shop: {
    title: string;
    headline: string;
    description: string;
    categoryDescriptions: Record<string, string>;
    categoryMetaTitles: Record<string, string>;
    categoryMetaDescriptions: Record<string, string>;
    categoryEmptyStates: Record<string, {
      title: string;
      text: string;
    }>;
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
    commerce: {
      direct: {
        modeLabel: string;
        description: string;
        sellerLabel: string;
      };
      affiliate: {
        modeLabel: string;
        description: string;
        sellerLabel: string;
        priceDisclaimer: string;
      };
      inquiry: {
        modeLabel: string;
        description: string;
        sellerLabel: string;
      };
      status: {
        modeLabel: string;
        description: string;
      };
      unavailable: {
        modeLabel: string;
        description: string;
      };
    };
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
  collections: Record<string, {
    title: string;
    description: string;
  }>;
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
  pages: {
    art: {
      title: "Art",
      description: "Selected artworks, editions and independent artistic positions at GETYOUR.DESIGN.",
    },
    artists: {
      title: "Artists",
      description: "Artists and artistic positions connected to selected works at GETYOUR.DESIGN.",
    },
    ateliers: {
      title: "Ateliers",
      description: "Ateliers, makers and workshops behind selected design objects, art and editions.",
    },
    brands: {
      title: "Brands & Ateliers",
      description: "Selected makers, manufacturers and ateliers behind the GETYOUR.DESIGN collection.",
    },
    collections: {
      title: "Collections",
      description: "Curated entries by mood, material and object type.",
    },
    contact: {
      title: "Contact",
      description: "Contact GETYOUR.DESIGN for private sourcing, product enquiries, artworks and project requests.",
    },
    gallery: {
      title: "Gallery",
      description: "A quiet visual overview of selected works and object contexts.",
    },
    materials: {
      title: "Materials",
      description: "A material library for surfaces, texture and lasting object quality.",
    },
    objects: {
      title: "Objects",
      description: "Selected objects, editions and accessories for distinctive rooms.",
    },
    "sculptural-seating": {
      title: "Sculptural Seating",
      description: "Seating objects with sculptural presence and room-defining proportions.",
    },
    trade: {
      title: "Trade",
      description: "Project inquiries, private sourcing and selected object lists for professionals.",
    },
    suche: {
      title: "Search",
      description: "Search design, art, ateliers and objects at GETYOUR.DESIGN.",
    },
    warenkorb: {
      title: "Cart",
      description: "Cart at GETYOUR.DESIGN.",
    },
    shop: {
      title: "Design Shop",
      description: "Curated furniture, lighting, rugs, artworks, accessories and objects.",
    },
    "luxury-coasters": {
      title: "Luxury Cowhide Coasters",
      description: "A presentation page for handcrafted luxury cowhide coasters.",
    },
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
    featuredProductEyebrow: "Selected Object",
    featuredProductLink: "View Object",
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
    materialLabels: {
      Wolle: "Wool",
      Leder: "Leather",
      Keramik: "Ceramic",
      Holz: "Wood",
      Travertine: "Travertine",
      Bronze: "Bronze",
    },
  },
  shop: {
    title: "Design Shop",
    headline: "Furniture, lighting, art, rugs, objects and editions.",
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
      Decoration: "Decorative objects, sculptural accents and quiet pieces for shelves, surfaces and rooms.",
      Tableware: "Tableware for cultivated settings: plates, bowls, cups and serving pieces selected for material presence.",
      Glassware: "Glassware, vessels and transparent objects for table, bar and display.",
      Kitchen: "Functional kitchen objects with durable materials, calm forms and everyday usefulness.",
      Textiles: "Textile pieces beyond rugs: throws, cushions, fabrics and soft surfaces for lived-in rooms.",
      Outdoor: "Objects and furniture for terraces, gardens and open-air rooms, curated with material resilience in mind.",
      Bath: "Bath objects, accessories and material details for quiet private spaces.",
      Kids: "Design objects for children’s rooms, selected with calm forms, tactility and longevity.",
    },
    categoryMetaTitles: {
      Decoration: "Decoration",
      Tableware: "Tableware",
      Glassware: "Glassware",
      Kitchen: "Kitchen Objects",
      Textiles: "Textiles",
      Outdoor: "Outdoor Design",
      Bath: "Bath Objects",
      Kids: "Kids Design",
    },
    categoryMetaDescriptions: {
      Decoration: "Decorative objects, sculptural accents and quiet room pieces at GETYOUR.DESIGN, curated with material presence and restraint.",
      Tableware: "Tableware for cultivated settings: plates, bowls, cups and serving pieces selected for materiality, proportion and daily use.",
      Glassware: "Glassware, vessels and transparent objects for table, bar and display, curated for quiet interiors.",
      Kitchen: "Kitchen objects and functional pieces with durable materials, calm forms and considered everyday use.",
      Textiles: "Textile pieces beyond rugs: throws, cushions, fabrics and soft surfaces selected for rooms with texture.",
      Outdoor: "Outdoor design for terraces, gardens and open-air rooms, curated with material resilience and quiet forms.",
      Bath: "Bath objects, accessories and material details for private spaces, selected with calm precision.",
      Kids: "Design for children’s rooms with calm forms, tactile materials and durable objects selected for everyday life.",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "A decorative edit is being composed.",
        text: "Objects and accents for this category are being curated gradually, with a focus on material, proportion and room presence.",
      },
      Tableware: {
        title: "Tableware is being selected.",
        text: "Plates, bowls, cups and serving pieces will be added step by step once the selection is ready.",
      },
      Glassware: {
        title: "Glass pieces are in preparation.",
        text: "The future selection will focus on vessels, drinking glasses and transparent objects with quiet character.",
      },
      Kitchen: {
        title: "Kitchen objects are being reviewed.",
        text: "Functional pieces for preparation, storage and use will appear here as the curation develops.",
      },
      Textiles: {
        title: "A textile selection is being built.",
        text: "Soft surfaces, throws, cushions and fabrics will be added gradually with attention to touch and material.",
      },
      Outdoor: {
        title: "Outdoor pieces are being curated.",
        text: "Objects and furniture for open-air rooms will follow with careful attention to material and setting.",
      },
      Bath: {
        title: "Bath objects are being prepared.",
        text: "Accessories and material details for private spaces will be added as the category develops.",
      },
      Kids: {
        title: "A quiet children’s edit is being assembled.",
        text: "Durable, tactile and considered pieces for children’s rooms will be introduced gradually.",
      },
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
      "Beim Partner ansehen": "View at partner",
      Reserviert: "Reserved",
      Verkauft: "Sold",
    },
    commerce: {
      direct: {
        modeLabel: "Available directly from GETYOUR.DESIGN",
        description:
          "Purchase is handled directly by GETYOUR.DESIGN. Payment is processed securely through Stripe; shipping and delivery details follow the product information.",
        sellerLabel: "Seller: GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "Available from our partner",
        description:
          "Purchase takes place with the external partner. GETYOUR.DESIGN is not the seller of this product.",
        sellerLabel: "External partner offer",
        priceDisclaimer: "Price and availability may change on the partner site.",
      },
      inquiry: {
        modeLabel: "Available on request",
        description:
          "This product is available by request. Availability, price or execution are confirmed individually through the existing enquiry process.",
        sellerLabel: "Inquiry to GETYOUR.DESIGN",
      },
      status: {
        modeLabel: "Current product status",
        description:
          "The next step follows the current product status and the existing GETYOUR.DESIGN enquiry or cart logic.",
      },
      unavailable: {
        modeLabel: "Currently unavailable",
        description:
          "This product is currently reserved or sold. The action is inactive until availability changes.",
      },
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
  collections: {
    "material-surface": {
      title: "Material and Surface",
      description: "Neutral textures, mineral tones and objects with visible material presence.",
    },
    "quiet-rooms": {
      title: "Quiet Rooms",
      description: "Subtle materials, balanced proportions and restrained objects.",
    },
    "collectible-design": {
      title: "Collectible Design",
      description: "Editions and design objects prepared for curated rooms.",
    },
    "editions-artworks": {
      title: "Editions and Artworks",
      description: "Works and objects between art, furniture and interiors.",
    },
    "seating-design-furniture": {
      title: "Seating and Design Furniture",
      description: "Seating, lounges and furniture with a clear silhouette.",
    },
    "natural-materials": {
      title: "Natural Materials",
      description: "Wood, wool, stone, leather, ceramic and bronze with tactile permanence.",
    },
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
  pages: {
    ...english.pages,
    art: {
      title: "Kunst",
      description: "Kunstwerke, Papierarbeiten, Skulpturen und Editionen bei GETYOUR.DESIGN.",
    },
    artists: {
      title: "Künstler",
      description: "Künstler und Positionen ausgewählter Arbeiten bei GETYOUR.DESIGN.",
    },
    ateliers: {
      title: "Ateliers",
      description: "Ateliers, Werkstätten und Prozesse hinter Möbeln, Kunst, Objekten und Editionen.",
    },
    brands: {
      title: "Marken & Ateliers",
      description: "Ausgewählte Hersteller, Manufakturen und Ateliers hinter der Kollektion.",
    },
    collections: {
      title: "Kollektionen",
      description: "Kuratierte Einstiege nach Stimmung, Material und Objektart.",
    },
    contact: {
      title: "Kontakt",
      description: "Kontakt zu GETYOUR.DESIGN für private Beschaffung, Produktanfragen, Kunstwerke und Projekte.",
    },
    materials: {
      title: "Materialien",
      description: "Eine Materialbibliothek für Oberflächen, Haptik und Wertigkeit.",
    },
    objects: {
      title: "Objekte",
      description: "Ausgewählte Objekte, Editionen und Accessoires für besondere Räume.",
    },
    trade: {
      title: "Projektanfragen",
      description: "Projektanfragen, private Beschaffung und kuratierte Objektlisten.",
    },
    suche: {
      title: "Suche",
      description: "Suche nach Design, Kunst, Ateliers und Objekten bei GETYOUR.DESIGN.",
    },
    warenkorb: {
      title: "Warenkorb",
      description: "Warenkorb von GETYOUR.DESIGN.",
    },
    shop: {
      title: "Design-Shop",
      description: "Möbel, Leuchten, Kunst, Teppiche, Objekte, Accessoires und Editionen.",
    },
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
    title: "Design-Shop",
    headline: "Möbel, Leuchten, Kunst, Teppiche, Objekte und Editionen.",
    description:
      "Eine kuratierte Auswahl aus Designmöbeln, Kunstwerken, Leuchten, Teppichen, Accessoires, Objekten und Editionen.",
    backToShop: "Zurück zum Shop",
    backToCategory: "Zurück zu",
    works: "Arbeiten",
    breadcrumbShop: "Shop",
    dimensions: "Maße",
    material: "Material",
    origin: "Herkunft",
    productDescription:
      "Neutraler Katalog-Platzhalter mit Fokus auf Materialpräsenz, Proportion und Raumqualität.",
    categoryDescriptions: {
      Decoration: "Dekorative Wohnobjekte, skulpturale Akzente und ruhige Stücke für Flächen, Regale und Räume.",
      Tableware: "Geschirr und Tischkultur: Teller, Schalen, Tassen und Servierobjekte mit klarer Materialwirkung.",
      Glassware: "Gläser, Gefäße und transparente Objekte für Tisch, Bar und Vitrine.",
      Kitchen: "Funktionale Küchenobjekte mit langlebigen Materialien, ruhigen Formen und alltäglicher Präzision.",
      Textiles: "Textile Stücke jenseits von Teppichen: Plaids, Kissen, Stoffe und weiche Oberflächen für bewohnte Räume.",
      Outdoor: "Objekte und Möbel für Terrasse, Garten und Außenräume mit Blick auf Materialbeständigkeit.",
      Bath: "Badobjekte, Accessoires und Materialdetails für ruhige private Räume.",
      Kids: "Designobjekte für Kinderzimmer mit ruhiger Form, Haptik und langlebiger Materialität.",
    },
    categoryMetaTitles: {
      Decoration: "Dekoration",
      Tableware: "Geschirr",
      Glassware: "Gläser",
      Kitchen: "Küche",
      Textiles: "Textilien",
      Outdoor: "Outdoor Design",
      Bath: "Bad",
      Kids: "Kinderzimmer Design",
    },
    categoryMetaDescriptions: {
      Decoration: "Dekorative Wohnobjekte, skulpturale Akzente und ruhige Stücke für Flächen, Regale und Räume bei GETYOUR.DESIGN.",
      Tableware: "Geschirr und Tischkultur bei GETYOUR.DESIGN: Teller, Schalen, Tassen und Servierobjekte mit Materialpräsenz.",
      Glassware: "Gläser, Gefäße und transparente Objekte für Tisch, Bar und Vitrine, kuratiert für ruhige Interieurs.",
      Kitchen: "Funktionale Küchenobjekte mit langlebigen Materialien, ruhigen Formen und präziser Alltagstauglichkeit.",
      Textiles: "Textile Stücke jenseits von Teppichen: Plaids, Kissen, Stoffe und weiche Oberflächen für besondere Räume.",
      Outdoor: "Outdoor Design für Terrasse, Garten und Außenräume, kuratiert mit Blick auf Material und Beständigkeit.",
      Bath: "Badobjekte, Accessoires und Materialdetails für private Räume, ruhig und präzise ausgewählt.",
      Kids: "Design für Kinderzimmer mit ruhigen Formen, haptischen Materialien und langlebigen Objekten.",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "Eine Auswahl für Dekoration entsteht.",
        text: "Wohnobjekte und Akzente für diese Kategorie werden schrittweise kuratiert, mit Fokus auf Material, Proportion und Raumwirkung.",
      },
      Tableware: {
        title: "Die Geschirr-Auswahl wird kuratiert.",
        text: "Teller, Schalen, Tassen und Servierobjekte werden ergänzt, sobald die Auswahl in Material und Form stimmig ist.",
      },
      Glassware: {
        title: "Gläser und Gefäße sind in Vorbereitung.",
        text: "Die spätere Auswahl konzentriert sich auf Glasobjekte mit klarer Funktion, Transparenz und ruhigem Charakter.",
      },
      Kitchen: {
        title: "Küchenobjekte werden geprüft.",
        text: "Funktionale Stücke für Vorbereitung, Aufbewahrung und Gebrauch erscheinen hier nach und nach.",
      },
      Textiles: {
        title: "Eine textile Auswahl wird aufgebaut.",
        text: "Plaids, Kissen, Stoffe und weiche Oberflächen werden mit Blick auf Haptik und Material ergänzt.",
      },
      Outdoor: {
        title: "Outdoor-Objekte werden kuratiert.",
        text: "Stücke für Terrasse, Garten und Außenräume folgen mit besonderem Blick auf Material und Umgebung.",
      },
      Bath: {
        title: "Badobjekte sind in Vorbereitung.",
        text: "Accessoires und Materialdetails für private Räume werden ergänzt, sobald die Auswahl tragfähig ist.",
      },
      Kids: {
        title: "Eine ruhige Auswahl für Kinderzimmer entsteht.",
        text: "Langlebige, haptische und bewusst gestaltete Stücke für Kinderzimmer werden schrittweise eingeführt.",
      },
    },
    cta: {
      "Beim Partner ansehen": "Beim Partner ansehen",
    },
    commerce: {
      direct: {
        modeLabel: "Direkt über GETYOUR.DESIGN",
        description:
          "Der Kauf erfolgt direkt über GETYOUR.DESIGN. Die Zahlung wird sicher über Stripe verarbeitet; Versand- und Lieferinformationen ergeben sich aus den Produktinformationen.",
        sellerLabel: "Verkäufer: GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "Beim Partner erhältlich",
        description:
          "Der Kauf erfolgt beim externen Partner. GETYOUR.DESIGN ist nicht Verkäufer dieses Produkts.",
        sellerLabel: "Externes Partnerangebot",
        priceDisclaimer: "Preis und Verfügbarkeit können sich beim Partner ändern.",
      },
      inquiry: {
        modeLabel: "Auf Anfrage erhältlich",
        description:
          "Dieses Produkt ist auf Anfrage erhältlich. Verfügbarkeit, Preis oder Ausführung werden individuell über die bestehende Anfrage bestätigt.",
        sellerLabel: "Anfrage an GETYOUR.DESIGN",
      },
      status: {
        modeLabel: "Aktueller Produktstatus",
        description:
          "Der nächste Schritt folgt dem aktuellen Produktstatus und der bestehenden Anfrage- oder Warenkorblogik von GETYOUR.DESIGN.",
      },
      unavailable: {
        modeLabel: "Derzeit nicht verfügbar",
        description:
          "Dieses Produkt ist derzeit reserviert oder verkauft. Die Aktion bleibt inaktiv, bis sich die Verfügbarkeit ändert.",
      },
    },
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
  collections: {
    "material-surface": {
      title: "Material und Oberfläche",
      description: "Unpolierte Texturen, mineralische Töne und Objekte mit sichtbarer Materialspur.",
    },
    "quiet-rooms": {
      title: "Ruhige Räume",
      description: "Subtile Materialien, ausgewogene Proportionen und Objekte mit Zurückhaltung.",
    },
    "collectible-design": {
      title: "Collectible Design",
      description: "Limitierte Editionen und Möbel mit langfristigem Wert für kuratierte Räume.",
    },
    "editions-artworks": {
      title: "Editionen und Kunstwerke",
      description: "Arbeiten und Objekte an der Schnittstelle von Kunst, Möbel und Interior.",
    },
    "seating-design-furniture": {
      title: "Sitzobjekte und Designmöbel",
      description: "Sessel, Lounges und Sofas mit starker Silhouette und raumprägender Präsenz.",
    },
    "natural-materials": {
      title: "Natürliche Materialien",
      description: "Holz, Wolle, Stein, Leder, Keramik und Bronze mit taktiler Beständigkeit.",
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
  pages: {
    ...english.pages,
    art: { title: "Art", description: "Œuvres, éditions et positions artistiques sélectionnées." },
    artists: { title: "Artistes", description: "Artistes et positions liées aux œuvres sélectionnées." },
    ateliers: { title: "Ateliers", description: "Ateliers, fabricants et contextes de production des œuvres." },
    brands: { title: "Marques & Ateliers", description: "Fabricants, marques et ateliers sélectionnés." },
    collections: { title: "Collections", description: "Entrées organisées par matière, ambiance et type d’objet." },
    contact: { title: "Contact", description: "Contact pour demandes privées, objets, œuvres et projets." },
    materials: { title: "Matériaux", description: "Bibliothèque de matières, surfaces et textures." },
    objects: { title: "Objets", description: "Objets, éditions et accessoires sélectionnés." },
    trade: { title: "Demandes projet", description: "Demandes projet et sourcing privé pour professionnels." },
    suche: { title: "Recherche", description: "Rechercher design, art, ateliers et objets." },
    warenkorb: { title: "Panier", description: "Panier GETYOUR.DESIGN." },
    shop: { title: "Boutique Design", description: "Mobilier, luminaires, art, tapis, objets, accessoires et éditions." },
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
  footer: {
    ...english.footer,
    description:
      "Design contemporain, art, objets, luminaires, tapis et éditions par des artistes, ateliers et fabricants sélectionnés.",
    shopHeading: "Boutique",
    serviceHeading: "Service",
    tradeHeading: "Projets & collaborations",
    socialHeading: "Social",
    labels: {
      Shop: "Boutique",
      Kunst: "Art",
      Kollektionen: "Collections",
      "Marken & Ateliers": "Marques & Ateliers",
      Künstler: "Artistes",
      Materialien: "Matériaux",
      Journal: "Journal",
      "Commissions & Collaborations": "Projets & collaborations",
      Ateliers: "Ateliers",
      "Arbeit einreichen": "Soumettre une œuvre",
      Versand: "Expédition",
      Retouren: "Retours",
      Authentifizierung: "Authentification",
      Pflegehinweise: "Conseils d’entretien",
      Projektanfragen: "Demandes projet",
      "Private Beschaffung": "Sourcing privé",
      "Atelier-Anfragen": "Demandes atelier",
      Kontakt: "Contact",
    },
    legal: {
      imprint: "Mentions légales",
      privacy: "Confidentialité",
      terms: "Conditions",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["Dites-nous", "ce qui vous entoure", "et nous vous dirons", "qui vous êtes"],
    tagline: "DESIGN ET ART POUR INDIVIDUALISTES.",
    primaryCta: "Explorer la boutique",
    secondaryCta: "Voir les collections",
    shopLinksTitle: "Entrées boutique",
    featuredProductEyebrow: "Objet sélectionné",
    featuredProductLink: "Voir l’objet",
    newArrivalsEyebrow: "Nouveautés",
    newArrivalsTitle: "Mobilier, œuvres, objets, luminaires, tapis et éditions",
    shopCta: "Boutique Design",
    selectedWorksEyebrow: "Sélection",
    selectedWorksTitle: "Objets, œuvres et éditions avec présence",
    selectedWorksCta: "Voir les œuvres",
    smallObjectsEyebrow: "Objets & Éditions",
    smallObjectsTitle: "Petites pièces pour premières acquisitions et accents précis",
    smallObjectsDescription:
      "Entrées neutres pour objets, éditions et accessoires pendant la préparation du catalogue final.",
    submitEyebrow: "Soumettre une œuvre",
    submitTitle: "Soumettre une œuvre",
    submitText: [
      "Nous examinons des œuvres remarquables issues de l’art, du design et de la culture de l’objet.",
      "Chaque soumission est étudiée individuellement selon une sélection curatoriale.",
    ],
    submitCta: "Soumettre une œuvre",
    orientationEyebrow: "Orientation",
    orientationTitle: "Entrées vers design, art, collections, ateliers et journal.",
    collectionsEyebrow: "Collections sélectionnées",
    collectionsTitle: "Entrées dans la boutique",
    collectionsCta: "Voir les collections",
    materialsEyebrow: "Ateliers",
    materialsTitle: "Origine, matière et savoir-faire derrière les œuvres.",
    materialsCta: "Découvrir les ateliers",
    journalEyebrow: "Journal",
    journalTitle: "Histoires d’objets, de matières et de lieux.",
    journalRead: "Lire",
    tradeEyebrow: "Projets & collaborations",
    tradeTitle: "Pour architectes, décorateurs, hôtels et projets.",
    tradeText: "Pour sourcing de projet, éditions réservées et listes d’objets sélectionnés.",
    tradeCta: "Envoyer une demande",
    newsletterEyebrow: "Lettre d’information",
    newsletterTitle: "Accès anticipé aux nouveaux objets et éditions privées.",
    newsletterPlaceholder: "Adresse e-mail",
    newsletterCta: "S’inscrire",
    areas: [
      { title: "Design", text: "Mobilier, luminaires, tapis et objets distinctifs pour des espaces durables.", href: "/shop" },
      { title: "Art", text: "Œuvres, éditions et positions avec un point de vue indépendant.", href: "/art" },
      { title: "Collections", text: "Entrées sélectionnées par ambiance, matière et type d’objet.", href: "/collections" },
      { title: "Ateliers", text: "Fabricants, ateliers et contextes de production des œuvres.", href: "/ateliers" },
      { title: "Journal", text: "Textes et notes autour des objets, matières et ateliers.", href: "/journal" },
    ],
    materialLabels: {
      Wolle: "Laine",
      Leder: "Cuir",
      Keramik: "Céramique",
      Holz: "Bois",
      Travertine: "Travertin",
      Bronze: "Bronze",
    },
  },
  shop: {
    ...english.shop,
    title: "Boutique Design",
    headline: "Mobilier, luminaires, art, tapis, objets et éditions.",
    description:
      "Une sélection de mobilier, œuvres, luminaires, tapis, accessoires, objets et éditions pour des espaces distinctifs.",
    backToShop: "Retour à la boutique",
    backToCategory: "Retour à",
    works: "Œuvres",
    breadcrumbShop: "Boutique",
    dimensions: "Dimensions",
    origin: "Origine",
    productDescription:
      "Placeholder neutre de catalogue, présenté pour sa présence matérielle, ses proportions et sa qualité spatiale.",
    categoryDescriptions: {
      Kunst: "Œuvres, éditions et pièces sélectionnées par artistes et ateliers.",
      Möbel: "Mobilier avec clarté architecturale, matières durables et présence calme.",
      Leuchten: "Luminaires comme objets fonctionnels à présence sculpturale.",
      Objekte: "Objets, éditions et pièces pour espaces distinctifs.",
      Tabletop: "Accessoires et petits objets fonctionnels pour tables et étagères.",
      Teppiche: "Tapis et œuvres textiles avec structure et provenance.",
      Editionen: "Éditions limitées et travaux sélectionnés en petits tirages.",
      "Collectible Design": "Design de collection entre fonction, artisanat et art.",
      Decoration: "Objets décoratifs, accents sculpturaux et pièces calmes pour surfaces, étagères et espaces.",
      Tableware: "Arts de la table : assiettes, bols, tasses et pièces de service choisis pour leur matière.",
      Glassware: "Verrerie, contenants et objets transparents pour la table, le bar et la présentation.",
      Kitchen: "Objets de cuisine fonctionnels avec matières durables, formes calmes et usage quotidien.",
      Textiles: "Pièces textiles au-delà des tapis : plaids, coussins, tissus et surfaces souples.",
      Outdoor: "Objets et mobilier pour terrasses, jardins et espaces extérieurs, choisis pour leur tenue.",
      Bath: "Objets de bain, accessoires et détails de matière pour espaces privés et calmes.",
      Kids: "Objets de design pour chambres d'enfants, avec formes calmes, toucher et durée.",
    },
    categoryMetaTitles: {
      Decoration: "Décoration",
      Tableware: "Arts de la table",
      Glassware: "Verrerie",
      Kitchen: "Cuisine",
      Textiles: "Textiles",
      Outdoor: "Outdoor Design",
      Bath: "Bain",
      Kids: "Design enfant",
    },
    categoryMetaDescriptions: {
      Decoration: "Objets décoratifs, accents sculpturaux et pièces calmes pour surfaces, étagères et espaces chez GETYOUR.DESIGN.",
      Tableware: "Arts de la table chez GETYOUR.DESIGN : assiettes, bols, tasses et pièces de service choisis pour leur matière.",
      Glassware: "Verrerie, contenants et objets transparents pour la table, le bar et la présentation.",
      Kitchen: "Objets de cuisine fonctionnels avec matières durables, formes calmes et usage quotidien précis.",
      Textiles: "Pièces textiles au-delà des tapis : plaids, coussins, tissus et surfaces souples pour espaces habités.",
      Outdoor: "Design outdoor pour terrasses, jardins et espaces extérieurs, sélectionné avec attention à la matière.",
      Bath: "Objets de bain, accessoires et détails de matière pour espaces privés, choisis avec calme et précision.",
      Kids: "Design pour chambres d'enfants avec formes calmes, matières tactiles et objets durables.",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "Une sélection décorative est en cours.",
        text: "Les objets et accents seront ajoutés progressivement, avec attention à la matière, aux proportions et à l'espace.",
      },
      Tableware: {
        title: "La sélection d'arts de la table se prépare.",
        text: "Assiettes, bols, tasses et pièces de service seront ajoutés lorsque la curation sera prête.",
      },
      Glassware: {
        title: "La verrerie est en préparation.",
        text: "La sélection à venir portera sur des verres, contenants et objets transparents au caractère discret.",
      },
      Kitchen: {
        title: "Les objets de cuisine sont examinés.",
        text: "Des pièces fonctionnelles pour préparer, conserver et utiliser seront ajoutées au fil de la curation.",
      },
      Textiles: {
        title: "Une sélection textile se construit.",
        text: "Plaids, coussins, tissus et surfaces souples seront ajoutés avec attention au toucher et à la matière.",
      },
      Outdoor: {
        title: "Les pièces outdoor sont en cours de curation.",
        text: "Objets et mobilier pour espaces extérieurs suivront avec une attention particulière à la matière et au contexte.",
      },
      Bath: {
        title: "Les objets de bain sont en préparation.",
        text: "Accessoires et détails de matière pour espaces privés seront ajoutés à mesure que la catégorie se précise.",
      },
      Kids: {
        title: "Une sélection calme pour enfants se prépare.",
        text: "Des pièces durables, tactiles et considérées pour chambres d'enfants seront introduites progressivement.",
      },
    },
    categories: {
      Möbel: "Mobilier",
      Leuchten: "Luminaires",
      Kunst: "Œuvres d’art",
      Teppiche: "Tapis",
      Objekte: "Objets",
      Tabletop: "Accessoires",
      "Collectible Design": "Design de collection",
      Editionen: "Éditions",
      Decoration: "Décoration",
      Tableware: "Arts de la table",
      Glassware: "Verrerie",
      Kitchen: "Cuisine",
      Textiles: "Textiles",
      Outdoor: "Outdoor",
      Bath: "Bain",
      Kids: "Enfants",
    },
    cta: {
      "In den Warenkorb": "Ajouter au panier",
      "Anfrage senden": "Envoyer une demande",
      "Preis anfragen": "Demander le prix",
      "Beim Partner ansehen": "Voir chez le partenaire",
      Reserviert: "Réservé",
      Verkauft: "Vendu",
    },
    commerce: {
      direct: {
        modeLabel: "Disponible directement chez GETYOUR.DESIGN",
        description:
          "L'achat est effectué directement via GETYOUR.DESIGN. Le paiement est traité de manière sécurisée par Stripe; les informations d'expédition et de livraison suivent les informations produit.",
        sellerLabel: "Vendeur : GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "Disponible chez notre partenaire",
        description:
          "L'achat est effectué auprès du partenaire externe. GETYOUR.DESIGN n'est pas le vendeur de ce produit.",
        sellerLabel: "Offre d'un partenaire externe",
        priceDisclaimer: "Le prix et la disponibilité peuvent changer chez le partenaire.",
      },
      inquiry: {
        modeLabel: "Disponible sur demande",
        description:
          "Ce produit est disponible sur demande. La disponibilité, le prix ou l'exécution sont confirmés individuellement via la demande existante.",
        sellerLabel: "Demande à GETYOUR.DESIGN",
      },
      status: {
        modeLabel: "Statut actuel du produit",
        description:
          "L'étape suivante suit le statut actuel du produit et la logique existante de demande ou de panier de GETYOUR.DESIGN.",
      },
      unavailable: {
        modeLabel: "Actuellement indisponible",
        description:
          "Ce produit est actuellement réservé ou vendu. L'action reste inactive jusqu'à ce que la disponibilité change.",
      },
    },
    genericProductTitle: "Œuvre sélectionnée",
  },
  journal: {
    eyebrow: "Journal",
    title: "Histoires de lieux, d’objets et d’œuvres durables.",
    description: "Textes, entretiens et notes de contexte sur l’art, le design, les matières, les ateliers et les espaces.",
    categories: ["Objets", "Matières", "Design de collection", "Ateliers"],
    titles: [
      "Comment un seul objet transforme un espace",
      "Les matières qui gagnent avec le temps",
      "Quand le design devient collection",
      "Là où les œuvres prennent forme",
    ],
    teasers: [
      "Une note éditoriale neutre liée aux œuvres sélectionnées et aux espaces.",
      "Une note matière neutre pour les futurs contenus éditoriaux.",
      "Une note sur les éditions, pièces uniques et objets de design collectionnés.",
      "Une note sur les ateliers, les fabricants et les lieux de savoir-faire.",
    ],
  },
  collections: {
    "material-surface": { title: "Matière et surface", description: "Textures neutres, tons minéraux et présence matérielle visible." },
    "quiet-rooms": { title: "Espaces calmes", description: "Matières subtiles, proportions équilibrées et objets retenus." },
    "collectible-design": { title: "Design de collection", description: "Éditions et objets de design pour espaces sélectionnés." },
    "editions-artworks": { title: "Éditions et œuvres", description: "Œuvres et objets entre art, mobilier et intérieur." },
    "seating-design-furniture": { title: "Assises et mobilier design", description: "Assises et mobilier avec silhouette claire." },
    "natural-materials": { title: "Matières naturelles", description: "Bois, laine, pierre, cuir, céramique et bronze." },
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
  pages: {
    ...english.pages,
    art: { title: "Arte", description: "Obras, ediciones y posiciones artísticas seleccionadas." },
    artists: { title: "Artistas", description: "Artistas y posiciones vinculadas a obras seleccionadas." },
    ateliers: { title: "Ateliers", description: "Ateliers, talleres y contextos de producción." },
    brands: { title: "Marcas & Ateliers", description: "Fabricantes, marcas y ateliers seleccionados." },
    collections: { title: "Colecciones", description: "Entradas por material, ambiente y tipo de objeto." },
    contact: { title: "Contacto", description: "Contacto para consultas privadas, objetos, obras y proyectos." },
    materials: { title: "Materiales", description: "Biblioteca de materiales, superficies y texturas." },
    objects: { title: "Objetos", description: "Objetos, ediciones y accesorios seleccionados." },
    trade: { title: "Proyectos", description: "Consultas de proyecto y sourcing privado para profesionales." },
    suche: { title: "Buscar", description: "Buscar diseño, arte, ateliers y objetos." },
    warenkorb: { title: "Carrito", description: "Carrito de GETYOUR.DESIGN." },
    shop: { title: "Tienda de diseño", description: "Mobiliario, iluminación, arte, alfombras, objetos, accesorios y ediciones." },
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
  footer: {
    ...english.footer,
    description:
      "Diseño contemporáneo, arte, objetos, iluminación, alfombras y ediciones de artistas, ateliers y fabricantes seleccionados.",
    shopHeading: "Tienda",
    serviceHeading: "Servicio",
    tradeHeading: "Proyectos y colaboraciones",
    socialHeading: "Social",
    labels: {
      Shop: "Tienda",
      Kunst: "Arte",
      Kollektionen: "Colecciones",
      "Marken & Ateliers": "Marcas & Ateliers",
      Künstler: "Artistas",
      Materialien: "Materiales",
      Journal: "Diario",
      "Commissions & Collaborations": "Proyectos y colaboraciones",
      Ateliers: "Ateliers",
      "Arbeit einreichen": "Enviar obra",
      Versand: "Envíos",
      Retouren: "Devoluciones",
      Authentifizierung: "Autenticación",
      Pflegehinweise: "Cuidados",
      Projektanfragen: "Consultas de proyecto",
      "Private Beschaffung": "Sourcing privado",
      "Atelier-Anfragen": "Consultas de atelier",
      Kontakt: "Contacto",
    },
    legal: {
      imprint: "Aviso legal",
      privacy: "Privacidad",
      terms: "Condiciones",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["Díganos", "qué le rodea", "y le diremos", "quién es"],
    tagline: "DISEÑO Y ARTE PARA INDIVIDUALISTAS.",
    primaryCta: "Explorar tienda",
    secondaryCta: "Ver colecciones",
    shopLinksTitle: "Entradas de tienda",
    featuredProductEyebrow: "Objeto seleccionado",
    featuredProductLink: "Ver objeto",
    newArrivalsEyebrow: "Novedades",
    newArrivalsTitle: "Mobiliario, obras, objetos, iluminación, alfombras y ediciones",
    shopCta: "Tienda de diseño",
    selectedWorksEyebrow: "Selección",
    selectedWorksTitle: "Objetos, obras y ediciones con presencia",
    selectedWorksCta: "Ver obras",
    smallObjectsEyebrow: "Objetos & Ediciones",
    smallObjectsTitle: "Piezas pequeñas para primeras adquisiciones y acentos precisos",
    smallObjectsDescription:
      "Entradas neutrales para objetos, ediciones y accesorios mientras se prepara el catálogo final.",
    submitEyebrow: "Enviar obra",
    submitTitle: "Enviar una obra",
    submitText: [
      "Revisamos obras excepcionales de arte, diseño y cultura del objeto.",
      "Cada envío se evalúa individualmente según selección curatorial.",
    ],
    submitCta: "Enviar obra",
    orientationEyebrow: "Orientación",
    orientationTitle: "Entradas a diseño, arte, colecciones, ateliers y diario.",
    collectionsEyebrow: "Colecciones seleccionadas",
    collectionsTitle: "Entradas a la tienda",
    collectionsCta: "Ver colecciones",
    materialsEyebrow: "Ateliers",
    materialsTitle: "Origen, material y oficio detrás de las obras.",
    materialsCta: "Conocer ateliers",
    journalEyebrow: "Diario",
    journalTitle: "Historias de objetos, materiales y espacios.",
    journalRead: "Leer",
    tradeEyebrow: "Proyectos y colaboraciones",
    tradeTitle: "Para arquitectos, interioristas, hoteles y proyectos.",
    tradeText: "Para sourcing de proyectos, ediciones reservadas y listas de objetos seleccionados.",
    tradeCta: "Enviar consulta",
    newsletterEyebrow: "Boletín",
    newsletterTitle: "Acceso anticipado a nuevos objetos y ediciones privadas.",
    newsletterPlaceholder: "Correo electrónico",
    newsletterCta: "Registrarse",
    areas: [
      { title: "Diseño", text: "Mobiliario, iluminación, alfombras y objetos distintivos para espacios duraderos.", href: "/shop" },
      { title: "Arte", text: "Obras, ediciones y posiciones con punto de vista independiente.", href: "/art" },
      { title: "Colecciones", text: "Entradas seleccionadas por ambiente, material y tipo de objeto.", href: "/collections" },
      { title: "Ateliers", text: "Creadores, talleres y contextos de producción.", href: "/ateliers" },
      { title: "Diario", text: "Notas sobre objetos, materiales, espacios y ateliers.", href: "/journal" },
    ],
    materialLabels: {
      Wolle: "Lana",
      Leder: "Cuero",
      Keramik: "Cerámica",
      Holz: "Madera",
      Travertine: "Travertino",
      Bronze: "Bronce",
    },
  },
  shop: {
    ...english.shop,
    title: "Tienda de diseño",
    headline: "Mobiliario, iluminación, arte, alfombras, objetos y ediciones.",
    description:
      "Una selección de mobiliario, obras, iluminación, alfombras, accesorios, objetos y ediciones para espacios distintivos.",
    backToShop: "Volver a la tienda",
    backToCategory: "Volver a",
    works: "Obras",
    breadcrumbShop: "Tienda",
    dimensions: "Dimensiones",
    material: "Material",
    origin: "Origen",
    productDescription:
      "Placeholder neutral de catálogo seleccionado por su presencia material, proporción y calidad espacial.",
    categoryDescriptions: {
      Kunst: "Obras, ediciones y piezas seleccionadas de artistas y ateliers.",
      Möbel: "Mobiliario con claridad arquitectónica, materiales duraderos y presencia tranquila.",
      Leuchten: "Iluminación como objeto funcional con presencia escultórica.",
      Objekte: "Objetos, ediciones y piezas para espacios distintivos.",
      Tabletop: "Accesorios y objetos funcionales para mesas y estanterías.",
      Teppiche: "Alfombras y textiles con estructura y procedencia.",
      Editionen: "Ediciones limitadas y trabajos seleccionados en tiradas pequeñas.",
      "Collectible Design": "Diseño coleccionable entre función, oficio y arte.",
      Decoration: "Objetos decorativos, acentos escultóricos y piezas tranquilas para superficies, estanterías y espacios.",
      Tableware: "Vajilla y mesa: platos, cuencos, tazas y piezas de servicio seleccionadas por su materialidad.",
      Glassware: "Cristalería, recipientes y objetos transparentes para mesa, bar y exposición.",
      Kitchen: "Objetos funcionales de cocina con materiales duraderos, formas serenas y uso cotidiano.",
      Textiles: "Textiles más allá de las alfombras: mantas, cojines, tejidos y superficies suaves.",
      Outdoor: "Objetos y mobiliario para terrazas, jardines y espacios exteriores, elegidos por su resistencia material.",
      Bath: "Objetos de baño, accesorios y detalles materiales para espacios privados tranquilos.",
      Kids: "Objetos de diseño para habitaciones infantiles, con formas serenas, tacto y durabilidad.",
    },
    categoryMetaTitles: {
      Decoration: "Decoración",
      Tableware: "Vajilla",
      Glassware: "Cristalería",
      Kitchen: "Cocina",
      Textiles: "Textiles",
      Outdoor: "Diseño exterior",
      Bath: "Baño",
      Kids: "Diseño infantil",
    },
    categoryMetaDescriptions: {
      Decoration: "Objetos decorativos, acentos escultóricos y piezas tranquilas para superficies, estanterías y espacios en GETYOUR.DESIGN.",
      Tableware: "Vajilla y mesa en GETYOUR.DESIGN: platos, cuencos, tazas y piezas de servicio seleccionadas por su materialidad.",
      Glassware: "Cristalería, recipientes y objetos transparentes para mesa, bar y exposición, curados para interiores serenos.",
      Kitchen: "Objetos funcionales de cocina con materiales duraderos, formas serenas y uso cotidiano preciso.",
      Textiles: "Textiles más allá de las alfombras: mantas, cojines, tejidos y superficies suaves para espacios vividos.",
      Outdoor: "Diseño exterior para terrazas, jardines y espacios abiertos, seleccionado con atención al material.",
      Bath: "Objetos de baño, accesorios y detalles materiales para espacios privados, elegidos con calma y precisión.",
      Kids: "Diseño para habitaciones infantiles con formas serenas, materiales táctiles y objetos duraderos.",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "Una selección decorativa está en preparación.",
        text: "Los objetos y acentos se irán incorporando con atención al material, la proporción y la presencia en el espacio.",
      },
      Tableware: {
        title: "La selección de vajilla se está curando.",
        text: "Platos, cuencos, tazas y piezas de servicio se añadirán paso a paso cuando la selección esté lista.",
      },
      Glassware: {
        title: "La cristalería está en preparación.",
        text: "La futura selección se centrará en vasos, recipientes y objetos transparentes de carácter sereno.",
      },
      Kitchen: {
        title: "Los objetos de cocina están en revisión.",
        text: "Piezas funcionales para preparar, guardar y usar aparecerán aquí a medida que avance la curaduría.",
      },
      Textiles: {
        title: "Una selección textil está tomando forma.",
        text: "Mantas, cojines, tejidos y superficies suaves se añadirán con atención al tacto y al material.",
      },
      Outdoor: {
        title: "Las piezas de exterior se están curando.",
        text: "Objetos y mobiliario para espacios abiertos se incorporarán con especial atención al material y al entorno.",
      },
      Bath: {
        title: "Los objetos de baño están en preparación.",
        text: "Accesorios y detalles materiales para espacios privados se añadirán cuando la selección sea sólida.",
      },
      Kids: {
        title: "Una selección tranquila para niños está en desarrollo.",
        text: "Piezas duraderas, táctiles y cuidadas para habitaciones infantiles se introducirán gradualmente.",
      },
    },
    categories: {
      Möbel: "Mobiliario",
      Leuchten: "Iluminación",
      Kunst: "Obras de arte",
      Teppiche: "Alfombras",
      Objekte: "Objetos",
      Tabletop: "Accesorios",
      "Collectible Design": "Diseño coleccionable",
      Editionen: "Ediciones",
      Decoration: "Decoración",
      Tableware: "Vajilla",
      Glassware: "Cristalería",
      Kitchen: "Cocina",
      Textiles: "Textiles",
      Outdoor: "Exterior",
      Bath: "Baño",
      Kids: "Infantil",
    },
    cta: {
      "In den Warenkorb": "Añadir al carrito",
      "Anfrage senden": "Enviar consulta",
      "Preis anfragen": "Solicitar precio",
      "Beim Partner ansehen": "Ver en el socio",
      Reserviert: "Reservado",
      Verkauft: "Vendido",
    },
    commerce: {
      direct: {
        modeLabel: "Disponible directamente en GETYOUR.DESIGN",
        description:
          "La compra se realiza directamente a través de GETYOUR.DESIGN. El pago se procesa de forma segura con Stripe; la información de envío y entrega se basa en la información del producto.",
        sellerLabel: "Vendedor: GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "Disponible en nuestro socio",
        description:
          "La compra se realiza con el socio externo. GETYOUR.DESIGN no es el vendedor de este producto.",
        sellerLabel: "Oferta de socio externo",
        priceDisclaimer: "El precio y la disponibilidad pueden cambiar en el sitio del socio.",
      },
      inquiry: {
        modeLabel: "Disponible bajo consulta",
        description:
          "Este producto está disponible bajo consulta. La disponibilidad, el precio o la ejecución se confirman individualmente mediante la consulta existente.",
        sellerLabel: "Consulta a GETYOUR.DESIGN",
      },
      status: {
        modeLabel: "Estado actual del producto",
        description:
          "El siguiente paso sigue el estado actual del producto y la lógica existente de consulta o carrito de GETYOUR.DESIGN.",
      },
      unavailable: {
        modeLabel: "No disponible actualmente",
        description:
          "Este producto está reservado o vendido actualmente. La acción permanece inactiva hasta que cambie la disponibilidad.",
      },
    },
    genericProductTitle: "Obra seleccionada",
  },
  journal: {
    eyebrow: "Diario",
    title: "Historias sobre espacios, objetos y obras duraderas.",
    description: "Textos, entrevistas y notas de contexto sobre arte, diseño, materiales, ateliers y espacios.",
    categories: ["Objetos", "Materiales", "Diseño coleccionable", "Ateliers"],
    titles: [
      "Cómo un solo objeto transforma un espacio",
      "Materiales que ganan con el tiempo",
      "Cuando el diseño se vuelve coleccionable",
      "Donde nacen las obras",
    ],
    teasers: [
      "Una nota editorial neutral vinculada a obras seleccionadas y espacios.",
      "Una nota material neutral para futuros contenidos editoriales.",
      "Una nota sobre ediciones, piezas únicas y diseño coleccionable.",
      "Una nota sobre ateliers, creadores y lugares de oficio.",
    ],
  },
  collections: {
    "material-surface": { title: "Material y superficie", description: "Texturas neutrales, tonos minerales y presencia material visible." },
    "quiet-rooms": { title: "Espacios tranquilos", description: "Materiales sutiles, proporciones equilibradas y objetos contenidos." },
    "collectible-design": { title: "Diseño coleccionable", description: "Ediciones y objetos de diseño para espacios seleccionados." },
    "editions-artworks": { title: "Ediciones y obras", description: "Obras y objetos entre arte, mobiliario e interior." },
    "seating-design-furniture": { title: "Asientos y mobiliario de diseño", description: "Asientos y mobiliario con silueta clara." },
    "natural-materials": { title: "Materiales naturales", description: "Madera, lana, piedra, cuero, cerámica y bronce." },
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
  pages: {
    ...english.pages,
    art: { title: "艺术", description: "精选艺术作品、限量作品与独立艺术立场。" },
    artists: { title: "艺术家", description: "与精选作品相关的艺术家与创作立场。" },
    ateliers: { title: "工作室", description: "作品背后的工作室、工坊与制作语境。" },
    brands: { title: "品牌与工作室", description: "精选制造者、品牌与工作室。" },
    collections: { title: "系列", description: "按材质、氛围与物件类型组织的入口。" },
    contact: { title: "联系", description: "关于私人采购、物件、艺术作品与项目的联系入口。" },
    materials: { title: "材质", description: "关于表面、触感与材质品质的资料库。" },
    objects: { title: "物件", description: "精选物件、限量作品与配件。" },
    trade: { title: "项目咨询", description: "面向专业项目的采购与物件清单咨询。" },
    suche: { title: "搜索", description: "搜索设计、艺术、工作室与物件。" },
    warenkorb: { title: "购物车", description: "GETYOUR.DESIGN 购物车。" },
    shop: { title: "设计商店", description: "家具、灯具、艺术、地毯、物件、配件与限量作品。" },
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
  footer: {
    ...english.footer,
    description:
      "由精选艺术家、工作室与制造者呈现的当代设计、艺术、物件、灯具、地毯与限量作品。",
    shopHeading: "商店",
    serviceHeading: "服务",
    tradeHeading: "项目与合作",
    socialHeading: "社交",
    labels: {
      Shop: "商店",
      Kunst: "艺术",
      Kollektionen: "系列",
      "Marken & Ateliers": "品牌与工作室",
      Künstler: "艺术家",
      Materialien: "材质",
      Journal: "日志",
      "Commissions & Collaborations": "项目与合作",
      Ateliers: "工作室",
      "Arbeit einreichen": "提交作品",
      Versand: "配送",
      Retouren: "退货",
      Authentifizierung: "认证",
      Pflegehinweise: "护理说明",
      Projektanfragen: "项目咨询",
      "Private Beschaffung": "私人采购",
      "Atelier-Anfragen": "工作室咨询",
      Kontakt: "联系",
    },
    legal: {
      imprint: "法律声明",
      privacy: "隐私政策",
      terms: "条款",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["告诉我们", "你被什么围绕", "我们会告诉你", "你是谁"],
    tagline: "为独立审美者呈现设计与艺术。",
    primaryCta: "浏览商店",
    secondaryCta: "查看系列",
    shopLinksTitle: "商店入口",
    featuredProductEyebrow: "精选物件",
    featuredProductLink: "查看物件",
    newArrivalsEyebrow: "新品",
    newArrivalsTitle: "家具、艺术作品、物件、灯具、地毯与限量作品",
    shopCta: "设计商店",
    selectedWorksEyebrow: "精选作品",
    selectedWorksTitle: "具有存在感的物件、艺术作品与限量作品",
    selectedWorksCta: "查看作品",
    smallObjectsEyebrow: "物件与限量作品",
    smallObjectsTitle: "适合初次收藏与空间点缀的小型作品",
    smallObjectsDescription:
      "在最终目录准备期间使用的中性物件、限量作品与配件占位内容。",
    submitEyebrow: "提交作品",
    submitTitle: "提交一件作品",
    submitText: [
      "我们关注来自艺术、设计与物件文化的优秀作品。",
      "每一次提交都会根据策展选择进行单独审阅。",
    ],
    submitCta: "提交作品",
    orientationEyebrow: "导览",
    orientationTitle: "进入设计、艺术、系列、工作室与日志。",
    collectionsEyebrow: "精选系列",
    collectionsTitle: "进入商店的路径",
    collectionsCta: "查看系列",
    materialsEyebrow: "工作室",
    materialsTitle: "作品背后的来源、材质与工艺。",
    materialsCta: "了解工作室",
    journalEyebrow: "日志",
    journalTitle: "关于物件、材质与空间的故事。",
    journalRead: "阅读",
    tradeEyebrow: "项目与合作",
    tradeTitle: "面向建筑师、室内设计师、酒店与项目客户。",
    tradeText: "用于项目采购、保留版作品、材质选择与精选物件清单。",
    tradeCta: "发送咨询",
    newsletterEyebrow: "通讯",
    newsletterTitle: "提前了解新物件与私人限量作品。",
    newsletterPlaceholder: "电子邮箱",
    newsletterCta: "订阅",
    areas: [
      { title: "设计", text: "为持久空间选择的家具、灯具、地毯与独特物件。", href: "/shop" },
      { title: "艺术", text: "具有独立视角的艺术作品、限量作品与创作立场。", href: "/art" },
      { title: "系列", text: "按氛围、材质与物件类型组织的精选入口。", href: "/collections" },
      { title: "工作室", text: "作品背后的制造者、工坊与制作语境。", href: "/ateliers" },
      { title: "日志", text: "关于物件、材质、空间与工作室的记录。", href: "/journal" },
    ],
    materialLabels: {
      Wolle: "羊毛",
      Leder: "皮革",
      Keramik: "陶瓷",
      Holz: "木材",
      Travertine: "石灰华",
      Bronze: "青铜",
    },
  },
  shop: {
    ...english.shop,
    title: "设计商店",
    headline: "家具、灯具、艺术、地毯、物件与限量作品",
    description:
      "为独特空间精选的家具、艺术作品、灯具、地毯、配件、物件与限量作品。",
    backToShop: "返回商店",
    backToCategory: "返回",
    works: "作品",
    breadcrumbShop: "商店",
    dimensions: "尺寸",
    material: "材质",
    origin: "来源",
    productDescription:
      "中性目录占位内容，用于展示材质存在感、比例与空间品质。",
    categoryDescriptions: {
      Kunst: "由艺术家与工作室呈现的精选艺术作品与限量作品。",
      Möbel: "具有建筑清晰度、持久材质与安静存在感的家具。",
      Leuchten: "作为功能物件并具有雕塑感的灯具。",
      Objekte: "用于独特空间的物件、限量作品与收藏件。",
      Tabletop: "用于桌面与陈列的配件和小型功能物件。",
      Teppiche: "具有结构、质感与来源感的地毯和织物作品。",
      Editionen: "小批量限量作品与精选作品。",
      "Collectible Design": "介于功能、工艺与艺术之间的收藏设计。",
      Decoration: "用于台面、陈列与空间的装饰物件、雕塑感点缀和安静作品。",
      Tableware: "餐具与桌面文化：以材质、比例和日常使用为重点的盘、碗、杯与服务器物。",
      Glassware: "用于餐桌、吧台与陈列的玻璃器皿、容器和透明物件。",
      Kitchen: "具有耐用材质、安静形态和日常功能的厨房物件。",
      Textiles: "地毯之外的织物作品：毯子、靠垫、面料和柔软表面。",
      Outdoor: "用于露台、花园与户外空间的物件和家具，注重材质耐久性。",
      Bath: "用于安静私人空间的浴室物件、配件和材质细节。",
      Kids: "儿童房设计物件，关注安静形态、触感和长期使用。",
    },
    categoryMetaTitles: {
      Decoration: "装饰物件",
      Tableware: "餐具",
      Glassware: "玻璃器皿",
      Kitchen: "厨房物件",
      Textiles: "织物",
      Outdoor: "户外设计",
      Bath: "浴室物件",
      Kids: "儿童房设计",
    },
    categoryMetaDescriptions: {
      Decoration: "GETYOUR.DESIGN 精选装饰物件、雕塑感点缀和安静空间作品，注重材质、比例与空间感。",
      Tableware: "GETYOUR.DESIGN 餐具与桌面文化：盘、碗、杯与服务器物，关注材质感和日常使用。",
      Glassware: "用于餐桌、吧台与陈列的玻璃器皿、容器和透明物件，适合安静室内空间。",
      Kitchen: "具有耐用材质、安静形态和精确日常功能的厨房物件。",
      Textiles: "地毯之外的织物作品：毯子、靠垫、面料和柔软表面，为空间带来触感。",
      Outdoor: "用于露台、花园与户外空间的设计物件和家具，关注材质与耐久性。",
      Bath: "用于私人空间的浴室物件、配件和材质细节，以安静和精准为选择标准。",
      Kids: "儿童房设计，包含安静形态、触感材质和可长期使用的物件。",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "装饰物件正在策展中。",
        text: "这一类别的物件和空间点缀将逐步加入，重点关注材质、比例和空间存在感。",
      },
      Tableware: {
        title: "餐具选择正在整理。",
        text: "盘、碗、杯与服务器物将在选择完成后逐步加入。",
      },
      Glassware: {
        title: "玻璃器皿正在准备中。",
        text: "未来选择将关注饮用玻璃、容器和具有安静气质的透明物件。",
      },
      Kitchen: {
        title: "厨房物件正在审核。",
        text: "用于准备、收纳和日常使用的功能物件将随策展进展逐步出现。",
      },
      Textiles: {
        title: "织物选择正在建立。",
        text: "毯子、靠垫、面料和柔软表面将以触感和材质为重点逐步加入。",
      },
      Outdoor: {
        title: "户外作品正在策展中。",
        text: "用于户外空间的物件和家具将根据材质、场景和耐久性逐步加入。",
      },
      Bath: {
        title: "浴室物件正在准备中。",
        text: "用于私人空间的配件和材质细节将在类别逐步完善时加入。",
      },
      Kids: {
        title: "儿童房的安静选择正在形成。",
        text: "耐用、有触感并经过审慎选择的儿童房物件将逐步推出。",
      },
    },
    categories: {
      Möbel: "家具",
      Leuchten: "灯具",
      Kunst: "艺术作品",
      Teppiche: "地毯",
      Objekte: "物件",
      Tabletop: "配件",
      "Collectible Design": "收藏设计",
      Editionen: "限量作品",
      Decoration: "装饰",
      Tableware: "餐具",
      Glassware: "玻璃器皿",
      Kitchen: "厨房",
      Textiles: "织物",
      Outdoor: "户外",
      Bath: "浴室",
      Kids: "儿童",
    },
    cta: {
      "In den Warenkorb": "加入购物车",
      "Anfrage senden": "发送咨询",
      "Preis anfragen": "询问价格",
      "Beim Partner ansehen": "前往合作伙伴查看",
      Reserviert: "已保留",
      Verkauft: "已售出",
    },
    commerce: {
      direct: {
        modeLabel: "可直接通过 GETYOUR.DESIGN 购买",
        description:
          "购买流程直接通过 GETYOUR.DESIGN 完成。付款由 Stripe 安全处理；配送与交付信息以产品信息为准。",
        sellerLabel: "卖方：GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "可通过合作伙伴购买",
        description:
          "购买将在外部合作伙伴处完成。GETYOUR.DESIGN 不是该产品的卖方。",
        sellerLabel: "外部合作伙伴报价",
        priceDisclaimer: "价格和供应情况可能会在合作伙伴网站上发生变化。",
      },
      inquiry: {
        modeLabel: "可咨询购买",
        description:
          "该产品可通过咨询获取。供应情况、价格或执行方式将通过现有咨询流程单独确认。",
        sellerLabel: "向 GETYOUR.DESIGN 咨询",
      },
      status: {
        modeLabel: "当前产品状态",
        description:
          "下一步取决于当前产品状态以及 GETYOUR.DESIGN 现有的咨询或购物车逻辑。",
      },
      unavailable: {
        modeLabel: "当前不可用",
        description:
          "该产品目前已保留或售出。在供应情况变化之前，操作保持不可用。",
      },
    },
    genericProductTitle: "精选作品",
  },
  journal: {
    eyebrow: "日志",
    title: "关于空间、物件与长期作品的故事。",
    description: "关于艺术、设计、材质、工作室与空间的文章、访谈和背景记录。",
    categories: ["物件", "材质", "收藏设计", "工作室"],
    titles: [
      "一件物件如何塑造空间",
      "会随时间沉淀的材质",
      "当设计成为收藏",
      "作品诞生的地方",
    ],
    teasers: [
      "与精选作品和空间相关的中性编辑占位说明。",
      "用于未来编辑内容的中性材质说明。",
      "关于限量作品、独件与收藏设计的中性说明。",
      "关于工作室、制造者与工艺场所的中性说明。",
    ],
  },
  collections: {
    "material-surface": { title: "材质与表面", description: "中性色理、矿物色调与可见的材质存在感。" },
    "quiet-rooms": { title: "安静空间", description: "细腻材质、平衡比例与克制的物件。" },
    "collectible-design": { title: "收藏设计", description: "为精选空间准备的限量作品与设计物件。" },
    "editions-artworks": { title: "限量作品与艺术", description: "介于艺术、家具与室内之间的作品与物件。" },
    "seating-design-furniture": { title: "座椅与设计家具", description: "具有清晰轮廓的座椅与家具。" },
    "natural-materials": { title: "天然材质", description: "木、羊毛、石材、皮革、陶瓷与青铜。" },
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
  pages: {
    ...english.pages,
    art: { title: "فن", description: "أعمال فنية وإصدارات ومواقف فنية مختارة." },
    artists: { title: "فنانون", description: "فنانون ومواقف مرتبطة بأعمال مختارة." },
    ateliers: { title: "مشاغل", description: "مشاغل وورش وسياقات إنتاج خلف الأعمال المختارة." },
    brands: { title: "علامات ومشاغل", description: "صناع وعلامات ومشاغل مختارة." },
    collections: { title: "مجموعات", description: "مداخل منظمة حسب المادة والمزاج ونوع القطعة." },
    contact: { title: "اتصال", description: "اتصال للاستفسارات الخاصة والقطع والأعمال والمشاريع." },
    materials: { title: "مواد", description: "مكتبة مواد للأسطح والملمس والقيمة." },
    objects: { title: "قطع", description: "قطع وإصدارات وإكسسوارات مختارة." },
    trade: { title: "استفسارات المشاريع", description: "استفسارات مشاريع وتوريد خاص وقوائم قطع مختارة." },
    suche: { title: "بحث", description: "البحث في التصميم والفن والمشاغل والقطع." },
    warenkorb: { title: "السلة", description: "سلة GETYOUR.DESIGN." },
    shop: { title: "متجر التصميم", description: "أثاث وإضاءة وفن وسجاد وقطع وإكسسوارات وإصدارات." },
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
  footer: {
    ...english.footer,
    description:
      "تصميم معاصر وفن وقطع وإضاءة وسجاد وإصدارات من فنانين ومشاغل وصناع مختارين.",
    shopHeading: "المتجر",
    serviceHeading: "الخدمة",
    tradeHeading: "مشاريع وتعاون",
    socialHeading: "اجتماعي",
    labels: {
      Shop: "المتجر",
      Kunst: "فن",
      Kollektionen: "مجموعات",
      "Marken & Ateliers": "علامات ومشاغل",
      Künstler: "فنانون",
      Materialien: "مواد",
      Journal: "مجلة",
      "Commissions & Collaborations": "مشاريع وتعاون",
      Ateliers: "مشاغل",
      "Arbeit einreichen": "إرسال عمل",
      Versand: "الشحن",
      Retouren: "الإرجاع",
      Authentifizierung: "التوثيق",
      Pflegehinweise: "إرشادات العناية",
      Projektanfragen: "استفسارات المشاريع",
      "Private Beschaffung": "توريد خاص",
      "Atelier-Anfragen": "استفسارات المشاغل",
      Kontakt: "اتصال",
    },
    legal: {
      imprint: "إشعار قانوني",
      privacy: "سياسة الخصوصية",
      terms: "الشروط",
    },
  },
  home: {
    ...english.home,
    heroTitle: ["أخبرنا", "ما الذي يحيط بك", "وسنخبرك", "من أنت"],
    tagline: "تصميم وفن لأصحاب الذائقة الفردية.",
    primaryCta: "استكشاف المتجر",
    secondaryCta: "عرض المجموعات",
    shopLinksTitle: "مداخل المتجر",
    featuredProductEyebrow: "قطعة مختارة",
    featuredProductLink: "عرض القطعة",
    newArrivalsEyebrow: "وصل حديثا",
    newArrivalsTitle: "أثاث وأعمال فنية وقطع وإضاءة وسجاد وإصدارات",
    shopCta: "متجر التصميم",
    selectedWorksEyebrow: "مختارات",
    selectedWorksTitle: "قطع وأعمال وإصدارات ذات حضور",
    selectedWorksCta: "عرض الأعمال",
    smallObjectsEyebrow: "قطع وإصدارات",
    smallObjectsTitle: "قطع صغيرة للاقتناء الأول ولمسات دقيقة",
    smallObjectsDescription:
      "مدخلات عرض محايدة للقطع والإصدارات والإكسسوارات أثناء إعداد الكتالوج النهائي.",
    submitEyebrow: "إرسال عمل",
    submitTitle: "إرسال عمل",
    submitText: [
      "نراجع الأعمال المميزة من الفن والتصميم وثقافة القطعة.",
      "تتم مراجعة كل مشاركة بشكل فردي وفق اختيار تحريري.",
    ],
    submitCta: "إرسال عمل",
    orientationEyebrow: "توجيه",
    orientationTitle: "مداخل إلى التصميم والفن والمجموعات والمشاغل والمجلة.",
    collectionsEyebrow: "مجموعات مختارة",
    collectionsTitle: "مداخل إلى المتجر",
    collectionsCta: "عرض المجموعات",
    materialsEyebrow: "مشاغل",
    materialsTitle: "الأصل والمادة والحرفة خلف الأعمال.",
    materialsCta: "التعرف على المشاغل",
    journalEyebrow: "مجلة",
    journalTitle: "قصص عن القطع والمواد والمساحات.",
    journalRead: "قراءة",
    tradeEyebrow: "مشاريع وتعاون",
    tradeTitle: "للمهندسين المعماريين ومصممي الديكور والفنادق والمشاريع.",
    tradeText: "لتوريد المشاريع والإصدارات المحجوزة واختيار المواد وقوائم القطع.",
    tradeCta: "إرسال استفسار",
    newsletterEyebrow: "النشرة",
    newsletterTitle: "وصول مبكر إلى قطع جديدة وإصدارات خاصة.",
    newsletterPlaceholder: "البريد الإلكتروني",
    newsletterCta: "اشتراك",
    areas: [
      { title: "تصميم", text: "أثاث وإضاءة وسجاد وقطع مميزة لمساحات دائمة.", href: "/shop" },
      { title: "فن", text: "أعمال وإصدارات ومواقف ذات منظور مستقل.", href: "/art" },
      { title: "مجموعات", text: "مداخل مختارة حسب المزاج والمادة ونوع القطعة.", href: "/collections" },
      { title: "مشاغل", text: "صناع وورش وسياقات إنتاج خلف الأعمال.", href: "/ateliers" },
      { title: "مجلة", text: "ملاحظات حول القطع والمواد والمساحات والمشاغل.", href: "/journal" },
    ],
    materialLabels: {
      Wolle: "صوف",
      Leder: "جلد",
      Keramik: "سيراميك",
      Holz: "خشب",
      Travertine: "حجر ترافرتين",
      Bronze: "برونز",
    },
  },
  shop: {
    ...english.shop,
    title: "متجر التصميم",
    headline: "أثاث وإضاءة وفن وسجاد وقطع وإصدارات.",
    description:
      "مختارات من الأثاث والأعمال الفنية والإضاءة والسجاد والإكسسوارات والقطع والإصدارات لمساحات مميزة.",
    backToShop: "العودة إلى المتجر",
    backToCategory: "العودة إلى",
    works: "أعمال",
    breadcrumbShop: "المتجر",
    dimensions: "الأبعاد",
    material: "المادة",
    origin: "المنشأ",
    productDescription:
      "محتوى عرض محايد في الكتالوج يبرز الحضور المادي والنسبة وجودة المساحة.",
    categoryDescriptions: {
      Kunst: "أعمال وإصدارات وقطع مختارة من فنانين ومشاغل.",
      Möbel: "أثاث بوضوح معماري ومواد دائمة وحضور هادئ.",
      Leuchten: "إضاءة كقطع وظيفية ذات حضور نحتي.",
      Objekte: "قطع وإصدارات وعناصر لمساحات مميزة.",
      Tabletop: "إكسسوارات وقطع وظيفية صغيرة للطاولات والرفوف.",
      Teppiche: "سجاد وأعمال نسيجية ذات بنية ومصدر واضح.",
      Editionen: "إصدارات محدودة وأعمال مختارة بكميات صغيرة.",
      "Collectible Design": "تصميم قابل للاقتناء بين الوظيفة والحرفة والفن.",
      Decoration: "قطع زخرفية ولمسات نحتية وعناصر هادئة للأسطح والرفوف والمساحات.",
      Tableware: "أدوات مائدة وثقافة طاولة: أطباق وأوعية وأكواب وقطع تقديم مختارة للمادة والنسبة.",
      Glassware: "زجاجيات وأوعية وقطع شفافة للطاولة والبار والعرض.",
      Kitchen: "قطع مطبخ وظيفية بمواد دائمة وأشكال هادئة واستخدام يومي واضح.",
      Textiles: "منسوجات خارج فئة السجاد: أغطية ووسائد وأقمشة وأسطح ناعمة للمساحات المعاشة.",
      Outdoor: "قطع وأثاث للتراسات والحدائق والمساحات الخارجية مع اهتمام بمتانة المادة.",
      Bath: "قطع حمام وإكسسوارات وتفاصيل مادية لمساحات خاصة هادئة.",
      Kids: "قطع تصميم لغرف الأطفال بأشكال هادئة وملمس واضح ومتانة طويلة.",
    },
    categoryMetaTitles: {
      Decoration: "ديكور",
      Tableware: "أدوات المائدة",
      Glassware: "زجاجيات",
      Kitchen: "المطبخ",
      Textiles: "منسوجات",
      Outdoor: "تصميم خارجي",
      Bath: "الحمام",
      Kids: "تصميم للأطفال",
    },
    categoryMetaDescriptions: {
      Decoration: "قطع زخرفية ولمسات نحتية وعناصر هادئة للأسطح والرفوف والمساحات لدى GETYOUR.DESIGN.",
      Tableware: "أدوات مائدة لدى GETYOUR.DESIGN: أطباق وأوعية وأكواب وقطع تقديم مختارة للمادة والاستخدام اليومي.",
      Glassware: "زجاجيات وأوعية وقطع شفافة للطاولة والبار والعرض، مختارة لمساحات داخلية هادئة.",
      Kitchen: "قطع مطبخ وظيفية بمواد دائمة وأشكال هادئة واستخدام يومي مدروس.",
      Textiles: "منسوجات خارج فئة السجاد: أغطية ووسائد وأقمشة وأسطح ناعمة تضيف ملمسا للمساحات.",
      Outdoor: "تصميم خارجي للتراسات والحدائق والمساحات المفتوحة مع اهتمام بالمادة والمتانة.",
      Bath: "قطع حمام وإكسسوارات وتفاصيل مادية لمساحات خاصة، مختارة بهدوء ودقة.",
      Kids: "تصميم لغرف الأطفال بأشكال هادئة ومواد ملموسة وقطع صالحة للاستخدام الطويل.",
    },
    categoryEmptyStates: {
      Decoration: {
        title: "يتم إعداد اختيار الديكور.",
        text: "ستضاف القطع واللمسات لهذه الفئة تدريجيا مع التركيز على المادة والنسبة وحضور القطعة في المساحة.",
      },
      Tableware: {
        title: "يتم تنسيق اختيار أدوات المائدة.",
        text: "ستضاف الأطباق والأوعية والأكواب وقطع التقديم خطوة بخطوة عندما تكتمل عملية الاختيار.",
      },
      Glassware: {
        title: "الزجاجيات قيد التحضير.",
        text: "سيركز الاختيار القادم على الكؤوس والأوعية والقطع الشفافة ذات الطابع الهادئ.",
      },
      Kitchen: {
        title: "تتم مراجعة قطع المطبخ.",
        text: "ستظهر هنا قطع وظيفية للتحضير والحفظ والاستخدام مع تطور عملية التنسيق.",
      },
      Textiles: {
        title: "يتم بناء اختيار المنسوجات.",
        text: "ستضاف الأغطية والوسائد والأقمشة والأسطح الناعمة مع الاهتمام بالملمس والمادة.",
      },
      Outdoor: {
        title: "يتم تنسيق قطع المساحات الخارجية.",
        text: "ستتبع قطع وأثاث للمساحات المفتوحة مع اهتمام خاص بالمادة والسياق.",
      },
      Bath: {
        title: "قطع الحمام قيد التحضير.",
        text: "ستضاف الإكسسوارات والتفاصيل المادية للمساحات الخاصة مع اكتمال الاختيار.",
      },
      Kids: {
        title: "يتم إعداد اختيار هادئ للأطفال.",
        text: "ستقدم تدريجيا قطع متينة وملموسة ومدروسة لغرف الأطفال.",
      },
    },
    categories: {
      Möbel: "أثاث",
      Leuchten: "إضاءة",
      Kunst: "أعمال فنية",
      Teppiche: "سجاد",
      Objekte: "قطع",
      Tabletop: "إكسسوارات",
      "Collectible Design": "تصميم قابل للاقتناء",
      Editionen: "إصدارات",
      Decoration: "ديكور",
      Tableware: "أدوات المائدة",
      Glassware: "زجاجيات",
      Kitchen: "المطبخ",
      Textiles: "منسوجات",
      Outdoor: "خارجي",
      Bath: "الحمام",
      Kids: "الأطفال",
    },
    cta: {
      "In den Warenkorb": "إضافة إلى السلة",
      "Anfrage senden": "إرسال استفسار",
      "Preis anfragen": "طلب السعر",
      "Beim Partner ansehen": "عرض لدى الشريك",
      Reserviert: "محجوز",
      Verkauft: "مباع",
    },
    commerce: {
      direct: {
        modeLabel: "متاح مباشرة عبر GETYOUR.DESIGN",
        description:
          "تتم عملية الشراء مباشرة عبر GETYOUR.DESIGN. تتم معالجة الدفع بأمان عبر Stripe؛ وتستند معلومات الشحن والتسليم إلى معلومات المنتج.",
        sellerLabel: "البائع: GETYOUR.DESIGN",
      },
      affiliate: {
        modeLabel: "متاح لدى شريكنا",
        description:
          "تتم عملية الشراء لدى الشريك الخارجي. GETYOUR.DESIGN ليس بائع هذا المنتج.",
        sellerLabel: "عرض شريك خارجي",
        priceDisclaimer: "قد يتغير السعر والتوفر على موقع الشريك.",
      },
      inquiry: {
        modeLabel: "متاح عند الطلب",
        description:
          "هذا المنتج متاح عبر الاستفسار. يتم تأكيد التوفر أو السعر أو التنفيذ بشكل فردي من خلال مسار الاستفسار الحالي.",
        sellerLabel: "استفسار إلى GETYOUR.DESIGN",
      },
      status: {
        modeLabel: "حالة المنتج الحالية",
        description:
          "تتبع الخطوة التالية حالة المنتج الحالية ومنطق الاستفسار أو السلة الحالي لدى GETYOUR.DESIGN.",
      },
      unavailable: {
        modeLabel: "غير متاح حاليا",
        description:
          "هذا المنتج محجوز أو مباع حاليا. يبقى الإجراء غير نشط إلى أن يتغير التوفر.",
      },
    },
    genericProductTitle: "عمل مختار",
  },
  journal: {
    eyebrow: "مجلة",
    title: "قصص عن المساحات والقطع والأعمال ذات البقاء.",
    description: "نصوص ومقابلات وملاحظات سياقية حول الفن والتصميم والمواد والمشاغل والمساحات.",
    categories: ["قطع", "مواد", "تصميم قابل للاقتناء", "مشاغل"],
    titles: [
      "كيف تشكل قطعة واحدة المساحة",
      "مواد تزداد قيمة مع الوقت",
      "عندما يصبح التصميم قابلا للاقتناء",
      "أين تنشأ الأعمال",
    ],
    teasers: [
      "ملاحظة تحريرية محايدة مرتبطة بالأعمال والمساحات المختارة.",
      "ملاحظة محايدة عن المواد للمحتوى التحريري القادم.",
      "ملاحظة عن الإصدارات والقطع الفريدة والتصميم القابل للاقتناء.",
      "ملاحظة عن المشاغل والصناع وأماكن الحرفة.",
    ],
  },
  collections: {
    "material-surface": { title: "المادة والسطح", description: "ملمس محايد ونغمات معدنية وحضور مادي واضح." },
    "quiet-rooms": { title: "مساحات هادئة", description: "مواد رقيقة ونسب متوازنة وقطع متحفظة." },
    "collectible-design": { title: "تصميم قابل للاقتناء", description: "إصدارات وقطع تصميم لمساحات مختارة." },
    "editions-artworks": { title: "إصدارات وأعمال فنية", description: "أعمال وقطع بين الفن والأثاث والداخل." },
    "seating-design-furniture": { title: "جلوس وأثاث تصميم", description: "قطع جلوس وأثاث بخط واضح." },
    "natural-materials": { title: "مواد طبيعية", description: "خشب وصوف وحجر وجلد وسيراميك وبرونز." },
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
    pages: {
      ...english.pages,
      ...dictionaries[locale].pages,
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
      categoryMetaTitles: {
        ...english.shop.categoryMetaTitles,
        ...dictionaries[locale].shop.categoryMetaTitles,
      },
      categoryMetaDescriptions: {
        ...english.shop.categoryMetaDescriptions,
        ...dictionaries[locale].shop.categoryMetaDescriptions,
      },
      categoryEmptyStates: {
        ...english.shop.categoryEmptyStates,
        ...dictionaries[locale].shop.categoryEmptyStates,
      },
      availability: {
        ...english.shop.availability,
        ...dictionaries[locale].shop.availability,
      },
      cta: {
        ...english.shop.cta,
        ...dictionaries[locale].shop.cta,
      },
      commerce: {
        ...english.shop.commerce,
        ...dictionaries[locale].shop.commerce,
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
    collections: {
      ...english.collections,
      ...dictionaries[locale].collections,
    },
    ui: {
      ...english.ui,
      ...dictionaries[locale].ui,
    },
  };
}
