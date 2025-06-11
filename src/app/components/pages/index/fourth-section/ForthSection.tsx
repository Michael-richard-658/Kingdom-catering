"use client"
import React from 'react'
import './ForthSection.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { cards } from './constants'

function ForthSection() {

    return (
        <div className='forth-section-container'>
            <h3 className='perfect-for-all-h3'>Perfect for All Your Special Moments</h3>
            <div className='cards-container'>
                {
                    cards.map((card, index) => {
                        return (
                            <Card key={index} className='card-s4' sx={{
                                borderRadius: '10px',
                                background: 'white',
                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)",

                            }}>


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
                                    <Typography variant='h6' sx={{
                                        fontWeight: 600,
                                        fontSize:"17px",
                                        textWrap:"nowrap",
                                        margin:' 4px 4px'
                                    }}>
                                        {card.event}
                                    </Typography>
                                    <Typography variant='body1' sx={{
                                        color: "#99784D",
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        margin:"4px 4px",
                                        textAlign:"start"
                                    }}>
                                        {card.description}
                                        </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ForthSection