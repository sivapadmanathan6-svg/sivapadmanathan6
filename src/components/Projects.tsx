import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import { Project } from '../types';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -z-10 w-[500px] h-[500px] rounded-full radial-glow-purple opacity-20 animate-pulse duration-[9000ms]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 font-bold uppercase">
              CHAPTER_03 // ARTIFACTS
            </span>
            <div className="h-[1px] w-8 bg-purple-500" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 text-glow">Syntheses</span>
              </h2>
              <p className="text-zinc-400 max-w-xl font-sans font-light text-sm md:text-base leading-relaxed">
                Exquisite product repositories featuring robust state pipelines, type safety, and polished aesthetics.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-2xl backdrop-blur-md">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300 shadow-lg shadow-purple-500/5'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  {cat === 'All' ? 'ALL_WORK' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer glass-card rounded-2xl border border-white/[0.04] overflow-hidden transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Cover Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/[0.05]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform filter brightness-90 saturate-[0.85]"
                  />

                  {/* Diagonal Glowing Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/30 to-transparent blur-md -mr-4 -mt-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  {/* Project Category overlay badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[9px] font-mono tracking-widest text-[#020617] bg-white px-3 py-1.5 rounded-lg font-black uppercase shadow-lg select-none">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 z-20 text-left space-y-1">
                    <span className="text-[10px] font-mono tracking-wide text-cyan-400 font-semibold uppercase">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight flex items-center">
                      <span>{project.title}</span>
                      <LucideIcon name="ArrowUpRight" className="w-5 h-5 ml-1.5 text-zinc-400 group-hover:text-cyan-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                  </div>
                </div>

                {/* Info and Tags footer */}
                <div className="p-6 md:p-8 space-y-4 text-left">
                  <p className="text-sm text-zinc-450 font-sans font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05] rounded-md px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-500/5 border border-purple-500/10 rounded-md px-2 py-1 font-semibold">
                        +{project.tags.length - 4}_MORE
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#020617]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5, damping: 25 }}
                className="bg-[#020617] border border-white/[0.08] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header visual banner */}
                <div className="relative aspect-[16/7] md:aspect-[16/6] w-full overflow-hidden border-b border-white/[0.05]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/45 to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-75 select-none"
                  />

                  {/* Close floating button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 border border-white/[0.1] text-zinc-400 hover:text-white hover:bg-black/80 transition-all focus:outline-none"
                  >
                    <LucideIcon name="X" className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 md:left-10 z-20 text-left space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#020617] bg-white px-2.5 py-1 rounded-md font-extrabold uppercase">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {selectedProject.year}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Body Info */}
                <div className="p-8 md:p-10 space-y-8 text-left">
                  {/* Grid Intro columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Story on left */}
                    <div className="lg:col-span-8 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                        ARCHITECTURAL_NARRATIVE
                      </h4>
                      <p className="text-zinc-305 text-sm md:text-base font-sans font-light leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Meta information on right */}
                    <div className="lg:col-span-4 bg-white/[0.01] border border-white/[0.04] p-5 rounded-2xl space-y-4">
                      <div>
                        <h5 className="text-[10px] font-mono text-zinc-500 tracking-wider">TECHNOLOGIES_USED</h5>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono text-zinc-350 bg-white/[0.03] border border-white/[0.05] rounded-md px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col space-y-2">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all flex items-center justify-center space-x-1.5"
                          >
                            <span>Launch Live Sandbox</span>
                            <LucideIcon name="ExternalLink" className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 text-zinc-200 hover:text-white hover:bg-white/[0.05] active:scale-95 transition-all flex items-center justify-center space-x-1.5"
                          >
                            <LucideIcon name="Github" className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Inspect Codebase</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.05]">
                    <h4 className="text-xs font-mono tracking-widest text-zinc-500 uppercase flex items-center space-x-2">
                      <LucideIcon name="Trophy" className="w-4 h-4 text-purple-400" />
                      <span>CRITICAL_ACHIEVEMENTS</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.achievements.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2.5 text-xs text-zinc-400 bg-white/[0.01] border border-white/[0.03] p-3 rounded-xl hover:border-purple-500/25 transition-colors cursor-default"
                        >
                          <LucideIcon name="CheckCircle2" className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
