'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

const projects = [
  {
    id: 'alhadi',
    title: 'Alhadi Auto Parts',
    type: 'Client Project',
    description: 'Developed and deployed a responsive business website for a live client, improving user experience and strengthening the client\'s online presence.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    image: '/alhadi.png',
    live: 'https://alhadiautoparts.com',
    github: '#'
  },
  {
    id: 'solxcel',
    title: 'Solxcel',
    type: 'Client Project',
    description: 'Developed a full MERN stack solution for the client. Built and integrated APIs with the frontend, and managed backend data flow.',
    tech: ['MERN Stack', 'Redux', 'JWT', 'Tailwind CSS'],
    image: '/solxcel.png',
    live: 'https://solxcel.com',
    github: '#'
  },
  {
    id: 'bugbie',
    title: 'Bugbie',
    type: 'Web Development Agency',
    description: 'Founded and operate a full-service web development venture. Managed everything from high-level software architecture to daily client communication and project delivery.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    image: '/bugbie.png',
    live: '#',
    github: 'https://github.com/Bugbie'
  },
  {
    id: 'smart-dine',
    title: 'Smart Dine',
    type: 'Restaurant Management System',
    description: 'Developed a comprehensive restaurant management software for seamless order processing, inventory tracking, and billing with role-based access control.',
    tech: ['Java', 'JSP', 'MySQL'],
    image: '/smartdine.png',
    live: '#',
    github: '#'
  },
  {
    id: 'knowledge360',
    title: 'Knowledge360.in',
    type: 'Client Project',
    description: 'Built a dynamic, responsive web platform for the client. Ensured strong performance and long-term maintainability.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/k360.png',
    live: 'https://knowledge360.in',
    github: '#'
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommendation System',
    type: 'Full Stack App / ML',
    description: 'Built a fast web app with FastAPI and JS. Integrated an ML recommendation engine using Scikit-learn and Pandas for TF-IDF cosine similarity based on genres and plots.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'JS'],
    image: '/movieR.png',
    live: 'https://movie-recommender-vert-nine.vercel.app',
    github: 'https://github.com/FaizanKhan8896/MovieRecommendationSystem'
  }
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // We go from 0% to a negative percentage to slide items left.
  // The exact percentage depends on the number of cards and window width,
  // but a simple approach is translating a percentage of the total track width.
  // Since the track contains the title + cards, we map to a rough -80% (needs tweaking based on layout).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh] bg-zinc-950/80 backdrop-blur-3xl border-t border-white/5">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background Marquee specific to projects */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-[0.02] pointer-events-none">
          <Marquee text="FEATURED WORK" speed={40} className="text-[20rem] font-heading font-bold" />
        </div>

        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-4 md:px-32 relative z-10 items-center">
          
          {/* Title Card */}
          <div className="w-[80vw] md:w-[40vw] shrink-0 flex flex-col justify-center">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6">Selected Work</h2>
            <h3 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-bold mb-8 text-white tracking-tighter leading-[0.85]">
              Featured<br />
              <span className="text-metallic">Projects.</span>
            </h3>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-sm">
              Keep scrolling to explore a curated selection of production-ready applications, creative experiments, and scalable systems.
            </p>
          </div>

          {/* Project Gallery Cards */}
          {projects.map((project) => (
            <div 
              key={project.id}
              className="w-[90vw] md:w-[60vw] lg:w-[50vw] shrink-0 flex flex-col gap-8 group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-white/5 border border-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-700" />
                
                {/* Overlay details */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-black/50 backdrop-blur-xl rounded-full text-xs text-zinc-200 font-medium border border-white/10 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight group-hover:text-metallic transition-colors duration-500">{project.title}</h3>
                </div>
                
                <p className="text-zinc-400 font-light text-lg leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-zinc-400 transition-colors">
                    <ExternalLink className="w-5 h-5" /> <span className="uppercase text-xs tracking-widest">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* End Spacer */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
