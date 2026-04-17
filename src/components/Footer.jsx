import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                        <Code2 size={13} className="text-black" />
                    </div>
                    <span className="font-display font-semibold text-slate-800 dark:text-white text-sm tracking-tight">
                        Swaroop Kurapati
                    </span>
                    <span className="text-slate-400 dark:text-gray-600 text-xs font-mono">
                        &copy; {new Date().getFullYear()}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm font-medium">
                    <span>Crafted with</span>
                    <Heart size={14} className="text-red-500 fill-red-500" />
                    <span>
                        using{' '}
                        <span className="font-semibold text-slate-700 dark:text-gray-300">React</span>
                        {' '}&amp;{' '}
                        <span className="font-semibold text-slate-700 dark:text-gray-300">Tailwind</span>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
