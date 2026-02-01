import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple">About Me</span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Navigating the digital frontier with a fusion of <span className="text-blue-500 dark:text-neon-blue">code</span> and <span className="text-purple-500 dark:text-neon-purple">creativity</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/60 dark:bg-glass backdrop-blur-xl border border-slate-200 dark:border-glass-border rounded-3xl p-8 shadow-2xl relative group hover:border-blue-400 dark:hover:border-neon-blue/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Code size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                                <Award size={20} />
                            </span>
                            My Journey
                        </h3>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I am a Computer Science student at <span className="text-white font-medium">Prathyusha Engineering College</span>, fueled by an unyielding curiosity for the unknown.
                            </p>
                            <p>
                                My journey isn't just about writing code; it's about crafting <span className="text-neon-purple">intelligent systems</span> that solve complex problems. From exploring the depths of Machine Learning to securing networks against modern threats, I am constantly pushing the boundaries of what's possible.
                            </p>
                            <div className="flex gap-3 pt-4">
                                <span className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm">Innovator</span>
                                <span className="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm">Problem Solver</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline/Experience */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:translate-x-2 shadow-lg dark:shadow-none"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-neon-purple/20 rounded-lg text-purple-600 dark:text-neon-purple">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">AI Intern</h4>
                                        <p className="text-sm text-slate-600 dark:text-gray-400">Edunet Foundation</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-blue-600 dark:text-neon-blue border border-blue-200 dark:border-neon-blue/20 px-2 py-1 rounded bg-blue-50 dark:bg-transparent">July 2025 - Aug 2025</span>
                            </div>
                            <p className="text-slate-600 dark:text-gray-400 text-sm">
                                Gained hands-on experience in Artificial Intelligence, preparing for future roles in the field.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:translate-x-2 shadow-lg dark:shadow-none"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">B.E. Computer Science</h4>
                                        <p className="text-sm text-slate-600 dark:text-gray-400">Prathyusha Engineering College</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-blue-600 dark:text-neon-blue border border-blue-200 dark:border-neon-blue/20 px-2 py-1 rounded bg-blue-50 dark:bg-transparent">2022 - 2026</span>
                            </div>
                            <p className="text-slate-600 dark:text-gray-400 text-sm">
                                Studying Computer Science & Engineering.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:translate-x-2 shadow-lg dark:shadow-none"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Intermediate (MPC)</h4>
                                        <p className="text-sm text-slate-600 dark:text-gray-400">Priyadarshini Junior College</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-blue-600 dark:text-neon-blue border border-blue-200 dark:border-neon-blue/20 px-2 py-1 rounded bg-blue-50 dark:bg-transparent">Completed 2022</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:translate-x-2 shadow-lg dark:shadow-none"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Secondary School (SSC)</h4>
                                        <p className="text-sm text-slate-600 dark:text-gray-400">Pragathi EM High School</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-blue-600 dark:text-neon-blue border border-blue-200 dark:border-neon-blue/20 px-2 py-1 rounded bg-blue-50 dark:bg-transparent">Completed 2020</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
