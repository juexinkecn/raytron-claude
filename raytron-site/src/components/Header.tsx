'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getSiteConfig, getAbsoluteUrl } from '@/config/site';

interface NavItem {
  name: string;
  href: string;
}
interface HeaderProps {
  locale: 'en' | 'zh-CN';
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const config = getSiteConfig(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productDropdown = locale === 'en' ? [
    { name: 'Copper Products', href: '/products/copper/' },
    { name: 'Aluminum Products', href: '/products/aluminum/' },
    { name: 'Copper Clad Aluminum', href: '/products/copper-clad-aluminum/' },
    { name: 'Copper Clad Steel', href: '/products/copper-clad-steel/' },
    { name: 'Nickel Clad Copper', href: '/products/nickel-clad-copper/' },
    { name: 'All Products', href: '/products/' },
  ] : [
    { name: '铜产品', href: '/products/copper/' },
    { name: '铝产品', href: '/products/aluminum/' },
    { name: '铜包铝', href: '/products/copper-clad-aluminum/' },
    { name: '铜包钢', href: '/products/copper-clad-steel/' },
    { name: '镍包铜', href: '/products/nickel-clad-copper/' },
    { name: '所有产品', href: '/products/' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href={getAbsoluteUrl('/', locale)}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">
              {config.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {config.navigation.map((item: NavItem) => {
              if (item.name === 'Products' || item.name === '产品') {
                return (
                  <div key={item.name} className="relative group">
                    <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      <div className="py-2">
                        {productDropdown.map((product) => (
                          <Link
                            key={product.href}
                            href={getAbsoluteUrl(product.href, locale)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={getAbsoluteUrl(item.href, locale)}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={getAbsoluteUrl('/', locale === 'en' ? 'zh-CN' : 'en')}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {locale === 'en' ? '中文' : 'English'}
            </Link>
            
            <Link
              href={getAbsoluteUrl('/contact/', locale)}
              className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-sm hover:shadow-glow"
            >
              {locale === 'en' ? 'Get a Quote' : '获取报价'}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {config.navigation.map((item) => (
              <Link
                key={item.name}
                href={getAbsoluteUrl(item.href, locale)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Link
                href={getAbsoluteUrl('/', locale === 'en' ? 'zh-CN' : 'en')}
                className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {locale === 'en' ? '中文' : 'English'}
              </Link>
              <Link
                href={getAbsoluteUrl('/contact/', locale)}
                className="block px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold text-center hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === 'en' ? 'Get a Quote' : '获取报价'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
