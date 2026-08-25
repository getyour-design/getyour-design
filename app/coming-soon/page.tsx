import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "GETYOUR.DESIGN is currently in preparation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f2ef] px-6 py-12 text-center">
      <div className="max-w-xl">
        <p className="type-label text-[#667174]">GETYOUR.DESIGN</p>
        <h1 className="serif mt-8 text-4xl leading-tight sm:text-6xl">Coming Soon</h1>
        <p className="mx-auto mt-7 max-w-md text-base leading-7 text-[#4b5356]">
          A curated destination for collectible design, art and distinctive interiors is currently taking shape.
        </p>
      </div>
    </main>
  );
}
