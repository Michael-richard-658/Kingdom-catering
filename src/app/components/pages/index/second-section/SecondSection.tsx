"use client"
import React from 'react'
import { cards } from './constants'
import { TiredOfCaterersSection, TitleH2,CardsContainer, CustomCard, InformationConatiner, GetQouteButton, Question, Answer} from './second-section.styled'

function SecondSection() {
    
  return (
    <TiredOfCaterersSection >
        <TitleH2 >Tired of Caterers That Disappoint?</TitleH2>
        <CardsContainer >
            {cards.map((card)=>{
                return(
                    <CustomCard key={card.id}>
                        <InformationConatiner >
                      <Question>
                            {card.question}
                        </Question>      
                        <Answer>
                            {card.answer}
                        </Answer>
                        </InformationConatiner>
                       <img style={{
                        minWidth:"119px",
                        height:"87px",
                        marginRight:"2.5%"
                       }} 
                        src={card.image.src}/> 
                    </CustomCard>
                )
            })}

        </CardsContainer>
       <GetQouteButton >Get a Qoute</GetQouteButton>
    </TiredOfCaterersSection>
  )
}

export default SecondSection