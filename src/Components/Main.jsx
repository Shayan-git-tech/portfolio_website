import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import LazyRoutes from "./LazyRoutes";
import FuzzyOverlay from "./FuzzyOverlay";
import PageTransition from "./PageTransition";
import { SectionRefContext } from "./Context/SectionRefContext";
import "../App.css";

export default function Main({ showTransition, setShowTransition }) {
  const [showContent, setShowContent] = useState(!showTransition);

  // Create refs here and pass them to context
  const AboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectsRef = useRef(null);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowContent(true);
        setShowTransition(false);
      }, 1700); // Match duration with PageTransition
    }
  }, [showTransition, setShowTransition]);


  return (
    <SectionRefContext.Provider value={{ AboutRef, ExperienceRef, ProjectsRef }}>
      <div className="relative overflow-hidden">
        {/* Page Transition Effect */}
        <AnimatePresence mode="wait">
          {showTransition && <PageTransition key="page-transition" />}
        </AnimatePresence>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Header />
          <LazyRoutes />
        </motion.div>

        {/* Overlay Effect */}
        <FuzzyOverlay />
      </div>
    </SectionRefContext.Provider>
  );
}