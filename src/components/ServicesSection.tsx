import React from 'react';
import { Heart, Calendar, UsersRound, Sparkles, UtensilsCrossed, Music, Map, Camera } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-ivory-50 p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-gold-200">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 -translate-y-1/2 translate-x-1/2">
        <div className="absolute top-0 right-0 w-full h-full border-b border-r border-gold-300 transform rotate-45"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-16 h-16 translate-y-1/2 -translate-x-1/2">
        <div className="absolute bottom-0 left-0 w-full h-full border-t border-l border-gold-300 transform rotate-45"></div>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 text-gold-600 transform group-hover:scale-110 transition-transform duration-300 p-4">
          {icon}
        </div>
        
        <h3 className="font-serif text-2xl mb-4 text-burgundy-900">{title}</h3>
        
        <p className="text-burgundy-700 text-center">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding Planning",
      description: "Comprehensive planning services tailored to your vision, from intimate gatherings to grand celebrations."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Coordination",
      description: "Flawless execution of your special day with attention to every detail and timeline management."
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: "Family Ceremonies",
      description: "Traditional ceremony planning with cultural authenticity and personal significance."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Decor & Design",
      description: "Exquisite aesthetics that transform venues into magical spaces reflecting your unique style."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Catering Services",
      description: "Curated menus featuring gourmet cuisine, from regional specialties to international fare."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Entertainment",
      description: "Unforgettable entertainment options from traditional musicians to contemporary performers."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Venue Selection",
      description: "Access to exclusive venues across India and international destinations for your dream wedding."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Capturing timeless moments with artistic vision and technical excellence."
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-ivory-100 to-blush-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-serif italic text-lg mb-2">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy-900 mb-6 relative inline-block">
            Exceptional Services
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-400"></div>
          </h2>
          <p className="max-w-2xl mx-auto text-burgundy-700 text-lg">
            From intimate gatherings to grand celebrations, we craft memorable experiences with elegance and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;