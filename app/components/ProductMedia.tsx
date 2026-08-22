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
  imageIndex?: number;
  fit?: "contain" | "cover";
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
  cropClassName = "",
  fit = "cover",
  disableHover = false,
}: {
  image: ProductImageAsset;
  title: string;
  sizes: string;
  priority?: boolean;
  cropClassName?: string;
  fit?: "contain" | "cover";
  disableHover?: boolean;
}) {
  return (
    <Image
      alt={image.alt || title}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} transition duration-700 ease-out ${disableHover ? "" : "group-hover:scale-[1.04]"} ${cropClassName}`}
      fill
      priority={priority}
      sizes={sizes}
      src={image.src}
    />
  );
}

export function ProductCardMedia({
  images,
  index,
  palette,
  title,
  imageIndex = 0,
  fit = "contain",
}: ProductCardMediaProps) {
  const image = images?.[imageIndex] ?? images?.[0];

  if (!image) {
    return <PlaceholderArtwork index={index} palette={palette} />;
  }

  return (
    <div className="group relative aspect-[4/5] overflow-hidden border hairline bg-[#f8f8f6]">
      <Image
        alt={image.alt || title}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} transition duration-700 ease-out group-hover:scale-[1.05]`}
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

  const isArtworkCover = images[0].src.includes("sebastian-schrader-");

  return (
    <div>
      <button
        aria-label={`${images[0].alt || title} vergrößern`}
        className={`group relative w-full cursor-zoom-in overflow-hidden ${isArtworkCover ? "aspect-[4/3] bg-[#f8f8f6]" : "aspect-video"}`}
        onClick={() => setActiveImage(images[0])}
        type="button"
      >
        <GalleryImage
          image={images[0]}
          fit={isArtworkCover ? "contain" : "cover"}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          title={title}
        />
      </button>
      {images.length > 1 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {[0, 1].map((columnIndex) => (
            <div className="grid content-start gap-5" key={columnIndex}>
              {images.slice(1).map((image, imageIndex) => {
                const isFinalDetail = image.src.includes("cowhide-seat-v8-11-detail");
                const isColourPalette = image.src.includes("colour-palette");
                const targetColumn = isFinalDetail ? 1 : imageIndex % 2;
                if (targetColumn !== columnIndex) return null;

                const aspectRatio = isColourPalette
                  ? "aspect-[4/3]"
                  : isFinalDetail
                  ? "aspect-[15/13]"
                  : [
                      "aspect-[4/5]",
                      "aspect-square",
                      "aspect-[3/2]",
                      "aspect-[3/2]",
                      "aspect-[4/5]",
                      "aspect-video",
                    ][imageIndex % 6];

                return (
                  <button
                    aria-label={`${image.alt || title} vergrößern`}
                    className={`group relative w-full cursor-zoom-in overflow-hidden ${isColourPalette ? "bg-[#f8f8f6]" : ""} ${aspectRatio}`}
                    key={image.src}
                    onClick={() => setActiveImage(image)}
                    type="button"
                  >
                    <GalleryImage
                      cropClassName={isFinalDetail ? "object-[82%_center]" : undefined}
                      disableHover={isColourPalette}
                      fit={isColourPalette ? "contain" : "cover"}
                      image={image}
                      sizes="(min-width: 1024px) 27vw, (min-width: 640px) 50vw, 100vw"
                      title={title}
                    />
                  </button>
                );
              })}
            </div>
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
