'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion';

function AnimatedCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="flex flex-col items-start justify-center p-6 bg-black/20 border border-white/5 rounded-[2rem] backdrop-blur-md hover:bg-white/5 hover:border-white/10 transition-all duration-500 group">
      <motion.div className="text-5xl md:text-6xl font-heading font-bold text-white mb-2 flex items-center group-hover:scale-105 transition-transform origin-left">
        <motion.span>{useTransform(springValue, (latest) => Math.round(latest))}</motion.span>
        <span className="text-zinc-500">{suffix}</span>
      </motion.div>
      <div className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}

const PARAGRAPH = "I'm a final-year Computer Science student and self-taught full-stack developer with hands-on experience delivering live client projects. My mission is to build software that feels premium, works flawlessly, and leaves a lasting impact. Whether it's crafting scalable backends or designing award-winning interfaces, I thrive at the intersection of design and engineering.";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"]
  });

  const words = PARAGRAPH.split(" ");

  return (
    <section ref={sectionRef} id="about" className="relative z-10 w-full min-h-screen py-32 px-4 bg-zinc-950/80 backdrop-blur-3xl border-t border-white/5 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          
          {/* Left: Sticky Heading */}
          <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6">About Me</h2>
              <h3 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter leading-[0.9]">
                Engineering <br/>
                <span className="text-metallic">the future.</span>
              </h3>
            </motion.div>
          </div>

          {/* Right: Content & Counters */}
          <div className="w-full lg:w-[60%] flex flex-col gap-16">
            
            {/* Scroll Reveal Text */}
            <div className="text-2xl md:text-4xl text-zinc-300 font-light leading-relaxed flex flex-wrap gap-x-2 gap-y-2">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                return (
                  <motion.span key={i} style={{ opacity }} className="inline-block">
                    {word}
                  </motion.span>
                );
              })}
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-12 border-t border-white/10">
              <AnimatedCounter value={5} label="Projects Delivered" suffix="+" />
              <AnimatedCounter value={3} label="Years Experience" suffix="+" />
              <AnimatedCounter value={15} label="Technologies" suffix="+" />
              <AnimatedCounter value={4} label="Awards Won" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
