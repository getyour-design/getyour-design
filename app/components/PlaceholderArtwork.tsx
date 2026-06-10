type PlaceholderArtworkProps = {
  palette: string;
  index?: number;
};

export function PlaceholderArtwork({ palette, index = 0 }: PlaceholderArtworkProps) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden border hairline bg-[#f0ece3] p-5">
      <div className={`absolute inset-5 ${palette}`} />
      <div className="absolute bottom-8 left-8 right-8 border-t border-black/20 pt-4">
        <p className="serif text-4xl text-[#11100f] mix-blend-difference">{String(index + 1).padStart(2, "0")}</p>
      </div>
    </div>
  );
}
