import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Portfolio from "./pages/portfolio";
import Feedback from "./pages/feedback";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      </ReactLenis>
    </>
  );
}

export default App;
