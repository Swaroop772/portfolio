import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Wrench, Layers, Cpu } from 'lucide-react';

const groups = [
  { title: 'Languages', icon: Code2, items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'Java'] },
  { title: 'Frameworks', icon: Layers, items: ['React', 'Node.js', 'NestJS', 'FastAPI', 'Streamlit', 'REST APIs', 'LangChain'] },
  { title: 'AI / ML', icon: Brain, items: ['Machine Learning', 'LLMs', 'NLP', 'GenAI', 'Model Deployment', 'Predictive Analytics', 'Prompt Engineering'] },
  { title: 'Tools', icon: Wrench, items: ['Git & GitHub', 'Docker', 'MySQL', 'Linux', 'Postman', 'Figma', 'GitHub Pages'] },
  { title: 'Core', icon: Cpu, items: ['Data Structures', 'Algorithms', 'API Development', 'Cloud Computing', 'UI/UX', 'Accessibility', 'Problem Solving'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">02 — Skills</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
            <h2 className="section-heading">Tools I use to<br /><span>turn ideas into products.</span></h2>
            <p className="text-sm leading-6 text-slate-500">A practical toolkit spanning web development, backend engineering, AI/ML and the tools that help me ship.</p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ title, icon: Icon, items }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="group bg-ink p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-teal" />
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => <span key={item} className="border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition-colors group-hover:border-teal/30 group-hover:text-slate-300">{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
