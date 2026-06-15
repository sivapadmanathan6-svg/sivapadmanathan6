import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import avatarImg from '../assets/images/luxury_developer_avatar_1781525227374.jpg';

export default function Hero() {
  const handleScrollToWork = () => {
    const element = document.getElementById('projects');
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden z-10"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow-purple -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow-cyan -z-10 animate-pulse duration-[6000ms]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          {/* Tag status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] md:text-xs font-mono tracking-widest text-purple-300 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SYSTEMS_ENG // READY FOR ASSIGNMENT</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h4
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 font-mono text-sm md:text-base tracking-widest"
            >
              SALUTATIONS, I AM
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-none capitalize"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 text-glow">
                Kaelen Vance
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-3"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-100 tracking-wide">
                Full Stack Developer
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-zinc-400 max-w-xl font-sans font-light leading-relaxed"
          >
            "Turning ideas into digital experiences, one line of code at a time."
            <span className="block mt-2 text-zinc-500 text-xs md:text-sm italic">
              Crafting meticulous client solutions using clean architecture and state-of-the-art interactive systems.
            </span>
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={handleScrollToWork}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 text-white shadow-xl shadow-purple-600/25 hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <LucideIcon name="ArrowUpRight" className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3.5 rounded-xl text-xs font-semibold bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/40 text-zinc-200 hover:text-white hover:bg-white/[0.05] transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <LucideIcon name="Mail" className="w-4 h-4 text-purple-400" />
            </button>
          </motion.div>

          {/* Tech stack brief badge list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="pt-6 border-t border-white/[0.05] flex items-center space-x-4 flex-wrap gap-y-2"
          >
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              ACTIVE_ENV_TERMS:
            </span>
            {['REACT_19', 'TYPESCRIPT', 'NODE_EXPRESS', 'POSTGRESQL'].map((stack) => (
              <span
                key={stack}
                className="text-[9px] font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05] rounded py-1 px-2"
              >
                {stack}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Animated premium profile mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            className="relative"
          >
            {/* Pulsing neon outline glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse duration-[10000ms]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full opacity-70 blur-md animate-spin duration-[24000ms]"></div>

            {/* Avatar Frame container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/[0.1] bg-[#020617] p-2 flex items-center justify-center">
              <motion.img
                src={avatarImg}
                alt="Kaelen Vance Developer Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Futuristic floating stat badges */}
              <motion.div
                className="absolute top-10 right-0 glass-card rounded-xl p-3 border border-white/[0.1] flex items-center space-x-2.5 shadow-lg max-w-[150px]"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <div className="text-left leading-normal">
                  <p className="text-[9px] font-mono text-zinc-500 leading-none">SEEKING</p>
                  <p className="text-xs font-display font-medium text-white leading-snug">Elite Projects</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 -left-4 glass-card rounded-xl p-3 border border-white/[0.1] flex items-center space-x-2.5 shadow-lg max-w-[150px]"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <LucideIcon name="Trophy" className="w-4 h-4 text-amber-400" />
                <div className="text-left leading-normal">
                  <p className="text-[9px] font-mono text-zinc-500 leading-none">COMMITMENT</p>
                  <p className="text-xs font-display font-medium text-white leading-snug">100% Quality</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow link pointer indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 select-none pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
          INIT_SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <LucideIcon name="ChevronRight" className="w-4 h-4 text-zinc-400 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
