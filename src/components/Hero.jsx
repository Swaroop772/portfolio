import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, FileText } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const profilePhoto = 'https://github.com/Swaroop772.png?size=640';

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden border-b border-black/10 dark:border-white/10">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(0,111,104,.10),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(255,91,77,.10),transparent_32%),radial-gradient(circle_at_55%_90%,rgba(115,87,217,.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_15%_40%,rgba(56,207,194,.08),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(255,118,103,.08),transparent_32%),radial-gradient(circle_at_55%_90%,rgba(163,139,240,.08),transparent_32%)]" />
    <div className="section-shell relative z-10 flex min-h-screen items-center py-28 lg:py-24">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(250px,340px)_1fr] lg:gap-16 xl:grid-cols-[360px_1fr] xl:gap-20">
        <motion.div initial={{ opacity: 0, x: -30, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .8, ease: [.22,1,.36,1] }} className="relative mx-auto w-full max-w-[340px] lg:mx-0">
          <div className="absolute -inset-3 rounded-[2rem] bg-teal/10 blur-2xl dark:bg-teal/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-black/10 bg-surface shadow-[0_28px_90px_rgba(21,21,21,.12)] dark:border-white/10 dark:bg-[#181818] dark:shadow-[0_28px_90px_rgba(0,0,0,.25)]">
            <img src={profilePhoto} alt="Portrait of Swaroop Kurapati" className="aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/60">Software engineer · AI / ML</p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <div><p className="text-2xl font-black tracking-[-.04em]">Swaroop</p><p className="text-sm text-white/65">Build. Learn. Improve.</p></div>
                <span className="h-3 w-3 rounded-full bg-[#4fd1c5] shadow-[0_0_18px_rgba(79,209,197,.8)]" />
              </div>
            </div>
          </div>
          <motion.span animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-4 -top-4 hidden h-16 w-16 bg-coral shadow-xl sm:block" aria-hidden="true" />
          <span className="absolute -bottom-5 -left-5 hidden h-14 w-14 border-2 border-teal/60 bg-transparent sm:block" aria-hidden="true" />
        </motion.div>

        <div className="max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-7 text-xs font-bold uppercase tracking-[.24em] text-black/45 dark:text-white/45">About me</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, ease: [.22,1,.36,1] }} className="max-w-6xl text-[clamp(3.7rem,8vw,8.3rem)] font-black leading-[.83] tracking-[-.085em]">
            A developer who<br /><span className="text-coral dark:text-[#ff7667]">likes to build.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }} className="mt-9 max-w-3xl text-lg leading-8 text-black/65 dark:text-white/65 sm:text-xl">
            I&apos;m a Computer Science engineer interested in full-stack development, backend engineering and AI/ML. I enjoy turning ideas into products that are simple to use and solid under the hood.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .27, duration: .65 }} className="mt-6 max-w-2xl text-sm leading-7 text-black/45 dark:text-white/45 sm:text-base">
            From REST APIs and databases to machine-learning experiments, I like working across the stack and learning whatever a project needs.
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3, x: 2 }} whileTap={{ scale: .97 }} href="#contact" className="btn-primary">Let&apos;s talk <ArrowRight size={16} /></motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href="#projects" className="btn-outline">View my work</motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href={resumeUrl} target="_blank" rel="noreferrer" className="btn-outline"><FileText size={16} /> Resume</motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="btn-outline"><Github size={16} /> GitHub</motion.a>
          </div>
          <div className="mt-12 grid max-w-3xl gap-4 border-t border-black/10 pt-5 font-mono text-[10px] uppercase tracking-[.16em] text-black/35 dark:border-white/10 dark:text-white/35 sm:grid-cols-3">
            <span>Full-stack</span><span>AI / ML</span><span>Backend systems</span>
          </div>
        </div>
      </div>
    </div>
    <motion.a href="#about" animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/55 dark:text-white/55" aria-label="Scroll to about"><ArrowDown size={18} /></motion.a>
  </section>
);

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
export default Hero;
