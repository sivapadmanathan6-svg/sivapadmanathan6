import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection observer behavior
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      let currentSection = 'hero';

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is close to the top of the viewport
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/60 backdrop-blur-md py-4 border-b border-white/[0.05]'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Identity */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2.5 font-display text-lg font-bold tracking-tight text-white focus:outline-none cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[#020617] rounded-[7px] flex items-center justify-center">
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono font-black group-hover:scale-110 transition-transform">
                KV
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-500 opacity-20 blur-sm -z-10 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="relative overflow-hidden block">
            <span className="relative z-10 transition-transform group-hover:-translate-y-full block">
              Kaelen.dev
            </span>
            <span className="absolute left-0 top-0 text-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform block">
              Portfolio
            </span>
          </span>
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 relative ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          </span>
        </button>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/[0.03] border border-white/[0.05] rounded-full p-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger buttons for Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg border border-white/[0.05] bg-white/[0.02]"
        >
          <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Sliding Overlay menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 border-b border-white/[0.05] backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm py-2 px-3 rounded-lg text-left font-medium transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-purple-400 bg-white/[0.02] border-l-2 border-purple-500'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.01]'
                  }`}
                >
                  <span>{link.label}</span>
                  <LucideIcon
                    name="ChevronRight"
                    className={`w-4 h-4 text-purple-500/50 transition-transform ${
                      activeSection === link.id ? 'translate-x-1' : ''
                    }`}
                  />
                </button>
              ))}
              <hr className="border-white/[0.05] my-2" />
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/20 active:scale-95 transition-all text-center"
              >
                Let's Coordinate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
