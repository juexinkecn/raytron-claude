import { getSiteConfig, getAbsoluteUrl } from '@/config/site';
import type { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  locale: 'en' | 'zh-CN';
  alternateLocale?: {
    locale: 'en' | 'zh-CN';
    url: string;
  };
}

export function generateMetadata(props: SEOProps): Metadata {
  const config = getSiteConfig(props.locale);
  const canonicalUrl = props.canonical || config.domain;
  
  const alternateLocale = props.locale === 'en' ? 'zh-CN' : 'en';
  const alternateDomain = getSiteConfig(alternateLocale).domain;
  
  return {
    title: props.title,
    description: props.description,
    keywords: props.keywords || config.keywords,
    
    openGraph: {
      title: props.title,
      description: props.description,
      url: canonicalUrl,
      siteName: config.company.name,
      locale: props.locale,
      type: 'website',
      images: props.ogImage ? [
        {
          url: props.ogImage,
          width: 1200,
          height: 630,
          alt: props.title,
        }
      ] : undefined,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: props.ogImage ? [props.ogImage] : undefined,
    },
    
    robots: props.noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [props.locale]: canonicalUrl,
        [alternateLocale]: props.alternateLocale?.url || alternateDomain,
      },
    },
    
    authors: [{ name: config.company.name }],
    creator: config.company.name,
    publisher: config.company.name,
  };
}

export function generateOrganizationSchema(locale: 'en' | 'zh-CN' = 'en') {
  const config = getSiteConfig(locale);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.company.legalName,
    alternateName: config.company.name,
    url: config.domain,
    logo: `${config.domain}/images/logo.png`,
    description: config.description,
    email: config.company.email,
    telephone: config.company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.company.address.street,
      addressLocality: config.company.address.city,
      addressRegion: config.company.address.region,
      postalCode: config.company.address.postalCode,
      addressCountry: config.company.address.country,
    },
    sameAs: [
      config.social.linkedin,
      config.social.youtube,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.company.phone,
      contactType: 'Customer Service',
      email: config.company.email,
      availableLanguage: ['en', 'zh-CN'],
    },
  };
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  url: string;
  locale: 'en' | 'zh-CN';
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export function generateProductSchema(props: ProductSchemaProps) {
  const config = getSiteConfig(props.locale);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    image: props.image,
    sku: props.sku,
    brand: {
      '@type': 'Brand',
      name: props.brand || config.company.name,
    },
    url: props.url,
    manufacturer: {
      '@type': 'Organization',
      name: config.company.legalName,
    },
    ...(props.offers && {
      offers: {
        '@type': 'Offer',
        price: props.offers.price,
        priceCurrency: props.offers.priceCurrency || 'USD',
        availability: props.offers.availability || 'https://schema.org/InStock',
      },
    }),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  locale: 'en' | 'zh-CN' = 'en'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}