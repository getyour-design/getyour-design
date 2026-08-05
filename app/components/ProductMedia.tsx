import Image from "next/image";
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
  if (!images?.length) {
    return <PlaceholderArtwork index={index} palette={palette} />;
  }

  return (
    <div className="grid gap-5">
      <div className="relative aspect-[3/2] overflow-hidden border hairline bg-[#f8f8f6]">
        <Image
          alt={images[0].alt || title}
          className="object-contain"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          src={images[0].src}
        />
      </div>
      {images.length > 1 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {images.slice(1).map((image) => (
            <div className="relative aspect-[4/5] overflow-hidden border hairline bg-[#f8f8f6]" key={image.src}>
              <Image
                alt={image.alt || title}
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 27vw, (min-width: 640px) 50vw, 100vw"
                src={image.src}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
