"use client"

import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material';
import {reviews} from './constants'
import { ReviewsContainer, ReviewsH3, ReviewsSectionContainer,CustomCardS5, ReviewProfileContainer, ReviewerName, ReviewTextContainer, ReviewDescription, ReviewDate } from './fifth-section.styled';



function FifthSection() {
    
  return (
    <ReviewsSectionContainer >
        <ReviewsH3 >What Our Customers Say</ReviewsH3>
        <ReviewsContainer >
            {
                reviews.map((review, index) => {
                    return(
                        <CustomCardS5 key={index} >
                            <ReviewProfileContainer >
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
                                <ReviewTextContainer >
                            <ReviewerName variant='h6'>
                                {review.name}
                                </ReviewerName>
                            <ReviewDate variant='subtitle1' >
                                {review.date} 
                            </ReviewDate>
                            </ReviewTextContainer>
                            </ReviewProfileContainer>
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
                                <ReviewDescription variant='body1' sx={{
                                    margin: '1rem 1rem',
                                    color: "#1C170D",
                                    fontWeight: 500,
                                    paddingBottom: '1rem',
                                }}>
                                {review.review}
                                </ReviewDescription>
                        </CustomCardS5>
                    )
                })
            }
        </ReviewsContainer>
    </ReviewsSectionContainer>
  )
}

export default FifthSection