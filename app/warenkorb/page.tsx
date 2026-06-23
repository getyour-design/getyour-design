import type { Metadata } from "next";
import { prepareCheckout } from "../lib/commerce";

export const metadata: Metadata = {
  title: "Warenkorb",
  description: "Warenkorb von GETYOUR.DESIGN.",
  robots: {
    index: false,
    follow: false,
  },
};

const previewItems = [
  {
    title: "Vase aus glasierter Keramik",
    price: "EUR 180",
  },
  {
    title: "Sitzobjekt aus dunklem Holz",
    price: "EUR 3,840",
  },
];

export default function CartPage() {
  const checkout = prepareCheckout();

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">Warenkorb</p>
          <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
            Warenkorb
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#4b5356]">
            Der Checkout wird derzeit vorbereitet.
          </p>
        </div>
        <section className="border hairline bg-[#f7f7f5] p-6 lg:p-8">
          <div className="divide-y divide-black/15 border-y border-black/15">
            {previewItems.map((item) => (
              <div className="flex items-center justify-between gap-6 py-5" key={item.title}>
                <p className="serif text-lg leading-snug tracking-[0.08em]">{item.title}</p>
                <p className="shrink-0 text-sm text-[#353b3e]">{item.price}</p>
              </div>
            ))}
          </div>
          <button
            className="mt-8 border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]"
            disabled={!checkout.enabled}
          >
            Checkout vorbereiten
          </button>
        </section>
      </div>
    </main>
  );
}
