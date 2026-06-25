"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNavItems } from "../data";
import { getDictionary } from "../data/dictionaries";
import { getLocaleFromPath, localizeHref } from "../lib/i18n";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const locale = getLocaleFromPath(usePathname());
  const dictionary = getDictionary(locale);
  const serviceLinks = ["Versand", "Retouren", "Authentifizierung", "Pflegehinweise"];
  const tradeLinks = ["Projektanfragen", "Private Beschaffung", "Atelier-Anfragen", "Arbeit einreichen", "Kontakt"];
  const legalLinks = [
    { label: dictionary.footer.legal.imprint, href: "/impressum" },
    { label: dictionary.footer.legal.privacy, href: "/datenschutz" },
    { label: dictionary.footer.legal.terms, href: "/agb" },
  ];

  return (
    <footer className="border-t hairline bg-[#e8eceb] px-5 py-14 text-[#111] lg:px-10">
      <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
        <div>
          <p className="serif text-2xl tracking-[0.08em]">GETYOUR.DESIGN</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#4b5356]">
            {dictionary.footer.description}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">{dictionary.footer.shopHeading}</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {footerNavItems.map((item) => (
              <Link className="hover:text-black" href={localizeHref(item.href, locale)} key={item.href}>
                {dictionary.footer.labels[item.label] ?? item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">{dictionary.footer.serviceHeading}</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {serviceLinks.map((item) => (
              <Link className="hover:text-black" href={localizeHref("/trade", locale)} key={item}>
                {dictionary.footer.labels[item] ?? item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">{dictionary.footer.tradeHeading}</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {tradeLinks.map((item) => (
              <Link className="hover:text-black" href={localizeHref(item === "Arbeit einreichen" ? "/arbeit-einreichen" : "/trade", locale)} key={item}>
                {dictionary.footer.labels[item] ?? item}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#667174]">{dictionary.footer.socialHeading}</p>
          <SocialLinks className="mt-5 flex flex-wrap gap-3 text-sm text-[#37332e]" />
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1540px] flex-col gap-4 border-t hairline pt-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#667174] md:flex-row md:items-center md:justify-between">
        <p>© 2026 GETYOUR.DESIGN</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((item) => (
            <Link className="hover:text-black" href={localizeHref(item.href, locale)} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
