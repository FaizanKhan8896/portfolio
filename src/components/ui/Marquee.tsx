'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Marquee({ text, speed = 40, className = '' }: MarqueeProps) {
  // To ensure seamless scrolling, we repeat the text enough times
  const repeatedText = Array(4).fill(text).join(" • ");
  
  return (
    <div className={`relative w-full overflow-hidden flex whitespace-nowrap pointer-events-none select-none ${className}`}>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <span className="pr-16">{repeatedText}</span>
        <span className="pr-16">{repeatedText}</span>
      </motion.div>
    </div>
  );
}
