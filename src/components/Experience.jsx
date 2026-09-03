import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, MapPin, Sparkles } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const internships = [
  {
    role: 'Backend Engineering Intern',
    company: 'C1X Inc.',
    period: 'Jan 2026 – Present',
    mode: 'Onsite',
    current: true,
    accent: '#4fd1c5',
    image: `${baseUrl}experience/backend.svg`,
    focus: ['NestJS', 'REST APIs', 'Backend Architecture'],
    points: [
      'Building scalable backend systems with NestJS and RESTful APIs.',
      'Working with modern backend architecture patterns and cloud deployment.',
      'Developing reliable APIs and services for production applications.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'SkillSync',
    period: 'Jul 2025 – Aug 2025',
    mode: 'Remote',
    accent: '#a78bfa',
    image: `${baseUrl}experience/frontend.svg`,
    focus: ['Python', 'Machine Learning', 'Streamlit'],
    points: [
      'Built AI-powered web applications using Python and Streamlit.',
      'Implemented machine-learning models for predictive analytics and data-driven insights.',
      'Integrated intelligent automation into user-facing applications.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Edunet Foundation',
    period: 'Feb 2025 – Mar 2025',
    mode: 'Remote',
    accent: '#f3c969',
    image: `${baseUrl}experience/ai.svg`,
    focus: ['Python', 'Machine Learning', 'Streamlit'],
    points: [
      'Built a personal fitness tracker using machine-learning algorithms and real-world datasets.',
      'Developed interactive AI applications with Streamlit.',
      'Applied supervised and unsupervised learning for data preprocessing and optimization.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Edunet Foundation',
    period: 'Jan 2025 – Feb 2025',
    mode: 'Remote',
    accent: '#ff7b6e',
    image: `${baseUrl}experience/security.svg`,
    focus: ['Kali Linux', 'Python', 'Cisco Packet Tracer'],
    points: [
      'Performed penetration testing and vulnerability assessment using Kali Linux and Python.',
      'Analyzed phishing and social-engineering attacks and explored mitigation strategies.',
      'Configured network-security simulations using Cisco Packet Tracer.',
    ],
  },
];

const values = [
  'Build for real users, not just demos.',
  'Keep systems simple, readable and dependable.',
  'Learn quickly and take ownership of difficult problems.',
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-[#151515] py-28 text-white sm:py-36">
    <div className="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-[#7357d9]/10 blur-[120px]" aria-hidden="true" />
    <div className="pointer-events-none absolute left-[-12rem] bottom-24 h-80 w-80 rounded-full bg-[#38cfc2]/[.06] blur-[110px]" aria-hidden="true" />

    <div className="section-shell relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1fr_.5fr] md:items-end"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Experience</p>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-white/30">
              4 internships · 2025–present
            </span>
          </div>
          <h2 className="mt-5 max-w-4xl text-[clamp(3.5rem,7.5vw,7.2rem)] font-black leading-[.82] tracking-[-.075em]">
            Where I learned<br />to <span className="text-[#ff7667]">ship.</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-7 text-white/50">
            Hands-on work across backend engineering, AI/ML and cybersecurity, moving from experimentation into production-oriented software.
          </p>
          <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/30">
            <BriefcaseBusiness size={14} />
            <span>Selected professional experience</span>
          </div>
        </div>
      </motion.header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <motion.aside
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="self-start lg:sticky lg:top-28"
        >
          <div className="overflow-hidden border border-white/10 bg-white/[.025]">
            <div className="relative aspect-square overflow-hidden border-b border-white/10 bg-black/20">
              <img src={`${baseUrl}experience/backend.svg`} alt="Abstract backend architecture illustration" loading="lazy" className="h-full w-full object-cover p-6 opacity-90 transition-transform duration-700 hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#4fd1c5]">How I work</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-.04em]">Curious. Practical. Reliable.</h3>
              <ul className="mt-6 space-y-4">
                {values.map((value, index) => (
                  <motion.li key={value} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="flex gap-3 text-sm leading-6 text-white/50">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ['#4fd1c5','#a78bfa','#ff7b6e'][index] }} />
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Backend', 'AI / ML', 'Security', 'Problem solving'].map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-white/40">{tag}</span>)}
          </div>
        </motion.aside>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-2 top-0 hidden w-px bg-gradient-to-b from-[#4fd1c5]/70 via-white/10 to-[#ff7b6e]/70 md:block" />
          <div className="space-y-4">
            {internships.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                className="group relative md:pl-10"
              >
                <span className="absolute left-[-1px] top-9 hidden h-5 w-5 rounded-full border-[5px] border-[#151515] md:block" style={{ backgroundColor: item.accent, boxShadow: `0 0 0 1px ${item.accent}` }} />
                <div className={`relative overflow-hidden border p-5 transition-all duration-300 sm:p-7 lg:p-8 ${item.current ? 'border-[#4fd1c5]/25 bg-[#4fd1c5]/[.045] shadow-[0_18px_60px_rgba(0,0,0,.18)]' : 'border-white/8 bg-white/[.018] hover:border-white/15 hover:bg-white/[.028]'}`}>
                  <div className="grid gap-7 lg:grid-cols-[155px_126px_1fr_.88fr] lg:gap-9">
                    <div className="flex justify-between gap-5 lg:block">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[.14em] text-white/35">{item.period}</p>
                        <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-white/30"><MapPin size={12} />{item.mode}</div>
                      </div>
                      {item.current && <span className="lg:hidden inline-flex h-fit items-center gap-1.5 rounded-full border border-[#4fd1c5]/25 bg-[#4fd1c5]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#4fd1c5]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4fd1c5]" />Current</span>}
                    </div>

                    <div className="relative self-start overflow-hidden border border-white/10 bg-black/20">
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundColor: item.accent, mixBlendMode: 'screen' }} />
                      <img src={item.image} alt="" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-start gap-3">
                        <h3 className="text-2xl font-black tracking-[-.045em] transition-colors group-hover:text-white sm:text-3xl">{item.role}</h3>
                        {item.current && <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-[#4fd1c5]/25 bg-[#4fd1c5]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#4fd1c5]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4fd1c5]" />Current</span>}
                      </div>
                      <p className="mt-2 text-sm font-semibold" style={{ color: item.accent }}>{item.company}</p>
                      <div className="mt-5 flex flex-wrap gap-2">{item.focus.map((tag) => <motion.span key={tag} whileHover={{ y: -2 }} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/50 transition-colors group-hover:border-white/15 group-hover:text-white/70">{tag}</motion.span>)}</div>
                    </div>

                    <ul className="space-y-3 self-start text-sm leading-6 text-white/55">{item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: item.accent }} /><span>{point}</span></li>)}</ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 overflow-hidden border border-white/10 bg-white/[.03] p-7 sm:p-9">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><div className="flex items-center gap-2 text-[#e7a52b]"><Sparkles size={15} /><span className="text-[10px] font-bold uppercase tracking-[.2em]">Next chapter</span></div><h3 className="mt-3 text-2xl font-black tracking-[-.04em] sm:text-3xl">Looking for the next hard problem.</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">Backend systems, AI products and developer-focused applications are where I want to keep growing.</p></div>
          <motion.a whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-[#38cfc2]">Let&apos;s talk <ArrowUpRight size={16} /></motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
