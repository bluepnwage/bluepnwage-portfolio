/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://bluepnwage-portfolio.vercel.app",
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
