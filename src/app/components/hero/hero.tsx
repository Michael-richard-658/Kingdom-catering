import React from 'react'
import "./hero.css";
import SecondSection from './SecondSection';


export default function Hero() {
  return (
    <div className='hero-cont' >
        <h1 className='hero-h1'>Royal Flavors Every Occasion</h1>    
        <p className='hero-p'>Delicious food and seamless service for weddings, birthdays, and big events – made with love and hygiene.</p>
        <button className='hero-but-book-a-evnt'>Book Your Event Now</button>
        <SecondSection />
         <button className='button-get-a-qoute'>Get a Free Qoute </button>
    </div>
  )
}
