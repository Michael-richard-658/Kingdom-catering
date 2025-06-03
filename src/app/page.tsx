import React from "react";
import Hero from "./components/hero/hero";
import "./global.css";
import SecondSection from "./components/second-section/SecondSection";


export default function Home() {
  return (
    <div className="components-container">
      <Hero />
      <SecondSection />
    </div>
    
  );
}
