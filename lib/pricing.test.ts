import { describe, expect, it } from "vitest";
import {
  academyLeadWhatsAppUrl,
  academyPlanWhatsAppUrl,
  academyTrialWhatsAppUrl,
} from "@/lib/academy";
import { translations, LANGS } from "@/lib/i18n";
import { COURSE_SLUGS } from "@/lib/courses";
import {
  fill,
  formatPrice,
  formatSessionLength,
  PER_SESSION_MONTHLY,
  PER_SESSION_TERM,
  PRICING,
  TERM_LIST_COST,
  TERM_SAVING,
  TERM_SESSIONS,
} from "@/lib/pricing";

const decode = (url: string) => decodeURIComponent(url.split("?text=")[1]);

describe("pricing constants", () => {
  it("derives the advertised saving from the two plan prices", () => {
    expect(TERM_LIST_COST).toBe(900);
    expect(TERM_SAVING).toBe(100);
    expect(TERM_SESSIONS).toBe(12);
  });

  it("quotes whole dirhams per session", () => {
    expect(PER_SESSION_MONTHLY).toBe(75);
    // 800 / 12 is 66.67, which must not surface as a fractional dirham.
    expect(PER_SESSION_TERM).toBe(67);
  });

  it("never reports the term plan as costing more than month to month", () => {
    expect(PRICING.term).toBeLessThan(TERM_LIST_COST);
  });
});

describe("formatPrice", () => {
  it("uses the ISO code in English and the local short form in French", () => {
    expect(formatPrice(300, "en")).toBe("300 MAD");
    expect(formatPrice(300, "fr")).toBe("300 DH");
  });

  it("uses the Arabic currency name with Western digits", () => {
    // Arabic-script Morocco writes Arabic text with 0-9, not Eastern
    // Arabic-Indic numerals, so the digits must not be transliterated.
    expect(formatPrice(300, "ar")).toBe("300 درهم");
  });

  it("keeps fractional amounts only when they are genuinely fractional", () => {
    expect(formatPrice(66.5, "en")).toBe("66.50 MAD");
  });
});

describe("formatSessionLength", () => {
  it("renders 90 minutes per locale reading convention", () => {
    expect(formatSessionLength("en")).toBe("1:30");
    expect(formatSessionLength("fr")).toBe("1h30");
    expect(formatSessionLength("ar")).toBe("1:30");
  });
});

describe("fill", () => {
  it("substitutes known tokens and leaves unknown ones intact", () => {
    expect(fill("{a} and {b}", { a: "x" })).toBe("x and {b}");
  });
});

describe("whatsapp urls", () => {
  it("routes every plan and course CTA to the academy number", () => {
    for (const lang of LANGS) {
      for (const slug of COURSE_SLUGS) {
        const name = translations[lang].academy.courses.items[slug].name;
        for (const plan of ["monthly", "term"] as const) {
          const url = academyPlanWhatsAppUrl(lang, plan, name);

          expect(url.startsWith("https://wa.me/212703702976?text=")).toBe(true);
          const message = decode(url);
          expect(message).toContain(name);
          // The advertised price must match the pricing cards exactly.
          expect(message).toContain(
            formatPrice(plan === "term" ? PRICING.term : PRICING.monthly, lang)
          );
          expect(message).not.toContain("{");
        }
      }
    }
  });

  describe("Academy recommendation enquiries", () => {
    it("prefills the parent name and learner age in each locale", () => {
      for (const lang of LANGS) {
        const url = academyLeadWhatsAppUrl(lang, "Samira Test", "9");
        const message = decode(url);

        expect(url.startsWith("https://wa.me/212703702976?text=")).toBe(true);
        expect(message).toContain("Samira Test");
        expect(message).toContain("9");
        expect(message).not.toContain("{name}");
        expect(message).not.toContain("{age}");
      }
    });
  });

  it("never names a course when none is in scope", () => {
    for (const lang of LANGS) {
      for (const plan of ["monthly", "term"] as const) {
        const message = decode(academyPlanWhatsAppUrl(lang, plan));

        expect(message).not.toContain("Explore Our Courses");
        expect(message).not.toContain("Découvrir Nos Cours");
        expect(message).not.toContain("{course}");
        expect(message).toContain(
          formatPrice(plan === "term" ? PRICING.term : PRICING.monthly, lang)
        );
      }
    }
  });

  it("includes the course name in trial enquiries", () => {
    const message = decode(
      academyTrialWhatsAppUrl("fr", translations.fr.academy.courses.items.python.name)
    );

    expect(message).toContain(
      translations.fr.academy.courses.items.python.name
    );
    expect(message).not.toContain("{course}");
  });

  it("falls back to a general enquiry when no course is known", () => {
    expect(decode(academyTrialWhatsAppUrl("en"))).toBe(
      translations.en.academy.whatsapp.message
    );
  });
});

describe("pricing translations", () => {
  it("exposes the same price to every locale", () => {
    for (const lang of LANGS) {
      const { pricing } = translations[lang].academy;
      expect(pricing.ctaMonthly).toBeTruthy();
      expect(pricing.ctaTerm).toBeTruthy();
      expect(pricing.includes.length).toBeGreaterThan(0);
      expect(pricing.academicYearNote).toBeTruthy();
      expect(pricing.ctaMonthlyLead).toBeTruthy();
      expect(pricing.ctaTermLead).toBeTruthy();
      expect(translations[lang].academy.leadForm.whatsappMessage).toBeTruthy();
    }
  });

  it("uses no Eastern Arabic-Indic digits, which Morocco does not write", () => {
    for (const lang of LANGS) {
      const { pricing } = translations[lang].academy;
      const text = [
        pricing.title,
        pricing.subtitle,
        pricing.saveBadge,
        pricing.monthlySessions,
        pricing.termSessions,
        ...pricing.includes,
        ...translations[lang].academy.faq.items.flatMap((item) => [
          item.q,
          item.a,
        ]),
      ].join(" ");

      expect(text).not.toMatch(/[٠-٩]/u);
    }
  });

  it("leaves no unfilled template token in any locale", () => {
    for (const lang of LANGS) {
      const { pricing } = translations[lang].academy;
      const templates = [
        pricing.title,
        pricing.subtitle,
        pricing.saveBadge,
        pricing.monthlySessions,
        pricing.termSessions,
        ...pricing.includes,
      ];

      for (const template of templates) {
        expect(template).not.toContain("undefined");
      }
    }
  });

  it("states the price in every locale's pricing FAQ", () => {
    for (const lang of LANGS) {
      const pricingFaq = translations[lang].academy.faq.items.find((item) =>
        item.q.toLowerCase().includes(
          lang === "fr" ? "combien" : lang === "ar" ? "كم" : "how much"
        )
      );

      expect(pricingFaq).toBeDefined();
      expect(pricingFaq?.a).toContain(formatPrice(PRICING.monthly, lang));
      expect(pricingFaq?.a).toContain(formatPrice(PRICING.term, lang));
    }
  });
});

describe("course catalog coverage", () => {
  it("describes every slug in every locale so cards cannot mismatch", () => {
    for (const lang of LANGS) {
      const items = translations[lang].academy.courses.items;
      expect(Object.keys(items).sort()).toEqual([...COURSE_SLUGS].sort());
    }
  });
});