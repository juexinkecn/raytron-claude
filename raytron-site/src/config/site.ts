export type Locale = 'en' | 'zh-CN';

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  domain: string;
  locale: Locale;
  hreflang: string;
  name: string;

  title: string;
  description: string;
  keywords: string[];

  company: {
    name: string;
    legalName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      region: string;
      postalCode: string;
      country: string;
    };
  };

  social: {
    linkedin: string;
    youtube: string;
    wechat: string;
  };

  navigation: NavItem[];
}

export const siteConfig: Record<Locale, SiteConfig> = {
  en: {
    domain: 'https://en.raytron.group',
    locale: 'en',
    hreflang: 'en',
    name: 'Raytron',
    title: 'Raytron - Advanced Metal Composite Materials Manufacturer',
    description:
      'Leading manufacturer of copper clad aluminum, copper clad steel, nickel clad copper, and specialty metal composite materials for cable, solar, battery, and automotive industries.',
    keywords: [
      'copper clad aluminum',
      'copper clad steel',
      'nickel clad copper',
      'silver clad copper',
      'CCA wire',
      'photovoltaic ribbon',
      'metal composite materials',
      'cable conductor',
      'battery materials',
      'solar materials'
    ],
    company: {
      name: 'Raytron Group',
      legalName: 'Raytron Advanced Materials Co., Ltd.',
      email: 'info@raytron.group',
      phone: '+86-186-5753-6277',
      address: {
        street: 'Raytron Industrial Park',
        city: 'Zhuji',
        region: 'Zhejiang',
        postalCode: '311811',
        country: 'China'
      }
    },
    social: {
      linkedin: 'https://linkedin.com/company/raytron',
      youtube: 'https://youtube.com/@raytron',
      wechat: 'raytron_official'
    },
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products/' },
      { name: 'Applications', href: '/applications/' },
      { name: 'Solutions', href: '/solutions/' },
      { name: 'Technology & Support', href: '/technology/' },
      { name: 'Resources', href: '/resources/' },
      { name: 'About Us', href: '/about/' },
      { name: 'Contact', href: '/contact/' }
    ]
  },

  'zh-CN': {
    domain: 'https://cn.raytron.group',
    locale: 'zh-CN',
    hreflang: 'zh-CN',
    name: 'Raytron',
    title: 'Raytron - 先进金属复合材料制造商',
    description:
      '领先的铜包铝、铜包钢、镍包铜及特种金属复合材料制造商，服务于线缆、光伏、电池和汽车行业。',
    keywords: [
      '铜包铝',
      '铜包钢',
      '镍包铜',
      '银包铜',
      '铜包铝线',
      '光伏焊带',
      '金属复合材料',
      '线缆导体',
      '电池材料',
      '光伏材料'
    ],
    company: {
      name: 'Raytron集团',
      legalName: 'Raytron先进材料有限公司',
      email: 'info@raytron.group',
      phone: '+86-186-5753-6277',
      address: {
        street: '枫桥锐创工业园',
        city: '诸暨',
        region: '浙江',
        postalCode: '311811',
        country: '中国'
      }
    },
    social: {
      linkedin: 'https://linkedin.com/company/raytron',
      youtube: 'https://youtube.com/@raytron',
      wechat: 'raytron_official'
    },
    navigation: [
      { name: '首页', href: '/' },
      { name: '产品', href: '/products/' },
      { name: '应用领域', href: '/applications/' },
      { name: '解决方案', href: '/solutions/' },
      { name: '技术与支持', href: '/technology/' },
      { name: '资源中心', href: '/resources/' },
      { name: '关于我们', href: '/about/' },
      { name: '联系我们', href: '/contact/' }
    ]
  }
};

export function getSiteConfig(locale: Locale = 'en'): SiteConfig {
  return siteConfig[locale];
}

export function getAbsoluteUrl(path: string, locale: Locale = 'en'): string {
  const config = getSiteConfig(locale);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${config.domain}${cleanPath}`;
}
