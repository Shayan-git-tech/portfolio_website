import React, {lazy, forwardRef } from "react";
import { useSectionRef } from "./Context/SectionRefContext";
import "../App.css";


const Hero = lazy(() => import("./Hero"));
const AboutComponent = lazy(() => import("./About"));
const ProjectsComponent = lazy(() => import("./Projects"));
const Footer = lazy(() => import("./Footer"));
const ExperienceComponent = lazy(() => import("./Experience"));
const TechStackComponent = lazy(() => import("./TechStack"));

const TechStack = forwardRef((props, ref) => (
  <div ref={ref}>
    <TechStackComponent {...props} />
  </div>
));

const About = forwardRef(({ ProjectsRef, ...props }, ref) => (
  <div ref={ref}>
    <AboutComponent ProjectsRef={ProjectsRef} {...props} />
  </div>
));


const Experience = forwardRef((props, ref) => (
  <div ref={ref}>
    <ExperienceComponent {...props} />
  </div>
));

const Projects = forwardRef((props, ref) => (
  <div ref={ref}>
    <ProjectsComponent {...props} />
  </div>
));

export default function LazyRoutes() {
  const { AboutRef, ExperienceRef, ProjectsRef } = useSectionRef();

  return (
    <main>
      <Hero />
      <TechStack />
      <About ref={AboutRef} ProjectsRef={ProjectsRef} />
      <Experience ref={ExperienceRef} />
      <Projects ref={ProjectsRef} />
      <Footer />
    </main>
  );
}
