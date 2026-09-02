import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="section-shell flex flex-col gap-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Swaroop Kurapati</span>
      <div className="flex items-center gap-5">
        <a href="mailto:swaroopkurapati15@gmail.com" className="hover:text-teal" aria-label="Email"><Mail size={15} /></a>
        <a href="https://www.linkedin.com/in/swaroop-kurapati/" target="_blank" rel="noreferrer" className="hover:text-teal" aria-label="LinkedIn"><Linkedin size={15} /></a>
        <a href="https://github.com/Swaroop772" target="_blank" rel="noreferrer" className="hover:text-teal" aria-label="GitHub"><Github size={15} /></a>
      </div>
      <span>Designed & built with React</span>
    </div>
  </footer>
);
export default Footer;
