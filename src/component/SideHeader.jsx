import React from "react";
import portfolio from "../assets/images/portfolio.svg"
import {
  Menu,
  Briefcase,
  Info,
  CodeSquare,
  BriefcaseBusiness,
  GraduationCap,
  Award,
} from "lucide-react";

const SideHeader = () => {
  const links = [
    { href: "/", label: "Home", icon: Briefcase },
    { href: "/skill", label: "Skills", icon: CodeSquare },
    { href: "/project", label: "Projects", icon: BriefcaseBusiness },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/achievement", label: "Achievements", icon: Award },
    { href: "/about", label: "About Me", icon: Info },
  ];
  return (
    <div>
      <header className="sticky top-0 z-50 p-1 bg-transparent">
        <div className="container mx-auto max-w-5xl h-3 ">
          <div className="flex h-18 items-center justify-between px-6 rounded-full bg-gray-800/20 backdrop-blur-lg border border-gray-800 md:p-7 md:mt-8">
            {/* Brand Logo */}
            <a href="/" className="flex items-center gap-1.5">
              <img
                src={portfolio}
                alt="Skitbit logo"
                className="h-5 w-5"
              />
              <span className="font-semibold tracking-wide text-white">
                PortFolio
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-purple-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="/contact"
                className="bg-lime-500 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
              >
                Chat With Us
              </a>
            </div>

            {/* Mobile Nav (Dropdown Menu) */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="list-none cursor-pointer flex items-center justify-center border border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800 rounded-lg w-10 h-10">
                  <Menu className="h-5 w-5" />
                </summary>

                <div className="absolute right-0 mt-2 w-64 rounded-lg bg-gray-900 border border-gray-700 shadow-lg flex flex-col">
                  {/* Brand Header */}
                  <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                    <img
                      src={portfolio}
                      alt="Skitbit logo"
                      className="h-6 w-6"
                    />
                    <span className="font-semibold tracking-wide text-white text-lg">
                      PortFolio
                    </span>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 hover:text-purple-300 transition-colors"
                      >
                        <l.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{l.label}</span>
                      </a>
                    ))}
                  </nav>

                  {/* CTA Button */}
                  <div className="mt-auto border-t border-gray-800 p-4">
                    <a
                      href="/contact"
                      className="w-full block text-center bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                    >
                      Chat With Us
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SideHeader;
