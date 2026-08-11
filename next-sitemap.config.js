/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://medinova-studio.github.io",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
