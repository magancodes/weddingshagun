import React, { useState } from 'react';

const categories = ['All', 'Ceremonies', 'Decor', 'Venues', 'Celebrations'];

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/2308795/pexels-photo-2308795.jpeg",
      alt: "Indian wedding ceremony",
      category: "Ceremonies"
    },
    {
      src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      alt: "Luxury wedding decor",
      category: "Decor"
    },
    {
      src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
      alt: "Mandap decoration",
      category: "Decor"
    },
    {
      src: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg",
      alt: "Wedding venue",
      category: "Venues"
    },
    {
      src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
      alt: "Wedding celebration",
      category: "Celebrations"
    },
    {
      src: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
      alt: "Traditional ceremony",
      category: "Ceremonies"
    },
    {
      src: "https://images.pexels.com/photos/2418319/pexels-photo-2418319.jpeg",
      alt: "Palace venue",
      category: "Venues"
    },
    {
      src: "https://images.pexels.com/photos/1345360/pexels-photo-1345360.jpeg",
      alt: "Wedding celebration",
      category: "Celebrations"
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-ivory-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-serif italic text-lg mb-2">Our Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy-900 mb-6 relative inline-block">
            Wedding Gallery
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-400"></div>
          </h2>
          <p className="max-w-2xl mx-auto text-burgundy-700 text-lg">
            A glimpse into the magical moments and exquisite details we've crafted for our cherished couples.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'text-ivory-50 bg-burgundy-800'
                  : 'text-burgundy-800 bg-transparent border border-burgundy-200 hover:border-burgundy-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden h-64 md:h-72 cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy-900/0 group-hover:bg-burgundy-900/40 transition-all duration-300 flex items-center justify-center">
                <div className="px-4 py-2 bg-ivory-50/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-burgundy-900 font-medium text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;