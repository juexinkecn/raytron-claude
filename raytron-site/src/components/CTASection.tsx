import Link from 'next/link';
import { ArrowRight, FileText, Send, Phone } from 'lucide-react';
import { getAbsoluteUrl } from '@/config/site';

interface CTASectionProps {
  locale: 'en' | 'zh-CN';
  variant?: 'default' | 'compact' | 'hero';
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  locale,
  variant = 'default',
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  const defaultContent = locale === 'en' ? {
    title: 'Ready to Find the Perfect Solution?',
    description: 'Get a custom quote for your specific requirements. Our technical team will respond within 24 hours.',
    primaryCTA: {
      text: 'Get a Quote',
      href: '/contact/',
    },
    secondaryCTA: {
      text: 'Request Samples',
      href: '/contact/?type=samples',
    },
  } : {
    title: '准备好寻找完美解决方案了吗？',
    description: '获取满足您特定需求的定制报价。我们的技术团队将在24小时内回复。',
    primaryCTA: {
      text: '获取报价',
      href: '/contact/',
    },
    secondaryCTA: {
      text: '请求样品',
      href: '/contact/?type=samples',
    },
  };

  const finalTitle = title || defaultContent.title;
  const finalDescription = description || defaultContent.description;
  const finalPrimaryCTA = primaryCTA || defaultContent.primaryCTA;
  const finalSecondaryCTA = secondaryCTA || defaultContent.secondaryCTA;

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {finalTitle}
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            {finalDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getAbsoluteUrl(finalPrimaryCTA.href, locale)}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl group"
            >
              {finalPrimaryCTA.text}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={getAbsoluteUrl(finalSecondaryCTA.href, locale)}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all border-2 border-white/20"
            >
              {finalSecondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {finalTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {finalDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href={getAbsoluteUrl(finalPrimaryCTA.href, locale)}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-lg group"
              >
                <Send className="mr-2 w-5 h-5" />
                {finalPrimaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={getAbsoluteUrl(finalSecondaryCTA.href, locale)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-200 text-lg"
              >
                <FileText className="mr-2 w-5 h-5" />
                {finalSecondaryCTA.text}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="font-medium">
                  {locale === 'en' ? '24h Response Time' : '24小时响应'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <FileText className="w-5 h-5 text-primary-600" />
                <span className="font-medium">
                  {locale === 'en' ? 'Free Samples' : '免费样品'}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <Send className="w-5 h-5 text-primary-600" />
                <span className="font-medium">
                  {locale === 'en' ? 'Custom Solutions' : '定制解决方案'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {finalTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              {finalDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getAbsoluteUrl(finalPrimaryCTA.href, locale)}
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-lg group"
              >
                {finalPrimaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={getAbsoluteUrl(finalSecondaryCTA.href, locale)}
                className="inline-flex items-center justify-center px-10 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all border-2 border-white/30 text-lg"
              >
                {finalSecondaryCTA.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}