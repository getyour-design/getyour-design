import { NextResponse } from "next/server";
import Stripe from "stripe";
import { validateDirectCheckoutSession } from "../../../lib/commerce";

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!stripeSecretKey || !webhookSecret || !signature) {
    return NextResponse.json({ error: "Webhook cannot be processed." }, { status: 400 });
  }

  const rawBody = await request.text();
  const stripe = new Stripe(stripeSecretKey);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Webhook cannot be processed." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (!validateDirectCheckoutSession(session)) {
      console.warn("Stripe checkout session completed with invalid checkout data.", {
        eventId: event.id,
        sessionId: session.id,
      });

      return NextResponse.json({ error: "Webhook cannot be processed." }, { status: 400 });
    }

    console.info("Stripe checkout session completed and validated.", {
      eventId: event.id,
      sessionId: session.id,
      productSlug: session.metadata?.productSlug,
    });
    // TODO: Connect order persistence and customer communication after the legal checkout flow is approved.
  }

  return NextResponse.json({ received: true });
}
