import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import { Skill } from '../types';

const CATEGORIES = [
  { id: 'All', label: 'ALL_SKILLS' },
  { id: 'Frontend', label: 'FRONTEND' },
  { id: 'Backend', label: 'BACKEND' },
  { id: 'Databases', label: 'DATABASES' },
  { id: 'Tools', label: 'TOOLS_TECH' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === selectedCategory);

  const getGlowStyles = (color: Skill['glowColor']) => {
    switch (color) {
      case 'purple':
        return {
          text: 'text-purple-400',
          bar: 'bg-purple-500 shadow-purple-500/50',
          border: 'group-hover:border-purple-500/40',
          bg: 'bg-purple-500/5',
          glow: 'rgba(147, 51, 234, 0.15)',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          bar: 'bg-cyan-500 shadow-cyan-500/50',
          border: 'group-hover:border-cyan-500/40',
          bg: 'bg-cyan-500/5',
          glow: 'rgba(6, 182, 212, 0.15)',
        };
      case 'magenta':
        return {
          text: 'text-pink-400',
          bar: 'bg-pink-500 shadow-pink-500/50',
          border: 'group-hover:border-pink-500/40',
          bg: 'bg-pink-500/5',
          glow: 'rgba(236, 72, 153, 0.15)',
        };
      case 'emerald':
        return {
          text: 'text-emerald-400',
          bar: 'bg-emerald-500 shadow-emerald-500/50',
          border: 'group-hover:border-emerald-500/40',
          bg: 'bg-emerald-500/5',
          glow: 'rgba(16, 185, 129, 0.15)',
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-[400px] h-[400px] rounded-full radial-glow-cyan opacity-25 animate-pulse duration-[8000ms]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left space-y-4">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
              CHAPTER_02 // SYSTEM_MATRIX
            </span>
            <div className="h-[1px] w-8 bg-cyan-500" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
                Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-glow-cyan">Capabilities</span>
              </h2>
              <p className="text-zinc-400 max-w-xl font-sans font-light text-sm md:text-base leading-relaxed">
                Demonstrated core proficiencies mapped to modular application layers. Hover categories to inspect micro-registers.
              </p>
            </div>

            {/* Interactive Category Chips Selector */}
            <div className="flex flex-wrap gap-2 justify-center bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-2xl backdrop-blur-md">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/5'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const theme = getGlowStyles(skill.glowColor);
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`glass-card p-6 rounded-2xl border border-white/[0.04] flex flex-col justify-between cursor-default transition-all duration-300 group ${theme.border}`}
                  style={{
                    boxShadow: isHovered ? `0 10px 30px ${theme.glow}` : 'none',
                  }}
                >
                  <div className="space-y-4">
                    {/* Icon and Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border ${theme.border.split(':')[1] || 'border-white/[0.05]'} ${theme.bg}`}>
                        <LucideIcon name={skill.icon} className={`w-5 h-5 ${theme.text}`} />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 bg-white/[0.02] px-2 py-1 rounded border border-white/[0.05] uppercase">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Info */}
                    <div className="space-y-1">
                      <h3 className="text-base font-display font-extrabold text-white group-hover:text-white transition-colors flex items-center justify-between">
                        <span>{skill.name}</span>
                        <span className={`text-xs font-mono font-medium ${theme.text}`}>
                          {skill.level}%
                        </span>
                      </h3>
                      {skill.description && (
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Cyberpunk Register Progress Gauge */}
                  <div className="mt-6 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-600">
                      <span>GAUGE_COEFF</span>
                      <span>{skill.level}/100</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/[0.02] border border-white/[0.05] rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className={`h-full rounded-full transition-all duration-200 ${theme.bar}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
