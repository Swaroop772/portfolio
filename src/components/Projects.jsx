import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ProjectModal from './ui/ProjectModal';

const projects = [
  { title: 'DreamScribe', type: 'GenAI · Web App', description: 'AI storytelling platform powered by Groq, with real-time generation.', tags: ['Python', 'Groq', 'GenAI'], github: 'https://github.com/Swaroop772/dreamscribe', accent: 'teal' },
  { title: 'FitSync', type: 'Machine Learning', description: 'Fitness analytics and personalized insights using Random Forest models.', tags: ['Python', 'ML', 'Streamlit'], github: 'https://github.com/Swaroop772/Fitness-Tracker', accent: 'coral' },
  { title: 'StegaSafe', type: 'Cybersecurity', description: 'Secure image steganography combining LSB techniques with encryption.', tags: ['OpenCV', 'Security', 'Python'], github: 'https://github.com/Swaroop772/stegnography', accent: 'teal' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="relative overflow-hidden bg-surface py-28 sm:py-36">
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">02 — Selected work</p>
            <h2 className="section-heading mt-4">My recent <span>works</span></h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">A few projects where I explored product development, AI and security.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
              <div className="project-art relative aspect-[1.25/1] overflow-hidden rounded-2xl border border-white/10 bg-ink">
                <div className={`absolute inset-0 ${project.accent === 'coral' ? 'bg-coral/10' : 'bg-teal/10'}`} />
                <div className="absolute left-[12%] top-[18%] h-[48%] w-[76%] -rotate-3 rounded-lg border border-white/10 bg-slate-950/80 p-3 shadow-2xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
                  <div className="flex gap-1 border-b border-white/10 pb-2"><i /><i /><i /></div>
                  <div className="mt-4 grid grid-cols-5 gap-2"><span className="col-span-3 h-5 rounded bg-teal/50" /><span className="col-span-2 h-5 rounded bg-coral/50" /><span className="col-span-2 h-16 rounded bg-white/10" /><span className="col-span-3 h-16 rounded bg-white/5" /></div>
                </div>
                <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[.2em] text-slate-500">PROJECT_{String(index + 1).padStart(2, '0')}</div>
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink/70 text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:text-teal"><Github size={15} /></a>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div><p className="text-xs font-semibold uppercase tracking-[.14em] text-teal">{project.type}</p><h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p></div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all group-hover:border-coral group-hover:text-coral"><ArrowUpRight size={16} /></span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-500">{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
export default Projects;
