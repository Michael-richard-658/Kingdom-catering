"use client"

import React, { useEffect, useState } from 'react';
import { CardMedia, Container } from '@mui/material';
import { reviews } from './constants';
import {
  ReviewsContainer,
  ReviewsH3,
  ReviewsSectionContainer,
  CustomCardS5,
  ReviewProfileContainer,
  ReviewerName,
  ReviewTextContainer,
  ReviewDescription,
  ReviewDate,
  ReviewsConatiner
} from './fifth-section.styled';

function FifthSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // check once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Content = (
    <ReviewsSectionContainer>
      <ReviewsH3>What Our Customers Say</ReviewsH3>
      <ReviewsContainer>
        {reviews.map((review, index) => (
          <CustomCardS5 key={index}>
            <ReviewProfileContainer>
              <CardMedia
                component="img"
                image={review.profilePic.src}
                alt={review.name}
                sx={{
                  width: '60px',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                  paddingTop: '1rem',
                }}
              />
              <ReviewTextContainer>
                <ReviewerName variant="h6">{review.name}</ReviewerName>
                <ReviewDate variant="subtitle1">{review.date}</ReviewDate>
              </ReviewTextContainer>
            </ReviewProfileContainer>

            <CardMedia
              component="img"
              image={review.star.src}
              alt="star"
              sx={{
                width: '400px',
                marginLeft: '1rem',
                marginTop: '0.5rem',
              }}
            />

            <ReviewDescription
              variant="body1"
              sx={{
                margin: '1rem 1rem',
                color: '#1C170D',
                fontWeight: 500,
                paddingBottom: '1rem',
              }}
            >
              {review.review}
            </ReviewDescription>
          </CustomCardS5>
        ))}
      </ReviewsContainer>
    </ReviewsSectionContainer>
  );

  return isDesktop ? <ReviewsConatiner>{Content}</ReviewsConatiner> : Content;   
}

export default FifthSection;
