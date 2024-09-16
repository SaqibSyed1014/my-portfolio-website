import "./styles/home.css";
import Introduction from "../components/pages/Introduction";
import Navbar from "../components/navbar";
import React from "react";
import BrandLines from "../components/pages/BrandLines";
import Footer from "../components/Footer";
import WorkPortfolio from "../components/pages/WorkPortfolio";

function Homepage() {
  return (
    <>
        <div className="relative bg-white z-10">
            <div className="grid grid-cols-12 gap-4 p-6">
                <Navbar/>
                <Introduction/>
            </div>

            <BrandLines/>
            <WorkPortfolio/>
        </div>
        <Footer />
    </>
  );
}

export default Homepage;
