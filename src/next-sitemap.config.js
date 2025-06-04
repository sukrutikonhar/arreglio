/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://arreglio.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: "https://arreglio.com",
      hreflang: "en",
    },
    {
      href: "https://arreglio.fr",
      hreflang: "fr",
    },
    {
      href: "https://arreglio.es",
      hreflang: "es",
    },
    {
      href: "https://arreglio.se",
      hreflang: "sv",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/admin"],
      },
    ],
  },
};
