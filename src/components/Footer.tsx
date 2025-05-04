import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy-900 text-ivory-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <h2 className="font-serif text-2xl tracking-wider mb-4">WeddingShagun</h2>
            <p className="text-ivory-50/80 mb-6">
              Crafting extraordinary wedding experiences with timeless elegance and cultural richness since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory-50/80 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-ivory-50/80 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-ivory-50/80 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-ivory-50/80 hover:text-gold-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-ivory-50/80 hover:text-gold-400 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Wedding Planning', 
                'Event Coordination', 
                'Decor & Design', 
                'Venue Selection', 
                'Catering Services', 
                'Photography'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-ivory-50/80 hover:text-gold-400 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl mb-4">Subscribe</h3>
            <p className="text-ivory-50/80 mb-4">
              Subscribe to our newsletter for wedding inspiration and exclusive offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-3 bg-burgundy-800 border-none focus:ring-0 text-ivory-50 outline-none"
              />
              <button 
                type="submit" 
                className="bg-gold-600 text-burgundy-900 px-4 hover:bg-gold-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-burgundy-800/50 text-center">
          <p className="text-ivory-50/60 text-sm">
            © {new Date().getFullYear()} WeddingShagun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;