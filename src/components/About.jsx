import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About = () => (
  <section id="about" className="relative overflow-hidden py-28 sm:py-36">
    <div className="section-shell">
      <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">01 — About me</p>
          <h2 className="section-heading mt-4">A developer who<br /><span>likes to build.</span></h2>
          <div className="mt-8 h-1 w-14 bg-coral" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <p className="text-lg leading-8 text-slate-300">
            I'm a Computer Science engineer interested in full-stack development, backend engineering and AI/ML. I enjoy turning ideas into products that are simple to use and solid under the hood.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-500">
            From REST APIs and databases to machine-learning experiments, I like working across the stack and learning whatever a project needs.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-teal transition-colors hover:text-white">More about me <ArrowUpRight size={16} /></a>
        </motion.div>
      </div>

      <div className="mt-24 grid gap-5 md:grid-cols-3">
        {[
          ['01', 'Full-stack', 'React, Node.js, NestJS and REST APIs'],
          ['02', 'AI / ML', 'Python, machine learning and GenAI'],
          ['03', 'Engineering', 'Clean code, problem solving and scalable systems'],
        ].map(([num, title, text]) => (
          <motion.div key={num} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-white/10 pt-5">
            <span className="font-mono text-xs text-coral">{num}</span>
            <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
