import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  Star, 
  GitFork 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-2xl bg-[#0C0F17] border border-white/15 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner with Subtle Spider Gradient */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#131926] to-[#0A0D14] border-b border-white/10">
            {/* Top Close Button */}
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#182030] hover:bg-[#202B40] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Language & Meta Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs px-3 py-1 rounded-full bg-[#E22424]/20 border border-[#E22424]/40 text-[#E22424] font-semibold tracking-wide">
                {project.language}
              </span>
              {project.isLiveRepo && (
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-semibold tracking-wide">
                  Live GitHub Repo
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-2">
              {project.displayName || project.name}
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
              {project.description}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Highlights & Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E22424]" />
                  <span>Key Highlights & Engineering Focus</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#121622] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E22424] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What I Learned */}
            {project.whatILearned && project.whatILearned.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                  <span>What I Learned</span>
                </h4>
                <ul className="space-y-2">
                  {project.whatILearned.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture / Structure */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-[#090C12] border border-white/10 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Architecture</span>
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Tech Tags */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-lg bg-[#141824] text-neutral-200 border border-white/10 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 sm:p-6 bg-[#090C12] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.stars || 0} Stars</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-neutral-400" />
                <span>{project.forks || 0} Forks</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E22424] hover:bg-[#C91E1E] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#182030] hover:bg-[#202B40] text-white text-xs sm:text-sm font-semibold transition-colors border border-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
