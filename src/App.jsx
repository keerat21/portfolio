import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import "./App.scss";
import { useRef } from "react";
import Projects from "./components/Projects/Projects";
import Waves from "./components/Waves/Waves";
import GradientText from "./components/GradientText/GradientText";

const App = () => {
  const speedButtonRef = useRef(null);
  return (
    <div className="app">
      <Waves />
      <Navbar />
      <Hero />
      <h2 className="sub-topic" id="skills">Skills</h2>
      <Skills />
      <h2 className="sub-topic" id="projects">Projects</h2>
      <Projects />
    </div>
  );
};

export default App;
