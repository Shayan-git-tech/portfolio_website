import React, { lazy, Suspense } from "react"

const Hero = lazy(() => import("./Hero"))
const About = lazy(() => import("./About"))
const Projects = lazy(() => import("./Projects"))
const Footer = lazy(() => import("./Footer"))
const Experience = lazy(() => import("./Experience"))

export default function LazyRoutes() {
  return (
    <Suspense fallback={<div className="text-white grid items-center">Loading...</div>}>
    <main>
    <Hero />
  
  <section id="about">
    <About />
  </section>
  <section id="experience">
    <Experience />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <Footer />
</main>

    </Suspense>
  )
}
