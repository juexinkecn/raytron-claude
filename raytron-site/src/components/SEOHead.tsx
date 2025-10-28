import Head from 'next/head';
import { getAbsoluteUrl, getSiteConfig } from '@/config/site';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  locale: 'en' | 'zh-CN';
  alternateUrl: string;
  keywords?: string[];
  ogImage?: string;
  structuredData?: object | object[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  locale,
  alternateUrl,
  keywords,
  ogImage,
  structuredData,
}: SEOHeadProps) {
  const config = getSiteConfig(locale);
  const alternateLocale = locale === 'en' ? 'zh-CN' : 'en';
  const defaultOgImage = `${config.domain}/images/og-default.jpg`;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      <link rel="canonical" href={canonical} />
      
      <link rel="alternate" hrefLang={locale} href={canonical} />
      <link rel="alternate" hrefLang={alternateLocale} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={getAbsoluteUrl('/', 'en')} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={config.company.name} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content={locale} />
      <meta httpEquiv="content-language" content={locale} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              Array.isArray(structuredData)
                ? structuredData
                : structuredData
            ),
          }}
        />
      )}
      
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}