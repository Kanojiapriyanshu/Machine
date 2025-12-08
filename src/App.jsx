// src/App.jsx
import React from "react";

import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Whatwedo from "./Sections/Whatwedo";
import Choose from "./Sections/Choose";
import Contact from "./Sections/Contact";
import Founder from "./Sections/Founder";
import Howwork from "./Sections/Howwork";
import Count from "./Sections/Count";
import Client from "./Sections/Client";
import Footer from "./Sections/Footer";
import Gallery from "./Sections/Gallery";
import Project from "./Sections/Project";
import Services from "./Sections/Services";
import ScrollTop from "./Sections/Scrolltotop"; // <-- added
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Whatwedo />
        <Choose />
        <Count />
        <Services />
        <Howwork />
        <Client />
        <Project />
        <Gallery />
        <Founder />
        <Contact />
        <Footer />

        {/* Floating arrow to top */}
        <ScrollTop />   {/* <--- added */}
      </main>
    </div>
  );
}

export default App;
