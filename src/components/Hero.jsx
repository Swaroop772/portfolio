import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, FileText } from 'lucide-react';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const Hero = () => (
  <section id="home" className="relative min-h-[92vh] overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 pattern-dots opacity-30" />
    <motion.div animate={{ x: [0, 35, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[5%] top-[18%] h-56 w-56 rounded-full bg-teal/15 blur-3xl" />
    <motion.div animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, .92, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[7%] bottom-[10%] h-60 w-60 rounded-full bg-violet-500/15 blur-3xl" />
    <motion.div animate={{ x: [0, 20, 0], y: [0, 30, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[38%] top-[8%] h-28 w-28 rounded-full bg-amber-300/10 blur-3xl" />
    <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }} className="mb-5 text-sm font-semibold uppercase tracking-[.25em] text-teal">Hello, I'm</motion.p>
          <div className="overflow-hidden"><motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: .18, duration: .8, ease: [.22, 1, .36, 1] }} className="display-title max-w-3xl text-6xl font-black uppercase leading-[.9] tracking-[-.055em] sm:text-7xl lg:text-[6.8rem]">Swaroop<br /><span className="bg-gradient-to-r from-teal via-blue-400 to-violet-400 bg-clip-text text-transparent">Kurapati</span></motion.h1></div>
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: .55, duration: .55 }} className="mt-8 flex origin-left items-center gap-4"><span className="h-px w-12 bg-gradient-to-r from-coral to-amber-300" /><p className="text-sm font-medium uppercase tracking-[.2em] text-slate-300">Backend Engineer · AI/ML</p></motion.div>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }} className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">I build reliable backend systems, practical AI applications and useful digital products with a strong focus on clean engineering.</motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75 }} className="mt-9 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .97 }} href="#projects" className="btn-primary">View my work <ArrowRight size={17} /></motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .97 }} href={resumeUrl} target="_blank" rel="noreferrer" className="btn-outline"><FileText size={17} /> Resume</motion.a>
            <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .97 }} href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="btn-outline"><Github size={17} /> GitHub</motion.a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35, scale: .94 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .9, delay: .2, ease: [.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-md">
          <motion.div animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-teal/15 via-violet-500/10 to-coral/15 blur-3xl" />
            <div className="illustration-card relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface shadow-2xl shadow-violet-950/20">
              <div className="absolute inset-0 pattern-dots opacity-50" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/30" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/30" />
              <motion.div animate={{ scaleX: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-14 left-1/2 h-2 w-48 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal via-blue-400 to-violet-400" />
              <div className="absolute bottom-16 left-1/2 h-20 w-2 -translate-x-1/2 rotate-[28deg] origin-bottom bg-white/90" /><div className="absolute bottom-28 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-[2rem] rounded-b-xl bg-gradient-to-br from-coral to-rose-500" /><motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-48 left-[48%] h-12 w-12 -translate-x-1/2 rounded-full bg-gradient-to-br from-teal to-blue-400" /><div className="absolute bottom-24 left-[41%] h-3 w-20 rotate-[-22deg] rounded-full bg-white/90" />
              <motion.div animate={{ y: [0, -7, 0], rotate: [0, 8, -3, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-10 top-12 h-7 w-7 rounded-lg bg-amber-300/90 shadow-lg shadow-amber-300/20" />
              <motion.div animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute right-10 top-28 h-5 w-5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/30" />
              <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="absolute right-12 top-12 font-mono text-xs text-teal">&lt;code /&gt;</motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <motion.a href="#about" animate={{ y: [0, 8, 0], opacity: [0.45, 1, .45] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500" aria-label="Scroll to about"><ArrowDown size={18} /></motion.a>
  </section>
);
export default Hero;
