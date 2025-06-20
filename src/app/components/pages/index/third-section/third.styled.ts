import { Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import {mobile} from "@/app/utils/media"


export const WhyChooseKingdomCateringSection = styled.div`
 ${mobile}{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
` 

export const QuestionH3S3 = styled.h3`
${mobile}{
    padding:16px;
    font-weight: 700;
    font-size: 27px;
    color: #1C170D;
    margin-left: 12px;
    margin-right: 20%;
    margin-bottom: 8px;
}
`

export const CardsContainerS3 = styled.div`
${mobile}{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 8px;
    gap:4%
}
` 

export const CustomCardS3 = styled(Card)`
${mobile}{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2rem;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    border-top-left-radius: 250px;
    border-top-right-radius: 250px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.45);
    width: 45%;
    height: 280px;
    margin-bottom:14px
}
`
export const CardMediaS3 = styled(CardMedia)`
${mobile}{
    width: 120px;
    min-height: 120px;
    border-radius: 50%;
    opacity: 1;
    margin-top: -4px;
}
`
export const CardTitleS3 = styled(Typography)`
${mobile}{
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
}
`

export const CardBodyS3 = styled(Typography)`
${mobile}{
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 12px;
  font-weight: 400;
  line-height: 1.4;
  font-weight:500;
  color: rgb(155, 155, 155);
}
`

