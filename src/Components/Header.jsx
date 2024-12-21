import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#archive", label: "Archive" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="z-50 fixed inset-0 flex justify-center mt-5 px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between backdrop-blur-xl bg-white/60 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-full w-auto min-w-[280px] md:min-w-[50vw] max-w-[1000px] h-[55px] px-6 shadow-lg shadow-black/5"
      >
        {/* Logo or Title */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
        >
          Shayan K.
        </motion.div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-[65px] right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 min-w-[200px] backdrop-blur-xl bg-white/80 dark:bg-gray-900/80"
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
