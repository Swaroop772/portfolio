import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap, Briefcase, Code,
    MapPin, Calendar, ChevronRight,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────── */
const experiences = [
    {
        role: 'Backend Engineering Intern',
        company: 'C1X Inc.',
        period: 'Jan 2026 – Present',
        duration: '4 months',
        location: 'Onsite',
        current: true,
        color: '#00f3ff',
        lightColor: '#0284c7',
        points: [
            'Building scalable backend systems using NestJS with focus on API development',
            'Designing and implementing RESTful APIs for production-grade applications',
            'Working with modern backend architecture patterns and cloud deployment',
        ],
    },
    {
        role: 'AI Intern',
        company: 'SkillSync',
        period: 'Jul 2025 – Aug 2025',
        duration: '2 months',
        location: 'Remote',
        current: false,
        color: '#a78bfa',
        lightColor: '#7c3aed',
        points: [
            'Designed and deployed AI-powered web applications using Streamlit and Python',
            'Implemented machine learning models for predictive analytics and data-driven insights',
            'Enhanced user experience through intelligent automation and AI integrations',
        ],
    },
    {
        role: 'AI Intern',
        company: 'Edunet Foundation',
        period: 'Feb 2025 – Mar 2025',
        duration: '2 months',
        location: 'Remote',
        current: false,
        color: '#34d399',
        lightColor: '#059669',
        points: [
            'Built personal fitness tracker using ML algorithms on real-world datasets',
            'Developed interactive AI apps with Streamlit, improving model deployment efficiency by 40%',
            'Applied supervised and unsupervised learning for data preprocessing and optimization',
        ],
    },
    {
        role: 'Cybersecurity Intern',
        company: 'Edunet Foundation',
        period: 'Jan 2025 – Feb 2025',
        duration: '2 months',
        location: 'Remote',
        current: false,
        color: '#f87171',
        lightColor: '#dc2626',
        points: [
            'Conducted penetration testing and vulnerability assessments using Kali Linux & Python',
            'Analyzed phishing operations and social engineering attacks, developing mitigation strategies',
            'Configured network security simulations using Cisco Packet Tracer',
        ],
    },
];

const education = [
    {
        degree: 'Bachelor of Engineering — Computer Science',
        institution: 'Prathyusha Engineering College',
        location: 'Tiruvallur, Tamil Nadu',
        period: 'Nov 2022 – Apr 2026',
        GPA: '8.5 GPA',
        current: true,
        color: '#00f3ff',
        lightColor: '#0284c7',
        highlights: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOP', 'Cloud Computing', 'AI/ML'],
    },
    {
        degree: 'Intermediate — MPC',
        institution: 'Priyadarshini Junior College',
        location: 'Atmakur,Andhra Pradesh',
        period: 'Completed Mar 2022',
        Score: '911/1000',
        current: false,
        color: '#22d3ee',
        lightColor: '#0891b2',
        highlights: [],
    },
    {
        degree: 'Secondary School Certificate — SSC',
        institution: 'Pragathi EM High School',
        location: 'Atmakur, Andhra Pradesh',
        period: 'Completed Mar 2020',
        Score: '582/600',
        current: false,
        color: '#34d399',
        lightColor: '#059669',
        highlights: ['Best Student Award'],
    },
];

/* ─── Animation ─────────────────────────────────────────── */
const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -14 },
    show:   { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
};

/* ─── Card component (works in both modes) ────────────────── */
function TimelineCard({ icon: Icon, color, lightColor, title, subtitle, badge, badgeLabel,
    period, location, extra, bullets, highlights }) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none group"
        >
            {/* left colour bar */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: `linear-gradient(to bottom, ${color}, ${color}66)` }}
            />

            {/* subtle corner glow – only visible in dark */}
            <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[50px] opacity-0 dark:opacity-20 group-hover:opacity-0 dark:group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                style={{ background: color }}
            />

            <div className="pl-6 pr-5 py-5 relative z-10">
                {/* top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex items-start gap-3">
                        {/* icon badge */}
                        <div
                            className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${lightColor}18` }}
                        >
                            <Icon size={16} className="dark:hidden" style={{ color: lightColor }} />
                            <Icon size={16} className="hidden dark:block" style={{ color }} />
                        </div>
                        <div>
                            <div className="flex items-center flex-wrap gap-2">
                                <h3 className="font-display text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-snug">
                                    {title}
                                </h3>
                                {badge && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                                        style={{
                                            background: `${color}18`,
                                            color: lightColor,
                                            borderColor: `${color}40`,
                                        }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: lightColor }} />
                                        {badgeLabel}
                                    </span>
                                )}
                            </div>
                            <p className="font-semibold text-sm mt-0.5 dark:hidden" style={{ color: lightColor }}>{subtitle}</p>
                            <p className="font-semibold text-sm mt-0.5 hidden dark:block" style={{ color }}>{subtitle}</p>
                        </div>
                    </div>

                    {/* meta */}
                    <div className="flex flex-col items-start sm:items-end gap-1 pl-12 sm:pl-0 flex-shrink-0">
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-gray-400">
                            <Calendar size={11} />{period}
                        </span>
                        {location && (
                            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-gray-600">
                                <MapPin size={11} />{location}
                            </span>
                        )}
                        {extra && (
                            <span
                                className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md border"
                                style={{ background: `${color}15`, color: lightColor, borderColor: `${color}35` }}
                            >
                                {extra}
                            </span>
                        )}
                    </div>
                </div>

                {/* bullets */}
                {bullets && bullets.length > 0 && (
                    <ul className="mt-3 pl-12 space-y-1.5">
                        {bullets.map((pt, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                                <ChevronRight size={13} className="mt-0.5 flex-shrink-0 dark:hidden" style={{ color: lightColor }} />
                                <ChevronRight size={13} className="mt-0.5 flex-shrink-0 hidden dark:block" style={{ color }} />
                                {pt}
                            </li>
                        ))}
                    </ul>
                )}

                {/* highlight tags */}
                {highlights && highlights.length > 0 && (
                    <div className="mt-3 pl-12 flex flex-wrap gap-2">
                        {highlights.map(h => (
                            <span
                                key={h}
                                className="px-2.5 py-1 text-xs rounded-lg border font-medium"
                                style={{
                                    background: `${color}10`,
                                    borderColor: `${color}30`,
                                    color: lightColor,
                                }}
                            >
                                <span className="dark:hidden">{h}</span>
                                <span className="hidden dark:block" style={{ color }}>{h}</span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function About() {
    const [tab, setTab] = useState('experience');

    return (
        <section id="about" className="py-28 relative overflow-hidden">

            {/* ── Dot-grid background ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #00f3ff 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}
            />

            {/* ── Floating tech icon bubbles ── */}
            {[
                { icon: '</>',  x: '8%',  y: '12%', delay: 0,    dur: 9,  size: 'text-2xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '🐍',   x: '90%', y: '8%',  delay: 1.5,  dur: 11, size: 'text-3xl', opacity: 'opacity-25 dark:opacity-35' },
                { icon: '⚛️',   x: '75%', y: '72%', delay: 0.8,  dur: 13, size: 'text-3xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '{}',   x: '20%', y: '78%', delay: 2,    dur: 10, size: 'text-xl',  opacity: 'opacity-20 dark:opacity-25' },
                { icon: '🤖',   x: '50%', y: '5%',  delay: 0.4,  dur: 14, size: 'text-3xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '🛡️',   x: '3%',  y: '55%', delay: 3,    dur: 12, size: 'text-2xl', opacity: 'opacity-15 dark:opacity-25' },
                { icon: '☁️',   x: '85%', y: '40%', delay: 1.2,  dur: 15, size: 'text-3xl', opacity: 'opacity-20 dark:opacity-28' },
                { icon: '🔗',   x: '60%', y: '88%', delay: 2.5,  dur: 11, size: 'text-2xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '=>',   x: '38%', y: '92%', delay: 0.7,  dur: 10, size: 'text-lg font-mono font-bold', opacity: 'opacity-15 dark:opacity-25' },
                { icon: '🧠',   x: '14%', y: '35%', delay: 1.8,  dur: 13, size: 'text-2xl', opacity: 'opacity-15 dark:opacity-25' },
                { icon: '🐙',   x: '92%', y: '62%', delay: 3.2,  dur: 9,  size: 'text-2xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '[ ]',  x: '44%', y: '20%', delay: 0.3,  dur: 12, size: 'text-lg font-mono', opacity: 'opacity-15 dark:opacity-20' },
                { icon: '🚀',   x: '70%', y: '18%', delay: 2.1,  dur: 11, size: 'text-2xl', opacity: 'opacity-20 dark:opacity-30' },
                { icon: '0x1f', x: '25%', y: '60%', delay: 1.6,  dur: 14, size: 'text-sm font-mono', opacity: 'opacity-10 dark:opacity-20' },
                { icon: '#!',   x: '55%', y: '48%', delay: 4,    dur: 16, size: 'text-sm font-mono', opacity: 'opacity-10 dark:opacity-18' },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute pointer-events-none select-none ${item.size} ${item.opacity} text-slate-600 dark:text-neon-blue`}
                    style={{ left: item.x, top: item.y }}
                    animate={{ y: [0, -18, 0], x: [0, i % 2 === 0 ? 8 : -8, 0], rotate: [0, i % 3 === 0 ? 6 : -4, 0] }}
                    transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* ambient blobs */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-sky-400/5 dark:bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-violet-400/5 dark:bg-[#a78bfa]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400">
                        Background
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-neon-blue dark:to-cyan-400">
                            Me
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-base">
                        Navigating the digital frontier with a fusion of{' '}
                        <span className="text-sky-600 dark:text-neon-blue font-medium">code</span> and{' '}
                        <span className="text-violet-600 dark:text-[#a78bfa] font-medium">creativity</span>.
                    </p>
                </motion.div>

                {/* ── Bio strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-10 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-slate-900/40 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Code size={22} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-display text-base font-bold text-slate-800 dark:text-white mb-1">My Journey</h3>
                        <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Results-driven and hands-on developer with experience in building full-stack web applications and machine learning solutions. Strong focus on problem-solving, debugging, and delivering practical implementations using React.js, Node.js, and data-driven models. Proven ability to work with real-world datasets, develop interactive dashboards, and implement forecasting models for business insights.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {['Innovator', 'Problem Solver', 'AI Enthusiast', 'Backend Dev'].map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-0.5 rounded-full text-xs font-semibold border border-sky-200 dark:border-neon-blue/25 bg-sky-50 dark:bg-neon-blue/5 text-sky-700 dark:text-neon-blue"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Tab switcher ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex gap-2 mb-7"
                >
                    {[
                        { id: 'experience', label: 'Experience', icon: <Briefcase size={14} />, count: experiences.length },
                        { id: 'education',  label: 'Education',  icon: <GraduationCap size={14} />, count: education.length },
                    ].map(t => (
                        <button
                            key={t.id}
                            id={`about-tab-${t.id}`}
                            onClick={() => setTab(t.id)}
                            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                                tab === t.id
                                    ? 'bg-sky-600 dark:bg-gradient-to-r dark:from-neon-blue dark:to-cyan-500 text-white dark:text-black border-transparent shadow-md'
                                    : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.08]'
                            }`}
                        >
                            {t.icon}
                            {t.label}
                            <span className={`text-xs px-1.5 py-0.5 rounded-md font-mono ${
                                tab === t.id
                                    ? 'bg-white/20 text-white dark:text-black dark:bg-black/20'
                                    : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-gray-400'
                            }`}>
                                {t.count}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Content ── */}
                <AnimatePresence mode="wait">
                    {tab === 'experience' && (
                        <motion.div
                            key="experience"
                            variants={listVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
                            className="space-y-4"
                        >
                            {experiences.map((exp, i) => (
                                <TimelineCard
                                    key={i}
                                    icon={Briefcase}
                                    color={exp.color}
                                    lightColor={exp.lightColor}
                                    title={exp.role}
                                    subtitle={exp.company}
                                    badge={exp.current}
                                    badgeLabel="Current"
                                    period={`${exp.period} · ${exp.location || 'Remote'} · ${exp.duration}`}
                                    bullets={exp.points}
                                />
                            ))}
                        </motion.div>
                    )}

                    {tab === 'education' && (
                        <motion.div
                            key="education"
                            variants={listVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
                            className="space-y-4"
                        >
                            {education.map((edu, i) => (
                                <TimelineCard
                                    key={i}
                                    icon={GraduationCap}
                                    color={edu.color}
                                    lightColor={edu.lightColor}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    badge={edu.current}
                                    badgeLabel="Ongoing"
                                    period={edu.period}
                                    location={edu.location}
                                    extra={edu.GPA || edu.Score}
                                    highlights={edu.highlights}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
