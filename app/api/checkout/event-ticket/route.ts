import { NextResponse } from "next/server";

const STRIPE_CHECKOUT_SESSIONS_URL = "https://api.stripe.com/v1/checkout/sessions";

function getBaseUrl(request: Request) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to the environment." },
      { status: 500 }
    );
  }

  const baseUrl = getBaseUrl(request);
  const params = new URLSearchParams({
    mode: "payment",
    "payment_method_types[0]": "card",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][product_data][name]": "The Forge Event Ticket",
    "line_items[0][price_data][product_data][description]":
      "June 12, 8 AM - 4 PM at Church of the Heartland in Omaha",
    "line_items[0][price_data][unit_amount]": "5000",
    "line_items[0][quantity]": "1",
    "phone_number_collection[enabled]": "true",
    "custom_fields[0][key]": "attendee_name",
    "custom_fields[0][label][type]": "custom",
    "custom_fields[0][label][custom]": "Attendee name",
    "custom_fields[0][type]": "text",
    "custom_fields[0][optional]": "false",
    "metadata[event]": "The Forge Event",
    "metadata[event_date]": "2026-06-12",
    success_url: `${baseUrl}/event/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/event/cancel`,
  });

  const response = await fetch(STRIPE_CHECKOUT_SESSIONS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const session = await response.json();

  if (!response.ok || typeof session.url !== "string") {
    return NextResponse.json(
      {
        error: "Unable to create Stripe Checkout session.",
        detail: session.error?.message,
      },
      { status: response.status || 500 }
    );
  }

  return NextResponse.redirect(session.url, 303);
}
