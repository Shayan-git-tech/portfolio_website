"use client"
import React from "react"

import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useRef, useEffect, useState, useCallback, memo } from "react"
import spisakagency from '../Images/spisakagency.png';
import alfaisalracks from '../Images/alfaisalracks.png';
import dafl from '../Images/DAFL.png';
import locomotive from '../Images/locomotive.png';
import silencio from '../Images/silencio.png';

const Modal = memo(({ modal, projects }) => {
  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  const { active, index } = modal

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const containerControls = useAnimation()
  const cursorControls = useAnimation()
  const cursorLabelControls = useAnimation()

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    mouseX.set(clientX)
    mouseY.set(clientY)

    containerControls.start({
      left: clientX,
      top: clientY,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    })
    cursorControls.start({
      left: clientX,
      top: clientY,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    })
    cursorLabelControls.start({
      left: clientX,
      top: clientY,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    })
  }, [containerControls, cursorControls, cursorLabelControls, mouseX, mouseY])

  useEffect(() => {
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10)
    window.addEventListener("mousemove", debouncedHandleMouseMove)
    return () => window.removeEventListener("mousemove", debouncedHandleMouseMove)
  }, [handleMouseMove])

  return (
    <div >
    

      <motion.div
        
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{ left: mouseX, top: mouseY }}
        className="sm:block h-[350px] w-[400px] fixed bg-white overflow-hidden pointer-events-none flex items-center justify-center"
        >
        <motion.div
          style={{ top: `${index * -100}%` }}
          animate={{ top: `${index * -100}%` }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full absolute"
        >
          {projects.map((project, idx) => {
            const { src, color } = project
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${idx}`}
              >
                <img src={src} width={300} height={0} alt={src} loading="lazy" />
              </div>
            )
          })}
        </motion.div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{ left: mouseX, top: mouseY }}
        className="w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 text-white fixed z-20 flex items-center justify-center text-sm font-light pointer-events-none"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{ left: mouseX, top: mouseY }}
        className="w-40 h-40 rounded-full bg-transparent text-white fixed z-20 flex items-center justify-center text-sm font-light pointer-events-none"
      >
        View
      </motion.div>
    
    </div>
  )
})

const projects = [
  {
    title: "Spisak Agency",
    tool: "Website ‎ • ‎ Wix ‎ • ‎ Agency",
    href: "https://spisakagency.com/",
    src: spisakagency,
    color: "#ffd7c5",
  },
  {
    title: "Al-Faisal Racks",
    tool: "Website ‎ • ‎ Wordpress ‎ • ‎ Industry",
    href: "https://alfaisalracks.com/",
    src: alfaisalracks,
    color: "#ffe1a5",
  },
  {
    title: "The Wellness Brothers",
    tool: "Website ‎ • ‎ Wix ‎ • ‎ Health",
    href: "https://thewellnessbrothers.com/",
    src: locomotive,
    color: "#EFE8D3",
  },
  {
    title: "Khans Balti House",
    tool: "Website ‎ • ‎ Wordpress ‎ • ‎ Restaurant",
    href: "https://khansbaltihouse.ie",
    src: silencio,
    color: "#706D63",
  },
  {
    title: "DAFL",
    tool: "Website ‎ • ‎ Wix ‎ • ‎ Sports",
    href: "https://www.dubaifootball.com/",
    src: dafl,
    color: "#e0e7df",
  },
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

const Projects = ({ ProjectsRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black" ref={ProjectsRef} id="projects">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-xl sm:text-2xl mb-8 sm:mb-12 text-white pl-0 sm:pl-4">Projects</h2>

        <div className="space-y-[-1px]">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              className="block border-t-4 border-neutral-300 py-4 sm:py-6 md:py-8 group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 px-0 sm:px-4"
                animate={{
                  x: hoveredIndex === index ? 10 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => {
                  setModal({ active: true, index: index })
                }}
                onMouseLeave={() => {
                  setModal({ active: false, index: index })
                }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-gray-200 font-matter transition-colors duration-300 group-hover:text-gray-200">
                  {project.title}
                </h3>
                <span className="text-sm sm:text-base text-gray-500 font-light tracking-wider group-hover:text-gray-200 transition-colors whitespace-nowrap">
                  {project.tool}
                </span>
              </motion.div>

              <motion.div
                className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden"
                animate={{
                  x: hoveredIndex === index ? 5 : 0,
                  opacity: hoveredIndex === index ? 1 : 0.5,
                }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
          <div className="border-t-4 border-neutral-300" />
        </div>
        <Modal modal={modal} projects={projects} />
      </div>
    </section>
  )
}

export default Projects

function debounce(func, wait) {
  let timeout
  return function (...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
