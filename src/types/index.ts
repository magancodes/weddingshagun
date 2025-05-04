// Type definitions for the WeddingShagun website

// Service Interface
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

// Gallery Image Interface
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Testimonial Interface
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

// Contact Form Data Interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  message: string;
}

// Navigation Item Interface
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Team Member Interface
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Blog Post Interface
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  categories: string[];
}

// Wedding Package Interface
export interface WeddingPackage {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}