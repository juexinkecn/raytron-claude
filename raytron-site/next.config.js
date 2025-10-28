/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['en.raytron.group', 'cn.raytron.group'],
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  swcMinify: true,
  
  // i18n configuration for dual domain setup
  i18n: {
    locales: ['en', 'zh-CN'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  
  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  
  // Redirects for proper domain handling
  async redirects() {
    return [];
  },
  
  // Environment variables
  env: {
    SITE_URL_EN: 'https://en.raytron.group',
    SITE_URL_CN: 'https://cn.raytron.group',
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;