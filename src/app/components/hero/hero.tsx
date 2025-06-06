import React from 'react'
import "./hero.css";
import Image from 'next/image'


export default function Hero() {
  return (
    <div className='hero-cont' >
      <Image src="/logo.png" alt={''} width={300} height={300} />
      <h1 className='hero-h1'>
        <span className='hero-h1-span1'>Royal Flavors </span>
        <span className='hero-h1-span2'>Every Occasion</span>
      </h1>
      <p className='hero-p'>Delicious food and seamless service for
        <span className='hero-p-span1'> weddings, birthdays, and big events –</span>
        <span className='hero-p-span2'> made with love and hygiene</span></p>
      <button className='hero-but-book-a-evnt'>Book Your Event Now</button>
    </div>
  )
}
