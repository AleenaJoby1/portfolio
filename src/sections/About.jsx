import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const { about } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const iconMap = {
    GraduationCap: GraduationCap,
    Sparkles: Sparkles,
    Compass: Compass,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const principles = [
    { title: 'Curiosity-Driven', desc: 'Deeply interested in understanding how software and hardware interact.' },
    { title: 'Foundations First', desc: 'Focusing on core data representation, algorithms, and computational logic.' },
    { title: 'Continuous Growth', desc: 'Consistently practicing problem solving and exploring emerging tools.' },
    { title: 'Engineering Discipline', desc: 'Writing organized, readable code with attention to detail and structure.' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={about.sectionBadge}
          title={about.sectionTitle}
          subtitle="A student dedicated to curiosity, continuous learning, and purposeful engineering."
        />

        {/* Narrative Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft mb-12 sm:mb-16 relative overflow-hidden transition-colors duration-300"
        >
          {/* Left Accent Bar */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#3478D4] dark:bg-[#4C8DEF]" />

          <div className="space-y-5 text-base sm:text-lg text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
            {about.paragraphs.map((para, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-[#20232A] dark:text-[#F3F4F6] font-semibold text-lg sm:text-xl leading-relaxed'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Three Minimal Information Cards with Precision Indexing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {about.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Sparkles;
            const indexNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: shouldReduceMotion ? 0 : -5 }}
                className="bg-white dark:bg-portfolio-dark-card rounded-2xl p-7 sm:p-8 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft hover:shadow-soft dark:hover:shadow-dark-hover hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30 text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#3478D4] dark:group-hover:bg-[#4C8DEF] group-hover:text-white transition-all duration-300 shadow-soft-sm">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="font-heading font-bold text-2xl text-[#EAE8E3] dark:text-[#2A303F] group-hover:text-[#3478D4]/30 dark:group-hover:text-[#4C8DEF]/30 transition-colors">
                      {indexNumber}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#20232A] dark:text-[#F3F4F6] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE8E3]/60 dark:border-portfolio-dark-border/60 flex items-center justify-between text-xs font-semibold text-[#3478D4] dark:text-[#4C8DEF]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF]" />
                    CSE Foundation
                  </span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Academic Principles Strip */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-portfolio-dark-card/80 rounded-2xl p-6 sm:p-8 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft transition-colors duration-300"
        >
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#737780] dark:text-[#9CA3AF]">
              Engineering Mindset & Approach
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#20232A] dark:text-[#F3F4F6]">
                    <CheckCircle2 size={14} className="text-[#3478D4] dark:text-[#4C8DEF] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
