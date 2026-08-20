import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemapPath = join(__dirname, "..", "public", "sitemap-0.xml");

const SITE_URL = "https://www.medinovastudio.com";
const LOCALES = ["en", "fr", "ar"];

let xml = readFileSync(sitemapPath, "utf8");

xml = xml.replace(/<url>[\s\S]*?<\/url>/g, (urlBlock) => {
  const locMatch = urlBlock.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return urlBlock;
  const url = new URL(locMatch[1], SITE_URL);
  const segments = url.pathname.split("/").filter(Boolean);
  if (!segments.length || !LOCALES.includes(segments[0])) return urlBlock;

  const rest = segments.slice(1).join("/");
  const altUrl = (l) =>
    `${SITE_URL}/${l}${rest ? `/${rest}` : ""}`;

  const links = LOCALES.map(
    (l) =>
      `<xhtml:link rel="alternate" hreflang="${l}" href="${altUrl(l)}"/>`
  );
  links.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${altUrl("en")}"/>`
  );

  const withLinks = urlBlock.replace(
    /<changefreq>[\s\S]*?<\/priority>/,
    links.join("")
  );
  return withLinks;
});

xml = xml.replace(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"'
);

writeFileSync(sitemapPath, xml, "utf8");
console.log("✅ sitemap hreflang links injected");