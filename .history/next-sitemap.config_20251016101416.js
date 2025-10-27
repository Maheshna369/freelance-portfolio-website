/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://maphy.vercel.app', // your live domain
  generateRobotsTxt: true,             // generate robots.txt
  sitemapSize: 5000,                   // max URLs per sitemap file
  changefreq: 'weekly',
  priority: 0.7,
};
