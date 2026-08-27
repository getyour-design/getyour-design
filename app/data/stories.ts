import type { Locale } from "../lib/i18n";

export type Story = {
  title: string;
  subtitle?: string;
  category: string;
  teaser: string;
  publishedAt?: string;
  /** ISO date used to keep the Journal overview in descending publication order. */
  publishedAtIso?: string;
  href?: string;
  image?: string;
};

export const stories: Story[] = [
  {
    title: "Farbe im Raum",
    subtitle: "Paletten für Räume und Objekte",
    category: "Gestaltung & Materialien",
    teaser: "Wie digitale Farbpaletten helfen, Material, Licht und Atmosphäre bewusster zusammenzudenken – vom ersten Entwurf bis zum realen Raum.",
    href: "/de/journal/farbe-als-ausgangspunkt",
    image: "/images/journal-farbe-als-ausgangspunkt-cover.png",
    publishedAt: "10. August 2026",
    publishedAtIso: "2026-08-10",
  },
  {
    title: "Milan Design Week 2026",
    subtitle: "Design als Prozess",
    category: "Messen & Veranstaltungen",
    teaser: "Vom Salone bis zum Fuorisalone: Die Milan Design Week 2026 stellte Material, Experiment und die Stadt als kulturellen Erfahrungsraum in den Mittelpunkt.",
    href: "/de/journal/milan-design-week-2026",
    image: "/images/journal-milan-design-week-2026-minotti.jpg",
    publishedAt: "29. April 2026",
    publishedAtIso: "2026-04-29",
  },
  {
    title: "3daysofdesign 2026",
    subtitle: "Kopenhagen als Designlabor",
    category: "Design & Kultur",
    teaser: "Gemeinsame Dinner, neue Quartiere und Design Walks: Das Festival rückt Begegnung, Handwerk und die Stadt als Erfahrungsraum in den Mittelpunkt.",
    href: "/de/journal/3daysofdesign-2026-copenhagen",
    image: "/images/journal-3daysofdesign-2026-objects-of-desire.jpeg",
    publishedAt: "16. Juni 2026",
    publishedAtIso: "2026-06-16",
  },
  {
    title: "Minotti 2026 Collection",
    subtitle: "In Mailand",
    category: "Messen & Veranstaltungen",
    teaser: "Ein neuer Minotti Pavillon, sechs internationale Designpositionen und eine Wohnlandschaft zwischen Architektur, Material und Kunst.",
    href: "/de/journal/minotti-2026-collection",
    image: "/images/journal-minotti-2026-cover.png",
    publishedAt: "2. Mai 2026",
    publishedAtIso: "2026-05-02",
  },
  {
    title: "Die Wirkung einzelner Objekte im Raum",
    category: "Objekte",
    teaser: "Warum wenige, bewusst ausgewählte Arbeiten einen Raum stärker prägen als eine vollständige Einrichtung.",
  },
  {
    title: "Materialien, die mit der Zeit gewinnen",
    category: "Materialien",
    teaser: "Über Keramik, Bronze, Leder, Holz und Naturstein und darüber, warum Spuren, Patina und Herkunft Teil eines Objekts werden.",
  },
  {
    title: "Wenn Design zum Sammlerstück wird",
    category: "Collectible Design",
    teaser: "Ein Blick auf Editionen, Einzelstücke und Arbeiten zwischen Funktion, Skulptur und Kunst.",
  },
  {
    title: "Wo Arbeiten entstehen",
    category: "Ateliers",
    teaser: "Ateliers, Manufakturen und Werkstätten als Orte von Haltung, Materialwissen und handwerklicher Präzision.",
  },
];

type StoryTranslation = Pick<Story, "title" | "subtitle" | "category" | "teaser">;

const localizedStoryCopy: Partial<Record<Exclude<Locale, "de">, Record<string, StoryTranslation>>> = {
  en: {
    "/de/journal/farbe-als-ausgangspunkt": {
      title: "Colour in Space",
      subtitle: "Palettes for rooms and objects",
      category: "Design & Materials",
      teaser: "How digital colour palettes bring material, light and atmosphere into closer dialogue, from the first sketch to the finished room.",
    },
    "/de/journal/milan-design-week-2026": {
      title: "Milan Design Week 2026",
      subtitle: "Design as a process",
      category: "Fairs & Events",
      teaser: "From Salone to Fuorisalone: Milan Design Week 2026 placed material, experimentation and the city itself at the heart of the experience.",
    },
    "/de/journal/3daysofdesign-2026-copenhagen": {
      title: "3daysofdesign 2026",
      subtitle: "Copenhagen as a design laboratory",
      category: "Design & Culture",
      teaser: "Shared dinners, new districts and design walks: the festival brings encounter, craft and the city together as a lived experience.",
    },
    "/de/journal/minotti-2026-collection": {
      title: "Minotti 2026 Collection",
      subtitle: "In Milan",
      category: "Fairs & Events",
      teaser: "A new Minotti pavilion, six international design positions and an interior landscape between architecture, material and art.",
    },
  },
  fr: {
    "/de/journal/farbe-als-ausgangspunkt": {
      title: "La couleur dans l’espace",
      subtitle: "Palettes pour espaces et objets",
      category: "Design & matières",
      teaser: "Comment les palettes de couleurs numériques rapprochent matière, lumière et atmosphère, de la première esquisse à l’espace réalisé.",
    },
    "/de/journal/milan-design-week-2026": {
      title: "Milan Design Week 2026",
      subtitle: "Le design comme processus",
      category: "Salons & événements",
      teaser: "Du Salone au Fuorisalone, la Milan Design Week 2026 a placé matière, expérimentation et ville au cœur de l’expérience.",
    },
    "/de/journal/3daysofdesign-2026-copenhagen": {
      title: "3daysofdesign 2026",
      subtitle: "Copenhague, laboratoire du design",
      category: "Design & culture",
      teaser: "Dîners partagés, nouveaux quartiers et parcours de design : le festival réunit rencontre, savoir-faire et ville vécue.",
    },
    "/de/journal/minotti-2026-collection": {
      title: "Collection Minotti 2026",
      subtitle: "À Milan",
      category: "Salons & événements",
      teaser: "Un nouveau pavillon Minotti, six regards internationaux et un paysage intérieur entre architecture, matière et art.",
    },
  },
  es: {
    "/de/journal/farbe-als-ausgangspunkt": {
      title: "El color en el espacio",
      subtitle: "Paletas para espacios y objetos",
      category: "Diseño y materiales",
      teaser: "Cómo las paletas digitales de color acercan material, luz y atmósfera, desde el primer boceto hasta el espacio terminado.",
    },
    "/de/journal/milan-design-week-2026": {
      title: "Milan Design Week 2026",
      subtitle: "El diseño como proceso",
      category: "Ferias y eventos",
      teaser: "Del Salone al Fuorisalone: la Milan Design Week 2026 situó el material, la experimentación y la ciudad en el centro de la experiencia.",
    },
    "/de/journal/3daysofdesign-2026-copenhagen": {
      title: "3daysofdesign 2026",
      subtitle: "Copenhague como laboratorio de diseño",
      category: "Diseño y cultura",
      teaser: "Cenas compartidas, nuevos barrios y recorridos de diseño: el festival une encuentro, oficio y ciudad vivida.",
    },
    "/de/journal/minotti-2026-collection": {
      title: "Colección Minotti 2026",
      subtitle: "En Milán",
      category: "Ferias y eventos",
      teaser: "Un nuevo pabellón Minotti, seis posiciones internacionales y un paisaje doméstico entre arquitectura, material y arte.",
    },
  },
  zh: {
    "/de/journal/farbe-als-ausgangspunkt": {
      title: "空间中的色彩",
      subtitle: "空间与物件的配色",
      category: "设计与材质",
      teaser: "数字色彩方案如何让材质、光线与氛围彼此呼应，从最初草图延伸至真实空间。",
    },
    "/de/journal/milan-design-week-2026": {
      title: "2026 米兰设计周",
      subtitle: "设计作为过程",
      category: "展会与活动",
      teaser: "从 Salone 到 Fuorisalone，2026 米兰设计周将材质、实验与城市本身置于体验的中心。",
    },
    "/de/journal/3daysofdesign-2026-copenhagen": {
      title: "2026 哥本哈根 3daysofdesign",
      subtitle: "作为设计实验室的哥本哈根",
      category: "设计与文化",
      teaser: "共享晚餐、新街区与设计漫步：这个节日将相遇、手工艺与城市体验连接起来。",
    },
    "/de/journal/minotti-2026-collection": {
      title: "Minotti 2026 系列",
      subtitle: "于米兰",
      category: "展会与活动",
      teaser: "全新的 Minotti 展馆、六组国际设计视角，以及一处介于建筑、材质与艺术之间的居住景观。",
    },
  },
  ar: {
    "/de/journal/farbe-als-ausgangspunkt": {
      title: "اللون في الفضاء",
      subtitle: "لوحات للمساحات والقطع",
      category: "التصميم والمواد",
      teaser: "كيف تجمع لوحات الألوان الرقمية بين المادة والضوء والأجواء، من الرسم الأول إلى المساحة المنجزة.",
    },
    "/de/journal/milan-design-week-2026": {
      title: "أسبوع ميلانو للتصميم 2026",
      subtitle: "التصميم كعملية",
      category: "معارض وفعاليات",
      teaser: "من سالوني إلى فوريسالوني، وضع أسبوع ميلانو للتصميم 2026 المادة والتجريب والمدينة في قلب التجربة.",
    },
    "/de/journal/3daysofdesign-2026-copenhagen": {
      title: "3daysofdesign 2026",
      subtitle: "كوبنهاغن كمختبر للتصميم",
      category: "التصميم والثقافة",
      teaser: "عشاءات مشتركة وأحياء جديدة وجولات تصميم: يجمع المهرجان اللقاء والحرفة والمدينة كتجربة معيشة.",
    },
    "/de/journal/minotti-2026-collection": {
      title: "مجموعة مينوتي 2026",
      subtitle: "في ميلانو",
      category: "معارض وفعاليات",
      teaser: "جناح مينوتي جديد وستة اتجاهات تصميم دولية ومشهد داخلي بين العمارة والمادة والفن.",
    },
  },
};

const dateLocales: Record<Locale, string> = {
  de: "de-DE",
  en: "en-GB",
  fr: "fr-FR",
  es: "es-ES",
  zh: "zh-CN",
  ar: "ar",
};

export function getLocalizedStories(locale: Locale): Story[] {
  if (locale === "de") return stories;

  return stories.map((story) => {
    const translation = story.href ? localizedStoryCopy[locale]?.[story.href] : undefined;
    const publishedAt = story.publishedAtIso
      ? new Intl.DateTimeFormat(dateLocales[locale], { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${story.publishedAtIso}T12:00:00Z`))
      : undefined;

    return { ...story, ...translation, publishedAt };
  });
}
