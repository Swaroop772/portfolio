import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a  Computer Science student at Prathyusha Engineering College.
                            My ongoing technical learning journey fuels my commitment to creating meaningful, purpose-driven solutions that make a difference.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I have experience as an AI Intern and Cyber Security Intern, where I implemented Python-based AI algorithms and applied cybersecurity principles.
                            I am adept at machine learning models, threat analysis, and secure data transmission.
                        </p>
                    </motion.div>

                    {/* Credentials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="h-full"
                        >
                            <SpotlightCard className="rounded-xl p-8 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        <GraduationCap size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Education</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-slate-700">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                                        <h4 className="text-lg font-semibold text-white">Prathyusha Engineering College</h4>
                                        <p className="text-gray-400">Bachelors in Computer Science</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-sm text-slate-500">2022 - 2026</span>
                                            <span className="text-sm text-accent font-medium">CGPA: 8.5</span>
                                        </div>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-slate-700">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"></div>
                                        <h4 className="text-lg font-semibold text-white">Priyadarshini Junior College</h4>
                                        <p className="text-gray-400">Intermediate-MPC</p>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-sm text-slate-500">2020 - 2022</span>
                                            <span className="text-sm text-accent font-medium">Score: 911/1000</span>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="h-full"
                        >
                            <SpotlightCard className="rounded-xl p-8 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Briefcase size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Experience</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-2 border-slate-700">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                                        <h4 className="text-lg font-semibold text-white">AI Intern</h4>
                                        <p className="text-gray-400">Edunet Foundation</p>
                                        <p className="text-sm text-slate-500 mb-2">Feb 2025 - Mar 2025</p>
                                        <p className="text-sm text-gray-400">
                                            Worked on machine learning models and AI-driven solutions. Implemented Python-based algorithms to solve real-world problems.
                                        </p>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-slate-700">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"></div>
                                        <h4 className="text-lg font-semibold text-white">Cyber Security Intern</h4>
                                        <p className="text-gray-400">Edunet Foundation</p>
                                        <p className="text-sm text-slate-500 mb-2">Jan 2025 - Feb 2025</p>
                                        <p className="text-sm text-gray-400">
                                            Applied cybersecurity principles in threat analysis and network security. Conducted vulnerability assessments.
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
