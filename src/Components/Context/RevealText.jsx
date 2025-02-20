import React, { createContext, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';

const RevealTextContext = createContext();

export const DURATION = 0.40;
export const STAGGER = 0.055;

const FlipLink = React.memo(({ children, href, className, onClick }) => {
  const variants = useMemo(() => ({
    initial: { y: 0 },
    hovered: { y: "-120%" }
  }), []);

  const transition = useMemo(() => ({
    duration: DURATION,
    ease: "easeInOut"
  }), []);

  const secondVariants = useMemo(() => ({
    initial: { y: "120%" },
    hovered: { y: 0 }
  }), []);

  return (
    <motion.span
      href={href}
      className={`relative block overflow-hidden ${className}`}
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
    >
      <motion.div
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={secondVariants}
        transition={transition}
      >
        {children}
      </motion.div>
    </motion.span>
  );
});

export const RevealTextProvider = React.memo(({ children }) => {
  const value = useMemo(() => ({ FlipLink }), []);

  return (
    <RevealTextContext.Provider value={value}>
      {children}
    </RevealTextContext.Provider>
  );
});

export const useRevealText = () => {
  const context = useContext(RevealTextContext);
  if (context === undefined) {
    throw new Error('useRevealText must be used within a RevealTextProvider');
  }
  return context;
};