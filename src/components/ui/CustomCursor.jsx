import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const { theme } = useTheme();

    const springConfig = { damping: 20, stiffness: 300 }; // Softer spring for floaty feel
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    const isDark = theme === 'dark';

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* The Spotlight / Glow */}
            <motion.div
                animate={{
                    width: isHovered ? 200 : 80,
                    height: isHovered ? 200 : 80,
                    opacity: isHovered ? 0.6 : 0.4,
                }}
                className={`rounded-full blur-2xl transition-colors duration-300 ${isDark ? 'mix-blend-screen bg-neon-blue' : 'mix-blend-multiply bg-blue-400'}`}
            />

            {/* Core center dot for precision */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-slate-900'} transition-colors duration-300`} />
        </motion.div>
    );
};

export default CustomCursor;
