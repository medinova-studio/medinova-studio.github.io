/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://medinovastudio.com",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
