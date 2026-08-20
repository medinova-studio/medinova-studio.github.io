import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./../globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import SiteChrome from "@/components/layout/SiteChrome";
import JsonLd from "@/components/JsonLd";
import FacebookPixel from "@/components/FacebookPixel";
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
      <body
        className={`${geist.variable} ${jakarta.variable} ${geistMono.variable} bg-canvas text-ink-subtle font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider lang={l}>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
        <JsonLd data={graphSchema()} />
        <GoogleAnalytics gaId="G-PMBCHDX0MS" />
        <Analytics />
        <SpeedInsights />
        <FacebookPixel />
      </body>
    </html>
  );
}