import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

const capabilities = [
  ['Full-stack', 'React, Node.js, NestJS and REST APIs'],
  ['AI / ML', 'Python, machine learning and GenAI'],
  ['Engineering', 'Clean code, problem solving and scalable systems'],
];

const About = () => (
  <section id="about" className="relative overflow-hidden border-b border-black/10 py-28 dark:border-white/10 sm:py-40">
    <div className="section-shell">
      <div className="grid items-start gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}>
          <p className="section-kicker">About me</p>
          <div className="mt-6 h-20 w-20 bg-teal" aria-hidden="true" />
        </motion.div>
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: .1 }} className="max-w-4xl">
          <h2 className="section-heading">A developer who<br /><span>likes to build.</span></h2>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-black/70 dark:text-white/70 sm:text-2xl">I'm a Computer Science engineer interested in full-stack development, backend engineering and AI/ML. I enjoy turning ideas into products that are simple to use and solid under the hood.</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/45 dark:text-white/45">From REST APIs and databases to machine-learning experiments, I like working across the stack and learning whatever a project needs.</p>
          <motion.a whileHover={{ x: 6 }} href="#contact" className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-teal">Let's talk <ArrowUpRight size={16} /></motion.a>
        </motion.div>
      </div>
      <div className="mt-28 grid border-y border-black/15 dark:border-white/15 md:grid-cols-3">
        {capabilities.map(([title, text], index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="border-b border-black/15 p-7 dark:border-white/15 md:border-b-0 md:border-r last:border-r-0 sm:p-9">
            <span className="font-mono text-[10px] text-black/35 dark:text-white/35">0{index + 1}</span>
            <h3 className="mt-12 text-2xl font-black tracking-[-.04em]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/45 dark:text-white/45">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
