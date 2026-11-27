import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

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

export const metadata: Metadata = {
  title: "اختبار اتصال الطلبات | Medinova Shop",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShopTestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geist.variable} ${jakarta.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-canvas font-sans text-ink-subtle antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
