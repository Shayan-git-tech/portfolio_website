"use client";
import React, { useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Lazy load the Paragraph component
const Paragraph = lazy(() => import("./Paragraph"));

const About = () => {
  const value = useMemo(
    () =>
      "I blend the artistry of modern web development with cutting-edge technology to transform ideas into exceptional digital experiences.",
    []
  );

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20 md:py-32">
      <div className="max-w-[90rem] mx-auto">
        {/* Wrap Lazy Component in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
        <div className="overflow-hidden relative">
          <Paragraph value={value} />
          </div>
        </Suspense>
        <hr className="opacity-50" />
        <br />

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              Tomorrow&apos;s web experiences, today.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[0.4, 0.6, 0.8].map((delay, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay }}
                className="text-lg md:text-xl font-light leading-relaxed"
              >
                {[
                  "As a specialized front-end developer, I craft high-performance web applications using React, Tailwind CSS, and Framer Motion, delivering seamless user experiences that captivate and engage.",
                  "Since 2020, I've been recognized for creating innovative digital solutions across multiple platforms, including custom React applications, WordPress sites, and Wix designs that drive engagement and deliver results.",
                  "I collaborate with select clients each year, ensuring each project receives the dedicated attention and expertise it deserves to achieve exceptional outcomes.",
                ][index]}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                to="/projects"
                className="inline-block mt-8 text-lg border-b-2 border-white hover:border-gray-400 transition-colors"
              >
                View Projects →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
