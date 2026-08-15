import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import SiteChrome from "@/components/layout/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteTitle =
  "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub";
const siteDescription =
  "Custom Unity C# gameplay mechanics, immersive AR/VR simulations, high-performance WebGL browser portals, and cross-platform game production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://medinovastudio.com"),
  title: {
    default: siteTitle,
    template: "%s | Medinova Studio",
  },
  description: siteDescription,
  keywords: [
    "game studio Morocco",
    "Unity development",
    "C# gameplay mechanics",
    "mobile games",
    "WebGL",
    "AR/VR simulations",
    "game development agency",
    "Medinova Studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com",
    siteName: "Medinova Studio",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#010102",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-canvas text-ink-subtle font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
