import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  getCheckoutBaseUrl,
  getDirectCheckoutProduct,
  isStripeCheckoutConfigured,
} from "../../lib/commerce";

type CheckoutRequest = {
  productSlug?: unknown;
};

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}

export async function POST(request: Request) {
  if (!isStripeCheckoutConfigured()) {
    return NextResponse.json({ error: "Checkout is currently unavailable." }, { status: 503 });
  }

  let body: CheckoutRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const productSlug = typeof body.productSlug === "string" ? body.productSlug : "";
  const checkoutProduct = getDirectCheckoutProduct(productSlug);

  if (!checkoutProduct) {
    return NextResponse.json({ error: "Checkout is unavailable for this product." }, { status: 400 });
  }

  const baseUrl = getCheckoutBaseUrl();
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!baseUrl || !stripeSecretKey) {
    return NextResponse.json({ error: "Checkout is currently unavailable." }, { status: 503 });
  }

  try {
    const stripe = new Stripe(stripeSecretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: checkoutProduct.currency,
            unit_amount: checkoutProduct.amount,
            product_data: {
              name: checkoutProduct.name,
              images: [`${baseUrl}${checkoutProduct.imagePath}`],
              metadata: {
                productSlug,
                productType: checkoutProduct.productType,
                source: "getyour.design",
              },
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/de/checkout/erfolg?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/de/checkout/abgebrochen`,
      metadata: {
        productSlug,
        productType: checkoutProduct.productType,
        source: "getyour.design",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout is currently unavailable." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session creation failed.", {
      productSlug,
      errorType: error instanceof Error ? error.name : "UnknownError",
    });

    return NextResponse.json({ error: "Checkout is currently unavailable." }, { status: 502 });
  }
}
