import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHomePage } from "../components/LocalizedHomePage";
import { getDictionary } from "../data/dictionaries";
import { getAbsoluteAlternateLanguages, isLocale, localizedRoutes, locales } from "../lib/i18n";

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
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: localizedRoutes.home[locale],
      images: [{ url: "/images/hero-editorial.png", alt: "GETYOUR.DESIGN interior context" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["/images/hero-editorial.png"],
    },
    alternates: {
      canonical: localizedRoutes.home[locale],
      languages: getAbsoluteAlternateLanguages("home"),
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedHomeProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LocalizedHomePage locale={locale} />;
}
