// app/applications/military/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {  title: 'Aerospace & Defense Materials - MIL-SPEC Conductors | Raytron',
  description: 'High-reliability conductors for aircraft systems, satellites, defense electronics, and aerospace applications. MIL-SPEC compliant, extreme environment tested, AS9100 certified. -55°C to +200°C operating range.',
  keywords: 'aerospace conductors, military-spec materials, aircraft wiring, satellite conductors, defense electronics, MIL-SPEC copper, space-grade materials, aerospace certification',
};
}
export default function MilitaryAerospacePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Aerospace and Defense High-Reliability Conductor Materials",
            "description": "Comprehensive guide to MIL-SPEC compliant materials for aerospace and defense applications",
            "url": "https://en.raytron.group/applications/military",
            "image": "https://en.raytron.group/images/applications/aerospace-hero.jpg",
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
      <section className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/military-grid.svg')] bg-center opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-6 border border-white/20">
              <span>✈️</span>
              <span>Aerospace & Defense Industry</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mission-Critical Reliability for Aerospace & Defense
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              High-reliability conductor materials engineered for the most demanding applications in aerospace 
              and defense. From commercial aviation to satellites, from military aircraft to defense electronics, 
              our materials meet stringent MIL-SPEC requirements and deliver proven performance in extreme 
              environments. AS9100 certified manufacturing with complete material traceability and DFARS compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://en.raytron.group/contact?industry=aerospace"
                className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-semibold transition shadow-lg text-lg"
              >
                Request Aerospace Samples
              </Link>
              <Link
                href="https://en.raytron.group/products/silver-clad-copper-wire-rod"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
              >
                View Military-Grade Products
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
              { value: '30+', label: 'Aerospace Partners', icon: '🚀', desc: 'Global OEMs & Tier-1s' },
              { value: 'MIL-SPEC', label: 'Compliant', icon: '✓', desc: 'Multiple specifications' },
              { value: '-55°C to +200°C', label: 'Operating Range', icon: '🌡️', desc: 'Extreme environments' },
              { value: 'AS9100', label: 'Certified', icon: '🏆', desc: 'Aerospace quality system' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-700 mb-2">{stat.value}</div>
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
                Aerospace & Defense Industry Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Aerospace and defense applications represent the ultimate test of material reliability and 
                  performance. Whether supporting commercial aviation carrying millions of passengers annually, 
                  enabling satellite communications from orbit, powering military aircraft in combat operations, 
                  or providing critical functions in defense systems, conductor materials must perform flawlessly 
                  in the harshest environments imaginable while maintaining zero-defect quality standards.
                </p>
                <p>
                  The aerospace industry operates under uniquely stringent requirements. A single wire failure 
                  at 40,000 feet can have catastrophic consequences. Satellite systems must function reliably 
                  for 15-20 years in the vacuum of space, exposed to radiation, extreme temperature cycling, 
                  and no possibility of repair. Military systems must operate in combat conditions including 
                  extreme temperatures, vibration, electromagnetic interference, salt spray, and potential 
                  battlefield damage while maintaining mission-critical performance.
                </p>
                <p>
                  Raytron has supplied materials to the aerospace and defense sector for over 20 years, working 
                  with leading aircraft manufacturers, satellite producers, defense contractors, and military 
                  organizations worldwide. Our conductor materials are used in commercial airliners from Boeing 
                  and Airbus, communication satellites, military aircraft including fighter jets and transport 
                  planes, missile guidance systems, radar installations, and numerous classified defense applications.
                </p>
                <p>
                  Our AS9100 certified manufacturing processes ensure complete compliance with aerospace quality 
                  requirements. Every batch of material includes comprehensive documentation: material certificates 
                  tracing to the original copper ingot, complete test reports demonstrating compliance with 
                  specifications, qualification test data for extreme environment performance, and certifications 
                  meeting DFARS (Defense Federal Acquisition Regulation Supplement) and ITAR (International 
                  Traffic in Arms Regulations) requirements where applicable.
                </p>
                <p>
                  The materials we supply to aerospace and defense customers undergo testing far exceeding 
                  commercial standards. Thermal cycling from -55°C to +200°C simulates years of operational 
                  temperature extremes. Vibration testing to MIL-STD-810 specifications ensures reliability 
                  under intense mechanical stress. Salt spray exposure verifies corrosion resistance in marine 
                  environments. Humidity testing confirms performance in tropical conditions. Every parameter 
                  is tested, documented, and traceable to support the mission-critical nature of aerospace 
                  and defense applications.
                </p>
              </div>
            </section>

            {/* Aircraft Applications */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Aircraft Electrical Systems
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-slate-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Commercial Aviation Wiring
                      </h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Modern commercial aircraft contain 50-100 kilometers of wiring connecting avionics, 
                        flight control systems, passenger services, and aircraft systems. These wires must 
                        function reliably for 30+ years of service while withstanding extreme temperature 
                        variations, vibration, and electromagnetic interference from lightning strikes and 
                        radar systems.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Material Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">•</span>
                          <span>Temperature range: -55°C to +200°C</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">•</span>
                          <span>Vibration: 10-2000Hz per MIL-STD-810</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">•</span>
                          <span>Flame resistance: FAR 25.853 (a)(1)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">•</span>
                          <span>Smoke & toxicity: Low emission materials</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">•</span>
                          <span>Service life: 30+ years operational</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-3">Our Solutions</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">✓</span>
                          <span>Silver-plated copper for high-reliability</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">✓</span>
                          <span>Nickel-clad copper for harsh environments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">✓</span>
                          <span>Qualified to MIL-DTL-27500 wire specification</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">✓</span>
                          <span>Complete qualification test reports</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-slate-700 mt-1">✓</span>
                          <span>Batch-level material traceability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-slate-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Military Aircraft & Defense Systems
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Military aircraft operate in significantly more demanding conditions than commercial 
                    aviation. Combat maneuvers impose extreme G-forces. Operating from aircraft carriers 
                    exposes systems to salt spray. Desert operations bring sand and extreme heat. Arctic 
                    operations demand performance at -55°C. Electronic warfare systems and radar generate 
                    intense electromagnetic fields requiring specialized shielding.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <div className="text-3xl font-bold text-slate-700 mb-2">20G</div>
                      <div className="text-sm text-gray-700">Combat Maneuver Loads</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">🌡️</div>
                      <div className="text-3xl font-bold text-slate-700 mb-2">255°C</div>
                      <div className="text-sm text-gray-700">Engine Compartment Temperature</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">⚔️</div>
                      <div className="text-3xl font-bold text-slate-700 mb-2">100%</div>
                      <div className="text-sm text-gray-700">Mission-Critical Reliability</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Military Specifications Compliance</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>• MIL-DTL-27500: High-temperature aircraft wire</div>
                      <div>• MIL-W-16878: Hook-up wire specifications</div>
                      <div>• MIL-STD-810: Environmental test methods</div>
                      <div>• MIL-STD-461: EMI/EMC requirements</div>
                      <div>• MIL-STD-202: Electronic component testing</div>
                      <div>• DFARS compliant material sourcing</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-slate-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Avionics & Flight Control Systems
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Modern glass cockpit avionics and fly-by-wire flight control systems require conductors 
                    with exceptional signal integrity, EMI resistance, and reliability. These systems process 
                    critical flight data and pilot commands - any signal degradation or connection failure 
                    could compromise flight safety.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        system: 'Flight Control Computers',
                        desc: 'High-speed data buses connecting flight computers to control surfaces. Requires controlled impedance, low crosstalk, and absolute reliability.',
                        materials: 'Silver-plated copper, matched impedance designs'
                      },
                      {
                        system: 'Navigation & Communication',
                        desc: 'GPS receivers, radio transceivers, transponders. Must maintain signal integrity in presence of intense electromagnetic interference.',
                        materials: 'EMI shielded cable, low-loss RF conductors'
                      },
                      {
                        system: 'Cockpit Displays & Controls',
                        desc: 'Modern multi-function displays and control panels. Requires reliable connections surviving constant vibration and temperature cycling.',
                        materials: 'Flexible interconnects, high-flex-life conductors'
                      }
                    ].map((sys, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-2">{sys.system}</h4>
                        <p className="text-gray-700 text-sm mb-3">{sys.desc}</p>
                        <div className="text-sm text-slate-700">
                          <strong>Materials:</strong> {sys.materials}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Satellite & Space */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Satellite & Space Systems
              </h2>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Space represents the ultimate hostile environment for electronic systems. Satellites 
                    must function reliably for 15-20 years with zero possibility of repair, operating in 
                    hard vacuum, exposed to solar radiation, surviving temperature swings of 300°C between 
                    sun and shadow, and resisting degradation from atomic oxygen and micrometeorite impacts. 
                    Every component must be space-qualified through extensive testing to ensure mission success.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Space Environment Challenges</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">🌡️</span>
                        <div>
                          <div className="font-semibold text-gray-900">Thermal Cycling</div>
                          <div className="text-gray-600">-150°C to +150°C every orbit (90 minutes)</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">☢️</span>
                        <div>
                          <div className="font-semibold text-gray-900">Radiation Exposure</div>
                          <div className="text-gray-600">Cosmic rays, solar flares, Van Allen belts</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <div className="font-semibold text-gray-900">Vacuum Conditions</div>
                          <div className="text-gray-600">Outgassing, cold welding risks</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">🛸</span>
                        <div>
                          <div className="font-semibold text-gray-900">Micrometeorites</div>
                          <div className="text-gray-600">High-velocity particle impacts</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-slate-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Space-Grade Materials</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">High-Purity Copper</div>
                        <div className="text-gray-600">99.99%+ purity minimizes radiation-induced defects</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Silver Plating</div>
                        <div className="text-gray-600">Prevents oxidation, maintains conductivity in vacuum</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Low-Outgassing Materials</div>
                        <div className="text-gray-600">Prevents contamination of optical systems</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Radiation Testing</div>
                        <div className="text-gray-600">Total ionizing dose (TID) qualification</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-300 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Satellite Subsystem Applications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Power Systems</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Solar array interconnects (high current density)</li>
                        <li>• Battery busbars (deep discharge cycling)</li>
                        <li>• Power distribution harnesses</li>
                        <li>• DC-DC converter connections</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Communication Systems</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• RF transmission lines (low-loss)</li>
                        <li>• Antenna feed networks</li>
                        <li>• Transponder interconnects</li>
                        <li>• High-frequency flexible cables</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Payload Electronics</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Sensor array connections</li>
                        <li>• Image processor wiring</li>
                        <li>• Scientific instrument interconnects</li>
                        <li>• Data handling system cables</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Thermal Control</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Heat pipe assemblies (high thermal conductivity)</li>
                        <li>• Radiator connections</li>
                        <li>• Thermal strap assemblies</li>
                        <li>• Temperature sensor wiring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Defense Electronics */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Defense Electronics & Systems
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-slate-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Radar & Communication Systems
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Military radar systems operate at high power levels and microwave frequencies, requiring 
                    conductors with minimal losses and excellent EMI shielding. Phased array radars contain 
                    thousands of elements, each requiring precision interconnects. Communication systems must 
                    maintain signal quality in presence of intentional jamming and environmental interference.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Early Warning Radar</div>
                      <div>Long-range detection systems requiring ultra-low-loss RF transmission lines</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Fire Control Systems</div>
                      <div>Target tracking and weapons guidance with millisecond response requirements</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Secure Communications</div>
                      <div>Encrypted tactical communications resistant to interception and jamming</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Electronic Warfare</div>
                      <div>Jamming and countermeasure systems operating across wide frequency bands</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Sonar Systems</div>
                      <div>Underwater detection arrays requiring corrosion-resistant, high-reliability connections</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-2">Command & Control</div>
                      <div>Critical communication links for coordinating operations and directing forces</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 border-2 border-slate-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Missile & Weapons Systems
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Guided missiles and precision weapons require conductors that function reliably under 
                    extreme conditions: high G-forces during launch, temperature extremes from sub-zero 
                    storage to aerodynamic heating, vibration from rocket motors, and electromagnetic 
                    pulses from nearby explosions. Every connection must be absolutely reliable - there 
                    is no opportunity for failure.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-200 border-b-2 border-slate-400">
                          <th className="text-left py-3 px-4 font-semibold">System Type</th>
                          <th className="text-left py-3 px-4 font-semibold">Operating Conditions</th>
                          <th className="text-left py-3 px-4 font-semibold">Material Requirements</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 font-medium">Guidance Systems</td>
                          <td className="py-3 px-4">100G+ acceleration, -40°C to +85°C</td>
                          <td className="py-3 px-4">High-reliability interconnects, shock-resistant</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Warhead Fuzing</td>
                          <td className="py-3 px-4">Extreme shock, EMP exposure</td>
                          <td className="py-3 px-4">EMP-hardened connections, redundant paths</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Rocket Motors</td>
                          <td className="py-3 px-4">+200°C exhaust plume proximity</td>
                          <td className="py-3 px-4">High-temperature wire, ceramic insulation</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Control Surfaces</td>
                          <td className="py-3 px-4">Continuous vibration, aerodynamic heating</td>
                          <td className="py-3 px-4">Flex-rated cable, temperature-stable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Extreme Environment Testing */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Extreme Environment Performance Testing
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-8">
                  All aerospace and defense materials undergo comprehensive environmental testing to verify 
                  performance under extreme conditions. Our test facilities simulate years of operational 
                  stress in accelerated timeframes, ensuring materials will perform reliably throughout 
                  their service life.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Testing</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Thermal Cycling:</strong> -55°C to +200°C, 1000+ cycles minimum</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Thermal Shock:</strong> Rapid temperature changes (±100°C in 1 minute)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>High Temperature Life:</strong> 1000h at maximum rated temperature</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Low Temperature Operation:</strong> Functionality verified at -55°C</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Mechanical Testing</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Vibration:</strong> 10-2000Hz per MIL-STD-810, multiple axes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Mechanical Shock:</strong> 100G+ impulse testing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Flex Life:</strong> 100,000+ bend cycles for flexible assemblies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Constant Acceleration:</strong> 20G sustained loads</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Testing</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Salt Fog:</strong> 1000h exposure per MIL-STD-810 (Method 509)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Humidity:</strong> 95%RH at 85°C for extended periods</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Altitude:</strong> Low pressure testing (80,000 ft equivalent)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Fungus Resistance:</strong> Per MIL-STD-810 (Method 508)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Electrical Testing</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>EMI/EMC:</strong> Emissions and susceptibility per MIL-STD-461</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>Lightning Strike:</strong> Indirect effects testing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>ESD:</strong> Electrostatic discharge susceptibility</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-slate-700 mt-1">✓</span>
                        <span><strong>High Voltage:</strong> Dielectric strength and insulation resistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality & Certification */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Aerospace Quality & Certification
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">AS9100D Certified</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Aerospace Quality Management System certification ensures compliance with the highest 
                      standards for aviation, space, and defense manufacturing. Our certification covers 
                      design, development, production, and servicing of aerospace materials.
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Risk management throughout product lifecycle</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Configuration management and control</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>First article inspection requirements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Counterfeit parts prevention</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-300 rounded-xl p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">DFARS Compliance</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Defense Federal Acquisition Regulation Supplement (DFARS) compliance ensures materials 
                      meet U.S. Department of Defense requirements for supply chain security and material sourcing.
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Domestic material sourcing where required</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Supply chain traceability documentation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Cybersecurity requirements compliance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-700">✓</span>
                        <span>Conflict minerals reporting</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Complete Material Traceability
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Aerospace and defense applications require complete material traceability from raw 
                    material source through final product. Our systems track every batch through the 
                    entire manufacturing process, enabling rapid investigation of any quality issues 
                    and supporting recall management if ever required.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        step: 'Raw Material',
                        items: ['Copper cathode certificates', 'Chemical composition analysis', 'Source country documentation', 'Conflict minerals compliance']
                      },
                      {
                        step: 'Processing',
                        items: ['Process parameter records', 'In-process inspection data', 'Equipment calibration records', 'Environmental monitoring']
                      },
                      {
                        step: 'Final Product',
                        items: ['Dimensional inspection reports', 'Electrical test results', 'Material certifications', 'Batch code traceability']
                      }
                    ].map((stage, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 mb-3">{stage.step}</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {stage.items.map((item, iidx) => (
                            <li key={iidx} className="flex items-start space-x-2">
                              <span className="text-slate-600">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
                    q: 'What aerospace and military specifications do your materials comply with?',
                    a: 'Our materials are qualified to multiple aerospace and military specifications including: MIL-DTL-27500 (high-temperature aircraft wire), MIL-W-16878 (hook-up wire), MIL-STD-810 (environmental testing), MIL-STD-461 (EMI/EMC requirements), AS9100 (aerospace quality management), and various customer-specific requirements. We maintain qualification test reports demonstrating compliance with each specification. For space applications, we provide materials meeting NASA outgassing requirements (ASTM E595) and radiation hardness requirements. Contact our aerospace team for specific specification compliance documentation.'
                  },
                  {
                    q: 'How do you ensure material traceability for aerospace applications?',
                    a: 'Complete material traceability is maintained throughout the entire supply chain: (1) Raw copper ingots are tagged with supplier lot numbers and include certificates showing chemical composition and source, (2) During processing, materials are tracked through our ERP system with unique batch codes, (3) All processing parameters, in-process inspections, and test results are linked to batch codes in our quality database, (4) Finished products are labeled with batch codes that can be traced back to the original raw material, (5) We maintain these records for the full product lifecycle (minimum 10 years, often longer for aerospace programs). This enables rapid investigation of any quality issues and supports aerospace supply chain audit requirements.'
                  },
                  {
                    q: 'What lead times should we expect for aerospace-grade materials?',
                    a: 'Lead times for aerospace materials are typically longer than commercial products due to additional testing and documentation requirements: Standard aerospace materials with existing qualifications: 8-12 weeks. New part numbers requiring qualification testing: 12-16 weeks. Custom specifications requiring material development: 16-24 weeks. Space-qualified materials with specialized testing: 16-20 weeks. These lead times include all necessary testing, documentation preparation, and quality reviews. For established programs with regular orders, we can maintain consignment inventory to support shorter lead times. Emergency aerospace orders can sometimes be expedited - contact us to discuss specific requirements and current production schedules.'
                  },
                  {
                    q: 'Do you support ITAR-restricted defense programs?',
                    a: 'Yes, Raytron is registered with the U.S. Department of State under the International Traffic in Arms Regulations (ITAR) and can support defense programs with controlled technology or technical data. We maintain appropriate facilities, personnel security clearances, and procedures for handling ITAR-controlled information. Our ITAR registration covers the design, development, and manufacture of defense articles as defined in Category VIII (Aircraft and Related Articles) and Category XI (Military Electronics) of the U.S. Munitions List. We work closely with defense contractors and can execute Technical Assistance Agreements (TAAs) or Manufacturing License Agreements (MLAs) as required for specific programs. Contact our defense programs office to discuss your specific ITAR requirements.'
                  },
                  {
                    q: 'What minimum order quantities apply for aerospace materials?',
                    a: 'MOQ for aerospace materials varies based on specification and whether qualification testing is required: Materials with existing qualifications: 100-200kg minimum. Materials requiring first article testing: 500-1000kg minimum to offset qualification costs. Space-qualified materials: 200-500kg due to specialized testing requirements. However, we recognize that aerospace programs often start with small quantities during development and prototyping. We can provide development samples (10-50kg) for qualified programs with commitment to transition to production volumes. We also participate in customer qualification programs where our materials undergo testing at customer facilities. Contact our aerospace sales team to discuss flexible arrangements for new programs.'
                  },
                  {
                    q: 'How do you qualify materials for extreme temperature applications?',
                    a: 'Extreme temperature qualification involves comprehensive testing: (1) Thermal cycling from -55°C to the maximum rated temperature (typically +200°C or higher) for 1000+ cycles minimum, (2) High-temperature life testing at maximum rated temperature for 1000-3000 hours to verify long-term stability, (3) Low-temperature testing at -55°C (or lower for space applications) to verify ductility and electrical properties, (4) Thermal shock testing with rapid temperature changes to verify thermal fatigue resistance, (5) Combined environment testing (temperature + vibration + humidity) to simulate real operational conditions. All testing is documented with complete test reports including temperature profiles, electrical measurements before/after testing, visual inspection results, and metallurgical analysis where applicable. Materials are qualified to meet or exceed MIL-STD-810 requirements.'
                  },
                  {
                    q: 'Can you provide materials for space applications with radiation requirements?',
                    a: 'Yes, we supply materials for space applications with appropriate radiation hardness: For low Earth orbit (LEO) satellites: Materials resistant to total ionizing dose (TID) of 50-100 krad. For geostationary orbit (GEO): Materials qualified to 100-300 krad TID. For deep space missions: Custom qualification to mission-specific radiation profiles. Our high-purity copper (99.99%+) inherently provides good radiation resistance. We can provide test data from previous qualification programs and arrange for radiation testing at qualified facilities if required. Materials also meet NASA outgassing requirements (Total Mass Loss <1.0%, Collected Volatile Condensable Material <0.1%) verified per ASTM E595 testing. Silver plating is typically applied for space applications to prevent oxidation in storage and maintain low contact resistance.'
                  },
                  {
                    q: 'What documentation packages do you provide for aerospace deliveries?',
                    a: 'Every aerospace delivery includes a comprehensive documentation package: (1) Certificate of Conformance signed by quality manager certifying compliance with specifications, (2) Material Test Report with chemical composition, electrical conductivity, tensile properties, and dimensional measurements, (3) Material Traceability Certificate linking product to raw material lot numbers, (4) Qualification Test Reports (when applicable) showing environmental testing results, (5) First Article Inspection Report for new part numbers, (6) Special Process Certifications for plating or heat treatment, (7) DFARS compliance statements for DoD programs, (8) REACH/RoHS declarations for European programs. Additional documentation (such as country of origin, conflict minerals reports, or specific test data) can be provided as required by contract. All documents are digitally archived and can be retrieved for customer audits or investigations.'
                  }
                ].map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 group hover:border-slate-400 transition">
                    <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-slate-700 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
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
            <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white rounded-2xl p-8 shadow-2xl sticky top-4">
              <h3 className="text-2xl font-bold mb-4">Request Aerospace Materials</h3>
              <p className="mb-6 text-slate-200 leading-relaxed">
                Get MIL-SPEC compliant materials with complete qualification documentation and test reports
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company/Organization *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white focus:bg-white/20 transition">
                  <option value="" className="text-gray-900">Application Type *</option>
                  <option value="aircraft" className="text-gray-900">Aircraft Systems</option>
                  <option value="satellite" className="text-gray-900">Satellite/Space</option>
                  <option value="defense" className="text-gray-900">Defense Electronics</option>
                  <option value="missile" className="text-gray-900">Missile/Weapons</option>
                  <option value="radar" className="text-gray-900">Radar/Communications</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                <textarea
                  placeholder="Specifications required (MIL-SPEC, operating conditions, quantity...)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-white focus:bg-white/20 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-slate-900 font-semibold py-4 rounded-lg hover:bg-slate-100 transition shadow-lg text-lg"
                >
                  Request Samples & Documentation
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/20 text-sm text-slate-200 space-y-2">
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>AS9100 certified manufacturing</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Complete qualification test reports</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>DFARS compliant sourcing</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-lg">✓</span>
                  <span>Full material traceability</span>
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aerospace Resources</h3>
              <div className="space-y-3">
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-slate-900">Aerospace Materials Catalog</span>
                  <span className="text-slate-700 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-slate-900">MIL-SPEC Compliance Guide</span>
                  <span className="text-slate-700 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-slate-900">Environmental Test Reports</span>
                  <span className="text-slate-700 font-bold">↓ PDF</span>
                </Link>
                <Link
                  href="https://en.raytron.group/resources"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-slate-500 hover:shadow-sm transition group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-slate-900">AS9100 Certification</span>
                  <span className="text-slate-700 font-bold">↓ PDF</span>
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aerospace Products</h3>
              <div className="space-y-2">
                <Link href="https://en.raytron.group/products/silver-clad-copper-wire-rod" className="block text-slate-700 hover:text-slate-900 hover:underline font-medium">
                  → Silver Clad Copper
                </Link>
                <Link href="https://en.raytron.group/products/nickel-clad-copper-wire-rod" className="block text-slate-700 hover:text-slate-900 hover:underline font-medium">
                  → Nickel Clad Copper
                </Link>
                <Link href="https://en.raytron.group/products/copper/copper-strip" className="block text-slate-700 hover:text-slate-900 hover:underline font-medium">
                  → High-Purity Copper
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">AS9100D</div>
                    <div className="text-xs text-gray-600">Aerospace QMS</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">DFARS Compliant</div>
                    <div className="text-xs text-gray-600">Defense Sourcing</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">ITAR Registered</div>
                    <div className="text-xs text-gray-600">Defense Programs</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">NADCAP</div>
                    <div className="text-xs text-gray-600">Special Processes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Materials Trusted for Mission Success
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            When mission failure is not an option, trust Raytron for high-reliability conductor 
            materials that meet the most demanding aerospace and defense requirements. From commercial 
            aviation to space exploration, from fighter jets to missile systems, we deliver the quality, 
            reliability, and support that mission success demands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://en.raytron.group/contact?industry=aerospace"
              className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-semibold transition shadow-xl text-lg"
            >
              Contact Aerospace Team
            </Link>
            <Link
              href="https://en.raytron.group/products"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-lg font-semibold transition text-lg"
            >
              Browse Military-Grade Products
            </Link>
          </div>
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">20+ Years</div>
                <div className="text-slate-300">Aerospace Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Zero Defects</div>
                <div className="text-slate-300">Quality Standard</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30+ Partners</div>
                <div className="text-slate-300">Global Aerospace OEMs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
