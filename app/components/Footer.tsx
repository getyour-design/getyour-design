import Link from "next/link";
import { navItems } from "../data";

export function Footer() {
  const serviceLinks = ["Shipping", "Returns", "Authentication", "Care Guide"];
  const tradeLinks = ["Trade Program", "Private Sourcing", "Artist Submissions", "Contact"];

  return (
    <footer className="border-t hairline bg-[#f1ede4] px-5 py-14 text-[#111] lg:px-10">
      <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
        <div>
          <p className="serif text-4xl">GETYOUR.DESIGN</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#5f5a52]">
            A luxury commerce destination for collectible design, sculptural
            objects, limited editions, and materials with enduring value.
          </p>
          <p className="mt-10 text-[0.65rem] uppercase tracking-[0.22em] text-[#777068]">
            Worldwide shipping from selected ateliers
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#777068]">Shop</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {navItems.map((item) => (
              <Link className="hover:text-black" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#777068]">Service</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {serviceLinks.map((item) => (
              <Link className="hover:text-black" href="/trade" key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#777068]">Studio Desk</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {tradeLinks.map((item) => (
              <Link className="hover:text-black" href="/trade" key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1540px] flex-col gap-4 border-t hairline pt-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#777068] md:flex-row md:items-center md:justify-between">
        <p>© 2026 GETYOUR.DESIGN</p>
        <p>Terms · Privacy · Imprint</p>
      </div>
    </footer>
  );
}
