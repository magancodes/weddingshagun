import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  text: string;
}

const Stat: React.FC<StatProps> = ({ icon, number, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-gold-500 mb-4">
        {icon}
      </div>
      <p className="font-serif text-4xl text-burgundy-900 mb-2">{number}</p>
      <p className="text-burgundy-700 text-center">{text}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-ivory-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold-600 font-serif italic text-lg mb-2">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy-900 mb-6 relative inline-block">
              About WeddingShagun
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gold-400"></div>
            </h2>
            
            <p className="text-burgundy-700 mb-6 leading-relaxed">
              Founded in 2010, WeddingShagun has established itself as the premier wedding planning company in India, specializing in creating magnificent celebrations that honor both tradition and contemporary elegance.
            </p>
            
            <p className="text-burgundy-700 mb-8 leading-relaxed">
              Our team of dedicated experts brings together extensive experience, creativity, and precision to transform your wedding dreams into reality. From intimate gatherings to grand celebrations across stunning destinations, we infuse each event with cultural richness and personalized details.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-ivory-50 p-6 border-l-2 border-gold-400">
                <h3 className="font-serif text-xl text-burgundy-900 mb-2">Excellence</h3>
                <p className="text-burgundy-700 text-sm">We pursue perfection in every detail, no matter how small.</p>
              </div>
              
              <div className="bg-ivory-50 p-6 border-l-2 border-gold-400">
                <h3 className="font-serif text-xl text-burgundy-900 mb-2">Authenticity</h3>
                <p className="text-burgundy-700 text-sm">We honor traditions while creating unique experiences.</p>
              </div>
              
              <div className="bg-ivory-50 p-6 border-l-2 border-gold-400">
                <h3 className="font-serif text-xl text-burgundy-900 mb-2">Trust</h3>
                <p className="text-burgundy-700 text-sm">We build relationships based on integrity and reliability.</p>
              </div>
            </div>
            
            <button
              className="relative group px-8 py-3 bg-transparent overflow-hidden"
              aria-label="Learn More"
            >
              <div className="absolute inset-0 w-0 bg-burgundy-800 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative z-10 text-burgundy-900 font-medium tracking-wider group-hover:text-ivory-50 transition-colors">
                Our Story
              </span>
              <div className="absolute inset-0 border border-burgundy-800"></div>
            </button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 relative z-10 rounded-sm overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" 
                alt="Luxury Indian Wedding" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 -translate-y-8 translate-x-8 border-t-2 border-r-2 border-gold-400 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 translate-y-8 -translate-x-8 border-b-2 border-l-2 border-gold-400 z-0"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat 
            icon={<Heart className="w-8 h-8" />} 
            number="500+" 
            text="Weddings Planned" 
          />
          <Stat 
            icon={<Users className="w-8 h-8" />} 
            number="20+" 
            text="Expert Planners" 
          />
          <Stat 
            icon={<Award className="w-8 h-8" />} 
            number="15+" 
            text="Years Experience" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;