import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugin development for tailored solutions.",
    },
    {
      id: 2,
      title: "Wix Website Design",
      description: "Professional Wix website design services for businesses and individuals.",
    },
    {
      id: 3,
      title: "Front-end Development",
      description: "Building responsive and interactive front-end applications with HTML, CSS, and React.",
    },
    {
      id: 4,
      title: "Tailwind CSS Integration",
      description: "Efficiently integrating Tailwind CSS for rapid and customizable styling.",
    },
    {
      id: 5,
      title: "Framer Motion Animations",
      description: "Enhancing user experience with smooth animations using Framer Motion.",
    },
  ]);

  return (
    <section id="services" className="text-white bg-black py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
