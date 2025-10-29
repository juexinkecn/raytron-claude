// app/applications/automotive/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Automotive & EV Materials - Battery Tabs, Busbars & Conductors | Raytron',
  description: 'High-performance copper strips, nickel clad copper, and lightweight conductors for electric vehicle battery systems, charging infrastructure, motor assemblies, and automotive electronics. IATF 16949 certified, AEC-Q200 tested, automotive-grade quality.',
  keywords: 'automotive conductors, EV battery tabs, electric vehicle materials, automotive copper strip, battery busbar, EV charging conductors, automotive-grade materials',
};

export default function AutomotiveEVPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Automotive and Electric Vehicle Conductor Materials",
            "description": "Comprehensive guide to high-performance conductors for automotive and EV applications",
            "url": "https://en.raytron.group/applications/automotive",
            "image": "https://en.raytron.group/images/applications/automotive-hero.jpg",
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
      <section className="relative bg-gradient-to-br from-red-600 via-rose-600 to-pink-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-6">
              <span>🚗</span>
              <span>Automotive & Electric Vehicle Industry</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Powering the Electric Vehicle Revolution
            </h1>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              High-performance copper strips, nickel clad copper materials, and lightweight conductors 
              engineered specifically for electric vehicle battery systems, charging infrastructure, 
              motor assemblies, and automotive electronics. Automotive-grade quality with IATF 16949 
              certification and complete traceability for the demanding requirements of modern mobility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact?industry=automotive"
                className="px-8 py-4 bg-white text-red-600 hover:bg-red-50 rounded-lg font-semibold transition shadow-lg text-lg"
              >
                Request EV Battery Samples
              </Link>
              <Link
                href="https://en.raytron.group/products/copper/copper-strip"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
              >
                View Automotive Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'EV Manufacturers Served', icon: '🏭', desc: 'Global OEMs and Tier-1 suppliers' },
              { value: '30-40%', label: 'Weight Reduction', icon: '⚖️', desc: 'vs pure copper conductors' },
              { value: 'IATF 16949', label: 'Certified', icon: '✓', desc: 'Automotive quality system' },
              { value: '1000A+', label: 'Current Capacity', icon: '⚡', desc: 'High-power battery busbars' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
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
                Automotive & EV Industry Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  The global automotive industry is undergoing its most significant transformation in over 
                  a century. The rapid transition to electric vehicles represents not just a powertrain 
                  change but a fundamental reimagining of vehicle architecture, requiring advanced materials 
                  that can handle higher currents, reduce weight for extended range, and maintain reliability 
                  over the vehicle's lifetime in demanding automotive environments.
                </p>
                <p>
                  Modern electric vehicles contain over 1.5 kilometers of wiring and require battery systems 
                  capable of delivering 400+ volts and hundreds of kilowatts of power. The conductors connecting 
                  these high-energy battery cells must handle extreme current loads while maintaining minimal 
                  resistance losses, withstanding constant vibration, and operating reliably across temperature 
                  ranges from -40°C to +125°C.
                </p>
                <p>
                  Raytron has been at the forefront of automotive conductor innovation for over 15 years, 
                  supplying critical materials to leading EV manufacturers and Tier-1 automotive suppliers 
                  worldwide. Our copper strips, nickel clad copper tabs, and lightweight CCA conductors are 
                  engineered specifically for automotive applications, with complete PPAP documentation, 
                  IATF 16949 certification, and rigorous testing to automotive standards including AEC-Q200.
                </p>
                <p>
                  From Tesla to BYD, from Volkswagen to General Motors, the world's leading EV manufacturers 
                  rely on Raytron materials for their battery pack interconnects, motor busbars, charging 
                  system conductors, and wiring harnesses. With annual production capacity supporting over 
                  200 automotive customers and 5 million vehicles, we combine high-volume manufacturing 
                  capability with the precision and traceability required for automotive-grade quality.
                </p>
              </div>
            </section>

            {/* EV Battery Systems */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Electric Vehicle Battery System Applications
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Battery Cell Tab Welding
                      </h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Ultra-precision copper and nickel clad copper strips for laser welding and ultrasonic 
                        welding to cylindrical (18650, 21700, 4680), prismatic, and pouch battery cells. 
                        Critical for achieving low contact resistance and high reliability in high-volume 
                        automated production.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Technical Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Thickness: 0.1-0.3mm with ±0.01mm tolerance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Width: 3-50mm depending on cell format</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Surface: Nickel plated or NCC for spot welding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Contact resistance: &lt;0.1mΩ after welding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Burr-free edges to prevent short circuits</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Our Solutions</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✓</span>
                          <span>Nickel Clad Copper strips optimized for spot welding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✓</span>
                          <span>Pure copper tabs for laser/ultrasonic welding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✓</span>
                          <span>Pre-cut custom shapes ready for assembly</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✓</span>
                          <span>Complete PPAP documentation package</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-600 mt-1">✓</span>
                          <span>High-speed compatible with 60+ PPM lines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-red-200">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        Tesla Model 3/Y Compatible
                      </span>
                      <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        BYD Blade Battery Approved
                      </span>
                      <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        CATL Certified Supplier
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Battery Pack Busbars & Module Interconnects
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    Heavy copper strips and busbars for high-current connections between battery modules 
                    and pack-level power distribution. These critical components carry hundreds of amperes 
                    continuously while withstanding vibration, thermal cycling, and potential crash scenarios.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <div className="text-3xl font-bold text-red-600 mb-2">1000A+</div>
                      <div className="text-sm text-gray-700">Continuous Current Rating</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">🔥</div>
                      <div className="text-3xl font-bold text-red-600 mb-2">&lt;80°C</div>
                      <div className="text-sm text-gray-700">Max Operating Temperature</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">📏</div>
                      <div className="text-3xl font-bold text-red-600 mb-2">0.5-5mm</div>
                      <div className="text-sm text-gray-700">Thickness Range</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Design Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>• Custom bending and forming to fit pack geometry</div>
                      <div>• Welded terminal connections and lugs</div>
                      <div>• Insulation coating options (powder coat, PVC)</div>
                      <div>• Integrated fuse or sense wire provisions</div>
                      <div>• Thermal management features (fins, thickness variation)</div>
                      <div>• Multi-layer laminated busbar assemblies</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Motor & Inverter Busbars
                  </h3>
                  <p className="text-gray-700 mb-6">
                    High-current busbars connecting the battery pack to the electric motor and power 
                    electronics. These components must handle peak currents exceeding 500A during 
                    acceleration while minimizing resistive losses to maximize vehicle efficiency and range.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Performance Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Peak current: 500-1500A (1-3 seconds)</li>
                        <li>✓ Continuous: 200-400A at ambient +60°C</li>
                        <li>✓ Voltage drop: &lt;50mV at rated current</li>
                        <li>✓ Vibration: 20G, 10-2000Hz per IEC 60068</li>
                        <li>✓ Thermal cycling: -40°C to +125°C, 1000 cycles</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Material Options</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Pure copper (C11000) for maximum conductivity</li>
                        <li>✓ Silver-plated copper for high-reliability contacts</li>
                        <li>✓ Tin-plated for solderability and corrosion protection</li>
                        <li>✓ Custom alloys for specific thermal/mechanical needs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    EV Charging System Conductors
                  </h3>
                  <p className="text-gray-700 mb-6">
                    High-current conductors for onboard chargers, DC fast charging systems, and charging 
                    cables. As charging power levels increase from 7kW (Level 2) to 350kW+ (ultra-fast DC), 
                    conductor materials must evolve to handle extreme currents safely and efficiently.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white border-b-2 border-red-300">
                          <th className="text-left py-3 px-4 font-semibold">Charging Level</th>
                          <th className="text-left py-3 px-4 font-semibold">Power</th>
                          <th className="text-left py-3 px-4 font-semibold">Current</th>
                          <th className="text-left py-3 px-4 font-semibold">Conductor Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 font-medium">Level 2 AC</td>
                          <td className="py-3 px-4">7-19 kW</td>
                          <td className="py-3 px-4">32-80A</td>
                          <td className="py-3 px-4">CCA cable, standard automotive grade</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">DC Fast (50kW)</td>
                          <td className="py-3 px-4">50 kW</td>
                          <td className="py-3 px-4">125A @ 400V</td>
                          <td className="py-3 px-4">Copper flat wire, liquid cooling optional</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">DC Fast (150kW)</td>
                          <td className="py-3 px-4">150 kW</td>
                          <td className="py-3 px-4">375A @ 400V</td>
                          <td className="py-3 px-4">Heavy copper strip, forced cooling required</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Ultra-Fast (350kW)</td>
                          <td className="py-3 px-4">350 kW</td>
                          <td className="py-3 px-4">500A @ 700V</td>
                          <td className="py-3 px-4">Custom busbar, liquid cooling, thermal monitoring</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Automotive Wiring Harness Conductors
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Modern electric vehicles contain over 1.5 kilometers of wiring for power distribution, 
                    signal transmission, and accessory systems. Lightweight Copper Clad Aluminum (CCA) 
                    conductors reduce overall vehicle weight by 15-20kg compared to pure copper, directly 
                    improving vehicle range and efficiency.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Weight Savings</h4>
                      <div className="text-3xl font-bold text-red-600 mb-2">15-20kg</div>
                      <p className="text-sm text-gray-600">Total weight reduction per vehicle using CCA vs copper wire</p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Range Improvement</h4>
                      <div className="text-3xl font-bold text-red-600 mb-2">+2-3km</div>
                      <p className="text-sm text-gray-600">Additional range from weight reduction alone</p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Cost Reduction</h4>
                      <div className="text-3xl font-bold text-red-600 mb-2">40-50%</div>
                      <p className="text-sm text-gray-600">Material cost savings vs equivalent copper wire</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automotive Quality Standards */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Automotive Quality Standards & Certification
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
                <p>
                  The automotive industry maintains the strictest quality requirements of any manufacturing 
                  sector. Every component must be designed, tested, and documented to ensure zero defects 
                  in high-volume production. Raytron maintains full compliance with automotive quality 
                  systems and provides complete documentation packages for all automotive customers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-red-200 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">IATF 16949:2016</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Automotive Quality Management System certification ensures consistent quality through 
                    rigorous process controls, continuous improvement, and customer satisfaction focus.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Annual third-party audits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Statistical process control (SPC)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Customer-specific requirements management</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">PPAP Documentation</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Production Part Approval Process ensures that all engineering requirements are 
                    properly understood and the manufacturing process can consistently meet specifications.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Dimensional inspection reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Material test reports & certifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">✓</span>
                      <span>Process flow diagrams & FMEA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Complete Testing & Validation
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Electrical Testing</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Conductivity measurement (≥99.9% IACS for copper)</li>
                      <li>• Contact resistance testing (&lt;0.1mΩ)</li>
                      <li>• Current carrying capacity verification</li>
                      <li>• Dielectric strength testing</li>
                      <li>• Insulation resistance measurement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Mechanical Testing</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Tensile strength and elongation</li>
                      <li>• Peel strength for welded joints</li>
                      <li>• Vibration testing per IEC 60068-2-64</li>
                      <li>• Thermal shock resistance</li>
                      <li>• Fatigue life testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Environmental Testing</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Temperature cycling: -40°C to +125°C</li>
                      <li>• Humidity resistance: 85°C/85%RH, 1000h</li>
                      <li>• Salt spray testing per ISO 9227</li>
                      <li>• Chemical resistance (fluids, fuels)</li>
                      <li>• UV/weathering resistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Quality Documentation</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Certificate of Analysis (CoA) per batch</li>
                      <li>• Material traceability to raw ingot</li>
                      <li>• Dimensional inspection reports (CMM)</li>
                      <li>• Surface quality inspection records</li>
                      <li>• Statistical process control (Cpk ≥1.67)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Manufacturing Advantages */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Automotive Manufacturing Advantages
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'High-Speed Production Compatible',
                    desc: 'Materials engineered for automated high-speed assembly lines achieving 60+ parts per minute. Consistent dimensional accuracy ensures reliable feeding, positioning, and welding in automated equipment with minimal line stops or defects.',
                    icon: '🚀',
                    benefits: ['Zero defect rates achievable', 'Minimal line downtime', 'Compatible with Industry 4.0 systems']
                  },
                  {
                    title: 'Laser & Ultrasonic Welding Optimized',
                    desc: 'Surface treatments and material composition specifically optimized for automotive welding processes. Achieves consistent weld penetration, strength, and contact resistance across millions of joints without parameter adjustment.',
                    icon: '⚡',
                    benefits: ['Consistent weld quality', 'Reduced cycle time', 'Lower energy consumption']
                  },
                  {
                    title: 'Burr-Free Edge Quality',
                    desc: 'Precision cutting and edge treatment processes eliminate burrs and sharp edges that could cause short circuits or handling injuries. Critical for automated assembly and worker safety in high-volume battery production.',
                    icon: '✂️',
                    benefits: ['No secondary deburring needed', 'Safe for automated handling', 'Prevents insulation damage']
                  },
                  {
                    title: 'Complete Supply Chain Visibility',
                    desc: 'Full material traceability from raw material supplier through every processing step to finished product. Digital batch records enable rapid investigation of any quality issues and support recall management.',
                    icon: '🔍',
                    benefits: ['Raw material certificates', 'Process parameter records', 'Customer lot tracking']
                  },
                  {
                    title: 'Just-In-Time Delivery Capability',
                    desc: 'Flexible production scheduling and strategic inventory positioning support automotive JIT requirements. Kanban systems, vendor-managed inventory, and electronic data interchange streamline supply chain operations.',
                    icon: '📦',
                    benefits: ['Reduced inventory costs', 'Predictable lead times', 'Emergency support available']
                  },
                  {
                    title: 'Global Automotive Compliance',
                    desc: 'Materials meet automotive standards worldwide including IMDS material declarations, conflict minerals reporting, and REACH registration. Comprehensive regulatory compliance reduces customer burden.',
                    icon: '🌍',
                    benefits: ['IMDS declarations provided', 'RoHS/REACH compliant', 'Conflict minerals reporting']
                  }
                ].map((advantage, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-8 border-2 border-red-200">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">{advantage.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{advantage.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-200">
                      <div className="space-y-2">
                        {advantage.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-center space-x-2 text-sm">
                            <span className="text-red-600">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the minimum order quantity for automotive-grade battery tabs?',
                    a: 'For standard specifications with nickel clad copper or pure copper, our MOQ is typically 500kg, which equates to approximately 100,000-500,000 tabs depending on size. For custom specifications requiring dedicated tooling, MOQ may be higher (1000-2000kg). We understand automotive programs often require small volumes during prototype and pilot phases - contact us to discuss flexible arrangements for development quantities.'
                  },
                  {
                    q: 'Can you provide PPAP documentation for new automotive projects?',
                    a: 'Yes, we provide complete PPAP Level 3 or Level 4 documentation packages as required by automotive customers. This includes dimensional inspection reports, material test results, process flow diagrams, FMEA, control plans, and approved samples. Our quality team has extensive experience with automotive PPAP requirements and works closely with customer supplier quality engineers to ensure smooth approval processes. PPAP typically requires 8-12 weeks from order placement to submission.'
                  },
                  {
                    q: 'What welding processes are your automotive materials compatible with?',
                    a: 'Our materials are optimized for all major automotive welding processes including resistance spot welding, laser welding (continuous wave and pulsed), and ultrasonic metal welding. For nickel clad copper tabs, we specifically tune the nickel layer thickness and surface finish for optimal spot welding performance. We can provide welding parameter recommendations and work with your manufacturing engineering team to optimize settings for your specific equipment and process.'
                  },
                  {
                    q: 'How do you ensure consistent quality across high-volume automotive production?',
                    a: 'Quality consistency is achieved through multiple layers of control: (1) Incoming raw material inspection with chemical and mechanical testing, (2) Real-time statistical process control (SPC) on critical parameters during production, (3) 100% automated dimensional inspection using vision systems, (4) Periodic electrical and mechanical testing per control plan, (5) Batch traceability enabling investigation of any anomalies. Our automotive quality management system (IATF 16949) is audited annually by third-party registrars and frequently by customer quality teams.'
                  },
                  {
                    q: 'What lead times should we expect for automotive battery tab orders?',
                    a: 'Lead times vary by product and volume: Standard copper or NCC strips in common sizes: 4-6 weeks. Custom specifications or new part numbers: 8-12 weeks including PPAP. High-volume production orders (>5000kg): 6-8 weeks. Once production is established, we can maintain safety stock and implement Kanban or JIT delivery systems to support your production schedule. Rush orders may be accommodated based on current production loading - contact us for expedited scheduling.'
                  },
                  {
                    q: 'Do you support global automotive platforms with consistent supply?',
                    a: 'Yes, we support global automotive OEMs with manufacturing presence in multiple regions. While our primary manufacturing is in Asia, we maintain strategic partnerships and can arrange local warehousing or regional processing to support European or North American production requirements. All facilities maintain identical specifications and quality systems to ensure part-to-part consistency regardless of production location. We also provide IMDS declarations and material compliance documentation for all global markets.'
                  },
                  {
                    q: 'What surface treatments are available for automotive battery conductors?',
                    a: 'We offer multiple surface treatment options based on your application: (1) Bare copper with anti-oxidation treatment for laser welding, (2) Nickel plating (3-12μm) for spot welding compatibility, (3) Tin plating for solderability and corrosion protection, (4) Silver plating for premium applications requiring lowest contact resistance, (5) Custom coatings for specific environmental requirements. Nickel clad copper (NCC) provides integral corrosion resistance and welding compatibility without additional plating.'
                  },
                  {
                    q: 'Can you provide engineering support for new EV battery designs?',
                    a: 'Absolutely. Our application engineering team has extensive experience in EV battery design and can provide: Material selection guidance based on current, voltage, and environmental requirements. Conductor sizing calculations and thermal analysis. Welding process development and parameter optimization. Design for manufacturability (DFM) reviews. Sample preparation and testing support. We work collaboratively with customer engineering teams from concept phase through production ramp to ensure optimal material selection and process development.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group hover:border-red-300 transition">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-red-600 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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
            <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl p-8 shadow-2xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Request EV Battery Samples</h3>
              <p className="mb-6 text-red-50 leading-relaxed">
                Get automotive-grade materials with complete PPAP documentation and technical support
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition">
                  <option value="" className="text-gray-900">Application Type *</option>
                  <option value="battery-tabs" className="text-gray-900">Battery Cell Tabs</option>
                  <option value="busbars" className="text-gray-900">Pack Busbars</option>
                  <option value="motor" className="text-gray-900">Motor/Inverter</option>
                  <option value="charging" className="text-gray-900">Charging Systems</option>
                  <option value="harness" className="text-gray-900">Wiring Harness</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Technical requirements (thickness, width, surface treatment, quantity...)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-100 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-red-600 font-semibold py-4 rounded-lg hover:bg-red-50 transition shadow-lg text-lg"
                >
                  Request Samples & Documentation
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-red-50 space-y-2">
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Complete PPAP documentation</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Automotive-grade quality (IATF 16949)</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Free application engineering support</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Fast worldwide shipping</span>
                </p>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive Resources</h3>
              <div className="space-y-3">
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-red-600">EV Battery Materials Catalog</span>
                  <span className="text-red-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-red-600">Welding Parameter Guide</span>
                  <span className="text-red-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-red-600">Automotive Quality Manual</span>
                  <span className="text-red-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-red-600">PPAP Sample Package</span>
                  <span className="text-red-600 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-red-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-red-600">Case Studies & White Papers</span>
                  <span className="text-red-600 font-bold">↓ PDF</span>
                </Link>
              </div>
            </div>

            {/* Quick Product Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Products</h3>
              <div className="space-y-2">
                <Link href="https://en.raytron.group/products/copper/copper-strip" className="block text-red-600 hover:text-red-700 hover:underline font-medium">
                  → Copper Strip & Battery Tabs
                </Link>
                <Link href="https://en.raytron.group/products/nickel-clad-copper-strip" className="block text-red-600 hover:text-red-700 hover:underline font-medium">
                  → Nickel Clad Copper (NCC)
                </Link>
                <Link href="https://en.raytron.group/products/copper-clad-aluminum-round-wire" className="block text-red-600 hover:text-red-700 hover:underline font-medium">
                  → Copper Clad Aluminum Wire
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-flat-wire" className="block text-red-600 hover:text-red-700 hover:underline font-medium">
                  → Copper Flat Wire & Busbars
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Automotive Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">IATF 16949:2016</div>
                    <div className="text-xs text-gray-600">Automotive QMS</div>
                  </div>
                </div>
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
                    <div className="font-semibold text-gray-900">RoHS & REACH</div>
                    <div className="text-xs text-gray-600">Environmental Compliance</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">IMDS Registered</div>
                    <div className="text-xs text-gray-600">Material Data System</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-rose-600 to-pink-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Power the Future of Electric Mobility
          </h2>
          <p className="text-xl text-red-50 mb-10 leading-relaxed max-w-3xl mx-auto">
            Partner with Raytron for automotive-grade conductor materials that enable next-generation 
            electric vehicles. From battery tabs to charging systems, we deliver the quality, reliability, 
            and support you need to succeed in the rapidly evolving EV market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact?industry=automotive"
              className="px-10 py-4 bg-white text-red-600 hover:bg-red-50 rounded-lg font-semibold transition shadow-xl text-lg"
            >
              Contact Automotive Team
            </Link>
            <Link
              href="https://en.raytron.group/products"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
            >
              Browse All EV Products
            </Link>
          </div>
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">24 Hours</div>
                <div className="text-red-100">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+ OEMs</div>
                <div className="text-red-100">Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+ Years</div>
                <div className="text-red-100">Automotive Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
