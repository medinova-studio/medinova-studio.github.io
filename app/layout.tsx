import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medinova Studio — Engineering Interactive Experiences & Digital Growth",
  description:
    "Cross-platform game development, custom software engineering, and 360° AI-powered growth systems for businesses.",
};

export const viewport = {
  themeColor: "#070a12",
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
      <body className="bg-ink-950 text-slate-400 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
