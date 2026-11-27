import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageTemplate from "@/components/shop/ProductPageTemplate";
import { alternatesFor } from "@/lib/metadata";
import { LANGS, translations, type Lang } from "@/lib/i18n";
import { activeShopProducts, shopProductBySlug } from "@/lib/shop";

type PageProps = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    activeShopProducts().map((product) => ({ lang, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = shopProductBySlug(slug);
  if (!product) notFound();

  const l = lang as Lang;
  const title = `${product.name[l]} | Medinova Shop`;
  const description = product.description[l];

  return {
    metadataBase: new URL("https://www.medinovastudio.com"),
    title: { absolute: title },
    description,
    alternates: alternatesFor(l, `/shop/${slug}`),
    openGraph: {
      type: "website",
      locale: l === "en" ? "en_US" : l === "fr" ? "fr_FR" : "ar_LY",
      url: `https://www.medinovastudio.com/${l}/shop/${slug}`,
      siteName: "Medinova Studio",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const product = shopProductBySlug(slug);
  if (!product) notFound();

  const l = lang as Lang;
  if (!translations[l]) notFound();

  return <ProductPageTemplate lang={l} product={product} />;
}
