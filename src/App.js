import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Homepage from "./pages/home";
import Portfolio from "./pages/portfolio";
import { ReactLenis } from 'lenis/react'

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <ReactLenis root>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/*<Route path="*" element={<NoPage />} />*/}
            </Routes>
          </BrowserRouter>
      </ReactLenis>
    </>
  );
}

export default App;
