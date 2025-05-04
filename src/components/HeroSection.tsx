import React from 'react';
import { ChevronDown } from 'lucide-react';
import herovideo from "../../assets/herovid.mp4"

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-burgundy-900/30 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src={herovideo}
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory-50 leading-tight mb-6 animate-fade-in">
            <span className="block italic">Your Dream Wedding</span>
            <span className="block italic">Starts Here</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-ivory-50/90 mb-10 max-w-2xl mx-auto">
            Crafting extraordinary wedding experiences with timeless elegance and cultural richness
          </p>
          
          <button
            onClick={scrollToContact}
            className="relative group px-8 py-3 bg-transparent overflow-hidden"
            aria-label="Get in Touch"
          >
            <div className="absolute inset-0 w-0 bg-gold-600 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative z-10 text-ivory-50 font-medium tracking-wider group-hover:text-burgundy-900 transition-colors">
              Get In Touch
            </span>
            <div className="absolute inset-0 border border-gold-400 group-hover:border-gold-600 transition-colors"></div>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div 

          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          
          
        >
          <ChevronDown className="h-8 w-8 text-gold-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;