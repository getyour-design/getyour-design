import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "GETYOUR.DESIGN | Luxury Design Marketplace",
    template: "%s | GETYOUR.DESIGN",
  },
  description:
    "GETYOUR.DESIGN is a luxury marketplace concept for collectible design, sculptural seating, rare objects, refined materials, and design stories.",
  keywords: [
    "luxury design marketplace",
    "collectible design",
    "sculptural seating",
    "interior objects",
    "materials",
    "gallery",
  ],
  openGraph: {
    title: "GETYOUR.DESIGN",
    description:
      "A curated luxury design marketplace for sculptural interiors and collectible objects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
