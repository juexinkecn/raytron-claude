// app/applications/battery/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Battery Materials - Copper Strip & Nickel Tabs | Raytron',
  description: 'Precision copper and nickel clad copper strips for lithium-ion battery tabs, busbars, and energy storage systems. Ultra-thin, high-conductivity, excellent weldability.',
};

export default function BatteryApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Battery and Energy Storage Materials",
            "description": "Comprehensive guide to copper materials for battery manufacturing",
            "url": "https://en.raytron.group/applications/battery"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">
              🔋 Battery & Energy Storage
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering Next-Generation Energy Storage
            </h1>
            <p className="text-xl text-green-50 mb-8">
              Ultra-precision copper and nickel clad materials for lithium-ion batteries, 
              supercapacitors, and energy storage systems. Engineered for maximum conductivity, 
              superior weldability, and long-term reliability in demanding applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact?industry=battery"
                className="px-8 py-3 bg-white text-green-600 hover:bg-green-50 rounded-lg font-semibold transition shadow-lg"
              >
                Request Battery Samples
              </Link>
              <Link
                href="https://en.raytron.group/products/copper/copper-strip"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition"
              >
                View Battery Products
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
              { value: '500M+', label: 'Battery Tabs Annually', icon: '⚡' },
              { value: '±0.002mm', label: 'Thickness Tolerance', icon: '🎯' },
              { value: '99.99%', label: 'Copper Purity', icon: '✓' },
              { value: '200+', label: 'Battery Manufacturers', icon: '🏭' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Battery Industry Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The global battery and energy storage market is experiencing exponential growth driven 
                  by electric vehicles, renewable energy integration, and portable electronics. Modern 
                  lithium-ion batteries require ultra-precise conductor materials that enable high energy 
                  density, fast charging, and long cycle life.
                </p>
                <p>
                  Raytron specializes in precision copper strips, foils, and nickel clad copper materials 
                  optimized for battery tab welding, busbar connections, and cell interconnects. Our materials 
                  are used by leading battery manufacturers producing cells for EVs, energy storage systems, 
                  power tools, and consumer electronics worldwide.
                </p>
                <p>
                  With annual production capacity exceeding 500 million battery tabs, we serve both 
                  cylindrical and prismatic cell formats, as well as pouch cells and specialized battery 
                  configurations. Our materials meet the stringent requirements for automotive grade 
                  quality with full traceability and certification.
                </p>
              </div>
            </section>

            {/* Battery Types & Applications */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Battery Types & Applications</h2>
              <div className="space-y-6">
                {[
                  {
                    type: 'Cylindrical Cells (18650, 21700, 4680)',
                    applications: 'EV battery packs, power tools, e-bikes',
                    materials: 'Nickel tabs, copper tabs, busbar strips',
                    requirements: 'High-speed laser/ultrasonic welding compatibility, minimal contact resistance'
                  },
                  {
                    type: 'Prismatic Cells',
                    applications: 'Electric vehicles, energy storage systems',
                    materials: 'Wide copper/aluminum tabs, busbar connections',
                    requirements: 'Consistent thickness, excellent formability, high current capacity'
                  },
                  {
                    type: 'Pouch Cells',
                    applications: 'Smartphones, tablets, EVs, drones',
                    materials: 'Ultra-thin copper/aluminum tabs, custom shapes',
                    requirements: 'Ultra-thin (<0.1mm), superior weldability, no burrs'
                  },
                  {
                    type: 'Supercapacitors',
                    applications: 'Hybrid vehicles, backup power, regenerative braking',
                    materials: 'Specialty copper foils, high-surface-area materials',
                    requirements: 'Low ESR, high purity, corrosion resistance'
                  },
                  {
                    type: 'Energy Storage Systems (ESS)',
                    applications: 'Grid storage, renewable integration, microgrids',
                    materials: 'Heavy busbars, module interconnects',
                    requirements: 'High current (1000A+), thermal management, long-term reliability'
                  }
                ].map((battery, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{battery.type}</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-700">Applications:</strong>
                        <p className="text-gray-600 mt-1">{battery.applications}</p>
                      </div>
                      <div>
                        <strong className="text-gray-700">Our Materials:</strong>
                        <p className="text-gray-600 mt-1">{battery.materials}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <strong className="text-gray-700 text-sm">Technical Requirements:</strong>
                      <p className="text-gray-600 text-sm mt-1">{battery.requirements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Battery Material Solutions</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Copper Strip & Foil</h3>
                  <p className="text-gray-700 mb-6">
                    Ultra-precision rolled copper for battery tabs, current collectors, and flexible 
                    circuits. Available in thickness from 0.05mm to 0.5mm with ±0.002mm tolerance.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Ultra-Thin Tabs</h4>
                      <p className="text-sm text-gray-600">0.05-0.15mm for pouch cells</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Standard Tabs</h4>
                      <p className="text-sm text-gray-600">0.15-0.3mm for cylindrical/prismatic</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Heavy Busbars</h4>
                      <p className="text-sm text-gray-600">0.3-5mm for pack assembly</p>
                    </div>
                  </div>
                  <Link
                    href="https://en.raytron.group/products/copper/copper-strip"
                    className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                  >
                    View Copper Strip Details →
                  </Link>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nickel Clad Copper</h3>
                  <p className="text-gray-700 mb-6">
                    Combines copper's conductivity with nickel's corrosion resistance and weldability. 
                    Ideal for high-reliability battery applications requiring long cycle life.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <div>
                        <h5 className="font-semibold text-gray-900">Superior Spot Welding</h5>
                        <p className="text-sm text-gray-600">Nickel surface ensures consistent weld quality</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <div>
                        <h5 className="font-semibold text-gray-900">Corrosion Resistant</h5>
                        <p className="text-sm text-gray-600">Extended life in humid/high-temp conditions</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="https://en.raytron.group/products/nickel-clad-copper-strip"
                    className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition"
                  >
                    View NCC Products →
                  </Link>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Battery Tabs</h3>
                  <p className="text-gray-700 mb-4">
                    Pre-cut battery tabs in custom shapes and sizes, ready for assembly. Available 
                    with holes, slots, bends, and surface treatments per your specifications.
                  </p>
                  <Link
                    href="https://en.raytron.group/contact"
                    className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition"
                  >
                    Request Custom Quote →
                  </Link>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                        <th className="text-left py-3 px-4 font-semibold">Specification</th>
                        <th className="text-left py-3 px-4 font-semibold">Battery Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">Copper Purity</td>
                        <td className="py-3 px-4">≥99.99% (4N available)</td>
                        <td className="py-3 px-4">Maximum conductivity, minimal IR loss</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Thickness Tolerance</td>
                        <td className="py-3 px-4">±0.002mm (foil), ±0.01mm (strip)</td>
                        <td className="py-3 px-4">Consistent welding, predictable resistance</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Surface Roughness</td>
                        <td className="py-3 px-4">Ra ≤ 0.2μm</td>
                        <td className="py-3 px-4">Excellent weldability, clean contact</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Tensile Strength</td>
                        <td className="py-3 px-4">220-450 MPa (temper dependent)</td>
                        <td className="py-3 px-4">Mechanical durability during assembly</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Elongation</td>
                        <td className="py-3 px-4">3-40% (temper dependent)</td>
                        <td className="py-3 px-4">Formability for complex tab shapes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Contact Resistance</td>
                        <td className="py-3 px-4">&lt;0.1mΩ (after welding)</td>
                        <td className="py-3 px-4">Minimal power loss, efficient energy transfer</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Welding Compatibility</td>
                        <td className="py-3 px-4">Laser, ultrasonic, resistance welding</td>
                        <td className="py-3 px-4">Flexible manufacturing processes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Manufacturing Advantages */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Advantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Laser Welding Optimized',
                    desc: 'Surface treatments and thickness uniformity ensure consistent laser weld penetration and strength across all tabs.',
                    icon: '⚡'
                  },
                  {
                    title: 'High-Speed Compatible',
                    desc: 'Materials engineered for automated high-speed assembly lines with minimal defect rates even at 60+ PPM.',
                    icon: '🚀'
                  },
                  {
                    title: 'Burr-Free Edges',
                    desc: 'Precision cutting and edge treatment prevent short circuits and ensure safe handling during assembly.',
                    icon: '✂️'
                  },
                  {
                    title: 'Automotive Grade',
                    desc: 'Full traceability, PPAP documentation, and compliance with automotive quality standards (IATF 16949).',
                    icon: '🚗'
                  },
                  {
                    title: 'Custom Pre-Processing',
                    desc: 'Available with pre-cut shapes, stamping, bending, holes, or surface treatments to reduce your processing steps.',
                    icon: '⚙️'
                  },
                  {
                    title: 'Consistency Guarantee',
                    desc: 'Lot-to-lot consistency maintained through strict process controls and 100% inline inspection.',
                    icon: '📊'
                  }
                ].map((advantage, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-3xl">{advantage.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                      <p className="text-gray-700 text-sm">{advantage.desc}</p>
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
                    q: 'What is the minimum thickness you can provide for battery tabs?',
                    a: 'We can produce copper foils as thin as 0.05mm (50μm) with maintained dimensional accuracy. For ultra-thin applications, we recommend 0.08-0.1mm for optimal balance of conductivity and mechanical strength.'
                  },
                  {
                    q: 'Can you provide pre-cut battery tabs in custom shapes?',
                    a: 'Yes, we offer precision die-cutting, laser cutting, or stamping services to produce tabs in your exact specifications including holes, slots, notches, and bends. This can significantly reduce your assembly time and costs.'
                  },
                  {
                    q: 'What surface treatments are available for battery tabs?',
                    a: 'We offer: bare copper (with anti-oxidation treatment), tin plating, nickel plating, and gold plating. For most battery applications, nickel-plated or nickel-clad copper provides optimal welding characteristics and corrosion resistance.'
                  },
                  {
                    q: 'Do you support automotive-grade quality requirements?',
                    a: 'Absolutely. We provide full PPAP documentation, IMDS declarations, conflict minerals reporting, and maintain IATF 16949 certification. All materials include complete traceability and test reports.'
                  },
                  {
                    q: 'What welding processes are your materials compatible with?',
                    a: 'Our materials are optimized for laser welding, ultrasonic welding, and resistance spot welding. We can provide welding parameters and process recommendations based on your specific equipment and cell design.'
                  },
                  {
                    q: 'Can you accommodate small quantity orders for prototyping?',
                    a: 'Yes, we support prototype quantities starting from 50kg for standard specifications. For custom materials, minimum quantities may vary. Contact us to discuss your prototype requirements.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 group">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
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
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-8 shadow-xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Get Battery Samples</h3>
              <p className="mb-6 text-green-50">
                Request free battery tab samples with full technical specifications
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
                />
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                  <option value="" className="text-gray-900">Battery Type</option>
                  <option value="cylindrical" className="text-gray-900">Cylindrical (18650/21700)</option>
                  <option value="prismatic" className="text-gray-900">Prismatic Cells</option>
                  <option value="pouch" className="text-gray-900">Pouch Cells</option>
                  <option value="ess" className="text-gray-900">Energy Storage (ESS)</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Tab specifications (thickness, width, surface treatment...)"
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 font-semibold py-3 rounded hover:bg-green-50 transition"
                >
                  Request Samples
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-green-50">
                <p>✓ Automotive-grade quality</p>
                <p>✓ Full traceability & PPAP</p>
                <p>✓ Welding parameters included</p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Battery Resources</h3>
              <div className="space-y-3">
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-green-500 transition"
                >
                  <span className="font-medium text-gray-700">Battery Tab Catalog</span>
                  <span className="text-green-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-green-500 transition"
                >
                  <span className="font-medium text-gray-700">Welding Guide</span>
                  <span className="text-green-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-green-500 transition"
                >
                  <span className="font-medium text-gray-700">Material Properties</span>
                  <span className="text-green-600">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-green-500 transition"
                >
                  <span className="font-medium text-gray-700">Case Studies</span>
                  <span className="text-green-600">↓ PDF</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Products</h3>
              <div className="space-y-2">
                <Link href="https://en.raytron.group/products/copper/copper-strip" className="block text-green-600 hover:underline">
                  → Copper Strip & Foil
                </Link>
                <Link href="https://en.raytron.group/products/nickel-clad-copper-strip" className="block text-green-600 hover:underline">
                  → Nickel Clad Copper
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-ribbon-wire" className="block text-green-600 hover:underline">
                  → Copper Ribbon Wire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Enhance Your Battery Performance?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Partner with Raytron for precision battery materials that enable higher energy density, 
            faster charging, and extended cycle life. Contact our battery specialists today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact?industry=battery"
              className="px-8 py-3 bg-white text-green-600 hover:bg-green-50 rounded-lg font-semibold transition"
            >
              Contact Battery Team
            </Link>
            <Link
              href="https://en.raytron.group/products/copper/copper-strip"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition"
            >
              View All Battery Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}