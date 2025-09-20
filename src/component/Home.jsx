import React from "react";
import { Github, Instagram, Linkedin, Mail, Facebook } from "lucide-react";
import profilePic from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center h-auto text-white px-6 lg:px-12 lg:py-20 gap-6 md:p-18 md:gap-15 mt-16 sm:mt-20"
    >
      {/* Gradient Blobs
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse">ajjjjjjjjj</div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full  blur-[140px] animate-pulse">d,kfn'hhjjjj</div> */}

      {/* Overlay subtle grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div> */}

      {/* Left Content */}
      <div className="text-center mb-15  md:text-left md:p-3 max-w-xl relative z-10">
        <p className="text-lg text-indigo-400 mb-2"> Hi, I’m</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          Ajit Kumar
        </h1>
        <h2 className="mt-3 text-2xl sm:text-3xl text-gray-300">
          Full Stack Developer | Java Specialist
        </h2>
        <p className="mt-4 text-gray-400 md:text-2xl">
          I build modern, scalable, and user-friendly applications using
          <span className="text-indigo-400"> Java </span> and
          <span className="text-indigo-400"> MERN stack</span>. Passionate about
          creating digital solutions that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/project"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1GISI-eXaC7jM6xvKFcKGC0BWreaGkNtk/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-lg font-medium transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-5 justify-center md:justify-start">
          <a
            href="https://github.com/ajit6205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajitkumar2746/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:rajajit2746@gmail.com"
            className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://www.instagram.com/ajeetraj699/"
            target="_blank"
            className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100021517764212"
            target="_blank"
            className="text-gray-400 hover:text-white hover:bg-indigo-600 rounded-full transition"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex justify-center md:justify-end mb-10 md:mb-20 relative z-10">
        <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/30 ">
          <img
            src={profilePic}
            alt="Ajit Kumar"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
