import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Techno from "./components/techno/Techno";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Qualifications from "./components/qualifications/Qualifications";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";


const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        {/* <About /> */}
        <Qualifications />
        <Techno />
        <Skills />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App