import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der 2B Home GmbH für GETYOUR.DESIGN.",
  alternates: {
    canonical: "/impressum",
  },
};

const companyDetails = [
  ["Unternehmen", "2B Home GmbH"],
  ["Anschrift", "Kurfürstendamm 193d, 10707 Berlin"],
  ["Telefon", "030 8871 4880"],
  ["Fax", "030 1388 1599"],
  ["E-Mail", "home@2b.berlin"],
  ["Vertreten durch", "Diana Tarlig-Julich"],
  ["Registergericht", "Amtsgericht Berlin"],
  ["Handelsregister", "HRB 235346 B"],
  ["USt-ID", "DE348785133"],
];

export default function ImpressumPage() {
  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#786f64]">Rechtliches</p>
          <h1 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] lg:text-4xl">
            Impressum
          </h1>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-10">
          <p className="serif text-2xl tracking-[0.08em]">Angaben gemäß Anbieterkennzeichnung</p>
          <dl className="mt-10 divide-y divide-black/15 border-y border-black/15 text-sm">
            {companyDetails.map(([label, value]) => (
              <div className="grid gap-2 py-5 md:grid-cols-[0.35fr_0.65fr]" key={label}>
                <dt className="text-xs uppercase tracking-[0.2em] text-[#667174]">{label}</dt>
                <dd className="leading-7 text-[#353b3e]">
                  {label === "E-Mail" ? <a href={`mailto:${value}`}>{value}</a> : value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
