import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = [['Home', '#home'], ['About', '#about'], ['Works', '#projects'], ['Contact', '#contact']];
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-lg font-black tracking-[-.03em]">swaroop<span className="text-teal">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {items.map(([name, href], i) => <a key={name} href={href} className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400 transition-colors hover:text-white">0{i + 1} {name}</a>)}
          <ThemeToggle />
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden" aria-label="Toggle menu">{open ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/5 bg-ink px-5 py-5 md:hidden">{items.map(([name, href], i) => <a key={name} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold uppercase tracking-[.14em] text-slate-300">0{i + 1} — {name}</a>)}</motion.div>}</AnimatePresence>
    </nav>
  );
};
export default Navbar;
