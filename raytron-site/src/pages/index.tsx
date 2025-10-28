import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Factory, Award, Globe, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import CTASection from '@/components/CTASection';
import { getSiteConfig, getAbsoluteUrl } from '@/config/site';
import { generateOrganizationSchema } from '@/lib/seo';

export default function HomePage() {
  const locale = 'en';
  const config = getSiteConfig(locale);
  const alternateUrl = getAbsoluteUrl('/', 'zh-CN');

  const seo = {
    title: 'Raytron - Advanced Metal Composite Materials Manufacturer',
    description: 'Leading manufacturer of copper clad aluminum (CCA), copper clad steel (CCS), nickel clad copper, and specialty metal composite materials for cable, solar, battery, and automotive industries. ISO certified with global distribution.',
    canonical: getAbsoluteUrl('/', locale),
    alternateUrl,
    keywords: [
      'copper clad aluminum manufacturer',
      'CCA wire',
      'copper clad steel',
      'metal composite materials',
      'photovoltaic ribbon',
      'battery conductor materials',
      'cable conductor manufacturer',
    ],
    ogImage: `${config.domain}/images/og-home.jpg`,
    structuredData: generateOrganizationSchema(locale),
  };

  // Featured products
  const featuredProducts = [
    {
      name: 'Copper Clad Aluminum',
      description: 'Lightweight conductor combining copper conductivity with aluminum cost-effectiveness. 30-40% weight reduction.',
      image: '/images/products/cca-featured.jpg',
      href: '/products/copper-clad-aluminum/',
      tag: 'Popular',
    },
    {
      name: 'Photovoltaic Ribbon',
      description: 'High-efficiency solar interconnect ribbons with superior conductivity and solderability.',
      image: '/images/products/pv-ribbon-featured.jpg',
      href: '/products/photovoltaic-ribbon/',
      tag: 'Best Seller',
    },
    {
      name: 'Nickel Clad Copper',
      description: 'Corrosion-resistant composite for harsh environments and high-temperature applications.',
      image: '/images/products/ncc-featured.jpg',
      href: '/products/nickel-clad-copper/',
      tag: 'Premium',
    },
    {
      name: 'Copper Strip & Foil',
      description: 'Precision copper strips and foils for battery tabs, flexible circuits, and shielding.',
      image: '/images/products/copper-strip-featured.jpg',
      href: '/products/copper/copper-strip/',
      tag: 'New',
    },
  ];

  // Applications
  const applications = [
    {
      name: 'Cable & Wire',
      description: 'High-performance conductors for power cables, communication cables, and specialty wires.',
      icon: '🔌',
      href: '/applications/cable/',
    },
    {
      name: 'Solar Energy',
      description: 'PV ribbons and interconnect materials for solar cell and module manufacturing.',
      icon: '☀️',
      href: '/applications/solar/',
    },
    {
      name: 'Battery & Energy Storage',
      description: 'Battery tabs, busbars, and conductive foils for lithium-ion and energy storage systems.',
      icon: '🔋',
      href: '/applications/battery/',
    },
    {
      name: 'Automotive & EV',
      description: 'Lightweight conductors for electric vehicles, charging infrastructure, and automotive electronics.',
      icon: '🚗',
      href: '/applications/automotive/',
    },
  ];

  // Company advantages
  const advantages = [
    {
      icon: Factory,
      title: '30+ Years Experience',
      description: 'Three decades of expertise in metal composite material manufacturing.',
    },
    {
      icon: Award,
      title: 'ISO 9001 Certified',
      description: 'Certified quality management system ensuring consistent excellence.',
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Serving customers in 50+ countries across all continents.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'State-of-the-art R&D facilities developing next-generation materials.',
    },
  ];

  return (
    <Layout locale={locale} seo={seo}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Advanced Metal Composite Materials for{' '}
                <span className="text-primary-600">Next-Gen Industries</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading manufacturer of copper clad aluminum, copper clad steel, and specialty bimetal composites. Trusted by global leaders in cable, solar, battery, and automotive sectors.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  '30-40% Weight Reduction',
                  'Cost-Effective Solutions',
                  'ISO 9001 Certified',
                  'Global Distribution',
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={getAbsoluteUrl('/contact/', locale)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-lg group"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={getAbsoluteUrl('/products/', locale)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-primary-200 text-lg"
                >
                  Browse Products
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-manufacturing.jpg"
                  alt="Raytron advanced manufacturing facility"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elegant p-6 animate-float">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600 font-medium">Countries Served</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-elegant p-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-primary-600">30+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-100/20 to-transparent" />
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular metal composite materials trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.name}
                href={getAbsoluteUrl(product.href, locale)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Tag */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  {product.tag}
                </div>

                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="text-center mt-12">
            <Link
              href={getAbsoluteUrl('/products/', locale)}
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our materials power innovation across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Link
                key={app.name}
                href={getAbsoluteUrl(app.href, locale)}
                className="group bg-white rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {app.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {app.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Raytron
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise and quality you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={advantage.title}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2">30+</div>
              <div className="text-primary-100 text-lg">Years in Business</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-primary-100 text-lg">Countries Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
              <div className="text-primary-100 text-lg">Global Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
              <div className="text-primary-100 text-lg">Product Variants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Raytron's CCA wire has significantly reduced our cable weight and costs without compromising performance. Outstanding quality and service.",
                author: "John Smith",
                position: "Chief Engineer",
                company: "Global Cable Solutions",
              },
              {
                quote: "The photovoltaic ribbons from Raytron have excellent solderability and durability. Our solar panel production efficiency has improved by 15%.",
                author: "Maria Garcia",
                position: "Production Manager",
                company: "SolarTech Industries",
              },
              {
                quote: "We've been using Raytron's nickel clad copper for 5 years. Consistent quality, competitive pricing, and reliable delivery every time.",
                author: "David Chen",
                position: "Procurement Director",
                company: "Advanced Electronics Ltd",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all"
              >
                <div className="text-primary-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to the highest quality and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto items-center">
            {['ISO 9001', 'RoHS', 'REACH', 'CE', 'UL', 'SGS'].map((cert) => (
              <div
                key={cert}
                className="bg-white rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all flex items-center justify-center h-24"
              >
                <span className="text-xl font-bold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection locale={locale} variant="hero" />
    </Layout>
  );
}