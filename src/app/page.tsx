import React from "react";
import Hero from "./components/pages/index/hero/hero";
import "./global.css";
import SecondSection from "./components/pages/index/second-section/SecondSection"
import ThirdSection from  "./components/pages/index/third-section/ThirdSection"
import ForthSection from  "./components/pages/index/fourth-section/ForthSection"
import FifthSection from "./components/pages/index/fifth-section/FifthSection"
import SixthSection from  "./components/pages/index//sixth-section/SixthSection"
import SeventhSection from "./components/pages/index/seventh-section/SeventhSection"
import Footer from    "./components/pages/index/footer/footer"

export default function Home() {
  return (
    <>
      <div className="static-background" />
      <div className="components-container">
        <Hero />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <Footer />
      </div>
    </>
  );
}
