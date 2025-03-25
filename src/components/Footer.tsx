
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-humanitarian-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-6">
              <Heart className="h-7 w-7 text-humanitarian-300" />
              <span className="ml-2 text-xl font-display font-semibold">Âme Liñu Bokk</span>
            </div>
            <p className="text-warm-400 mb-6">
              Empowering communities through sustainable development, education, and healthcare initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-warm-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#mission" className="text-warm-400 hover:text-white transition-colors">Our Mission</a>
              </li>
              <li>
                <a href="#programs" className="text-warm-400 hover:text-white transition-colors">Programs</a>
              </li>
              <li>
                <a href="#" className="text-warm-400 hover:text-white transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-warm-400 hover:text-white transition-colors">Latest News</a>
              </li>
              <li>
                <a href="#donate" className="text-warm-400 hover:text-white transition-colors">Donate</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <span className="text-warm-400">
                  123 Compassion Way<br />
                  Global City, Earth 12345
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-warm-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@amelinubokk.org" className="text-warm-400 hover:text-white transition-colors">
                  info@amelinubokk.org
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Stay Updated</h3>
            <p className="text-warm-400 mb-4">
              Subscribe to our newsletter for updates on our work and impact.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-l-lg px-4 py-2 w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-humanitarian-500 hover:bg-humanitarian-600 rounded-r-lg px-4 py-2 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-warm-400 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-humanitarian-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-400 text-sm mb-4 md:mb-0">
              © {currentYear} Âme Liñu Bokk. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
