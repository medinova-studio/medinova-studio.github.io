/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.medinovastudio.com",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/en/opengraph-image",
    "/fr/opengraph-image",
    "/ar/opengraph-image",
    "/en/agency/opengraph-image",
    "/fr/agency/opengraph-image",
    "/ar/agency/opengraph-image",
    "/en/academy/opengraph-image",
    "/fr/academy/opengraph-image",
    "/ar/academy/opengraph-image",
    "/en/game-development/opengraph-image",
    "/fr/game-development/opengraph-image",
    "/ar/game-development/opengraph-image",
    "/en/who-we-are/opengraph-image",
    "/fr/who-we-are/opengraph-image",
    "/ar/who-we-are/opengraph-image",
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};