import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../page";
import { LocalizedHomePage } from "../components/LocalizedHomePage";
import { getDictionary } from "../data/dictionaries";
import { getAlternateLanguages, isLocale, localizedRoutes, locales } from "../lib/i18n";

type LocalizedHomeProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedHomeProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: localizedRoutes.home[locale],
      languages: getAlternateLanguages("home"),
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "de") {
    return <Home />;
  }

  return <LocalizedHomePage locale={locale} />;
}
