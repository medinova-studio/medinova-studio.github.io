"use client";

import type { ReactNode } from "react";
import { academyWhatsAppUrl } from "@/lib/academy";
import { trackEvent, trackLeadOnce } from "@/lib/analytics";

export default function WhatsAppCta({
  message,
  source,
  className,
  children,
}: {
  message: string;
  source: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={academyWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackEvent("whatsapp_click", { source });
        trackLeadOnce({ source });
      }}
      className={className}
    >
      {children}
    </a>
  );
}