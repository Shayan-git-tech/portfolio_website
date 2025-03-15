"use client"

import React, { useState, useEffect } from "react"
import { motion  } from "framer-motion"

// Tech stack with image paths to common tech logos
const techStack = [
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
    {
    name: "Framer Motion",
    image:
"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
 },
  {
    name: "WordPress",
    image: "https://www.svgrepo.com/show/452136/wordpress.svg",
  },
  {
    name: "Canva",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Wix",
    image: "https://www.svgrepo.com/show/306977/wix.svg",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" ,
  },
]

// Duplicate the items to create a seamless infinite loop
const duplicatedTechStack = [...techStack, ...techStack]

const TechStack = ({ TechRef}) => {
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerView = isMobile ? 2 : 4


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    if (typeof window !== "undefined") {
      checkMobile()

      // Add event listener
      window.addEventListener("resize", checkMobile)

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="py-16 bg-black font-matter" ref={TechRef}>
      <div className="w-screen mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-widest mb-2">SKILLS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">My Tech Stack</h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Slider Container */}
          <motion.div
            className="flex"
            animate={{
              x: [`0%`, `-${(techStack.length * 100) / itemsPerView}%`],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30, // Increased duration for more technologies
              ease: "linear",
            }}
     >
            {duplicatedTechStack.map((tech, index) => (
              <motion.div
                key={index}
                className={`flex-none w-1/${itemsPerView} px-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 h-full flex flex-col items-center justify-center transition-transform hover:scale-105 hover:bg-white/10">
                  {/* Using the original image with error handling */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={tech.image || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://via.placeholder.com/80?text=" + tech.name
                      }}
                    />
                  </div>
                  <p className="mt-4 text-gray-300 text-center font-medium">{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TechStack

