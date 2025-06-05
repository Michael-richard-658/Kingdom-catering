import React from 'react'
import './ForthSection.css'
import { StaticImageData } from 'next/image'
import weddingPNG from "./Fourthsectionassets/wedding.png"
import bdayPNG from "./Fourthsectionassets/bday.png"
import FestivePNG from "./Fourthsectionassets/festive.png"
import CorporatePNG from "./Fourthsectionassets/corporate-event.png"
import { Card, CardContent, CardMedia, Typography } from '@mui/material'



function ForthSection() {
    interface Card {
        image:StaticImageData,
        event:string,
        description:string
    }
    const cards: Card[] = [
        {
            image:weddingPNG,
            event:"Weddings",
            description:"Grand feasts for grand occasions."
        },
        {
            image:bdayPNG,
            event:"Birthdays",
            description:"Fun food kids and adults love."
        },
        {
            image:CorporatePNG,
            event:"Corporate Events",
            description:"Impress your guests, hassle-free."
        },
        {
            image:FestivePNG,
            event:"Festive Orders",
            description:"Celebrate festivals with flavour."
        },
    ]
  return (
    <div className='forth-section-container'>
        <h3 className='perfect-for-all-h3'>Perfect for All Your Special Moments</h3>
        <div className='cards-container'>
            {
                cards.map((card, index) => {
                    return(
                        <Card key={index}  className='card-s4' sx={{
                            borderRadius: '10px',
                            background:'white',
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)",

                        }}> 

                            <CardMedia 
                            component={"img"}
                            image={card.image.src}
                            alt={card.event}
                            sx={{
                                width: '173px',
                                marginTop:"1rem",
                                borderRadius: '16px',
                            }}
                            />
                            <CardContent>
                                <Typography variant='h6' sx={{
                                    fontWeight:400
                                }}>{card.event}</Typography>
                                <Typography variant='body1'sx={{
                                    color:"#99784D",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                }}>{card.description}</Typography>
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