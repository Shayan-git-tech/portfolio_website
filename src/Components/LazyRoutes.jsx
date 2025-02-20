"use client";

import React, { lazy, Suspense } from "react";
import "../App.css";

const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Footer = lazy(() => import("./Footer"));
const Experience = lazy(() => import("./Experience"));

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div className="text-white grid items-center">Loading...</div>}>
        <main>
          <Hero />
            <About />
            <Experience />
            <Projects />
         
            <Footer />
        </main>
      </Suspense>
    </>
  );
}
