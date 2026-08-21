import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Sparkles } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070A] border-t border-white/[0.08] py-14 overflow-hidden">
      {/* Background Web Geometry */}
      <div className="absolute inset-0 spider-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          
          {/* Brand and Description */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-['Outfit'] font-extrabold text-lg sm:text-xl tracking-wider text-white">
                {studentProfile.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E22424]" />
            </div>
            <p className="text-xs text-neutral-400 font-medium">
              {studentProfile.role} • {studentProfile.year} • {studentProfile.collegeShort} ({studentProfile.location})
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={studentProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-[#0E121B] border border-white/10 hover:border-[#E22424]/50 hover:bg-[#E22424]/10 text-neutral-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={studentProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-[#0E121B] border border-white/10 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 text-neutral-300 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${studentProfile.email}`}
              aria-label="Email Manpreet"
              className="p-2.5 rounded-full bg-[#0E121B] border border-white/10 hover:border-[#E22424]/50 hover:bg-[#E22424]/10 text-neutral-300 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#141824] hover:bg-[#1C2233] border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Minimal Copyright & Identity */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Manpreet Singh. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="text-[#E22424]">Spider-Verse</span>
            <span>×</span>
            <span>Apple Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
