import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Activity, Lock, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "DreamScribe",
            description: "AI-powered storytelling engine that generates unique narratives in seconds using Groq API.",
            fullDescription: "DreamScribe is an innovative storytelling platform that leverages the speed of the Groq API to generate immersive narratives in real-time. Users can input prompts, genre preferences, and character archetypes, and the system weaves them into a coherent story.",
            challenge: "Handling the latency of AI responses while maintaining user engagement was critical. I implemented a streaming response architecture that displays the story as it's being generated, creating a magical 'typing' effect.",
            features: ["Groq API Integration", "Real-time Text Streaming", "Customizable Story Arcs", "Save & Share Functionality"],
            tags: ["Python", "Groq API", "GenAI"],
            icon: <BookOpen />,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
            gradient: "from-blue-600 to-cyan-500",
            github: "https://github.com/Swaroop772/dreamscribe",
            demo: "#"
        },
        {
            title: "FitSync",
            description: "Health analytics platform utilizing Random Forest algorithms for personalized fitness insights.",
            fullDescription: "FitSync bridges the gap between raw health data and actionable advice. By analyzing user activity patterns using Machine Learning, it provides personalized workout plans and nutrition advice that adapts over time.",
            challenge: "Normalizing data from various fitness trackers was a major hurdle. I developed a unified data schema and ingestion pipeline that sanitizes and standardizes inputs before feeding them into the Random Forest model.",
            features: ["Random Forest Algorithms", "Activity Pattern Recognition", "Personalized Diet Plans", "Progress Visualization Dashboard"],
            tags: ["ML", "Data Science", "Python"],
            icon: <Activity />,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20",
            gradient: "from-green-500 to-emerald-600",
            github: "https://github.com/Swaroop772/Fitness-Tracker",
            demo: "#"
        },
        {
            title: "StegaSafe",
            description: "Advanced steganography tool with real-time encryption for secure data transmission within images.",
            fullDescription: "StegaSafe allows users to hide sensitive text messages or files inside innocent-looking images. It combines LSB (Least Significant Bit) steganography with AES-256 encryption for a double layer of security.",
            challenge: "Ensuring the carrier image didn't look distorted after data embedding was key. I adjusted the bit-replacement algorithm to only target the least perceptible color channels, preserving visual fidelity.",
            features: ["AES-256 Encryption", "LSB Steganography", "Image Integrity Check", "Zero-Knowledge Architecture"],
            tags: ["Cybersecurity", "OpenCV", "Streamlit"],
            icon: <Lock />,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20",
            gradient: "from-purple-600 to-indigo-600",
            github: "https://github.com/Swaroop772/stegnography",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            {/* Background glow */}
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple">Projects</span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical explorations and engineered solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-glass-border bg-white/60 dark:bg-glass backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${project.colSpan || ''}`}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 p-8"> {/* Added padding explicitly here since it was missing in previous render? Or just ensuring consistency */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl ${project.bg} ${project.color}`}>
                                        {React.cloneElement(project.icon, { size: 30 })}
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="p-2 text-slate-400 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-white bg-slate-100 dark:bg-white/5 rounded-full transition-colors">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed h-20 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
