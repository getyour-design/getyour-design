import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { isStripeCheckoutConfigured, validateDirectCheckoutSession } from "../../../lib/commerce";
import { getProductPath, getShopPath, isLocale, type Locale } from "../../../lib/i18n";

type CheckoutResultPageProps = {
  params: Promise<{ locale: string; result: string }>;
  searchParams?: Promise<{ session_id?: string | string[] }>;
};

const productSlug = "sitzobjekt-kuhfell";
const productCategorySlug = "moebel";

const resultSlugs: Record<Locale, { success: string; cancel: string }> = {
  de: { success: "erfolg", cancel: "abgebrochen" },
  en: { success: "success", cancel: "cancelled" },
  fr: { success: "success", cancel: "annule" },
  es: { success: "success", cancel: "cancelado" },
  zh: { success: "success", cancel: "cancelled" },
  ar: { success: "success", cancel: "cancelled" },
};

const copy: Record<Locale, Record<"success" | "cancel", {
  eyebrow: string;
  title: string;
  body: string;
  productLink: string;
  shopLink: string;
}>> = {
  de: {
    success: {
      eyebrow: "Checkout",
      title: "Zahlungsvorgang uebermittelt.",
      body: "Der Zahlungsvorgang wurde erfolgreich an Stripe uebermittelt. Wir pruefen die Bestellung anschliessend und melden uns mit den naechsten Schritten.",
      productLink: "Zurueck zum Produkt",
      shopLink: "Zum Shop",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "Keine Zahlung abgeschlossen.",
      body: "Es wurde keine Zahlung abgeschlossen. Das Sitzobjekt kann weiterhin ueber die Produktseite angefragt werden.",
      productLink: "Zurueck zum Produkt",
      shopLink: "Zum Shop",
    },
  },
  en: {
    success: {
      eyebrow: "Checkout",
      title: "Payment process submitted.",
      body: "The payment process was successfully submitted to Stripe. We will review the order and follow up with the next steps.",
      productLink: "Back to product",
      shopLink: "To the shop",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "No payment completed.",
      body: "No payment was completed. The seating object can still be requested through the product page.",
      productLink: "Back to product",
      shopLink: "To the shop",
    },
  },
  fr: {
    success: {
      eyebrow: "Checkout",
      title: "Processus de paiement transmis.",
      body: "Le processus de paiement a ete transmis a Stripe. Nous verifierons ensuite la commande et reviendrons vers vous avec les prochaines etapes.",
      productLink: "Retour au produit",
      shopLink: "Vers la boutique",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "Aucun paiement finalise.",
      body: "Aucun paiement n'a ete finalise. L'assise peut toujours etre demandee depuis la page produit.",
      productLink: "Retour au produit",
      shopLink: "Vers la boutique",
    },
  },
  es: {
    success: {
      eyebrow: "Checkout",
      title: "Proceso de pago enviado.",
      body: "El proceso de pago se ha enviado correctamente a Stripe. Revisaremos el pedido y le contactaremos con los siguientes pasos.",
      productLink: "Volver al producto",
      shopLink: "Ir a la tienda",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "No se ha completado ningun pago.",
      body: "No se ha completado ningun pago. El asiento puede seguir consultandose desde la pagina del producto.",
      productLink: "Volver al producto",
      shopLink: "Ir a la tienda",
    },
  },
  zh: {
    success: {
      eyebrow: "Checkout",
      title: "付款流程已提交。",
      body: "付款流程已成功提交至 Stripe。我们会随后审核订单，并告知下一步。",
      productLink: "返回产品",
      shopLink: "前往商店",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "未完成付款。",
      body: "没有完成付款。仍可通过产品页面咨询该座椅作品。",
      productLink: "返回产品",
      shopLink: "前往商店",
    },
  },
  ar: {
    success: {
      eyebrow: "Checkout",
      title: "تم إرسال عملية الدفع.",
      body: "تم إرسال عملية الدفع إلى Stripe بنجاح. سنراجع الطلب بعد ذلك ونتواصل معكم بشأن الخطوات التالية.",
      productLink: "العودة إلى المنتج",
      shopLink: "إلى المتجر",
    },
    cancel: {
      eyebrow: "Checkout",
      title: "لم تكتمل أي عملية دفع.",
      body: "لم تكتمل أي عملية دفع. يمكنكم متابعة الاستفسار عن قطعة الجلوس عبر صفحة المنتج.",
      productLink: "العودة إلى المنتج",
      shopLink: "إلى المتجر",
    },
  },
};

const unconfirmedSuccessCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  body: string;
  productLink: string;
  shopLink: string;
}> = {
  de: {
    eyebrow: "Checkout",
    title: "Zahlungsstatus nicht bestaetigt.",
    body: "Der Zahlungsstatus konnte nicht bestaetigt werden. Bitte kehren Sie zum Produkt zurueck oder kontaktieren Sie uns bei Rueckfragen.",
    productLink: "Zurueck zum Produkt",
    shopLink: "Zum Shop",
  },
  en: {
    eyebrow: "Checkout",
    title: "Payment status not confirmed.",
    body: "The payment status could not be confirmed. Please return to the product page or contact us with any questions.",
    productLink: "Back to product",
    shopLink: "To the shop",
  },
  fr: {
    eyebrow: "Checkout",
    title: "Statut du paiement non confirme.",
    body: "Le statut du paiement n'a pas pu etre confirme. Veuillez retourner a la page produit ou nous contacter en cas de question.",
    productLink: "Retour au produit",
    shopLink: "Vers la boutique",
  },
  es: {
    eyebrow: "Checkout",
    title: "Estado del pago no confirmado.",
    body: "No se ha podido confirmar el estado del pago. Vuelva a la pagina del producto o contacte con nosotros si tiene preguntas.",
    productLink: "Volver al producto",
    shopLink: "Ir a la tienda",
  },
  zh: {
    eyebrow: "Checkout",
    title: "付款状态未确认。",
    body: "无法确认付款状态。请返回产品页面，或如有疑问请联系我们。",
    productLink: "返回产品",
    shopLink: "前往商店",
  },
  ar: {
    eyebrow: "Checkout",
    title: "تعذر تأكيد حالة الدفع.",
    body: "تعذر تأكيد حالة الدفع. يرجى العودة إلى صفحة المنتج أو التواصل معنا عند وجود أسئلة.",
    productLink: "العودة إلى المنتج",
    shopLink: "إلى المتجر",
  },
};

export function generateStaticParams() {
  return Object.entries(resultSlugs).flatMap(([locale, slugs]) => [
    { locale, result: slugs.success },
    { locale, result: slugs.cancel },
  ]);
}

export async function generateMetadata({ params }: CheckoutResultPageProps): Promise<Metadata> {
  const { locale, result } = await params;

  if (!isLocale(locale) || !getResultType(locale, result)) {
    return {};
  }

  const resultType = getResultType(locale, result);
  const pageCopy = resultType === "success"
    ? unconfirmedSuccessCopy[locale]
    : resultType
      ? copy[locale][resultType]
      : undefined;

  return {
    title: pageCopy?.title ?? "Checkout",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CheckoutResultPage({ params, searchParams }: CheckoutResultPageProps) {
  const { locale, result } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const resultType = getResultType(locale, result);

  if (!resultType) {
    notFound();
  }

  const requestedSessionId = getSessionId(await searchParams);
  const hasConfirmedCheckout = resultType === "success"
    ? await isConfirmedCheckoutSession(requestedSessionId)
    : false;
  const pageCopy = resultType === "success" && !hasConfirmedCheckout
    ? unconfirmedSuccessCopy[locale]
    : copy[locale][resultType];
  const productHref = getProductPath(locale, productCategorySlug, productSlug);

  return (
    <main className="section-pad bg-[#f3f2ef]">
      <section className="mx-auto max-w-3xl border-y border-black/15 py-12">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#667174]">{pageCopy.eyebrow}</p>
        <h1 className="serif mt-5 text-balance text-3xl font-normal leading-tight tracking-[0.08em] text-[#10100f] md:text-4xl">
          {pageCopy.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#4b5356]">{pageCopy.body}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link className="inline-block border border-black bg-[#000000] px-7 py-4 text-xs uppercase tracking-[0.2em] !text-[#ffffff] transition hover:bg-[#111111] hover:!text-[#ffffff]" href={productHref}>
            {pageCopy.productLink}
          </Link>
          <Link className="inline-block border border-black/20 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#10100f] transition hover:bg-[#f8f8f6]" href={getShopPath(locale)}>
            {pageCopy.shopLink}
          </Link>
        </div>
      </section>
    </main>
  );
}

function getResultType(locale: Locale, result: string) {
  if (result === resultSlugs[locale].success) {
    return "success" as const;
  }

  if (result === resultSlugs[locale].cancel) {
    return "cancel" as const;
  }

  return undefined;
}

function getSessionId(searchParams?: { session_id?: string | string[] }) {
  const sessionId = searchParams?.session_id;

  return typeof sessionId === "string" ? sessionId : undefined;
}

async function isConfirmedCheckoutSession(sessionId: string | undefined) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!sessionId || !stripeSecretKey || !isStripeCheckoutConfigured()) {
    return false;
  }

  try {
    const stripe = new Stripe(stripeSecretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return validateDirectCheckoutSession(session);
  } catch {
    return false;
  }
}
