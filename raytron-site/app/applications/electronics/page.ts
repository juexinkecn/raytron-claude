// app/applications/electronics/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Electronics Materials - Copper Foil, FPC & EMI Shielding | Raytron',
  description: 'Ultra-precision copper foils, flexible circuit materials, EMI shielding, and high-frequency conductors for smartphones, wearables, IoT devices, and advanced electronics. ±0.002mm tolerance, 99.99% purity, RoHS compliant.',
  keywords: 'electronics copper foil, flexible printed circuits, FPC materials, EMI shielding, high frequency conductors, smartphone materials, copper strip electronics',
};

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Electronics Industry Precision Copper Materials",
            "description": "Comprehensive guide to ultra-precision copper materials for electronics manufacturing",
            "url": "https://en.raytron.group/applications/electronics",
            "image": "https://en.raytron.group/images/applications/electronics-hero.jpg",
            "author": {
              "@type": "Organization",
              "name": "Raytron"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Raytron",
              "url": "https://en.raytron.group"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2025-01-01"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-6">
              <span>💻</span>
              <span>Electronics & Semiconductor Industry</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ultra-Precision Materials for Advanced Electronics
            </h1>
            <p className="text-xl text-purple-50 mb-8 leading-relaxed">
              Ultra-thin copper foils, precision strips, and specialized conductors engineered for 
              flexible printed circuits, EMI shielding, high-frequency applications, and next-generation 
              electronics. Delivering ±0.002mm dimensional accuracy, 99.99% copper purity, and RoHS 
              compliance for the demanding requirements of smartphones, wearables, IoT devices, and 
              advanced semiconductor packaging.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact?industry=electronics"
                className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg font-semibold transition shadow-lg text-lg"
              >
                Request FPC Foil Samples
              </Link>
              <Link
                href="https://en.raytron.group/products/copper/copper-foil"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
              >
                View Electronics Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '±0.002mm', label: 'Thickness Tolerance', icon: '🎯', desc: 'Industry-leading precision' },
              { value: '5-500μm', label: 'Thickness Range', icon: '📏', desc: 'From ultra-thin to heavy' },
              { value: '99.99%', label: 'Copper Purity', icon: '✓', desc: '4N grade available' },
              { value: '1000+', label: 'Electronics Clients', icon: '💼', desc: 'Worldwide partnerships' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Industry Overview */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Electronics Industry Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  The modern electronics industry operates at the cutting edge of material science and 
                  manufacturing precision. Today's smartphones contain over 30 printed circuit boards with 
                  trace widths measured in micrometers. Wearable devices pack sophisticated sensors and 
                  processors into millimeter-scale packages. 5G infrastructure demands materials that maintain 
                  performance at frequencies exceeding 100 GHz. These applications require conductor materials 
                  with unprecedented precision, purity, and reliability.
                </p>
                <p>
                  Copper remains the material of choice for electronic conductors due to its exceptional 
                  electrical and thermal conductivity, but the copper used in modern electronics bears little 
                  resemblance to traditional wire products. Ultra-thin foils measuring just 5-12 micrometers 
                  in thickness enable flexible circuits that bend and fold millions of times without failure. 
                  Surface treatments measured in nanometers ensure reliable bonding to adhesives and substrates. 
                  Dimensional tolerances of ±2 micrometers ensure consistent impedance in high-frequency circuits.
                </p>
                <p>
                  Raytron has invested heavily in precision rolling and electrodeposition technologies to serve 
                  the electronics industry. Our copper foils, strips, and ribbons are used in flexible printed 
                  circuits (FPC) for smartphones and tablets, EMI shielding for wireless devices, high-frequency 
                  circuits for 5G infrastructure, battery tabs for consumer electronics, RFID antennas, and 
                  countless other applications where precision and reliability are paramount.
                </p>
                <p>
                  Serving over 1000 electronics manufacturers worldwide, from global brands like Samsung and 
                  Apple to innovative startups developing next-generation wearables and IoT devices, Raytron 
                  combines high-volume manufacturing capability with the flexibility to support prototype 
                  development and custom specifications. Our materials meet the stringent requirements of 
                  RoHS, REACH, and IPC standards while delivering the consistent quality required for 
                  high-yield electronics manufacturing.
                </p>
              </div>
            </section>

            {/* Flexible Circuits */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Flexible Printed Circuit (FPC) Applications
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Ultra-Thin Copper Foil for FPC (5-35μm)
                      </h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Rolled annealed (RA) and electrodeposited (ED) copper foils engineered specifically 
                        for flexible printed circuit applications. These ultra-thin foils enable circuits that 
                        can flex millions of times while maintaining electrical performance and mechanical integrity.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Rolled Annealed (RA) Foil</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Thickness: 12-35μm with ±3μm tolerance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Grain structure: Columnar for superior flexibility</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Surface: Matte finish one side, shiny other</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Bend radius: 0.5-1.0mm minimum</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Flex life: 100,000+ cycles at R=3mm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Electrodeposited (ED) Foil</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Thickness: 5-18μm with ±1μm tolerance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Surface: Controlled roughness (Rz 1-3μm)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Peel strength: 0.7-1.2 N/mm with polyimide</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Elongation: 3-8% for dynamic flexing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Ultra-thin: Down to 5μm for maximum flexibility</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Typical FPC Applications</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                      <div>• Smartphone display connectors</div>
                      <div>• Camera module interconnects</div>
                      <div>• Battery FPC connections</div>
                      <div>• Wearable device circuits</div>
                      <div>• Laptop hinge flex cables</div>
                      <div>• Medical device sensors</div>
                      <div>• Automotive dashboard displays</div>
                      <div>• IoT device interconnects</div>
                      <div>• Drone control systems</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    FPC Manufacturing Process Compatibility
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our copper foils are optimized for all major FPC manufacturing processes, ensuring 
                    reliable production with high yield and consistent quality.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        process: 'Subtractive Etching',
                        desc: 'Standard photolithography and chemical etching process. Our foils provide clean etched edges with minimal undercut, enabling fine-pitch circuits down to 50μm line/space.',
                        features: ['Clean sidewall profile', 'Minimal etch factor', 'High resolution capability']
                      },
                      {
                        process: 'Semi-Additive Process (SAP)',
                        desc: 'Advanced process for ultra-fine circuits. Our ultra-thin foils (5-9μm) serve as seed layer for electroplating, enabling 20μm line/space or finer.',
                        features: ['Superior adhesion', 'Uniform thickness', 'Low surface defects']
                      },
                      {
                        process: 'Modified Semi-Additive (mSAP)',
                        desc: 'Next-generation process for smartphone and high-density applications. Compatible with multiple lamination cycles for multi-layer FPC construction.',
                        features: ['Excellent peel strength', 'Thermal stability', 'Chemical resistance']
                      }
                    ].map((proc, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-2">{proc.process}</h4>
                        <p className="text-gray-700 text-sm mb-3">{proc.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {proc.features.map((feat, fidx) => (
                            <span key={fidx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* EMI Shielding */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                EMI/RFI Shielding Solutions
              </h2>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Modern electronics operate at increasingly high frequencies and power levels while shrinking 
                    in size, creating severe electromagnetic interference (EMI) challenges. Regulatory requirements 
                    like FCC Part 15 and CE marking mandate strict limits on electromagnetic emissions. Simultaneously, 
                    devices must resist interference from external sources. Copper shielding materials provide the 
                    most cost-effective solution for meeting these requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Conductive Copper Foil Tapes</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Copper foil with conductive adhesive for wrapping cables, sealing enclosures, and creating 
                      EMI gaskets. Available in various widths and thicknesses.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thickness:</span>
                        <span className="font-semibold">18-50μm copper + adhesive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shielding:</span>
                        <span className="font-semibold">&gt;60dB @ 1GHz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">Cable wrap, seam sealing</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Conductive Fabric/Mesh</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Copper-plated fabric or woven copper mesh for flexible shielding applications. Ideal for 
                      shielding irregular shapes and ventilation areas.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Materials:</span>
                        <span className="font-semibold">Cu-plated nylon, pure Cu mesh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shielding:</span>
                        <span className="font-semibold">40-80dB depending on mesh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">Enclosure windows, gaskets</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Shielding Cans & Frames</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Formed copper or tin-plated steel cans for shielding sensitive circuits on PCBs. Custom 
                      stamping and forming available.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-semibold">0.15-0.3mm copper/brass</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Finish:</span>
                        <span className="font-semibold">Tin, nickel, or gold plated</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">RF modules, WiFi/BT chips</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Conductive Gaskets</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Copper spring fingers, wire mesh gaskets, and beryllium copper contacts for sealing 
                      enclosure seams and maintaining ground continuity.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Types:</span>
                        <span className="font-semibold">Spring fingers, wire mesh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resistance:</span>
                        <span className="font-semibold">&lt;10mΩ contact resistance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">Enclosure seams, doors</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">EMI Shielding Effectiveness</h3>
                  <p className="text-gray-700 mb-6">
                    Shielding effectiveness (SE) quantifies how much electromagnetic energy is blocked by a 
                    shielding material, measured in decibels (dB). Higher values indicate better shielding.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-purple-100 border-b-2 border-purple-300">
                          <th className="text-left py-3 px-4 font-semibold">Material/Configuration</th>
                          <th className="text-left py-3 px-4 font-semibold">SE @ 100MHz</th>
                          <th className="text-left py-3 px-4 font-semibold">SE @ 1GHz</th>
                          <th className="text-left py-3 px-4 font-semibold">SE @ 10GHz</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4">25μm Copper Foil</td>
                          <td className="py-3 px-4 font-semibold">&gt;100dB</td>
                          <td className="py-3 px-4 font-semibold">&gt;90dB</td>
                          <td className="py-3 px-4 font-semibold">&gt;80dB</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">50μm Copper Foil</td>
                          <td className="py-3 px-4 font-semibold">&gt;110dB</td>
                          <td className="py-3 px-4 font-semibold">&gt;100dB</td>
                          <td className="py-3 px-4 font-semibold">&gt;90dB</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Conductive Fabric</td>
                          <td className="py-3 px-4">50-70dB</td>
                          <td className="py-3 px-4">40-60dB</td>
                          <td className="py-3 px-4">30-50dB</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Wire Mesh (0.1mm)</td>
                          <td className="py-3 px-4">40-60dB</td>
                          <td className="py-3 px-4">40-60dB</td>
                          <td className="py-3 px-4">30-50dB</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* High Frequency Applications */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                High-Frequency & RF Applications
              </h2>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    As wireless technologies evolve from 4G to 5G and beyond, operating frequencies continue 
                    to increase, now extending into millimeter-wave bands (24-100 GHz). At these frequencies, 
                    material properties that were negligible at lower frequencies become critically important. 
                    Conductor losses, skin depth effects, and dielectric properties all impact signal integrity 
                    and system performance.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5G Infrastructure Materials</h3>
                  <p className="text-gray-700 mb-6">
                    5G base stations and infrastructure equipment operate at frequencies from sub-6 GHz to 
                    millimeter-wave bands (24-40 GHz), requiring materials with low loss and consistent 
                    properties across wide frequency ranges.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">RF PCB Copper Foil</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Very low-profile (VLP) foil: Rz &lt; 3μm</div>
                        <div>• 99.99% purity for low loss</div>
                        <div>• Uniform thickness ±2μm</div>
                        <div>• Compatible with Rogers, Taconic laminates</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Antenna Elements</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Precision etched copper for phased arrays</div>
                        <div>• Silver-plated for lower losses</div>
                        <div>• Custom shapes and resonant structures</div>
                        <div>• Tolerances: ±25μm for mmWave</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Heat Spreaders</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>• Thick copper (0.5-3mm) for thermal management</div>
                        <div>• High thermal conductivity (390 W/m·K)</div>
                        <div>• Custom machining available</div>
                        <div>• Direct attach to RF power amplifiers</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Skin Depth Considerations</h3>
                  <p className="text-gray-700 mb-6">
                    At high frequencies, AC current concentrates near the conductor surface due to the skin 
                    effect. Understanding skin depth helps optimize conductor thickness for your application.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-purple-100 border-b-2 border-purple-300">
                          <th className="text-left py-3 px-4 font-semibold">Frequency</th>
                          <th className="text-left py-3 px-4 font-semibold">Copper Skin Depth</th>
                          <th className="text-left py-3 px-4 font-semibold">Recommended Min. Thickness</th>
                          <th className="text-left py-3 px-4 font-semibold">Application</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4">1 MHz</td>
                          <td className="py-3 px-4">66 μm</td>
                          <td className="py-3 px-4">200 μm (3x)</td>
                          <td className="py-3 px-4">AM Radio, General Electronics</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">100 MHz</td>
                          <td className="py-3 px-4">6.6 μm</td>
                          <td className="py-3 px-4">20 μm (3x)</td>
                          <td className="py-3 px-4">FM Radio, Basic RF</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">1 GHz</td>
                          <td className="py-3 px-4">2.1 μm</td>
                          <td className="py-3 px-4">6-9 μm</td>
                          <td className="py-3 px-4">WiFi, Bluetooth, GPS</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">2.4 GHz</td>
                          <td className="py-3 px-4">1.3 μm</td>
                          <td className="py-3 px-4">4-6 μm</td>
                          <td className="py-3 px-4">WiFi 2.4GHz, IoT</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">5 GHz</td>
                          <td className="py-3 px-4">0.9 μm</td>
                          <td className="py-3 px-4">3-5 μm</td>
                          <td className="py-3 px-4">WiFi 5GHz, 5G Sub-6</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">28 GHz</td>
                          <td className="py-3 px-4">0.4 μm</td>
                          <td className="py-3 px-4">1-2 μm</td>
                          <td className="py-3 px-4">5G mmWave</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    * Recommended thickness is typically 3-5x skin depth to carry 95-99% of current
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Applications */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Additional Electronics Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Battery Tabs for Consumer Electronics',
                    desc: 'Ultra-thin copper and nickel tabs for lithium polymer batteries in smartphones, tablets, laptops, and wearables. Precision dimensions ensure consistent resistance and reliable spot welding.',
                    specs: ['0.05-0.15mm thickness', 'Custom punched shapes', 'Nickel or bare copper']
                  },
                  {
                    title: 'RFID Antennas',
                    desc: 'Etched copper patterns on PET or paper substrates for RFID tags. Used in logistics, retail, access control, and asset tracking applications.',
                    specs: ['12-35μm copper on film', 'High-speed etching compatible', 'Custom antenna designs']
                  },
                  {
                    title: 'Membrane Switches & Keyboards',
                    desc: 'Conductive copper circuits on flexible substrates for membrane switches, keypads, and touch interfaces. Requires excellent flex life and contact resistance stability.',
                    specs: ['Silver/carbon printing possible', 'Multiple actuation cycles', 'Custom graphics integration']
                  },
                  {
                    title: 'LED Heat Sinks',
                    desc: 'Copper strips and plates for thermal management of high-power LEDs. Copper\'s thermal conductivity (390 W/m·K) is 3x better than aluminum.',
                    specs: ['0.5-3mm thickness', 'Custom machining available', 'Surface treatments for bonding']
                  },
                  {
                    title: 'Sensor Electrodes',
                    desc: 'Thin copper patterns for capacitive sensors, biosensors, and environmental sensors. Precision etching enables complex sensor geometries.',
                    specs: ['18-35μm foil typical', 'Chemical or laser etching', 'Biocompatible options']
                  },
                  {
                    title: 'Power Supply Busbars',
                    desc: 'Heavy copper strips for power distribution in electronics equipment. Low resistance minimizes voltage drop and heat generation.',
                    specs: ['0.5-5mm thickness', 'Custom bending/forming', 'High current capacity']
                  }
                ].map((app, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{app.desc}</p>
                    <div className="space-y-1">
                      {app.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="text-purple-600">•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quality & Testing */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Quality Control & Testing
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-6">
                  Electronics manufacturing demands zero-defect materials with consistent properties. 
                  Our comprehensive quality control processes ensure every batch meets specifications.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Dimensional Inspection</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Laser thickness measurement: ±0.5μm resolution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Width measurement: ±10μm accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Surface roughness: Stylus profilometer (Ra/Rz)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Flatness: Optical measurement systems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>100% inline inspection with vision systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Material Properties</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Electrical conductivity: 4-point probe measurement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Purity analysis: ICP-MS for trace elements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Tensile strength and elongation testing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Peel strength for bonded foils</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Grain structure analysis (metallography)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Surface Quality</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Visual inspection: 100% automated optical inspection</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Defect detection: Pinholes, scratches, stains</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Cleanliness: IPC-TM-650 residue testing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Oxidation resistance: Accelerated aging tests</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Treatment uniformity: XPS surface analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Certification</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>RoHS 2.0 compliant (heavy metals testing)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>REACH registered (SVHC declarations)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>IPC-4562 qualification (FPC copper foil)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>ISO 9001:2015 quality management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>Conflict minerals reporting (CMRT)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the difference between rolled and electrodeposited copper foil?',
                    a: 'Rolled annealed (RA) foil is produced by mechanically rolling copper to thin gauges, resulting in a columnar grain structure that provides excellent flexibility and fatigue resistance. It typically has one shiny and one matte side. Electrodeposited (ED) foil is produced by electroplating copper onto a rotating drum, creating a more uniform, fine-grained structure. ED foil can be made much thinner (down to 5μm) and has controlled surface roughness on both sides. For flexible circuits requiring extreme flexibility or ultra-thin layers, ED foil is preferred. For applications requiring better mechanical properties and thicker foils (>18μm), RA foil is often chosen.'
                  },
                  {
                    q: 'How thin can copper foil be manufactured while maintaining quality?',
                    a: 'Our electrodeposited copper foils can be produced as thin as 5 micrometers (0.005mm) while maintaining good uniformity and handleability. However, very thin foils become increasingly challenging to process in FPC manufacturing. For most FPC applications, 9-12μm provides the best balance of flexibility, manufacturability, and cost. Rolled foils typically start at 12μm thickness. Below 9μm, special handling and processing techniques are required, and costs increase significantly.'
                  },
                  {
                    q: 'What surface treatments are available for copper foil and strip?',
                    a: 'We offer multiple surface treatment options: (1) Untreated/bare copper with anti-tarnish coating for general use, (2) Treatment for adhesion enhancement to polyimide or other substrates (surface roughening), (3) Oxide conversion coating (black oxide) for improved bonding, (4) Electroplated coatings including tin, nickel, gold, or silver for specific requirements, (5) Organic solderability preservative (OSP) for lead-free assembly. The choice depends on your application - FPC typically uses roughened or oxide-treated foil, while battery tabs may use nickel plating for weldability.'
                  },
                  {
                    q: 'Can you supply copper foil for high-frequency RF applications?',
                    a: 'Yes, we supply low-profile and very-low-profile (VLP) copper foils specifically optimized for high-frequency applications. These foils have controlled surface roughness (Rz typically <3μm) to minimize skin effect losses at microwave and millimeter-wave frequencies. The smoother surface reduces conductor losses by 20-40% compared to standard foils at frequencies above 10 GHz. We work with major RF laminate suppliers like Rogers, Taconic, and Isola, and our foils are compatible with their high-frequency substrates. For 5G mmWave applications (24-100 GHz), surface roughness becomes critically important.'
                  },
                  {
                    q: 'What minimum order quantities apply for electronics copper products?',
                    a: 'MOQ varies by product type and thickness: Standard rolled foil (18-35μm): 500kg minimum. Electrodeposited foil (5-18μm): 200kg minimum. Copper strip (0.1-0.5mm): 200-500kg depending on width. Custom specifications: May require higher MOQ (1000kg+) due to setup costs. However, we understand that electronics development often requires small quantities for prototyping. We can provide development samples (5-50kg) for qualified projects, with the understanding that production volumes will follow. Contact our sales team to discuss your specific requirements.'
                  },
                  {
                    q: 'How do you ensure traceability for electronics materials?',
                    a: 'Complete material traceability is maintained through our quality management system: (1) Incoming copper cathodes are tagged with supplier lot numbers and certificates, (2) During processing, materials are tracked through our ERP system with unique batch codes, (3) Testing results are linked to batch codes in our quality database, (4) Finished products are labeled with batch codes including production date and parameters, (5) We maintain records for 10+ years enabling investigation of any quality issues, (6) Certificates of Analysis (CoA) provided with every shipment include chemical composition, electrical properties, and dimensional measurements linked to specific production lots.'
                  },
                  {
                    q: 'What lead times should we expect for copper foil orders?',
                    a: 'Lead times depend on product type and specifications: Standard products in common thicknesses (12μm, 18μm, 35μm): 4-6 weeks. Electrodeposited foils with special treatment: 6-8 weeks. Custom specifications requiring process development: 8-12 weeks. High-volume orders (>5000kg): Add 2-4 weeks to standard lead time. Once you establish regular orders, we can maintain safety stock to support shorter lead times (2-3 weeks) and implement vendor-managed inventory programs. Rush orders may be accommodated based on current production scheduling - contact us for expedited delivery options.'
                  },
                  {
                    q: 'Do you provide technical support for electronics applications?',
                    a: 'Yes, our applications engineering team provides comprehensive technical support: Material selection guidance based on your specific application requirements (flexibility, current capacity, frequency, environment). Processing recommendations for etching, lamination, and assembly. Failure analysis and troubleshooting for manufacturing issues. Design for manufacturability (DFM) reviews for FPC and PCB designs. Sample preparation and testing support for new designs. Training for your engineering and manufacturing teams on material properties and best practices. We work collaboratively with customers from concept through production ramp, drawing on decades of experience in electronics materials.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group hover:border-purple-300 transition">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-purple-600 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl p-8 shadow-2xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Request Electronics Samples</h3>
              <p className="mb-6 text-purple-50 leading-relaxed">
                Get precision copper materials with complete technical specifications and material certifications
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition">
                  <option value="" className="text-gray-900">Application Type *</option>
                  <option value="fpc" className="text-gray-900">Flexible Circuits (FPC)</option>
                  <option value="emi" className="text-gray-900">EMI Shielding</option>
                  <option value="rf" className="text-gray-900">High-Frequency / RF</option>
                  <option value="battery" className="text-gray-900">Battery Tabs</option>
                  <option value="connector" className="text-gray-900">Connectors / Terminals</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Technical requirements (thickness, width, surface treatment, quantity...)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 font-semibold py-4 rounded-lg hover:bg-purple-50 transition shadow-lg text-lg"
                >
                  Request Samples & Data Sheets
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-purple-50 space-y-2">
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Complete material certifications</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>RoHS & REACH compliant</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Free application engineering support</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Fast global shipping</span>
                </p>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electronics Resources</h3>
              <div className="space-y-3">
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-purple-600">FPC Copper Foil Catalog</span>
                  <span className="text-purple-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-purple-600">EMI Shielding Guide</span>
                  <span className="text-purple-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-purple-600">High-Frequency Materials</span>
                  <span className="text-purple-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-purple-600">Material Properties Data</span>
                  <span className="text-purple-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-purple-600">Processing Guidelines</span>
                  <span className="text-purple-600 font-bold">↓ PDF</span>
                </Link>
              </div>
            </div>

            {/* Quick Product Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Products</h3>
              <div className="space-y-2">
                <Link href="https://en.raytron.group/products/copper/copper-foil" className="block text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  → Copper Foil (5-100μm)
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-strip" className="block text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  → Copper Strip (0.1-5mm)
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-ribbon-wire" className="block text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  → Copper Ribbon Wire
                </Link>
                <Link href="https://en.raytron.group/products/silver-clad-copper-wire-rod" className="block text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  → Silver Clad Copper
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quality & Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">ISO 9001:2015</div>
                    <div className="text-xs text-gray-600">Quality Management</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">RoHS 2.0</div>
                    <div className="text-xs text-gray-600">Hazardous Substances</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">REACH</div>
                    <div className="text-xs text-gray-600">EU Chemical Regulation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">IPC Standards</div>
                    <div className="text-xs text-gray-600">Electronics Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enable Next-Generation Electronics Innovation
          </h2>
          <p className="text-xl text-purple-50 mb-10 leading-relaxed max-w-3xl mx-auto">
            Partner with Raytron for ultra-precision copper materials that enable the miniaturization, 
            performance, and reliability demanded by modern electronics. From flexible circuits to 
            5G infrastructure, we deliver the materials and expertise you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact?industry=electronics"
              className="px-10 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg font-semibold transition shadow-xl text-lg"
            >
              Contact Electronics Team
            </Link>
            <Link
              href="https://en.raytron.group/products"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
            >
              Browse All Electronics Products
            </Link>
          </div>
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">±0.002mm</div>
                <div className="text-purple-100">Precision Tolerance</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+ Clients</div>
                <div className="text-purple-100">Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+ Years</div>
                <div className="text-purple-100">Electronics Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}