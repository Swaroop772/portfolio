import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, User, Server, Folder, FileText, Mail } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section logic
            const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#hero', id: 'hero', icon: <Home size={16} /> },
        { name: 'About', href: '#about', id: 'about', icon: <User size={16} /> },
        { name: 'Skills', href: '#skills', id: 'skills', icon: <Server size={16} /> },
        { name: 'Projects', href: '#projects', id: 'projects', icon: <Folder size={16} /> },
        { name: 'Resume', href: '#resume', id: 'resume', icon: <FileText size={16} /> },
        { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={16} /> },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`fixed top-6 left-0 right-0 z-50 mx-auto w-[95%] md:w-max px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-between md:justify-center gap-4 ${scrolled
                        ? 'bg-white/70 dark:bg-glass/80 backdrop-blur-md border border-slate-200 dark:border-glass-border shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,243,255,0.1)]'
                        : 'bg-transparent border border-transparent'
                    }`}
            >
                {/* Logo for mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <Code size={20} />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-white">Swaroop</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${activeSection === item.id
                                ? 'text-white dark:text-black'
                                : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                            }`}>
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-slate-900 dark:bg-gradient-to-r dark:from-neon-blue dark:to-neon-purple"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {item.icon}
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:block pl-4 border-l border-slate-200 dark:border-white/10 ml-2">
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 dark:text-white">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 md:hidden bg-white/95 dark:bg-secondary/95 backdrop-blur-xl border border-slate-200 dark:border-glass-border rounded-2xl p-4 z-40 shadow-2xl"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors flex items-center gap-3"
                                >
                                    <span className="text-blue-500 dark:text-neon-purple">{item.icon}</span>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
