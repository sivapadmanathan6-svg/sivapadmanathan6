import LucideIcon from './LucideIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#020617]/80 py-12 px-6 md:px-12 z-10 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs text-zinc-400 font-sans">
            Designed & Engineered with premium quality.
          </p>
          <p className="text-[10px] text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} Kaelen Vance. All rights reserved.
          </p>
        </div>

        {/* Center signature */}
        <div className="flex items-center space-x-2">
          <div className="h-[1px] w-6 bg-zinc-700" />
          <span className="text-xs font-display font-medium text-zinc-400 tracking-wider hover:text-white transition-colors select-none">
            CURIOUSLY_LEARNING_ALWAYS
          </span>
          <div className="h-[1px] w-6 bg-zinc-700" />
        </div>

        {/* Right back to top scroll */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-white/[0.02] hover:bg-purple-500/10 border border-white/[0.05] hover:border-purple-500/30 text-zinc-400 hover:text-white rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-2 text-xs font-medium font-mono"
        >
          <span>BACK_TO_TOP</span>
          <LucideIcon name="ChevronRight" className="w-4 h-4 -rotate-90 text-purple-400 animate-pulse" />
        </button>
      </div>
    </footer>
  );
}
