import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Briefcase, ChevronDown, MapPin, Sparkles } from 'lucide-react';

const internships = [
  {
    role: 'Backend Engineering Intern',
    company: 'C1X Inc.',
    period: 'Jan 2026 – Present',
    mode: 'Onsite',
    current: true,
    accent: '#006f68',
    focus: ['NestJS', 'REST APIs', 'Backend Architecture'],
    points: ['Building scalable backend systems with NestJS and RESTful APIs.', 'Working with production-oriented backend architecture and cloud deployment.', 'Developing reliable APIs and services for real-world applications.'],
  },
  {
    role: 'AI Intern',
    company: 'SkillSync',
    period: 'Jul 2025 – Aug 2025',
    mode: 'Remote',
    accent: '#7357d9',
    focus: ['Python', 'Machine Learning', 'Streamlit'],
    points: ['Built AI-powered web applications with Python and Streamlit.', 'Implemented machine-learning models for predictive analytics and data-driven insights.', 'Integrated intelligent automation into user-facing applications.'],
  },
  {
    role: 'AI Intern',
    company: 'Edunet Foundation',
    period: 'Feb 2025 – Mar 2025',
    mode: 'Remote',
    accent: '#e7a52b',
    focus: ['Python', 'ML', 'Streamlit'],
    points: ['Built a personal fitness tracker using machine-learning algorithms and real-world datasets.', 'Developed interactive AI applications with Streamlit.', 'Applied supervised and unsupervised learning for preprocessing and optimization.'],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Edunet Foundation',
    period: 'Jan 2025 – Feb 2025',
    mode: 'Remote',
    accent: '#ff5b4d',
    focus: ['Kali Linux', 'Python', 'Cisco Packet Tracer'],
    points: ['Performed penetration testing and vulnerability assessment using Kali Linux and Python.', 'Analyzed phishing and social-engineering attacks and explored mitigation strategies.', 'Configured network-security simulations using Cisco Packet Tracer.'],
  },
  {
    role: 'Front-End Web Development Intern',
    company: 'Edunet Foundation — AICTE / IBM SkillsBuild',
    period: 'Six-week internship',
    mode: 'Remote',
    accent: '#006f68',
    focus: ['HTML5 / CSS3', 'JavaScript', 'GSAP', 'Figma'],
    points: ['Built responsive and animated web experiences with HTML5, CSS3 and JavaScript.', 'Worked with Flexbox, CSS Grid, GSAP, Figma, Git/GitHub and GitHub Pages.', 'Practiced UI/UX, accessibility, testing, optimization and deployment.'],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="experience" className="relative overflow-hidden bg-[#151515] py-28 text-white sm:py-36">
      <div className="absolute right-[-8rem] top-1/4 h-72 w-72 rounded-full bg-[#7357d9]/10 blur-[100px]" aria-hidden="true" />
      <div className="section-shell relative z-10">
        <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7 }} className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_.55fr] md:items-end">
          <div>
            <div className="flex items-center gap-3"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/45">Experience</p><span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-white/35">5 internships</span></div>
            <h2 className="mt-5 max-w-4xl text-[clamp(3.5rem,7.5vw,7.2rem)] font-black leading-[.82] tracking-[-.075em]">Where I learned<br />to <span className="text-[#ff7667]">ship.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/50">From interfaces to backend systems, each internship added practical experience across the stack and taught me how to build for real users.</p>
        </motion.header>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute bottom-0 left-3 top-0 hidden w-px bg-white/10 md:block" />
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="pointer-events-none absolute left-3 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-[#38cfc2] via-[#7357d9] to-[#ff7667] md:block" />

          <div className="space-y-3">
            {internships.map((item, index) => {
              const expanded = openIndex === index;
              return (
                <motion.article key={`${item.company}-${item.role}-${index}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .06, duration: .5 }} className="relative md:pl-10">
                  <span className="absolute left-[6px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-[#151515] md:block" style={{ backgroundColor: item.accent, boxShadow: `0 0 0 1px ${item.accent}` }} />
                  <div className={`overflow-hidden border transition-colors duration-300 ${expanded ? 'border-white/15 bg-white/[.045]' : 'border-white/8 bg-white/[.018] hover:border-white/15 hover:bg-white/[.03]'}`}>
                    <button type="button" onClick={() => setOpenIndex(expanded ? -1 : index)} aria-expanded={expanded} className="grid w-full gap-5 p-6 text-left sm:p-7 lg:grid-cols-[.32fr_1fr_auto] lg:items-start">
                      <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[.16em] text-white/35"><span>{item.period}</span><span className="lg:hidden">· {item.mode}</span></div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-black tracking-[-.03em] sm:text-2xl">{item.role}</h3>{item.current && <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38cfc2]/35 bg-[#38cfc2]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#38cfc2]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38cfc2]" />Currently working</span>}</div>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold" style={{ color: item.accent }}><span>{item.company}</span><span className="text-white/20">·</span><span className="inline-flex items-center gap-1 text-white/35"><MapPin size={12} />{item.mode}</span></div>
                      </div>
                      <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 lg:mt-1"><ChevronDown size={16} /></motion.span>
                    </button>

                    <AnimatePresence initial={false}>{expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35, ease: [.22,1,.36,1] }} className="overflow-hidden"><div className="grid gap-8 border-t border-white/10 px-6 pb-7 pt-5 sm:px-7 lg:grid-cols-[.7fr_1.3fr]">
                      <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/30">Focus</p><div className="mt-4 flex flex-wrap gap-2">{item.focus.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/55">{tag}</span>)}</div></div>
                      <ul className="space-y-3 text-sm leading-6 text-white/55">{item.points.map((point, pointIndex) => <motion.li key={point} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: pointIndex * .05 }} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: item.accent }} />{point}</motion.li>)}</ul>
                    </div></motion.div>}</AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex flex-col gap-5 border border-white/10 bg-white/[.035] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><div className="flex items-center gap-2 text-[#e7a52b]"><Sparkles size={15} /><span className="text-[10px] font-bold uppercase tracking-[.2em]">Next chapter</span></div><h3 className="mt-3 text-2xl font-black tracking-[-.04em] sm:text-3xl">Looking for the next hard problem.</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Backend systems, AI products and developer-focused applications are where I want to keep growing.</p></div>
          <motion.a whileHover={{ x: 5 }} whileTap={{ scale: .98 }} href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-[#38cfc2]">Let's talk <ArrowUpRight size={16} /></motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
