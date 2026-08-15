import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of Medinova Studio's website, game development services, growth agency, and Medinova Academy.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medinovastudio.com/terms",
    siteName: "Medinova Studio",
    title: "Terms of Service — Medinova Studio",
    description:
      "Terms governing the use of Medinova Studio's website, game development services, growth agency, and Medinova Academy.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Medinova Studio — Moroccan Independent Game Studio & Interactive Tech Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing this website, engaging Medinova Studio for services, or enrolling in Medinova Academy, you agree to these Terms of Service. If you do not agree, please discontinue use of our services.",
  },
  {
    title: "Our Services",
    body: "Medinova Studio operates three divisions: custom game development and interactive technology, a B2B growth agency (websites, paid media, and AI automation), and Medinova Academy (online coding and game development courses). Each engagement is governed by its own written agreement or enrollment terms.",
  },
  {
    title: "Pricing, Billing & Taxes",
    body: "All published prices are exclusive of tax and are indicated Hors Taxes (HT). Value Added Tax (TVA) of 20% applies in accordance with Moroccan regulations in force. Setup fees are invoiced at engagement start; monthly retainers require an initial 3-month commitment. Ad spend budgets and third-party API fees are the client's responsibility.",
  },
  {
    title: "Intellectual Property",
    body: "Upon full payment, clients receive the rights to deliverables specified in their agreement. Medinova Studio retains rights to our underlying tools, frameworks, and pre-existing assets. Students retain ownership of the projects they build in Medinova Academy.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse our website, attempt unauthorized access, or use our services for unlawful purposes. Academy learners must follow our community guidelines and maintain a respectful, moderated environment.",
  },
  {
    title: "Limitation of Liability",
    body: "Medinova Studio's liability is limited to the amounts paid for the specific service giving rise to the claim. We are not liable for indirect damages, lost profits, or interruptions caused by third-party platforms (e.g., ad networks, WhatsApp, hosting providers).",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Kingdom of Morocco. Any dispute shall be subject to the exclusive jurisdiction of the courts of Kenitra, Morocco.",
  },
];

export default function TermsPage() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-subtle sm:text-base">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
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
            Contact Us
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
            Questions about these terms? Email us at{" "}
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