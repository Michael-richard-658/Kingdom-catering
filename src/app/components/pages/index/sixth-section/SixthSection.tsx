"use client"
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FAQs } from './constants';
import { FAQAnswer, FAQIcon, FAQInfo, FAQQuestion, FAQSCard, FAQSConatiner, FAQSH3, SixthSectionContainer } from './Sixth-section.styled';


function SixthSection() {
    
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    function toggleAnswer(index: number) {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    }

    return (
        < SixthSectionContainer>
            <FAQSH3 >Frequently Asked Questions</FAQSH3>
            <FAQSConatiner >
                {
                    FAQs.map((faq, index) => {
                        const isOpen = openIndexes.includes(index);
                        return (
                            <FAQSCard
                                isOpen={isOpen}
                                key={index}   
                            >
                                <FAQInfo>
                                    <FAQQuestion variant='h6' >{faq.question}</FAQQuestion>

                                    <FAQIcon
                                        onClick={() => toggleAnswer(index)}
                                        isOpen={isOpen}
                                        disableRipple 
                                    >
                                        <ArrowForwardIosIcon fontSize="small"   />
                                    </FAQIcon>
                                </FAQInfo>

                                {isOpen && (
                                    <FAQAnswer variant='body1'>{faq.answer}</FAQAnswer>
                                )}
                            </FAQSCard>
                        );
                    })
                }
            </FAQSConatiner>
        </SixthSectionContainer>
    );
}

export default SixthSection;
