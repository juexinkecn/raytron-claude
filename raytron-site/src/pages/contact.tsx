'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';
import Layout from '@/components/Layout';
import { getSiteConfig, getAbsoluteUrl } from '@/config/site';
import { generateOrganizationSchema } from '@/lib/seo';

interface ContactFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  specifications: string;
  quantity: string;
  message: string;
  attachments?: FileList;
}

export default function ContactPage({ locale = 'en' }: { locale?: 'en' | 'zh-CN' }) {
  const config = getSiteConfig(locale);

  // ✅ Fix: Define color mapping for contact cards
  const colorStyles: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
  };

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const alternateUrl = getAbsoluteUrl('/contact/', locale === 'en' ? 'zh-CN' : 'en');

  const seo = {
    title: locale === 'en'
      ? 'Contact Us - Get a Quote | Raytron'
      : '联系我们 - 获取报价 | Raytron',
    description: locale === 'en'
      ? 'Contact Raytron for custom quotes, samples, and technical inquiries. Our team responds within 24 hours.'
      : '联系Raytron获取定制报价、样品和技术咨询。我们的团队将在24小时内回复。',
    canonical: getAbsoluteUrl('/contact/', locale),
    alternateUrl,
    structuredData: generateOrganizationSchema(locale),
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const formLabels = locale === 'en' ? {
    companyName: 'Company Name',
    contactPerson: 'Contact Person',
    email: 'Email Address',
    phone: 'Phone Number',
    country: 'Country',
    productInterest: 'Product of Interest',
    specifications: 'Required Specifications',
    quantity: 'Expected Quantity',
    message: 'Additional Message',
    attachments: 'Attachments (Optional)',
    submit: 'Send Inquiry',
    submitting: 'Sending...',
  } : {
    companyName: '公司名称',
    contactPerson: '联系人',
    email: '邮箱地址',
    phone: '电话号码',
    country: '国家',
    productInterest: '感兴趣的产品',
    specifications: '所需规格',
    quantity: '预期数量',
    message: '附加信息',
    attachments: '附件（可选）',
    submit: '发送询盘',
    submitting: '发送中...',
  };

  const contactMethods = [
    {
      icon: Mail,
      title: locale === 'en' ? 'Email Us' : '邮件联系',
      primary: config.company.email,
      secondary: locale === 'en' ? 'Response within 24 hours' : '24小时内回复',
      href: `mailto:${config.company.email}`,
      color: 'primary',
    },
    {
      icon: Phone,
      title: locale === 'en' ? 'Call Us' : '电话联系',
      primary: config.company.phone,
      secondary: locale === 'en' ? 'Mon-Fri, 9:00-18:00 CST' : '周一至周五 9:00-18:00',
      href: `tel:${config.company.phone}`, // ✅ Fixed
      color: 'green',
    },
    {
      icon: MapPin,
      title: locale === 'en' ? 'Visit Us' : '到访我们',
      primary: `${config.company.address.city}, ${config.company.address.country}`,
      secondary: config.company.address.street,
      href: '#',
      color: 'blue',
    },
  ];

  return (
    <Layout locale={locale} seo={seo}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'Contact Us' : '联系我们'}
          </h1>
          <p className="text-xl text-gray-600">
            {locale === 'en'
              ? 'Get in touch with our team for quotes, samples, or technical inquiries.'
              : '联系我们的团队获取报价、样品或技术咨询。'}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="group bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-primary-200 hover:shadow-elegant transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${colorStyles[method.color]}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-primary-600 font-medium">{method.primary}</p>
                  <p className="text-sm text-gray-500">{method.secondary}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-elegant p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="text-sm font-semibold text-gray-900">{formLabels.companyName} *</label>
                <input
                  type="text"
                  {...register('companyName', { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-500"
                />
              </div>

              {/* Contact Person & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-900">{formLabels.contactPerson} *</label>
                  <input type="text" {...register('contactPerson', { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-300" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900">{formLabels.email} *</label>
                  <input type="email" {...register('email', { required: true })} className="w-full px-4 py-3 rounded-lg border border-gray-300" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{formLabels.submit}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
