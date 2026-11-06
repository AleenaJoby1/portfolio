import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { personal, navigation, footer, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-[#EAE8E3] dark:border-portfolio-dark-border bg-[#FAF9F6] dark:bg-[#0D0F14] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#EAE8E3] dark:border-portfolio-dark-border">

          {/* Left: Branding & Tagline */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3478D4] dark:bg-[#4C8DEF] text-white flex items-center justify-center font-heading font-bold text-xs shadow-soft-sm">
                AJ
              </div>
              <h3 className="font-heading font-bold text-lg text-[#20232A] dark:text-[#F3F4F6] tracking-wider uppercase">
                {personal.name}
              </h3>
            </div>
            <p className="text-sm font-medium text-[#737780] dark:text-[#9CA3AF]">
              "{footer.tagline}"
            </p>
            <p className="text-xs text-[#737780]/80 dark:text-[#9CA3AF]/80">
              {personal.degree} • {personal.location}
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#737780] dark:text-[#9CA3AF] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Available Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <SocialLinks
              socials={contact.socials}
              email={contact.email}
              variant="circle"
              iconSize={16}
            />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              type="button"
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-full bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#737780] dark:text-[#9CA3AF] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 hover:bg-[#EEF5FF] dark:hover:bg-[#4C8DEF]/15 shadow-soft-sm dark:shadow-dark-soft flex items-center justify-center transition-all duration-200 group"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Architecture Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737780] dark:text-[#9CA3AF]">
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-[#737780]/80 dark:text-[#9CA3AF]/80">
            Engineered with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
