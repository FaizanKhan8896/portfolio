'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, Code, Briefcase, Mail, MapPin } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative z-10 w-full min-h-screen py-32 px-4 bg-transparent flex items-center justify-center overflow-hidden">
      {/* Localized glow for the contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Let's build <br/><span className="text-zinc-500">something great.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
            I'm currently available for freelance work and full-time roles. If you have a project that needs some creative magic, I'd love to hear about it.
          </p>

          <div className="flex flex-col gap-6">
            <a href="mailto:faizankhan.software@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-zinc-800/40 group-hover:border-zinc-500/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">faizankhan.software@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4 text-zinc-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg">Kanpur, India</span>
            </div>
            
            <div className="flex gap-4 mt-4">
              <MagneticButton>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors border border-white/10 hover:border-transparent">
                  <Briefcase className="w-5 h-5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="p-8 md:p-12 bg-zinc-950/80 border border-white/10 rounded-[2rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 relative z-10">
              
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-zinc-400 transition-colors peer"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-zinc-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Your Name
                </label>
                {errors.name && <span className="absolute -bottom-6 left-0 text-red-500 text-sm">{errors.name.message}</span>}
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  placeholder=" "
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-zinc-400 transition-colors peer"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-zinc-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Email Address
                </label>
                {errors.email && <span className="absolute -bottom-6 left-0 text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div className="relative group mt-4">
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder=" "
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-zinc-400 transition-colors peer resize-none"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-4 text-zinc-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-zinc-400"
                >
                  Project Details
                </label>
                {errors.message && <span className="absolute -bottom-6 left-0 text-red-500 text-sm">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-6 w-full py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 group"
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : (
                  <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
