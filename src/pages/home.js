import "./styles/home.css";
import Introduction from "../components/pages/Introduction";
import Navbar from "../components/Navbar";
import React from "react";
import BrandLines from "../components/pages/BrandLines";
import Footer from "../components/Footer";
import WorkPortfolio from "../components/pages/WorkPortfolio";
import PagePreloader from "../components/PagePreloader";

function Homepage() {
  return (
    <>
        <PagePreloader />
        <main className="relative bg-white z-10">
            <div className="grid grid-cols-12 gap-4 p-6">
                <Navbar title="Saqib Syed" />
                <Introduction/>
            </div>

            <BrandLines/>
            <WorkPortfolio/>
        </main>
        <Footer />
    </>
  );
}

export default Homepage;
