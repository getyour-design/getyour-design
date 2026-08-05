"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PlaceholderArtwork } from "./PlaceholderArtwork";

export type ProductImageAsset = {
  src: string;
  alt: string;
};

type ProductCardMediaProps = {
  images?: ProductImageAsset[];
  index: number;
  palette: string;
  title: string;
};

type ProductGalleryProps = {
  images?: ProductImageAsset[];
  index: number;
  palette: string;
  title: string;
};

function GalleryImage({
  image,
  title,
  sizes,
  priority = false,
}: {
  image: ProductImageAsset;
  title: string;
  sizes: string;
  priority?: boolean;
}) {
  const isColourPalette = image.src.includes("colour-palette");

  return (
    <>
      {isColourPalette ? (
        <div aria-hidden="true" className="absolute inset-0 bg-[#eee7dd]" />
      ) : (
        <>
          <Image
            alt=""
            aria-hidden="true"
            className="scale-110 object-cover opacity-25 blur-2xl"
            fill
            sizes={sizes}
            src={image.src}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#f4efe7]/35" />
        </>
      )}
      <Image
        alt={image.alt || title}
        className="object-contain"
        fill
        priority={priority}
        sizes={sizes}
        src={image.src}
      />
    </>
  );
}

export function ProductCardMedia({ images, index, palette, title }: ProductCardMediaProps) {
  const image = images?.[0];

  if (!image) {
    return <PlaceholderArtwork index={index} palette={palette} />;
  }

  return (
    <div className="relative aspect-[4/5] overflow-hidden border hairline bg-[#f8f8f6]">
      <Image
        alt={image.alt || title}
        className="object-contain"
        fill
        sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
        src={image.src}
      />
    </div>
  );
}

export function ProductGallery({ images, index, palette, title }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProductImageAsset | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeImage]);

  if (!images?.length) {
    return <PlaceholderArtwork index={index} palette={palette} />;
  }

  return (
    <div className="grid gap-5">
      <button
        aria-label={`${images[0].alt || title} vergrößern`}
        className="relative aspect-[3/2] w-full cursor-zoom-in overflow-hidden border hairline bg-[#f8f8f6]"
        onClick={() => setActiveImage(images[0])}
        type="button"
      >
        <GalleryImage
          image={images[0]}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          title={title}
        />
      </button>
      {images.length > 1 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {images.slice(1).map((image) => (
            <button
              aria-label={`${image.alt || title} vergrößern`}
              className="relative aspect-[4/5] w-full cursor-zoom-in overflow-hidden border hairline bg-[#f8f8f6]"
              key={image.src}
              onClick={() => setActiveImage(image)}
              type="button"
            >
              <GalleryImage
                image={image}
                sizes="(min-width: 1024px) 27vw, (min-width: 640px) 50vw, 100vw"
                title={title}
              />
            </button>
          ))}
        </div>
      ) : null}
      {activeImage ? (
        <div
          aria-label="Vergrößerte Bildansicht"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setActiveImage(null)}
          role="dialog"
        >
          <button
            aria-label="Bildansicht schließen"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/50 bg-black/20 text-3xl font-light text-white"
            onClick={() => setActiveImage(null)}
            type="button"
          >
            ×
          </button>
          <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
            <Image
              alt={activeImage.alt || title}
              className="object-contain"
              fill
              priority
              sizes="100vw"
              src={activeImage.src}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
