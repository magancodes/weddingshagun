/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      aspectRatio: {
        'portrait': '3 / 4',
        'square': '1 / 1',
        'wide': '16 / 9',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};