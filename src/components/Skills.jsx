import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Wrench, Layers } from 'lucide-react';

const groups = [
  { title: 'Backend', icon: Layers, description: 'APIs, services and application architecture', items: ['NestJS', 'Node.js', 'FastAPI', 'REST APIs', 'Python', 'SQL'] },
  { title: 'AI / ML', icon: Brain, description: 'Models and practical AI-powered applications', items: ['Machine Learning', 'LLMs', 'NLP', 'GenAI', 'LangChain', 'Streamlit'] },
  { title: 'Frontend', icon: Code2, description: 'Responsive interfaces and product experiences', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Figma'] },
  { title: 'Engineering', icon: Wrench, description: 'Tools and fundamentals I use to ship', items: ['Git & GitHub', 'Docker', 'MySQL', 'Linux', 'Data Structures', 'Algorithms'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
          <p className="section-kicker">Skills</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
            <h2 className="section-heading">A practical toolkit for<br /><span>building and shipping.</span></h2>
            <p className="text-sm leading-6 text-slate-500">The technologies I use most across backend engineering, AI/ML, frontend development and everyday software engineering.</p>
          </div>
        </motion.div>
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {groups.map(({ title, icon: Icon, description, items }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1, duration: .55 }} whileHover={{ y: -4 }} className="group bg-ink p-7 transition-colors hover:bg-surface sm:p-8">
              <div className="flex items-start justify-between gap-4"><div className="flex items-center gap-3"><motion.div whileHover={{ rotate: 10, scale: 1.12 }}><Icon size={18} className="text-teal" /></motion.div><h3 className="text-lg font-bold text-white">{title}</h3></div><span className="font-mono text-[10px] text-slate-700">0{index + 1}</span></div>
              <p className="mt-3 max-w-sm text-xs leading-5 text-slate-600">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{items.map((item, itemIndex) => <motion.span key={item} initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 + itemIndex * .035, duration: .3 }} whileHover={{ y: -3, scale: 1.04 }} className="cursor-default border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-teal/50 hover:text-teal">{item}</motion.span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
