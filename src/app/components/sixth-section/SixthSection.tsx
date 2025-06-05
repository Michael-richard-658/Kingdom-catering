"use client"
import React, { useState } from 'react'
import './SixthSection.css'
import { Button, Card,  Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SixthSection() {
    interface FAQ {
        question: string,
        answer: string
    }

    const FAQs: FAQ[] = [
        {
            question: "Do you deliver to my area?",
            answer: "Yes, we deliver to most areas within the city. Please check our delivery radius on our website or contact us for more details."
        },
        {
            question: "Can I customize the menu?",
            answer: "Yes, you can fully customize the menu based on your event needs. We offer veg, non-veg, regional, and continental options."
        },
        {
            question: "Do you serve Jain or Vegan food?",
            answer: "Yes, we offer both Jain and Vegan food options. Our chefs ensure meals meet strict dietary preferences without compromising on taste."
        },
        {
            question: "How early should I book?",
            answer: "We recommend booking at least 1–2 weeks in advance. This ensures availability and allows us to plan your event perfectly."
        },
    ];

    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    function toggleAnswer(index: number) {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    }

    return (
        <div className='sixth-section-container'>
            <h3 className='FAQ-h3'>Frequently Asked Questions</h3>
            <div className='faqs-container'>
                {
                    FAQs.map((faq, index) => {
                        const isOpen = openIndexes.includes(index);
                        return (
                            <Card
                                key={index}
                                sx={{
                                    width: '95vw',
                                    height: isOpen ? "170px" : '65px',
                                    transition: "all 0.3s ease-in-out",
                                    display: 'grid',
                                    gridTemplateRows: '.1fr auto',
                                    marginBottom: '1rem',
                                    backgroundColor:'white',
                                    borderRadius: '10px',
                                    boxShadow:" 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)"

                                }}
                            >
                                <div className='faq-info' style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Typography variant='h6' sx={{
                                        marginLeft: '1rem',
                                        textWrap: 'nowrap',
                                    }}>{faq.question}</Typography>

                                    <Button
                                        onClick={() => toggleAnswer(index)}
                                        sx={{
                                            minWidth: 'unset',
                                            padding: 0,
                                            height: '65px',
                                            width: '30px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '2px',
                                            marginLeft: 'auto',
                                            marginRight: '1rem',
                                            transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
                                            transition: 'transform 0.3s ease',
                                            color:"black"
                                        }}
                                    >
                                        <ArrowForwardIosIcon fontSize="small" />
                                    </Button>
                                </div>

                                {isOpen && (
                                    <Typography variant='body1' sx={{
                                        marginLeft: '1rem',
                                        color: '#99784D',
                                        marginBottom: '2rem',
                                    }}>{faq.answer}</Typography>
                                )}
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SixthSection;
