import { redirect } from "next/navigation";

type AtelierPageProps = {
  params: Promise<{ locale: string; brand: string }>;
};
export default async function AtelierDetailPage({ params }: AtelierPageProps) {
  const { locale, brand } = await params;
  redirect(`/${locale}/collections/${brand}`);
}
