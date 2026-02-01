import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                relative p-2 rounded-full border transition-all duration-300
                ${isDark
                    ? 'bg-white/10 border-white/20 text-yellow-400 hover:bg-white/20'
                    : 'bg-slate-200 border-slate-300 text-slate-700 hover:bg-slate-300'
                }
            `}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{
                        y: isDark ? 0 : 30,
                        opacity: isDark ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon size={18} />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        y: isDark ? -30 : 0,
                        opacity: isDark ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-orange-500"
                >
                    <Sun size={18} />
                </motion.div>
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
