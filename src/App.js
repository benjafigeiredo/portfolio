import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function App() {
  return (<main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Education />
    <Projects />
    <Skills />
    <Contact />
  </main>);
}
