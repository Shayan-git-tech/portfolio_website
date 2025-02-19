import { motion } from "framer-motion";
import React from "react";

const transitionVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 0 },
  exit: { scaleY: 1 },
};

export default function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 bg-red-500 z-50"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
    />
  );
}
