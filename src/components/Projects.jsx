import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Activity, Lock } from 'lucide-react';
import ProjectModal from './ui/ProjectModal';

const projects = [
  { title: 'DreamScribe', type: 'GenAI · Web App', description: 'AI storytelling platform powered by Groq, with real-time generation.', fullDescription: 'An AI storytelling platform where prompts, genres and characters become immersive stories in real time.', challenge: 'Streaming AI output keeps the experience responsive while the model generates the narrative.', features: ['Groq API integration', 'Real-time text streaming', 'Custom story prompts'], tags: ['Python', 'Groq', 'GenAI'], github: 'https://github.com/Swaroop772/dreamscribe', demo: '#', accent: 'teal', icon: <Sparkles /> },
  { title: 'FitSync', type: 'Machine Learning', description: 'Fitness analytics and personalized insights using Random Forest models.', fullDescription: 'A fitness analytics application that turns activity data into personalized insights using machine learning.', challenge: 'A unified data flow normalizes activity inputs before sending them through the predictive model.', features: ['Random Forest model', 'Activity analysis', 'Progress visualization'], tags: ['Python', 'ML', 'Streamlit'], github: 'https://github.com/Swaroop772/Fitness-Tracker', demo: '#', accent: 'coral', icon: <Activity /> },
  { title: 'StegaSafe', type: 'Cybersecurity', description: 'Secure image steganography combining LSB techniques with encryption.', fullDescription: 'A security-focused tool for hiding sensitive information inside images while preserving visual quality.', challenge: 'LSB embedding and encryption work together to protect the hidden payload without visibly distorting the carrier image.', features: ['LSB steganography', 'AES encryption', 'Image integrity checks'], tags: ['OpenCV', 'Security', 'Python'], github: 'https://github.com/Swaroop772/stegnography', demo: '#', accent: 'teal', icon: <Lock /> },
];

const ProjectCard = ({ project, index, onOpen }) => {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-100, 100], [5, -5]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-100, 100], [-5, 5]), { stiffness: 250, damping: 25 });
  const move = e => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left - r.width / 2); my.set(e.clientY - r.top - r.height / 2); };
  const reset = () => { mx.set(0); my.set(0); };
  return <motion.article initial={{ opacity: 0, y: 40, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * .1, duration: .65, ease: [.22, 1, .36, 1] }} onMouseMove={move} onMouseLeave={reset} onClick={() => onOpen(project)} style={{ rotateX, rotateY, transformPerspective: 900 }} className="group cursor-pointer">
    <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="relative aspect-[1.25/1] overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-black/10">
      <motion.div className={`absolute inset-0 ${project.accent === 'coral' ? 'bg-coral/10' : 'bg-teal/10'}`} whileHover={{ scale: 1.12 }} transition={{ duration: .7 }} />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      <motion.div initial={{ rotate: -3, scale: .98 }} whileHover={{ rotate: 0, scale: 1.05, y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="absolute left-[10%] top-[15%] h-[52%] w-[80%] rounded-lg border border-white/10 bg-slate-950/90 p-3 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-2"><div className="flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-coral" /><i className="h-1.5 w-1.5 rounded-full bg-teal" /><i className="h-1.5 w-1.5 rounded-full bg-white/30" /></div><span className="font-mono text-[8px] text-slate-600">{project.title.toLowerCase()}</span></div>
        <div className="mt-4 grid grid-cols-5 gap-2"><motion.span className="col-span-3 h-5 rounded bg-teal/50" animate={{ opacity: [.45, .8, .45] }} transition={{ duration: 2, repeat: Infinity }} /><span className="col-span-2 h-5 rounded bg-coral/50" /><span className="col-span-2 h-16 rounded bg-white/10" /><span className="col-span-3 h-16 rounded bg-white/5" /></div>
      </motion.div>
      <motion.div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-teal" whileHover={{ rotate: 15, scale: 1.15 }}>{project.icon}</motion.div>
      <motion.div initial={{ x: 20, opacity: 0 }} whileHover={{ x: 0, opacity: 1 }} className="absolute bottom-6 right-6 rounded-full border border-teal/30 bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-widest text-teal backdrop-blur">View details</motion.div>
      <motion.a href={project.github} target="_blank" rel="noreferrer" data-cursor="view" aria-label={`Open ${project.title} on GitHub`} onClick={e => e.stopPropagation()} whileHover={{ scale: 1.12, rotate: -8 }} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink/80 text-slate-400 opacity-0 backdrop-blur group-hover:opacity-100 hover:text-teal"><Github size={15} /></motion.a>
    </motion.div>
    <div className="mt-5 flex items-start justify-between gap-4"><div><motion.p whileHover={{ x: 3 }} className="text-xs font-semibold uppercase tracking-[.14em] text-teal">{project.type}</motion.p><h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p></div><motion.span whileHover={{ x: 4, y: -4, rotate: 12, scale: 1.08 }} className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 group-hover:border-coral group-hover:text-coral"><ArrowUpRight size={16} /></motion.span></div>
    <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <motion.span key={tag} whileHover={{ y: -2, scale: 1.04 }} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-500">{tag}</motion.span>)}</div>
  </motion.article>;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return <section id="projects" className="relative overflow-hidden bg-surface py-28 sm:py-36">
    <div className="absolute inset-0 pattern-dots opacity-40" />
    <div className="section-shell relative z-10">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="section-kicker">Selected work</p><div className="mt-4 flex flex-col justify-between gap-7 md:flex-row md:items-end"><h2 className="section-heading">My recent <span>works</span></h2><p className="max-w-md text-sm leading-6 text-slate-500">A few projects where I explored product development, AI and security.</p></div></motion.div>
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={setSelectedProject} />)}</div>
    </div>
    <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
  </section>;
};
export default Projects;
