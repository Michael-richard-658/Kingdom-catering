"use client"
import React from 'react'
import { FAQs } from './constants';
import { AccordionCenter, FAQAccordion, FAQAnswer,FAQQuestion,FAQSConatiner, FAQSH3, SixthSectionContainer } from './Sixth-section.styled';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SixthSection() {
    
    

    return (
        < SixthSectionContainer>
                <FAQSH3 >Frequently Asked Questions</FAQSH3>
                <AccordionCenter>
                    <FAQSConatiner >
                        {FAQs.map((faq, index) => (
                                <FAQAccordion key={index} >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ fontSize: "xx-large" }} />}
                                    aria-controls={`faq-content-${index}`}
                                    id={`faq-header-${index}`}
                                    >
                                    <FAQQuestion variant="h6" >
                                        {faq.question}
                                    </FAQQuestion>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <FAQAnswer variant="body1" >
                                        {faq.answer}
                                    </FAQAnswer>
                                    </AccordionDetails>
                                </FAQAccordion>
))}
                </FAQSConatiner>
                </AccordionCenter>
        </SixthSectionContainer>
    );
}

export default SixthSection;
