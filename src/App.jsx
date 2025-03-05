import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import "./App.scss";
import { useRef } from "react";
import Projects from "./components/Projects/Projects";
import Waves from "./components/Waves/Waves";
import GradientText from "./components/GradientText/GradientText";
import GlitchText from './components/GlitchText/GlitchText';

const App = () => {
  const speedButtonRef = useRef(null);
  return (
    <div className="app">
      <Waves />
      <Navbar />
      <Hero />
      <h2 className="sub-topic" id="skills"><GlitchText
        speed={1.7}
        enableShadows={true}
        enableOnHover={false}
        className='custom-class'
      >
        Skills
      </GlitchText></h2>
      <Skills />
      <h2 className="sub-topic" id="projects"><GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={false}
        className='custom-class'
      >
        Projects
      </GlitchText></h2>
      <Projects />
    </div>
  );
};

export default App;
