import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

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
      'Working with modern backend architecture patterns and cloud deployment.',
      'Developing reliable APIs and services for production applications.',
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
    accent: '#e7a52b',
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
    accent: '#ff5b4d',
    focus: ['Kali Linux', 'Python', 'Cisco Packet Tracer'],
    points: [
      'Performed penetration testing and vulnerability assessment using Kali Linux and Python.',
      'Analyzed phishing and social-engineering attacks and explored mitigation strategies.',
      'Configured network-security simulations using Cisco Packet Tracer.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-[#151515] py-28 text-white sm:py-36">
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_.52fr] md:items-end"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-white/40">Experience</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(3.5rem,7.5vw,7.2rem)] font-black leading-[.82] tracking-[-.075em]">
            Where I learned<br />to <span className="text-[#ff7667]">ship.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-white/50">
          Hands-on internships across backend engineering, AI/ML and cybersecurity, with each role adding practical depth to how I build software.
        </p>
      </motion.div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute bottom-0 left-[5px] top-0 hidden w-px bg-white/10 md:block" />
        <div className="space-y-0">
          {internships.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group relative grid gap-8 border-b border-white/10 py-10 md:pl-10 lg:grid-cols-[170px_1fr_.85fr] lg:gap-12"
            >
              <span
                className="absolute left-0 top-12 hidden h-3 w-3 rounded-full border-2 border-[#151515] md:block"
                style={{ backgroundColor: item.accent, boxShadow: `0 0 0 1px ${item.accent}` }}
              />

              <div className="pt-1">
                <p className="font-mono text-xs uppercase tracking-[.14em] text-white/35">{item.period}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-white/30">
                  <MapPin size={12} />
                  {item.mode}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black tracking-[-.045em] transition-colors group-hover:text-[#ff7667] sm:text-3xl">
                    {item.role}
                  </h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38cfc2]/30 bg-[#38cfc2]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#38cfc2]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38cfc2]" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-semibold" style={{ color: item.accent }}>{item.company}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45 transition-colors group-hover:border-white/15 group-hover:text-white/65"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 self-start text-sm leading-6 text-white/55">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: item.accent }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 grid gap-6 border border-white/10 bg-white/[.03] p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e7a52b]">Next chapter</p>
          <h3 className="mt-3 text-2xl font-black tracking-[-.04em] sm:text-3xl">Looking for the next hard problem.</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
            Backend systems, AI products and developer-focused applications are where I want to keep growing.
          </p>
        </div>
        <motion.a whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-[#38cfc2]">
          Let&apos;s talk <ArrowUpRight size={16} />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Experience;
