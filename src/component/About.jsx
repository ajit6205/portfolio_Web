import React from "react";
import { Briefcase, GraduationCap } from "lucide-react"; // 👈 Work & Education icons
import profilePic from "../assets/images/profile.jpg"; // apni image ka path

const About = () => {
  return (
    <section className="w-full  text-white py-16 px-6 lg:px-20" id="about">
      {/* 🔹 Tagline Banner */}
      <div className="text-center mb-12 p-5">
        <p className="text-indigo-400 text-bold uppercase tracking-widest inline-flex items-center rounded-full bg-purple-600/10 border border-purple-500/30 p-3 text-sm font-medium  shadow-md shadow-purple-500/20">
          About Me
        </p>
        <h2 className="text-4xl pt-4font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg p-3">
          Turning Ideas into Code
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
          A passionate developer who loves building impactful software and creating 
          smooth user experiences with modern technologies.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="md:pl-[1.3em] ">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Who am I?</h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hi, I’m <span className="font-semibold text-white">Ajit Choudhary</span>, 
            a <span className="text-indigo-400">Full Stack Developer</span> with 1 year of professional 
            experience at Infosys. I specialize in Java and the MERN stack, building 
            scalable and user-friendly applications. 
            My goal is to design technology that makes life easier.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Java",
              "React.js",
              "Node.js",
              "MongoDB",
              "SQL",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind"
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/40"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1GISI-eXaC7jM6xvKFcKGC0BWreaGkNtk/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/30">
            <img
              src={profilePic}
              alt="Ajit Choudhary"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      
      {/* </div> */}
    </section>
  );
};

export default About;
