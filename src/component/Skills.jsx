// import React from "react";
// import { ArrowRight, Github } from "lucide-react";

// const Skills = () => {
//   return (
//     <div>
//       <section className="bg-gray-700 text-white py-16 sm:py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center text-center">
//             {/* Badge */}
//             <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 px-4 py-2 text-sm font-medium text-purple-300">
//               Our Skills
//             </div>

//             {/* Heading */}
//             <h2 className="mb-6 pb-2 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl md:text-6xl">
//               Over 10+ Programming Skills
//             </h2>

//             {/* Subtitle */}
//             <p className="mb-12 max-w-2xl text-lg text-neutral-400 sm:text-xl">
//               Helping you to protect all your digital activity and data
//             </p>

//             {/* Logo Grid */}
//             <div className="mb-12 w-full max-w-5xl">
//               {/* Desktop & Tablet Grid */}
//               <div className="hidden sm:grid gap-4 sm:grid-cols-3 lg:grid-cols-5 ">
//                 {/* Row 1 */}
//                 <div className="col-span-2 flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-8 py-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       HTML & CSS
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     {/* <div className="h-6 w-6 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600"></div> */}{" "}
//                     <span className="text-xl font-bold tracking-[0.1em] text-neutral-300">
//                       Node JS
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-span-2 flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-8 py-6 ">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       JavaScript
//                     </span>
//                   </div>
//                 </div>

//                 {/* Row 2 */}
//                 <div className="flex items-center justify-center  rounded-2xl bg-gray-800/30 backdrop-blur p-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.2em] text-neutral-300">
//                       React Js
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center  rounded-2xl bg-gray-800/30 backdrop-blur px-6 py-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.2em] text-neutral-300">
//                       MongoDb
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.1em] text-neutral-300">
//                       MySql
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-6 py-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.1em] text-neutral-300">
//                       Flutter
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-6 py-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.1em] text-neutral-300">
//                       TailWind
//                     </span>
//                   </div>
//                 </div>

//                 {/* Row 3 */}

//                 <div className="col-span-2 flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-8 py-6">
//                   <div className="flex items-center gap-2 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <div className="h-6 w-6 rounded-full border-2 border-neutral-400 flex items-center justify-center">
//                       <div className="text-xs text-neutral-300">
//                         <Github size={14} />
//                       </div>
//                     </div>
//                     <br />
//                     <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                       <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                         Github
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-wide text-neutral-300">
//                       Postman
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-span-2 flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur px-8 py-6">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 hover:bg-gray-700/40 hover:scale-105 hover:shadow-lg transition-all duration-300">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       BootStrap
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile Stack */}
//               <div className="flex flex-col gap-4 sm:hidden ">
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4 ">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1 ">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       HTML & CSS
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4 ">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     {/* <div className="h-6 w-6 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600"></div> */}{" "}
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       Node JS
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       JavaScript
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       React Js
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       MongoDB
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       MySql
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       Flutter
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       TailWind
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="flex items-center gap-2">
//                     <div className="h-6 w-6 rounded-full border-2 border-neutral-400 flex items-center justify-center">
//                       <div className="text-xs text-neutral-300">
//                         <Github size={14} />
//                       </div>
//                     </div>
//                     <br />
//                     <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                       <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                         Github
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.4em] text-neutral-300">
//                       Git
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-4">
//                   <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
//                     <span className="text-xl font-bold tracking-[0.3em] text-neutral-300">
//                       BootStrap
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center rounded-2xl bg-gray-800/30 backdrop-blur p-8">
//                   <div className="grid grid-cols-2 gap-2">
//                     {[...Array(4)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="h-3 w-3 rounded-sm bg-green-400"
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button className="group flex items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105">
//               Try now for free
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import { ArrowRight } from "lucide-react";

const Skills = () => {
  return (
    <div>
      <section className="relative overflow-hidden  text-white py-16 sm:py-20">
        {/* Gradient Blobs */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-pink-500/20 blur-[140px] animate-pulse"></div> */}

        {/* Overlay subtle grid lines */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-600/10 border border-purple-500/30 px-5 py-2 text-sm font-medium text-purple-300 shadow-md shadow-purple-500/20">
              🚀 Our Skills
            </div>

            {/* Heading */}
            <h2 className="mb-6 pb-2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl md:text-6xl tracking-wide">
              Over 10+ Programming Skills
            </h2>

            {/* Subtitle */}
            <p className="mb-12 max-w-2xl text-lg text-neutral-400 sm:text-xl">
              Empowering your digital journey with modern development tools and
              frameworks
            </p>

            {/* Logo Grid */}
            <div className="mb-12 w-full max-w-5xl">
              <div className="hidden sm:grid md:p-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 justify-items-center">
                {[
                  "HTML & CSS",
                  "Node JS",
                  "JavaScript",
                  "React JS",
                  "MongoDB",
                  "MySQL",
                  "Flutter",
                  "Tailwind",
                  "GitHub",
                  "Git",
                  "Postman",
                  "Bootstrap",
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-2xl bg-gray-800/40 backdrop-blur-md px-6 py-6 border border-gray-700/50 hover:border-purple-400/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                  >
                    <span className="text-lg font-bold tracking-wide text-neutral-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Stack */}
              <div className="grid grid-cols-3 gap-4 sm:hidden">
                {[
                  "HTML & CSS",
                  "Node JS",
                  "JavaScript",
                  "React JS",
                  "MongoDB",
                  "MySQL",
                  "Flutter",
                  "Tailwind",
                  "Git",
                  "GitHub",
                  "Postman",
                  "Bootstrap",
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-center rounded-2xl 
                 bg-gradient-to-r from-purple-600/20 via-gray-800/40 to-purple-900/20
                 backdrop-blur-md p-3 border border-purple-500/30
                 shadow-md shadow-purple-500/10 
                 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 "
                  >
                    {/* Glow border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-40 group-hover:opacity-60 transition"></div>

                    <span className="relative text-sm font-bold tracking-wide text-purple-200 drop-shadow-md">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group flex items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110">
              Try now for free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
