import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, User, Server, Folder, FileText, Mail } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
            const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 140 && rect.bottom >= 140;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', id: 'home', icon: <Home size={15} /> },
        { name: 'About', href: '#about', id: 'about', icon: <User size={15} /> },
        { name: 'Skills', href: '#skills', id: 'skills', icon: <Server size={15} /> },
        { name: 'Projects', href: '#projects', id: 'projects', icon: <Folder size={15} /> },
        { name: 'Resume', href: '#resume', id: 'resume', icon: <FileText size={15} /> },
        { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={15} /> },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55 }}
                className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border px-3 py-2.5 backdrop-blur-2xl transition-all duration-300 md:w-max md:rounded-full ${scrolled
                    ? 'border-slate-200/80 bg-white/85 shadow-[0_12px_45px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-[#030014]/85 dark:shadow-[0_12px_45px_rgba(0,243,255,0.06)]'
                    : 'border-slate-200/50 bg-white/65 dark:border-white/[0.07] dark:bg-[#030014]/65'
                    }`}
            >
                <div className="flex items-center justify-between gap-2 md:justify-center">
                    <a href="#home" className="flex items-center gap-2 px-2 md:hidden">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                            <Code size={17} />
                        </span>
                        <span className="font-display text-sm font-bold text-slate-900 dark:text-white">Swaroop</span>
                    </a>

                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className={`relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-xs font-semibold transition-colors ${activeSection === item.id ? 'text-white dark:text-slate-950' : 'text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'}`}>
                                {activeSection === item.id && (
                                    <motion.span layoutId="activeTab" className="absolute inset-0 rounded-full bg-slate-950 dark:bg-white" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />
                                )}
                                <span className="relative z-10 flex items-center gap-2">{item.icon}{item.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:ml-2 md:border-l md:border-slate-200 md:pl-3 dark:md:border-white/10">
                        <ThemeToggle />
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-white/10 md:hidden" aria-label="Toggle navigation">
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-x-4 top-[4.7rem] z-40 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white">
                                <span className="text-cyan-600 dark:text-neon-blue">{item.icon}</span>{item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
