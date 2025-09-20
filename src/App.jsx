import "./index.css";
import { Router, Routes, Route } from "react-router-dom";
import SideHeader from "./component/SideHeader";
import Educations from "./component/Educations";
import Skill from "./component/Skills";
import Projects from "./component/Projects";
import About from "./component/About";
import Home from "./component/Home";
import Achievements from "./component/Achievements";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

const App = () => {
  return (
    <>
      <SideHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievements />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
