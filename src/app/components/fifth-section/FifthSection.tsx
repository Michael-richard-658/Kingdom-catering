import React from 'react'
import './FifthSection.css'
import { StaticImageData } from 'next/image';
import women1 from "./Fifth-section-assets/women1.png"
import women2 from "./Fifth-section-assets/women2.png"
import man1 from "./Fifth-section-assets/man.png"
import reviewStar from "./Fifth-section-assets/review-star.png"
import { Card, CardMedia, Typography } from '@mui/material';




function FifthSection() {
    interface Review {
        name: string;
        profilePic: StaticImageData;
        date: string;
        star:StaticImageData
        review: string;
    }

    const reviews: Review[] = [
        {
            name:"Ava Harper",
            profilePic:women1,
            date:"2 months ago",
            star:reviewStar,
            review:"Kingdom Catering made our wedding day unforgettable! The food was exquisite, and the service was impeccable. Our guests raved about the variety and taste. Highly recommend!"
        },
        {
            name:"Liam Foster",
            profilePic:women2,
            date:"3 months ago",
            star:reviewStar,
            review:"We hired Kingdom Catering for our company's annual gala, and it was a huge success. The food was delicious, the presentation was beautiful, and the staff was professional and attentive. Will definitely use them again."
        },{
            name:"Chloe Bennett",
            profilePic:man1,
            date:"4 months ago",
            star:reviewStar,
            review:"For my daughter's birthday, Kingdom Catering provided a fantastic menu that both kids and adults enjoyed. The food was fresh, flavorful, and delivered right on time. Thank you for making the day so special!"
        },
    ]
  return (
    <div className='fifth-section-container'>
        <h3 className='cutomer-review-h3'>What Our Customers Say</h3>
        <div className='reviews-container'>
            {
                reviews.map((review, index) => {
                    return(
                        <Card key={index} sx={{
                            borderRadius: '10px',
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