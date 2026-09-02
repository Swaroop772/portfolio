import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Activity, Lock } from 'lucide-react';
import ProjectModal from './ui/ProjectModal';

const projects = [
  { title: 'DreamScribe', type: 'GenAI · Web App', description: 'AI storytelling platform powered by Groq, with real-time generation.', fullDescription: 'An AI storytelling platform where prompts, genres and characters become immersive stories in real time.', challenge: 'Streaming AI output keeps the experience responsive while the model generates the narrative.', features: ['Groq API integration', 'Real-time text streaming', 'Custom story prompts'], tags: ['Python', 'Groq', 'GenAI'], github: 'https://github.com/Swaroop772/dreamscribe', demo: '#', accent: 'violet', icon: <Sparkles /> },
  { title: 'FitSync', type: 'Machine Learning', description: 'Fitness analytics and personalized insights using Random Forest models.', fullDescription: 'A fitness analytics application that turns activity data into personalized insights using machine learning.', challenge: 'A unified data flow normalizes activity inputs before sending them through the predictive model.', features: ['Random Forest model', 'Activity analysis', 'Progress visualization'], tags: ['Python', 'ML', 'Streamlit'], github: 'https://github.com/Swaroop772/Fitness-Tracker', demo: '#', accent: 'coral', icon: <Activity /> },
  { title: 'StegaSafe', type: 'Cybersecurity', description: 'Secure image steganography combining LSB techniques with encryption.', fullDescription: 'A security-focused tool for hiding sensitive information inside images while preserving visual quality.', challenge: 'LSB embedding and encryption work together to protect the hidden payload without visibly distorting the carrier image.', features: ['LSB steganography', 'AES encryption', 'Image integrity checks'], tags: ['OpenCV', 'Security', 'Python'], github: 'https://github.com/Swaroop772/stegnography', demo: '#', accent: 'teal', icon: <Lock /> },
];

const palette = { teal: { bg: '#006f68', light: '#d9eeea' }, coral: { bg: '#ff5b4d', light: '#ffe0db' }, violet: { bg: '#7357d9', light: '#e8e2ff' } };

const ProjectCard = ({ project, index, onOpen }) => {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-120, 120], [3, -3]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-120, 120], [-3, 3]), { stiffness: 250, damping: 25 });
  const move = e => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left - r.width / 2); my.set(e.clientY - r.top - r.height / 2); };
  const reset = () => { mx.set(0); my.set(0); };
  const color = palette[project.accent];

  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * .1, duration: .65 }} onMouseMove={move} onMouseLeave={reset} onClick={() => onOpen(project)} style={{ rotateX, rotateY, transformPerspective: 1000 }} className="group cursor-pointer">
      <motion.div whileHover={{ y: -8 }} className="relative aspect-[1.15/1] overflow-hidden" style={{ backgroundColor: color.bg }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        <motion.div whileHover={{ scale: 1.06, rotate: -2 }} className="absolute left-[9%] top-[12%] h-[66%] w-[82%] overflow-hidden bg-paper p-4 shadow-2xl dark:bg-[#f5f2ec]">
          <div className="flex items-center justify-between border-b border-black/10 pb-3"><div className="flex gap-1.5"><i /><i /><i /></div><span className="font-mono text-[8px] uppercase text-black/40">{project.title}</span></div>
          <div className="mt-5 grid grid-cols-5 gap-2"><span className="col-span-3 h-6" style={{ backgroundColor: color.bg }} /><span className="col-span-2 h-6 bg-black/10" /><span className="col-span-2 h-20 bg-black/10" /><span className="col-span-3 h-20" style={{ backgroundColor: color.light }} /></div>
          <div className="mt-4 h-2 w-1/2 bg-black/10" />
        </motion.div>
        <div className="absolute bottom-6 left-6 text-white"><p className="text-2xl font-black uppercase tracking-[-.04em]">{project.title}</p></div>
        <motion.div initial={{ opacity: 0, x: 12 }} whileHover={{ opacity: 1, x: 0 }} className="absolute bottom-6 right-6 rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">View project</motion.div>
        <motion.a href={project.github} target="_blank" rel="noreferrer" data-cursor="view" aria-label={`Open ${project.title} on GitHub`} onClick={e => e.stopPropagation()} whileHover={{ scale: 1.12, rotate: -8 }} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white opacity-0 transition-opacity group-hover:opacity-100"><Github size={15} /></motion.a>
      </motion.div>
      <div className="mt-5 flex items-start justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[.18em]" style={{ color: color.bg }}>{project.type}</p><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-black/50 dark:text-white/50">{project.description}</p></div><motion.span whileHover={{ x: 4, y: -4, rotate: 12 }} className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 dark:border-white/15"><ArrowUpRight size={17} /></motion.span></div>
      <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-black/15 px-3 py-1 text-[10px] font-semibold text-black/55 dark:border-white/15 dark:text-white/55">{tag}</span>)}</div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="relative overflow-hidden bg-[#ebe7df] py-28 dark:bg-[#181818] sm:py-36">
      <div className="section-shell relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">Selected work</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="section-heading">Things I've<br /><span>built.</span></h2><p className="max-w-md text-sm leading-6 text-black/50 dark:text-white/50">A small selection of projects across GenAI, machine learning and cybersecurity.</p></div>
        </motion.div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={setSelectedProject} />)}</div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
