import React from 'react'
import './FifthSection.css'
import { Card, CardMedia, Typography } from '@mui/material';
import {reviews} from './constants'



function FifthSection() {
    
  return (
    <div className='fifth-section-container'>
        <h3 className='cutomer-review-h3'>What Our Customers Say</h3>
        <div className='reviews-container'>
            {
                reviews.map((review, index) => {
                    return(
                        <Card key={index} sx={{
                            borderRadius: '12px',
                            boxShadow:" 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)"
                        }}>
                            <div className='review-profile-container'>
                            <CardMedia
                                component={"img"}
                                image={review.profilePic.src}
                                alt={review.name}
                                sx={{
                                    width: '60px',
                                    marginLeft: '1rem',
                                    marginRight: '1rem',
                                    paddingTop:'1rem'
                                }}
                                />
                                <div className='review-text-container'>
                            <Typography variant='h6'sx={{
                                textWrap: 'nowrap',
                                fontWeight: 500,
                            }}>{review.name}</Typography>
                            <Typography variant='subtitle1' className='review-date' sx={
                                {
                                    color:"#99784D",
                                    fontWeight: 400,
                                    fontSize:"16px",
                                }
                            }>{review.date} </Typography>
                            </div>
                            </div>
                            <CardMedia
                                component={"img"}
                                image={review.star.src}
                                alt="star"
                                sx={{
                                    width: '400px',
                                    marginLeft: '1rem',
                                    marginTop: '0.5rem',
                                }}
                                />
                                <Typography variant='body1' sx={{
                                    margin: '1rem 1rem',
                                    color: "#1C170D",
                                    fontWeight: 500,
                                    paddingBottom: '1rem',
                                }}>
                                {review.review}
                                </Typography>
                        </Card>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FifthSection