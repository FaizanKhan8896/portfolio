'use client';

import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-12 px-4 bg-zinc-950 border-t border-white/5 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-2">
            FAIZAN KHAN
          </Link>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8 text-sm font-medium text-zinc-400">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>

          <span className="w-[1px] h-4 bg-white/10 hidden sm:block"></span>

          <a href="https://github.com/FaizanKhan8896" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/faizan-khan-772b782a5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
      
      {/* Huge text background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none opacity-5 select-none -z-10">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap">
          FAIZAN KHAN
        </span>
      </div>
    </footer>
  );
}
