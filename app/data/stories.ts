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
    title: "Farbe als Ausgangspunkt",
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
