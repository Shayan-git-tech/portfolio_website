import React from "react";

function ExperienceSection({ ExperienceRef }) {
  const experienceData = [
    {
      id: 1,
      role: "WordPress Developer",
      company: "Tenz Soft",
      duration: "1 Year",
      description:
        "Developed and maintained WordPress websites, ensuring responsive design and optimal performance. Gained hands-on experience in on-page SEO and website optimization.",
    },
    {
      id: 2,
      role: "Freelance Wix Designer",
      company: "Fiverr",
      duration: "2+ Years",
      description:
        "Designed and customized Wix websites for diverse clients, focusing on user experience and branding. Delivered visually appealing, conversion-driven websites tailored to client needs.",
    },
    {
      id: 3,
      role: "Front-End Developer",
      company: "Self-Taught",
      duration: "Ongoing",
      description:
        "Continuously learning and building projects using modern frontend technologies like React, Tailwind CSS, and Framer Motion. Passionate about creating interactive and engaging web experiences.",
    },
  ];

  return (
    <section ref={ExperienceRef} className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-widest mb-2">
            MY JOURNEY
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-matter">
            Experience
          </h2>
        </div>

        {/* Simpler implementation with margin offsets */}
        <div className="space-y-16 md:space-y-24">
          {experienceData.map((experience, i) => (
            <div
              key={`exp_${i}`}
              className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.01] hover:border-gray-700"
              style={{
                marginLeft: `${i * 2}rem`,
                marginRight: `${(experienceData.length - i - 1) * 2}rem`,
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex flex-col items-start gap-1 md:w-1/4">
                  <span className="text-4xl font-bold text-white/20">
                    {experience.id.toString().padStart(2, "0")}
                  </span>
                  <p className="text-gray-400 text-lg">{experience.duration}</p>
                </div>

                <div className="flex flex-col gap-4 md:w-3/4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-xl text-gray-300">{experience.company}</p>
                  <p className="text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Abstract Icon */}
                  <div className="flex items-center space-x-1 mt-4">
                    <div className="w-12 h-1.5 bg-[#4f5653] rounded-full"></div>
                    <div className="w-8 h-1.5 bg-[#4f5653] rounded-full"></div>
                    <div className="w-4 h-1.5 bg-[#4f5653] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
