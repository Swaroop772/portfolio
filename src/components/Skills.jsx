import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Technical Stack",
            color: "from-neon-blue to-cyan-400",
            skills: [
                { name: "Python", level: 95 },
                { name: "Artificial Intelligence", level: 85 },
                { name: "Machine Learning", level: 80 },
                { name: "Git & GitHub", level: 90 },
            ]
        },
        {
            title: "Core Competencies",
            color: "from-neon-purple to-pink-500",
            skills: [
                { name: "Analytical Thinking", level: 90 },
                { name: "Problem Solving", level: 95 },
                { name: "Team Leadership", level: 85 },
                { name: "Adaptability", level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 -skew-y-3 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        My <span className="text-blue-500 dark:text-neon-blue">Ars</span>enal
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400">Tools and technologies I use to build the future.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/60 dark:bg-secondary/40 backdrop-blur-md border border-slate-200 dark:border-glass-border rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-secondary/60 transition-colors group shadow-lg dark:shadow-none"
                        >
                            <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>
                            <div className="space-y-8">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex justify-between mb-2 text-sm font-semibold text-gray-300">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
