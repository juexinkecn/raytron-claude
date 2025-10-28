import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import CTASection from '@/components/CTASection';
import { getAbsoluteUrl } from '@/config/site';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { getApplicationBySlug, getAllApplicationSlugs, Application } from '@/data/applications';
import { getProductBySlug } from '@/data/products';

interface ApplicationPageProps {
  application: Application;
  locale: 'en' | 'zh-CN';
}

export default function ApplicationPage({ application, locale }: ApplicationPageProps) {
  const altLocale = locale === 'en' ? 'zh-CN' : 'en';
  const canonicalUrl = getAbsoluteUrl(`/applications/${application.slug}/`, locale);
  const alternateUrl = getAbsoluteUrl(`/applications/${application.slug}/`, altLocale);

  const structuredData = generateBreadcrumbSchema([
    { name: locale === 'en' ? 'Home' : '首页', url: getAbsoluteUrl('/', locale) },
    { name: locale === 'en' ? 'Applications' : '应用领域', url: getAbsoluteUrl('/applications/', locale) },
    { name: application.name[locale], url: canonicalUrl },
  ], locale);

  const seo = {
    title: application.metaTitle[locale],
    description: application.metaDescription[locale],
    canonical: canonicalUrl,
    alternateUrl,
    keywords: application.keywords[locale],
    ogImage: getAbsoluteUrl(application.heroImage, locale),
    structuredData,
  };

  const recommendedProducts = application.recommendedProducts
    .map(slug => getProductBySlug(slug))
    .filter(Boolean);

  return (
    <Layout locale={locale} seo={seo}>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href={getAbsoluteUrl('/', locale)}
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              {locale === 'en' ? 'Home' : '首页'}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href={getAbsoluteUrl('/applications/', locale)}
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              {locale === 'en' ? 'Applications' : '应用领域'}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{application.name[locale]}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={application.heroImage}
            alt={application.name[locale]}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-5xl mb-6">{application.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {application.name[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {application.fullDescription[locale]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={getAbsoluteUrl(`/contact/?application=${application.slug}`, locale)}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                {locale === 'en' ? 'Request a Quote' : '请求报价'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={getAbsoluteUrl('/products/', locale)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                {locale === 'en' ? 'View Products' : '查看产品'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'en' ? 'Key Benefits' : '主要优势'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {application.benefits[locale].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        locale={locale}
        variant="default"
        title={locale === 'en' 
          ? 'Ready to Optimize Your Application?'
          : '准备优化您的应用了吗？'
        }
        description={locale === 'en'
          ? 'Contact our technical team to discuss how our materials can improve your product performance.'
          : '联系我们的技术团队，讨论我们的材料如何提高您的产品性能。'}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllApplicationSlugs();
  const paths = slugs.flatMap((slug) => [
    { params: { slug }, locale: 'en' },
    { params: { slug }, locale: 'zh-CN' },
  ]);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ApplicationPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const application = getApplicationBySlug(slug);

  if (!application) {
    return { notFound: true };
  }

  return {
    props: {
      application,
      locale: 'en',
    },
    revalidate: 3600,
  };
};
```

### 25. 额外配置文件

**.gitignore**
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts