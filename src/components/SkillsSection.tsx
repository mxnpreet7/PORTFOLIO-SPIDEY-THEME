import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap,
  BookOpen
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Comfortable':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Developing':
        return 'bg-[#E22424]/15 text-[#E22424] border-[#E22424]/40';
      case 'Familiar':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'Learning':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      default:
        return 'bg-neutral-500/10 text-neutral-300 border-white/10';
    }
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(selectedSkill.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Spider Web Background */}
      <div className="absolute inset-0 spider-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#E22424]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/10 text-xs font-semibold text-[#E22424] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Core Languages & <br />
            <span className="text-gradient-red">Web Technologies</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            Honest assessment of my current programming competencies as a 2nd-year CSE undergrad. Interactive inspection of code paradigms and core topics.
          </p>
        </div>

        {/* Interactive Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skill Cards Grid (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <motion.div
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  onClick={() => setSelectedSkill(skill)}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#121622] border-[#E22424]/70 shadow-[0_0_25px_rgba(226,36,36,0.2)]'
                      : 'bg-[#0E1119]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#111520]'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E22424] to-[#3B82F6]" />
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#E22424]/20 text-[#E22424]'
                            : 'bg-[#151926] text-neutral-400 group-hover:text-white'
                        }`}
                      >
                        {getIcon(skill.iconName)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-['Outfit']">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-neutral-400 font-mono capitalize">
                          {skill.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Honest Proficiency Badge */}
                    <span
                      className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${getLevelBadgeColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
                    {skill.experienceDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.topics.slice(0, 2).map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#161B28] text-neutral-300 font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                    {skill.topics.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#161B28] text-neutral-400 font-mono">
                        +{skill.topics.length - 2}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive Code & Skill Deep-Dive Inspector (5 columns) */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              key={selectedSkill.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-[#0B0E14] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              {/* Card Header */}
              <div className="p-5 bg-[#0F131D] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#171D2D] border border-white/10 flex items-center justify-center text-[#E22424]">
                    {getIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white font-['Outfit']">
                        {selectedSkill.name}
                      </h4>
                      <span
                        className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${getLevelBadgeColor(
                          selectedSkill.level
                        )}`}
                      >
                        {selectedSkill.level}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400">
                      CSE Technical Deep Dive
                    </span>
                  </div>
                </div>

                <button
                  onClick={copySnippet}
                  className="p-2 rounded-lg bg-[#151926] hover:bg-[#1C2233] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 bg-[#07080D]">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2 pb-1 border-b border-white/5">
                  <span>SYNTAX & LOGIC PREVIEW</span>
                  <span className="text-[#E22424]">
                    {selectedSkill.name.toLowerCase()}
                  </span>
                </div>
                <pre className="font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto p-3 rounded-lg bg-[#0A0D14] border border-white/5">
                  <code>{selectedSkill.codeSnippet}</code>
                </pre>
              </div>

              {/* Topics Breakdown */}
              <div className="p-5 bg-[#0B0E14] border-t border-white/[0.08] space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Core Concepts Explored
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {selectedSkill.experienceDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Key Topics in Curriculum & Projects
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.topics.map((topic) => (
                      <div
                        key={topic}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#121622] border border-white/10 text-xs text-neutral-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E22424]" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Honest Note */}
              <div className="px-5 py-3 bg-[#080A0F] border-t border-white/5 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Evaluation: 2nd Year B.Tech Academic Focus</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
