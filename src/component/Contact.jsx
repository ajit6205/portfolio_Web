import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section className="min-h-screen  text-white py-20 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-400 mt-3">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex justify-center items-center  px-4">
          <div className="grid md:grid-cols-2 gap-20 max-w-4xl w-full mx-auto">
            {/* Left: Form */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 transition rounded-lg py-3 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center space-y-6  text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Mail className="text-indigo-400" />
                <p>rajajit2746@gmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Phone className="text-indigo-400" />
                <p>+91 6205384086</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <MapPin className="text-indigo-400" />
                <p>Bihar, India</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center md:justify-start mt-6">
                <a
                  href="https://github.com/ajit6205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajitkumar2746/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/ajeetraj699/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Instagram />
                </a>
                  <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100021517764212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
