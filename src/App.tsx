import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/tailwind.css';

// Custom CSS for the font families and additional styles
const App: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = "WeddingShagun | Luxury Indian Wedding Planning";
  }, []);

  return (
    <div className="font-sans text-burgundy-800">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;