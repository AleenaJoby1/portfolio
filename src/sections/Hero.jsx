import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProfileImage from '../components/ProfileImage';

export default function Hero() {
  const { personal } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden transition-colors duration-300"
    >
      {/* Background Architectural Grid with Light & Dark support */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Atmospheric Soft Lighting Orbs with Gentle Animation */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-[#EEF5FF] dark:from-[#4C8DEF]/15 via-[#3478D4]/10 dark:via-[#4C8DEF]/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Executive Pitch */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status / Welcome Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#3478D4] dark:text-[#4C8DEF] bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/20 dark:border-[#4C8DEF]/30 shadow-soft-sm dark:shadow-dark-soft">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personal.welcomeBadge}</span>
              </div>
            </motion.div>

            {/* Main Heading & Subtitle */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#20232A] dark:text-[#F3F4F6] tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-[#3478D4] dark:text-[#4C8DEF]">Aleena Joby.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#737780] dark:text-[#9CA3AF] font-heading flex flex-wrap items-center gap-2">
                <span>Computer Science Engineering Student</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4]/60 dark:bg-[#4C8DEF]/60 hidden sm:inline-block" />
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#3478D4] dark:text-[#4C8DEF] hidden sm:inline-block">
                  Aspiring Developer
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#737780] dark:text-[#9CA3AF] leading-relaxed max-w-xl font-normal"
            >
              "{personal.heroDescription}"
            </motion.p>

            {/* Action Buttons with Spring Hover Animation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#3478D4] dark:bg-[#4C8DEF] text-white font-semibold text-sm sm:text-base shadow-soft hover:bg-[#2963B2] dark:hover:bg-[#3B82F6] hover:shadow-soft-hover dark:hover:shadow-dark-hover transition-all duration-200 group"
              >
                <span>Explore My Journey</span>
                <ArrowDown size={17} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#20232A] dark:text-[#F3F4F6] font-semibold text-sm sm:text-base shadow-soft-sm dark:shadow-dark-soft hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 hover:text-[#3478D4] dark:hover:text-[#4C8DEF] hover:bg-[#EEF5FF]/50 dark:hover:bg-[#4C8DEF]/10 transition-all duration-200"
              >
                <Mail size={17} className="text-[#3478D4] dark:text-[#4C8DEF]" />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>

            {/* Executive Highlights Bento Strip */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 w-full"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-2xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft flex items-center gap-3 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#737780] dark:text-[#9CA3AF] tracking-wider">Academics</p>
                  <p className="text-xs font-bold text-[#20232A] dark:text-[#F3F4F6]">First-Year B.Tech</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-2xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft flex items-center gap-3 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#737780] dark:text-[#9CA3AF] tracking-wider">Location</p>
                  <p className="text-xs font-bold text-[#20232A] dark:text-[#F3F4F6]">Kerala, India</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-2xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft flex items-center gap-3 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#737780] dark:text-[#9CA3AF] tracking-wider">Direction</p>
                  <p className="text-xs font-bold text-[#20232A] dark:text-[#F3F4F6]">Software Dev</p>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Studio Profile Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileImage name={personal.name} />
          </div>

        </div>
      </div>
    </section>
  );
}
