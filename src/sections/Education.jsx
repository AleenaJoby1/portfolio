import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Building, BookCheck, CheckCircle2, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Education() {
  const { education } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const coreCurriculum = [
    'Problem Solving & Programming in C',
    'Engineering Mathematics & Linear Algebra',
    'Basics of Electrical & Electronics Engineering',
    'Engineering Physics & Discrete Logic Foundations',
  ];

  return (
    <section id="education" className="py-20 lg:py-28 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badge={education.sectionBadge}
          title={education.sectionTitle}
          subtitle="Academic path focused on building a solid engineering and computational groundwork."
        />

        <div className="max-w-4xl mx-auto">
          {education.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 sm:pl-12 border-l-2 border-[#3478D4]/30 dark:border-[#4C8DEF]/30"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-xl bg-[#3478D4] dark:bg-[#4C8DEF] text-white flex items-center justify-center shadow-soft ring-4 ring-[#FAF9F6] dark:ring-[#0D0F14] transition-colors duration-300">
                <GraduationCap size={18} />
              </div>

              {/* Main Credentials Card */}
              <motion.div
                whileHover={{ y: shouldReduceMotion ? 0 : -3 }}
                className="bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft hover:shadow-soft-hover dark:hover:shadow-dark-hover transition-all duration-300"
              >
                {/* Header: Course & Status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] text-xs font-semibold uppercase tracking-wider mb-2">
                      Undergraduate Program
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#20232A] dark:text-[#F3F4F6]">
                      {item.course}
                    </h3>
                    <p className="text-base font-semibold text-[#3478D4] dark:text-[#4C8DEF] mt-1">
                      Academic Year: {item.academicYear}
                    </p>
                  </div>

                  {item.status && (
                    <span className="self-start inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] border border-[#3478D4]/20 dark:border-[#4C8DEF]/30 shadow-soft-sm dark:shadow-dark-soft">
                      <span className="w-2 h-2 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF] animate-pulse" />
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Degree Progress Visualizer */}
                <div className="mb-8 p-4 rounded-2xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#20232A] dark:text-[#F3F4F6] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Compass size={14} className="text-[#3478D4] dark:text-[#4C8DEF]" /> Degree Progress
                    </span>
                    <span className="text-[#3478D4] dark:text-[#4C8DEF] font-bold">Year 1 of 4 (Foundations)</span>
                  </div>
                  <div className="w-full bg-[#EAE8E3] dark:bg-[#2A303F] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#3478D4] dark:bg-[#4C8DEF] h-full rounded-full transition-all duration-1000"
                      style={{ width: '25%' }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#737780] dark:text-[#9CA3AF] mt-1.5 font-medium">
                    <span className="font-semibold text-[#3478D4] dark:text-[#4C8DEF]">Year 1 (Foundations)</span>
                    <span>Year 2 (Core CS)</span>
                    <span>Year 3 (Applied CS)</span>
                    <span>Year 4 (Capstone)</span>
                  </div>
                </div>

                {/* Key Academic Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 text-xs sm:text-sm text-[#737780] dark:text-[#9CA3AF] border-b border-[#EAE8E3] dark:border-portfolio-dark-border">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3]/80 dark:border-portfolio-dark-border">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6]">{item.location}</p>
                    </div>
                  </div>

                  {item.duration ? (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3]/80 dark:border-portfolio-dark-border">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">Duration</p>
                        <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6]">{item.duration}</p>
                      </div>
                    </div>
                  ) : null}

                  {item.graduationYear ? (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3]/80 dark:border-portfolio-dark-border">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border">
                        <BookCheck size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">Graduation Target</p>
                        <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6]">{item.graduationYear}</p>
                      </div>
                    </div>
                  ) : null}

                  {item.college ? (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3]/80 dark:border-portfolio-dark-border">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border">
                        <Building size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">College</p>
                        <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6]">{item.college}</p>
                      </div>
                    </div>
                  ) : null}

                  {item.university ? (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3]/80 dark:border-portfolio-dark-border">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border">
                        <Award size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">University</p>
                        <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6]">{item.university}</p>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* First-Year Foundation Modules */}
                <div className="pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#20232A] dark:text-[#F3F4F6] mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#3478D4] dark:text-[#4C8DEF]" />
                    First-Year Engineering Core Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {coreCurriculum.map((subj, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border text-xs text-[#20232A] dark:text-[#F3F4F6] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF]" />
                        <span>{subj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements (if present) */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-[#EAE8E3] dark:border-portfolio-dark-border">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#737780] dark:text-[#9CA3AF] mb-3">
                      Academic Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achieve, i) => (
                        <li key={i} className="text-sm text-[#737780] dark:text-[#9CA3AF] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF] mt-1.5 shrink-0" />
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Config footnote */}
                <div className="mt-6 pt-4 border-t border-[#EAE8E3]/60 dark:border-portfolio-dark-border/60 flex items-center justify-between text-xs text-[#737780] dark:text-[#9CA3AF]">
                  <span>Degree Credentials</span>
                  <span className="font-mono text-[11px] text-[#737780]/70 dark:text-[#9CA3AF]/70">
                    portfolio.js
                  </span>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
