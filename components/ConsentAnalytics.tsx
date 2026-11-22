"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FacebookPixel from "@/components/FacebookPixel";
import RouteTracker from "@/components/analytics/RouteTracker";

export const COOKIE_CONSENT_KEY = "medinova-cookie-consent";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

export default function ConsentAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setEnabled(hasAnalyticsConsent());
    syncConsent();
    window.addEventListener("medinova-consent-changed", syncConsent);
    return () => window.removeEventListener("medinova-consent-changed", syncConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-PMBCHDX0MS" />
      <Analytics />
      <SpeedInsights />
      <FacebookPixel />
      <RouteTracker />
    </>
  );
}
