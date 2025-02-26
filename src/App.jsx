import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
// import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;