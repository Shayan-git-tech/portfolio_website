import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from "./Context/DarkMode";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeItem, setActiveItem] = useState('Projects');

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#archive", label: "Archive" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="z-50 fixed inset-x-0 top-0 flex justify-center mt-5 px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between backdrop-blur-xl bg-white/60 dark:bg-black/60 border border-white/20 dark:border-white/10 rounded-full w-full max-w-[1000px] h-[55px] px-4 sm:px-6 shadow-lg shadow-black/5"
      >
        {/* Logo or Title */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
        >
          Shayan K.
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="relative">
            {/* Ambient glow effect */}
            
            
            {/* Main navigation container */}
            <motion.div 
              className="relative flex items-center justify-center gap-6 px-6 py-2 rounded-full"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative px-4 py-1 rounded-full transition-all duration-200
                    ${activeItem === item.label 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-gray-200'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active/Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-200
                      ${activeItem === item.label ? 'opacity-100' : 'hover:opacity-70'}
                    `}
                    style={{
                      background: 'radial-gradient(circle at center, rgba(99,154,255,0.1) 0%, rgba(99,154,255,0) 100%)',
                      boxShadow: `
                        0 0 2px 0 rgba(99,154,255,0.5),
                        inset 0 0 2px 0 rgba(99,154,255,0.5)
                      `
                    }}
                  />
                  
                  {/* Active item top border */}
                  {activeItem === item.label && (
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        boxShadow: '0 0 4px rgba(99,154,255,0.5)'
                      }}
                    />
                  )}
                  
                  {/* Text content */}
                  <span className="relative z-10 text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden flex items-center justify-center p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-[65px] left-4 right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;

