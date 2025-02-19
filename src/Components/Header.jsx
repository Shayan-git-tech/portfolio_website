"use client"

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRevealText } from "./Context/RevealText";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#archive", label: "Archive" },
  { href: "#about", label: "About" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Projects");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { FlipLink } = useRevealText();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  });

  const handleItemClick = useCallback((label) => {
    setActiveItem(label);
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const headerVariants = useMemo(
    () => ({
      visible: { y: 0 },
      hidden: { y: -100 },
    }),
    []
  );

  const headerTransition = useMemo(
    () => ({
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.3,
    }),
    []
  );

  return (
    <motion.header
      className="z-50 fixed inset-x-0 top-0 flex justify-center mt-5 px-4"
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      transition={headerTransition}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between backdrop-blur-xl bg-black/60 border border-white/20 rounded-full w-full max-w-[1000px] h-[55px] px-4 sm:px-6 shadow-lg shadow-black/5"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent"
        >
          Shayan K.
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="relative">
            <div className="relative flex items-center justify-center gap-10 text-white px-6 py-2 rounded-full cursor-pointer">
              {navItems.map((item) => (
                <FlipLink
                  key={item.href}
                  href={item.href}
                  isActive={activeItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                </FlipLink>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="md:hidden flex items-center justify-center p-2 ml-2 rounded-full bg-gray-400 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 transition-colors"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {menuOpen && <MobileMenu FlipLink={FlipLink} navItems={navItems} onItemClick={handleItemClick} />}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

const MobileMenu = React.memo(({ FlipLink, navItems, onItemClick }) => (
  <motion.nav
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="md:hidden absolute top-[65px] left-4 right-4 backdrop-blur-xl bg-black/60 border border-white/20 rounded-2xl shadow-xl p-4"
  >
    <div className="relative flex flex-col gap-4 text-white cursor-pointer">
      {navItems.map((item) => (
        <FlipLink
          key={item.href}
          href={item.href}
          onClick={() => onItemClick(item.label)}
        >
          {item.label}
        </FlipLink>
      ))}
    </div>
  </motion.nav>
));

export default Header;