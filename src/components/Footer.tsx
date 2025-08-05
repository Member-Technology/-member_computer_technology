import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin, Monitor, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Products': [
      'Laptops',
      'Desktop Computers',
      'Gaming PCs',
      'Accessories',
      'Components'
    ],
    'Services': [
      'Computer Setup',
      'Technical Support',
      'Warranty Service',
      'Custom Builds',
      'Consultation'
    ],
    'Support': [
      'Contact Us',
      'FAQ',
      'Warranty Info',
      'Return Policy',
      'Shipping Info'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'News',
      'Partners'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Monitor className="text-white" size={32} />
              </div>
              <div>
                <span className="text-white font-semibold text-xl">MEMBER COMPUTER</span>
                <div className="text-blue-400 text-sm font-medium">TECHNOLOGY</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted technology partner in Tanzania. 
              We provide quality computers, professional service, 
              and ongoing support for all your tech needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={16} />
                <span className="text-slate-400 text-sm">+255 756544891</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={16} />
                <span className="text-slate-400 text-sm">membercomputer73@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" size={16} />
                <span className="text-slate-400 text-sm">Main branch in Mbeya, Tanzania</span>
                 <span className="text-slate-400 text-sm">Other branch in Kasulu-Kigoma, Tanzania</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="text-slate-400 text-sm">
                © 2025 MEMBER COMPUTER TECHNOLOGY
              </div>
            </div>

            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;