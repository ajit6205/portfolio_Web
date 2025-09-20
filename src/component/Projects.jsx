import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import project1a from "../assets/images/project1a.jpg";
import project1b from "../assets/images/project1b.jpg";
import project2a from "../assets/images/project2a.png";
import project2b from "../assets/images/project2b.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      tag: "FULL STACK",
      title: "Virtual Bus Conductor App",
      desc: "Automating ticketing with QR-based payments, real-time tracking, and passenger data analytics.",
      rating: 4.8,
      images: [project1a, project1b],
    },
    {
      id: 2,
      tag: "WEB APP",
      title: "LazyCrazy Software",
      desc: "A secure loan application and management portal with client dashboards and admin control.",
      rating: 4.9,
      images: [project2a, project2b],
    },
    {
      id: 3,
      tag: "MOBILE APP",
      title: "Food Delivery App",
      desc: "A React Native food ordering app with real-time tracking, payments and push notifications.",
      rating: 4.7,
      images: ["/images/project3a.jpg", "/images/project3b.jpg"],
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-14 sm:py-20">
      <h2 className="mb-12 pb-5 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
        My Projects
      </h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={0} // 👈 no extra space
        pagination={{ clickable: true }}
        className="overflow-hidden"
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!m-0 !p-0">
            <div
              className="group relative w-full max-w-[460px] 
                      h-[620px] sm:h-[640px] md:h-[660px] 
                      border border-white/10 bg-gradient-to-br 
                      from-gray-900/95 via-gray-800/90 to-gray-900/95 
                      backdrop-blur-xl rounded-3xl shadow-xl 
                      overflow-hidden hover:shadow-purple-500/40 
                      hover:scale-[1.02] transition-transform duration-500 mx-auto"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                <div>
                  <p className="text-[11px] tracking-widest text-purple-300 uppercase font-semibold">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-2 gap-1 mt-5">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video bg-gray-800/30 rounded-lg border border-white/10 shadow-md overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${project.title}-${i}`}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-lime-400 drop-shadow-md">
                    {project.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 transition-colors duration-300 ${
                          i < Math.round(project.rating)
                            ? "fill-lime-400 text-lime-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
