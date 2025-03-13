import React from "react"
import { motion } from "framer-motion"

export default function FuzzyOverlay() {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 0.6,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
      className="bg-black-noise pointer-events-none fixed -inset-[100%] opacity-[15%] z-10"
    />
  )
}
