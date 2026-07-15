'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { Marquee } from '@/components/ui/Marquee';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const parallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const parallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = clientX / innerWidth - 0.5;
    const yPct = clientY / innerHeight - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotateX: 45, filter: "blur(20px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    })
  };

  return (
    <section 
      id="hero"
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center z-10 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none z-0" />
      
      {/* Background Marquee */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-[0.03]">
        <Marquee text="CREATIVE DEVELOPER" speed={50} className="text-[6rem] sm:text-[8rem] lg:text-[15rem] font-heading font-bold" />
        <Marquee text="AI ENGINEER" speed={40} className="text-[6rem] sm:text-[8rem] lg:text-[15rem] font-heading font-bold" />
      </div>

      <motion.div 
        className="max-w-[1400px] w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10"
        style={{ x: parallaxX, y: parallaxY }}
      >
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[60%]">
          <div className="overflow-hidden mb-2">
            <motion.h1 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="text-[2.5rem] sm:text-[5rem] lg:text-[10rem] font-heading font-bold tracking-tighter leading-[0.8] text-white"
              style={{ transformOrigin: "bottom center" }}
            >
              FAIZAN
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="text-[2.5rem] sm:text-[5rem] lg:text-[10rem] font-heading font-bold tracking-tighter leading-[0.8] text-metallic"
              style={{ transformOrigin: "bottom center" }}
            >
              KHAN.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl font-light text-zinc-400 mb-12 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center tracking-wide"
          >
            <span>AI Engineer</span>
            <span className="hidden sm:inline text-white/20">—</span>
            <span>Full Stack</span>
            <span className="hidden sm:inline text-white/20">—</span>
            <span>Creative</span>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6"
          >
            <MagneticButton>
              <Link 
                href="#projects" 
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-zinc-200"
              >
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <a 
                href="/Faizan_Khan_Resume.pdf" 
                target="_blank" 
                className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium backdrop-blur-xl hover:bg-white/5 transition-all"
              >
                Resume <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </MagneticButton>

            <div className="flex items-center gap-4">
              <MagneticButton>
                <a 
                  href="https://github.com/FaizanKhan8896" 
                  target="_blank" 
                  className="group flex items-center justify-center w-14 h-14 bg-transparent border border-white/10 text-white rounded-full backdrop-blur-xl hover:bg-white/5 transition-all"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href="https://www.linkedin.com/in/faizan-khan-772b782a5" 
                  target="_blank" 
                  className="group flex items-center justify-center w-14 h-14 bg-transparent border border-white/10 text-white rounded-full backdrop-blur-xl hover:bg-white/5 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Photo */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[32rem] md:h-[32rem] relative shrink-0 group"
            style={{ 
              WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 70%)", 
              maskImage: "radial-gradient(circle at center, black 40%, transparent 70%)" 
            }}
        >
          <Image
            src="/profile.png"
            alt="Faizan Khan"
            fill
            priority
            className="object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-mono font-medium">Scroll</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-white/30 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full bg-white h-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
