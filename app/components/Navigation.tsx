"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data";
import { getDictionary } from "../data/dictionaries";
import { getLanguageSwitchPath, getLocaleFromPath, locales, localizeHref } from "../lib/i18n";

export function Navigation() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dictionary = getDictionary(locale);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#f3f2ef]/95 backdrop-blur">
      <nav className="mx-auto grid max-w-[1540px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link className="serif text-xl tracking-[0.16em]" href={localizeHref("/", locale)}>
          GETYOUR.DESIGN
        </Link>
        <div className="order-3 col-span-2 flex gap-6 overflow-x-auto border-t hairline pt-4 text-[0.68rem] uppercase tracking-[0.18em] text-[#26231f] lg:order-none lg:col-span-1 lg:justify-center lg:border-0 lg:pt-0">
          {navItems.map((item) => {
            const isActive =
              pathname === localizeHref(item.href, locale) ||
              (item.href !== "/" && pathname.startsWith(`${localizeHref(item.href, locale)}/`));
            const isShop = item.href === "/shop";

            return (
              <Link
                className={`shrink-0 border-b pb-1 transition hover:text-black ${
                  isActive ? "border-black font-semibold text-black" : "border-transparent"
                } ${isShop ? "font-semibold text-black" : ""}`}
                href={localizeHref(item.href, locale)}
                key={item.href}
              >
                {dictionary.nav.labels[item.label] ?? item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-end gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-[#26231f]">
          <Link className="hidden sm:inline" href={localizeHref("/suche", locale)}>{dictionary.nav.search}</Link>
          <Link className="hidden md:inline" href={localizeHref("/trade", locale)}>{dictionary.nav.account}</Link>
          <Link href={localizeHref("/warenkorb", locale)}>{dictionary.nav.cart}</Link>
          <div className="hidden flex-wrap gap-x-2 gap-y-1 sm:flex">
            {locales.map((targetLocale, index) => (
              <span className="contents" key={targetLocale}>
                {index > 0 ? <span className="text-[#667174]">|</span> : null}
                <Link
                  className={locale === targetLocale ? "text-black" : "text-[#667174]"}
                  href={getLanguageSwitchPath(pathname, targetLocale)}
                >
                  {targetLocale.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
