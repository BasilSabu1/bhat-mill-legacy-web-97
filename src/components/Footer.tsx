
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Request Quote', href: '#quote' },
  ];

  const productCategories = [
    'Fasteners & Hardware',
    'Valves & Fittings', 
    'Hand Tools',
    'Power Tools',
    'Safety Equipment',
    'Maintenance Supplies'
  ];

  const services = [
    'Fast Delivery',
    'Technical Support',
    'Custom Quotations',
    'Installation Support',
    '24/7 Emergency Service',
    'Pan-Kerala Coverage'
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-yellow text-navy p-2 rounded-lg">
                <span className="font-montserrat font-bold text-xl">KB</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl leading-tight">
                  Krishna Bhat Mill Stores
                </h3>
                <p className="text-white/80 text-sm">Since 1946</p>
              </div>
            </div>
            
            <p className="font-open-sans text-white/90 leading-relaxed mb-6">
              Kerala's most trusted industrial supply partner for 78 years. 
              Three generations of excellence in quality products and reliable service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow flex-shrink-0" />
                <span className="font-open-sans text-sm text-white/90">
                 Cloth Bazar Rd, Cloth Bazar, Shenoys, Kochi, Ernakulam, Kerala 682031
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow flex-shrink-0" />
                <span className="font-open-sans text-sm text-white/90">
                  +91  98471 80012
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow flex-shrink-0" />
                <span className="font-open-sans text-sm text-white/90">
                  info@krishnabhatmillstores.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-open-sans text-white/80 hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <span className="font-open-sans text-white/80 text-sm">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="font-open-sans text-white/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Information */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Business Information</h4>
              <div className="space-y-2 font-open-sans text-sm text-white/80">
                <p><span className="text-yellow">GSTIN:</span> 32ABCDE1234F1Z5</p>
                <p><span className="text-yellow">Business Hours:</span> Mon-Sat: 8:00 AM - 8:00 PM</p>
                <p><span className="text-yellow">Emergency Service:</span> 24/7 Available</p>
                <p><span className="text-yellow">Established:</span> 1946 - Serving Kerala for 78+ years</p>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-yellow hover:text-navy p-2 rounded-lg transition-all duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-yellow hover:text-navy p-2 rounded-lg transition-all duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-yellow hover:text-navy p-2 rounded-lg transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-yellow hover:text-navy p-2 rounded-lg transition-all duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="font-open-sans text-white/80 text-sm">
              © 2024 Krishna Bhat Mill Stores. All rights reserved. 
              <span className="text-yellow"> Proudly serving Kerala since 1946.</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-open-sans text-white/80 hover:text-yellow text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-open-sans text-white/80 hover:text-yellow text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-open-sans text-white/80 hover:text-yellow text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
