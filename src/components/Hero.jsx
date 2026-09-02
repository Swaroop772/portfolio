import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, FileText } from 'lucide-react';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden border-b border-black/10">
    <div className="absolute right-0 top-0 h-full w-[38%] bg-[#ff5b4d] hidden lg:block" />
    <div className="section-shell relative z-10 flex min-h-screen items-center py-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="mb-7 text-xs font-bold uppercase tracking-[.24em]">Backend Engineer · AI/ML</p>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ delay: .1, duration: .85, ease: [.22,1,.36,1] }} className="max-w-5xl text-[clamp(4.5rem,11vw,10.5rem)] font-black uppercase leading-[.78] tracking-[-.075em]">
              Swaroop<br /><span className="text-coral">Kurapati</span>
            </motion.h1>
          </div>
          <div className="mt-9 flex items-start gap-5">
            <span className="mt-2 h-12 w-1 shrink-0 bg-[#006f68]" />
            <p className="max-w-xl text-base leading-7 text-black/60 sm:text-lg">I build reliable backend systems, practical AI applications and digital products that are simple to use and solid under the hood.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} href="#projects" className="btn-primary">View my work <ArrowRight size={17} /></motion.a>
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} href={resumeUrl} target="_blank" rel="noreferrer" className="btn-outline"><FileText size={17} /> Resume</motion.a>
            <motion.a whileHover={{ y: -4 }} whileTap={{ scale: .97 }} href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="btn-outline"><Github size={17} /> GitHub</motion.a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .9, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .2 }} className="relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#151515] p-7 shadow-2xl">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[28px] border-[#7357d9]" />
            <div className="absolute bottom-8 left-8 h-24 w-24 bg-[#e7a52b]" />
            <div className="absolute right-8 top-1/2 h-32 w-3 -translate-y-1/2 rotate-12 bg-[#ff5b4d]" />
            <div className="absolute bottom-7 right-7 font-mono text-xs text-white/50">BUILD / SHIP / LEARN</div>
            <div className="absolute bottom-20 left-7 text-white"><p className="text-5xl font-black tracking-[-.06em]">CS</p><p className="mt-2 text-xs uppercase tracking-[.2em] text-white/50">Engineering + AI</p></div>
          </div>
        </motion.div>
      </div>
    </div>
    <motion.a href="#about" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-label="Scroll to about"><ArrowDown size={18} /></motion.a>
  </section>
);
export default Hero;
