import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code, ArrowUpRight } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return undefined;
        const handleKeyDown = event => {
            if (event.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const accent = project.accent === 'coral' ? 'text-coral' : 'text-teal';
    const accentBorder = project.accent === 'coral' ? 'border-coral/30' : 'border-teal/30';
    const accentBg = project.accent === 'coral' ? 'bg-coral/10' : 'bg-teal/10';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/75 backdrop-blur-md" aria-label="Close project details" />
                    <motion.div initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} transition={{ type: 'spring', stiffness: 260, damping: 25 }} className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-2xl shadow-black/40">
                        <button onClick={onClose} className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 backdrop-blur transition-colors hover:border-teal/40 hover:text-white" aria-label="Close project details"><X size={18} /></button>

                        <div className={`relative min-h-52 overflow-hidden border-b border-white/10 p-7 sm:min-h-64 sm:p-10 ${accentBg}`}>
                            <div className="absolute inset-0 pattern-dots opacity-30" />
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className={`absolute -right-16 -top-20 h-64 w-64 rounded-full border ${accentBorder}`} />
                            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="relative max-w-2xl">
                                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${accentBorder} bg-black/20 ${accent}`}>{React.cloneElement(project.icon, { size: 22 })}</div>
                                <p className={`text-xs font-semibold uppercase tracking-[.2em] ${accent}`}>{project.type}</p>
                                <h2 id="project-modal-title" className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">{project.title}</h2>
                            </motion.div>
                        </div>

                        <div className="custom-scrollbar overflow-y-auto">
                            <div className="space-y-8 p-7 sm:p-10">
                                <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">{tag}</span>)}</div>
                                    <div className="flex shrink-0 gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"><Github size={16} /> GitHub</a>
                                        {project.demo && project.demo !== '#' && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-teal/40 hover:text-teal"><ExternalLink size={16} /> Live demo</a>}
                                    </div>
                                </div>

                                <div className="grid gap-10 md:grid-cols-[1.35fr_.65fr]">
                                    <div className="space-y-8">
                                        <div><p className={`text-xs font-semibold uppercase tracking-[.2em] ${accent}`}>Overview</p><p className="mt-3 text-base leading-7 text-slate-300">{project.fullDescription || project.description}</p></div>
                                        <div className="border-l-2 border-coral/40 pl-5"><p className="text-xs font-semibold uppercase tracking-[.2em] text-coral">Challenge & solution</p><p className="mt-3 text-sm leading-6 text-slate-500">{project.challenge}</p></div>
                                    </div>
                                    <div><div className="flex items-center gap-2"><Code size={17} className={accent} /><p className="text-xs font-semibold uppercase tracking-[.2em] text-white">Key features</p></div><ul className="mt-5 space-y-4">{(project.features || []).map(feature => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-400"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${project.accent === 'coral' ? 'bg-coral' : 'bg-teal'}`} />{feature}</li>)}</ul></div>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[.16em] text-slate-600"><span>Built with {project.tags.slice(0, 2).join(' · ')}</span><a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-teal">View source <ArrowUpRight size={13} /></a></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
