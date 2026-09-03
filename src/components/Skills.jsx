import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Wrench, Layers } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const groups = [
  { title: 'Full-stack', icon: Layers, image: `${baseUrl}skills/backend.svg`, description: 'End-to-end web applications, APIs and application architecture', items: ['React', 'Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'API Integration', 'Authentication', 'Responsive UI'] },
  { title: 'AI / ML', icon: Brain, image: `${baseUrl}skills/ai-ml.svg`, description: 'Machine learning and practical AI-powered applications', items: ['Python', 'Machine Learning', 'LLMs', 'NLP', 'GenAI', 'LangChain', 'Model Evaluation', 'Streamlit'] },
  { title: 'Engineering', icon: Wrench, image: `${baseUrl}skills/engineering.svg`, description: 'Reliable software development, data and delivery practices', items: ['Clean Code', 'Problem Solving', 'System Design', 'SQL', 'MySQL', 'Git & GitHub', 'Docker', 'Linux'] },
  { title: 'Frontend', icon: Code2, image: `${baseUrl}skills/frontend.svg`, description: 'Responsive interfaces and polished digital experiences', items: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Figma', 'Flexbox', 'CSS Grid', 'Accessibility'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
          <p className="section-kicker">Skills</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_.75fr] md:items-end">
            <h2 className="section-heading">A practical toolkit for<br /><span>building and shipping.</span></h2>
            <p className="text-sm leading-6 text-black/50 dark:text-white/50">The technologies and engineering practices I use across full-stack development, AI/ML, frontend work and software engineering.</p>
          </div>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {groups.map(({ title, icon: Icon, image, description, items }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1, duration: .55 }} whileHover={{ y: -6 }} className="group overflow-hidden border border-black/10 bg-paper dark:border-white/10 dark:bg-night">
              <div className="relative h-44 overflow-hidden sm:h-52">
                <motion.img src={image} alt="" aria-hidden="true" whileHover={{ scale: 1.05 }} transition={{ duration: .6 }} className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white"><Icon size={18} /><span className="text-xs font-bold uppercase tracking-[.18em]">{title}</span></div>
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-sm leading-6 text-black/50 dark:text-white/50">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{items.map((item, itemIndex) => <motion.span key={item} initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 + itemIndex * .035, duration: .3 }} whileHover={{ y: -3, scale: 1.04 }} className="cursor-default border border-black/12 px-3 py-1.5 text-xs text-black/60 transition-colors hover:border-teal/50 hover:text-teal dark:border-white/10 dark:text-white/55">{item}</motion.span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
