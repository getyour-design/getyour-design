import Link from "next/link";
import { CheckoutButton } from "./CheckoutButton";
import type { CommerceCta } from "../lib/commerce";

type ProductCommerceBlockProps = {
  commerceCta: CommerceCta;
  productSlug: string;
  checkoutErrorMessage: string;
  checkoutLoadingLabel: string;
  fallbackHref: string;
};

export function ProductCommerceBlock({
  commerceCta,
  productSlug,
  checkoutErrorMessage,
  checkoutLoadingLabel,
  fallbackHref,
}: ProductCommerceBlockProps) {
  const buttonClassName = "inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]";

  return (
    <section className="mt-6 border-y border-black/15 bg-[#f7f7f5] px-5 py-5">
      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#667174]">{commerceCta.modeLabel}</p>
      <p className="mt-3 text-sm leading-7 text-[#4b5356]">{commerceCta.description}</p>
      {commerceCta.sellerLabel ? (
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#667174]">{commerceCta.sellerLabel}</p>
      ) : null}
      {commerceCta.priceDisclaimer ? (
        <p className="mt-2 text-xs leading-6 text-[#667174]">{commerceCta.priceDisclaimer}</p>
      ) : null}
      <div className="mt-5">
        {commerceCta.action === "checkout" ? (
          <CheckoutButton
            errorMessage={checkoutErrorMessage}
            label={commerceCta.label}
            loadingLabel={checkoutLoadingLabel}
            productSlug={productSlug}
          />
        ) : commerceCta.disabled ? (
          <button className="border border-black/20 bg-[#e8eceb] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#667174]" disabled>
            {commerceCta.label}
          </button>
        ) : commerceCta.external ? (
          <a className={buttonClassName} href={commerceCta.href} rel={commerceCta.rel} target="_blank">
            {commerceCta.label}
          </a>
        ) : (
          <Link className={buttonClassName} href={commerceCta.href ?? fallbackHref}>
            {commerceCta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
