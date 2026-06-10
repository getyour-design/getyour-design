import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GETYOUR.DESIGN for private sourcing, gallery inquiries, material direction, and collectible design requests.",
};

export default function ContactPage() {
  return (
    <main className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Contact</p>
          <h1 className="serif mt-4 text-balance text-6xl leading-none lg:text-8xl">
            Source the piece that anchors the room.
          </h1>
        </div>
        <div className="border hairline bg-[#fbf8f1] p-6 lg:p-10">
          <p className="serif text-4xl">Private inquiries</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5f574f]">
            Tell us about the space, desired materials, timeline, and whether
            you are sourcing a single object or shaping a full collection.
          </p>
          <div className="mt-10 grid gap-5 text-sm">
            <a className="border-b border-black/20 pb-4" href="mailto:studio@getyour.design">
              studio@getyour.design
            </a>
            <p className="border-b border-black/20 pb-4">Berlin · Paris · Remote</p>
            <p className="border-b border-black/20 pb-4">Trade and collector appointments available.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
