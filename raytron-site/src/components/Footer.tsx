import Link from 'next/link';
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { getSiteConfig, getAbsoluteUrl } from '@/config/site';

interface FooterProps {
  locale: 'en' | 'zh-CN';
}

export default function Footer({ locale }: FooterProps) {
  const config = getSiteConfig(locale);
  const currentYear = new Date().getFullYear();

  const footerLinks = locale === 'en' ? {
    products: {
      title: 'Products',
      links: [
        { name: 'Copper Products', href: '/products/copper/' },
        { name: 'Aluminum Products', href: '/products/aluminum/' },
        { name: 'Copper Clad Aluminum', href: '/products/copper-clad-aluminum/' },
        { name: 'Nickel Clad Copper', href: '/products/nickel-clad-copper/' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about/' },
        { name: 'Technology', href: '/technology/' },
        { name: 'Resources', href: '/resources/' },
        { name: 'Contact', href: '/contact/' },
      ],
    },
    applications: {
      title: 'Applications',
      links: [
        { name: 'Cable Industry', href: '/applications/cable/' },
        { name: 'Solar Energy', href: '/applications/solar/' },
        { name: 'Battery & Energy Storage', href: '/applications/battery/' },
        { name: 'Automotive', href: '/applications/automotive/' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy/' },
        { name: 'Terms of Service', href: '/terms/' },
        { name: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  } : {
    products: {
      title: '产品',
      links: [
        { name: '铜产品', href: '/products/copper/' },
        { name: '铝产品', href: '/products/aluminum/' },
        { name: '铜包铝', href: '/products/copper-clad-aluminum/' },
        { name: '镍包铜', href: '/products/nickel-clad-copper/' },
      ],
    },
    company: {
      title: '公司',
      links: [
        { name: '关于我们', href: '/about/' },
        { name: '技术', href: '/technology/' },
        { name: '资源', href: '/resources/' },
        { name: '联系我们', href: '/contact/' },
      ],
    },
    applications: {
      title: '应用领域',
      links: [
        { name: '线缆行业', href: '/applications/cable/' },
        { name: '光伏能源', href: '/applications/solar/' },
        { name: '电池储能', href: '/applications/battery/' },
        { name: '汽车', href: '/applications/automotive/' },
      ],
    },
    legal: {
      title: '法律',
      links: [
        { name: '隐私政策', href: '/privacy/' },
        { name: '服务条款', href: '/terms/' },
        { name: '网站地图', href: '/sitemap.xml' },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href={getAbsoluteUrl('/', locale)}
              className="inline-flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">
                {config.name}
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {locale === 'en'
                ? 'Leading manufacturer of advanced metal composite materials, serving industries worldwide with innovative conductor solutions.'
                : '先进金属复合材料领先制造商，为全球行业提供创新的导体解决方案。'}
            </p>

            <div className="space-y-3">
              
                href={`mailto:${config.company.email}`}
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                {config.company.email}
              </a>
              
                href={`tel:${config.company.phone}`}
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                {config.company.phone}
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>
                  {config.company.address.street}, {config.company.address.city},{' '}
                  {config.company.address.region}, {config.company.address.country}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getAbsoluteUrl(link.href, locale)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {footerLinks.applications.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.applications.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getAbsoluteUrl(link.href, locale)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getAbsoluteUrl(link.href, locale)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getAbsoluteUrl(link.href, locale)}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {config.company.legalName}.{' '}
              {locale === 'en' ? 'All rights reserved.' : '保留所有权利。'}
            </p>

            <div className="flex items-center space-x-4">
              
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
                href={config.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all cursor-pointer group relative">
                <span className="text-xs font-semibold">微</span>
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white px-3 py-2 rounded text-xs whitespace-nowrap">
                  WeChat: {config.social.wechat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}