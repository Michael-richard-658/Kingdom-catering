"use client";
import React, { useEffect, useState } from "react";
import { CardContent, Container } from "@mui/material";
import { cards } from "./constants";
import {
  CardBGImage,
  CardBodyS3,
  CardMediaS3,
  CardsContainerS3,
  CardTitleS3,
  CustomCardS3,
  QuestionH3S3,
  WhyChooseKingdomCateringSection,
} from "./third.styled";
import { GetQouteButton } from "../second-section/second-section.styled";
import tempbiryaniJPG from "./thirdsectionassets/tempbiryanibg.jpeg";

function ThirdSection() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 800);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const Content = (
    <WhyChooseKingdomCateringSection>
      <QuestionH3S3>
        <span style={{ textWrap: "nowrap" }}>Why Choose Kingdom</span>{" "}
        Catering?
      </QuestionH3S3>

      <CardsContainerS3>
        {cards.map((card, index) => (
          <CustomCardS3 key={index}>
            <CardBGImage src={tempbiryaniJPG.src} />
             <CardMediaS3 image={card.image.src} /> 
            <CardContent>
              <CardTitleS3 variant="h3">{card.title}</CardTitleS3>
              <CardBodyS3 variant="body1">{card.caption}</CardBodyS3>
            </CardContent>
          </CustomCardS3>
        ))}
      </CardsContainerS3>

      <GetQouteButton>Get a Qoute</GetQouteButton>
    </WhyChooseKingdomCateringSection>
  );

  return isDesktop ? <Container>{Content}</Container> : Content;
}

export default ThirdSection;
