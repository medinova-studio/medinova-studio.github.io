"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

/**
 * Module-level so a layout remount (e.g. a locale param change) still knows
 * which path was last reported instead of double-firing or going silent.
 */
let lastTrackedPath: string | null = null;

/**
 * Reports client-side navigations to the Meta pixel and GA4. The initial page
 * load is skipped because the pixel snippet and gtag config already fire their
 * own first page view.
 */
export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (lastTrackedPath === null) {
      lastTrackedPath = pathname;
      return;
    }
    if (lastTrackedPath === pathname) return;
    lastTrackedPath = pathname;
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
