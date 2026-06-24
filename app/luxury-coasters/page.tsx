import type { Metadata } from "next";
import { LuxuryCoastersPage } from "../components/LuxuryCoastersPage";
import { localizedRoutes } from "../lib/i18n";

export const metadata: Metadata = {
  title: "Luxury Coasters",
  description:
    "Natural stone coasters, refined tabletop objects and gift-ready material details curated by GETYOUR.DESIGN.",
  alternates: {
    canonical: "/luxury-coasters",
    languages: {
      de: localizedRoutes["luxury-coasters"].de,
      en: localizedRoutes["luxury-coasters"].en,
      "x-default": "/luxury-coasters",
    },
  },
  openGraph: {
    title: "Luxury Coasters | GETYOUR.DESIGN",
    description:
      "Natural stone coasters, refined tabletop objects and gift-ready material details curated by GETYOUR.DESIGN.",
    url: "/luxury-coasters",
  },
};

export default function LuxuryCoastersRootPage() {
  return <LuxuryCoastersPage locale="en" />;
}

