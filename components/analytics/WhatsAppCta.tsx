"use client";

import type { ReactNode } from "react";
import { academyWhatsAppUrl } from "@/lib/academy";
import { trackEvent, trackLeadOnce } from "@/lib/analytics";

/**
 * Renders an outbound WhatsApp link and reports the intent to analytics.
 *
 * Takes a pre-built `href` rather than a message so callers can compose a
 * course- and plan-specific URL. Plain `message` is still accepted for the
 * simple generic case.
 */
export default function WhatsAppCta({
  href,
  message,
  source,
  onClick,
  className,
  children,
}: {
  href?: string;
  /** Convenience for the common case: a raw prefilled WhatsApp message. */
  message?: string;
  source: string;
  /** Runs before the built-in tracking — for plan-specific funnel events. */
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href ?? academyWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        onClick?.();
        trackEvent("whatsapp_click", { source });
        trackLeadOnce({ source });
      }}
      className={className}
    >
      {children}
    </a>
  );
}