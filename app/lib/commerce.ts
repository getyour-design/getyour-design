import type Stripe from "stripe";
import type { ProductStatus } from "../data/products";

type CommerceMode = "direct" | "affiliate" | "inquiry";

type BaseProductCta = {
  label: string;
  href?: string;
  disabled: boolean;
};

type CommerceCtaLabels = {
  direct: string;
  affiliate: string;
};

type CommerceCtaInput = {
  productSlug: string;
  commerceMode?: CommerceMode;
  affiliateLink?: string;
  fallbackCta: BaseProductCta;
  labels: CommerceCtaLabels;
};

export type CommerceCta = {
  mode: CommerceMode | "status";
  label: string;
  href?: string;
  action: "checkout" | "link" | "disabled";
  external: boolean;
  disabled: boolean;
  rel?: string;
  checkoutEnabled: boolean;
};

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

function toCommerceFallbackCta(fallbackCta: BaseProductCta, mode: CommerceCta["mode"] = "status"): CommerceCta {
  return {
    mode,
    label: fallbackCta.label,
    href: fallbackCta.href,
    action: fallbackCta.disabled ? "disabled" : "link",
    external: false,
    disabled: fallbackCta.disabled,
    checkoutEnabled: false,
  };
}

function getSafeAffiliateHref(value?: string) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);

    return url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export function getCommerceCta({
  productSlug,
  commerceMode,
  affiliateLink,
  fallbackCta,
  labels,
}: CommerceCtaInput): CommerceCta {
  if (fallbackCta.disabled) {
    return toCommerceFallbackCta(fallbackCta, commerceMode ?? "status");
  }

  const checkoutCta = getProductCheckoutCta(productSlug);
  const legacyDirectCheckout = !commerceMode && checkoutCta.enabled;

  if (commerceMode === "direct" || legacyDirectCheckout) {
    if (checkoutCta.enabled) {
      return {
        mode: "direct",
        label: labels.direct,
        action: "checkout",
        external: false,
        disabled: false,
        checkoutEnabled: true,
      };
    }

    return toCommerceFallbackCta(fallbackCta, "direct");
  }

  if (commerceMode === "affiliate") {
    const href = getSafeAffiliateHref(affiliateLink);

    if (href) {
      return {
        mode: "affiliate",
        label: labels.affiliate,
        href,
        action: "link",
        external: true,
        disabled: false,
        rel: "sponsored nofollow noopener noreferrer",
        checkoutEnabled: false,
      };
    }

    return toCommerceFallbackCta(fallbackCta, "affiliate");
  }

  if (commerceMode === "inquiry") {
    return toCommerceFallbackCta(fallbackCta, "inquiry");
  }

  return toCommerceFallbackCta(fallbackCta);
}

export function getCheckoutBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return getAllowedCheckoutBaseUrl(configuredUrl);
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  return undefined;
}

export function getAllowedCheckoutBaseUrl(value: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    return undefined;
  }

  if (url.pathname !== "/" || url.search || url.hash || url.username || url.password) {
    return undefined;
  }

  const origin = url.origin;

  if (process.env.NODE_ENV === "production") {
    return origin === "https://www.getyour.design" || origin === "https://getyour.design"
      ? origin
      : undefined;
  }

  return origin === "http://localhost:3000" || origin === "http://localhost:3001"
    ? origin
    : undefined;
}

export function validateDirectCheckoutSession(session: Pick<
  Stripe.Checkout.Session,
  "amount_total" | "currency" | "metadata" | "mode" | "payment_status"
>) {
  const checkoutProduct = directCheckoutProducts["sitzobjekt-kuhfell"];

  return session.mode === "payment" &&
    session.payment_status === "paid" &&
    session.amount_total === checkoutProduct.amount &&
    session.currency === checkoutProduct.currency &&
    session.metadata?.productSlug === "sitzobjekt-kuhfell";
}
