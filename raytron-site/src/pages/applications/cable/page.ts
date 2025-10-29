// app/applications/cable/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Cable & Wire Conductors - CCA & Copper Solutions | Raytron',
  description: 'Copper Clad Aluminum and copper conductors for power cables, communication cables, and building wire. 30-40% weight reduction, IEC 60228 certified.',
};

export default function CableApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cable and Wire Industry Conductors",
            "url": "https://en.raytron.group/applications/cable"
          })
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">
              🔌 Cable & Wire Industry
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Lightweight Conductors for Modern Infrastructure
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Copper Clad Aluminum and copper conductors engineered for power distribution, 
              communication networks, and building wire. Achieve 30-40% weight reduction while 
              maintaining excellent electrical performance and cost-effectiveness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://en.raytron.group/contact?industry=cable" className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition shadow-lg">
                Request CCA Samples
              </Link>
              <Link href="https://en.raytron.group/products/copper-clad-aluminum-round-wire" className="px-8 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition">
                View Cable Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Tons Annually', icon: '📦' },
              { value: '30-40%', label: 'Weight Reduction', icon: '⚖️' },
              { value: '60%', label: 'Cost Savings', icon: '💰' },
              { value: 'IEC 60228', label: 'Certified', icon: '✓' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cable Industry Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                The cable and wire industry is experiencing significant transformation as manufacturers 
                seek lightweight, cost-effective alternatives to pure copper conductors. Rising copper 
                prices and the need for easier installation have driven adoption of innovative composite 
                materials that maintain performance while reducing weight and cost.
              </p>
              <p className="text-lg text-gray-700">
                Raytron's Copper Clad Aluminum (CCA) conductors have become the material of choice for 
                power distribution cables, building wire, and communication infrastructure. With over 
                10,000 tons annual capacity and IEC 60228 certification, we serve leading cable manufacturers 
                across 50+ countries, enabling them to deliver competitive, high-quality cable products.
              </p>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cable Applications</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Power Distribution Cables',
                    desc: 'Medium and low voltage power cables for residential, commercial, and industrial distribution networks. CCA reduces installation costs and structural requirements.',
                    products: 'CCA Round Wire, CCA Stranded Cable'
                  },
                  {
                    title: 'Building Wire (THHN/THWN)',
                    desc: 'Internal building wiring for electrical circuits, lighting, and HVAC systems. Lightweight conductors ease installation in tight spaces.',
                    products: 'CCA Wire, Enameled CCA Wire'
                  },
                  {
                    title: 'Communication Cables',
                    desc: 'Coaxial cables, data cables, and telecommunication infrastructure. CCA provides optimal signal transmission with reduced weight.',
                    products: 'CCA Round Wire, CCA Flat Wire'
                  },
                  {
                    title: 'Flexible Cords & Extension Cables',
                    desc: 'Power cords for appliances, tools, and portable equipment. Reduced weight improves handling and flexibility.',
                    products: 'CCA Stranded Cable, Flexible CCA Wire'
                  },
                  {
                    title: 'Overhead Power Lines',
                    desc: 'Aerial cables for power transmission and distribution. Significant weight reduction reduces structural load on poles and towers.',
                    products: 'CCA Stranded Cable, ACSR with CCA'
                  }
                ].map((app, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                    <p className="text-gray-700 mb-3">{app.desc}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      Products: {app.products}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Products */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Solutions</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Copper Clad Aluminum (CCA)</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 30-40% lighter than pure copper</li>
                        <li>• 60% cost savings on material</li>
                        <li>• Excellent electrical conductivity (≥40% IACS)</li>
                        <li>• Compatible with standard processes</li>
                        <li>• Proven reliability worldwide</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Available Formats</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Round wire: 0.5-12.0mm diameter</li>
                        <li>• Flat wire for specialized cables</li>
                        <li>• Stranded cable configurations</li>
                        <li>• Custom specifications available</li>
                      </ul>
                    </div>
                  </div>
                  <Link href="https://en.raytron.group/products/copper-clad-aluminum-round-wire" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                    View CCA Products →
                  </Link>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enameled Wire</h3>
                  <p className="text-gray-700 mb-4">
                    Insulated winding wire for transformers, motors, and electromagnetic coils. 
                    Available in copper and CCA with various insulation grades.
                  </p>
                  <Link href="https://en.raytron.group/products/enameled-wire" className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition">
                    View Enameled Wire →
                  </Link>
                </div>
              </div>
            </section>

            {/* Technical Specs */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-gray-50 rounded-xl p-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">Parameter</th>
                      <th className="text-left py-3 px-4">CCA Specification</th>
                      <th className="text-left py-3 px-4">Pure Copper (Comparison)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Conductivity</td>
                      <td className="py-3 px-4 font-semibold">≥40% IACS</td>
                      <td className="py-3 px-4">100% IACS</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Density</td>
                      <td className="py-3 px-4 font-semibold">3.63 g/cm³</td>
                      <td className="py-3 px-4">8.89 g/cm³</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Weight Comparison</td>
                      <td className="py-3 px-4 font-semibold">60% lighter</td>
                      <td className="py-3 px-4">Baseline</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Tensile Strength</td>
                      <td className="py-3 px-4 font-semibold">≥120 MPa</td>
                      <td className="py-3 px-4">220 MPa</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Standards</td>
                      <td className="py-3 px-4 font-semibold" colSpan={2}>IEC 60228, ASTM B566, GB/T 3953</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQs</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Is CCA suitable for all cable applications?',
                    a: 'CCA is ideal for most power distribution and communication cables. However, it may not be suitable for applications requiring very high conductivity (>60% IACS) or extreme mechanical stress. Consult our engineers for specific application guidance.'
                  },
                  {
                    q: 'What are the key advantages of CCA over pure copper?',
                    a: '30-40% weight reduction reduces shipping and installation costs. 60% material cost savings improve profit margins. Lighter cables are easier to handle and install. Proven performance in millions of installations worldwide.'
                  },
                  {
                    q: 'How does CCA perform in long-term installations?',
                    a: 'CCA has proven reliability in 20+ year installations. The copper cladding provides natural corrosion protection. Regular testing shows stable electrical performance over decades. Warranty terms match or exceed pure copper cables.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 group">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Request CCA Samples</h3>
              <p className="mb-6 text-blue-50">Get free samples with technical specifications</p>
              <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:border-white" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:border-white" />
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                  <option value="" className="text-gray-900">Cable Type</option>
                  <option value="power" className="text-gray-900">Power Cables</option>
                  <option value="building" className="text-gray-900">Building Wire</option>
                  <option value="comm" className="text-gray-900">Communication</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea placeholder="Requirements" rows={3} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:border-white" />
                <button type="submit" className="w-full bg-white text-blue-600 font-semibold py-3 rounded hover:bg-blue-50 transition">
                  Request Samples
                </button>
              </form>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cable Resources</h3>
              <div className="space-y-3">
                <Link href="https://en.raytron.group/resources" className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-blue-500 transition">
                  <span className="font-medium text-gray-700">CCA Catalog</span>
                  <span className="text-blue-600">↓ PDF</span>
                </Link>
                <Link href="https://en.raytron.group/resources" className="flex items-center justify-between p-3 bg-white rounded border border-gray-200 hover:border-blue-500 transition">
                  <span className="font-medium text-gray-700">Installation Guide</span>
                  <span className="text-blue-600">↓ PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Reduce Cable Weight & Costs by 30-40%</h2>
          <p className="text-xl text-blue-50 mb-8">
            Switch to Raytron CCA conductors and enjoy significant savings without compromising performance.
          </p>
          <Link href="https://en.raytron.group/contact?industry=cable" className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition inline-block">
            Contact Cable Specialists
          </Link>
        </div>
      </section>
    </div>
  );
}