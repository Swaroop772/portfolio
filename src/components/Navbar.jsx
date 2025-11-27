import React, { useState } from 'react';
import { Menu, X, Code, Brain, Gamepad2, FileText, Mail, User } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Brain size={18} /> },
        { name: 'Projects', href: '#projects', icon: <Code size={18} /> },
        { name: 'Resume', href: '#resume', icon: <FileText size={18} /> },

        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-accent tracking-wider">
                            AI<span className="text-white">.DEV</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-accent hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                                >
                                    {item.icon}
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-accent hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
