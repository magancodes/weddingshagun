import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "WeddingShagun transformed our vision into a breathtaking reality. Every detail was executed with precision and creativity, making our wedding truly unforgettable.",
      author: "Priya & Arjun",
      role: "Delhi Wedding",
      image: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg"
    },
    {
      quote: "Working with WeddingShagun was the best decision we made. Their attention to detail and ability to blend traditional elements with modern touches created a magical experience.",
      author: "Meera & Vikram",
      role: "Udaipur Palace Wedding",
      image: "https://images.pexels.com/photos/2418319/pexels-photo-2418319.jpeg"
    },
    {
      quote: "We couldn't have asked for a better team to plan our destination wedding. Their professionalism, creativity, and commitment to excellence exceeded our expectations.",
      author: "Ananya & Rohan",
      role: "Goa Beach Wedding",
      image: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-24 bg-burgundy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <div className="w-full h-full border-2 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <div className="w-full h-full border-2 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-serif italic text-lg mb-2">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory-50 mb-6 relative inline-block">
            Love Stories
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-400"></div>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-96 overflow-hidden rounded-sm order-2 md:order-1">
              <div className="absolute inset-0 border border-gold-400 -translate-x-4 -translate-y-4 z-0"></div>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative z-10 bg-burgundy-800/50 p-8 md:p-10 order-1 md:order-2">
              <Quote className="w-12 h-12 text-gold-400 mb-4 absolute -top-6 -left-6" />
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute inset-0'
                  }`}
                >
                  <p className="text-ivory-50 text-xl italic mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-serif text-gold-400 text-xl">{testimonial.author}</p>
                    <p className="text-ivory-50/80">{testimonial.role}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-burgundy-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-burgundy-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;