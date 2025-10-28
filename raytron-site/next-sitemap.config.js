// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || 'https://en.raytron.group';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    return {
      loc: `${siteUrl}${path}`,
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
      lastmod: new Date().toISOString(),
      alternateRefs: getAlternateRefs(path),
    };
  },
};

function getChangeFreq(path) {
  if (path === '/') return 'daily';
  if (path.startsWith('/products/')) return 'weekly';
  if (path.startsWith('/resources/')) return 'weekly';
  if (path.startsWith('/about/')) return 'monthly';
  return 'monthly';
}

function getPriority(path) {
  if (path === '/') return 1.0;
  if (path.startsWith('/products/')) return 0.9;
  if (path.startsWith('/applications/')) return 0.8;
  if (path === '/contact/') return 0.9;
  if (path.startsWith('/resources/')) return 0.7;
  return 0.6;
}

function getAlternateRefs(path) {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';
  
  return [
    {
      href: `https://en.raytron.group${path}`,
      hreflang: 'en',
    },
    {
      href: `https://cn.raytron.group${path}`,
      hreflang: 'zh-CN',
    },
    {
      href: `https://en.raytron.group${path}`,
      hreflang: 'x-default',
    },
  ];
}
