"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type TestResult =
  | { kind: "success"; orderId: string }
  | { kind: "error"; message: string }
  | null;

const ERROR_MESSAGES: Record<string, string> = {
  invalid_lead_data: "تحقق من الاسم ورقم الهاتف والمدينة والكمية.",
  sheet_headers_mismatch:
    "عناوين الأعمدة لا تطابق القالب. تأكد أن العناوين موجودة في الصف الأول، كل عنوان في عمود منفصل، وأن التبويب اسمه Orders.",
  google_sheets_config_missing:
    "إعدادات Google Sheets غير مكتملة في Vercel.",
  google_sheets_write_failed:
    "تعذر الكتابة إلى Google Sheets. تحقق من صلاحية حساب الخدمة ومشاركة الجدول معه.",
};

export default function ShopConnectionTestPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<TestResult>(null);

  async function submitTest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const response = await fetch("/api/shop/test-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, city, quantity: Number(quantity) }),
      });
      const body = (await response.json()) as {
        orderId?: string;
        error?: string;
      };

      if (!response.ok) {
        setResult({
          kind: "error",
          message:
            ERROR_MESSAGES[body.error ?? ""] ??
            "فشل الاختبار. تحقق من إعدادات Vercel وحاول مرة أخرى.",
        });
        return;
      }

      setResult({
        kind: "success",
        orderId: body.orderId ?? "TEST",
      });
    } catch {
      setResult({
        kind: "error",
        message: "تعذر الوصول إلى خادم الموقع. حاول مرة أخرى.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <span className="eyebrow inline-flex items-center gap-2 rounded-pill border border-primary/20 bg-primary-soft px-3 py-1.5 text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          صفحة اختبار خاصة
        </span>

        <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
          اختبار اتصال Google Sheets
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-subtle">
          املأ النموذج كما لو كنت تطلب المنتج. سيتم حفظ بيانات الاختبار التي
          تدخلها في صف مميز داخل جدول الطلبات؛ استخدم بيانات تجريبية فقط.
        </p>

        <section className="mt-8 rounded-2xl border border-hairline border-t-[3px] border-t-primary bg-surface-1 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">منتج تجريبي</p>
              <h2 className="mt-1 font-display text-xl font-bold text-ink">
                Product 1
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                ليبيا · السعر التجريبي 0 د.ل · بيانات الاختبار موسومة بوضوح ويمكن
                حذف صفها بعد التحقق.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-tertiary">
                ستُسجل المدينة في عمود Address لأن القالب لا يحتوي عمودًا منفصلًا
                للمدينة.
              </p>
            </div>
          </div>

          <form onSubmit={submitTest} className="mt-7 space-y-4">
            <label
              htmlFor="test-name"
              className="block text-sm font-semibold text-ink"
            >
              الاسم الكامل
            </label>
            <input
              id="test-name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="min-h-11 w-full rounded-md border border-hairline bg-surface-1 px-3 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="مثال: سارة علي"
            />

            <label
              htmlFor="test-phone"
              className="block text-sm font-semibold text-ink"
            >
              رقم الهاتف
            </label>
            <input
              id="test-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              required
              maxLength={24}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="min-h-11 w-full rounded-md border border-hairline bg-surface-1 px-3 py-2.5 text-left text-sm text-ink placeholder:text-ink-tertiary focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="0911234567"
            />

            <label
              htmlFor="test-city"
              className="block text-sm font-semibold text-ink"
            >
              المدينة
            </label>
            <input
              id="test-city"
              type="text"
              autoComplete="address-level2"
              required
              minLength={2}
              maxLength={80}
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="min-h-11 w-full rounded-md border border-hairline bg-surface-1 px-3 py-2.5 text-sm text-ink placeholder:text-ink-tertiary focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="مثال: طرابلس"
            />

            <label
              htmlFor="test-quantity"
              className="block text-sm font-semibold text-ink"
            >
              الكمية
            </label>
            <input
              id="test-quantity"
              type="number"
              inputMode="numeric"
              min={1}
              max={99}
              step={1}
              required
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="min-h-11 w-full rounded-md border border-hairline bg-surface-1 px-3 py-2.5 text-sm text-ink focus:border-primary focus:ring-2 focus:ring-primary/20"
            />

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                  جارٍ اختبار الاتصال...
                </>
              ) : (
                "اختبار الاتصال وإضافة صف تجريبي"
              )}
            </button>
          </form>

          {result?.kind === "success" && (
            <div
              role="status"
              className="mt-5 flex items-start gap-3 rounded-md border border-success/30 bg-success/5 p-4 text-sm text-ink"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-success"
                aria-hidden="true"
              />
              <p>
                نجح الاتصال وأضيف صف الاختبار. رقم الطلب:{" "}
                <span className="font-mono font-semibold" dir="ltr">
                  {result.orderId}
                </span>
                . احذف الصف الموسوم TEST ROW بعد التحقق.
              </p>
            </div>
          )}

          {result?.kind === "error" && (
            <p
              role="alert"
              className="mt-5 rounded-md border border-danger/30 bg-danger/5 p-4 text-sm leading-relaxed text-danger"
            >
              {result.message}
            </p>
          )}
        </section>

        <p className="mt-6 text-center text-xs text-ink-tertiary">
          هذه صفحة فحص مؤقتة وليست صفحة طلب فعلية.
        </p>
      </div>
    </main>
  );
}
