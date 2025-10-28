// src/lib/structuredData.ts (改进版)
import { getSiteUrl } from '@/components/AbsoluteLink';

function getConfig() {
  const siteUrl = getSiteUrl();
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';
  return { siteUrl, locale };
}

export function generateOrganizationSchema() {
  const { siteUrl, locale } = getConfig();
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Raytron Advanced Materials Co., Ltd.",
    "alternateName": locale === 'zh-CN' ? "瑞创新材料有限公司" : "Raytron",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "description": locale === 'zh-CN' 
      ? "Raytron是专业的铜包覆材料制造商，提供铜包铝、铜包钢、镍包铜等高性能导体材料。"
      : "Raytron is a leading manufacturer of copper clad materials, offering CCA, CCS, NCC and other high-performance conductor materials.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-xxx-xxxx",
      "contactType": "sales",
      "email": "sales@raytron.group",
      "availableLanguage": ["en", "zh-CN"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN",
      "addressLocality": locale === 'zh-CN' ? "深圳市" : "Shenzhen"
    },
    "sameAs": [
      "https://www.linkedin.com/company/raytron",
      "https://www.youtube.com/@raytron"
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  items.forEach(item => {
    if (!item.url.startsWith('http')) {
      console.warn(`⚠️ Breadcrumb URL should be absolute: ${item.url}`);
    }
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string[];
  sku?: string;
  brand?: string;
  category?: string;
  material?: string;
  url: string;
}

export function generateProductSchema(props: ProductSchemaProps) {
  const { name, description, image, sku, brand = "Raytron", category, material, url } = props;

  if (!name || !description || !url) {
    throw new Error('Product schema requires name, description, and url');
  }

  if (!url.startsWith('http')) {
    throw new Error(`Product URL must be absolute: ${url}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Raytron Advanced Materials Co., Ltd."
    },
    "sku": sku,
    "category": category,
    "material": material,
    "url": url,
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "url": url
    }
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) {
    console.warn('⚠️ FAQ schema called with empty array');
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const { siteUrl } = getConfig();
  const { headline, description, image, datePublished, dateModified, author = "Raytron Team", url } = props;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Raytron Advanced Materials Co., Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`
      }
    },
    "url": url
  };
}

export function generateWebSiteSchema() {
  const { siteUrl } = getConfig();
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Raytron",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function combineStructuredData(...schemas: any[]) {
  const validSchemas = schemas.filter(schema => schema !== null);
  
  if (validSchemas.length === 0) return null;
  if (validSchemas.length === 1) return validSchemas[0];
  
  return {
    "@context": "https://schema.org",
    "@graph": validSchemas
  };
}
