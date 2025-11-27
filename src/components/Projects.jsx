import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Activity, Lock } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const Projects = () => {
    const projects = [
        {
            title: "DreamScribe",
            description: "A super cool tool that uses Python and the Groq API to generate unique stories in under 10 seconds. It's like having a magic storyteller at your fingertips!",
            tags: ["Python", "Groq API", "AI", "Storytelling"],
            icon: <BookOpen size={40} className="text-blue-400" />,
            github: "https://github.com/Swaroop772/dreamscribe",
            demo: "#"
        },
        {
            title: "FitSync",
            description: "With this tool, you can track your fitness data using Random Forests. It predicts your health metrics and gives you personalized insights to help you stay on track.",
            tags: ["Random Forest", "Python", "Health", "Data Science"],
            icon: <Activity size={40} className="text-green-400" />,
            github: "https://github.com/Swaroop772/Fitness-Tracker",
            demo: "#"
        },
        {
            title: "StegaSafe",
            description: "This Python-based tool uses steganography to hide data in images. It has a passcode protection and real-time encryption/decryption using OpenCV, NumPy, and Streamlit.",
            tags: ["Python", "OpenCV", "NumPy", "Streamlit", "Security"],
            icon: <Lock size={40} className="text-purple-400" />,
            github: "https://github.com/Swaroop772/stegnography",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="rounded-xl h-full flex flex-col">
                                <div className="p-6 flex-grow">
                                    <div className="mb-6 p-4 bg-slate-900/50 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 line-clamp-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-700 text-blue-300 text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700 flex justify-between items-center mt-auto">
                                    <a href={project.github} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors hover:underline">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.demo} className="text-accent hover:text-accent-hover flex items-center gap-2 text-sm font-medium transition-colors hover:underline">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
