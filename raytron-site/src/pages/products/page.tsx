// app/products/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Metal Composite Materials & Conductors | Raytron Products',
  description: 'Comprehensive range of copper, aluminum, nickel, and silver composite materials. Specialized conductors for solar, battery, automotive, and industrial applications. ISO certified manufacturer.',
};

export default function ProductsPage() {
  const productCategories = [
    {
      id: 'copper',
      name: 'Copper Products',
      description: 'High-purity copper conductors for maximum electrical performance',
      icon: '🔶',
      color: 'from-orange-600 to-red-600',
      products: [
        { name: 'Copper Round Wire', url: 'https://en.raytron.group/products/copper/copper-round-wire', desc: 'High conductivity round copper wire' },
        { name: 'Copper Flat Wire', url: 'https://en.raytron.group/products/copper/copper-flat-wire', desc: 'Precision flat copper conductors' },
        { name: 'Copper Strip', url: 'https://en.raytron.group/products/copper/copper-strip', desc: 'Battery tabs and busbars' },
        { name: 'Copper Foil', url: 'https://en.raytron.group/products/copper/copper-foil', desc: 'Ultra-thin copper foils for FPC' },
        { name: 'Copper Ribbon Wire', url: 'https://en.raytron.group/products/copper/copper-ribbon-wire', desc: 'Micro flat copper conductors' }
      ]
    },
    {
      id: 'aluminum',
      name: 'Aluminum Products',
      description: 'Lightweight aluminum solutions for cost-effective applications',
      icon: '⚪',
      color: 'from-gray-400 to-gray-600',
      products: [
        { name: 'Aluminum Strip', url: 'https://en.raytron.group/products/aluminum/aluminum-strip', desc: 'Aluminum strips for various applications' },
        { name: 'Aluminum Foil', url: 'https://en.raytron.group/products/aluminum/aluminum-foil', desc: 'Thin aluminum foil products' },
        { name: 'Aluminum Flat Wire', url: 'https://en.raytron.group/products/aluminum/aluminum-flat-wire', desc: 'Flat aluminum conductors' },
        { name: 'Aluminum Ribbon Wire', url: 'https://en.raytron.group/products/aluminum/aluminum-ribbon-wire', desc: 'Micro flat aluminum wire' }
      ]
    },
    {
      id: 'cca',
      name: 'Copper Clad Aluminum',
      description: 'Optimal balance of conductivity and weight reduction',
      icon: '🟠',
      color: 'from-blue-600 to-blue-800',
      featured: true,
      products: [
        { name: 'CCA Round Wire', url: 'https://en.raytron.group/products/copper-clad-aluminum-round-wire', desc: 'Lightweight CCA conductors' },
        { name: 'CCA Flat Wire', url: 'https://en.raytron.group/products/copper-clad-aluminum-flat-wire', desc: 'CCA flat conductors' },
        { name: 'CCA Strip', url: 'https://en.raytron.group/products/copper-clad-aluminum-strip', desc: 'CCA strips for cables' },
        { name: 'CCA Foil', url: 'https://en.raytron.group/products/copper-clad-aluminum-foil', desc: 'Thin CCA foil materials' },
        { name: 'CCA Ribbon Wire', url: 'https://en.raytron.group/products/copper-clad-aluminum-ribbon-wire', desc: 'Micro flat CCA conductors' },
        { name: 'CCA Stranded Cable', url: 'https://en.raytron.group/products/copper-clad-aluminum-stranded-cable', desc: 'Flexible CCA cables' }
      ]
    },
    {
      id: 'ncc',
      name: 'Nickel Clad Copper',
      description: 'Corrosion-resistant composites for harsh environments',
      icon: '🟢',
      color: 'from-emerald-700 to-teal-800',
      featured: true,
      products: [
        { name: 'NCC Wire & Rod', url: 'https://en.raytron.group/products/nickel-clad-copper-wire-rod', desc: 'High-temp nickel clad copper' },
        { name: 'NCC Flat Wire', url: 'https://en.raytron.group/products/nickel-clad-copper-flat-wire', desc: 'Corrosion-resistant flat wire' },
        { name: 'NCC Strip', url: 'https://en.raytron.group/products/nickel-clad-copper-strip', desc: 'NCC strips and ribbons' },
        { name: 'NCC Foil', url: 'https://en.raytron.group/products/nickel-clad-copper-foil', desc: 'Thin NCC foil materials' },
        { name: 'NCC Ribbon Wire', url: 'https://en.raytron.group/products/nickel-clad-copper-ribbon-wire', desc: 'Micro flat NCC conductors' },
        { name: 'NCC Stranded Cable', url: 'https://en.raytron.group/products/nickel-clad-copper-stranded-cable', desc: 'Flexible NCC cables' }
      ]
    },
    {
      id: 'ccs',
      name: 'Copper Clad Steel',
      description: 'High strength conductors with excellent tensile properties',
      icon: '⚫',
      color: 'from-slate-600 to-slate-800',
      products: [
        { name: 'CCS Flat Wire', url: 'https://en.raytron.group/products/copper-clad-steel-flat-wire', desc: 'High-strength flat conductors' },
        { name: 'CCS Strip', url: 'https://en.raytron.group/products/copper-clad-steel-strip', desc: 'CCS strips for cables' },
        { name: 'CCS Foil', url: 'https://en.raytron.group/products/copper-clad-steel-foil', desc: 'CCS foil materials' },
        { name: 'CCS Ribbon Wire', url: 'https://en.raytron.group/products/copper-clad-steel-ribbon-wire', desc: 'Micro flat CCS wire' },
        { name: 'CCS Stranded Cable', url: 'https://en.raytron.group/products/copper-clad-steel-stranded-cable', desc: 'High-strength cables' }
      ]
    },
    {
      id: 'scc',
      name: 'Silver Clad Copper',
      description: 'Premium conductivity for high-frequency applications',
      icon: '⚪',
      color: 'from-gray-300 to-gray-500',
      products: [
        { name: 'SCC Wire & Rod', url: 'https://en.raytron.group/products/silver-clad-copper-wire-rod', desc: 'Premium silver-copper wire' },
        { name: 'SCC Flat Wire', url: 'https://en.raytron.group/products/silver-clad-copper-flat-wire', desc: 'High-frequency flat wire' },
        { name: 'SCC Strip', url: 'https://en.raytron.group/products/silver-clad-copper-strip', desc: 'Silver clad copper strips' },
        { name: 'SCC Foil', url: 'https://en.raytron.group/products/silver-clad-copper-foil', desc: 'Premium SCC foil' },
        { name: 'SCC Ribbon Wire', url: 'https://en.raytron.group/products/silver-clad-copper-ribbon-wire', desc: 'Micro flat SCC wire' }
      ]
    },
    {
      id: 'specialty',
      name: 'Specialty Products',
      description: 'Specialized materials for unique applications',
      icon: '⭐',
      color: 'from-amber-500 to-orange-600',
      featured: true,
      products: [
        { name: 'Photovoltaic Ribbon', url: 'https://en.raytron.group/products/photovoltaic-ribbon', desc: 'Solar cell interconnect ribbons' },
        { name: 'Enameled Wire', url: 'https://en.raytron.group/products/enameled-wire', desc: 'Insulated winding wire' },
        { name: 'Enameled Flat Wire', url: 'https://en.raytron.group/products/enameled-flat-wire', desc: 'Flat enameled conductors' },
        { name: 'Enameled Strip', url: 'https://en.raytron.group/products/enameled-strip', desc: 'Insulated copper strips' },
        { name: 'Enameled Ribbon Wire', url: 'https://en.raytron.group/products/enameled-ribbon-wire', desc: 'Micro enameled wire' },
        { name: 'Nickel Flat Wire', url: 'https://en.raytron.group/products/nickel/nickel-flat-wire', desc: 'Pure nickel conductors' },
        { name: 'Silver Products', url: 'https://en.raytron.group/products/silver/silver-flat-wire', desc: 'High-purity silver materials' }
      ]
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
            "name": "Metal Composite Materials & Conductors",
            "url": "https://en.raytron.group/products",
            "description": "Comprehensive range of copper, aluminum, and composite metal conductors for industrial applications",
            "provider": {
              "@type": "Organization",
              "name": "Raytron",
              "url": "https://en.raytron.group"
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
              Metal Composite Materials & Advanced Conductors
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Raytron manufactures a comprehensive range of copper, aluminum, nickel, and silver 
              composite materials for solar energy, battery systems, automotive, electronics, and 
              industrial applications. With over 30 years of expertise, we deliver precision-engineered 
              conductors that meet the most demanding specifications worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Request Quote
              </Link>
              <Link
                href="https://en.raytron.group/resources"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-semibold transition"
              >
                Download Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {productCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap transition"
              >
                {cat.icon} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Raytron Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our metal composite materials combine superior electrical properties with cost-effective 
              manufacturing, delivering optimal performance for demanding industrial applications.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: '30+ Years Expertise',
                desc: 'Three decades of specialized manufacturing experience',
                icon: '🏆'
              },
              {
                title: 'ISO 9001 Certified',
                desc: 'Certified quality management ensuring consistency',
                icon: '✓'
              },
              {
                title: 'Custom Solutions',
                desc: 'Tailored specifications for unique requirements',
                icon: '⚙️'
              },
              {
                title: 'Global Distribution',
                desc: 'Serving 50+ countries with reliable delivery',
                icon: '🌍'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {productCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 text-white mb-8`}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-4xl">{category.icon}</span>
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                      {category.featured && (
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Featured</span>
                      )}
                    </div>
                    <p className="text-lg text-white/90">{category.description}</p>
                  </div>
                  <Link
                    href="https://en.raytron.group/contact"
                    className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <Link
                    key={idx}
                    href={product.url}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition group border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.desc}</p>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our metal composite materials power innovation across multiple industries, 
              from renewable energy to automotive and aerospace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Solar Energy', url: 'https://en.raytron.group/applications/solar', icon: '☀️' },
              { name: 'Battery & Energy Storage', url: 'https://en.raytron.group/applications/battery', icon: '🔋' },
              { name: 'Cable & Wire', url: 'https://en.raytron.group/applications/cable', icon: '🔌' },
              { name: 'Automotive & EV', url: 'https://en.raytron.group/applications/automotive', icon: '🚗' },
              { name: 'Electronics', url: 'https://en.raytron.group/applications/electronics', icon: '💻' },
              { name: 'Medical Devices', url: 'https://en.raytron.group/applications/medical', icon: '🏥' },
              { name: 'Aerospace & Defense', url: 'https://en.raytron.group/applications/military', icon: '✈️' },
              { name: 'Industrial Equipment', url: 'https://en.raytron.group/applications', icon: '🏭' }
            ].map((app, idx) => (
              <Link
                key={idx}
                href={app.url}
                className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition text-center group"
              >
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {app.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Need Technical Assistance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our engineering team provides comprehensive technical support, from material 
                selection to custom specification development. We help you find the optimal 
                conductor solution for your specific application requirements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Material selection guidance',
                  'Custom specification development',
                  'Application engineering support',
                  'Quality certification documentation',
                  'Performance testing and validation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-blue-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://en.raytron.group/contact"
                className="inline-block px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition"
              >
                Contact Technical Team
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Request Product Samples</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                  <option value="" className="text-gray-900">Select Product Category</option>
                  <option value="cca" className="text-gray-900">Copper Clad Aluminum</option>
                  <option value="ncc" className="text-gray-900">Nickel Clad Copper</option>
                  <option value="pv" className="text-gray-900">Photovoltaic Ribbon</option>
                  <option value="copper" className="text-gray-900">Copper Products</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Application Details"
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-900 font-semibold py-3 rounded hover:bg-blue-50 transition"
                >
                  Request Samples
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What are metal composite materials and why are they used?',
                a: 'Metal composite materials combine the beneficial properties of two or more metals through metallurgical bonding. For example, Copper Clad Aluminum (CCA) combines copper\'s excellent conductivity with aluminum\'s light weight and cost-effectiveness. These composites offer optimized performance, reduced weight, and cost savings compared to single-metal alternatives while maintaining required electrical and mechanical properties.'
              },
              {
                q: 'What is the difference between Copper Clad Aluminum (CCA) and pure copper wire?',
                a: 'CCA features an aluminum core with a metallurgically bonded copper cladding, offering 30-40% weight reduction and significant cost savings compared to pure copper. While pure copper provides slightly higher conductivity, CCA maintains excellent electrical performance (≥40% IACS) and is ideal for applications where weight and cost are critical factors, such as power cables and communication cables.'
              },
              {
                q: 'Which industries use Raytron\'s metal composite materials?',
                a: 'Our materials serve diverse industries including solar energy (PV ribbons), battery and energy storage (battery tabs), automotive and electric vehicles (lightweight conductors), cable and wire manufacturing, electronics (flexible circuits), medical devices, and aerospace applications. Each industry benefits from specific material properties suited to their requirements.'
              },
              {
                q: 'Can you provide custom specifications for special applications?',
                a: 'Yes, we specialize in custom material specifications. Our engineering team works closely with clients to develop conductors with specific dimensions, cladding ratios, surface treatments, and mechanical properties. We can customize thickness, width, temper, coating, and other parameters to meet your exact application requirements.'
              },
              {
                q: 'What quality certifications do your products have?',
                a: 'All Raytron products are manufactured under ISO 9001:2015 certified quality management systems. Our materials comply with international standards including IEC, ASTM, JIS, and EN specifications. We provide comprehensive test reports, RoHS compliance certification, and REACH registration documentation with every order.'
              },
              {
                q: 'What is the typical lead time for orders?',
                a: 'Lead times vary by product type and order quantity. Standard products typically ship within 2-4 weeks. Custom specifications require 4-8 weeks depending on complexity. We maintain inventory of popular items for faster delivery. Contact our sales team for specific lead times on your required products and quantities.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Material Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our technical team is ready to help you select the optimal conductor for your application. 
            Get a custom quote or request product samples today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Get Custom Quote
            </Link>
            <Link
              href="https://en.raytron.group/resources"
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-semibold transition"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
