"use client";
import React, { useEffect, useState } from "react";
import { FAQs } from "./constants";
import {
  FAQAccordion,
  FAQAnswer,
  FAQQuestion,
  FAQSConatiner,
  FAQSH3,
  SixthSectionContainer,
} from "./Sixth-section.styled";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SixthSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const content = (
    <SixthSectionContainer>
      <FAQSH3>Frequently Asked Questions</FAQSH3>
      <FAQSConatiner>
        {FAQs.map((faq, index) => (
          <FAQAccordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: "xx-large" }} />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <FAQQuestion variant="h6">{faq.question}</FAQQuestion>
            </AccordionSummary>
            <AccordionDetails>
              <FAQAnswer variant="body1">{faq.answer}</FAQAnswer>
            </AccordionDetails>
          </FAQAccordion>
        ))}
      </FAQSConatiner>
    </SixthSectionContainer>
  );

  return isDesktop ? <Container disableGutters sx={{ px: 0 
    ,width: "100%"
  }}>{content}</Container> : content;
}

export default SixthSection;
