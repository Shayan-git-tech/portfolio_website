"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image1 from "../Images/4.jpg"
import Image2 from "../Images/5.jpg"
import Image3 from "../Images/6.jpg"

export default function ExampleContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mainControls = useAnimation()
  const imageControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      imageControls.start("visible")
    }
  }, [isInView, mainControls, imageControls])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  }

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 p-4 sm:p-6 md:p-8 text-white overflow-hidden"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-loose max-w-[1400px] leading-tight"
        initial="hidden"
        animate={mainControls}
        variants={textVariants}
      >
        Merging technical expertise
        <motion.span
          className="mx-2 sm:mx-3 inline-block "
          variants={imageVariants}
          custom={0}
          initial="hidden"
          animate={imageControls}
        >
          <img
            src={Image1 || "/placeholder.svg"}
            alt="image1"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-12 sm:h-14 md:h-16 lg:h-20 rounded-[50px] inline-block border border-gray-600 object-cover"
          />
        </motion.span>
        with design
        <motion.span
          className="mx-2 sm:mx-3 my-2 inline-block "
          variants={imageVariants}
          custom={1}
          initial="hidden"
          animate={imageControls}
        >
          <img
            src={Image2 || "/placeholder.svg"}
            alt="image2"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-12 sm:h-14 md:h-16 lg:h-20 rounded-[50px] inline-block border border-gray-600 object-cover"
          />
        </motion.span>
        finesse to create
        <span className="font-instrument italic mx-2 sm:mx-3 inline-block font-thin opacity-70">web experiences</span>
        <motion.span
          className="mx-2 sm:mx-3 inline-block "
          variants={imageVariants}
          custom={2}
          initial="hidden"
          animate={imageControls}
        >
          <img
            src={Image3 || "/placeholder.svg"}
            alt="image3"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-12 sm:h-14 md:h-16 lg:h-20 rounded-[50px] inline-block border border-gray-600 object-cover"
          />
        </motion.span>
        that leave lasting impressions.
      </motion.h1>
    </div>
  )
}

