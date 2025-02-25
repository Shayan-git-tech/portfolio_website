import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import LazyRoutes from "./LazyRoutes";
import FuzzyOverlay from "./FuzzyOverlay";
import { useCursor } from "./Context/CustomCursor";
import PageTransition from "./PageTransition";
import "../App.css";

export default function Main({ showTransition, setShowTransition }) {
  const { cursorVariant, variants } = useCursor();
  const [showContent, setShowContent] = useState(!showTransition);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowContent(true);
        setShowTransition(false); // Hide the transition immediately when it's done
      }, 1500); // Match duration with `PageTransition`
    }
  }, [showTransition, setShowTransition]);

  return (
    <div className="relative overflow-hidden w-full">
      {/* Page Transition Effect */}
      <AnimatePresence mode="wait">
        {showTransition && <PageTransition key="page-transition" />}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Header />
        <LazyRoutes key="lazy-routes" />
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.1, ease: "easeIn" }}
      />

      {/* Overlay Effect */}
      <FuzzyOverlay />
    </div>
  );
}
