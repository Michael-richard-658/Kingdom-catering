"use client";
import React, { useEffect, useState } from "react";
import { CardContent, CardMedia } from "@mui/material";
import { cards } from "./constants";
import {
  CardsConatinerS4,
  CustomCardS4,
  EventTitle,
  PerfectForAllH3,
  PerfectForAllMomentsContainer,
  EventDescription,
} from "./forth-section.styled";

function ForthSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Define the function to check width
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Run once on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PerfectForAllMomentsContainer>
      <PerfectForAllH3>Perfect for All Your Special Moments</PerfectForAllH3>
      <CardsConatinerS4>
        {cards.map((card, index) => (
          <CustomCardS4 key={index}>
            <CardContent>
              <CardMedia
                component="img"
                image={card.image.src}
                alt={card.event}
                sx={{
                  width: isDesktop ? "10%" : "100%",
                  borderRadius: "16px",
                }}
              />
              <EventTitle variant="h6">{card.event}</EventTitle>
              <EventDescription variant="body1">
                {card.description}
              </EventDescription>
            </CardContent>
          </CustomCardS4>
        ))}
      </CardsConatinerS4>
    </PerfectForAllMomentsContainer>
  );
}

export default ForthSection;
