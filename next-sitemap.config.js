/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://agiscarty.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // optional
  robotsTxtOptions: {
    robotsTxtOptions: {
      policies: [{ userAgent: "*", allow: "/" }]
    }
  }
};

module.exports = config;
