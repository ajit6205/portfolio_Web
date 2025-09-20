import React from "react";
import { Github, Instagram, Linkedin, Mail, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-8 px-6 sm:px-12 sm:pt-10 md:p-20 ">
      {/* Gradient blobs */}
      {/* <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-pink-500/20 blur-[140px] animate-pulse"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:p-2 md:gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="pb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 ">
              Ajit Kumar
            </h2>
            <p className="text-gray-400 text-sm sm:text-base ">
              Full Stack Developer | Java & MERN Stack Specialist
            </p>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            📧{" "}
            <a
              href="mailto:rajajit2746@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              rajajit2746@gmail.com
            </a>{" "}
            | 📍 Bihar, India
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            📧{" "}
            <a
              href="mailto:rajajit4086@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              rajajit4086@gmail.com
            </a>
          </p>
        </div>

        {/* Center Section - Quick Links (vertically centered) */}
        <div className="flex flex-wrap justify-center md:flex-col md:justify-center gap-1 md:gap-2 text-gray-300 text-sm md:text-base">
          <a href="/" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="/project" className="hover:text-indigo-400 transition">
            Projects
          </a>
          <a href="/skill" className="hover:text-indigo-400 transition">
            Skills
          </a>
          <a href="/achievement" className="hover:text-indigo-400 transition">
            Achievements
          </a>
          <a href="/contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 ">
          <a
            href="https://github.com/ajit6205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900  transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajitkumar2746/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:kashuabhi02@gmail.com"
            className="hover:text-blue-900 transition"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            <Twitter size={28} />
          </a>
          <a
            href="https://www.instagram.com/ajeetraj699/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100021517764212"
            target="_blank"
            className="hover:text-blue-900 transition"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm sm:text-base">
        © 2025 Ajit Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
