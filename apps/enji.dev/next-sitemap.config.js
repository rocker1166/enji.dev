/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.enji.dev',
  priority: 0.6,
  changefreq: 'monthly',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const defaultValue = (priority, changefreq) => ({
      loc: path,
      changefreq: changefreq || config.changefreq,
      priority: priority || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    });

    if (path === '/') {
      return defaultValue(1.0, 'weekly');
    }

    if (path === '/blog') {
      return defaultValue(0.9, 'weekly');
    }

    if (path === '/projects') {
      return defaultValue(0.9, 'weekly');
    }

    if (path === '/today-i-learned') {
      return defaultValue(0.9, 'weekly');
    }

    if (path.indexOf('/work') === 0) {
      return defaultValue(0.8, 'monthly');
    }

    return defaultValue();
  },
};
