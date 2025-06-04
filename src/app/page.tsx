import React from "react";
import Hero from "./components/hero/hero";
import "./global.css";
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third-section/ThirdSection";


export default function Home() {
  return (
    <div className="components-container">
      <Hero />
      <SecondSection />
      <ThirdSection />
    </div>
    
  );
}
