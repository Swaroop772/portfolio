import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

const About = () => (
  <section id="about" className="relative overflow-hidden py-28 sm:py-36">
    <div className="section-shell">
      <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}>
          <p className="section-kicker">01 — About me</p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .12, duration: .7 }} className="section-heading mt-4">A developer who<br /><span>likes to build.</span></motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }} transition={{ delay: .35, duration: .7 }} className="mt-8 h-1 bg-coral" />
        </motion.div>

        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: .1 }} className="max-w-2xl">
          <p className="text-lg leading-8 text-slate-300">I'm a Computer Science engineer interested in full-stack development, backend engineering and AI/ML. I enjoy turning ideas into products that are simple to use and solid under the hood.</p>
          <p className="mt-5 text-base leading-7 text-slate-500">From REST APIs and databases to machine-learning experiments, I like working across the stack and learning whatever a project needs.</p>
          <motion.a whileHover={{ x: 6 }} href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-teal transition-colors hover:text-white">More about me <ArrowUpRight size={16} /></motion.a>
        </motion.div>
      </div>

      <div className="mt-24 grid gap-5 md:grid-cols-3">
        {[
          ['01', 'Full-stack', 'React, Node.js, NestJS and REST APIs'],
          ['02', 'AI / ML', 'Python, machine learning and GenAI'],
          ['03', 'Engineering', 'Clean code, problem solving and scalable systems'],
        ].map(([num, title, text], index) => (
          <motion.div key={num} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ delay: index * .12, duration: .6 }} whileHover={{ y: -7 }} className="group border-t border-white/10 pt-5 transition-colors hover:border-teal/50">
            <motion.span initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .2 + index * .12 }} className="font-mono text-xs text-coral">{num}</motion.span>
            <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-teal">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
