// app/contact/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Raytron - Request Quote & Technical Support',
  description: 'Contact Raytron for product quotes, technical support, and sample requests. Global offices serving 50+ countries. Response within 24 hours guaranteed.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Raytron",
            "url": "https://en.raytron.group/contact",
            "description": "Contact Raytron for quotes, technical support, and product information"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get in Touch with Raytron</h1>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a product quote, technical consultation, or sample materials, 
              our team is ready to assist you. We respond to all inquiries within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-blue-300">⏱️</span>
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-blue-300">🌍</span>
                <span>Global Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-blue-300">🔬</span>
                <span>Technical Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:sales@raytron.group" className="text-blue-600 hover:underline">
                sales@raytron.group
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+8613912345678" className="text-blue-600 hover:underline">
                +86 139 1234 5678
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">WeChat</h3>
              <p className="text-gray-600">Raytron_Official</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600">Schedule Tour</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 bg-gray-50">
                <button className="flex-1 px-6 py-4 font-semibold text-blue-600 border-b-2 border-blue-600 bg-white">
                  Request Quote
                </button>
                <button className="flex-1 px-6 py-4 font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  Technical Inquiry
                </button>
                <button className="flex-1 px-6 py-4 font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  Request Samples
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Custom Quote</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below with your requirements. Our sales team will respond 
                  with a detailed quotation within 24 hours.
                </p>

                <form className="space-y-6">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Select Industry</option>
                          <option value="solar">Solar Energy</option>
                          <option value="battery">Battery & Energy Storage</option>
                          <option value="cable">Cable & Wire Manufacturing</option>
                          <option value="automotive">Automotive & EV</option>
                          <option value="electronics">Electronics</option>
                          <option value="medical">Medical Devices</option>
                          <option value="aerospace">Aerospace & Defense</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Person</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Purchasing Manager"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Country</option>
                          <option value="us">United States</option>
                          <option value="cn">China</option>
                          <option value="de">Germany</option>
                          <option value="jp">Japan</option>
                          <option value="kr">South Korea</option>
                          <option value="in">India</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your City"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Category *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Product</option>
                          <option value="cca">Copper Clad Aluminum</option>
                          <option value="ncc">Nickel Clad Copper</option>
                          <option value="copper">Copper Strip & Foil</option>
                          <option value="pv">Photovoltaic Ribbon</option>
                          <option value="enameled">Enameled Wire</option>
                          <option value="other">Other Products</option>
                        </select>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thickness (mm)
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0.15"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Width (mm)
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Surface Treatment
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">Select</option>
                            <option value="bare">Bare Copper</option>
                            <option value="tin">Tin Plated</option>
                            <option value="nickel">Nickel Plated</option>
                            <option value="silver">Silver Plated</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Required Quantity (kg/month) *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="e.g., 5000 kg/month"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Application Description *
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe your application, technical requirements, and any special specifications..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Technical Drawing / Specification (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition cursor-pointer">
                          <div className="text-4xl mb-2">📎</div>
                          <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-500">PDF, DWG, or image files (Max 10MB)</p>
                          <input type="file" className="hidden" accept=".pdf,.dwg,.jpg,.png" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-start space-x-3 pt-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="https://en.raytron.group/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and consent to being contacted by Raytron.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition text-lg"
                  >
                    Submit Quote Request
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    🕐 We typically respond within 24 hours during business days
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Why Contact Raytron?</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: '⚡',
                    title: 'Fast Response',
                    desc: '24-hour guaranteed response time'
                  },
                  {
                    icon: '🔬',
                    title: 'Expert Team',
                    desc: 'Technical specialists available'
                  },
                  {
                    icon: '🎯',
                    title: 'Custom Solutions',
                    desc: 'Tailored to your requirements'
                  },
                  {
                    icon: '🌍',
                    title: 'Global Support',
                    desc: 'Serving 50+ countries'
                  },
                  {
                    icon: '📊',
                    title: 'Free Samples',
                    desc: 'Test before large orders'
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <p className="text-xs text-gray-500 pt-3 border-t">
                  * China Standard Time (UTC+8)
                </p>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Sales Department</h4>
                  <a href="mailto:sales@raytron.group" className="text-blue-600 hover:underline block">
                    sales@raytron.group
                  </a>
                  <a href="tel:+8613912345678" className="text-gray-600 text-sm">
                    +86 139 1234 5678
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Technical Support</h4>
                  <a href="mailto:tech@raytron.group" className="text-blue-600 hover:underline block">
                    tech@raytron.group
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">General Inquiries</h4>
                  <a href="mailto:info@raytron.group" className="text-blue-600 hover:underline block">
                    info@raytron.group
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-blue-50 transition"
                >
                  <span className="text-2xl mb-2">💼</span>
                  <span className="text-xs text-gray-600">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-blue-50 transition"
                >
                  <span className="text-2xl mb-2">📹</span>
                  <span className="text-xs text-gray-600">YouTube</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-blue-50 transition"
                >
                  <span className="text-2xl mb-2">💬</span>
                  <span className="text-xs text-gray-600">WeChat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Global Office Network
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: 'Asia Pacific Headquarters',
                city: 'Shanghai, China',
                address: '123 Manufacturing Road, Songjiang District',
                phone: '+86 21 1234 5678',
                email: 'asia@raytron.group'
              },
              {
                region: 'North America Office',
                city: 'Los Angeles, USA',
                address: '456 Commerce Street, CA 90001',
                phone: '+1 213 123 4567',
                email: 'americas@raytron.group'
              },
              {
                region: 'Europe Office',
                city: 'Frankfurt, Germany',
                address: '789 Industrial Avenue, 60311',
                phone: '+49 69 1234 5678',
                email: 'europe@raytron.group'
              }
            ].map((office, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.region}</h3>
                <p className="text-lg text-blue-600 font-medium mb-4">{office.city}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📍 {office.address}</p>
                  <p>📞 <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-blue-600">{office.phone}</a></p>
                  <p>📧 <a href={`mailto:${office.email}`} className="hover:text-blue-600">{office.email}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Manufacturing Facility
          </h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-500">[Interactive Map Placeholder - Integrate Google Maps API]</p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Interested in visiting our manufacturing facility? Schedule a tour to see our 
              advanced production lines and quality control laboratories.
            </p>
            <Link
              href="https://en.raytron.group/about"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Schedule Factory Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}