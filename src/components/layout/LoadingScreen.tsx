'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading assets
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay before hiding
          return 100;
        }
        // Random increment between 5 and 15
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          <div className="flex flex-col items-center gap-6 overflow-hidden">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              FAIZAN KHAN
            </motion.div>
            
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'linear' }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-mono text-zinc-500"
            >
              {Math.min(progress, 100)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
