import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./../globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import SiteChrome from "@/components/layout/SiteChrome";
import JsonLd from "@/components/JsonLd";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { graphSchema } from "@/lib/jsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { LANGS, Lang, RTL_LANGS } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#F0F5FF",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/");
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (["en", "fr", "ar"].includes(lang) ? lang : "en") as Lang;
  const isRTL = RTL_LANGS.includes(l);

  return (
    <html lang={l} dir={isRTL ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2808001096523138"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geist.variable} ${jakarta.variable} ${geistMono.variable} bg-canvas text-ink-subtle font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider lang={l}>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
        <JsonLd data={graphSchema()} />
        <ConsentAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}