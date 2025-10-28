// app/applications/solar/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Solar Energy Materials - PV Ribbons & Conductors | Raytron',
  description: 'High-efficiency photovoltaic ribbons and solar interconnect materials for crystalline silicon, PERC, TOPCon, and HJT solar cells. 25+ year reliability, IEC certified.',
};

export default function SolarApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Solar Energy Materials and PV Ribbons",
            "description": "Comprehensive guide to photovoltaic materials for solar panel manufacturing",
            "url": "https://en.raytron.group/applications/solar",
            "publisher": {
              "@type": "Organization",
              "name": "Raytron",
              "url": "https://en.raytron.group"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">
              ☀️ Solar Energy Industry
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering the Solar Revolution
            </h1>
            <p className="text-xl text-amber-50 mb-8">
              High-performance photovoltaic ribbons and interconnect materials engineered for 
              maximum efficiency, long-term reliability, and compatibility with all major solar 
              cell technologies including PERC, TOPCon, HJT, and IBC.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact?industry=solar"
                className="px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition shadow-lg"
              >
                Request PV Samples
              </Link>
              <Link
                href="https://en.raytron.group/products/photovoltaic-ribbon"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition"
              >
                View PV Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15GW+', label: 'Annual Solar Capacity Served', icon: '⚡' },
              { value: '25+ Years', label: 'Product Lifespan', icon: '🛡️' },
              { value: '<2%', label: 'Power Loss', icon: '📊' },
              { value: '100+', label: 'Solar Manufacturers', icon: '🏭' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-orange-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Industry Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solar Industry Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The solar photovoltaic industry is experiencing unprecedented growth as the world 
                  transitions to renewable energy. Modern solar modules require high-quality interconnect 
                  materials that can deliver maximum power output while withstanding 25+ years of 
                  exposure to harsh environmental conditions.
                </p>
                <p>
                  Raytron has been at the forefront of photovoltaic ribbon innovation for over 15 years, 
                  supplying leading solar manufacturers with materials that enable higher efficiency, 
                  improved reliability, and lower levelized cost of energy (LCOE). Our PV ribbons are 
                  used in crystalline silicon solar cells, from conventional Al-BSF to advanced PERC, 
                  TOPCon, HJT, and IBC technologies.
                </p>
                <p>
                  With annual production capacity supporting over 15GW of solar module manufacturing, 
                  we serve both established solar giants and innovative startups pushing the boundaries 
                  of cell efficiency. Our materials are certified to international standards including 
                  IEC 61215 and UL 1703, ensuring compliance with global quality requirements.
                </p>
              </div>
            </section>

            {/* Solar Cell Technologies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compatible Solar Technologies</h2>
              <div className="space-y-6">
                {[
                  {
                    tech: 'PERC (Passivated Emitter Rear Cell)',
                    efficiency: '22-23%',
                    description: 'Industry standard with rear surface passivation for higher efficiency. Our ribbons optimize current collection while minimizing shading.',
                    materials: 'Standard tabbing ribbon, busbar ribbon'
                  },
                  {
                    tech: 'TOPCon (Tunnel Oxide Passivated Contact)',
                    efficiency: '24-25%',
                    description: 'Next-generation technology with ultra-thin oxide layer. Requires ribbons with excellent solderability and low-temperature processing compatibility.',
                    materials: 'Low-temperature solder ribbon, ultra-thin tabbing'
                  },
                  {
                    tech: 'HJT (Heterojunction Technology)',
                    efficiency: '25-26%',
                    description: 'Premium efficiency cells combining crystalline and amorphous silicon. Demands ribbons compatible with low-temperature (<200°C) processing.',
                    materials: 'Low-temp solder ribbon, specialized interconnects'
                  },
                  {
                    tech: 'IBC (Interdigitated Back Contact)',
                    efficiency: '25-27%',
                    description: 'Highest efficiency technology with all contacts on rear surface. Requires specialized ribbons for back-contact interconnection.',
                    materials: 'Custom back-contact ribbons, specialized busbars'
                  },
                  {
                    tech: 'Multi-Busbar (MBB) & Shingled',
                    efficiency: 'Variable',
                    description: 'Advanced module designs using 9-16 busbars or shingled cell technology. Requires ultra-narrow ribbons to minimize shading losses.',
                    materials: 'Ultra-thin ribbon (0.3-0.8mm width), specialized interconnects'
                  }
                ].map((tech, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{tech.tech}</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        {tech.efficiency}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{tech.description}</p>
                    <div className="text-sm text-gray-600">
                      <strong>Recommended Materials:</strong> {tech.materials}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solar Product Solutions</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-orange-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Photovoltaic Ribbon</h3>
                  <p className="text-gray-700 mb-6">
                    Our flagship product for solar cell interconnection. Available in various widths, 
                    thicknesses, and coating options to match your specific cell design and efficiency targets.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tabbing Ribbon</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Width: 1.0-2.5mm for standard cells</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Thickness: 0.12-0.20mm</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Cell-to-cell series connection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Optimized for automatic stringing</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Busbar Ribbon</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Width: 3.0-6.0mm for high current</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Thickness: 0.15-0.25mm</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>String-to-junction box connection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>Low resistance for maximum power</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    href="https://en.raytron.group/products/photovoltaic-ribbon"
                    className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition"
                  >
                    View PV Ribbon Details →
                  </Link>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Copper Strip & Foil</h3>
                  <p className="text-gray-700 mb-4">
                    Precision copper materials for back-contact connections, module busbars, and 
                    specialized interconnect applications in advanced solar technologies.
                  </p>
                  <Link
                    href="https://en.raytron.group/products/copper/copper-strip"
                    className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition"
                  >
                    View Copper Products →
                  </Link>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Silver Clad Copper</h3>
                  <p className="text-gray-700 mb-4">
                    Premium conductivity for high-efficiency cells requiring minimal resistance losses. 
                    Ideal for IBC and other premium solar technologies.
                  </p>
                  <Link
                    href="https://en.raytron.group/products/silver-clad-copper-wire-rod"
                    className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition"
                  >
                    View Silver Products →
                  </Link>
                </div>
              </div>
            </section>

            {/* Technical Performance */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Performance Standards</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                        <th className="text-left py-3 px-4 font-semibold">Specification</th>
                        <th className="text-left py-3 px-4 font-semibold">Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">Copper Purity</td>
                        <td className="py-3 px-4">≥99.95%</td>
                        <td className="py-3 px-4">Maximum conductivity</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Solderability</td>
                        <td className="py-3 px-4">≥95% wetting</td>
                        <td className="py-3 px-4">Reliable interconnection</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Peel Strength</td>
                        <td className="py-3 px-4">≥2.0 N/mm</td>
                        <td className="py-3 px-4">Long-term adhesion</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Thermal Cycling</td>
                        <td className="py-3 px-4">200 cycles (-40°C to +85°C)</td>
                        <td className="py-3 px-4">25+ year reliability</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Damp Heat</td>
                        <td className="py-3 px-4">1000h @ 85°C/85%RH</td>
                        <td className="py-3 px-4">Corrosion resistance</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Resistance</td>
                        <td className="py-3 px-4">&lt;0.1 mΩ/cm</td>
                        <td className="py-3 px-4">Minimal power loss</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Standards</td>
                        <td className="py-3 px-4">IEC 61215, UL 1703</td>
                        <td className="py-3 px-4">Global certification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Raytron for Solar?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Proven Reliability',
                    desc: '15+ years supplying top solar manufacturers. Our ribbons have proven performance in millions of installed modules worldwide.',
                    icon: '✓'
                  },
                  {
                    title: 'Technology Compatibility',
                    desc: 'Optimized solutions for all cell technologies from PERC to TOPCon, HJT, and IBC. We keep pace with industry innovation.',
                    icon: '🔬'
                  },
                  {
                    title: 'Quality Assurance',
                    desc: '100% testing and inspection. Every batch certified with complete traceability and test reports for compliance.',
                    icon: '🏅'
                  },
                  {
                    title: 'Technical Support',
                    desc: 'Dedicated solar industry specialists provide application engineering, process optimization, and troubleshooting support.',
                    icon: '🛠️'
                  },
                  {
                    title: 'Consistent Supply',
                    desc: 'Large-scale production capacity ensures reliable supply for your volume requirements with flexible delivery schedules.',
                    icon: '📦'
                  },
                  {
                    title: 'Competitive Pricing',
                    desc: 'Optimized manufacturing processes deliver high quality at competitive prices, improving your module cost structure.',
                    icon: '💰'
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What coating options are available for PV ribbons?',
                    a: 'We offer tin coating, lead-free solder coating, and silver-plated options. Coating thickness can be customized from 3-15μm based on your soldering process requirements and cost targets.'
                  },
                  {
                    q: 'Can your ribbons be used with automated stringing machines?',
                    a: 'Yes, our ribbons are specifically engineered for compatibility with all major stringing equipment brands. We maintain tight dimensional tolerances and consistent quality for reliable automatic processing.'
                  },
                  {
                    q: 'What is the typical lead time for PV ribbon orders?',
                    a: 'Standard products: 2-3 weeks. Custom specifications: 4-6 weeks. We maintain inventory of popular sizes for faster delivery and can accommodate urgent orders based on current production schedules.'
                  },
                  {
                    q: 'Do you provide material certification and test reports?',
                    a: 'Yes, every shipment includes complete material certification, test reports (peel strength, solderability, conductivity), and RoHS/REACH compliance documentation. We maintain full traceability for all batches.'
                  },
                  {
                    q: 'Can you develop custom ribbon specifications for new cell technologies?',
                    a: 'Absolutely. Our R&D team works closely with solar manufacturers developing next-generation cells. We can customize width, thickness, coating, and material composition to optimize for your specific technology.'
                  },
                  {
                    q: 'What minimum order quantities do you require?',
                    a: 'MOQ varies by product: Standard ribbons start at 500kg. Custom specifications typically require 1000kg minimum. We can provide samples for testing before large orders.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 group">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 text-white rounded-2xl p-8 shadow-xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Get Solar Samples</h3>
              <p className="mb-6 text-orange-50">
                Request free PV ribbon samples with full technical datasheet and test reports
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:border-white"
                />
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                  <option value="" className="text-gray-900">Cell Technology</option>
                  <option value="perc" className="text-gray-900">PERC</option>
                  <option value="topcon" className="text-gray-900">TOPCon</option>
                  <option value="hjt" className="text-gray-900">HJT</option>
                  <option value="ibc" className="text-gray-900">IBC</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Ribbon specifications needed (width, thickness, coating...)"
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-orange-100 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-orange-600 font-semibold py-3 rounded hover:bg-orange-50 transition"
                >
                  Request Samples
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-orange-50">
                <p>✓ Free technical consultation</p>
                <p>✓ Full test reports included</p>
                <p>✓ Fast worldwide shipping</p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solar Resources</h3>
              <div className="space-y-3">
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-orange-500 transition"
                >
                  <span className="font-medium text-gray-700">PV Ribbon Catalog</span>
                  <span className="text-orange-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-orange-500 transition"
                >
                  <span className="font-medium text-gray-700">Solar Cell Guide</span>
                  <span className="text-orange-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-orange-500 transition"
                >
                  <span className="font-medium text-gray-700">Test Reports</span>
                  <span className="text-orange-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-orange-500 transition"
                >
                  <span className="font-medium text-gray-700">Case Studies</span>
                  <span className="text-orange-600">↓ PDF</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Products</h3>
              <div className="space-y-2">
                <Link href="https://en.raytron.group/products/photovoltaic-ribbon" className="block text-orange-600 hover:underline">
                  → Photovoltaic Ribbon
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-strip" className="block text-orange-600 hover:underline">
                  → Copper Strip & Foil
                </Link>
                <Link href="https://en.raytron.group/products/silver-clad-copper-wire-rod" className="block text-orange-600 hover:underline">
                  → Silver Clad Copper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Optimize Your Solar Module Performance?
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            Partner with Raytron for high-quality PV ribbons that maximize efficiency and ensure 
            25+ year reliability. Contact our solar specialists today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact?industry=solar"
              className="px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition"
            >
              Contact Solar Team
            </Link>
            <Link
              href="https://en.raytron.group/products/photovoltaic-ribbon"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition"
            >
              View All PV Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}