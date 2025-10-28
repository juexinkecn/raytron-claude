import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown, Send, Package, CheckCircle, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import CTASection from '@/components/CTASection';
import { getAbsoluteUrl } from '@/config/site';
import { generateProductSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { getProductBySlug, getAllProductSlugs, ProductItem } from '@/data/products';

interface ProductPageProps {
  product: ProductItem;
  locale: 'en' | 'zh-CN';
}

export default function ProductPage({ product, locale }: ProductPageProps) {
  const altLocale = locale === 'en' ? 'zh-CN' : 'en';
  const canonicalUrl = getAbsoluteUrl(`/products/${product.slug}/`, locale);
  const alternateUrl = getAbsoluteUrl(`/products/${product.slug}/`, altLocale);

  const faqs = locale === 'en' ? [
    {
      question: `What are the typical applications for ${product.name[locale]}?`,
      answer: product.applications[locale].join(', ') + '. These materials are particularly suitable for applications requiring lightweight, cost-effective conductors.',
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'Our MOQ varies by product and specification. Please contact our sales team for specific requirements.',
    },
    {
      question: 'Do you provide free samples?',
      answer: 'Yes, we offer free samples for evaluation purposes. Sample delivery typically takes 3-5 business days.',
    },
    {
      question: 'What certifications do your products have?',
      answer: 'All our products are manufactured under ISO 9001 quality management system and comply with international standards including RoHS and REACH.',
    },
  ] : [
    {
      question: `${product.name[locale]}的典型应用有哪些？`,
      answer: product.applications[locale].join('、') + '。这些材料特别适合需要轻量化、高性价比导体的应用。',
    },
    {
      question: '最小起订量是多少？',
      answer: '我们的起订量因产品和规格而异。请联系我们的销售团队获取具体要求。',
    },
    {
      question: '你们提供免费样品吗？',
      answer: '是的，我们为评估目的提供免费样品。样品交付通常需要3-5个工作日。',
    },
    {
      question: '你们的产品有哪些认证？',
      answer: '我们所有产品均在ISO 9001质量管理体系下制造，并符合包括RoHS和REACH在内的国际标准。',
    },
  ];

  const structuredData = [
    generateProductSchema({
      name: product.name[locale],
      description: product.fullDescription[locale],
      image: getAbsoluteUrl(product.image, locale),
      url: canonicalUrl,
      locale,
      sku: product.id,
    }),
    generateBreadcrumbSchema([
      { name: locale === 'en' ? 'Home' : '首页', url: getAbsoluteUrl('/', locale) },
      { name: locale === 'en' ? 'Products' : '产品', url: getAbsoluteUrl('/products/', locale) },
      { name: product.name[locale], url: canonicalUrl },
    ], locale),
    generateFAQSchema(faqs),
  ];

  const seo = {
    title: product.metaTitle[locale],
    description: product.metaDescription[locale],
    canonical: canonicalUrl,
    alternateUrl,
    keywords: product.keywords[locale],
    ogImage: getAbsoluteUrl(product.image, locale),
    structuredData,
  };

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
              href={getAbsoluteUrl('/products/', locale)}
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              {locale === 'en' ? 'Products' : '产品'}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name[locale]}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-elegant">
                <Image
                  src={product.image}
                  alt={product.name[locale]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.gallery && (
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity"
                    >
                      <Image
                        src={img}
                        alt={`${product.name[locale]} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name[locale]}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.fullDescription[locale]}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Key Features' : '主要特点'}
                </h3>
                <ul className="space-y-3">
                  {product.features[locale].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={getAbsoluteUrl(`/contact/?product=${product.slug}`, locale)}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl group"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {locale === 'en' ? 'Request a Quote' : '请求报价'}
                </Link>
                <Link
                  href={getAbsoluteUrl(`/contact/?type=samples&product=${product.slug}`, locale)}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-200"
                >
                  <Package className="w-5 h-5 mr-2" />
                  {locale === 'en' ? 'Request Samples' : '请求样品'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {locale === 'en' ? 'Technical Specifications' : '技术规格'}
          </h2>
          
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {locale === 'en' ? 'Parameter' : '参数'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {locale === 'en' ? 'Value' : '值'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specifications[locale].map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {spec.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {spec.value} {spec.unit && <span className="text-gray-500">{spec.unit}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link
              href={getAbsoluteUrl(`/downloads/${product.slug}-datasheet.pdf`, locale)}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
            >
              <FileDown className="w-5 h-5 mr-2" />
              {locale === 'en' ? 'Download Technical Datasheet' : '下载技术数据表'}
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {locale === 'en' ? 'Applications' : '应用领域'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications[locale].map((app, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors border-2 border-transparent hover:border-primary-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {locale === 'en' ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          
          <div className="max-w-4xl space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        locale={locale}
        variant="compact"
        title={locale === 'en' ? 'Need a Custom Solution?' : '需要定制解决方案？'}
        description={locale === 'en' 
          ? 'Our technical team can help you find the perfect material for your specific requirements.'
          : '我们的技术团队可以帮助您找到满足特定需求的完美材料。'
        }
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllProductSlugs();
  const paths = slugs.flatMap((slug) => [
    { params: { slug }, locale: 'en' },
    { params: { slug }, locale: 'zh-CN' },
  ]);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
      locale: 'en',
    },
    revalidate: 3600,
  };
};