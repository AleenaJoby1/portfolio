import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import { MapPin, GraduationCap } from 'lucide-react';

/**
 * ProfileImage Component
 * Features Light & Dark mode support, floating gentle animations,
 * and high-end studio portrait framing.
 */
export default function ProfileImage({ className = '', name = 'Aleena Joby' }) {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {/* Ambient Pulsing Glow behind image */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#3478D4]/20 dark:from-[#4C8DEF]/25 via-[#EEF5FF] dark:via-[#4C8DEF]/10 to-transparent rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Light/Dark Decorative Backdrop Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute -inset-3 sm:-inset-4 bg-[#EEF5FF] dark:bg-portfolio-dark-surface rounded-3xl -rotate-2 border border-[#3478D4]/15 dark:border-[#4C8DEF]/25"
        aria-hidden="true"
      />

      {/* Main Studio Frame */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.25,
        }}
        whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
        className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22.5rem] lg:h-[22.5rem] rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-lg dark:shadow-dark-soft group transition-colors duration-300"
      >
        {!imageError ? (
          <img
            src={profilePhoto}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        ) : (
          // Monogram Fallback
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#EEF5FF] dark:from-[#14171F] dark:to-[#1A1E29] p-6 text-center select-none">
            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-portfolio-dark-surface border border-[#3478D4]/25 dark:border-[#4C8DEF]/30 shadow-soft flex items-center justify-center text-[#3478D4] dark:text-[#4C8DEF] text-3xl font-bold font-heading mb-4">
              AJ
            </div>
            <p className="font-heading font-bold text-xl text-[#20232A] dark:text-[#F3F4F6]">
              {name}
            </p>
            <p className="text-xs text-[#737780] dark:text-[#9CA3AF] mt-1">
              Add your photo to src/assets/profile.jpg
            </p>
          </div>
        )}

        {/* Soft In-Frame Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* In-Frame Identity Card */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white drop-shadow-md">
          <div>
            <p className="font-heading font-bold text-base tracking-wide">
              {name}
            </p>
            <p className="text-[11px] text-white/90 font-medium">
              Computer Science Engineering
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white/60 animate-pulse" />
        </div>
      </motion.div>

      {/* Floating Gentle Satellite Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : {
                opacity: 1,
                y: [0, -6, 0],
                transition: {
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                },
              }
        }
        className="absolute -bottom-4 -left-2 sm:-left-4 z-20 bg-white/95 dark:bg-portfolio-dark-surface/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft flex items-center gap-3 transition-colors duration-300"
      >
        <div className="w-8 h-8 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center border border-[#3478D4]/20 dark:border-[#4C8DEF]/30">
          <GraduationCap size={16} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-semibold text-[#20232A] dark:text-[#F3F4F6]">First-Year Student</p>
          </div>
          <p className="text-[11px] text-[#737780] dark:text-[#9CA3AF] flex items-center gap-1 mt-0.5">
            <MapPin size={11} className="text-[#3478D4] dark:text-[#4C8DEF]" /> Kerala, India
          </p>
        </div>
      </motion.div>

    </div>
  );
}
