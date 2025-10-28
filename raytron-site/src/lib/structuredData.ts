// src/lib/structuredData.ts

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';
const LOCALE = process.env.NEXT_PUBLIC_LOCALE || 'en';

// Organization Schema - 公司信息
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Raytron Advanced Materials Co., Ltd.",
    "alternateName": LOCALE === 'zh-CN' ? "瑞创新材料有限公司" : "Raytron",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.png`,
    "description": LOCALE === 'zh-CN' 
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
      "addressLocality": LOCALE === 'zh-CN' ? "深圳市" : "Shenzhen"
    },
    "sameAs": [
      "https://www.linkedin.com/company/raytron",
      "https://www.youtube.com/@raytron"
    ]
  };
}

// BreadcrumbList Schema - 面包屑导航
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
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

// Product Schema - 产品
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
  const {
    name,
    description,
    image,
    sku,
    brand = "Raytron",
    category,
    material,
    url
  } = props;

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

// FAQ Schema - 常见问题
interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
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

// Article Schema - 博客文章
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
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author = "Raytron Team",
    url
  } = props;

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
        "url": `${SITE_URL}/images/logo.png`
      }
    },
    "url": url
  };
}

// WebSite Schema - 网站
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Raytron",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// 组合多个结构化数据
export function combineStructuredData(...schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}
