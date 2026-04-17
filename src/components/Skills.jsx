import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Wrench, Layers, Cpu } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────── */
const categories = [
    {
        id: 'languages',
        label: 'Languages',
        iconEl: <Code2 size={22} />,
        color: '#0ea5e9', // Sky
        skills: [
            { name: 'Python',      icon: '🐍' },
            { name: 'JavaScript',  icon: '⚡' },
            { name: 'TypeScript',  icon: '🔷' },
            { name: 'SQL',         icon: '🗄️' },
            { name: 'HTML & CSS',  icon: '🌐' },
            { name: 'Java',        icon: '☕' },
        ],
    },
    {
        id: 'frameworks',
        label: 'Frameworks',
        iconEl: <Layers size={22} />,
        color: '#06b6d4', // Cyan
        skills: [
            { name: 'NestJS',        icon: '🦁' },
            { name: 'RESTful APIs',  icon: '🔌' },
            { name: 'React',         icon: '⚛️' },
            { name: 'LangChain',     icon: '🔗' },
            { name: 'Streamlit',     icon: '🌊' },
            { name: 'Node.js',       icon: '🟢' },
            { name: 'FastAPI',       icon: '🚀' },
        ],
    },
    {
        id: 'ai-ml',
        label: 'AI / ML',
        iconEl: <Brain size={22} />,
        color: '#f43f5e', // Rose
        skills: [
            { name: 'Machine Learning',            icon: '🤖' },
            { name: 'Large Language Models',       icon: '🧠' },
            { name: 'NLP',                         icon: '💬' },
            { name: 'Model Deployment',            icon: '📦' },
            { name: 'Predictive Analytics',        icon: '📈' },
            { name: 'Data Visualization',          icon: '📊' },
            { name: 'Prompt Engineering',          icon: '⚙️' },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        iconEl: <Wrench size={22} />,
        color: '#10b981', // Emerald
        skills: [
            { name: 'Git & GitHub', icon: '🐙' },
            { name: 'MySQL',        icon: '🗄️' },
            { name: 'Docker',       icon: '🐳' },
            { name: 'Linux',        icon: '🐧' },
            { name: 'VS Code',      icon: '💻' },
            { name: 'Postman',      icon: '📮' },
        ],
    },
    {
        id: 'core',
        label: 'Core Skills',
        iconEl: <Cpu size={22} />,
        color: '#f97316', // Orange
        skills: [
            { name: 'Data Structures', icon: '🏗️' },
            { name: 'Algorithms',      icon: '🧩' },
            { name: 'API Development', icon: '🔌' },
            { name: 'Cloud Computing', icon: '☁️' },
            { name: 'Analytical Thinking', icon: '🔍' },
            { name: 'Problem Solving', icon: '💡' },
        ],
    },
];

/* ─── Animation Variants ────────────────────────────────── */
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

/* ─── Component ─────────────────────────────────────────── */
export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-black transition-colors duration-500">
            
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/5 dark:bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-400/5 dark:bg-rose-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-500 dark:text-gray-400 shadow-sm dark:shadow-none">
                        Capabilities
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Technical{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">
                            Arsenal
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        The languages, frameworks, and tools I use to build scalable systems and intelligent applications.
                    </p>
                </div>

                {/* Grid Layout */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="columns-1 md:columns-2 lg:columns-3 gap-5 lg:gap-6"
                >
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="break-inside-avoid mb-5 lg:mb-6 group relative bg-white dark:bg-[#0a0a0f] rounded-2xl p-5 lg:p-6 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Top Color Accent Line */}
                            <div 
                                className="absolute top-0 left-0 right-0 h-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: cat.color }}
                            />

                            {/* Background Glow on Hover (Dark Mode Only) */}
                            <div 
                                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 dark:group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                                style={{ backgroundColor: cat.color }}
                            />

                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div 
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-slate-50 dark:bg-white/5"
                                    style={{ 
                                        borderColor: `${cat.color}40`,
                                        color: cat.color 
                                    }}
                                >
                                    {cat.iconEl}
                                </div>
                                <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
                                    {cat.label}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2 lg:gap-2.5 relative z-10 pt-2">
                                {cat.skills.map((skill, i) => (
                                    <div 
                                        key={i}
                                        className={`
                                            flex items-center gap-1.5 px-3 py-1.5 lg:px-3 lg:py-2 rounded-xl text-sm font-medium
                                            bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-gray-300
                                            border border-slate-200 dark:border-white/5
                                            hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors
                                        `}
                                    >
                                        <span className="text-base leading-none">{skill.icon}</span>
                                        <span className="leading-none">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
