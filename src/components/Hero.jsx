import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-accent font-semibold tracking-wide uppercase mb-2">Logic Architect</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Swaroop Kurapati</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                        Passionate Computer Science student with a drive for innovation and collaborative development.
                        I thrive in hackathon environments, bringing enthusiasm to team-based problem-solving.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 w-full sm:w-auto"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-slate-600 hover:border-accent text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Contact Me <Mail size={20} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="/resume.pdf"
                                download="Swaroop_Resume.pdf"
                                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Download CV <Download size={20} />
                            </a>
                        </MagneticButton>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative bg-slate-800 border-2 border-slate-700 rounded-2xl p-2 w-full h-full flex items-center justify-center overflow-hidden shadow-2xl"
                        >
                            {/* Placeholder for profile image or 3D element */}
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">👨‍💻</div>
                                <p className="text-gray-400 font-mono text-sm">
                                    class LogicArchitect:<br />
                                    &nbsp;&nbsp;def __init__(self):<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;self.passion = "Innovation"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;self.skills = ["AI", "ML"]
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
