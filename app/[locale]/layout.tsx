import { getDictionary } from "../data/dictionaries";
import { isLocale } from "../lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "de";
  const dictionary = getDictionary(locale);

  return (
    <div dir={locale === "ar" ? "rtl" : undefined} lang={dictionary.htmlLang}>
      {children}
    </div>
  );
}
