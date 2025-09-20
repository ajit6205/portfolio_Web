
import logo01 from "../assets/logos/logo01.svg";
import logo02 from "../assets/logos/logo02.svg";
import logo03 from "../assets/logos/logo03.svg";
import logo04 from "../assets/logos/logo04.svg";
import logo05 from "../assets/logos/logo05.svg";
import logo06 from "../assets/logos/logo06.svg";
import logo07 from "../assets/logos/logo07.svg";
import logo08 from "../assets/logos/logo08.svg";
import logo09 from "../assets/logos/logo09.svg";
import logo010 from "../assets/logos/logo 010.svg";
import logo011 from "../assets/logos/logo011.svg";

const Social_media = () => {
    const logos = [
    { src : logo01,},
    { src : logo02,},
    { src : logo03,},
    { src : logo04,},
    { src : logo05,},
    { src : logo06,},
    { src : logo07, link : "https://www.linkedin.com/in/ajitkumar2746/"},
    { src : logo08,},
    { src : logo09,},
    { src : logo010,},
    { src : logo011,}
  ];

  const handleClick  = (url)=>{
        window.open(url, "_blank");
        

    };
  return (
    
    <>
      <section className="self-stretch py-16 flex flex-col justify-center items-center gap-8 overflow-hidden">
        <div className="text-center text-gray-400 text-sm font-bold leading-tight">
          <h1>Trusted by fast-growing startups</h1>
        </div>
        <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {logos.map((logo, i) => (
            <img 
              key={i}
              src={logo.src}
              alt={`logo0${i + 1}`}
              width={150}
              height={80}
              className="w-full max-w-[80px] h-auto object-contain grayscale opacity-80"
              onClick={() => logo.link && handleClick(logo.link)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Social_media;
