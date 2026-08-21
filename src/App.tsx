import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { WebCanvas } from './components/WebCanvas';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [spiderSenseActive, setSpiderSenseActive] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSpiderSense = () => {
    setSpiderSenseActive((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#07080B] text-[#E8EAEE] selection:bg-[#E22424]/30 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Spider-Web Canvas with Cursor Interaction & Particles */}
      <WebCanvas spiderSenseActive={spiderSenseActive} />

      {/* Spider-Sense Custom Precision Cursor */}
      <CustomCursor spiderSenseActive={spiderSenseActive} />

      {/* Top Glass Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        spiderSenseActive={spiderSenseActive}
        onToggleSpiderSense={toggleSpiderSense}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection spiderSenseActive={spiderSenseActive} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Minimal Craft Footer */}
      <Footer />
    </div>
  );
}
