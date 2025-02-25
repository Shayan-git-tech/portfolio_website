"use client";
import { motion } from "framer-motion";
import React from "react";

export default function PageTransition() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <motion.div
        id="banner-1"
        className="min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      />
      <motion.div
        id="banner-2"
        className="min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          delay: 0.2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        id="banner-3"
        className="min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          delay: 0.4,
          ease: "easeInOut",
        }}
      />
      <motion.div
        id="banner-4"
        className="min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 1.5,
          times: [0, 0.5, 1],
          delay: 0.6,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}