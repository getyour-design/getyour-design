import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

const pinterestVerificationCode = "58d43fc30c175ae8e21a59237709dc23";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getyour.design"),
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
    "Commissions & Collaborations",
  ],
  openGraph: {
    title: "GETYOUR.DESIGN",
    description:
      "Contemporary Design, Kunst, Möbel, Objekte, Leuchten, Teppiche und Editionen.",
    type: "website",
    url: "https://www.getyour.design",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(pinterestVerificationCode
    ? {
        verification: {
          other: {
            "p:domain_verify": pinterestVerificationCode,
          },
        },
      }
    : {}),
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
