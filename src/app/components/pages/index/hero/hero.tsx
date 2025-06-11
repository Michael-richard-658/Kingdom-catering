"use client"

import React from 'react'
import Image from 'next/image'
import { HeroButton, HeroContainer, HeroDescription, HeroTitle, SpanWrapper } from './hero.styled';

export default function Hero() {
  return (
    <HeroContainer>
      <Image src="/logo.png" alt={''} width={300} height={300} />
      <HeroTitle>
      <span>Royal  Flavors</span><br />
      <span>Every  Occasion</span>
</HeroTitle>

      <HeroDescription >
    <SpanWrapper >
      Delicious food and seamless service 
    </SpanWrapper>
        <SpanWrapper > for weddings, birthdays, and big </SpanWrapper>
        <SpanWrapper>events – made with love and hygiene</SpanWrapper></HeroDescription>
      <HeroButton >Book Your Event Now</HeroButton>
   </HeroContainer>
  )
}
