import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will contact you soon!');
  };

  return (
    <section id="contact" className="py-24 bg-ivory-50 relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M-3,3 l6,0 l0,-6 l-6,0 z" fill="currentColor" stroke="none" className="text-burgundy-900" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M-3,3 l6,0 l0,-6 l-6,0 z" fill="currentColor" stroke="none" className="text-burgundy-900" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern2)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-600 font-serif italic text-lg mb-2">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-burgundy-900 mb-6 relative inline-block">
            Contact Us
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-400"></div>
          </h2>
          <p className="max-w-2xl mx-auto text-burgundy-700 text-lg">
            Ready to begin your wedding journey? Contact us to schedule a consultation with our expert planners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 shadow-lg border border-gold-200">
            <h3 className="font-serif text-2xl text-burgundy-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-burgundy-800 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gold-200 focus:border-gold-400 focus:ring-0 outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-burgundy-800 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gold-200 focus:border-gold-400 focus:ring-0 outline-none transition"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-burgundy-800 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gold-200 focus:border-gold-400 focus:ring-0 outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-burgundy-800 mb-2">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gold-200 focus:border-gold-400 focus:ring-0 outline-none transition"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-burgundy-800 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gold-200 focus:border-gold-400 focus:ring-0 outline-none transition resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-burgundy-800 text-ivory-50 px-8 py-3 hover:bg-burgundy-900 transition-colors w-full"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl text-burgundy-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="bg-gold-100 p-4 text-gold-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-burgundy-800 mb-2">Our Locations</h4>
                  <p className="text-burgundy-700 mb-1">Delhi: 123 Luxury Lane, New Delhi</p>
                  <p className="text-burgundy-700 mb-1">Mumbai: 456 Elegance Street, Mumbai</p>
                  <p className="text-burgundy-700">Jaipur: 789 Royal Avenue, Jaipur</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-gold-100 p-4 text-gold-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-burgundy-800 mb-2">Phone</h4>
                  <p className="text-burgundy-700 mb-1">+91 123 456 7890</p>
                  <p className="text-burgundy-700">+91 987 654 3210</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-gold-100 p-4 text-gold-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-burgundy-800 mb-2">Email</h4>
                  <p className="text-burgundy-700 mb-1">info@weddingshagun.com</p>
                  <p className="text-burgundy-700">contact@weddingshagun.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-serif text-xl text-burgundy-800 mb-4">Working Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-burgundy-700">Monday - Friday:</p>
                  <p className="text-burgundy-900 font-medium">10:00 AM - 7:00 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-burgundy-700">Saturday:</p>
                  <p className="text-burgundy-900 font-medium">10:00 AM - 5:00 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-burgundy-700">Sunday:</p>
                  <p className="text-burgundy-900 font-medium">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;