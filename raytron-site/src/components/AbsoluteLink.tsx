// src/components/AbsoluteLink.tsx (修正版 - 不会破坏SPA)
import Link from 'next/link';
import { ReactNode } from 'react';

interface AbsoluteLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export default function AbsoluteLink({
  href,
  children,
  className,
  target,
  rel,
}: AbsoluteLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  
  const externalProps = isExternal && !href.includes('raytron.group') ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  // 内部链接保持相对路径，支持Next.js客户端路由
  const linkHref = isExternal ? href : (href.startsWith('/') ? href : `/${href}`);

  return (
    <Link
      href={linkHref}
      className={className}
      target={target}
      rel={rel}
      {...externalProps}
    >
      {children}
    </Link>
  );
}

// SEO专用：生成绝对URL
export function getAbsoluteUrl(path: string, locale?: 'en' | 'zh-CN'): string {
  const currentLocale = locale || process.env.NEXT_PUBLIC_LOCALE || 'en';
  const baseUrl = currentLocale === 'en' 
    ? 'https://en.raytron.group' 
    : 'https://cn.raytron.group';
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// SEO专用：获取对应语言URL
export function getAlternateUrl(path: string, targetLocale: 'en' | 'zh-CN'): string {
  const baseUrl = targetLocale === 'en' 
    ? 'https://en.raytron.group' 
    : 'https://cn.raytron.group';
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// 安全获取站点URL
export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (!siteUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ NEXT_PUBLIC_SITE_URL is not set. Using default.');
      return 'https://en.raytron.group';
    }
    throw new Error('NEXT_PUBLIC_SITE_URL must be set in production');
  }
  
  return siteUrl;
}
