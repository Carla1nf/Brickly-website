"use client";

import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function useGetPayments() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const data = await stripe.charges.list();
  return NextResponse.json(data.data.reverse());
}
