import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Experience Data
const experienceData = [
    { role: "WordPress Developer", company: "Tenz Soft", duration: "1 Year" },
    { role: "Freelance Wix Developer", company: "Various Clients", duration: "2+ Years" },
    { role: "Frontend Developer", company: "Self-Taught", duration: "Ongoing" },
];

// Skills Data
const skillsData = [
    { category: "Frontend Development", tools: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "CSS Grid & Flexbox"] },
    { category: "CMS & Web Builders", tools: ["WordPress", "Wix", "Elementor", "WooCommerce"] },
    { category: "Other Tools", tools: ["Git & GitHub", "REST APIs", "SEO Optimization"] },
];

const Experience = () => {
    const experience = useMemo(() => experienceData, []);
    const skills = useMemo(() => skillsData, []);

    const experienceElements = useMemo(() => (
        experience.map((exp, index) => (
            <motion.div
                key={index}
                className="bg-[#1a1a1a] p-5 rounded-xl mb-6"
                whileHover={{ scale: 1.02 }}
            >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
            </motion.div>
        ))
    ), [experience]);

    const skillsElements = useMemo(() => (
        skills.map((skill, index) => (
            <motion.div
                key={index}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <h3 className="text-2xl font-semibold">{skill.category}</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                    {skill.tools.map((tool, i) => (
                        <span key={i} className="bg-[#1a1a1a] px-4 py-2 rounded-full text-sm">
                            {tool}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))
    ), [skills]);

    return (
        <div className="relative flex flex-col md:flex-row h-full bg-[#0e0e0e] text-white px-6 md:px-12 py-12">
            {/* Sticky Left Section */}
            <motion.div
                className="md:w-1/3 lg:w-1/4 sticky top-0 h-screen flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
                <p className="text-lg md:text-xl text-gray-400 mt-2">Professional Journey</p>
            </motion.div>

            {/* Scrollable Right Section */}
            <motion.div className="md:w-2/3 lg:w-3/4 h-full md:pl-12 pt-10 md:pt-0 overflow-y-scroll scrollbar-hide pr-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Experience Section */}
                <div className="mb-16">
                    {experienceElements}
                </div>

                {/* Skills Section */}
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Skills & Tools
                </motion.h2>

                {skillsElements}
            </motion.div>
        </div>
    );
};

export default Experience;
