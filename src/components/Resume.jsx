import React from 'react';
import { Download, FileText, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

const Resume = () => {
    const highlights = [
        "Earned NPTEL Certificate in Python and cloud computing",
        "Built recognized projects showcasing innovation",
        "Excelled in hackathons and coding contests",
        "Led and mentored participants in Codeathon 3.0",
        "Received Best Student in 10th grade"
    ];

    return (
        <section id="resume" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neon-blue/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Resume & <span className="text-blue-500 dark:text-neon-blue">Achi</span>evements
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400">A glimpse into my professional journey.</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Highlights Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div className="bg-white/60 dark:bg-glass backdrop-blur-xl border border-slate-200 dark:border-glass-border rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Award size={150} className="text-slate-900 dark:text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 relative z-10">
                                <span className="p-2 bg-purple-100 dark:bg-neon-purple/20 rounded-lg text-purple-600 dark:text-neon-purple">
                                    <FileText size={24} />
                                </span>
                                Key Highlights
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-slate-600 dark:text-gray-300">
                                        <CheckCircle className="text-blue-500 dark:text-neon-blue flex-shrink-0 mt-1" size={18} />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                                <MagneticButton className="w-full">
                                    <a
                                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                                        download="Swaroop_Resume.pdf"
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple hover:from-blue-700 hover:to-purple-700 dark:hover:from-neon-blue/80 dark:hover:to-neon-purple/80 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,123,255,0.3)] dark:shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(188,19,254,0.5)]"
                                    >
                                        Download Full Resume <Download size={20} />
                                    </a>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>

                    {/* Resume Image Viewer */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-2/3 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-glass-border overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 mix-blend-overlay pointer-events-none z-10" />

                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-slate-900 z-0">
                            <p>Loading Resume...</p>
                        </div>
                        <img
                            src={`${import.meta.env.BASE_URL}resume.png`}
                            alt="Resume"
                            className="w-full h-auto relative z-0 transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        {/* Overlay for download */}
                        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100">
                            <MagneticButton>
                                <a
                                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                                    download="Swaroop_Resume.pdf"
                                    className="px-8 py-4 bg-white text-black font-bold rounded-xl shadow-2xl transform scale-110 flex items-center gap-2 hover:bg-neon-blue hover:text-white transition-colors"
                                >
                                    Download Now <Download size={20} />
                                </a>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
