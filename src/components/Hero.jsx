import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Github, Mail, Sparkles } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px] dark:bg-neon-blue/15" />
                <div className="absolute right-[5%] top-[28%] h-96 w-96 rounded-full bg-violet-500/10 blur-[130px] dark:bg-neon-purple/15" />
                <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:72px_72px] dark:opacity-[0.18] dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        OPEN TO OPPORTUNITIES
                    </motion.div>

                    <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.28em] text-cyan-600 dark:text-neon-blue">
                        &lt; software engineer /&gt;
                    </p>

                    <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-8xl dark:text-white">
                        Building useful
                        <span className="mt-2 block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-neon-blue dark:via-blue-400 dark:to-neon-purple">
                            things with code.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400">
                        I'm <span className="font-semibold text-slate-900 dark:text-white">Swaroop Kurapati</span>, a software engineer focused on building clean web applications, reliable APIs, and practical AI-powered experiences.
                    </p>

                    <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                        <MagneticButton>
                            <a href="#projects" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl dark:bg-white dark:text-slate-950 sm:w-auto">
                                Explore my work
                                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.07] sm:w-auto">
                                <Mail size={17} />
                                Let's talk
                            </a>
                        </MagneticButton>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
                        <a href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
                            <Github size={17} /> GitHub
                        </a>
                        <span className="h-4 w-px bg-slate-200 dark:bg-white/10" />
                        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Swaroop_Resume.pdf" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
                            <Download size={17} /> Download CV
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative mx-auto w-full max-w-[520px]"
                >
                    <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-2xl dark:from-neon-blue/10 dark:to-neon-purple/10" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_25px_100px_rgba(0,0,0,0.35)]">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400">SWAROOP.DEV</span>
                        </div>

                        <div className="grid gap-4 py-5 sm:grid-cols-[1fr_1.25fr]">
                            <div className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-white/[0.05]">
                                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
                                    <Sparkles size={23} />
                                </div>
                                <p className="font-mono text-xs text-slate-400">CURRENT_FOCUS</p>
                                <p className="mt-2 text-xl font-semibold leading-tight">Full-stack products & AI</p>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.035]">
                                    <div className="mb-3 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                                        <span>Frontend</span><span className="text-cyan-600 dark:text-neon-blue">React</span>
                                    </div>
                                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1.2, delay: 0.7 }} className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.035]">
                                    <div className="mb-3 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                                        <span>Backend</span><span className="text-violet-600 dark:text-neon-purple">APIs</span>
                                    </div>
                                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '82%' }} transition={{ duration: 1.2, delay: 0.9 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                            {['React', 'Node.js', 'AI/ML'].map((item) => (
                                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-slate-700 md:flex dark:hover:text-white"
                aria-label="Scroll to about section"
            >
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
                <ArrowDown size={16} />
            </motion.a>
        </section>
    );
};

export default Hero;
