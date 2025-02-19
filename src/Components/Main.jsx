import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import LazyRoutes from "./LazyRoutes";
import FuzzyOverlay from "./FuzzyOverlay";
import { useCursor } from "./Context/CustomCursor";
import PageTransition from "./PageTransition";
import "../App.css";

export default function Main() {
  const { cursorVariant, variants } = useCursor();

  return (
    <div
      className="relative overflow-hidden w-full"

    >
      <Header />

      {/* Page Transition Effect */}
      <AnimatePresence mode="wait">
        <PageTransition key="page-transition" />
        <LazyRoutes />
      </AnimatePresence>

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
