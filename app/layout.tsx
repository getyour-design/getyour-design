import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "GETYOUR.DESIGN | Contemporary Design, Kunst und Objekte",
    template: "%s | GETYOUR.DESIGN",
  },
  description:
    "GETYOUR.DESIGN zeigt Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen ausgewählter Künstler, Ateliers und Hersteller.",
  keywords: [
    "kuratierter Design Shop",
    "sammelbares Design",
    "skulpturales Sitzen",
    "Kunst und Objekte",
    "Designmöbel",
    "Leuchten",
    "Tabletop",
    "Editionen",
    "Collectible Design",
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
      "Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen.",
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
