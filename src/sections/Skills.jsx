import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Layout, Terminal, Cpu, BookOpen, Sparkles, Layers, ChevronRight, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Skills() {
  const { skills } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Terminal: Terminal,
    Cpu: Cpu,
  };

  const conceptFocus = {
    'programming-languages': ['Syntax & Logic Flow', 'Procedural Programming', 'Problem Decomposition', 'Functions & Recursion'],
    'web-development': ['HTML5 Semantic Trees', 'CSS3 Responsive Layouts', 'Client-Server Principles', 'Modern DOM Concepts'],
    'tools-technologies': ['Git Version Control', 'VS Code Tooling', 'Command Line Fundamentals', 'GitHub Workflow'],
    'cs-fundamentals': ['Algorithmic Logic', 'Data Representation', 'Computational Thinking', 'Discrete Mathematical Structures'],
  };

  const totalSkillsCount = skills.categories.reduce(
    (count, cat) => count + (cat.skills ? cat.skills.length : 0),
    0
  );
  const hasCustomSkills = totalSkillsCount > 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const academicRoadmap = [
    { year: 'Year 01', stage: 'Engineering Foundations', status: 'Current Focus', desc: 'Programming in C, Engineering Mathematics, Computational Problem Solving' },
    { year: 'Year 02', stage: 'Data Structures & Systems', status: 'Upcoming', desc: 'Object-Oriented Design, Data Structures, Algorithms & Database Systems' },
    { year: 'Year 03', stage: 'Advanced Systems & Web', status: 'Upcoming', desc: 'Operating Systems, Computer Networks, Full-Stack Architecture' },
    { year: 'Year 04', stage: 'Specialization & Capstone', status: 'Upcoming', desc: 'Distributed Systems, Cloud Technologies & Senior Engineering Project' },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#FAF9F6] dark:bg-[#0D0F14] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={skills.sectionBadge}
          title={skills.sectionTitle}
          subtitle="Building core competencies step-by-step with patience and curiosity."
        />

        {/* Foundation Message Card (Displayed when no skills are entered) */}
        {!hasCustomSkills && (
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-14 p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-portfolio-dark-card border border-[#3478D4]/25 dark:border-[#4C8DEF]/30 shadow-soft dark:shadow-dark-soft text-center relative overflow-hidden transition-colors duration-300"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] text-xs font-semibold mb-4 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30">
              <Sparkles size={13} />
              <span>Academic Discovery & Foundation Stage</span>
            </div>

            <p className="text-lg sm:text-xl text-[#20232A] dark:text-[#F3F4F6] font-medium leading-relaxed italic max-w-2xl mx-auto">
              "{skills.emptyFallbackMessage}"
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[#737780] dark:text-[#9CA3AF]">
              As a first-year student, I am establishing strong fundamentals before specializing.
            </p>

            <div className="mt-6 pt-5 border-t border-[#EAE8E3] dark:border-portfolio-dark-border flex items-center justify-center">
              <button
                type="button"
                onClick={() => setShowConfigHelper(!showConfigHelper)}
                className="text-xs text-[#3478D4] dark:text-[#4C8DEF] hover:underline font-medium inline-flex items-center gap-1.5"
              >
                <HelpCircle size={13} />
                <span>{showConfigHelper ? 'Hide instructions' : 'How to add your skills in portfolio.js'}</span>
              </button>
            </div>

            {showConfigHelper && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 text-left bg-[#FAF9F6] dark:bg-portfolio-dark-surface p-4 rounded-xl border border-[#EAE8E3] dark:border-portfolio-dark-border text-xs font-mono text-[#737780] dark:text-[#9CA3AF]"
              >
                <code>
                  // Edit src/data/portfolio.js:<br />
                  skills: &#123; categories: [ &#123; name: "Programming Languages", skills: ["Python", "C"] &#125; ] &#125;
                </code>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* 4 Professional Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {skills.categories.map((category) => {
            const Icon = iconMap[category.icon] || BookOpen;
            const categorySkills = category.skills || [];
            const conceptualTopics = conceptFocus[category.id] || [];

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                className="bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm dark:shadow-dark-soft hover:shadow-soft dark:hover:shadow-dark-hover hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] border border-[#3478D4]/15 dark:border-[#4C8DEF]/30 flex items-center justify-center group-hover:bg-[#3478D4] dark:group-hover:bg-[#4C8DEF] group-hover:text-white transition-all duration-300 shadow-soft-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#20232A] dark:text-[#F3F4F6]">
                          {category.name}
                        </h3>
                        <span className="text-xs text-[#737780] dark:text-[#9CA3AF]">
                          Technical Domain
                        </span>
                      </div>
                    </div>

                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] border border-[#3478D4]/20 dark:border-[#4C8DEF]/30 font-medium">
                      Foundation
                    </span>
                  </div>

                  <p className="text-sm text-[#737780] dark:text-[#9CA3AF] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Core Conceptual Focus */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#737780] dark:text-[#9CA3AF] mb-3 flex items-center gap-1.5">
                      <Layers size={13} className="text-[#3478D4] dark:text-[#4C8DEF]" />
                      <span>Academic Focus Areas</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {conceptualTopics.map((topic, i) => (
                        <div
                          key={i}
                          className="px-2.5 py-1.5 rounded-lg bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border text-[11px] text-[#20232A] dark:text-[#F3F4F6] flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3478D4]/60 dark:bg-[#4C8DEF]/60" />
                          <span className="truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Added Technologies or Status */}
                <div>
                  {categorySkills.length > 0 ? (
                    <div className="pt-4 border-t border-[#EAE8E3] dark:border-portfolio-dark-border">
                      <p className="text-xs font-semibold text-[#20232A] dark:text-[#F3F4F6] mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/30 dark:border-[#4C8DEF]/30 text-[#3478D4] dark:text-[#4C8DEF] text-xs font-semibold shadow-soft-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-[#EAE8E3]/80 dark:border-portfolio-dark-border/80 flex items-center justify-between text-xs text-[#737780] dark:text-[#9CA3AF]">
                      <span className="flex items-center gap-1.5 font-medium text-[#20232A] dark:text-[#F3F4F6]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Exploring Core Concepts
                      </span>
                      <span className="font-mono text-[11px] text-[#737780]/70 dark:text-[#9CA3AF]/70">
                        portfolio.js
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4-Year Computer Science Undergraduate Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft transition-colors duration-300"
        >
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] text-xs font-semibold uppercase tracking-wider mb-2">
              Academic Roadmap
            </span>
            <h3 className="text-2xl font-bold font-heading text-[#20232A] dark:text-[#F3F4F6]">
              Undergraduate Degree Progression
            </h3>
            <p className="text-sm text-[#737780] dark:text-[#9CA3AF] mt-1">
              A structured roadmap from foundational computational thinking to advanced software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {academicRoadmap.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  idx === 0
                    ? 'bg-[#EEF5FF]/50 dark:bg-[#4C8DEF]/10 border-[#3478D4]/40 dark:border-[#4C8DEF]/40 shadow-soft-sm dark:shadow-dark-soft'
                    : 'bg-[#FAF9F6] dark:bg-portfolio-dark-surface border-[#EAE8E3] dark:border-portfolio-dark-border'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-heading font-bold text-lg ${
                      idx === 0 ? 'text-[#3478D4] dark:text-[#4C8DEF]' : 'text-[#737780] dark:text-[#9CA3AF]'
                    }`}
                  >
                    {step.year}
                  </span>
                  {idx === 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#3478D4] dark:bg-[#4C8DEF] text-white text-[10px] font-bold">
                      CURRENT
                    </span>
                  )}
                </div>
                <h4 className="font-heading font-bold text-sm text-[#20232A] dark:text-[#F3F4F6] mb-1">
                  {step.stage}
                </h4>
                <p className="text-xs text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
