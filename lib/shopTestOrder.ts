import { z } from "zod";

export const ORDER_HEADERS = [
  "Order Date",
  "Order ID",
  "Country",
  "Full Name",
  "Phone",
  "Address",
  "Product Url",
  "Sku",
  "Product name",
  "Quantity",
  "Total price",
  "Currency",
  "Notes",
] as const;

const normalizeText = (value: string) =>
  value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();

const normalizePhone = (value: string) =>
  value
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[\s()-]/g, "");

export const testLeadSchema = z.object({
  name: z
    .string()
    .transform(normalizeText)
    .pipe(z.string().min(2).max(100)),
  phone: z
    .string()
    .trim()
    .max(24)
    .transform(normalizePhone)
    .pipe(z.string().regex(/^\+?\d{7,15}$/)),
  city: z
    .string()
    .transform(normalizeText)
    .pipe(z.string().min(2).max(80)),
  quantity: z.number().int().min(1).max(99),
});

export type TestLead = z.infer<typeof testLeadSchema>;

export function createTestOrderRow(
  orderId: string,
  productUrl: string,
  orderDate: Date,
  lead: TestLead
): string[] {
  return [
    orderDate.toISOString(),
    orderId,
    "Libya",
    lead.name,
    lead.phone,
    `Test city: ${lead.city}`,
    productUrl,
    "TEST-PRODUCT-001",
    "Product 1 (TEST ONLY)",
    String(lead.quantity),
    "0",
    "LYD",
    "TEST ROW - safe to delete after connection test",
  ];
}

export function quoteSheetRange(tabName: string, range: string): string {
  return `'${tabName.replace(/'/g, "''")}'!${range}`;
}

