import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

const JOURNEY_CHAPTERS = [
  {
    icon: 'Sparkles',
    number: '01',
    title: 'Intellectual Awakening',
    subtitle: 'The Spark of Curiosity',
    description:
      'My developer journey did not begin with a textbook; it started with a profound curiosity about how the digital interfaces we touch every second actually operate. Seeing code transform into fluid human experiences sparked an undeniable obsession with the underlying architecture of the web.',
    accentColor: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
  },
  {
    icon: 'Cpu',
    number: '02',
    title: 'The Learning Crucible',
    subtitle: 'Relentless Exploration',
    description:
      'I view programming as a creative craft rather than a computational task. Moving rapidly from pure HTML/CSS layouts into rich TypeScript states and custom Node server instances, I committed to structured self-study, building real applications daily, and perfecting API standards.',
    accentColor: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  },
  {
    icon: 'Activity',
    number: '03',
    title: 'Infinite Horizons',
    subtitle: 'The Full-Stack Future',
    description:
      'A passionate developer is a perpetual newcomer, always hungry to learn. For me, "Full Stack" represents the ultimate canvas: connecting complex relational database engines seamlessly to ultra-responsive user interfaces. I build with standard design patterns, strict type contracts, and zero excuses.',
    accentColor: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
  },
];

const METRICS = [
  { value: '1,200+', label: 'COMMITTED_HOURS' },
  { value: '10+', label: 'COMPLETED_PROJECTS' },
  { value: '4+', label: 'COMPREHENSIVE_CERTS' },
  { value: '100%', label: 'CODE_INTEGRITY' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full radial-glow-purple opacity-30 animate-pulse duration-[7000ms]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-3">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 font-bold uppercase">
              CHAPTER_01 // NARRATIVE
            </span>
            <div className="h-[1px] w-8 bg-purple-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            An Obsession with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-350">Discovery</span>
          </h2>
          <p className="text-zinc-400 max-w-xl font-sans font-light text-sm md:text-base leading-relaxed">
            I don’t just write scripts; I design holistic digital environments. Here is how a self-directed spark developed into elite engineering aspirations.
          </p>
        </div>

        {/* Narrative Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {JOURNEY_CHAPTERS.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between group cursor-default border border-white/[0.04] transition-all`}
            >
              <div className="space-y-6">
                {/* Top chapter element */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl border ${chapter.accentColor.split(' ')[1]} ${chapter.accentColor.split(' ')[2]}`}>
                    <LucideIcon name={chapter.icon} className={`w-5 h-5 ${chapter.accentColor.split(' ')[0]}`} />
                  </div>
                  <span className="text-sm font-mono text-zinc-600 font-semibold group-hover:text-purple-400 transition-colors">
                    CH_{chapter.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
                    {chapter.subtitle}
                  </h4>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {chapter.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed font-sans">
                  {chapter.description}
                </p>
              </div>

              {/* Decorative detail line */}
              <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between text-zinc-500 group-hover:text-cyan-400 transition-all text-xs font-mono">
                <span>INTENT: INVESTIGATED</span>
                <LucideIcon name="ChevronRight" className="w-3 h-3 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics/Stats Showcase Bar */}
        <div className="glass-card rounded-2xl border border-white/[0.04] p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 pointer-events-none -z-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
            {METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center pt-4 first:pt-0 md:pt-0 px-4 space-y-1.5"
              >
                <div className="relative inline-block">
                  <h3 className="text-3xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 leading-none">
                    {metric.value}
                  </h3>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-30" />
                </div>
                <p className="text-[10px] font-mono tracking-wider text-zinc-500 pt-1 uppercase">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
