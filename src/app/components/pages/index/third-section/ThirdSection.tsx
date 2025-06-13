"use client"
import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { cards } from './constants';
import { CardBodyS3,CardMediaS3, CardsContainerS3, CardTitleS3, CustomCardS3, QuestionH3S3, WhyChooseKingdomCateringSection } from './thirdsectionassets/third.styled';
import { GetQouteButton } from '../second-section/second-section.styled';



function ThirdSection() {



  return (
    <WhyChooseKingdomCateringSection >
      <QuestionH3S3 ><span style={{textWrap:'nowrap'}}>Why Choose Kingdom</span> Catering?</QuestionH3S3>
      <CardsContainerS3 >
        {cards.map((card, index) => {
          return (
            <CustomCardS3
              key={index}
              
            >

              <CardMediaS3
                image={card.image.src}                
              />
              <CardContent>
                <CardTitleS3 variant='h6' >{card.title}</CardTitleS3>
                <CardBodyS3 variant='body1'>{card.caption}</CardBodyS3>
              </CardContent>

            </CustomCardS3>
          )
        })}
      </CardsContainerS3>

      <GetQouteButton >Get a Qoute</GetQouteButton>
    </WhyChooseKingdomCateringSection>
  )
}

export default ThirdSection