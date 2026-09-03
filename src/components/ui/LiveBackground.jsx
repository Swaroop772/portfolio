import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const LiveBackground = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="live-background" aria-hidden="true">
      <div className="live-background-grid" />
      <motion.div
        className="live-orb live-orb-teal"
        animate={reducedMotion ? undefined : { x: [0, 90, -45, 0], y: [0, -55, 70, 0], scale: [1, 1.12, .92, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="live-orb live-orb-coral"
        animate={reducedMotion ? undefined : { x: [0, -75, 55, 0], y: [0, 65, -45, 0], scale: [1, .9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="live-orb live-orb-violet"
        animate={reducedMotion ? undefined : { x: [0, 45, -70, 0], y: [0, 75, -35, 0], scale: [1, 1.08, .94, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <div className="live-background-noise" />
    </div>
  );
};

export default LiveBackground;
