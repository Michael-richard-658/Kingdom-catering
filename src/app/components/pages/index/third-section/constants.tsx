"use client"
import React,{JSX} from 'react';
import { StaticImageData } from 'next/image';
import WideRangePNG from './thirdsectionassets/widerange.png';

interface Card {
  title: JSX.Element; 
  image: StaticImageData;
  caption: string;
}

export const cards: Card[] = [
  {
    title: <>GST & FSSAI certified for full trust</>,
    image: WideRangePNG,
    caption: 'Certified by GST & FSSAI to ensure complete trust and quality',
  },
  {
    title: <>Custom menus for <span style={{textWrap:"nowrap"}}>every occasion</span></>,
    image: WideRangePNG,
    caption: 'Personalized menus tailored to suit every event perfectly',
  },
  {
    title: <>Punctual delivery and professional service</>,
    image: WideRangePNG,
    caption: 'Timely delivery and professional service to ensure a seamless experience',
  },
  {
    title: (
      <>
        <span style={{textWrap:"nowrap"}}>Wide range:</span> 
        <span style={{ textWrap: 'wrap' }}>Regional, Continental,</span>
        <span style={{ textWrap: 'wrap' }}>Veg, Non-veg,</span>
      </>
    ),
    image: WideRangePNG,
    caption: 'A diverse selection of vegetarian, non-vegetarian, regional, and continental cuisines',
  },
  {
    title: <>Tasty, hot, fresh food – always</>,
    image: WideRangePNG,
    caption: 'Delicious, hot, and fresh food served at its best',
  },
];
