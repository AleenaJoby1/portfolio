import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0D0F14] text-[#20232A] dark:text-[#F3F4F6] flex flex-col font-sans selection:bg-[#EEF5FF] dark:selection:bg-[#4C8DEF]/20 selection:text-[#3478D4] dark:selection:text-[#4C8DEF] transition-colors duration-300">
        {/* Sticky Responsive Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>

        {/* Modern Minimalist Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
