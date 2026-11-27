import type { Lang } from "@/lib/i18n";

export type ShopMarket = {
  countryCode: string;
  countryName: Record<Lang, string>;
  currency: string;
  price: number;
  shippingIncluded: true;
};

export const SHOP_LAUNCH_MARKET = {
  countryCode: "LY",
  countryName: {
    en: "Libya",
    fr: "Libye",
    ar: "ليبيا",
  },
  currency: "LYD",
  shippingIncluded: true,
} as const;

export type ShopProduct = {
  productId: string;
  sku: string;
  slug: string;
  status: "draft" | "active";
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  image: string;
  imageAlt: Record<Lang, string>;
  market: ShopMarket;
};

export const SHOP_PRODUCTS: ShopProduct[] = [];

export function activeShopProducts(): ShopProduct[] {
  return SHOP_PRODUCTS.filter((product) => product.status === "active");
}

export function shopProductBySlug(slug: string): ShopProduct | undefined {
  return activeShopProducts().find((product) => product.slug === slug);
}
