import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', size = 18 }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative p-2.5 rounded-full transition-colors duration-300 flex items-center justify-center ${isDark
          ? 'bg-portfolio-dark-card border border-portfolio-dark-border text-amber-300 hover:text-amber-200 hover:bg-portfolio-dark-card-hover shadow-dark-soft'
          : 'bg-white border border-[#EAE8E3] text-[#737780] hover:text-[#3478D4] hover:bg-[#EEF5FF] shadow-soft-sm'
        } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {isDark ? (
          <Sun size={size} strokeWidth={2} />
        ) : (
          <Moon size={size} strokeWidth={2} />
        )}
      </motion.div>
    </motion.button>
  );
}

