import { describe, expect, it } from "vitest";
import {
  createTestOrderRow,
  ORDER_HEADERS,
  quoteSheetRange,
  testLeadSchema,
} from "@/lib/shopTestOrder";

describe("shop connection test order", () => {
  it("validates and stores the submitted lead fields in a labeled test row", () => {
    const lead = testLeadSchema.parse({
      name: "  سارة علي ",
      phone: "091-123-4567",
      city: "طرابلس",
      quantity: 3,
    });
    const row = createTestOrderRow(
      "TEST-123",
      "https://example.test/shop/test",
      new Date("2026-01-02T03:04:05.000Z"),
      lead
    );

    expect(row).toHaveLength(ORDER_HEADERS.length);
    expect(row[1]).toBe("TEST-123");
    expect(row[3]).toBe("سارة علي");
    expect(row[4]).toBe("0911234567");
    expect(row[5]).toBe("Test city: طرابلس");
    expect(row[7]).toBe("TEST-PRODUCT-001");
    expect(row[9]).toBe("3");
    expect(row[10]).toBe("0");
    expect(row[12]).toContain("TEST ROW");
  });

  it("accepts Arabic-Indic phone digits and rejects invalid lead data", () => {
    expect(
      testLeadSchema.parse({
        name: "سارة",
        phone: "٠٩١١٢٣٤٥٦٧",
        city: "طرابلس",
        quantity: 1,
      }).phone
    ).toBe("0911234567");

    expect(
      testLeadSchema.safeParse({
        name: "س",
        phone: "abc",
        city: "",
        quantity: 0,
      }).success
    ).toBe(false);
  });

  it("quotes worksheet names safely in A1 ranges", () => {
    expect(quoteSheetRange("Orders", "A1:M1")).toBe("'Orders'!A1:M1");
    expect(quoteSheetRange("Customer's Orders", "A:M")).toBe(
      "'Customer''s Orders'!A:M"
    );
  });

});
