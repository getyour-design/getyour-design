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
        <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-[#667174]">
          Want to get in contact with us?{" "}
          <a className="text-[#10100f] underline decoration-black/40 underline-offset-4 transition hover:decoration-black" href="mailto:contact@getyour.design">
            contact@getyour.design
          </a>
        </p>
      </div>
    </main>
  );
}
