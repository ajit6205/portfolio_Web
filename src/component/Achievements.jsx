import React from "react";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Hackathon 2023 – Virtual Bus Service",
    desc: "Built a full-stack website for real-time bus tracking and automated ticketing, focusing on passenger experience, efficiency, and data analytics.",
  },
  {
    title: "Ideathon 2024 – AI-enabled Library Management",
    desc: "Proposed a smart library system with automated cataloging and predictive analytics for book availability and borrowing trends.",
  },
  {
    title: "Web Development Projects – Bharat Intern",
    desc: "Developed blog website, Netflix homepage clone, and weather app using MERN stack and Java, gaining hands-on full-stack experience.",
  },
  {
    title: "Machine Learning Internship – TechnoHacks",
    desc: "Worked on ML models and data preprocessing to understand applied machine learning workflows.",
  },
  {
    title: "Professional Recognition – Infosys",
    desc: "Contributed to enterprise-level Java applications, receiving praise for problem-solving and efficient coding.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative  text-white py-16 sm:py-20 px-6 lg:px-20"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/30 text-indigo-400 font-semibold text-sm tracking-widest shadow-md shadow-purple-500/20">
          🏆 Achievements
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          What I’ve Accomplished
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Key milestones, competitions, and projects that showcase my skills and dedication.
        </p>
      </div>

      {/* Achievements Timeline */}
      <div className="max-w-5xl mx-auto space-y-10 relative">
        {achievements.map((achieve, index) => (
          <div key={index} className="relative pl-10">
            {/* Dot & Line */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Trophy size={16} className="text-white" />
            </div>
            <div
              className={`absolute left-2 top-6 w-1 h-full bg-indigo-600/30 ${
                index === achievements.length - 1 ? "hidden" : ""
              }`}
            ></div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {achieve.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {achieve.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
