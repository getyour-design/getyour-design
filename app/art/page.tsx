import type { Metadata } from "next";
import { LocalizedArtPage } from "../components/LocalizedArtPage";

export const metadata: Metadata = {
  title: "Kunst",
  description:
    "Kunstwerke, Papierarbeiten, Skulpturen und Editionen bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/art",
  },
};

export default function ArtPage() {
  return <LocalizedArtPage locale="de" />;
}
