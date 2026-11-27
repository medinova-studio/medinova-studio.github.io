import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Truck } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import type { ShopProduct } from "@/lib/shop";

type Props = {
  lang: Lang;
  product: ShopProduct;
};

const PRICE_LOCALES: Record<Lang, string> = {
  en: "en-LY",
  fr: "fr-LY",
  ar: "ar-LY",
};

export default function ProductPageTemplate({ lang, product }: Props) {
  const t = translations[lang].shop;
  const price = new Intl.NumberFormat(PRICE_LOCALES[lang], {
    style: "currency",
    currency: product.market.currency,
  }).format(product.market.price);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          href={`/${lang}/shop`}
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          {t.backToShop}
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-hairline bg-surface-1">
            <Image
              src={product.image}
              alt={product.imageAlt[lang]}
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="eyebrow mb-4 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-primary">
              {t.badge}
            </span>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              {product.name[lang]}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-subtle">
              {product.description[lang]}
            </p>

            <div className="mt-7 rounded-2xl border border-hairline border-t-[3px] border-t-primary bg-surface-1 p-5 sm:p-6">
              <p className="text-sm font-medium text-ink-subtle">{t.priceLabel}</p>
              <p className="mt-1 font-display text-3xl font-bold text-ink">{price}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {t.marketLabel}: {product.market.countryName[lang]}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2">
                  <Truck className="h-4 w-4 text-primary" aria-hidden="true" />
                  {t.shippingIncluded}
                </span>
              </div>
              <p className="mt-5 rounded-lg border border-hairline bg-surface-2 px-4 py-3 text-sm text-ink-subtle">
                {t.orderFormUnavailable}
              </p>
            </div>

            <p className="mt-4 text-xs text-ink-tertiary">
              {t.productDetails}: {product.productId} · SKU {product.sku}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
