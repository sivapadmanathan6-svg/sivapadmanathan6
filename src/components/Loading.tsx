import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('ALLOCATING_MODULES');

  useEffect(() => {
    const phases = [
      { max: 25, label: 'ALLOCATING_RESOURCES' },
      { max: 55, label: 'BOOTING_COMPONENTS' },
      { max: 80, label: 'COMPILING_ASSETS' },
      { max: 100, label: 'ESTABLISHING_CHANNELS' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const step = Math.floor(Math.random() * 15) + 5;
        const next = Math.min(100, prev + step);

        // Find matching phase label
        const currentPhase = phases.find((p) => next <= p.max);
        if (currentPhase) {
          setPhaseText(currentPhase.label);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small pause for perfect presentation
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#020617] z-50 flex flex-col items-center justify-center p-6 select-none">
      <div className="w-full max-w-sm space-y-4">
        {/* Glowing identity header */}
        <div className="space-y-1.5 text-center">
          <div className="relative inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-[9px] font-mono text-purple-400 tracking-widest rounded-md uppercase">
            KAELEN_VANCE_COURIER
          </div>
          <h2 className="text-2xl font-display font-medium tracking-widest text-white leading-none pt-2 uppercase">
            SYSTEMS_INITIALIZING
          </h2>
        </div>

        {/* Dynamic progress bar and counts */}
        <div className="space-y-2 pt-4">
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
            <span className="animate-pulse">{phaseText}</span>
            <span>{progress}%</span>
          </div>

          <div className="h-[3px] bg-white/[0.02] border border-white/[0.05] rounded-full p-[0.5px] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
