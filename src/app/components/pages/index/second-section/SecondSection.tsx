"use client";
import React, { useEffect, useState } from "react";
import { cards } from "./constants";

import {
  TiredOfCaterersSection,
  TitleH2,
  CardsContainer,
  CustomCard,
  InformationConatiner,
  GetQouteButton,
  Question,
  Answer,
  CenterContent,
} from "./second-section.styled";
import { Container } from "@mui/material";

function SecondSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check width on client after mount
    const checkWidth = () => setIsDesktop(window.innerWidth > 800);
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const Content = (
    <TiredOfCaterersSection>
      <TitleH2>Tired of Caterers That Disappoint?</TitleH2>
      <CenterContent>
      <CardsContainer>
        {cards.map((card) => (
          <CustomCard key={card.id}>
            <InformationConatiner>
              <Question>{card.question}</Question>
              <Answer>{card.answer}</Answer>
            </InformationConatiner>
            <img
              style={{
                minWidth: "119px",
                height: "87px",
                marginRight: "2.5%",
                marginLeft: "2%",
              }}
              src={card.image.src}
              alt={card.question}
            />
          </CustomCard>
        ))}
      </CardsContainer>
      <GetQouteButton>Get a Quote</GetQouteButton>
      </CenterContent>
    </TiredOfCaterersSection>
  );

  return isDesktop ? <Container>{Content}</Container> : Content;
}

export default SecondSection;
