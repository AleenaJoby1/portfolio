import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { navigation, personal } = portfolioData;

  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Precision Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#3478D4] dark:bg-[#4C8DEF] origin-left z-[70]"
        style={{ scaleX }}
      />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/90 dark:bg-[#0D0F14]/90 backdrop-blur-md border-b border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft py-3.5'
            : 'bg-[#FAF9F6]/70 dark:bg-[#0D0F14]/70 backdrop-blur-sm border-b border-transparent py-4.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            
            {/* Professional Brand / Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#3478D4] rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#3478D4] dark:bg-[#4C8DEF] text-white flex items-center justify-center font-heading font-bold text-sm tracking-tight shadow-soft-sm group-hover:scale-105 transition-all duration-200">
                AJ
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-[#20232A] dark:text-[#F3F4F6] group-hover:text-[#3478D4] dark:group-hover:text-[#4C8DEF] transition-colors uppercase">
                  {personal.name}
                </span>
                <span className="text-[11px] font-medium text-[#737780] dark:text-[#9CA3AF] tracking-normal -mt-1 hidden sm:block">
                  Computer Science Undergrad
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-portfolio-dark-surface/90 border border-[#EAE8E3] dark:border-portfolio-dark-border p-1.5 rounded-full shadow-soft-sm dark:shadow-dark-soft backdrop-blur-md">
              {navigation.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-[#3478D4] dark:text-[#4C8DEF]'
                        : 'text-[#737780] dark:text-[#9CA3AF] hover:text-[#20232A] dark:hover:text-[#F3F4F6]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 rounded-full border border-[#3478D4]/20 dark:border-[#4C8DEF]/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Controls: Dark Mode Toggle & Action Button */}
            <div className="hidden md:flex items-center gap-3">
              {/* Animated Dark/Light Mode Toggle */}
              <ThemeToggle />

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#20232A] dark:text-[#F3F4F6] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 hover:bg-[#EEF5FF]/50 dark:hover:bg-[#4C8DEF]/10 shadow-soft-sm dark:shadow-dark-soft transition-all duration-200"
              >
                <span>Get In Touch</span>
                <ArrowUpRight
                  size={14}
                  className="text-[#3478D4] dark:text-[#4C8DEF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle size={16} />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#20232A] dark:text-[#F3F4F6] hover:bg-white dark:hover:bg-portfolio-dark-card border border-transparent hover:border-[#EAE8E3] dark:hover:border-portfolio-dark-border transition-colors"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-b border-[#EAE8E3] dark:border-portfolio-dark-border bg-[#FAF9F6] dark:bg-[#0D0F14] px-4 pt-3 pb-6 shadow-soft-lg dark:shadow-dark-soft overflow-hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navigation.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] font-semibold border border-[#3478D4]/15 dark:border-[#4C8DEF]/30'
                          : 'text-[#737780] dark:text-[#9CA3AF] hover:text-[#20232A] dark:hover:text-[#F3F4F6] hover:bg-white dark:hover:bg-portfolio-dark-card'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF]" />
                      )}
                    </a>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-[#EAE8E3] dark:border-portfolio-dark-border">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#3478D4] dark:bg-[#4C8DEF] text-white text-center text-sm font-semibold shadow-soft flex items-center justify-center gap-1.5 hover:bg-[#2963B2] transition-colors"
                  >
                    <span>Connect With Me</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
