"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNavItems } from "../data";
import { getLocaleFromPath, localizeHref } from "../lib/i18n";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const locale = getLocaleFromPath(usePathname());
  const serviceLinks = ["Versand", "Retouren", "Authentifizierung", "Pflegehinweise"];
  const tradeLinks = ["Projektanfragen", "Private Beschaffung", "Atelier-Anfragen", "Arbeit einreichen", "Kontakt"];
  const englishFooterLabels: Record<string, string> = {
    Shop: "Shop",
    Kunst: "Art",
    Kollektionen: "Collections",
    "Marken & Ateliers": "Brands & Ateliers",
    Künstler: "Artists",
    Materialien: "Materials",
    Journal: "Journal",
    "Commissions & Collaborations": "Commissions & Collaborations",
    Ateliers: "Ateliers",
    "Arbeit einreichen": "Submit Work",
    Versand: "Shipping",
    Retouren: "Returns",
    Authentifizierung: "Authentication",
    Pflegehinweise: "Care Notes",
    Projektanfragen: "Project Inquiries",
    "Private Beschaffung": "Private Sourcing",
    "Atelier-Anfragen": "Atelier Inquiries",
    Kontakt: "Contact",
  };
  const legalLinks = [
    { deLabel: "Impressum", enLabel: "Legal Notice", href: "/impressum" },
    { deLabel: "Datenschutz", enLabel: "Privacy Policy", href: "/datenschutz" },
    { deLabel: "AGB", enLabel: "Terms & Conditions", href: "/agb" },
  ];

  return (
    <footer className="border-t hairline bg-[#e8eceb] px-5 py-14 text-[#111] lg:px-10">
      <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
        <div>
          <p className="serif text-2xl tracking-[0.08em]">GETYOUR.DESIGN</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#4b5356]">
            {locale === "en"
              ? "Contemporary design, art, objects, lighting, rugs and editions by selected artists, ateliers and makers."
              : "Contemporary Design, Kunst, Objekte, Leuchten, Teppiche und Editionen ausgewählter Künstler, Ateliers und Hersteller."}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">{locale === "en" ? "Shop" : "Shop"}</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {footerNavItems.map((item) => (
              <Link className="hover:text-black" href={localizeHref(item.href, locale)} key={item.href}>
                {locale === "en" ? englishFooterLabels[item.label] ?? item.label : item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">Service</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {serviceLinks.map((item) => (
              <Link className="hover:text-black" href={localizeHref("/trade", locale)} key={item}>
                {locale === "en" ? englishFooterLabels[item] ?? item : item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#667174]">Commissions & Collaborations</p>
          <div className="mt-5 grid gap-3 text-sm text-[#37332e]">
            {tradeLinks.map((item) => (
              <Link className="hover:text-black" href={localizeHref(item === "Arbeit einreichen" ? "/arbeit-einreichen" : "/trade", locale)} key={item}>
                {locale === "en" ? englishFooterLabels[item] ?? item : item}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#667174]">Social</p>
          <SocialLinks className="mt-5 flex flex-wrap gap-3 text-sm text-[#37332e]" />
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1540px] flex-col gap-4 border-t hairline pt-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#667174] md:flex-row md:items-center md:justify-between">
        <p>© 2026 GETYOUR.DESIGN</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((item) => (
            <Link className="hover:text-black" href={localizeHref(item.href, locale)} key={item.href}>
              {locale === "en" ? item.enLabel : item.deLabel}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
