import Link from "next/link";
import { navItems } from "../data";

export function Footer() {
  return (
    <footer className="bg-[#080808] px-5 py-12 text-[#f7f3ea] lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="serif text-3xl">GETYOUR.DESIGN</p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#cfc6b9]">
            A curated destination for collectible interiors, sculptural seating,
            rare objects, and quiet materials with presence.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#92887c]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm">
            {navItems.map((item) => (
              <Link className="text-[#f7f3ea]/85 hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#92887c]">Studio Desk</p>
          <p className="mt-5 text-sm leading-6 text-[#f7f3ea]/85">
            Private sourcing, collection edits, object placement, and material
            direction for residential and hospitality spaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
