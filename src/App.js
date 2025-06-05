import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';


function App() {
  return (
    <Router>
  <Navbar />
  <Routes>
    <Route
      path="/"
      element={
        <>
          <div id="home">
            <Home />
            <AboutMe />
            <Education />
            <Experience />
            <Certifications />
          </div>
          <Projects />
          <Skills />
          <Contact />
        </>
      }
    />
  </Routes>
  <Footer />
</Router>

  );
}

export default App;
