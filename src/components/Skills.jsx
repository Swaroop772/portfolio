import React from 'react';
import SpotlightCard from './ui/SpotlightCard';

const Skills = () => {
    const skillCategories = [
        {
            title: "Technical Skills",
            skills: [
                { name: "Python", level: 95 },
                { name: "Artificial Intelligence (AI)", level: 75 },
                { name: "Machine Learning (ML)", level: 75 },
                { name: "Microsoft 365 tools", level: 85 },
                { name: "AI tools", level: 90 },
                { name: "Git and GitHub", level: 80 },
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Analytical", level: 90 },
                { name: "Collaborator", level: 90 },
                { name: "Leader", level: 85 },
                { name: "Adaptable", level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <SpotlightCard key={index} className="rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-accent text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
