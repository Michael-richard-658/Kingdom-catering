import React from 'react'
import './SecondSection.css'
import { cards } from './constants'

function SecondSection() {
    
  return (
    <div className='second-section-container'>
        <h2 className='second-h2'>Tired of Caterers That Disappoint?</h2>
        <div className='cards-cont'>
            {cards.map((card)=>{
                return(
                    <div key={card.id} className='card'>
                        <div className='card-info'>
                        <h3 className='card-question'>{card.question}</h3>
                        <p className='card-answer'>{card.answer}</p>
                        </div>
                        <img src={card.image.src} alt={card.question} className='card-image' />
                    </div>
                )
            })}

        </div>
       <button className='button-get-a-qoute'>Get a Qoute</button>
    </div>
  )
}

export default SecondSection