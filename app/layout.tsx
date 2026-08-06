import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub",
  description:
    "Custom Unity C# gameplay mechanics, immersive AR/VR simulations, high-performance WebGL browser portals, and cross-platform game production.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-ink-subtle font-sans antialiased overflow-x-hidden">
        <LanguageProvider>
          <Navbar />
          <div className="pt-14">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
