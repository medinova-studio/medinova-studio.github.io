/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://medinovastudio.com",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/opengraph-image", "/agency/opengraph-image", "/academy/opengraph-image"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
