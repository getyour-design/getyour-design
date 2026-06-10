import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "GETYOUR.DESIGN | Kuratierte Commerce-Plattform für Design",
    template: "%s | GETYOUR.DESIGN",
  },
  description:
    "GETYOUR.DESIGN ist eine kuratierte Commerce-Plattform für Kunstwerke, Designmöbel, Designobjekte, Wohnaccessoires, Leuchten, Skulpturen, Künstler, Ateliers, Hersteller, Interior Design und Collectible Design.",
  keywords: [
    "kuratierter Design Shop",
    "sammelbares Design",
    "skulpturales Sitzen",
    "Kunst und Objekte",
    "Designmöbel",
    "Wohnaccessoires",
    "Leuchten",
    "Skulpturen",
    "Künstler und Ateliers",
    "Hersteller",
    "Interior Design",
    "Materialien",
    "Trade für Interior Designer",
  ],
  openGraph: {
    title: "GETYOUR.DESIGN",
    description:
      "Kuratierte Commerce-Plattform für Möbel, Kunst, Objekte und Editionen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
