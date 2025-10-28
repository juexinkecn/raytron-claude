// src/components/AbsoluteLink.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface AbsoluteLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
  locale?: 'en' | 'zh-CN';
}

/**
 * AbsoluteLink 组件
 * 确保所有内部链接使用绝对地址
 * 根据需求文档：所有链接必须使用 https://domain/path 格式
 */
export default function AbsoluteLink({
  href,
  children,
  className,
  target,
  rel,
  locale,
}: AbsoluteLinkProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const currentLocale = locale || process.env.NEXT_PUBLIC_LOCALE || 'en';
  
  // 如果已经是绝对地址，直接使用
  const isAbsolute = href.startsWith('http://') || href.startsWith('https://');
  const isExternal = isAbsolute && !href.includes('raytron.group');
  
  // 构建绝对URL
  let absoluteUrl = href;
  if (!isAbsolute) {
    // 确保href以/开头
    const path = href.startsWith('/') ? href : `/${href}`;
    absoluteUrl = `${siteUrl}${path}`;
  }
  
  // 外部链接添加安全属性
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <Link
      href={absoluteUrl}
      className={className}
      target={target}
      rel={rel}
      {...externalProps}
    >
      {children}
    </Link>
  );
}

// 导出辅助函数，用于其他地方构建绝对URL
export function getAbsoluteUrl(path: string, locale?: 'en' | 'zh-CN'): string {
  const currentLocale = locale || process.env.NEXT_PUBLIC_LOCALE || 'en';
  const baseUrl = currentLocale === 'en' 
    ? 'https://en.raytron.group' 
    : 'https://cn.raytron.group';
  
  // 确保path以/开头
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// 获取对应语言的URL
export function getAlternateUrl(path: string, targetLocale: 'en' | 'zh-CN'): string {
  const baseUrl = targetLocale === 'en' 
    ? 'https://en.raytron.group' 
    : 'https://cn.raytron.group';
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
