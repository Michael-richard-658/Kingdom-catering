import React from 'react'
import './ThirdSection.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { cards } from './constants';

function ThirdSection() {
  
 

  return (
    <div className='third-section-container'>
        <h3 className='y-kingdom-catering-q-h3'>Why Choose Kingdom Catering?</h3>
        <div className='third-section-cards-container'>
            {cards.map((card, index) => {
              return (
                <Card
                    key={index}
                    className="third-section-card"
                    sx={{
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                    borderTopLeftRadius: "250px",
                    borderTopRightRadius: "250px",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)",
                    overflow: "hidden",
                    width: "300px",
                  }}

                  >

                  <CardMedia 
                    image={card.image.src}
                    alt={card.title}
                    component={"img"}
                    sx={{
                      width:"230px",
                      height:"230px",
                      borderRadius:"50%",
                      marginTop:"1rem",
                      marginBottom:"1rem",
                    }}
                  />
                  <CardContent>
                    <Typography variant='h6' className='third-section-card-title' sx={{
                      textAlign:"center",
                      fontSize:"1.5rem",
                      fontWeight:"600",
                    }}>{card.title}</Typography>
                    <Typography variant='body1' sx={{
                      textAlign:"center",
                      fontSize:"1.2rem",
                      marginTop:"1rem",
                      color:"#666",
                      fontWeight:"700",
                    }}>{card.caption}</Typography>
                  </CardContent>

                </Card>
              )
            })}
        </div>
        
            <button className='button-get-a-qoute'>Get a Qoute</button>
        </div>
  )
}

export default ThirdSection