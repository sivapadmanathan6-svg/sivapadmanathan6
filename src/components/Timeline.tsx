import { motion } from 'motion/react';
import { TIMELINE } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import { TimelineItem } from '../types';

export default function Timeline() {
  const getGlowStyles = (color: TimelineItem['glowColor']) => {
    switch (color) {
      case 'purple':
        return {
          text: 'text-purple-400',
          border: 'border-purple-500/20',
          bullet: 'bg-purple-500 shadow-purple-500/50',
          bg: 'bg-purple-500/5',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          border: 'border-cyan-500/20',
          bullet: 'bg-cyan-500 shadow-cyan-500/50',
          bg: 'bg-cyan-500/5',
        };
      case 'amber':
        return {
          text: 'text-amber-400',
          border: 'border-amber-500/20',
          bullet: 'bg-amber-500 shadow-amber-500/50',
          bg: 'bg-amber-500/5',
        };
    }
  };

  const getTimelineIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'milestone':
        return 'Sparkles';
      case 'education':
        return 'GraduationCap';
      case 'certification':
        return 'Trophy';
    }
  };

  return (
    <section id="timeline" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 left-1/4 -z-10 w-[450px]. h-[450px] rounded-full radial-glow-cyan opacity-20 animate-pulse duration-[7000ms]"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <div className="flex items-center space-x-2 justify-center">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 font-bold uppercase">
              CHAPTER_04 // TIME_LOGS
            </span>
            <div className="h-[1px] w-8 bg-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            The Futuristic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 text-glow">Timeline</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto font-sans font-light text-sm md:text-base leading-relaxed">
            Record of critical inflection logs, core studies, and deployment milestones on my track to senior full stack mastery.
          </p>
        </div>

        {/* Futuristic Timeline Tree */}
        <div className="relative border-l-2 border-white/[0.05] ml-4 md:ml-32 space-y-12 pb-4">
          {TIMELINE.map((item, index) => {
            const styles = getGlowStyles(item.glowColor);
            const iconName = getTimelineIcon(item.type);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group text-left"
              >
                {/* Year tag left rail for large screens */}
                <div className="hidden md:block absolute right-full mr-12 top-1.5 text-right font-display leading-none">
                  <span className="text-3xl font-black text-white/10 group-hover:text-white/40 group-hover:scale-105 transition-all block font-display">
                    {item.year}
                  </span>
                  <span className={`text-[9px] font-mono tracking-wider uppercase ${styles.text}`}>
                    {item.type}
                  </span>
                </div>

                {/* Bullets pointer glow node */}
                <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border border-black z-15 flex items-center justify-center transition-all group-hover:scale-125 ${styles.bullet}`}>
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                </span>

                {/* Main Card content */}
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/[0.04] group-hover:border-purple-500/20 transition-all duration-300 shadow-xl">
                  {/* Decorative timeline node icon */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      {/* Mobile Year/Type Layout */}
                      <div className="md:hidden flex items-center space-x-2 text-[10px] font-mono tracking-wide">
                        <span className="text-purple-400 font-bold">{item.year}</span>
                        <span className="text-zinc-600">•</span>
                        <span className={`uppercase ${styles.text}`}>{item.type}</span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className={`self-start sm:self-center p-2 rounded-xl border ${styles.border} ${styles.bg}`}>
                      <LucideIcon name={iconName} className={`w-4 h-4 ${styles.text}`} />
                    </div>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-sm text-zinc-400 font-light leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  {/* Bullet milestone items panel */}
                  <div className="pt-4 border-t border-white/[0.03] space-y-2">
                    <div className="text-[10px] font-mono tracking-wider text-zinc-600 uppercase flex items-center space-x-1">
                      <LucideIcon name="Workflow" className="w-3 h-3 text-cyan-500/50" />
                      <span>CRIT_RECORDS</span>
                    </div>
                    <ul className="space-y-2 pt-1">
                      {item.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start space-x-2 text-xs text-zinc-405 leading-relaxed font-sans cursor-default hover:text-zinc-200 transition-colors"
                        >
                          <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${styles.bullet.split(' ')[0]}`} />
                          <span className="font-sans leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
