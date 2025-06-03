import React from 'react'
import late from "@/app/assets/Depth 4, Frame 1.png"
import bland from "@/app/assets/Depth 4, Frame 1 (1).png"
import hygiene from "@/app/assets/Depth 4, Frame 1 (2).png"
import type { StaticImageData } from 'next/image'
import './SecondSection.css'

function SecondSection() {
    interface Cards {
        id: number;
        question: string;
        answer: string;
        image:  StaticImageData
    }
    
    
    const cards: Cards[] = [{
                id: 1,
                question: "Food arriving late?",
                answer: "Not anymore – Kingdom Catering brings royalty to your table!",
                image: late
        },{
                id: 2,
                question:"Bland or cold dishes?",
                answer:"Not anymore – Kingdom Catering brings royalty to your table!",
                image: bland
        },{
                id: 3,
                question:"Poor hygiene or unlicensed service?",
                answer:"Not anymore – Kingdom Catering brings royalty to your table!",
                image: hygiene
        }]
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