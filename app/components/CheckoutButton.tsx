"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  productSlug: string;
  label: string;
  loadingLabel: string;
  errorMessage: string;
};

type CheckoutResponse = {
  url?: unknown;
};

function hasCheckoutUrl(value: CheckoutResponse): value is { url: string } {
  return typeof value.url === "string" && value.url.startsWith("https://checkout.stripe.com/");
}

export function CheckoutButton({
  productSlug,
  label,
  loadingLabel,
  errorMessage,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function startCheckout() {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productSlug }),
      });
      const data = (await response.json().catch(() => ({}))) as CheckoutResponse;

      if (!response.ok || !hasCheckoutUrl(data)) {
        throw new Error("Checkout unavailable");
      }

      window.location.assign(data.url);
    } catch {
      setError(true);
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <button
        className="border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff] disabled:cursor-wait disabled:border-black/30 disabled:bg-[#353b3e]"
        disabled={isLoading}
        onClick={startCheckout}
        type="button"
      >
        {isLoading ? loadingLabel : label}
      </button>
      {error ? <p className="mt-4 max-w-md text-sm leading-7 text-[#4b5356]">{errorMessage}</p> : null}
    </div>
  );
}
