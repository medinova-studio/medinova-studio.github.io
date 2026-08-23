import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { DATE_LOCALES, Lang, translations } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/terms");
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = translations[l].legal;

  return (
    <main className="relative">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          {t.kicker}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.termsTitle}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-subtle sm:text-base">
          {t.lastUpdated}{" "}
          {new Date().toLocaleDateString(DATE_LOCALES[l], {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-8">
          {t.termsSections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-lg font-semibold text-ink">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle sm:text-base">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-hairline bg-surface-1 p-6">
          <h2 className="font-display text-sm font-semibold text-ink">
            {t.contactHeading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
            {t.contactTermsPrefix}{" "}
            <a
              href="mailto:contact@medinovastudio.com"
              className="text-ink underline transition-colors hover:text-primary"
            >
              contact@medinovastudio.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
