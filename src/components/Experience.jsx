import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, MapPin, Sparkles } from 'lucide-react';

const internships = [
  {
    role: 'Backend Engineering Intern',
    company: 'C1X Inc.',
    period: 'Jan 2026 – Present',
    mode: 'Onsite',
    current: true,
    accent: '#006f68',
    focus: ['NestJS', 'REST APIs', 'Backend Architecture'],
    points: [
      'Building scalable backend systems with NestJS and RESTful APIs.',
      'Working with production-oriented backend architecture and cloud deployment.',
      'Developing reliable APIs and services for real-world applications.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'SkillSync',
    period: 'Jul 2025 – Aug 2025',
    mode: 'Remote',
    accent: '#7357d9',
    focus: ['Python', 'Machine Learning', 'Streamlit'],
    points: [
      'Built AI-powered web applications with Python and Streamlit.',
      'Implemented machine-learning models for predictive analytics and data-driven insights.',
      'Integrated intelligent automation into user-facing applications.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Edunet Foundation',
    period: 'Feb 2025 – Mar 2025',
    mode: 'Remote',
    accent: '#e7a52b',
    focus: ['Python', 'ML', 'Streamlit'],
    points: [
      'Built a personal fitness tracker using machine-learning algorithms and real-world datasets.',
      'Developed interactive AI applications with Streamlit.',
      'Applied supervised and unsupervised learning for preprocessing and optimization.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Edunet Foundation',
    period: 'Jan 2025 – Feb 2025',
    mode: 'Remote',
    accent: '#ff5b4d',
    focus: ['Kali Linux', 'Python', 'Cisco Packet Tracer'],
    points: [
      'Performed penetration testing and vulnerability assessment using Kali Linux and Python.',
      'Analyzed phishing and social-engineering attacks and explored mitigation strategies.',
      'Configured network-security simulations using Cisco Packet Tracer.',
    ],
  },
  {
    role: 'Front-End Web Development Intern',
    company: 'Edunet Foundation — AICTE / IBM SkillsBuild',
    period: 'Six-week internship',
    mode: 'Remote',
    accent: '#006f68',
    focus: ['HTML5 / CSS3', 'JavaScript', 'GSAP', 'Figma'],
    points: [
      'Built responsive and animated web experiences with HTML5, CSS3 and JavaScript.',
      'Worked with Flexbox, CSS Grid, GSAP, Figma, Git/GitHub and GitHub Pages.',
      'Practiced UI/UX, accessibility, testing, optimization and deployment.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-[#151515] py-28 text-white sm:py-36">
    <div className="section-shell">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7 }} className="grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-white/45">Experience</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[.84] tracking-[-.07em]">Where I learned to <span className="text-[#ff7667]">ship.</span></h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-white/55">Hands-on internships across backend engineering, AI/ML, cybersecurity and frontend development—each one adding a different layer to how I build.</p>
      </motion.div>

      <div className="mt-16 border-t border-white/10">
        {internships.map((item, index) => (
          <motion.article key={`${item.company}-${item.role}-${index}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .07, duration: .6 }} className="group relative grid gap-8 border-b border-white/10 py-9 lg:grid-cols-[.2fr_1fr_.72fr] lg:items-start">
            <div className="flex items-center gap-3 lg:block">
              <span className="font-mono text-xs text-white/35">{item.period.split(' ').slice(0, 1).join('')}</span>
              <span className="text-[10px] uppercase tracking-[.16em] text-white/30 lg:hidden">{item.mode}</span>
            </div>

            <div className="relative pl-7 lg:pl-0">
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[#151515] lg:-left-4" style={{ backgroundColor: item.accent, boxShadow: `0 0 0 1px ${item.accent}` }} />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black tracking-[-.04em] transition-colors group-hover:text-[#ff7667] sm:text-3xl">{item.role}</h3>
                {item.current && <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38cfc2]/35 bg-[#38cfc2]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-[#38cfc2]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38cfc2]" />Current</span>}
              </div>
              <p className="mt-2 text-sm font-semibold" style={{ color: item.accent }}>{item.company}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.focus.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-white/45 transition-colors group-hover:border-white/20 group-hover:text-white/65">{tag}</span>)}</div>
            </div>

            <div>
              <div className="mb-5 hidden items-center justify-between text-[10px] uppercase tracking-[.16em] text-white/30 lg:flex"><span>{item.mode}</span><span>{item.period}</span></div>
              <ul className="space-y-3 text-sm leading-6 text-white/55">{item.points.map((point, pointIndex) => <motion.li key={point} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .12 + index * .07 + pointIndex * .04 }} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: item.accent }} />{point}</motion.li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 grid gap-6 border border-white/10 bg-white/[.03] p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
        <div>
          <div className="flex items-center gap-2 text-[#e7a52b]"><Sparkles size={15} /><span className="text-[10px] font-bold uppercase tracking-[.2em]">Next chapter</span></div>
          <h3 className="mt-3 text-2xl font-black tracking-[-.04em] sm:text-3xl">Looking for the next hard problem.</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Backend systems, AI products and developer-focused applications are where I want to keep growing.</p>
        </div>
        <motion.a whileHover={{ x: 5 }} whileTap={{ scale: .98 }} href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-[#38cfc2]">Let's talk <ArrowUpRight size={16} /></motion.a>
      </motion.div>
    </div>
  </section>
);

export default Experience;
