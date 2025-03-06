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
      <h2 id="skills" className="sub-topic">
        <GradientText
          animationSpeed={3}
          showBorder={false}
          className="sub-topic"
        >
          Skills
        </GradientText>
      </h2>
      <Skills />
      <h2 id="projects" className="sub-topic">
        <GradientText
          animationSpeed={3}
          showBorder={false}
          className="sub-topic"
        >
          Projects
        </GradientText>
      </h2>
      <Projects />
    </div>
  );
};

export default App;
