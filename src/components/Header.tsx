import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className={`font-serif text-2xl md:text-3xl tracking-wider ${
            isScrolled ? 'text-burgundy-900' : 'text-ivory-50'
          } transition-colors duration-300`}>
            WeddingShagun
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Gallery', 'About', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative font-sans text-sm tracking-wider uppercase transition-colors duration-300 
                ${isScrolled ? 'text-burgundy-800 hover:text-gold-600' : 'text-ivory-50 hover:text-gold-300'}
                after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] 
                after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`${isScrolled ? 'text-burgundy-900' : 'text-ivory-50'} h-6 w-6`} />
          ) : (
            <Menu className={`${isScrolled ? 'text-burgundy-900' : 'text-ivory-50'} h-6 w-6`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-burgundy-900/95 backdrop-blur-sm transition-all duration-300 
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {['Home', 'Services', 'Gallery', 'About', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-xl text-ivory-50 mb-8 tracking-wider uppercase hover:text-gold-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;