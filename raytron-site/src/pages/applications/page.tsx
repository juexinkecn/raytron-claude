// app/applications/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Industry Applications - Metal Composite Materials | Raytron',
  description: 'Raytron metal composite materials serve solar energy, battery systems, automotive, aerospace, electronics, and industrial applications worldwide. Discover industry-specific solutions.',
};

export default function ApplicationsPage() {
  const applications = [
    {
      id: 'solar',
      name: 'Solar Energy',
      slug: 'solar',
      icon: '☀️',
      color: 'from-amber-500 to-orange-600',
      tagline: 'Powering the renewable energy revolution',
      description: 'High-efficiency photovoltaic ribbons and interconnect materials for solar cell and module manufacturing. Our PV ribbons ensure maximum power output and 25+ year reliability.',
      products: ['Photovoltaic Ribbon', 'Copper Strip', 'Silver Clad Copper'],
      benefits: ['25+ year durability', 'Low power loss (<2%)', 'Superior solderability', 'IEC certified'],
      stats: { value: '15GW+', label: 'Annual Solar Capacity' }
    },
    {
      id: 'battery',
      name: 'Battery & Energy Storage',
      slug: 'battery',
      icon: '🔋',
      color: 'from-green-500 to-emerald-600',
      tagline: 'Enabling next-generation energy storage',
      description: 'Precision copper and nickel clad copper strips for battery tabs, busbars, and interconnects. Essential for lithium-ion batteries, supercapacitors, and energy storage systems.',
      products: ['Copper Strip & Foil', 'Nickel Clad Copper', 'Copper Ribbon Wire'],
      benefits: ['Ultra-thin precision', 'Excellent weldability', 'Low resistance', 'High current capacity'],
      stats: { value: '500M+', label: 'Battery Tabs/Year' }
    },
    {
      id: 'cable',
      name: 'Cable & Wire',
      slug: 'cable',
      icon: '🔌',
      color: 'from-blue-500 to-indigo-600',
      tagline: 'Lightweight conductors for power distribution',
      description: 'Copper clad aluminum and copper conductors for power cables, communication cables, and building wire. Achieve 30-40% weight reduction while maintaining performance.',
      products: ['Copper Clad Aluminum', 'Copper Wire', 'Enameled Wire'],
      benefits: ['30-40% lighter', 'Cost-effective', 'IEC 60228 compliant', 'Global distribution'],
      stats: { value: '10,000+', label: 'Tons Annually' }
    },
    {
      id: 'automotive',
      name: 'Automotive & EV',
      slug: 'automotive',
      icon: '🚗',
      color: 'from-red-500 to-pink-600',
      tagline: 'Driving the electric vehicle transition',
      description: 'Lightweight conductors for electric vehicles, charging infrastructure, and automotive electronics. Battery interconnects, motor busbars, and wiring harnesses.',
      products: ['Copper Strip', 'CCA Wire', 'Nickel Clad Copper'],
      benefits: ['Weight reduction', 'High reliability', 'AEC-Q200 tested', 'Vibration resistant'],
      stats: { value: '200+', label: 'EV Manufacturers' }
    },
    {
      id: 'electronics',
      name: 'Electronics & Connectors',
      slug: 'electronics',
      icon: '💻',
      color: 'from-purple-500 to-violet-600',
      tagline: 'Precision materials for modern electronics',
      description: 'Ultra-thin copper foils, flexible circuits, EMI shielding, and specialized connectors. Essential for smartphones, wearables, IoT devices, and high-frequency applications.',
      products: ['Copper Foil', 'Silver Products', 'Copper Ribbon Wire'],
      benefits: ['±0.002mm tolerance', 'High-frequency optimized', 'RoHS compliant', 'Custom specifications'],
      stats: { value: '1000+', label: 'Electronics Clients' }
    },
    {
      id: 'medical',
      name: 'Medical Devices',
      slug: 'medical',
      icon: '🏥',
      color: 'from-teal-500 to-cyan-600',
      tagline: 'Precision materials for healthcare innovation',
      description: 'Biocompatible conductors for medical sensors, diagnostic equipment, surgical instruments, and implantable devices. Highest purity standards and traceability.',
      products: ['Silver Wire', 'Copper Strip', 'Nickel Flat Wire'],
      benefits: ['Biocompatible', 'FDA compliant', 'Ultra-pure materials', 'Certified traceability'],
      stats: { value: '50+', label: 'Medical OEMs' }
    },
    {
      id: 'military',
      name: 'Aerospace & Defense',
      slug: 'military',
      icon: '✈️',
      color: 'from-slate-600 to-gray-700',
      tagline: 'Mission-critical reliability for aerospace',
      description: 'High-reliability conductors for aircraft systems, satellites, defense equipment, and aerospace electronics. Meets stringent aerospace and military specifications.',
      products: ['Silver Clad Copper', 'Nickel Clad Copper', 'Specialty Alloys'],
      benefits: ['MIL-SPEC compliant', 'Extreme environment tested', 'Highest reliability', 'Full traceability'],
      stats: { value: '30+', label: 'Aerospace Partners' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industry Applications",
            "url": "https://en.raytron.group/applications",
            "description": "Metal composite material applications across multiple industries"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry Applications
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Raytron's advanced metal composite materials power innovation across diverse industries. 
              From renewable energy to aerospace, our conductors deliver the performance, reliability, 
              and cost-effectiveness that leading manufacturers demand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Discuss Your Application
              </Link>
              <Link
                href="https://en.raytron.group/products"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {applications.map((app) => (
              <a
                key={app.id}
                href={`#${app.id}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap transition"
              >
                <span className="text-2xl">{app.icon}</span>
                <span>{app.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our materials enable critical applications in the world's most demanding industries, 
              backed by 30+ years of manufacturing excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '7', label: 'Major Industries', icon: '🏭' },
              { number: '500+', label: 'Global Clients', icon: '🤝' },
              { number: '50+', label: 'Countries', icon: '🌍' },
              { number: '100+', label: 'Product Variants', icon: '📦' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {applications.map((app, index) => (
            <div key={app.id} id={app.id} className="scroll-mt-20">
              <div className={`bg-gradient-to-r ${app.color} rounded-3xl p-12 text-white mb-8 shadow-xl`}>
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-6xl">{app.icon}</span>
                      <div>
                        <h2 className="text-4xl font-bold mb-2">{app.name}</h2>
                        <p className="text-xl text-white/90">{app.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur rounded-2xl p-6 min-w-[200px]">
                    <div className="text-4xl font-bold mb-2">{app.stats.value}</div>
                    <div className="text-sm text-white/90">{app.stats.label}</div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {app.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>
                    <div className="space-y-4">
                      {app.products.map((product, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                          <span className="font-medium text-gray-900">{product}</span>
                          <Link
                            href="https://en.raytron.group/products"
                            className="text-blue-600 hover:underline text-sm"
                          >
                            View Details →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar CTA */}
                <div className="space-y-6">
                  <div className={`bg-gradient-to-br ${app.color} text-white rounded-2xl p-8 shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                    <p className="text-white/90 mb-6">
                      Our engineering team specializes in {app.name.toLowerCase()} applications. 
                      Let's discuss your specific requirements.
                    </p>
                    <Link
                      href={`https://en.raytron.group/contact?industry=${app.slug}`}
                      className="block w-full text-center bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg font-semibold transition"
                    >
                      Contact Specialists
                    </Link>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
                    <div className="space-y-3">
                      <Link
                        href="https://en.raytron.group/resources"
                        className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-blue-50 transition"
                      >
                        <span className="text-sm font-medium text-gray-700">Application Guide</span>
                        <span className="text-blue-600">↓</span>
                      </Link>
                      <Link
                        href="https://en.raytron.group/resources"
                        className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-blue-50 transition"
                      >
                        <span className="text-sm font-medium text-gray-700">Case Studies</span>
                        <span className="text-blue-600">↓</span>
                      </Link>
                      <Link
                        href="https://en.raytron.group/resources"
                        className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-blue-50 transition"
                      >
                        <span className="text-sm font-medium text-gray-700">Technical Specs</span>
                        <span className="text-blue-600">↓</span>
                      </Link>
                    </div>
                  </div>

                  <Link
                    href={`https://en.raytron.group/applications/${app.slug}`}
                    className="block text-center bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition"
                  >
                    Explore {app.name} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading companies worldwide trust Raytron for their critical conductor needs. 
              Here's how we've helped our customers succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Solar Energy',
                company: 'Leading PV Manufacturer',
                result: '15% efficiency improvement',
                quote: 'Raytron\'s PV ribbons helped us achieve industry-leading module efficiency.'
              },
              {
                industry: 'Automotive',
                company: 'Major EV Manufacturer',
                result: '30% weight reduction',
                quote: 'Their lightweight conductors enabled significant range improvements.'
              },
              {
                industry: 'Electronics',
                company: 'Global Electronics Brand',
                result: '40% cost savings',
                quote: 'Custom copper foils perfectly matched our flexible circuit requirements.'
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <div className="text-sm font-semibold text-blue-600 mb-2">{story.industry}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{story.result}</div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Discuss Your Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our application engineers are ready to help you select the optimal materials 
            for your specific requirements. Get expert guidance and custom solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact"
              className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition"
            >
              Contact Engineering Team
            </Link>
            <Link
              href="https://en.raytron.group/resources"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition"
            >
              Download Application Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
