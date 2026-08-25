import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { EntityActions } from "../components/EntityActions";
import { artworks } from "../data/artworks";

export const metadata: Metadata = {
  title: "Kunst",
  description:
    "Kunstwerke, Papierarbeiten, Skulpturen und Editionen bei GETYOUR.DESIGN.",
  alternates: {
    canonical: "/art",
  },
};

export default function ArtPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kunst"
        title="Kunstwerke, Papierarbeiten, Skulpturen und Editionen."
        description="Ausgewählte Arbeiten für Räume, Sammlungen und Interieurs mit eigenem Blick."
      />
      <section className="section-pad bg-[#f3f2ef]">
        <div className="mx-auto grid max-w-[1320px] gap-x-5 gap-y-10 md:grid-cols-[1.6fr_1fr] md:items-start">
          {artworks.map((artwork, index) => {
            const productHref = artwork.productSlug ? `/de/shop/${artwork.productSlug}` : undefined;

            return (
            <article key={artwork.title}>
              {artwork.images && productHref ? (
                <Link className="group block" href={productHref}>
                  <Image alt={artwork.images[0].alt || artwork.title} className="h-auto w-full" height={artwork.imageHeight ?? 1200} sizes="(min-width: 768px) 60vw, 100vw" src={artwork.images[0].src} width={artwork.imageWidth ?? 1200} />
                </Link>
              ) : artwork.images ? (
                <Image alt={artwork.images[0].alt || artwork.title} className="h-auto w-full" height={artwork.imageHeight ?? 1200} sizes="(min-width: 768px) 60vw, 100vw" src={artwork.images[0].src} width={artwork.imageWidth ?? 1200} />
              ) : (
                <PlaceholderArtwork aspectClassName="aspect-[4/3]" index={index} palette={artwork.palette} />
              )}
              <div className="mt-5">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#667174]">{artwork.artist}</p>
                <h2 className="serif mt-2 text-xl leading-snug tracking-[0.08em]">
                  {productHref ? <Link href={productHref}>{artwork.title}</Link> : artwork.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4b5356]">
                  {artwork.medium}, {artwork.year}
                </p>
                <p className="mt-3 text-sm text-[#11100f]">{artwork.price}</p>
                <EntityActions
                  href={productHref ?? "/art"}
                  id={`artwork:${artwork.title}`}
                  title={artwork.title}
                  type="Kunstwerk"
                />
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
