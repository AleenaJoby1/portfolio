import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable SectionHeading Component
 * With full Light & Dark mode support and gentle entrance animations.
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col max-w-2xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#3478D4] dark:text-[#4C8DEF] bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30 mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF]" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold font-heading text-[#20232A] dark:text-[#F3F4F6] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
