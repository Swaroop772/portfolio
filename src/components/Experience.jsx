import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';

const internships = [
  { role: 'Backend Engineering Intern', company: 'C1X Inc.', period: 'Jan 2026 – Present', mode: 'Onsite', current: true, points: ['Building scalable backend systems with NestJS and RESTful APIs.', 'Working with production-oriented backend architecture and cloud deployment.', 'Developing reliable APIs and services for real-world applications.'] },
  { role: 'AI Intern', company: 'SkillSync', period: 'Jul 2025 – Aug 2025', mode: 'Remote', points: ['Built AI-powered web applications with Python and Streamlit.', 'Implemented machine-learning models for predictive analytics and data-driven insights.', 'Integrated intelligent automation into user-facing applications.'] },
  { role: 'AI Intern', company: 'Edunet Foundation', period: 'Feb 2025 – Mar 2025', mode: 'Remote', points: ['Built a personal fitness tracker using machine-learning algorithms and real-world datasets.', 'Developed interactive AI applications with Streamlit.', 'Applied supervised and unsupervised learning for preprocessing and optimization.'] },
  { role: 'Cybersecurity Intern', company: 'Edunet Foundation', period: 'Jan 2025 – Feb 2025', mode: 'Remote', points: ['Performed penetration testing and vulnerability assessment using Kali Linux and Python.', 'Analyzed phishing and social-engineering attacks and explored mitigation strategies.', 'Configured network-security simulations using Cisco Packet Tracer.'] },
  { role: 'Front-End Web Development Intern', company: 'Edunet Foundation — AICTE / IBM SkillsBuild', period: 'Six-week internship', mode: 'Remote', points: ['Built responsive and animated web experiences with HTML5, CSS3 and JavaScript.', 'Worked with Flexbox, CSS Grid, GSAP, Figma, Git/GitHub and GitHub Pages.', 'Practiced UI/UX, accessibility, testing, optimization and deployment.'] },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-surface py-28 sm:py-36">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
          <p className="section-kicker">Experience</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="section-heading max-w-2xl">Internships that<br /><span>shaped my work.</span></h2><p className="max-w-md text-sm leading-6 text-slate-500">A practical mix of backend engineering, AI/ML, cybersecurity and front-end development experience.</p></div>
        </motion.div>
        <div className="relative mt-14 divide-y divide-white/10 border-y border-white/10">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} className="absolute bottom-0 left-4 top-0 hidden w-px origin-top bg-gradient-to-b from-teal via-teal/40 to-transparent lg:block" />
          {internships.map((item, index) => (
            <motion.article key={`${item.company}-${item.role}-${index}`} initial={{ opacity: 0, x: index % 2 ? 28 : -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1, duration: .65 }} whileHover={{ x: 5 }} className="group relative grid gap-6 py-8 lg:grid-cols-[1.05fr_1.45fr_auto] lg:items-start lg:pl-10">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: .2 + index * .1, type: 'spring' }} className="absolute left-[9px] top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-teal bg-surface lg:block" />
              <div className="flex items-center gap-3"><motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="flex h-9 w-9 items-center justify-center border border-teal/30 text-teal"><Briefcase size={16} /></motion.span><div><h3 className="text-lg font-bold text-white transition-colors group-hover:text-teal">{item.role}</h3><p className="mt-1 text-sm font-semibold text-teal">{item.company}</p></div></div>
              <ul className="space-y-2 text-sm leading-6 text-slate-400">{item.points.map((point, pointIndex) => <motion.li key={point} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .15 + index * .1 + pointIndex * .06 }} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-coral" />{point}</motion.li>)}</ul>
              <div className="text-left lg:text-right"><p className="font-mono text-xs uppercase tracking-wider text-slate-300">{item.period}</p><div className="mt-2 flex items-center gap-2 text-xs text-slate-600 lg:justify-end">{item.current && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />}{item.mode}</div></div>
            </motion.article>
          ))}
        </div>
        <motion.a whileHover={{ x: 6 }} href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-teal hover:text-white">Let's work together <ArrowUpRight size={16} /></motion.a>
      </div>
    </section>
  );
}
