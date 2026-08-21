import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Star, 
  GitFork, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  ArrowUpRight,
  FolderGit2,
  CheckCircle
} from 'lucide-react';
import { Project } from '../types';
import { fallbackProjects, studentProfile } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(false);
  const [liveApiActive, setLiveApiActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'c-cpp' | 'python-ai' | 'web'>('all');

  const fetchGithubRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${studentProfile.githubUsername}/repos?sort=updated&per_page=12`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const mappedRepos: Project[] = data.map((repo: any) => ({
            id: `gh-${repo.id}`,
            name: repo.full_name,
            displayName: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').toUpperCase(),
            description: repo.description || 'Public GitHub repository exploring computer science principles and software implementations.',
            language: repo.language || 'Code',
            tags: [repo.language || 'Code', 'Open Source', 'GitHub Repo'].filter(Boolean),
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            featured: repo.stargazers_count > 0 || !repo.fork,
            isLiveRepo: true,
            highlights: [
              `Repository managed by @${studentProfile.githubUsername}`,
              repo.default_branch ? `Default branch: ${repo.default_branch}` : 'Actively maintained',
              repo.license?.name ? `License: ${repo.license.name}` : 'Open source code'
            ],
            whatILearned: [
              'Version control workflows and Git commit disciplines',
              'Modular project directory structures',
              'Self-documenting code and README documentation'
            ],
            architecture: `GitHub Repository: ${repo.full_name} (${repo.language || 'Multi-language'})`
          }));

          // Merge live repos with curated rich fallback info
          setProjects(mappedRepos);
          setLiveApiActive(true);
        } else {
          setProjects(fallbackProjects);
          setLiveApiActive(false);
        }
      } else {
        // Fallback to rich curated data
        setProjects(fallbackProjects);
        setLiveApiActive(false);
      }
    } catch (err) {
      console.log('GitHub API fetch fallback used:', err);
      setProjects(fallbackProjects);
      setLiveApiActive(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'c-cpp') {
      return (
        proj.language.toLowerCase().includes('c++') ||
        proj.language.toLowerCase().includes('c') ||
        proj.tags.some(t => t.toLowerCase().includes('c++') || t.toLowerCase() === 'c')
      );
    }
    if (activeFilter === 'python-ai') {
      return (
        proj.language.toLowerCase().includes('python') ||
        proj.tags.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('python'))
      );
    }
    if (activeFilter === 'web') {
      return (
        proj.language.toLowerCase().includes('react') ||
        proj.language.toLowerCase().includes('html') ||
        proj.language.toLowerCase().includes('javascript') ||
        proj.language.toLowerCase().includes('typescript') ||
        proj.tags.some(t => t.toLowerCase().includes('web') || t.toLowerCase().includes('react'))
      );
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Web Geometry */}
      <div className="absolute inset-0 spider-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#E22424]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/10 text-xs font-semibold text-[#E22424] uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Software Artifacts</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Crafted Projects & <br />
            <span className="text-gradient-red">GitHub Repositories</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            Explore authentic projects and repositories connected to <strong className="text-white">@mxnpreet7</strong> on GitHub. Designed with Apple-level simplicity and product depth.
          </p>
        </div>

        {/* Top Control Bar: Filters & Live GitHub API Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0E121B] p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#E22424] text-white shadow-[0_0_15px_rgba(226,36,36,0.3)]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('c-cpp')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'c-cpp'
                  ? 'bg-[#E22424] text-white shadow-[0_0_15px_rgba(226,36,36,0.3)]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              C / C++
            </button>
            <button
              onClick={() => setActiveFilter('python-ai')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'python-ai'
                  ? 'bg-[#E22424] text-white shadow-[0_0_15px_rgba(226,36,36,0.3)]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Python & AI
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-[#E22424] text-white shadow-[0_0_15px_rgba(226,36,36,0.3)]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Web & UI
            </button>
          </div>

          {/* GitHub Connection Info & Refresh Button */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121622] border border-white/10 text-neutral-300">
              <span className={`w-2 h-2 rounded-full ${liveApiActive ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`} />
              <span>{liveApiActive ? 'Live GitHub Sync: @mxnpreet7' : 'Curated Repositories'}</span>
            </div>

            <button
              onClick={fetchGithubRepos}
              disabled={loading}
              className="p-2 rounded-xl bg-[#121622] border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
              title="Refresh GitHub Repositories"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#E22424]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Projects Grid: Apple-Style Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#0E121B]/90 border border-white/10 hover:border-[#E22424]/50 transition-all duration-300 p-7 shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top red highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E22424] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row: Tech badge & GitHub Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#E22424] bg-[#E22424]/15 border border-[#E22424]/30 px-3 py-1 rounded-full">
                      {project.language}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.stars || 0}</span>
                    </div>
                    <Github className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-2.5 group-hover:text-neutral-100 transition-colors flex items-center justify-between">
                  <span>{project.displayName || project.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#E22424] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Project Description */}
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Actions */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#141824] text-neutral-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E22424]" />
                    <span>Click to inspect details & learnings</span>
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-neutral-400 hover:text-white hover:underline transition-colors"
                  >
                    <span>Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global GitHub CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#101420] via-[#0E1119] to-[#120E15] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-['Outfit'] flex items-center justify-center sm:justify-start gap-2">
              <Github className="w-5 h-5 text-[#E22424]" />
              <span>Explore all repositories on GitHub</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Check out all source code, commits, and experiments directly at <strong>github.com/mxnpreet7</strong>.
            </p>
          </div>

          <a
            id="view-all-github-btn"
            href={studentProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-white/20 shrink-0 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>Visit @mxnpreet7</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
