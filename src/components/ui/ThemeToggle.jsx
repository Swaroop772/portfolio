import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            className="theme-toggle"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={isDark}
        >
            <span className={`theme-toggle-track ${isDark ? 'is-dark' : ''}`}>
                <motion.span
                    className="theme-toggle-thumb"
                    animate={{ x: isDark ? 24 : 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                >
                    {isDark ? <Moon size={13} /> : <Sun size={13} />}
                </motion.span>
            </span>
        </motion.button>
    );
};

export default ThemeToggle;
