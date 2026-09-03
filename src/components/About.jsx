import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Database, BrainCircuit } from 'lucide-react';

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

const capabilities = [
  { title: 'Full-stack', text: 'React, Node.js, NestJS, TypeScript and REST APIs', icon: Code2 },
  { title: 'AI / ML', text: 'Python, machine learning, LLMs and GenAI applications', icon: BrainCircuit },
  { title: 'Engineering', text: 'SQL, Docker, Git, testing, debugging and scalable systems', icon: Database },
];

const About = () => (
  <section id="about" className="relative overflow-hidden border-b border-black/10 py-28 dark:border-white/10 sm:py-40">
    <div className="section-shell">
      <div className="grid items-end gap-12 lg:grid-cols-[.55fr_1.45fr]">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}>
          <p className="section-kicker">What I bring</p>
          <div className="mt-6 max-w-xs">
            <p className="font-mono text-[11px] uppercase leading-6 tracking-[.16em] text-black/40 dark:text-white/40">From interface to infrastructure</p>
            <div className="mt-8 h-px w-24 bg-black/20 dark:bg-white/20" />
            <p className="mt-8 text-sm leading-7 text-black/50 dark:text-white/50">I like understanding the whole system, then making the smallest useful piece of it better.</p>
          </div>
        </motion.div>

        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: .1 }} className="max-w-5xl">
          <h2 className="section-heading">Build with purpose.<br /><span>Keep it solid.</span></h2>
          <p className="mt-10 max-w-4xl text-xl leading-9 text-black/70 dark:text-white/70 sm:text-2xl">I care about the layer underneath the interface: clear APIs, sensible data flow, dependable services and products that stay understandable as they grow.</p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-black/45 dark:text-white/45">My work sits across backend engineering, AI/ML and product development, which means I can move between implementation details and the bigger system without losing sight of the user.</p>
          <motion.a whileHover={{ x: 6 }} href="#projects" className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-teal">See what I build <ArrowUpRight size={16} /></motion.a>
        </motion.div>
      </div>

      <div className="mt-28 grid border-y border-black/15 dark:border-white/15 md:grid-cols-3">
        {capabilities.map(({ title, text, icon: Icon }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="group border-b border-black/15 p-7 dark:border-white/15 md:border-b-0 md:border-r last:border-r-0 sm:p-9">
            <div className="flex items-center justify-between">
              <Icon size={20} className="text-black/45 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:text-white/45" />
              <span className="font-mono text-[9px] uppercase tracking-[.18em] text-black/25 dark:text-white/25">Focus</span>
            </div>
            <h3 className="mt-7 text-2xl font-black tracking-[-.04em]">{title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/45 dark:text-white/45">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
