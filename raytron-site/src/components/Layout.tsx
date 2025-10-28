import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from './SEOHead';

interface LayoutProps {
  children: ReactNode;
  locale: 'en' | 'zh-CN';
  seo: {
    title: string;
    description: string;
    canonical: string;
    alternateUrl: string;
    keywords?: string[];
    ogImage?: string;
    structuredData?: object | object[];
  };
}

export default function Layout({ children, locale, seo }: LayoutProps) {
  return (
    <>
      <SEOHead {...seo} locale={locale} />
      <div className="flex flex-col min-h-screen">
        <Header locale={locale} />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer locale={locale} />
      </div>
    </>
  );
}