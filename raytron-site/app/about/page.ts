// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Raytron - 30+ Years Metal Composite Materials Leader',
  description: 'Raytron is a leading manufacturer of copper, aluminum, and nickel composite materials with 30+ years of expertise. ISO certified, serving 50+ countries worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Raytron",
            "url": "https://en.raytron.group",
            "logo": "https://en.raytron.group/logo.png",
            "description": "Leading manufacturer of metal composite materials and advanced conductors",
            "foundingDate": "1990",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CN",
              "addressLocality": "Shanghai"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+86-21-1234-5678",
              "contactType": "sales",
              "email": "sales@raytron.group"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering Metal Composite Materials for Over 30 Years
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Raytron is a global leader in manufacturing advanced copper, aluminum, nickel, 
              and silver composite materials. Our innovative solutions power industries from 
              renewable energy to aerospace, serving customers in over 50 countries worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Partner With Us
              </Link>
              <Link
                href="https://en.raytron.group/products"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '30+', label: 'Years of Excellence', icon: '🏆' },
              { number: '50+', label: 'Countries Served', icon: '🌍' },
              { number: '500+', label: 'Global Clients', icon: '🤝' },
              { number: '100+', label: 'Product Variants', icon: '📦' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Founded in 1990, Raytron began as a small copper processing workshop in Shanghai 
                  with a vision to revolutionize conductor manufacturing through advanced composite 
                  materials. Over three decades, we have grown into a global leader, pioneering 
                  innovations in copper clad aluminum, nickel clad copper, and specialized conductor 
                  technologies.
                </p>
                <p>
                  Our journey has been driven by a relentless commitment to quality, innovation, 
                  and customer success. From our early days supplying local cable manufacturers to 
                  becoming a trusted partner for Fortune 500 companies worldwide, Raytron has 
                  consistently pushed the boundaries of what's possible in metal composite materials.
                </p>
                <p>
                  Today, our state-of-the-art manufacturing facilities produce millions of meters 
                  of advanced conductors annually, serving critical applications in solar energy, 
                  electric vehicles, aerospace, and next-generation electronics. As we look to the 
                  future, we remain committed to sustainable manufacturing practices and developing 
                  materials that enable the clean energy transition.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver innovative, high-performance metal composite materials that enable 
                  our customers to build better products while advancing sustainability in 
                  manufacturing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the world's most trusted partner for advanced conductor technologies, 
                  driving innovation across industries and contributing to a sustainable future.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Quality without compromise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Innovation through R&D</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Customer-centric approach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Environmental responsibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              {
                year: '1990',
                title: 'Company Founded',
                desc: 'Raytron established in Shanghai as a copper processing workshop'
              },
              {
                year: '1995',
                title: 'CCA Innovation',
                desc: 'Successfully developed proprietary Copper Clad Aluminum technology'
              },
              {
                year: '2000',
                title: 'ISO Certification',
                desc: 'Achieved ISO 9001 certification for quality management systems'
              },
              {
                year: '2005',
                title: 'International Expansion',
                desc: 'Opened first international office and began exporting to Europe and Americas'
              },
              {
                year: '2010',
                title: 'New Manufacturing Plant',
                desc: 'Commissioned state-of-the-art 50,000 sqm manufacturing facility'
              },
              {
                year: '2015',
                title: 'Solar Market Entry',
                desc: 'Launched photovoltaic ribbon product line for solar industry'
              },
              {
                year: '2018',
                title: 'R&D Center Established',
                desc: 'Opened advanced materials research laboratory with 50+ engineers'
              },
              {
                year: '2020',
                title: 'Industry Recognition',
                desc: 'Named "Top 10 Conductor Manufacturer" by International Wire & Cable Association'
              },
              {
                year: '2023',
                title: 'Sustainability Initiative',
                desc: 'Launched carbon-neutral manufacturing program and recycling facility'
              },
              {
                year: '2024',
                title: 'Global Leadership',
                desc: 'Serving 50+ countries with 500+ active customers worldwide'
              }
            ].map((milestone, idx) => (
              <div key={idx} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Manufacturing Excellence</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our world-class facilities combine advanced automation with skilled craftsmanship 
              to deliver precision-engineered materials at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Production Capacity',
                items: [
                  '50,000 sqm manufacturing facility',
                  '20,000+ tons annual capacity',
                  '24/7 production operations',
                  'Multiple production lines'
                ]
              },
              {
                title: 'Quality Control',
                items: [
                  'ISO 9001:2015 certified',
                  'In-line quality monitoring',
                  'Advanced testing laboratory',
                  '100% product inspection'
                ]
              },
              {
                title: 'Technology',
                items: [
                  'Automated production systems',
                  'Precision rolling mills',
                  'Computer-controlled processes',
                  'Real-time data analytics'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-blue-300 mt-1">✓</span>
                      <span className="text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Certifications & Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                cert: 'ISO 9001:2015',
                desc: 'Quality Management System',
                icon: '🏅'
              },
              {
                cert: 'ISO 14001',
                desc: 'Environmental Management',
                icon: '🌱'
              },
              {
                cert: 'RoHS',
                desc: 'Hazardous Substances Compliance',
                icon: '✓'
              },
              {
                cert: 'REACH',
                desc: 'EU Chemical Registration',
                icon: '🇪🇺'
              },
              {
                cert: 'UL Certification',
                desc: 'Product Safety Standards',
                icon: '⚡'
              },
              {
                cert: 'CE Marking',
                desc: 'European Conformity',
                icon: '✓'
              },
              {
                cert: 'IEC Standards',
                desc: 'International Electrotechnical',
                icon: '🌍'
              },
              {
                cert: 'ASTM Compliant',
                desc: 'Material Testing Standards',
                icon: '🔬'
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.cert}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Innovation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Research & Development
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated R&D center employs over 50 materials scientists and engineers 
                working on next-generation conductor technologies. We invest 5% of annual 
                revenue in research and development, maintaining partnerships with leading 
                universities and research institutions worldwide.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Materials Science Lab',
                    desc: 'Advanced metallurgy and composite material research'
                  },
                  {
                    title: 'Testing Facilities',
                    desc: 'Comprehensive electrical, mechanical, and environmental testing'
                  },
                  {
                    title: 'Process Development',
                    desc: 'Continuous improvement of manufacturing processes'
                  },
                  {
                    title: 'Custom Solutions',
                    desc: 'Application-specific material development'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '50+', label: 'R&D Engineers' },
                  { number: '20+', label: 'Patents Filed' },
                  { number: '15+', label: 'Industry Awards' },
                  { number: '5+', label: 'University Partners' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Global Presence
          </h2>
          <div className="mb-12">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500">[World Map Showing Office Locations]</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'Asia Pacific',
                headquarters: 'Shanghai, China',
                coverage: 'China, Japan, Korea, Southeast Asia, Australia',
                clients: '300+'
              },
              {
                region: 'Americas',
                headquarters: 'Los Angeles, USA',
                coverage: 'USA, Canada, Mexico, South America',
                clients: '150+'
              },
              {
                region: 'Europe & Middle East',
                headquarters: 'Frankfurt, Germany',
                coverage: 'EU, UK, Middle East, Africa',
                clients: '100+'
              }
            ].map((region, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.region}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>HQ:</strong> {region.headquarters}</p>
                  <p><strong>Coverage:</strong> {region.coverage}</p>
                  <p><strong>Active Clients:</strong> <span className="text-blue-600 font-bold">{region.clients}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commitment to Sustainability
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in responsible manufacturing that protects our planet for future 
              generations. Our sustainability initiatives span energy efficiency, waste 
              reduction, and circular economy practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Energy Efficiency',
                desc: 'Solar panels power 40% of our facility',
                icon: '☀️'
              },
              {
                title: 'Waste Reduction',
                desc: '95% of production waste recycled',
                icon: '♻️'
              },
              {
                title: 'Water Conservation',
                desc: 'Closed-loop cooling systems',
                icon: '💧'
              },
              {
                title: 'Carbon Neutral',
                desc: 'Goal: Carbon neutral by 2030',
                icon: '🌱'
              }
            ].map((initiative, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
                <div className="text-4xl mb-3">{initiative.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-600">{initiative.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Partner With Raytron?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of leading companies who trust Raytron for their conductor needs. 
            Let's discuss how we can support your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact"
              className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition"
            >
              Contact Us Today
            </Link>
            <Link
              href="https://en.raytron.group/products"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}