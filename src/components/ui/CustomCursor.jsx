import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const CustomCursor = () => {
  const [mode, setMode] = useState('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const { theme } = useTheme();
  const springConfig = { damping: 24, stiffness: 420, mass: 0.35 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const isDark = theme === 'dark';

  useEffect(() => {
    const move = e => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const enter = e => setMode(e.currentTarget.dataset.cursor || 'hover');
    const leave = () => setMode('default');
    const bind = () => document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach(el => {
      el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave);
      el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave);
    });
    bind();
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('mousemove', move, { passive: true });
    return () => { window.removeEventListener('mousemove', move); observer.disconnect(); };
  }, [cursorX, cursorY]);

  const expanded = mode === 'hover' || mode === 'view';
  const view = mode === 'view';
  return <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block" style={{ x, y, translateX: '-50%', translateY: '-50%' }}>
    <motion.div animate={{ width: expanded ? (view ? 84 : 54) : 14, height: expanded ? (view ? 84 : 54) : 14, opacity: expanded ? .92 : 1 }} transition={{ type: 'spring', stiffness: 320, damping: 25 }} className={`relative flex items-center justify-center rounded-full border ${isDark ? 'border-teal/60 bg-teal/10' : 'border-slate-900/40 bg-slate-900/5'} backdrop-blur-sm`}>
      <motion.div animate={{ scale: expanded ? .65 : 1 }} className={`h-2 w-2 rounded-full ${isDark ? 'bg-teal' : 'bg-slate-900'}`} />
      {view && <motion.span initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute text-[9px] font-bold uppercase tracking-widest text-teal">view</motion.span>}
    </motion.div>
    <motion.div animate={{ scale: [1, 1.18, 1], opacity: [.12, .24, .12] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -inset-4 rounded-full bg-teal/20 blur-xl" />
  </motion.div>;
};
export default CustomCursor;
