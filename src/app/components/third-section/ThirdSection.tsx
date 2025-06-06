import React from 'react'
import './ThirdSection.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { cards } from './constants';

function ThirdSection() {



  return (
    <div className='third-section-container'>
      <h3 className='y-kingdom-catering-q-h3' style={{
        padding: "16px"
      }}>Why Choose Kingdom Catering?</h3>
      <div className='third-section-cards-container'>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              className="third-section-card"
              sx={{
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                borderTopLeftRadius: "250px",
                borderTopRightRadius: "250px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                width: "45%",
                minHeight: 250
              }}
            >

              <CardMedia
                image={card.image.src}
                alt={card.title}
                component={"img"}
                sx={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  opacity: 1,
                  marginTop: -1
                }}
              />
              <CardContent>
                <Typography variant='h6' className='third-section-card-title' sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: 1
                }}>{card.title}</Typography>
                <Typography variant='body1' sx={{
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#666",
                  marginTop: 1,
                  fontWeight: "400",
                  lineHeight: 1.4
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