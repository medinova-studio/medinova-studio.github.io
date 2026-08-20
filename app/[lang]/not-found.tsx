"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = /^\/(en|fr|ar)(\/|$)/.test(pathname)
    ? segments[1]
    : "en";
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
        404
      </p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight">
        Page not found
      </h1>
      <p className="text-sm sm:text-base text-ink-subtle max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
        you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button href={`/${lang}`}>Back to Home</Button>
        <Button href={`/${lang}/#contact`} variant="secondary">
          Contact the Studio
        </Button>
      </div>
    </main>
  );
}