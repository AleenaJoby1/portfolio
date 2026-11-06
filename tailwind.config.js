/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#FAF9F6',
          card: '#FFFFFF',
          primary: '#3478D4',
          'primary-hover': '#2963B2',
          'primary-light': '#EEF5FF',
          'primary-subtle': '#F4F8FD',
          text: '#20232A',
          secondary: '#737780',
          muted: '#9CA3AF',
          border: '#EAE8E3',
          'border-light': '#F2F0EB',
          // Dark mode extensions
          'dark-bg': '#0D0F14',
          'dark-surface': '#14171F',
          'dark-card': '#1A1E29',
          'dark-card-hover': '#222836',
          'dark-border': '#262C3A',
          'dark-text': '#F3F4F6',
          'dark-secondary': '#9CA3AF',
          'dark-primary': '#4C8DEF',
          'dark-primary-light': 'rgba(76, 141, 239, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(32, 35, 42, 0.04), 0 1px 2px -1px rgba(32, 35, 42, 0.02)',
        'soft': '0 4px 20px -2px rgba(32, 35, 42, 0.05), 0 2px 6px -1px rgba(32, 35, 42, 0.02)',
        'soft-lg': '0 10px 30px -4px rgba(32, 35, 42, 0.07), 0 4px 10px -2px rgba(32, 35, 42, 0.03)',
        'soft-hover': '0 12px 36px -4px rgba(52, 120, 212, 0.12), 0 4px 12px -2px rgba(32, 35, 42, 0.04)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'dark-hover': '0 12px 36px -4px rgba(76, 141, 239, 0.2), 0 4px 12px -2px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
