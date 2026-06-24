import type { Metadata } from "next";
import { LuxuryCoastersPage } from "../components/LuxuryCoastersPage";
import { localizedRoutes } from "../lib/i18n";

export const metadata: Metadata = {
  title: "Luxury Cowhide Coasters",
  description:
    "Handcrafted European cowhide coasters by 54 COUTURE, made in Germany and presented in a luxury gift box.",
  alternates: {
    canonical: "/luxury-coasters",
    languages: {
      de: localizedRoutes["luxury-coasters"].de,
      en: localizedRoutes["luxury-coasters"].en,
      "x-default": "/luxury-coasters",
    },
  },
  openGraph: {
    title: "Luxury Cowhide Coasters | GETYOUR.DESIGN",
    description:
      "Handcrafted European cowhide coasters by 54 COUTURE, made in Germany and presented in a luxury gift box.",
    url: "/luxury-coasters",
  },
};

export default function LuxuryCoastersRootPage() {
  return <LuxuryCoastersPage locale="en" />;
}
