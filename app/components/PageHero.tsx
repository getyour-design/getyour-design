type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b hairline bg-[#fbfaf6] px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#777068]">{eyebrow}</p>
          <h1 className="serif mt-5 max-w-5xl text-balance text-6xl font-medium leading-[0.94] text-[#10100f] md:text-8xl">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#5f5a52]">{description}</p>
      </div>
    </section>
  );
}
