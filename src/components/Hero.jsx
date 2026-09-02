import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github } from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative min-h-[92vh] overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 pattern-dots opacity-30" />
    <div className="absolute left-[7%] top-[22%] h-44 w-44 rounded-full bg-teal/10 blur-3xl" />
    <div className="absolute right-[9%] bottom-[12%] h-48 w-48 rounded-full bg-coral/10 blur-3xl" />

    <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.25em] text-teal">Hello, I'm</p>
          <h1 className="display-title max-w-3xl text-6xl font-black uppercase leading-[.9] tracking-[-.055em] sm:text-7xl lg:text-[6.8rem]">
            Swaroop<br />
            <span className="text-teal">Kurapati</span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-coral" />
            <p className="text-sm font-medium uppercase tracking-[.2em] text-slate-300">Software Engineer · AI/ML</p>
          </div>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I build useful digital products, reliable backend systems and practical AI experiences with a strong focus on clean engineering.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View my work <ArrowRight size={17} /></a>
            <a href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="btn-outline"><Github size={17} /> GitHub</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-full bg-teal/10 blur-3xl" />
          <div className="illustration-card relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface">
            <div className="absolute inset-0 pattern-dots opacity-50" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/20" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/20" />
            <div className="absolute bottom-14 left-1/2 h-2 w-48 -translate-x-1/2 rounded-full bg-teal" />
            <div className="absolute bottom-16 left-1/2 h-20 w-2 -translate-x-1/2 rotate-[28deg] origin-bottom bg-white/90" />
            <div className="absolute bottom-28 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-[2rem] rounded-b-xl bg-coral" />
            <div className="absolute bottom-48 left-[48%] h-12 w-12 -translate-x-1/2 rounded-full bg-teal" />
            <div className="absolute bottom-24 left-[41%] h-3 w-20 rotate-[-22deg] rounded-full bg-white/90" />
            <span className="absolute right-12 top-12 font-mono text-xs text-teal">&lt;code /&gt;</span>
            <span className="absolute bottom-12 left-10 font-mono text-xs text-coral">01 / 05</span>
          </div>
        </motion.div>
      </div>
    </div>
    <motion.a href="#about" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500" aria-label="Scroll to about"><ArrowDown size={18} /></motion.a>
  </section>
);

export default Hero;
