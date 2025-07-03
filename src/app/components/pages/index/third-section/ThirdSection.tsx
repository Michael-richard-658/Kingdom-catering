"use client"
import React from 'react'
import {  CardContent } from '@mui/material';
import { cards } from './constants';
import { CardBodyS3,CardMediaS3, CardsContainerS3, CardTitleS3, CustomCardS3, QuestionH3S3, WhyChooseKingdomCateringSection } 
from './third.styled';
import { GetQouteButton } from '../second-section/second-section.styled';
import tempbiryaniJPG from "./thirdsectionassets/tempbiryanibg.jpeg"
import tempcrown from "./thirdsectionassets/tempcrown.jpg"


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
              <img src={tempbiryaniJPG.src} alt='biryani-bg'style={{
                width:"100%",
                height:'200px'
              }}/>
              <CardMediaS3
                image={card.image.src}                
              />
              <CardContent>
                <CardTitleS3 variant='h3' >{card.title}</CardTitleS3>
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