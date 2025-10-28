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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const alternateUrl = getAbsoluteUrl('/contact/', locale === 'en' ? 'zh-CN' : 'en');

  const seo = {
    title: locale === 'en' 
      ? 'Contact Us - Get a Quote | Raytron'
      : '联系我们 - 获取报价 | Raytron',
    description: locale === 'en'
      ? 'Contact Raytron for custom quotes, samples, and technical inquiries. Our team responds within 24 hours. Email, phone, and offices worldwide.'
      : '联系Raytron获取定制报价、样品和技术咨询。我们的团队将在24小时内回复。提供邮件、电话和全球办事处。',
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
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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

  // Contact methods
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
      href: `tel:${config.company.phone}`,
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

  // Global offices
  const globalOffices = locale === 'en' ? [
    {
      region: 'Asia Pacific',
      office: 'Headquarters - Shenzhen, China',
      address: 'XXX Industrial Park, Shenzhen, Guangdong 518000',
      phone: '+86-xxx-xxxx-xxxx',
      email: 'asia@raytron.group',
    },
    {
      region: 'North America',
      office: 'Los Angeles Office, USA',
      address: '123 Business Ave, Los Angeles, CA 90001',
      phone: '+1-xxx-xxx-xxxx',
      email: 'americas@raytron.group',
    },
    {
      region: 'Europe',
      office: 'Frankfurt Office, Germany',
      address: 'Business Straße 45, 60311 Frankfurt',
      phone: '+49-xxx-xxx-xxxx',
      email: 'europe@raytron.group',
    },
  ] : [
    {
      region: '亚太地区',
      office: '总部 - 中国深圳',
      address: 'XXX工业园，广东深圳 518000',
      phone: '+86-xxx-xxxx-xxxx',
      email: 'asia@raytron.group',
    },
    {
      region: '北美地区',
      office: '美国洛杉矶办事处',
      address: '123 Business Ave, Los Angeles, CA 90001',
      phone: '+1-xxx-xxx-xxxx',
      email: 'americas@raytron.group',
    },
    {
      region: '欧洲地区',
      office: '德国法兰克福办事处',
      address: 'Business Straße 45, 60311 Frankfurt',
      phone: '+49-xxx-xxx-xxxx',
      email: 'europe@raytron.group',
    },
  ];

  // FAQ items
  const contactFaqs = locale === 'en' ? [
    {
      question: 'What is the typical response time?',
      answer: 'We respond to all inquiries within 24 hours during business days. For urgent requests, please call us directly.',
    },
    {
      question: 'Do you provide free samples?',
      answer: 'Yes, we offer free samples for product evaluation. Standard samples are shipped within 3-5 business days.',
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please provide your company name, product requirements, specifications, expected quantity, and target application. This helps us provide accurate pricing and recommendations.',
    },
    {
      question: 'Can I schedule a facility tour?',
      answer: 'Yes, we welcome facility tours for qualified customers. Please contact us to schedule a visit to our manufacturing facilities.',
    },
  ] : [
    {
      question: '通常多久会回复？',
      answer: '我们会在工作日的24小时内回复所有询盘。如有紧急需求，请直接致电我们。',
    },
    {
      question: '你们提供免费样品吗？',
      answer: '是的，我们为产品评估提供免费样品。标准样品会在3-5个工作日内发货。',
    },
    {
      question: '询盘中应该包含哪些信息？',
      answer: '请提供您的公司名称、产品需求、规格、预期数量和目标应用。这有助于我们提供准确的报价和建议。',
    },
    {
      question: '可以预约参观工厂吗？',
      answer: '可以，我们欢迎合格客户参观工厂。请联系我们预约参观我们的生产设施。',
    },
  ];

  return (
    <Layout locale={locale} seo={seo}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Contact Us' : '联系我们'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en'
                ? 'Get in touch with our team for quotes, samples, or technical inquiries. We respond within 24 hours.'
                : '联系我们的团队获取报价、样品或技术咨询。我们将在24小时内回复。'}
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
                <div className="text-sm text-gray-600 font-medium">
                  {locale === 'en' ? 'Response Time' : '响应时间'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">
                  {locale === 'en' ? 'Countries Served' : '服务国家'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
                <div className="text-sm text-gray-600 font-medium">
                  {locale === 'en' ? 'Sample Testing' : '样品测试'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {contactMethods.map((method, index) => {
  const Icon = method.icon;
  return (
    <a
      key={index}
      href={method.href}
      className="group bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-primary-200 hover:shadow-elegant transition-all duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `var(--tw-color-${method.color}-100)` }}>
        <Icon className={`w-8 h-8 text-${method.color}-600`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {method.title}
      </h3>
      <p className="text-primary-600 font-medium mb-1">
        {method.primary}
      </p>
      <p className="text-sm text-gray-500">
        {method.secondary}
      </p>
    </a>
  );
})}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white sticky top-24">
                <h2 className="text-2xl font-bold mb-6">
                  {locale === 'en' ? 'Contact Information' : '联系信息'}
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {locale === 'en' ? 'Email' : '邮箱'}
                      </h3>
                      
                        href={`mailto:${config.company.email}`}
                        className="text-primary-100 hover:text-white transition-colors"
                      >
                        {config.company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {locale === 'en' ? 'Phone' : '电话'}
                      </h3>
                      
                        href={`tel:${config.company.phone}`}
                        className="text-primary-100 hover:text-white transition-colors"
                      >
                        {config.company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {locale === 'en' ? 'Address' : '地址'}
                      </h3>
                      <p className="text-primary-100">
                        {config.company.address.street}<br />
                        {config.company.address.city}, {config.company.address.region}<br />
                        {config.company.address.postalCode}, {config.company.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {locale === 'en' ? 'Business Hours' : '营业时间'}
                      </h3>
                      <p className="text-primary-100 text-sm">
                        {locale === 'en' ? 'Monday - Friday' : '周一 - 周五'}: 9:00 - 18:00<br />
                        {locale === 'en' ? 'Saturday' : '周六'}: 9:00 - 12:00<br />
                        {locale === 'en' ? 'Sunday' : '周日'}: {locale === 'en' ? 'Closed' : '休息'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-semibold mb-4">
                    {locale === 'en' ? 'Follow Us' : '关注我们'}
                  </h3>
                  <div className="flex space-x-3">
                    
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                    
                      href={config.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="YouTube"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer group relative">
                      <span className="text-sm font-semibold">微</span>
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white px-3 py-2 rounded text-xs whitespace-nowrap">
                        WeChat: {config.social.wechat}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-elegant p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {locale === 'en' ? 'Send Us an Inquiry' : '发送询盘'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {locale === 'en'
                    ? 'Fill out the form below and our team will get back to you within 24 hours.'
                    : '填写下面的表单，我们的团队将在24小时内回复您。'}
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-semibold">
                        {locale === 'en' ? 'Thank you for your inquiry!' : '感谢您的询盘！'}
                      </p>
                      <p className="text-green-700 text-sm">
                        {locale === 'en'
                          ? 'We will respond within 24 hours.'
                          : '我们将在24小时内回复。'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 font-semibold">
                        {locale === 'en' ? 'Submission Error' : '提交错误'}
                      </p>
                      <p className="text-red-700 text-sm">
                        {locale === 'en'
                          ? 'Please try again or email us directly.'
                          : '请重试或直接发送邮件给我们。'}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {formLabels.companyName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('companyName', { required: true })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                      placeholder={locale === 'en' ? 'Your Company Name' : '您的公司名称'}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-500">
                        {locale === 'en' ? 'This field is required' : '此字段为必填项'}
                      </p>
                    )}
                  </div>

                  {/* Contact Person & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {formLabels.contactPerson} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('contactPerson', { required: true })}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                        placeholder={locale === 'en' ? 'Your Name' : '您的姓名'}
                      />
                      {errors.contactPerson && (
                        <p className="mt-1 text-sm text-red-500">
                          {locale === 'en' ? 'Required' : '必填'}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {formLabels.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {locale === 'en' ? 'Valid email required' : '需要有效的邮箱'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Country */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {formLabels.phone}
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        {formLabels.country} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('country', { required: true })}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.country ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                        placeholder={locale === 'en' ? 'Your Country' : '您的国家'}
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {formLabels.productInterest} <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('productInterest', { required: true })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.productInterest ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    >
                      <option value="">
                        {locale === 'en' ? 'Select a product...' : '选择产品...'}
                      </option>
                      <option value="copper-clad-aluminum">
                        {locale === 'en' ? 'Copper Clad Aluminum' : '铜包铝'}
                      </option>
                      <option value="copper-clad-steel">
                        {locale === 'en' ? 'Copper Clad Steel' : '铜包钢'}
                      </option>
                      <option value="nickel-clad-copper">
                        {locale === 'en' ? 'Nickel Clad Copper' : '镍包铜'}
                      </option>
                      <option value="silver-clad-copper">
                        {locale === 'en' ? 'Silver Clad Copper' : '银包铜'}
                      </option>
                      <option value="photovoltaic-ribbon">
                        {locale === 'en' ? 'Photovoltaic Ribbon' : '光伏焊带'}
                      </option>
                      <option value="copper-products">
                        {locale === 'en' ? 'Copper Products' : '铜产品'}
                      </option>
                      <option value="aluminum-products">
                        {locale === 'en' ? 'Aluminum Products' : '铝产品'}
                      </option>
                      <option value="other">
                        {locale === 'en' ? 'Other' : '其他'}
                      </option>
                    </select>
                  </div>

                  {/* Specifications */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {formLabels.specifications}
                    </label>
                    <input
                      type="text"
                      {...register('specifications')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder={locale === 'en' 
                        ? 'e.g., Diameter: 2.0mm, Length: 1000m, Copper ratio: 15%'
                        : '例如：直径 2.0mm，长度 1000m，铜比例 15%'}
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {formLabels.quantity}
                    </label>
                    <input
                      type="text"
                      {...register('quantity')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder={locale === 'en' ? 'e.g., 5000 kg/month' : '例如：5000 公斤/月'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {formLabels.message}
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder={locale === 'en'
                        ? 'Please provide any additional information or specific requirements...'
                        : '请提供任何额外信息或特定要求...'}
                    />
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <p>
                      {locale === 'en'
                        ? 'By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.'
                        : '提交此表单即表示您同意我们的隐私政策，并同意我们就您的询盘与您联系。'}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{formLabels.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{formLabels.submit}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Our Global Offices' : '全球办事处'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Serving customers worldwide with local support and expertise.'
                : '以本地支持和专业知识为全球客户提供服务。'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {globalOffices.map((office, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-100 hover:border-primary-200 hover:shadow-elegant transition-all"
              >
                <div className="text-primary-600 font-semibold mb-3">
                  {office.region}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {office.office}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-primary-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Frequently Asked Questions' : '常见问题'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Common questions about contacting us and our inquiry process.'
                : '关于联系我们和询盘流程的常见问题。'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {contactFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all">
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
    </Layout>
  );
}
