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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/75 backdrop-blur-md" aria-label="Close project details" />
                    <motion.div initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .985 }} transition={{ type: 'spring', stiffness: 280, damping: 26 }} className="relative z-10 flex h-auto max-h-[calc(100dvh-2rem)] w-full max-w-3xl min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-ink shadow-2xl shadow-black/40 sm:max-h-[82dvh]">
                        <button onClick={onClose} className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-300 backdrop-blur transition-colors hover:border-teal/40 hover:text-white" aria-label="Close project details"><X size={17} /></button>
                        <div className={`relative min-h-40 shrink-0 overflow-hidden border-b border-white/10 p-6 sm:min-h-48 sm:p-8 ${accentBg}`}>
                            <div className="absolute inset-0 pattern-dots opacity-25" />
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className={`absolute -right-12 -top-14 h-48 w-48 rounded-full border ${accentBorder}`} />
                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="relative max-w-2xl">
                                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${accentBorder} bg-black/20 ${accent}`}>{React.cloneElement(project.icon, { size: 19 })}</div>
                                <p className={`text-[11px] font-semibold uppercase tracking-[.18em] ${accent}`}>{project.type}</p>
                                <h2 id="project-modal-title" className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">{project.title}</h2>
                            </motion.div>
                        </div>
                        <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
                            <div className="space-y-6 p-6 sm:space-y-7 sm:p-8">
                                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">{tag}</span>)}</div>
                                    <div className="flex shrink-0 gap-2.5">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-black transition-opacity hover:opacity-90"><Github size={14} /> GitHub</a>
                                        {project.demo && project.demo !== '#' && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:border-teal/40 hover:text-teal"><ExternalLink size={14} /> Live demo</a>}
                                    </div>
                                </div>
                                <div className="grid gap-8 md:grid-cols-[1.3fr_.7fr]">
                                    <div className="space-y-6">
                                        <div><p className={`text-[11px] font-semibold uppercase tracking-[.18em] ${accent}`}>Overview</p><p className="mt-2.5 text-sm leading-6 text-slate-300 sm:text-[15px]">{project.fullDescription || project.description}</p></div>
                                        <div className="border-l-2 border-coral/40 pl-4"><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-coral">Challenge & solution</p><p className="mt-2.5 text-sm leading-6 text-slate-500">{project.challenge}</p></div>
                                    </div>
                                    <div><div className="flex items-center gap-2"><Code size={15} className={accent} /><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white">Key features</p></div><ul className="mt-4 space-y-3">{(project.features || []).map(feature => <li key={feature} className="flex items-start gap-2.5 text-sm leading-5.5 text-slate-400"><span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${project.accent === 'coral' ? 'bg-coral' : 'bg-teal'}`} />{feature}</li>)}</ul></div>
                                </div>
                                <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.14em] text-slate-600"><span>Built with {project.tags.slice(0, 2).join(' · ')}</span><a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-teal">View source <ArrowUpRight size={12} /></a></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
