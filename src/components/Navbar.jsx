import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const items = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Works', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = items.map(([, href]) => document.querySelector(href)).filter(Boolean);
      const current = sections.reduce((best, section) => section.getBoundingClientRect().top <= 140 ? section : best, sections[0]);
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { document.body.style.overflow = ''; window.removeEventListener('scroll', onScroll); };
  }, [open]);

  return (
    <motion.nav initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-black/10 bg-[#f4f1eb]/95 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#111]/95' : 'border-black/5 bg-[#f4f1eb]/80 backdrop-blur-md dark:border-white/5 dark:bg-[#111]/80'}`}>
      <div className="section-shell flex h-20 items-center justify-between">
        <motion.a href="#home" whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }} className="font-display text-lg font-black tracking-[-.03em]">swaroop<span className="text-coral">.</span></motion.a>
        <div className="hidden items-center gap-5 md:flex">
          {items.map(([name, href]) => {
            const id = href.slice(1);
            const selected = active === id;
            return <motion.a key={name} href={href} whileHover={{ y: -2 }} whileTap={{ scale: .96 }} className={`relative px-2 py-3 text-xs font-semibold uppercase tracking-[.13em] transition-colors ${selected ? 'text-current' : 'text-black/45 hover:text-black dark:text-white/45 dark:hover:text-white'}`}>
              <span className="relative z-10">{name}</span>
              {selected && <motion.span layoutId="nav-active" className="absolute inset-x-2 bottom-1 h-px bg-coral" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
            </motion.a>;
          })}
          <ThemeToggle />
        </div>
        <motion.button whileTap={{ scale: .9 }} onClick={() => setOpen(!open)} className="rounded-lg border border-black/10 p-2 text-black/60 transition-colors hover:border-coral/40 hover:text-coral dark:border-white/10 dark:text-white/70" aria-label="Toggle menu">{open ? <X size={19} /> : <Menu size={19} />}</motion.button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .3 }} className="overflow-hidden border-t border-black/10 bg-[#f4f1eb]/98 px-5 py-5 backdrop-blur-xl dark:border-white/5 dark:bg-[#111]/98 md:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10"><span className="text-xs font-bold uppercase tracking-[.15em] text-black/45 dark:text-white/45">Theme</span><ThemeToggle /></div>
          {items.map(([name, href], i) => <motion.a key={name} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .05 }} whileTap={{ x: 6 }} className="block border-b border-black/10 py-3 text-sm font-semibold uppercase tracking-[.14em] text-black/65 last:border-0 dark:border-white/5 dark:text-white/70">{name}</motion.a>)}
        </motion.div>}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
