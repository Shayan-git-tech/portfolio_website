import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "./Context/CustomCursor";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { setTextCursor, setDefaultCursor } = useCursor();

  const textHoverProps = {
    onMouseEnter: setTextCursor,
    onMouseLeave: setDefaultCursor
  };

  return (
    <section className="bg-custom-radial dark:bg-custom-radial-dark text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl mx-auto">
        {/* <motion.h1
          className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          {...textHoverProps}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shayan</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          {...textHoverProps}
        >
          I build responsive, modern, and interactive web experiences.
        </motion.p> */}

        <motion.h2
          className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          {...textHoverProps}
        >
          Hello! 👋 I'm Shayan, a Developer
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          {...textHoverProps}
        >
          Designing with{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Precision
          </span>
          , Delivering with{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Impact
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-black/50 dark:bg-white/20 backdrop-blur-sm rounded-full text-white/70 dark:text-gray-100 font-medium transition-all hover:bg-white/20 hover:text-black"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

