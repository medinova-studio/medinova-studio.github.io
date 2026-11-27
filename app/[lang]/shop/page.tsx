import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { alternatesFor } from "@/lib/metadata";
import { translations, type Lang } from "@/lib/i18n";
import { activeShopProducts } from "@/lib/shop";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const l = lang as Lang;
  const t = translations[l].shop;

  return {
    metadataBase: new URL("https://www.medinovastudio.com"),
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: alternatesFor(l, "/shop"),
    openGraph: {
      type: "website",
      locale: l === "en" ? "en_US" : l === "fr" ? "fr_FR" : "ar_LY",
      url: `https://www.medinovastudio.com/${l}/shop`,
      siteName: "Medinova Studio",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}

export default async function ShopPage({ params }: PageProps) {
  const { lang } = await params;
  const l = lang as Lang;
  const t = translations[l].shop;
  const products = activeShopProducts();

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/15 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <span className="eyebrow mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-primary">
            {t.badge}
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-ink text-balance sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-subtle sm:text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          {products.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-hairline border-t-[3px] border-t-accent bg-surface-1 px-6 py-10 text-center sm:px-10 sm:py-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft">
                <Image
                  src="/images/logo.svg"
                  alt=""
                  width={44}
                  height={44}
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
                {t.emptyTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-subtle sm:text-base">
                {t.emptyDescription}
              </p>
              <Link
                href={`/${l}`}
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[11px] bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {l === "fr" ? "Accueil" : l === "ar" ? "الرئيسية" : "Home"}
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.productId}
                  href={`/${l}/shop/${product.slug}`}
                  className="group card-accent overflow-hidden rounded-2xl border border-hairline bg-surface-1 transition-colors hover:bg-surface-2"
                >
                  <div className="relative aspect-[4/3] bg-surface-2">
                    <Image
                      src={product.image}
                      alt={product.imageAlt[l]}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-lg font-bold text-ink group-hover:text-primary">
                      {product.name[l]}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-subtle">
                      {product.description[l]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
