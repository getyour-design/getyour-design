import Link from "next/link";
import { navItems } from "../data";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#f3f2ef]/95 backdrop-blur">
      <nav className="mx-auto grid max-w-[1540px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link className="serif -ml-1 text-xl tracking-[0.16em]" href="/">
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
          <Link className="hidden sm:inline" href="/shop">Suche</Link>
          <Link className="hidden sm:inline" href="/shop">Merkliste</Link>
          <Link className="hidden md:inline" href="/trade">Konto</Link>
          <Link href="/shop">Warenkorb (0)</Link>
        </div>
      </nav>
    </header>
  );
}
