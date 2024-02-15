import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const data = await stripe.charges.list();
  return NextResponse.json(data.data.reverse());
}
