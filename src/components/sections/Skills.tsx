'use client';

import { motion } from 'framer-motion';
import { Sparkles, Server, Database, GitBranch } from 'lucide-react';
import Image from 'next/image';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGreensock, SiFramer, SiThreedotjs, SiWebgl,
  SiNodedotjs, SiExpress, SiGraphql, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiRedis,
  SiGithubactions, SiDocker, SiVercel, SiPython 
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaNetworkWired, FaAws } from 'react-icons/fa';

const techIcons: Record<string, any> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "GSAP": SiGreensock,
  "Framer Motion": SiFramer,
  "Three.js": SiThreedotjs,
  "WebGL": SiWebgl,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Java": FaJava,
  "Python": SiPython,
  "REST": FaNetworkWired,
  "GraphQL": SiGraphql,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Prisma": SiPrisma,
  "Redis": SiRedis,
  "Git": FaGitAlt,
  "GitHub Actions": SiGithubactions,
  "AWS": FaAws,
  "Docker": SiDocker,
  "Vercel": SiVercel
};
const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, highly interactive, and pixel-perfect user interfaces with modern frameworks.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js", "WebGL"],
    className: "md:col-span-2 md:row-span-2",
    icon: Sparkles,
    image: "/frontend_bg.png"
  },
  {
    title: "Backend & Systems",
    description: "Designing scalable architectures and robust RESTful APIs for complex applications.",
    skills: ["Node.js", "Express.js", "Java", "Python", "REST", "GraphQL"],
    className: "md:col-span-1 md:row-span-2",
    icon: Server,
    image: "/backend_bg.png"
  },
  {
    title: "Databases & Data",
    description: "Managing complex data structures and optimizing querying.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Redis"],
    className: "md:col-span-2 md:row-span-1",
    icon: Database,
    image: "/database_bg.png"
  },
  {
    title: "DevOps & Tools",
    description: "Ensuring smooth CI/CD and version control pipelines.",
    skills: ["Git", "GitHub Actions", "AWS", "Docker", "Vercel"],
    className: "md:col-span-1 md:row-span-1",
    icon: GitBranch,
    image: "/devops_bg.png"
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full min-h-screen py-24 md:py-32 bg-black/40 backdrop-blur-xl border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter">
              Arsenal.
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-400 max-w-md font-light leading-relaxed mb-2"
          >
            The underlying technologies that power these scalable, high-performance, and beautiful digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[2rem] bg-black/20 border border-white/5 p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:border-white/10 transition-all duration-700 ${category.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
              </div>
              
              <div className="relative z-10 mb-12">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 backdrop-blur-md">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight mb-4 group-hover:text-metallic transition-colors duration-500">
                  {category.title}
                </h4>
                <p className="text-zinc-300 font-light leading-relaxed max-w-md drop-shadow-md">
                  {category.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => {
                  const Icon = techIcons[skill];
                  return (
                    <span 
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 backdrop-blur-md shadow-sm hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-default group/skill"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
