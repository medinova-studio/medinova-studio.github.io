import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata(lang as Lang, "/privacy");
}

const sections = [
  {
    title: "Information We Collect",
    body: "We only collect the personal information you voluntarily provide through our contact forms (name, email, company, project details) and through direct communications such as email or WhatsApp. We also collect anonymous usage and performance data to understand how visitors use our site. We never sell personal data.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used solely to respond to inquiries, prepare quotes, deliver contracted services (game development, growth agency, and academy programs), and send progress updates. We may contact you by email or WhatsApp regarding your project or enrollment.",
  },
  {
    title: "Analytics & Advertising",
    body: "We use Google Analytics 4 and Vercel Analytics to measure traffic, engagement, and website performance (Core Web Vitals via Vercel Speed Insights). We use the Meta Pixel (Facebook/Meta) to measure the performance of our Facebook advertising campaigns and optimize ad delivery. These tools collect aggregated, anonymized data such as pages visited, device type, approximate location, and conversion actions (e.g., clicking a WhatsApp link or submitting a contact form). To support our advertising and analytics, these providers may set cookies on your device. You can opt out of Google Analytics via the Google Analytics opt-out browser add-on and control advertising cookies through your browser and platform settings.",
  },
  {
    title: "Data Storage & Third Parties",
    body: "Form submissions are transmitted via Resend, our email delivery provider, to contact@medinovastudio.com. Analytics data is processed by Google LLC and Vercel Inc.; Facebook ads data is processed by Meta Platforms. WhatsApp conversations are handled by Meta's WhatsApp platform. We retain correspondence only as long as necessary to deliver our services or as required by Moroccan law.",
  },
  {
    title: "Local Storage & Preferences",
    body: "We use your browser's local storage to remember your preferred language (medinova-lang). This setting never leaves your device and can be cleared at any time through your browser settings.",
  },
  {
    title: "Children's Privacy",
    body: "Medinova Academy is designed for learners of all ages, including children. Parent or guardian consent is required before a child's data is submitted. We only collect the minimum data needed to manage enrollment and communicate with parents.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by emailing contact@medinovastudio.com. We respond to all requests within 30 days.",
  },
];

export default async function PrivacyPage() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
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
            For any privacy questions, reach us at{" "}
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