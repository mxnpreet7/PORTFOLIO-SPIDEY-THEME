import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronRight,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

interface HeroSectionProps {
  spiderSenseActive: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ spiderSenseActive }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'overview' | 'skills' | 'manifest'>('overview');

  const copyEmail = () => {
    navigator.clipboard.writeText(studentProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
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
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Web Geometry Overlay */}
      <div className="absolute inset-0 spider-grid opacity-30 pointer-events-none" />
      
      {/* Subtle Spider-Man Atmospheric Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E22424]/10 via-[#2D72EE]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Spider-Sense Radar Pulse (Active Mode) */}
      {spiderSenseActive && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#E22424]/30 animate-spider-sense pointer-events-none" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Typography */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111520] border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#E22424]" />
                <span>{studentProfile.location}</span>
              </div>

              {/* College & Year Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111520] border border-white/10 text-xs font-medium text-neutral-300 backdrop-blur-md">
                <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>CSE • 2nd Year • {studentProfile.collegeShort}</span>
              </div>

              {/* Birth Year / Fresh Talent */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1115] border border-[#E22424]/20 text-[11px] font-semibold text-[#E22424]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E22424] animate-ping" />
                <span>Born 2008</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#E22424]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#E22424] font-bold">
                  {studentProfile.role}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-['Outfit'] leading-[1.08] text-white">
                MANPREET <br />
                <span className="text-gradient-red">SINGH</span>
              </h1>
            </motion.div>

            {/* Supporting Tagline & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-xl"
            >
              <p className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed font-['Plus_Jakarta_Sans']">
                &ldquo;{studentProfile.tagline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                {studentProfile.quote}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                id="hero-explore-work-btn"
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#E22424] hover:bg-[#C91E1E] text-white text-sm font-semibold tracking-wide shadow-lg shadow-[#E22424]/30 hover:shadow-[#E22424]/50 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: GitHub */}
              <a
                id="hero-github-cta"
                href={studentProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121622] hover:bg-[#181E2E] border border-white/10 hover:border-white/25 text-white text-sm font-semibold transition-all duration-200"
              >
                <Github className="w-4 h-4 text-neutral-300" />
                <span>GitHub Profile</span>
              </a>

              {/* Email Quick Copy */}
              <button
                id="hero-copy-email-btn"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121622]/60 hover:bg-[#121622] border border-white/10 hover:border-[#E22424]/40 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#E22424]" />
                    <span className="text-xs">iammanpreet640@gmail.com</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-2 text-xs text-neutral-400"
            >
              <span>Connect on:</span>
              <a
                href={studentProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-neutral-300 hover:text-[#E22424] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>mxnpreet7</span>
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-neutral-300 hover:text-[#3B82F6] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal / Apple-style Dev Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-[#0E121A]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-[#E22424]/40 transition-colors duration-300 group"
            >
              {/* Top Bar (Mac/Spider styled terminal window) */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0D13] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 text-[11px] font-mono text-neutral-400">
                    manpreet@sviet: ~/portfolio
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('overview')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeCodeTab === 'overview'
                        ? 'bg-[#E22424]/20 text-[#E22424] font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    init.json
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('skills')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeCodeTab === 'skills'
                        ? 'bg-[#E22424]/20 text-[#E22424] font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    skills.c
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('manifest')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeCodeTab === 'manifest'
                        ? 'bg-[#E22424]/20 text-[#E22424] font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    ai.py
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px] bg-[#07090E]">
                {activeCodeTab === 'overview' && (
                  <div className="space-y-1.5 text-neutral-300">
                    <p className="text-neutral-500">{"// Developer Runtime Manifest"}</p>
                    <p>
                      <span className="text-[#E22424]">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-[#A5B4FC]">&quot;Manpreet Singh&quot;</span>,
                    </p>
                    <p className="pl-4">
                      education: <span className="text-[#A5B4FC]">&quot;B.Tech CSE (2nd Year)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      institution: <span className="text-[#A5B4FC]">&quot;SVIET, Chandigarh&quot;</span>,
                    </p>
                    <p className="pl-4">
                      born: <span className="text-[#FBBF24]">2008</span>,
                    </p>
                    <p className="pl-4">
                      coreLanguages: [<span className="text-emerald-400">&quot;C&quot;</span>, <span className="text-emerald-400">&quot;C++&quot;</span>, <span className="text-emerald-400">&quot;Python&quot;</span>, <span className="text-emerald-400">&quot;Java&quot;</span>],
                    </p>
                    <p className="pl-4">
                      passions: [<span className="text-cyan-400">&quot;Web Applications&quot;</span>, <span className="text-purple-400">&quot;Artificial Intelligence&quot;</span>],
                    </p>
                    <p className="pl-4">
                      status: <span className="text-green-400">&quot;Building & Learning Constantly&quot;</span>
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-neutral-500">
                      <span className="text-emerald-400">✓</span> Initialized developer environment.
                    </p>
                  </div>
                )}

                {activeCodeTab === 'skills' && (
                  <div className="space-y-1.5 text-neutral-300">
                    <p className="text-neutral-500">{"// Computational Logic & Memory Architecture"}</p>
                    <p className="text-purple-400">#include &lt;stdio.h&gt;</p>
                    <p className="text-purple-400">#include &lt;stdbool.h&gt;</p>
                    <p className="pt-1">
                      <span className="text-[#E22424]">typedef struct</span> &#123;
                    </p>
                    <p className="pl-4">char* engineer;</p>
                    <p className="pl-4">char* stack[4];</p>
                    <p className="pl-4">bool eagerToLearn;</p>
                    <p>&#125; <span className="text-cyan-400">Developer</span>;</p>
                    <p className="pt-1">
                      <span className="text-blue-400">int</span> <span className="text-yellow-300">main</span>() &#123;
                    </p>
                    <p className="pl-4">
                      Developer ms = &#123;<span className="text-emerald-400">&quot;Manpreet&quot;</span>, &#123;<span className="text-emerald-400">&quot;C&quot;</span>, <span className="text-emerald-400">&quot;C++&quot;</span>, <span className="text-emerald-400">&quot;Python&quot;</span>, <span className="text-emerald-400">&quot;Java&quot;</span>&#125;, <span className="text-yellow-400">true</span>&#125;;
                    </p>
                    <p className="pl-4">
                      printf(<span className="text-emerald-400">&quot;Ready to build high performance systems.\\n&quot;</span>);
                    </p>
                    <p className="pl-4"><span className="text-[#E22424]">return</span> 0;</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeCodeTab === 'manifest' && (
                  <div className="space-y-1.5 text-neutral-300">
                    <p className="text-neutral-500">{"# AI & Innovation Logic"}</p>
                    <p>
                      <span className="text-[#E22424]">import</span> sys
                    </p>
                    <p>
                      <span className="text-[#E22424]">from</span> dataclasses <span className="text-[#E22424]">import</span> dataclass
                    </p>
                    <p className="pt-1">
                      <span className="text-blue-400">@dataclass</span>
                    </p>
                    <p>
                      <span className="text-[#E22424]">class</span> <span className="text-yellow-300">Curiosity</span>:
                    </p>
                    <p className="pl-4">student: str = <span className="text-emerald-400">&quot;Manpreet Singh&quot;</span></p>
                    <p className="pl-4">domains: list = (<span className="text-cyan-400">&quot;Web Development&quot;</span>, <span className="text-purple-400">&quot;Artificial Intelligence&quot;</span>)</p>
                    <p className="pl-4">
                      <span className="text-[#E22424]">def</span> <span className="text-blue-400">pursue</span>(self):
                    </p>
                    <p className="pl-8">
                      <span className="text-[#E22424]">return</span> f<span className="text-emerald-400">&quot;Exploring emerging AI paradigms with hands-on code.&quot;</span>
                    </p>
                    <p className="pt-2 text-neutral-400">
                      print(Curiosity().pursue())
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Terminal Status */}
              <div className="px-4 py-2.5 bg-[#090C12] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Interactive Terminal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E22424]">UTF-8</span>
                  <span>•</span>
                  <span>LN 1, COL 1</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
