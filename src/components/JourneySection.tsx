import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Globe, 
  Cpu, 
  Rocket, 
  Calendar,
  Milestone,
  CheckCircle2
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkle':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Milestone className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden">
      {/* Spider-Grid background */}
      <div className="absolute inset-0 spider-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#E22424]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/10 text-xs font-semibold text-[#E22424] uppercase tracking-widest">
            <Milestone className="w-3.5 h-3.5" />
            <span>Evolutionary Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            The Developer <br />
            <span className="text-gradient-red">Journey</span>
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            Tracing key milestones from early beginnings to current 2nd-year CSE foundations and ongoing exploration in web engineering and AI.
          </p>
        </div>

        {/* Vertical Connected Web Timeline */}
        <div className="relative">
          
          {/* Central Connecting Web Strand (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E22424] via-white/20 to-[#3B82F6]" />

          <div className="space-y-12 md:space-y-16">
            {journeyMilestones.map((m, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6 md:gap-12`}
                >
                  {/* Left / Right Card Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-[#0E121B]/90 border border-white/10 hover:border-[#E22424]/40 transition-all duration-300 shadow-xl relative group ${
                        m.status === 'in-progress'
                          ? 'border-[#E22424]/30 shadow-[0_0_20px_rgba(226,36,36,0.1)]'
                          : ''
                      }`}
                    >
                      {/* Year pill */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-3 ${
                          m.status === 'completed'
                            ? 'bg-white/10 text-white'
                            : m.status === 'in-progress'
                            ? 'bg-[#E22424]/20 text-[#E22424] border border-[#E22424]/40'
                            : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{m.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                        {m.title}
                      </h3>

                      <h4 className="text-xs font-medium text-neutral-400 mb-3">
                        {m.subtitle}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                        {m.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {m.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#151926] text-neutral-300 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 shrink-0 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                        m.status === 'completed'
                          ? 'bg-[#0E121B] border-white/40 text-white'
                          : m.status === 'in-progress'
                          ? 'bg-[#180F14] border-[#E22424] text-[#E22424] shadow-[0_0_20px_rgba(226,36,36,0.4)] animate-pulse'
                          : 'bg-[#0E121B] border-blue-400 text-blue-400'
                      }`}
                    >
                      {getMilestoneIcon(m.icon)}
                    </div>
                  </div>

                  {/* Empty spacer for alternating column balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
