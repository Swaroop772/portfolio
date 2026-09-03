import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-white/5 py-10 sm:py-12">
    <div className="section-shell">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-coral">Let's build something useful.</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">Have an idea or opportunity?</h2>
          <a href="mailto:swaroopkurapati15@gmail.com" className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal">swaroopkurapati15@gmail.com <ArrowUpRight size={14} /></a>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:swaroopkurapati15@gmail.com" className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-400 transition-colors hover:border-teal/40 hover:text-teal" aria-label="Email"><Mail size={15} /></a>
          <a href="https://www.linkedin.com/in/swaroop-kurapati/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-400 transition-colors hover:border-teal/40 hover:text-teal" aria-label="LinkedIn"><Linkedin size={15} /></a>
          <a href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/10 text-slate-400 transition-colors hover:border-teal/40 hover:text-teal" aria-label="GitHub"><Github size={15} /></a>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-5 text-[11px] uppercase tracking-[.14em] text-slate-700 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Swaroop Kurapati</span><span>Designed & built with React</span></div>
    </div>
  </footer>
);
export default Footer;
