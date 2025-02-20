"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRevealText } from "./Context/RevealText";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { FlipLink } = useRevealText();
  const { scrollY } = useScroll();

  // const scrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     const headerOffset = 70; // Adjust based on header height
  //     const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
  //     const offsetPosition = elementPosition - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest < lastScrollY || latest < 100);
    setLastScrollY(latest);
  });

  // const handleItemClick = useCallback((ref) => {
  //   setMenuOpen(false);
  //   // scrollToSection(ref);
  // }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.header
      className="z-50 fixed inset-x-0 top-0 flex justify-center mt-5 px-4"
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between backdrop-blur-xl bg-black/60 border border-white/20 rounded-full w-full max-w-[1000px] h-[55px] px-4 sm:px-6 shadow-lg shadow-black/5"
      >
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#hero"
          className="font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent cursor-pointer"
        >
          Shayan K.
        </motion.a>

        {/* Traditional Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="relative flex items-center justify-center gap-10 text-white px-6 py-2 rounded-full cursor-pointer">
            <a href="#about" className="cursor-pointer">
              <FlipLink>About</FlipLink>
            </a>
            <a href="#experience" className="cursor-pointer">
              <FlipLink>Experience</FlipLink>
            </a>
            <a href="#projects" className="cursor-pointer">
              <FlipLink>Projects</FlipLink>
            </a>
            <div className="cursor-pointer">
              <a href="https://drive.google.com/file/d/1cZ11uoaLXYW3HaQnrd4XH5BTcz02tYn-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 ml-2 rounded-full bg-gray-400 hover:bg-gray-500 transition-colors"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-[65px] left-4 right-4 backdrop-blur-xl bg-black/60 border border-white/20 rounded-2xl shadow-xl p-4"
            >
              <div className="flex flex-col gap-4 text-white cursor-pointer">
                <div>
                  <FlipLink href="#about">About</FlipLink>
                </div>
                <div>
                  <FlipLink href="#experience">Experience</FlipLink>
                </div>
                <div>
                  <FlipLink href="#projects">Projects</FlipLink>
                </div>
                <div>
                <a href="https://drive.google.com/file/d/1cZ11uoaLXYW3HaQnrd4XH5BTcz02tYn-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;
