// Animation utility functions for the website

// Element fade-in
export const fadeIn = (element: HTMLElement, duration: number = 500, delay: number = 0) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

// Element fade-in from bottom
export const fadeInUp = (element: HTMLElement, duration: number = 500, delay: number = 0, distance: number = 30) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transform = `translateY(${distance}px)`;
  element.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 10);
};

// Staggered animation for multiple elements
export const staggeredAnimation = (
  elements: HTMLElement[], 
  animationFn: (el: HTMLElement, duration: number, delay: number) => void, 
  duration: number = 500, 
  staggerDelay: number = 150
) => {
  elements.forEach((element, index) => {
    const delay = index * staggerDelay;
    animationFn(element, duration, delay);
  });
};

// Scroll trigger animation
export const scrollTriggerAnimation = (
  element: HTMLElement,
  animationFn: (el: HTMLElement) => void,
  threshold: number = 0.1
) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFn(element);
          observer.unobserve(element);
        }
      });
    },
    { threshold }
  );

  observer.observe(element);
};

// Parallax scroll effect
export const parallaxScroll = (element: HTMLElement, speed: number = 0.5) => {
  if (!element) return;
  
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const translateY = scrollPosition * speed;
    element.style.transform = `translateY(${translateY}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Image reveal animation
export const imageReveal = (element: HTMLElement, duration: number = 800) => {
  if (!element) return;
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = '#8B1A3D'; // burgundy color
  overlay.style.zIndex = '1';
  overlay.style.transformOrigin = 'left';
  overlay.style.transition = `transform ${duration}ms cubic-bezier(0.77, 0, 0.175, 1)`;
  
  // Set relative positioning on parent if not already set
  const computedStyle = window.getComputedStyle(element);
  if (computedStyle.position === 'static') {
    element.style.position = 'relative';
  }
  
  element.appendChild(overlay);
  
  // Trigger animation
  setTimeout(() => {
    overlay.style.transform = 'scaleX(0)';
    
    // Remove overlay after animation
    setTimeout(() => {
      overlay.remove();
    }, duration + 100);
  }, 100);
};

// Text reveal letter by letter
export const textRevealLetterByLetter = (
  element: HTMLElement, 
  duration: number = 1000, 
  staggerDelay: number = 50
) => {
  if (!element) return;
  
  const text = element.innerText;
  element.innerText = '';
  
  text.split('').forEach((char, index) => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    charSpan.style.opacity = '0';
    charSpan.style.display = 'inline-block';
    charSpan.style.transition = `opacity ${duration / text.length}ms ease`;
    
    element.appendChild(charSpan);
    
    setTimeout(() => {
      charSpan.style.opacity = '1';
    }, index * staggerDelay);
  });
};