import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, FileText } from 'lucide-react';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden border-b border-black/10 dark:border-white/10">
    <div className="section-shell relative z-10 flex min-h-screen items-center py-28 lg:py-32">
      <div className="w-full">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-8 text-xs font-bold uppercase tracking-[.24em] text-black/55 dark:text-white/55">Backend Engineer · AI/ML</motion.p>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.22,1,.36,1] }} className="max-w-6xl text-[clamp(4.2rem,12vw,11rem)] font-black uppercase leading-[.78] tracking-[-.085em]">
              Swaroop<br /><span className="text-coral">Kurapati</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .6 }} className="hidden pb-3 lg:block">
            <span className="block h-16 w-16 bg-teal" />
          </motion.div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 dark:border-white/10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-2xl text-base leading-7 text-black/60 dark:text-white/60 sm:text-lg">I build reliable backend systems, practical AI applications and digital products that are simple to use and solid under the hood.</p>
          <div className="flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href="#projects" className="btn-primary">View my work <ArrowRight size={17} /></motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href={resumeUrl} target="_blank" rel="noreferrer" className="btn-outline"><FileText size={17} /> Resume</motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="btn-outline"><Github size={17} /> GitHub</motion.a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.16em] text-black/35 dark:text-white/35">
          <span>Full-stack · AI · Engineering</span><span>Chennai / India</span>
        </div>
      </div>
    </div>
    <motion.a href="#about" animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/60 dark:text-white/60" aria-label="Scroll to about"><ArrowDown size={18} /></motion.a>
  </section>
);
export default Hero;
