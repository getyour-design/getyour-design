"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data";
import { getDictionary } from "../data/dictionaries";
import { getLanguageSwitchPath, getLocaleFromPath, locales, localizeHref } from "../lib/i18n";

export function Navigation() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dictionary = getDictionary(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f6f2]">
      <nav className="flex min-h-[72px] w-full items-center justify-between gap-4 px-5 md:px-10 lg:px-9 2xl:px-[68px]">
        <Link className="serif shrink-0 text-[1.05rem] leading-none tracking-[0.1em] text-[#10100f] sm:text-[1.25rem] sm:tracking-[0.12em] 2xl:text-[1.38rem]" href={localizeHref("/", locale)}>
          GETYOUR.DESIGN
        </Link>
        <div className="hidden max-w-full gap-5 text-[0.725rem] font-semibold uppercase tracking-[0.18em] text-[#10100f] lg:flex lg:order-none lg:border-0 lg:pt-0 2xl:gap-11 2xl:text-[0.785rem] 2xl:tracking-[0.2em]">
          {navItems.map((item) => {
            const isActive =
              pathname === localizeHref(item.href, locale) ||
              (item.href !== "/" && pathname.startsWith(`${localizeHref(item.href, locale)}/`));
            const isShop = item.href === "/shop";

            return (
              <Link
                className={`shrink-0 transition hover:text-black ${
                  isActive || isShop ? "text-black" : "text-[#10100f]"
                }`}
                href={localizeHref(item.href, locale)}
                key={item.href}
              >
                {dictionary.nav.labels[item.label] ?? item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden shrink-0 justify-end gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#10100f] lg:flex md:gap-4 2xl:gap-5 2xl:text-[0.62rem] 2xl:tracking-[0.18em]">
          <Link className="hidden sm:inline" href={localizeHref("/suche", locale)}>{dictionary.nav.search}</Link>
          <Link className="hidden md:inline" href={localizeHref("/trade", locale)}>{dictionary.nav.account}</Link>
          <Link href={localizeHref("/warenkorb", locale)}>{dictionary.nav.cart}</Link>
          <div className="hidden gap-x-2 sm:flex">
            {locales.map((targetLocale, index) => (
              <span className="contents" key={targetLocale}>
                {index > 0 ? <span className="text-[#10100f]">|</span> : null}
                <Link
                  className={locale === targetLocale ? "text-black" : "text-[#10100f]"}
                  href={getLanguageSwitchPath(pathname, targetLocale)}
                >
                  {targetLocale.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#10100f] lg:hidden">
          <Link href={localizeHref("/warenkorb", locale)}>Korb (0)</Link>
          <button aria-expanded={mobileMenuOpen} aria-label="Menü öffnen" className="border-l border-black/15 pl-4" onClick={() => setMobileMenuOpen((open) => !open)} type="button">
            Menü
          </button>
        </div>
      </nav>
      {mobileMenuOpen ? (
        <div className="border-t hairline bg-[#f7f6f2] px-5 pb-6 pt-5 lg:hidden">
          <div className="grid gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#10100f]">
            {navItems.map((item) => (
              <Link href={localizeHref(item.href, locale)} key={item.href} onClick={() => setMobileMenuOpen(false)}>
                {dictionary.nav.labels[item.label] ?? item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
