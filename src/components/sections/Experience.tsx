'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    title: 'Founder & Lead Developer',
    company: 'Bugbie',
    date: '2023 - Present',
    description: 'Founded and led a web development venture, taking client projects from requirements to deployment. Owned the full development lifecycle — architecture, coding, deployment, and client communication.',
    type: 'experience'
  },
  {
    title: 'MERN & Java Intern',
    company: 'UptoSkills',
    date: 'Nov 2025 - Jan 2026',
    description: 'Worked across the MERN stack and Java full-stack development. Built REST APIs, managed databases, and integrated frontend systems.',
    type: 'experience'
  },
  {
    title: 'Java Intern',
    company: 'CODSOFT',
    date: 'Mar 2025 - May 2025',
    description: 'Developed Java applications using OOP principles and core data structures. Used Git and GitHub for version control and team collaboration.',
    type: 'experience'
  },
  {
    title: 'B.Tech in Computer Science',
    company: 'Allenhouse Institute of Technology',
    date: 'Expected 2026',
    description: 'Final year student. Gold Medal in Robowar Competition. 2nd Position in Table Tennis (AKTU). Participant in India AI Impact Buildathon.',
    type: 'education'
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative z-10 w-full min-h-screen py-32 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Journey
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            My professional experience and educational background.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-zinc-600 -translate-x-1/2" 
            style={{ height: lineHeight }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-500 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-zinc-400" />
                  
                  {/* Content Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                    className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                  >
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4 mb-2 md:hidden">
                        <span className="text-zinc-400 font-mono text-sm">{exp.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-zinc-400 mb-4">{exp.company}</h4>
                      <p className="text-zinc-500 font-light leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>

                  {/* Date for Desktop */}
                  <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-1/2 ${isEven ? 'left-1/2 pl-16' : 'right-1/2 pr-16 justify-end'}`}>
                    <span className="text-zinc-400 font-mono text-sm tracking-wider">{exp.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
