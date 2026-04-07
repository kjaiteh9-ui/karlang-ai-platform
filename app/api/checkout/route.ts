import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

const PRICES: Record<string, { setup: string; monthly: string }> = {
  starter: {
    setup: "price_1TJMKu3W9IDMRk8tBh6LYgZx",
    monthly: "price_1TJMLj3W9IDMRk8tM7nX2d2N",
  },
  pro: {
    setup: "price_1TJMML3W9IDMRk8t2zH34C4x",
    monthly: "price_1TJMMs3W9IDMRk8t5eYnkpYu",
  },
  business: {
    setup: "price_1TJMOC3W9IDMRk8t34ogUATV",
    monthly: "price_1TJMOm3W9IDMRk8tzmlGhrba",
  },
  custom: {
    setup: "price_1TJMPZ3W9IDMRk8twf07nVsu",
    monthly: "price_1TJMQ43W9IDMRk8tkc26qsJ6",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { tier, type } = await req.json();

    const tierPrices = PRICES[tier];
    if (!tierPrices) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const priceId = type === "setup" ? tierPrices.setup : tierPrices.monthly;
    const mode = type === "setup" ? "payment" : "subscription";

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.nextUrl.origin}/pricing?success=true`,
      cancel_url: `${req.nextUrl.origin}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
