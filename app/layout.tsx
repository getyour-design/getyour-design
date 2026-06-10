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
    default: "GETYOUR.DESIGN | Kuratierte Commerce-Plattform für Design",
    template: "%s | GETYOUR.DESIGN",
  },
  description:
    "GETYOUR.DESIGN ist eine kuratierte Commerce-Plattform für Möbel, Kunst, Objekte, Editionen und Materialien für anspruchsvolle Räume.",
  keywords: [
    "kuratierter Design Shop",
    "sammelbares Design",
    "skulpturales Sitzen",
    "Kunst und Objekte",
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
