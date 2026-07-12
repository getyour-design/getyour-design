import type { ProductStatus } from "../data/products";

const directCheckoutProducts = {
  "sitzobjekt-kuhfell": {
    amount: 720000,
    currency: "eur",
    name: "Sitzobjekt aus europäischem Kuhfell",
    productType: "physical",
    imagePath: "/images/products/sculptural-cowhide-seat-hero.png",
  },
} as const;

export type DirectCheckoutProductSlug = keyof typeof directCheckoutProducts;

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

export function getDirectCheckoutProduct(productSlug: string) {
  return directCheckoutProducts[productSlug as DirectCheckoutProductSlug];
}

export function isStripeCheckoutConfigured() {
  return process.env.STRIPE_CHECKOUT_ENABLED === "true" && Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getProductCheckoutCta(productSlug: string) {
  const checkoutProduct = getDirectCheckoutProduct(productSlug);

  return {
    enabled: Boolean(checkoutProduct) && isStripeCheckoutConfigured(),
    label: "KAUFEN",
  };
}

export function getCheckoutBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (configuredUrl) {
    return configuredUrl;
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  return undefined;
}
