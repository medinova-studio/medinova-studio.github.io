import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import SiteChrome from "@/components/layout/SiteChrome";
import JsonLd from "@/components/JsonLd";
import { graphSchema } from "@/lib/jsonLd";

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

const siteTitle =
  "Medinova Studio — Game Development Studio & Coding Academy in Kenitra, Morocco";
const siteDescription =
  "Medinova Studio is an active game development studio & coding academy in Kenitra, Morocco — custom Unity C# game development, AR/VR & WebGL experiences, AI growth systems, and certified coding tracks in Scratch, Python, and Unity C#.";

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
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#F0F5FF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${jakarta.variable} ${geistMono.variable} bg-canvas text-ink-subtle font-sans antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
        <JsonLd data={graphSchema()} />
      </body>
    </html>
  );
}
