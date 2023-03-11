import React from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80 ">
      <title>Saad's Portfolio</title>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="education" className="snap-center">
        <Education />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer grayscale hover:grayscale-0">
          <div className="flex items-center justify-end px-10 ">
            <img
              className="h-10 w-10 rounded-full filter  "
              src="https://user-images.githubusercontent.com/101616957/223223780-6bb0c2b7-a94d-400f-b393-78dda1731468.jpeg"
            />
          </div>
        </footer>
      </a>
    </div>
  );
}

export default App;
