'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { User, Code, Briefcase, Mail, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('About');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });



  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors hover:text-white',
                active === item.name ? 'text-white' : 'text-zinc-400'
              )}
            >
              {active === item.name && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="w-4 h-4 hidden sm:block" />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <a href="https://github.com/FaizanKhan8896" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl text-zinc-400 hover:text-white transition-colors text-sm font-medium">
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/faizan-khan-772b782a5" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl text-zinc-400 hover:text-white transition-colors text-sm font-medium">
          <LinkedinIcon className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.header>
  );
}
