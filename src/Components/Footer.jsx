"use client";
import React from "react";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useRevealText } from "./Context/RevealText";
import { useMemo } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

const Footer = () => {
  const { FlipLink } = useRevealText();

  const socialLinks = useMemo(
    () => [
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
    []
  );

  const navLinks = useMemo(
    () => ["HOME", "ABOUT", "WORK", "CONTACT", "RESUME"],
    []
  );

  return (
    <div
      className="relative h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full">
        <footer className="bg-black text-white flex flex-col justify-between px-4 sm:px-6 md:px-8 py-8 md:py-12 h-full w-full">
          <div className="w-full h-px bg-white/100 mb-8 sm:mb-12" />

          <div className="flex-1 flex items-center justify-center w-full mb-8 sm:mb-12">
            <div className="w-full mx-auto">
              <motion.div
                className="text-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.p
                  className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6"
                  variants={fadeIn}
                >
                  HAVE A PROJECT IN MIND ?
                </motion.p>

                <motion.h2
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7rem] font-bold mb-6 sm:mb-8 flex justify-center flex-wrap cursor-pointer leading-tight"
                  variants={fadeIn}
                >
                  <FlipLink>LET'S WORK TOGETHER</FlipLink>
                </motion.h2>

                <motion.button
                  className="px-6 py-6 sm:px-8 sm:py-8 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-px bg-white/80 mb-6 sm:mb-8" />

            <div className="w-full grid gap-6 md:grid-cols-3 items-center text-center md:text-left mb-6 sm:mb-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="text-lg sm:text-xl md:text-2xl font-bold"
              >
                Shayan K.
              </motion.div>

              <motion.nav
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
              >
                {navLinks.map((link) => (
                  <FlipLink key={link} href="/">
                    <Link
                      to="/"
                      className="text-sm sm:text-base hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </Link>
                  </FlipLink>
                ))}
              </motion.nav>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center md:justify-end gap-4 sm:gap-6"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    to={href}
                    className="hover:text-gray-300 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                ))}
              </motion.div>
            </div>

            <div className="w-full h-px bg-white/40 mb-6 sm:mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-3 md:mb-0"
              >
                Powered by Shayan
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                All Rights Reserved.
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
