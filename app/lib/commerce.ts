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
  presentation: CommercePresentationLabels;
};

type CommerceCtaInput = {
  productSlug: string;
  commerceMode?: CommerceMode;
  affiliateLink?: string;
  fallbackCta: BaseProductCta;
  labels: CommerceCtaLabels;
};

type CommercePresentationCopy = {
  modeLabel: string;
  description: string;
  sellerLabel?: string;
  priceDisclaimer?: string;
};

type CommercePresentationLabels = {
  direct: CommercePresentationCopy;
  affiliate: CommercePresentationCopy;
  inquiry: CommercePresentationCopy;
  status: CommercePresentationCopy;
  unavailable: CommercePresentationCopy;
};

type AffiliateReadinessProduct = {
  commerceMode?: CommerceMode;
  affiliateLink?: string;
  affiliatePartner?: string;
  affiliateCategory?: string;
  affiliateDisclosure?: string;
  affiliateLastCheckedAt?: string;
  affiliateImageSource?: string;
  affiliateDataSource?: string;
  sourceUrl?: string;
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
  modeLabel: string;
  eyebrow: string;
  description: string;
  sellerLabel?: string;
  priceDisclaimer?: string;
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

function getFallbackPresentationKey(
  fallbackCta: BaseProductCta,
  mode: CommerceCta["mode"],
): keyof CommercePresentationLabels {
  if (fallbackCta.disabled) {
    return "unavailable";
  }

  if (mode === "inquiry" || fallbackCta.href?.includes("contact") || fallbackCta.href?.includes("kontakt")) {
    return "inquiry";
  }

  return "status";
}

function toCommerceFallbackCta(
  fallbackCta: BaseProductCta,
  presentationLabels: CommercePresentationLabels,
  mode: CommerceCta["mode"] = "status",
): CommerceCta {
  const presentation = presentationLabels[getFallbackPresentationKey(fallbackCta, mode)];

  return {
    mode,
    label: fallbackCta.label,
    href: fallbackCta.href,
    action: fallbackCta.disabled ? "disabled" : "link",
    external: false,
    disabled: fallbackCta.disabled,
    checkoutEnabled: false,
    modeLabel: presentation.modeLabel,
    eyebrow: presentation.modeLabel,
    description: presentation.description,
    sellerLabel: presentation.sellerLabel,
    priceDisclaimer: presentation.priceDisclaimer,
  };
}

export function isValidAffiliateUrl(value?: string) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);

    return url.protocol === "https:";
  } catch {
    return false;
  }
}

function getSafeAffiliateHref(value?: string) {
  return isValidAffiliateUrl(value) ? new URL(value as string).href : undefined;
}

export function getAffiliateReadinessIssues(product: AffiliateReadinessProduct) {
  const issues: string[] = [];

  if (product.commerceMode !== "affiliate") {
    issues.push("commerceMode is not affiliate");
  }

  if (!isValidAffiliateUrl(product.affiliateLink)) {
    issues.push("affiliateLink must be an absolute HTTPS URL");
  }

  if (!product.affiliatePartner) {
    issues.push("affiliatePartner is missing");
  }

  if (!product.affiliateCategory) {
    issues.push("affiliateCategory is missing");
  }

  if (!product.affiliateDisclosure) {
    issues.push("affiliateDisclosure is missing");
  }

  if (!product.affiliateLastCheckedAt) {
    issues.push("affiliateLastCheckedAt is missing");
  }

  if (!product.affiliateImageSource) {
    issues.push("affiliateImageSource is missing");
  }

  if (!product.affiliateDataSource && !product.sourceUrl) {
    issues.push("affiliateDataSource or sourceUrl is missing");
  }

  return issues;
}

export function isAffiliateReadyProduct(product: AffiliateReadinessProduct) {
  return getAffiliateReadinessIssues(product).length === 0;
}

export function getCommerceCta({
  productSlug,
  commerceMode,
  affiliateLink,
  fallbackCta,
  labels,
}: CommerceCtaInput): CommerceCta {
  if (fallbackCta.disabled) {
    return toCommerceFallbackCta(fallbackCta, labels.presentation, commerceMode ?? "status");
  }

  const checkoutCta = getProductCheckoutCta(productSlug);
  const legacyDirectCheckout = !commerceMode && checkoutCta.enabled;

  if (commerceMode === "direct" || legacyDirectCheckout) {
    if (checkoutCta.enabled) {
      const presentation = labels.presentation.direct;

      return {
        mode: "direct",
        label: labels.direct,
        action: "checkout",
        external: false,
        disabled: false,
        checkoutEnabled: true,
        modeLabel: presentation.modeLabel,
        eyebrow: presentation.modeLabel,
        description: presentation.description,
        sellerLabel: presentation.sellerLabel,
        priceDisclaimer: presentation.priceDisclaimer,
      };
    }

    return toCommerceFallbackCta(fallbackCta, labels.presentation, "direct");
  }

  if (commerceMode === "affiliate") {
    const href = getSafeAffiliateHref(affiliateLink);

    if (href) {
      const presentation = labels.presentation.affiliate;

      return {
        mode: "affiliate",
        label: labels.affiliate,
        href,
        action: "link",
        external: true,
        disabled: false,
        rel: "sponsored nofollow noopener noreferrer",
        checkoutEnabled: false,
        modeLabel: presentation.modeLabel,
        eyebrow: presentation.modeLabel,
        description: presentation.description,
        sellerLabel: presentation.sellerLabel,
        priceDisclaimer: presentation.priceDisclaimer,
      };
    }

    return toCommerceFallbackCta(fallbackCta, labels.presentation, "affiliate");
  }

  if (commerceMode === "inquiry") {
    return toCommerceFallbackCta(fallbackCta, labels.presentation, "inquiry");
  }

  return toCommerceFallbackCta(fallbackCta, labels.presentation);
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
