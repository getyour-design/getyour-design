import Link from "next/link";
import { navItems } from "../data";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#fbfaf6]/95 backdrop-blur">
      <div className="border-b hairline px-5 py-2 text-center text-[0.65rem] uppercase tracking-[0.24em] text-[#5f5a52] lg:px-10">
        Worldwide Shipping
      </div>
      <nav className="mx-auto grid max-w-[1540px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link className="serif text-xl tracking-[0.16em]" href="/">
          GETYOUR.DESIGN
        </Link>
        <div className="order-3 col-span-2 flex gap-5 overflow-x-auto border-t hairline pt-4 text-[0.68rem] uppercase tracking-[0.18em] text-[#26231f] lg:order-none lg:col-span-1 lg:justify-center lg:border-0 lg:pt-0">
          {navItems.map((item) => (
            <Link className="shrink-0 transition hover:text-black" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-[#26231f]">
          <Link className="hidden sm:inline" href="/objects">Search</Link>
          <Link className="hidden sm:inline" href="/objects">Heart</Link>
          <Link className="hidden md:inline" href="/contact">Account</Link>
          <Link href="/contact">Cart (0)</Link>
        </div>
      </nav>
    </header>
  );
}
