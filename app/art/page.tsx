import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { PlaceholderArtwork } from "../components/PlaceholderArtwork";
import { ProductCardMedia } from "../components/ProductMedia";
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
        <div className="mx-auto grid max-w-[1540px] gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork, index) => {
            const productHref = artwork.productSlug ? `/de/shop/${artwork.productSlug}` : undefined;

            return (
            <article key={artwork.title}>
              {artwork.images && productHref ? (
                <Link className="group block" href={productHref}>
                  <ProductCardMedia aspectClassName="aspect-[4/3]" images={artwork.images} fit="cover" index={index} palette={artwork.palette} title={artwork.title} />
                </Link>
              ) : artwork.images ? (
                <ProductCardMedia aspectClassName="aspect-[4/3]" images={artwork.images} fit="cover" index={index} palette={artwork.palette} title={artwork.title} />
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
