import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe( {
  typescript: true,
  apiVersion: "2022-11-15",
});