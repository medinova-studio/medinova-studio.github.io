"use client";

import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { academyWhatsAppUrl } from "@/lib/academy";

export default function FloatingWhatsApp() {
  const { t } = useLang();
  const { whatsapp } = t.academy;

  return (
    <a
      href={academyWhatsAppUrl(whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.aria}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:flex items-center gap-2 rounded-full bg-ink-900/90 border border-white/10 px-4 py-2.5 shadow-xl backdrop-blur-xl text-xs font-medium text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        {whatsapp.online}
      </span>
      <span className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/25 flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95">
        <MessageCircle className="w-6 h-6 text-white" />
      </span>
    </a>
  );
}
