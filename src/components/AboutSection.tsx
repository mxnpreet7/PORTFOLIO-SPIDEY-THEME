import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  BookOpen,
  Terminal,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mindset' | 'education' | 'focus'>('mindset');

  const roadmapSteps = [
    { title: 'Schooling', desc: 'Curiosity in computing systems', state: 'Complete' },
    { title: 'CSE @ SVIET', desc: '2nd-Year Undergrad Foundations', state: 'Active' },
    { title: 'Core Programming', desc: 'C, C++, Python, Java Deep Dive', state: 'Active' },
    { title: 'Web Development', desc: 'Building responsive web applications', state: 'Active' },
    { title: 'AI Exploration', desc: 'Investigating intelligent models & logic', state: 'Exploring' },
    { title: 'Future Developer', desc: 'High-impact software engineering', state: 'Target' }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Web Lines */}
      <div className="absolute inset-0 spider-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E22424]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/10 text-xs font-semibold text-[#E22424] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Driven by curiosity. <br />
            <span className="text-neutral-400 font-normal">Grounded in fundamentals.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            I am a 2nd-year Computer Science Engineering student from Chandigarh, India, dedicating my time to mastering core programming, web architecture, and emerging AI technologies.
          </p>
        </div>

        {/* 3-Column Apple-style Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Academic Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-[#0E121B]/80 border border-white/10 hover:border-[#E22424]/40 transition-all duration-300 shadow-xl relative group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#141A26] border border-white/10 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">Academic Rigor</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Currently in my 2nd Year of Computer Science & Engineering at <strong>Swami Vivekanand Institute of Engineering and Technology (SVIET)</strong> in Chandigarh.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center justify-between text-xs text-neutral-400">
              <span>Institution</span>
              <span className="font-semibold text-white">SVIET, Chandigarh</span>
            </div>
          </motion.div>

          {/* Card 2: Web Craft */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#0E121B]/80 border border-white/10 hover:border-[#E22424]/40 transition-all duration-300 shadow-xl relative group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#141A26] border border-white/10 flex items-center justify-center text-[#E22424] group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">Web Application Passion</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                &ldquo;I love building web applications&rdquo; — from structural HTML/CSS styling to responsive client interactions and modern software aesthetics.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center justify-between text-xs text-neutral-400">
              <span>Focus</span>
              <span className="font-semibold text-white">Responsive & Interactive Apps</span>
            </div>
          </motion.div>

          {/* Card 3: AI & Emerging Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#0E121B]/80 border border-white/10 hover:border-[#E22424]/40 transition-all duration-300 shadow-xl relative group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#141A26] border border-white/10 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">AI Exploration</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Constantly learning modern AI paradigms, Python scripting, automated logic, and experimenting with how intelligent agents enhance user experiences.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center justify-between text-xs text-neutral-400">
              <span>Exploration Area</span>
              <span className="font-semibold text-white">Artificial Intelligence</span>
            </div>
          </motion.div>

        </div>

        {/* Interactive Visual Progression Track */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-2xl bg-[#0B0E14] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle spider-man red highlight on corner */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#E22424] to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E22424] font-bold">
                Student Learning Progression
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-1">
                Continuous Technical Evolution
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-[#121620] px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#E22424] animate-pulse" />
              <span>Currently in Step 2, 3 & 4</span>
            </div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {roadmapSteps.map((step, idx) => (
              <div
                key={step.title}
                className={`p-4 rounded-xl border transition-all duration-200 relative ${
                  step.state === 'Active'
                    ? 'bg-[#121622] border-[#E22424]/40 shadow-[0_0_15px_rgba(226,36,36,0.15)]'
                    : step.state === 'Complete'
                    ? 'bg-[#0E1118] border-white/10'
                    : step.state === 'Exploring'
                    ? 'bg-[#14121E] border-purple-500/30'
                    : 'bg-[#090B0F] border-white/5 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-neutral-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      step.state === 'Active'
                        ? 'bg-[#E22424]/20 text-[#E22424]'
                        : step.state === 'Complete'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : step.state === 'Exploring'
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'bg-white/5 text-neutral-500'
                    }`}
                  >
                    {step.state}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1 font-['Outfit']">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Authentic Statement */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <p>
              &ldquo;With great power comes great responsibility&rdquo; — applied to writing clean, reliable code.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">Curiosity-driven development</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E22424]" />
              <span className="text-white font-medium">Chandigarh, India</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
