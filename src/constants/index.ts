// Constants used throughout the WeddingShagun website

// Color palette
export const COLORS = {
  ivory: {
    50: '#FFFEF7',
    100: '#FFFBEA',
    200: '#FFF6D5',
    300: '#FFEFC0',
    400: '#FFE8AB',
    500: '#FFDF96',
  },
  gold: {
    300: '#F9DC5C',
    400: '#F3CC3F',
    500: '#EDB72B',
    600: '#D9A11D',
    700: '#B7881A',
  },
  blush: {
    50: '#FFF5F5',
    100: '#FEEAEB',
    200: '#FCDADD',
    300: '#F9BDC2',
    400: '#F6A0A7',
    500: '#F3838C',
  },
  burgundy: {
    700: '#8B1A3D',
    800: '#6F1531',
    900: '#520F25',
  },
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

// Services
export const SERVICES = [
  {
    id: 1,
    icon: 'heart',
    title: 'Wedding Planning',
    description: 'Comprehensive planning services tailored to your vision, from intimate gatherings to grand celebrations.',
  },
  {
    id: 2,
    icon: 'calendar',
    title: 'Event Coordination',
    description: 'Flawless execution of your special day with attention to every detail and timeline management.',
  },
  {
    id: 3,
    icon: 'users',
    title: 'Family Ceremonies',
    description: 'Traditional ceremony planning with cultural authenticity and personal significance.',
  },
  {
    id: 4,
    icon: 'sparkles',
    title: 'Decor & Design',
    description: 'Exquisite aesthetics that transform venues into magical spaces reflecting your unique style.',
  },
  {
    id: 5,
    icon: 'utensils',
    title: 'Catering Services',
    description: 'Curated menus featuring gourmet cuisine, from regional specialties to international fare.',
  },
  {
    id: 6,
    icon: 'music',
    title: 'Entertainment',
    description: 'Unforgettable entertainment options from traditional musicians to contemporary performers.',
  },
  {
    id: 7,
    icon: 'map',
    title: 'Venue Selection',
    description: 'Access to exclusive venues across India and international destinations for your dream wedding.',
  },
  {
    id: 8,
    icon: 'camera',
    title: 'Photography',
    description: 'Capturing timeless moments with artistic vision and technical excellence.',
  },
];

// Gallery categories
export const GALLERY_CATEGORIES = ['All', 'Ceremonies', 'Decor', 'Venues', 'Celebrations'];

// Gallery images
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2308795/pexels-photo-2308795.jpeg",
    alt: "Indian wedding ceremony",
    category: "Ceremonies"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    alt: "Luxury wedding decor",
    category: "Decor"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    alt: "Mandap decoration",
    category: "Decor"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg",
    alt: "Wedding venue",
    category: "Venues"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
    alt: "Wedding celebration",
    category: "Celebrations"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
    alt: "Traditional ceremony",
    category: "Ceremonies"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/2418319/pexels-photo-2418319.jpeg",
    alt: "Palace venue",
    category: "Venues"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1345360/pexels-photo-1345360.jpeg",
    alt: "Wedding celebration",
    category: "Celebrations"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "WeddingShagun transformed our vision into a breathtaking reality. Every detail was executed with precision and creativity, making our wedding truly unforgettable.",
    author: "Priya & Arjun",
    role: "Delhi Wedding",
    image: "https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg"
  },
  {
    id: 2,
    quote: "Working with WeddingShagun was the best decision we made. Their attention to detail and ability to blend traditional elements with modern touches created a magical experience.",
    author: "Meera & Vikram",
    role: "Udaipur Palace Wedding",
    image: "https://images.pexels.com/photos/2418319/pexels-photo-2418319.jpeg"
  },
  {
    id: 3,
    quote: "We couldn't have asked for a better team to plan our destination wedding. Their professionalism, creativity, and commitment to excellence exceeded our expectations.",
    author: "Ananya & Rohan",
    role: "Goa Beach Wedding",
    image: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg"
  }
];

// Company information
export const COMPANY_INFO = {
  name: 'WeddingShagun',
  foundedYear: 2010,
  tagline: 'Crafting extraordinary wedding experiences with timeless elegance and cultural richness',
  locations: [
    { city: 'Delhi', address: '123 Luxury Lane, New Delhi' },
    { city: 'Mumbai', address: '456 Elegance Street, Mumbai' },
    { city: 'Jaipur', address: '789 Royal Avenue, Jaipur' }
  ],
  contactInfo: {
    phone: ['+91 123 456 7890', '+91 987 654 3210'],
    email: ['info@weddingshagun.com', 'contact@weddingshagun.com']
  },
  socialMedia: {
    facebook: 'https://facebook.com/weddingshagun',
    instagram: 'https://instagram.com/weddingshagun',
    twitter: 'https://twitter.com/weddingshagun',
    linkedin: 'https://linkedin.com/company/weddingshagun'
  },
  workingHours: {
    weekdays: '10:00 AM - 7:00 PM',
    saturday: '10:00 AM - 5:00 PM',
    sunday: 'By Appointment Only'
  }
};