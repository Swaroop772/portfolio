import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Laptop, Sparkles } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Spotlights */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 mb-6"
                    >
                        <Sparkles size={14} className="text-neon-blue" />
                        <span className="text-neon-blue text-sm font-medium tracking-wide">Logic Architect</span>
                    </motion.div>
                    <h2 className="text-sm md:text-base font-medium tracking-wider text-neon-blue uppercase mb-4 animate-pulse">
                        Logic Architect
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple blur opacity-30"></span>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple animate-gradient-text">
                                Swaroop Kurapati
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        I build <span className="text-slate-900 dark:text-white font-semibold">digital experiences</span> that blend aesthetic perfection with backend power.
                    </p>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed border-l-2 border-neon-purple/50 pl-4">
                        Passionate Computer Science student driving innovation through code.
                        <br />
                        I specialize in building <span className="text-white">AI-powered solutions</span> and modern web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="group relative px-8 py-3 bg-transparent text-white font-bold rounded-lg overflow-hidden transition-all duration-300 border border-neon-blue/50 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] w-full sm:w-auto flex justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 group-hover:opacity-40 transition-opacity" />
                                <span className="relative flex items-center gap-2">
                                    View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </MagneticButton>

                        <div className="flex gap-4 w-full sm:w-auto">
                            <MagneticButton>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 border border-slate-700 hover:border-white/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
                                >
                                    Contact <Mail size={18} />
                                </a>
                            </MagneticButton>
                            <MagneticButton>
                                <a
                                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                                    download="Swaroop_Resume.pdf"
                                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
                                >
                                    CV <Download size={18} />
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Tech Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-16 md:mt-0 flex justify-center perspective-1000"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Animated rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-neon-blue/20 border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-neon-purple/20 border-dotted"
                        />

                        {/* Floating Card */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-10 bg-glass/10 backdrop-blur-xl border border-glass-border rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl group hover:border-neon-blue/50 transition-colors"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <Laptop size={40} className="text-white" />
                            </div>

                            <div className="w-full space-y-3 font-mono text-sm max-w-[200px]">
                                <div className="flex justify-between text-gray-400">
                                    <span>intelligence</span>
                                    <span className="text-neon-blue">100%</span>
                                </div>
                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-full bg-neon-blue"
                                    />
                                </div>

                                <div className="flex justify-between text-gray-400">
                                    <span>creativity</span>
                                    <span className="text-neon-purple">∞</span>
                                </div>
                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1.2 }}
                                        className="h-full bg-neon-purple"
                                    />
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-8 top-10 bg-black/80 border border-neon-blue/50 px-3 py-1 rounded-lg text-xs text-neon-blue shadow-lg"
                            >
                                React.js
                            </motion.div>
                            <motion.div
                                animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="absolute -left-6 bottom-20 bg-black/80 border border-neon-purple/50 px-3 py-1 rounded-lg text-xs text-neon-purple shadow-lg"
                            >
                                Machine Learning
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neon-blue rounded-full animate-scroll" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
