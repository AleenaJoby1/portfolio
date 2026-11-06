import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

/**
 * SocialLinks Component
 * Supports Light & Dark modes, Framer Motion micro-interactions,
 * and automatically hides links with missing URLs.
 */
export default function SocialLinks({
  socials = {},
  email = '',
  className = '',
  iconSize = 18,
  variant = 'circle',
}) {
  const links = [];

  if (email && email.trim() !== '') {
    links.push({
      key: 'email',
      name: 'Email',
      href: `mailto:${email.trim()}`,
      icon: Mail,
      isExternal: false,
    });
  }

  if (socials.github && socials.github.trim() !== '') {
    links.push({
      key: 'github',
      name: 'GitHub',
      href: socials.github.trim(),
      icon: Github,
      isExternal: true,
    });
  }

  if (socials.linkedin && socials.linkedin.trim() !== '') {
    links.push({
      key: 'linkedin',
      name: 'LinkedIn',
      href: socials.linkedin.trim(),
      icon: Linkedin,
      isExternal: true,
    });
  }

  if (socials.twitter && socials.twitter.trim() !== '') {
    links.push({
      key: 'twitter',
      name: 'Twitter',
      href: socials.twitter.trim(),
      icon: Twitter,
      isExternal: true,
    });
  }

  if (socials.instagram && socials.instagram.trim() !== '') {
    links.push({
      key: 'instagram',
      name: 'Instagram',
      href: socials.instagram.trim(),
      icon: Instagram,
      isExternal: true,
    });
  }

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;

        if (variant === 'circle') {
          return (
            <motion.a
              key={link.key}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={link.name}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="w-10 h-10 rounded-full bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#737780] dark:text-[#9CA3AF] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 hover:bg-[#EEF5FF]/50 dark:hover:bg-[#4C8DEF]/15 shadow-soft-sm dark:shadow-dark-soft transition-colors duration-200 flex items-center justify-center"
            >
              <Icon size={iconSize} strokeWidth={1.8} />
            </motion.a>
          );
        }

        return (
          <motion.a
            key={link.key}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={link.name}
            whileHover={{ y: -2 }}
            className="text-[#737780] dark:text-[#9CA3AF] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] transition-colors duration-200 p-2 rounded-lg hover:bg-[#EEF5FF] dark:hover:bg-[#4C8DEF]/10"
          >
            <Icon size={iconSize} strokeWidth={1.8} />
          </motion.a>
        );
      })}
    </div>
  );
}
