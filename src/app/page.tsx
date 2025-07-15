import React from "react";
import Hero from "./components/pages/index/hero/hero";
import SecondSection from "./components/pages/index/second-section/SecondSection"
import ThirdSection from  "./components/pages/index/third-section/ThirdSection"
import ForthSection from  "./components/pages/index/fourth-section/ForthSection"
import FifthSection from "./components/pages/index/fifth-section/FifthSection"
import SixthSection from  "./components/pages/index//sixth-section/SixthSection"
import SeventhSection from "./components/pages/index/seventh-section/SeventhSection"
import Footer from    "./components/pages/index/footer/footer"
import { ComponentsContainer, StaticBackGround } from "./styled-global";

export default function Home() {
  //change bg color to white of cards
  return (
    
    <>
    
      <StaticBackGround />
      <ComponentsContainer >
        <Hero />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <Footer />
      </ComponentsContainer>
    </>
  );
}
