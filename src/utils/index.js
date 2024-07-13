import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function formatNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "0";
  }
  const parts = number?.toString()?.split(".");

  parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export const BASE_URL = process.env.NEXT_BASE_URL;
export const APIKEY = process.env.NEXT_API_KEY;
export const APPID = process.env.NEXT_APP_ID;
export const ORGANIZATION_ID = process.env.NEXT_ORGANIZATION_ID;
