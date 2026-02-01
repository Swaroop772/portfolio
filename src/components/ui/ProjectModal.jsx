import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white dark:bg-[#0a0a16] border border-slate-200 dark:border-glass-border w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative pointer-events-auto custom-scrollbar">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-white/10 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={20} className="text-slate-800 dark:text-white" />
                            </button>

                            {/* Header Image / Gradient */}
                            <div className={`h-48 md:h-64 w-full bg-gradient-to-br ${project.gradient || 'from-blue-600 to-purple-600'} relative overflow-hidden flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center p-6"
                                >
                                    <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-md mb-4 border border-white/20 shadow-xl">
                                        {React.cloneElement(project.icon, { size: 48, className: "text-white" })}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{project.title}</h2>
                                </motion.div>
                            </div>

                            <div className="p-8 md:p-10 space-y-8">

                                {/* Quick Stats / Links */}
                                <div className="flex flex-wrap gap-4 justify-between items-center border-b border-slate-200 dark:border-white/10 pb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-xs font-mono rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                                            <Github size={18} /> GitHub
                                        </a>
                                        {project.demo && project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Left Column: Description & Challenge */}
                                    <div className="md:col-span-2 space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                                Project Overview
                                            </h3>
                                            <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                                                {project.fullDescription || project.description}
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/5">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Key Challenge & Solution</h3>
                                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                                {project.challenge || "One of the detailed technical challenges for this project was optimizing the real-time data processing pipeline. By implementing efficient caching strategies and using a more robust state management solution, latency was reduced by 40%."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column: Key Features */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Code size={20} className="text-purple-500" />
                                            Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {(project.features || ["Real-time Data Analysis", "Responsive UI Design", "Secure Authentication", "Cloud Integration"]).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-gray-400 text-sm">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Placeholder for Gallery - Can be expanded later */}
                                {/* <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Interface Gallery</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="aspect-video bg-slate-200 dark:bg-white/5 rounded-xl animate-pulse"></div>
                                        <div className="aspect-video bg-slate-200 dark:bg-white/5 rounded-xl animate-pulse"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
