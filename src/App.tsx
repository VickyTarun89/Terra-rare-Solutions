import React, { useState } from 'react';
import { 
  Recycle, 
  Shield, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  Award,
  Truck,
  Factory,
  Users,
  Globe,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Terrarare Solutions</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
              <a href="#sustainability" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sustainability</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            </nav>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-100 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-semibold">CPCB/SPCB Certified</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transforming 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> e‑waste</span>
                <br />into opportunity
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                India's trusted leader in responsible electronic waste recycling. We help businesses and 
                communities turn their electronic waste into valuable resources while ensuring complete 
                environmental compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center">
                  Schedule Pickup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Tons Recycled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Cities Covered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/Untitled-design-30-1200x675.jpg" 
                  alt="Electronic waste recycling facility" 
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">100% Secure</div>
                    <div className="text-sm text-gray-600">Data Destruction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive e-waste solutions designed to help you meet regulatory requirements 
              while maximizing resource recovery and environmental protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* E-waste Management */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">E‑waste Management</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Complete lifecycle management of electronic waste with secure collection, 
                processing, and resource recovery services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Secure Pickup & Transportation</div>
                    <div className="text-gray-600">Door-to-door collection with certified vehicles and tracking</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Resource Recovery</div>
                    <div className="text-gray-600">Extract valuable materials: gold, copper, lithium, and plastics</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Data Security</div>
                    <div className="text-gray-600">Complete data destruction with certification</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EPR Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">EPR Services</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Extended Producer Responsibility compliance support to help manufacturers 
                meet India's E‑Waste Rules 2022 requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Regulatory Compliance</div>
                    <div className="text-gray-600">Full compliance with E‑Waste Rules 2022 and CPCB guidelines</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Documentation & Reporting</div>
                    <div className="text-gray-600">Complete audit trail and regulatory reporting support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Target Achievement</div>
                    <div className="text-gray-600">Help meet mandatory recycling targets and obligations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Philosophy */}
      <section id="sustainability" className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-green-400 font-semibold text-lg">Sustainability Philosophy</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Building a Circular Economy for Electronics
              </h2>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Our mission is to conserve precious natural resources by creating a sustainable 
                circular economy for electronic products. We believe every device has value 
                beyond its first life.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Reducing Virgin Mining</h4>
                    <p className="text-green-100">
                      Every ton of e-waste we process reduces the need for virgin material extraction, 
                      protecting ecosystems and reducing carbon footprint.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                    <Recycle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Resource Conservation</h4>
                    <p className="text-green-100">
                      We recover up to 95% of materials from electronic waste, transforming 
                      discarded devices into valuable resources for new products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Community Impact</h4>
                    <p className="text-green-100">
                      Creating green jobs and awareness programs to build a sustainable 
                      future for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/sustainable-e-waste-management-nurturing-a-greener-future-1920x1274.jpg" 
                alt="Sustainable recycling process" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Reach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities & Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations across India with state-of-the-art recycling centers 
              and comprehensive collection networks in major metropolitan areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Advanced Facilities</h4>
              <p className="text-gray-600">
                Multiple state-of-the-art recycling centers equipped with latest technology
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Metro Coverage</h4>
              <p className="text-gray-600">
                Comprehensive collection network across major Indian metropolitan areas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">15+ Cities</h4>
              <p className="text-gray-600">
                Operating in major cities including Chennai, Mumbai, Delhi, Bangalore, and more
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Certified Process</h4>
              <p className="text-gray-600">
                All facilities certified and regularly audited for environmental compliance
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Headquartered in Chennai, Tamil Nadu
                </h3>
                <p className="text-gray-700 mb-6">
                  Our main facility in Chennai serves as the hub for our operations across South India, 
                  featuring advanced processing equipment and a dedicated team of recycling specialists.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">24/7 Collection Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">ISO Certified Facilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Real-time Tracking & Reporting</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/Untitled-design.png" 
                  alt="Recycling facility interior" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Connect Your E‑waste to Our Responsibility
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to make a positive environmental impact? Get in touch with us for 
              customized e-waste solutions that meet your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-green-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-green-100">info@terrararesolutions.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Office</div>
                    <div className="text-green-100">
                      123 Industrial Estate<br />
                      Chennai, Tamil Nadu 600001<br />
                      India
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Why Choose Terrarare Solutions?</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>CPCB Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>ISO Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Data Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your e-waste requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Terrarare Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                India's trusted partner in responsible electronic waste recycling 
                and sustainable resource recovery.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-xs font-bold">LI</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                  <span className="text-xs font-bold">TW</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#sustainability" className="block text-gray-400 hover:text-white transition-colors">Sustainability</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-gray-400">E‑waste Management</div>
                <div className="text-gray-400">EPR Services</div>
                <div className="text-gray-400">Data Destruction</div>
                <div className="text-gray-400">Resource Recovery</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400 text-sm">CPCB Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">ISO 14001:2015</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400 text-sm">SPCB Authorized</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2025 Terrarare Solutions. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;