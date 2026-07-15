'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, X } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    title: 'Official MSME Enterprise',
    description: 'Solxcel Solar Solutions Private Limited is proudly registered as a verified manufacturing enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.\n\nThis certification reinforces our commitment to national industrial growth, sustainable manufacturing practices, and trusted business operations.',
    image: '/certificates/a.png',
  },
  {
    id: 'cert-2',
    title: 'Professional Certification',
    description: 'Recognized for outstanding achievement and completion of advanced technical training. This certification validates expertise in modern web development architectures, cloud deployment strategies, and building scalable full-stack applications.\n\nDemonstrates a commitment to continuous learning and staying ahead of industry trends.',
    image: '/certificates/b.jpeg',
  },
  {
    id: 'cert-3',
    title: 'Achievement Award',
    description: 'Awarded for exceptional performance and dedication. This milestone highlights a consistent track record of delivering high-quality solutions, overcoming complex technical challenges, and contributing to the success of enterprise-level projects.\n\nA testament to hard work and engineering excellence.',
    image: '/certificates/c.jpeg',
  }
];

export function Certificates() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <section id="certificates" className="relative z-10 w-full py-32 px-4 bg-[#0a0f18] border-t border-white/5">
      {/* Subtle grid background to match the screenshot vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/5 border border-white/10">
              <Award className="w-8 h-8 text-zinc-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Certificates
          </h2>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            A showcase of my official registrations, certifications, and achievements.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Side */}
              <div 
                className="w-full lg:w-1/2 cursor-pointer group relative perspective-[1000px]"
                onClick={() => setSelectedId(cert.id)}
              >
                {/* Glass Box Container */}
                <div className={
                  "relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] max-h-[600px] w-full rounded-[2.5rem] p-4 md:p-8 transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2 " +
                  "bg-white/[0.03] backdrop-blur-2xl border border-white/10 " +
                  "shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_0_32px_rgba(255,255,255,0.05)] " +
                  "group-hover:border-white/30 group-hover:bg-white/[0.08] group-hover:shadow-[0_16px_64px_rgba(0,0,0,0.9),inset_0_0_32px_rgba(255,255,255,0.1)]"
                }>
                  {/* Glass Reflection / Glare */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none transition-opacity duration-700 group-hover:opacity-60" />
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />

                  {/* Image wrapper to give it a slight inset feel within the glass */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] bg-black/40">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[2.5rem] z-10 pointer-events-none">
                    <span className="text-white font-semibold tracking-wide bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {cert.title}
                </h3>
                <div className="flex flex-col gap-6 text-zinc-400 text-lg font-light leading-relaxed">
                  {cert.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(null);
              }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white z-50 border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Selected Image */}
            <motion.div
              layoutId={`cert-image-${selectedId}`} // Option to add layoutId if using shared layout animations
              className="relative w-full max-w-5xl h-[80vh] md:h-[90vh] bg-transparent flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={certificates.find(c => c.id === selectedId)?.image || ''}
                alt="Certificate Full Size"
                fill
                className="object-contain"
                quality={100}
                unoptimized // sometimes helps with crispness of large documents
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
