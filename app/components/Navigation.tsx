import Link from "next/link";
import { navItems } from "../data";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#f7f3ea]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link className="serif text-lg tracking-[0.18em]" href="/">
          GETYOUR.DESIGN
        </Link>
        <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.16em] text-[#333] lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-black" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="border border-black px-4 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-black hover:text-[#f7f3ea]"
          href="/contact"
        >
          Inquire
        </Link>
      </nav>
      <div className="flex gap-4 overflow-x-auto border-t hairline px-5 py-3 text-xs uppercase tracking-[0.16em] lg:hidden">
        {navItems.map((item) => (
          <Link className="shrink-0 text-[#333]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
