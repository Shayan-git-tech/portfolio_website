'use client'

import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const navLinks = ['HOME', 'ABOUT', 'WORK', 'CONTACT', 'RESUME'];

  return (
    <footer className="bg-black text-white py-10 px-4 md:py-16 md:px-6">
      {/* Top Section */}
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.p className="text-sm md:text-lg mb-4" variants={fadeIn}>
            HAVE A PROJECT IN MIND ?
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 flex justify-center flex-wrap"
            variants={fadeIn}
          >
            {"LET'S WORK TOGETHER".split('').map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.button
            className="px-6 py-2 md:px-8 md:py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8" />

        {/* Main Footer Content */}
        <div className="w-full grid gap-6 md:grid-cols-3 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-bold"
          >
            Shayan K.
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to="/"
                className="text-sm md:text-xl hover:text-gray-300 transition-colors"
              >
                {link}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                to={href}
                className="hover:text-gray-300 transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            Powered by Shayan
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Style Guide
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Licensing
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">
                Use for Free
              </Link>
              <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
                Made in Framer
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
