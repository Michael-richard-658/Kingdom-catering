import { Accordion,  Typography } from "@mui/material";
import styled from "styled-components";
import {desktop, mobile} from "@/app/utils/media"


export const SixthSectionContainer = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
}
    ${desktop}{
    margin-top: 32px;
}
`

export const FAQSH3 = styled.h3`
    ${mobile}{
    font-weight: 700;
    color: #1C170D;
    font-size: 25px;
    width: 96%;
    margin-left: 16px;
}
    ${desktop}{
    font-weight: 700;
    color: #1C170D;
    font-size: 25px;
    width: 100%;
    margin-left: 5.5%;
}
`

export const FAQSConatiner = styled.div`
    ${mobile}{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    ${desktop}{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`/*

export const FAQSCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen"
})<{ isOpen: boolean }>`
    ${mobile}{
    width: 96%;
    height: ${({ isOpen }) => (isOpen ? "180px " : "65px")};
    transition: all 0.3s ease-in-out;
    display: grid;
    grid-template-rows: 0.1fr auto;
    margin-bottom: 1rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
}

`

export const FAQInfo = styled.div`
    ${mobile}{
    display: flex;
    flex-direction: row;
    align-items: center;
}
`
/*
export const FAQQuestion = styled(Typography)`
    ${mobile}{
    margin-left:1rem;
    text-wrap:nowrap;
}
`
*//*
export const FAQIcon = styled(IconButton).withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen"
})<{ isOpen: boolean }>`
    ${mobile}{
  min-width: unset;
  padding: 0;
  height: 65px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-top: 2px;
  margin-left: auto;
  margin-right: 1rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(270deg)" : "rotate(90deg)")};
  transition: transform 0.3s ease;
  color: black;
}
`;*/

/*
export const FAQAnswer = styled(Typography)`
    ${mobile}{
    margin-left:1rem;
    color:#99784D;
}
`*/

export const FAQAccordion = styled(Accordion)`
    ${mobile}{
    width: 96%;
    margin-bottom: 16px  !important;
    border-radius: 12px !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    border:none;
    
     &::before {
    display: none;
  }
}
       ${desktop}{
    width: 100%;
    margin-bottom: 16px  !important;
    border-radius: 12px !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    border:none;
    
     &::before {
    display: none;
  }
}
     
`

export const FAQQuestion  = styled(Typography)`
    ${mobile}{
    color:#1C170D;
    font-weight:500   
}
`

export const FAQAnswer = styled(Typography)`
    ${mobile}{
    color:#99784D;
    font-weight:400
}
`
export const AccordionCenter = styled.div`
    ${desktop}{
       display: flex;
    flex-direction: column;
    align-items: center;
 }
    `