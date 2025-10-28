// src/components/SEOHead.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: any;
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
  
  // 从环境变量获取当前域名和语言
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en';
  
  // 构建当前页面的绝对URL
  const currentPath = router.asPath.split('?')[0].split('#')[0];
  const canonicalUrl = `${siteUrl}${currentPath}`;
  
  // 构建对应语言版本的URL
  const alternateUrl = locale === 'en' 
    ? `https://cn.raytron.group${currentPath}`
    : `https://en.raytron.group${currentPath}`;
  
  // 构建完整标题
  const fullTitle = `${title} - Raytron`;
  
  // 默认图片
  const ogImage = image || `${siteUrl}/images/og-default.jpg`;

  return (
    <Head>
      {/* 基础Meta标签 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical - 必须使用绝对地址 */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang - 双域名互相指向 */}
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
        href={`https://en.raytron.group${currentPath}`} 
      />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Raytron" />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'zh_CN'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* 结构化数据 */}
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
