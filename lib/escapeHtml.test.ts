import { describe, expect, it } from "vitest";
import { escapeHtml } from "@/lib/escapeHtml";

describe("escapeHtml", () => {
  it("escapes HTML-sensitive characters", () => {
    expect(escapeHtml(`<script>alert("xss")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
    );
  });

  it("escapes ampersands and apostrophes", () => {
    expect(escapeHtml(`Tom & Jerry's <Game>`)).toBe(
      "Tom &amp; Jerry&#39;s &lt;Game&gt;"
    );
  });

  it("leaves plain text untouched", () => {
    expect(escapeHtml("Hello, Medinova!")).toBe("Hello, Medinova!");
  });

  it("handles empty strings", () => {
    expect(escapeHtml("")).toBe("");
  });
});
