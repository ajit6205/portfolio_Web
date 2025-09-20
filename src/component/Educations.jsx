"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const ACCENT = "#a78bfa"; // violet accent for icons

function EducationItem({ text }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2
        className="mt-0.5 h-4 w-4 text-purple-400 animate-pulse"
        style={{ color: ACCENT }}
      />
      <span className="text-sm text-neutral-300">{text}</span>
    </li>
  );
}

const Educations = ({ education }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl  backdrop-blur-xl shadow-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20">
      <div className="space-y-2 pb-2">
        <div className="text-lg font-bold text-purple-300 tracking-wide">
          {education.degree}
        </div>
        <div className="text-sm text-neutral-400">
          {education.institution} | {education.year}
        </div>
        {education.marks && (
          <div className="text-sm text-neutral-300">
            🎯 Marks/Grade:{" "}
            <span className="text-purple-400 font-semibold">
              {education.marks}
            </span>
          </div>
        )}
      </div>

      {education.description && education.description.length > 0 && (
        <ul className="mt-4 grid gap-2">
          {education.description.map((desc, i) => (
            <EducationItem key={i} text={desc} />
          ))}
        </ul>
      )}

      {/* Optional footer for future buttons */}
      <div className="mt-4 flex justify-end">
        {/* <button className="px-3 py-1 text-xs rounded-md border border-purple-400 text-purple-300 hover:bg-purple-500/20 transition">
          View Certificate
        </button> */}
      </div>
    </div>
  );
};

export { Educations };

const myEducation = [
  {
    degree: "MCA - Master of Computer Application",
    institution: "C.G.C Jhanjeri College",
    year: "2023-2025",
    marks: "77.4%",
    description: [
      "Major subjects: Java, Database, Web Development",
      "Completed projects on full-stack development",
      "Active in coding clubs and hackathons",
    ],
  },
  {
    degree: "BCA - Bachelor of Computer Applications",
    institution: "S.P.M College",
    year: "2021-2024",
    marks: "75%",
    description: [
      "Major subjects: Java, Database, Web Development",
      "Completed projects on full-stack development",
      "Active in coding clubs and hackathons",
    ],
  },
  {
    degree: "12th Standard - Science",
    institution: "H/S Korari Jhodhan Bigha, Patna",
    year: "2016-2017",
    marks: "75%",
    description: ["Physics, Chemistry, Math", "School topper in final year"],
  },
  {
    degree: "High School - Science",
    institution: "XYZ School",
    year: "2019-2021",
    marks: "82%",
    description: ["Physics, Chemistry, Math", "School topper in final year"],
  },
];

export default function EducationSection() {
  return (
    <section className="relative text-white container mx-auto px-4 py-12">
      {/* subtle background gradient */}
      <div className="absolute inset-0 " />

      <div className="flex justify-center pt-10">
        <h2 className="text-3xl font-extrabold mb-12 inline-flex text-center rounded-full bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 px-6 py-4 text-purple-300 shadow-md shadow-purple-800/30">
          My Education
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {myEducation.map((edu, i) => (
          <Educations key={i} education={edu} />
        ))}
      </div>
    </section>
  );
}
