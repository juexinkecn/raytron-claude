// src/components/SEOHead.tsx (改进版)
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSiteUrl, getAlternateUrl } from './AbsoluteLink';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: any;
  locale?: 'en' | 'zh-CN';
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  type = 'website',
  structuredData,
  noindex = false,
}: SEOHeadProps) {
  const router = useRouter();
  
  const siteUrl = getSiteUrl();
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';
  
  const currentPath = router.asPath.split('?')[0].split('#')[0];
  const canonicalUrl = `${siteUrl}${currentPath}`;
  const alternateUrl = getAlternateUrl(currentPath, locale === 'en' ? 'zh-CN' : 'en');
  
  const fullTitle = title.includes('Raytron') ? title : `${title} - Raytron`;
  const ogImage = image || `${siteUrl}/images/og-default.jpg`;

  // 开发环境SEO检查
  if (process.env.NODE_ENV === 'development') {
    if (!description || description.length < 50) {
      console.warn(`⚠️ SEO: Description too short (${description?.length || 0} chars) for "${title}"`);
    }
    if (fullTitle.length > 60) {
      console.warn(`⚠️ SEO: Title too long (${fullTitle.length} chars) for "${title}"`);
    }
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <link rel="canonical" href={canonicalUrl} />
      
      <link 
        rel="alternate" 
        hrefLang="en" 
        href={locale === 'en' ? canonicalUrl : alternateUrl} 
      />
      <link 
        rel="alternate" 
        hrefLang="zh-CN" 
        href={locale === 'zh-CN' ? canonicalUrl : alternateUrl} 
      />
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={getAlternateUrl(currentPath, 'en')} 
      />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Raytron" />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'zh_CN'} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}
