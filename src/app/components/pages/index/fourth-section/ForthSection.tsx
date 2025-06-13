"use client"    
import React from 'react'
import {  CardContent, CardMedia, Typography } from '@mui/material'
import { cards } from './constants'
import { CardsConatinerS4, CustomCardS4, EventDescription, EventTitle, PerfectForAllH3, PerfectForAllMomentsContainer } from './forth-section.styled'

function ForthSection() {

    return (
        <PerfectForAllMomentsContainer >
            <PerfectForAllH3 >
                Perfect for All Your Special Moments
                </PerfectForAllH3>
            <CardsConatinerS4 >
                {
                    cards.map((card, index) => {
                        return (
                            <CustomCardS4 key={index} >


                                <CardContent>
                                    <CardMedia
                                        component={"img"}
                                        image={card.image.src}
                                        alt={card.event}
                                        sx={{
                                            width: '100%',
                                            borderRadius: '16px',
                                        }}
                                    />
                                    <EventTitle variant='h6' >
                                        {card.event}
                                    </EventTitle>
                                    <EventDescription
                                    variant='body1' >
                                        {card.description}
                                        </EventDescription>
                                </CardContent>
                            </CustomCardS4>
                        )
                    })
                }
            </CardsConatinerS4>
        </PerfectForAllMomentsContainer>
    )
}

export default ForthSection