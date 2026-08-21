import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Github, Linkedin, Mail, ExternalLink, Zap } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  spiderSenseActive: boolean;
  onToggleSpiderSense: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  spiderSenseActive,
  onToggleSpiderSense,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#08090C]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Spider Monogram */}
        <a
          id="nav-brand-logo"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Subtle Web-Emblem Hexagon */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#121620] to-[#0A0C10] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#E22424]/60 group-hover:shadow-[0_0_15px_rgba(226,36,36,0.3)]">
            <svg
              className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#E22424]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {/* Minimal Web/Spider Icon */}
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v7M12 15v7M2 12h7M15 12h7" strokeDasharray="1 1" />
              <path d="M4.93 4.93l4.95 4.95M14.12 14.12l4.95 4.95M19.07 4.93l-4.95 4.95M9.88 14.12l-4.95 4.95" />
            </svg>
            <div className="absolute inset-0 bg-[#E22424]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-['Outfit'] font-bold text-sm sm:text-base tracking-wider text-white">
                {studentProfile.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E22424] animate-pulse" />
            </div>
            <span className="text-[11px] font-medium tracking-wide text-neutral-400">
              {studentProfile.year} • {studentProfile.collegeShort}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-[#10141D]/60 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#E22424]/30 to-[#E22424]/10 border border-[#E22424]/50 rounded-full shadow-[0_0_12px_rgba(226,36,36,0.3)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & Spider-Sense Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Spider Sense Toggle Button */}
          <button
            id="toggle-spider-sense-btn"
            onClick={onToggleSpiderSense}
            title="Toggle Spider-Sense Radar Pulse"
            className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              spiderSenseActive
                ? 'bg-[#E22424]/20 border-[#E22424] text-white shadow-[0_0_20px_rgba(226,36,36,0.4)]'
                : 'bg-[#10141D]/80 border-white/10 text-neutral-300 hover:border-[#E22424]/50 hover:text-white'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${spiderSenseActive ? 'text-[#E22424] fill-[#E22424]' : 'text-neutral-400 group-hover:text-[#E22424]'}`} />
            <span>Spider-Sense</span>
            {spiderSenseActive && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E22424] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E22424]"></span>
              </span>
            )}
          </button>

          {/* Social Links */}
          <a
            id="nav-github-link"
            href={studentProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-[#10141D] border border-white/10 text-neutral-400 hover:text-white hover:border-[#E22424]/50 hover:bg-[#E22424]/10 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="nav-linkedin-link"
            href={studentProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-[#10141D] border border-white/10 text-neutral-400 hover:text-white hover:border-[#E22424]/50 hover:bg-[#E22424]/10 transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-spider-sense-btn"
            onClick={onToggleSpiderSense}
            className={`p-2 rounded-xl border text-xs ${
              spiderSenseActive
                ? 'bg-[#E22424]/20 border-[#E22424] text-white'
                : 'bg-[#10141D] border-white/10 text-neutral-300'
            }`}
            aria-label="Toggle Spider-Sense"
          >
            <Zap className="w-4 h-4 text-[#E22424]" />
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#10141D] border border-white/10 text-neutral-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0C0E14]/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-2"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                      isActive
                        ? 'bg-[#E22424]/20 border border-[#E22424]/60 text-white shadow-[0_0_10px_rgba(226,36,36,0.3)]'
                        : 'bg-[#121620]/60 text-neutral-300 hover:bg-[#121620]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Social Connect</span>
              <div className="flex items-center gap-2">
                <a
                  href={studentProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#141824] text-neutral-300 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#141824] text-neutral-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${studentProfile.email}`}
                  className="p-2 rounded-lg bg-[#141824] text-neutral-300 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
