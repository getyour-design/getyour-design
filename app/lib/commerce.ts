import type { ProductStatus } from "../data/products";

export function getProductCta(status: ProductStatus) {
  switch (status) {
    case "sofort-kaufen":
      return { label: "In den Warenkorb", href: "/warenkorb", disabled: false };
    case "anfragen":
      return { label: "Anfrage senden", href: "/contact", disabled: false };
    case "preis-auf-anfrage":
      return { label: "Preis anfragen", href: "/contact", disabled: false };
    case "reserviert":
      return { label: "Reserviert", href: undefined, disabled: true };
    case "verkauft":
      return { label: "Verkauft", href: undefined, disabled: true };
  }
}

// Future checkout integration can be connected here, e.g. Stripe Checkout or Shopify.
// Keep this inactive until real provider credentials, products and checkout flow are ready.
export function prepareCheckout() {
  return { enabled: false };
}
